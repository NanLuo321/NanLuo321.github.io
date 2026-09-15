/* OBS Studio Web 版 - 主逻辑 v2
 * 录屏基于 getDisplayMedia, 录音基于 getUserMedia, 混音器用 Web Audio API
 * 支持: 来源拖拽缩放、配置持久化、桌面捕获、录制导出
 */

const $ = (id) => document.getElementById(id);

const ui = {
    record: $("obs-record"),
    pause: $("obs-pause"),
    stop: $("obs-stop"),
    state: $("obs-state"),
    time: $("obs-time"),
    size: $("obs-size"),
    fps: $("obs-fps"),
    quality: $("obs-quality"),
    sceneList: $("obs-scene-list"),
    addScene: $("obs-add-scene"),
    delScene: $("obs-del-scene"),
    sourceList: $("obs-source-list"),
    addSource: $("obs-add-source"),
    delSource: $("obs-del-source"),
    preview: $("obs-preview"),
    previewCanvas: $("obs-preview-canvas"),
    overlay: $("obs-overlay"),
    recIndicator: $("obs-rec-indicator"),
    cpu: $("obs-cpu"),
    res: $("obs-res"),
    dropped: $("obs-dropped"),
    mixer: $("obs-mixer"),
    sourceModal: $("obs-source-modal"),
    sourceCancel: $("obs-source-cancel"),
    settings: $("obs-settings"),
    settingsModal: $("obs-settings-modal"),
    settingsCancel: $("obs-settings-cancel"),
    setSource: $("obs-set-source"),
    setFps: $("obs-set-fps"),
    setMirror: $("obs-set-mirror"),
    setSysAudio: $("obs-set-sys-audio"),
    setMic: $("obs-set-mic"),
    setExcludeObs: $("obs-set-exclude-obs"),
};

// 弹窗显隐
const showModal = (m) => { if (m) m.classList.remove("obs-hidden"); };
const hideModal = (m) => { if (m) m.classList.add("obs-hidden"); };

const STORAGE_KEY = "obs_web_config_v1";
const BASE_W = 1280;
const BASE_H = 720;

const state = {
    sources: [],
    activeSourceId: null,
    activeScene: 0,
    scenes: [{ id: 0, name: "场景 1" }],
    recording: false,
    paused: false,
    recorder: null,
    recCanvas: null,
    recCtx: null,
    drawTimer: null,
    chunks: [],
    recStartTime: 0,
    totalPaused: 0,
    pausedAt: 0,
    fpsCount: 0,
    fpsLastT: 0,
    rafId: null,
    bitrate: 2_000_000,
    canvasW: BASE_W,
    canvasH: BASE_H,
};

const TYPE_NAME = {
    desktop: "🪟 桌面",
    screen: "🖥 屏幕",
    window: "📦 窗口",
    tab: "🌐 标签页",
    camera: "📷 摄像头",
    mic: "🎤 麦克风",
};

// ===== 音频系统 =====
let audioCtx = null;
let masterGain = null;
let masterAnalyser = null;
let monitorGain = null;
try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) {
        audioCtx = new Ctx();
        masterGain = audioCtx.createGain();
        masterAnalyser = audioCtx.createAnalyser();
        masterAnalyser.fftSize = 256;
        monitorGain = audioCtx.createGain();
        monitorGain.gain.value = 0; // 默认监听静音
        masterGain.connect(masterAnalyser);
        masterAnalyser.connect(monitorGain);
        monitorGain.connect(audioCtx.destination);
    }
} catch (e) {
    console.warn("Web Audio 初始化失败:", e);
}

const attachAudioGraph = (src) => {
    if (!src.isAudio || !audioCtx) return;
    try {
        const sNode = audioCtx.createMediaStreamSource(src.stream);
        const gNode = audioCtx.createGain();
        gNode.gain.value = src.muted ? 0 : src.volume;
        const pNode = audioCtx.createStereoPanner();
        pNode.pan.value = 0;
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        sNode.connect(gNode);
        gNode.connect(pNode);
        pNode.connect(analyser);
        analyser.connect(masterGain);
        src.sourceNode = sNode;
        src.gainNode = gNode;
        src.panner = pNode;
        src.analyser = analyser;
    } catch (e) {
        console.warn("音频图失败", e);
    }
};

// ===== 来源管理 =====
let nextSourceId = 1;

const addSource = (type, name, stream, opts = {}) => {
    const isVideo = type !== "mic";
    const isAudio = type === "mic" || (type !== "camera" && type !== "desktop" && stream.getAudioTracks().length > 0);

    // 计算初始位置和大小（居中，80% 宽度）
    const initW = opts.width || Math.floor(BASE_W * 0.8);
    const initH = opts.height || Math.floor(BASE_H * 0.8);
    const initX = opts.x != null ? opts.x : Math.floor((BASE_W - initW) / 2);
    const initY = opts.y != null ? opts.y : Math.floor((BASE_H - initH) / 2);

    const src = {
        id: nextSourceId++,
        type,
        name: name || `${TYPE_NAME[type]?.split(" ")[0] || "源"} ${state.sources.length + 1}`,
        stream,
        enabled: true,
        muted: type === "mic" ? false : true,
        volume: 0.8,
        gainNode: null,
        analyser: null,
        sourceNode: null,
        isVideo,
        isAudio,
        videoElement: null,
        // 位置和大小（基于画布坐标系 1280x720）
        x: initX,
        y: initY,
        width: initW,
        height: initH,
        zIndex: state.sources.length,
    };
    state.sources.push(src);
    if (isVideo) attachVideoToPreview(src);
    if (isAudio) attachAudioGraph(src);
    state.activeSourceId = src.id;
    renderSources();
    renderMixer();
    updatePreviewOverlay();
    saveConfig();
    return src;
};

const removeSource = (id) => {
    const idx = state.sources.findIndex((s) => s.id === id);
    if (idx < 0) return;
    const s = state.sources[idx];
    try {
        if (s.stream && s.stream._desktopStop) s.stream._desktopStop();
        s.stream.getTracks().forEach((t) => t.stop());
    } catch (e) { /* noop */ }
    try { if (s.sourceNode) s.sourceNode.disconnect(); } catch (e) {}
    try { if (s.gainNode) s.gainNode.disconnect(); } catch (e) {}
    if (s.videoElement) s.videoElement.remove();
    state.sources.splice(idx, 1);
    if (state.activeSourceId === id) state.activeSourceId = null;
    renderSources();
    renderMixer();
    updatePreviewOverlay();
    saveConfig();
};

const updateSourceEnabled = (id, enabled) => {
    const s = state.sources.find((x) => x.id === id);
    if (!s) return;
    s.enabled = enabled;
    try { s.stream.getTracks().forEach((t) => { t.enabled = enabled; }); } catch (e) {}
    if (s.videoElement) s.videoElement.style.display = enabled ? "" : "none";
    renderSources();
    updatePreviewOverlay();
    saveConfig();
};

// ===== 预览 + 拖拽缩放 =====
let previewScale = 1;

const updatePreviewScale = () => {
    if (!ui.preview || !ui.previewCanvas) return;
    const rect = ui.preview.getBoundingClientRect();
    if (rect.width < 10 || rect.height < 10) return;

    // 等比缩放画布到容器内
    const scaleX = rect.width / BASE_W;
    const scaleY = rect.height / BASE_H;
    previewScale = Math.min(scaleX, scaleY);

    ui.previewCanvas.style.transform = `scale(${previewScale})`;
    // 居中
    const offsetX = (rect.width - BASE_W * previewScale) / 2;
    const offsetY = (rect.height - BASE_H * previewScale) / 2;
    ui.previewCanvas.style.left = offsetX + "px";
    ui.previewCanvas.style.top = offsetY + "px";
};

// 监听窗口大小变化
if (window.ResizeObserver && ui.preview) {
    new ResizeObserver(updatePreviewScale).observe(ui.preview);
}
window.addEventListener("resize", updatePreviewScale);

const attachVideoToPreview = (src) => {
    if (!src.isVideo || !ui.previewCanvas) return;
    const wrap = document.createElement("div");
    wrap.className = "obs-src-wrap";
    wrap.dataset.sourceId = src.id;
    wrap.style.cssText = `
        position:absolute;
        left:${src.x}px;top:${src.y}px;
        width:${src.width}px;height:${src.height}px;
        z-index:${src.zIndex + 10};
        cursor:move;
        user-select:none;
    `;

    const v = document.createElement("video");
    v.srcObject = src.stream;
    v.autoplay = true;
    v.muted = true;
    v.playsInline = true;
    v.style.cssText = "width:100%;height:100%;object-fit:contain;background:#000;pointer-events:none;";
    // 确保播放
    v.play().catch((e) => console.warn("video play failed:", e));

    // 如果是桌面捕获（canvas 流），手动设置初始尺寸
    if (src.stream._desktopCanvas) {
        const c = src.stream._desktopCanvas;
        // 等一帧再调整大小
        setTimeout(() => {
            if (src.width === Math.floor(BASE_W * 0.8)) {
                const ratio = c.width / c.height;
                if (ratio > 0) {
                    src.height = Math.floor(src.width / ratio);
                    src.y = Math.floor((BASE_H - src.height) / 2);
                    updateSourceTransform(src);
                }
            }
        }, 100);
    }

    // 8 个缩放手柄
    const handles = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
    handles.forEach((dir) => {
        const h = document.createElement("div");
        h.className = `obs-resize-handle obs-handle-${dir}`;
        h.dataset.dir = dir;
        wrap.appendChild(h);
    });

    wrap.appendChild(v);
    ui.previewCanvas.appendChild(wrap);
    src.videoElement = wrap;
    src.videoEl = v;

    // 选中
    wrap.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("obs-resize-handle")) return;
        e.preventDefault();
        e.stopPropagation();
        state.activeSourceId = src.id;
        src.zIndex = Math.max(...state.sources.map(s => s.zIndex)) + 1;
        wrap.style.zIndex = src.zIndex + 10;
        renderSources();
        updateSelection();
        startDrag(e, src);
    });

    // 缩放
    wrap.querySelectorAll(".obs-resize-handle").forEach((h) => {
        h.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.stopPropagation();
            state.activeSourceId = src.id;
            renderSources();
            updateSelection();
            startResize(e, src, h.dataset.dir);
        });
    });

    v.addEventListener("loadedmetadata", () => {
        // 只有真实摄像头/屏幕流才靠这个事件调整
        if (src.stream._desktopCanvas) return;
        if (src.width === Math.floor(BASE_W * 0.8)) {
            const ratio = v.videoWidth / v.videoHeight;
            if (ratio > 0) {
                src.height = Math.floor(src.width / ratio);
                src.y = Math.floor((BASE_H - src.height) / 2);
                updateSourceTransform(src);
            }
        }
        if (ui.res) ui.res.textContent = `${BASE_W}×${BASE_H}`;
    });

    updateSelection();
    updatePreviewScale();
};

const updateSourceTransform = (src) => {
    if (!src.videoElement) return;
    src.videoElement.style.left = src.x + "px";
    src.videoElement.style.top = src.y + "px";
    src.videoElement.style.width = src.width + "px";
    src.videoElement.style.height = src.height + "px";
};

const updateSelection = () => {
    document.querySelectorAll(".obs-src-wrap").forEach((el) => {
        const id = parseInt(el.dataset.sourceId);
        if (id === state.activeSourceId) {
            el.classList.add("obs-src-selected");
        } else {
            el.classList.remove("obs-src-selected");
        }
    });
};

// 获取画布坐标（把鼠标位置转换到 1280x720 坐标系）
const getCanvasPoint = (e) => {
    if (!ui.previewCanvas) return { x: 0, y: 0 };
    const rect = ui.previewCanvas.getBoundingClientRect();
    // previewCanvas 是 scale 过的
    const scale = rect.width / BASE_W;
    return {
        x: (e.clientX - rect.left) / scale,
        y: (e.clientY - rect.top) / scale,
    };
};

const startDrag = (e, src) => {
    const start = getCanvasPoint(e);
    const origX = src.x;
    const origY = src.y;

    const onMove = (ev) => {
        const p = getCanvasPoint(ev);
        src.x = Math.round(origX + (p.x - start.x));
        src.y = Math.round(origY + (p.y - start.y));
        // 边界限制
        src.x = Math.max(-src.width + 50, Math.min(BASE_W - 50, src.x));
        src.y = Math.max(-src.height + 50, Math.min(BASE_H - 50, src.y));
        updateSourceTransform(src);
    };
    const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        saveConfig();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
};

const startResize = (e, src, dir) => {
    const start = getCanvasPoint(e);
    const orig = { x: src.x, y: src.y, w: src.width, h: src.height };
    const ratio = src.videoEl && src.videoEl.videoWidth
        ? src.videoEl.videoWidth / src.videoEl.videoHeight
        : src.width / src.height;

    const onMove = (ev) => {
        const p = getCanvasPoint(ev);
        const dx = p.x - start.x;
        const dy = p.y - start.y;

        let newX = orig.x, newY = orig.y, newW = orig.w, newH = orig.h;

        if (dir.includes("e")) newW = Math.max(80, orig.w + dx);
        if (dir.includes("s")) newH = Math.max(60, orig.h + dy);
        if (dir.includes("w")) { newW = Math.max(80, orig.w - dx); newX = orig.x + (orig.w - newW); }
        if (dir.includes("n")) { newH = Math.max(60, orig.h - dy); newY = orig.y + (orig.h - newH); }

        // Shift 等比缩放
        if (ev.shiftKey && ratio > 0) {
            if (Math.abs(dx) > Math.abs(dy)) {
                newH = Math.round(newW / ratio);
                if (dir.includes("n")) newY = orig.y + (orig.h - newH);
            } else {
                newW = Math.round(newH * ratio);
                if (dir.includes("w")) newX = orig.x + (orig.w - newW);
            }
        }

        src.x = Math.round(newX);
        src.y = Math.round(newY);
        src.width = Math.round(newW);
        src.height = Math.round(newH);
        updateSourceTransform(src);
    };
    const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        saveConfig();
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
};

// 点击空白取消选中
if (ui.previewCanvas) {
    ui.previewCanvas.addEventListener("mousedown", (e) => {
        if (e.target === ui.previewCanvas || e.target === ui.overlay) {
            state.activeSourceId = null;
            updateSelection();
            renderSources();
        }
    });
}

const updatePreviewOverlay = () => {
    if (!ui.overlay) return;
    const hasVideo = state.sources.some((s) => s.isVideo && s.enabled);
    ui.overlay.style.display = hasVideo ? "none" : "flex";
};

// ===== 渲染列表 =====
const renderSources = () => {
    if (!ui.sourceList) return;
    ui.sourceList.innerHTML = "";
    state.sources.forEach((s) => {
        const li = document.createElement("li");
        if (s.id === state.activeSourceId) li.classList.add("active");
        li.innerHTML = `<span><span class="obs-source-icon">${TYPE_NAME[s.type]?.split(" ")[0] || "•"}</span>${s.name}</span>
            <div class="obs-source-toggle ${s.enabled ? "on" : ""}" data-toggle="${s.id}"></div>`;
        li.addEventListener("click", (e) => {
            if (e.target.classList.contains("obs-source-toggle")) return;
            state.activeSourceId = s.id;
            renderSources();
            updateSelection();
            // 滚动到视图
            if (s.videoElement) {
                s.zIndex = Math.max(...state.sources.map(x => x.zIndex)) + 1;
                s.videoElement.style.zIndex = s.zIndex + 10;
            }
        });
        li.querySelector(".obs-source-toggle").addEventListener("click", (e) => {
            e.stopPropagation();
            updateSourceEnabled(s.id, !s.enabled);
        });
        ui.sourceList.append(li);
    });
    refreshSetSource();
};

const renderMixer = () => {
    if (!ui.mixer) return;
    ui.mixer.innerHTML = "";
    state.sources.forEach((s) => {
        if (!s.isAudio) return;
        const div = document.createElement("div");
        div.className = "obs-mixer-track";
        const vol = Math.round(s.volume * 100);
        div.innerHTML = `
            <div class="obs-mixer-head">
                <span class="obs-mixer-name">${s.name}</span>
                <div class="obs-mixer-actions">
                    <button class="obs-mute-btn ${s.muted ? "muted" : ""}" data-mute="${s.id}">${s.muted ? "🔇" : "🔊"}</button>
                </div>
            </div>
            <div class="obs-meter">
                <div class="obs-meter-bars" data-meter="${s.id}">
                    <div class="obs-meter-bar"></div>
                    <div class="obs-meter-bar"></div>
                </div>
                <span class="obs-meter-db" data-db="${s.id}">-∞ dB</span>
            </div>
            <div class="obs-fader-row">
                <span style="color:#666;font-size:10px;">0</span>
                <div class="obs-fader-wrap">
                    <div class="obs-fader-track"></div>
                    <div class="obs-fader-fill" style="width:${Math.min(100, vol / 1.5 * 100)}%"></div>
                    <input class="obs-fader-input" type="range" min="0" max="1.5" step="0.01" value="${s.volume}" data-fader="${s.id}" />
                </div>
                <span style="color:#666;font-size:10px;">150</span>
            </div>`;
        ui.mixer.append(div);
        div.querySelector(`[data-mute="${s.id}"]`).addEventListener("click", () => {
            s.muted = !s.muted;
            if (s.gainNode) s.gainNode.gain.value = s.muted ? 0 : s.volume;
            renderMixer();
            saveConfig();
        });
        div.querySelector(`[data-fader="${s.id}"]`).addEventListener("input", (e) => {
            s.volume = parseFloat(e.target.value);
            if (!s.muted && s.gainNode) s.gainNode.gain.value = s.volume;
            div.querySelector(".obs-fader-fill").style.width = `${Math.min(100, (s.volume / 1.5) * 100)}%`;
            saveConfig();
        });
    });

    // 主输出
    const master = document.createElement("div");
    master.className = "obs-mixer-track";
    master.style.borderColor = "#333";
    master.innerHTML = `
        <div class="obs-mixer-head">
            <span class="obs-mixer-name">主输出</span>
            <span style="font-size:10px;color:#666;">（监听已静音）</span>
        </div>
        <div class="obs-meter">
            <div class="obs-meter-bars" data-meter="master">
                <div class="obs-meter-bar"></div>
                <div class="obs-meter-bar"></div>
            </div>
            <span class="obs-meter-db" data-db="master">-∞ dB</span>
        </div>`;
    ui.mixer.append(master);
    startMeterLoop();
};

// ===== 电平表 =====
let meterRaf = null;
const startMeterLoop = () => {
    if (meterRaf || !masterAnalyser) return;
    const dataArray = new Uint8Array(128);
    const masterBuf = new Uint8Array(masterAnalyser.fftSize);
    const tick = () => {
        try {
            masterAnalyser.getByteFrequencyData(masterBuf);
            const masterAvg = masterBuf.reduce((a, b) => a + b, 0) / masterBuf.length;
            updateMeterEl("master", masterAvg);
            state.sources.forEach((s) => {
                if (!s.analyser) return;
                s.analyser.getByteFrequencyData(dataArray);
                const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
                updateMeterEl(s.id, avg);
            });
        } catch (e) {}
        meterRaf = requestAnimationFrame(tick);
    };
    tick();
};

const updateMeterEl = (id, val) => {
    const wrap = document.querySelector(`[data-meter="${id}"]`);
    const db = document.querySelector(`[data-db="${id}"]`);
    if (!wrap || !db) return;
    const pct = Math.min(100, (val / 255) * 100);
    const bars = wrap.querySelectorAll(".obs-meter-bar");
    bars.forEach((bar) => {
        bar.style.position = "relative";
        bar.innerHTML = `<div style="position:absolute;bottom:0;left:0;right:0;height:${pct}%;background:linear-gradient(to top,#4ade80 0%,#4ade80 60%,#f5a623 60%,#f5a623 85%,#ef4444 85%);"></div>`;
    });
    const dB = val === 0 ? -100 : 20 * Math.log10(val / 255);
    db.textContent = (dB < -99 ? "-∞" : dB.toFixed(0)) + " dB";
};

// 辅助：设置按钮文字
const setBtnText = (btn, text) => {
    if (!btn) return;
    const t = btn.querySelector(".obs-tb-text");
    if (t) t.textContent = text;
};

// ===== 录制 =====
const startRecording = async () => {
    try {
        if (state.recording) return;
        const videoSources = state.sources.filter((s) => s.isVideo && s.enabled);
        if (videoSources.length === 0) {
            alert("请先添加至少一个画面来源");
            return;
        }
        console.log("[OBS] 视频来源列表:");
        videoSources.forEach((s, i) => {
            const dc = s.stream?._desktopCanvas;
            const vw = s.videoEl?.videoWidth || 0;
            const vh = s.videoEl?.videoHeight || 0;
            console.log(`  [${i}] ${s.name} type=${s.type} videoEl=${!!s.videoEl} videoW=${vw} videoH=${vh} desktopCanvas=${dc ? dc.width + "x" + dc.height : "无"}`);
        });
        // 确保视频都在播放
        videoSources.forEach((s) => {
            if (s.videoEl && s.videoEl.paused) {
                s.videoEl.play().catch(() => {});
            }
        });

        if (audioCtx && audioCtx.state === "suspended") {
            try { await audioCtx.resume(); } catch (e) { /* noop */ }
        }

        // 创建录制画布
        const canvas = document.createElement("canvas");
        canvas.width = BASE_W;
        canvas.height = BASE_H;
        const ctx = canvas.getContext("2d");
        state.recCanvas = canvas;
        state.recCtx = ctx;

        // 先画一帧测试
        ctx.fillStyle = "#0078d7";
        ctx.fillRect(0, 0, BASE_W, BASE_H);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 32px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("录制中...", BASE_W / 2, BASE_H / 2);

        // 音频目标
        let audioDest = null;
        if (audioCtx) {
            audioDest = audioCtx.createMediaStreamDestination();
            state.sources.forEach((s) => {
                if (s.isAudio && s.enabled && s.gainNode) {
                    try { s.gainNode.connect(audioDest); } catch (e) { console.warn("音频连接失败", e); }
                }
            });
        }

        // 绘制循环
        const drawLoop = () => {
            const w = BASE_W, h = BASE_H;
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, w, h);

            // 按 z-index 排序绘制
            const sorted = [...videoSources].sort((a, b) => a.zIndex - b.zIndex);
            sorted.forEach((s) => {
                if (!s.enabled) return;

                // 优先用桌面捕获的内部 canvas（避免 videoWidth=0 的问题）
                let drawSource = null;
                let vw = 0, vh = 0;
                if (s.stream && s.stream._desktopCanvas) {
                    drawSource = s.stream._desktopCanvas;
                    vw = drawSource.width;
                    vh = drawSource.height;
                } else if (s.videoEl && s.videoEl.videoWidth > 0) {
                    drawSource = s.videoEl;
                    vw = s.videoEl.videoWidth;
                    vh = s.videoEl.videoHeight;
                }
                if (!drawSource || !vw || !vh) return;

                const vRatio = vw / vh;
                const boxRatio = s.width / s.height;
                let dw, dh;
                if (vRatio > boxRatio) {
                    dw = s.width;
                    dh = s.width / vRatio;
                } else {
                    dh = s.height;
                    dw = s.height * vRatio;
                }
                const dx = s.x + (s.width - dw) / 2;
                const dy = s.y + (s.height - dh) / 2;
                ctx.drawImage(drawSource, dx, dy, dw, dh);
            });

            state.fpsCount++;
            const now = performance.now();
            if (now - state.fpsLastT > 1000) {
                if (ui.fps) ui.fps.textContent = state.fpsCount;
                state.fpsCount = 0;
                state.fpsLastT = now;
            }
        };

        state.fpsCount = 0;
        state.fpsLastT = performance.now();
        const loop = () => {
            if (!state.recording) return;
            drawLoop();
            state.drawTimer = requestAnimationFrame(loop);
        };
        // 先画几帧再启动录制
        drawLoop();
        drawLoop();
        drawLoop();

        // 合成流
        const videoStream = canvas.captureStream(30);
        const tracks = [...videoStream.getVideoTracks()];
        if (audioDest) {
            audioDest.stream.getAudioTracks().forEach((t) => tracks.push(t));
        }
        const combined = new MediaStream(tracks);

        const bitrates = { lossless: 4_000_000, high: 2_000_000, medium: 1_000_000, low: 500_000 };
        const qVal = ui.quality ? ui.quality.value : "high";
        state.bitrate = bitrates[qVal] || 2_000_000;

        // 尝试多种编码格式
        const mimes = [
            "video/webm;codecs=vp9,opus",
            "video/webm;codecs=vp8,opus",
            "video/webm;codecs=vp9",
            "video/webm;codecs=vp8",
            "video/webm",
        ];
        let mime = "";
        for (const m of mimes) {
            if (MediaRecorder.isTypeSupported(m)) {
                mime = m;
                break;
            }
        }
        if (!mime) {
            alert("您的浏览器不支持 WebM 录制，请使用 Chrome 或 Edge");
            return;
        }
        console.log("[OBS] 使用编码:", mime);

        state.recorder = new MediaRecorder(combined, {
            mimeType: mime,
            videoBitsPerSecond: state.bitrate,
        });

        state.chunks = [];
        let chunkCount = 0;
        state.recorder.ondataavailable = (e) => {
            if (e.data) {
                state.chunks.push(e.data);
                chunkCount++;
                if (chunkCount <= 5) {
                    console.log(`[OBS] 收到第 ${chunkCount} 个数据块, size=${e.data.size}`);
                }
            }
        };
        state.recorder.onstop = () => {
            cancelAnimationFrame(state.drawTimer);
            // 断开音频连接
            if (audioDest) {
                state.sources.forEach((s) => {
                    if (s.gainNode) {
                        try { s.gainNode.disconnect(audioDest); } catch (e) {}
                    }
                });
            }
            console.log("[OBS] 录制停止, chunks 数量:", state.chunks.length);
            const blob = new Blob(state.chunks, { type: "video/webm" });
            console.log("[OBS] 文件大小:", blob.size, "bytes (", (blob.size / 1024 / 1024).toFixed(2), "MB )");
            if (blob.size < 100) {
                alert("录制文件为空（" + blob.size + " 字节），请检查来源是否有画面输出");
                if (ui.state) ui.state.textContent = "录制失败";
                if (ui.recIndicator) ui.recIndicator.hidden = true;
                return;
            }
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            const ts = new Date().toISOString().replace(/[:.]/g, "-");
            a.href = url;
            a.download = `obs-recording-${ts}.webm`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 5000);
            if (ui.size) ui.size.textContent = (blob.size / 1024 / 1024).toFixed(1) + " MB";
            if (ui.state) ui.state.textContent = "已保存";
            if (ui.recIndicator) ui.recIndicator.hidden = true;
        };
        state.recorder.onerror = (e) => {
            console.error("recorder error", e);
            alert("录制错误: " + (e.error?.message || e.message || "未知错误"));
        };

        state.recorder.start(500);
        state.recording = true;
        state.paused = false;
        state.recStartTime = Date.now();
        state.totalPaused = 0;

        loop(); // 启动绘制

        if (ui.record) { ui.record.disabled = true; setBtnText(ui.record, "录制中"); }
        if (ui.pause) ui.pause.disabled = false;
        if (ui.stop) ui.stop.disabled = false;
        if (ui.recIndicator) ui.recIndicator.hidden = false;
        if (ui.state) ui.state.textContent = "录制中";
        startTimeLoop();

        console.log("[OBS] 录制已启动");
    } catch (e) {
        console.error("[OBS] 启动录制失败:", e);
        alert("启动录制失败: " + (e.message || e));
        // 恢复按钮状态
        state.recording = false;
        if (ui.record) { ui.record.disabled = false; setBtnText(ui.record, "开始录制"); }
    }
};

const pauseRecording = () => {
    if (!state.recording || !state.recorder) return;
    if (state.recorder.state === "recording") {
        state.recorder.pause();
        state.paused = true;
        state.pausedAt = Date.now();
        setBtnText(ui.pause, "继续");
        if (ui.state) ui.state.textContent = "已暂停";
        if (ui.recIndicator) ui.recIndicator.style.opacity = "0.4";
    } else if (state.recorder.state === "paused") {
        state.recorder.resume();
        state.paused = false;
        state.totalPaused += Date.now() - state.pausedAt;
        setBtnText(ui.pause, "暂停");
        if (ui.state) ui.state.textContent = "录制中";
        if (ui.recIndicator) ui.recIndicator.style.opacity = "1";
    }
};

const stopRecording = () => {
    if (!state.recording || !state.recorder) return;
    try {
        state.recorder.stop();
    } catch (e) {
        console.warn("stop error", e);
    }
    state.recording = false;
    if (ui.record) { ui.record.disabled = false; setBtnText(ui.record, "开始录制"); }
    if (ui.pause) { ui.pause.disabled = true; setBtnText(ui.pause, "暂停"); }
    if (ui.stop) ui.stop.disabled = true;
    if (ui.state) ui.state.textContent = "正在保存...";
    if (ui.recIndicator) ui.recIndicator.style.opacity = "1";
};

const startTimeLoop = () => {
    if (state.rafId) cancelAnimationFrame(state.rafId);
    const tick = () => {
        if (!state.recording) return;
        const elapsed = state.paused
            ? (state.pausedAt - state.recStartTime - state.totalPaused) / 1000
            : (Date.now() - state.recStartTime - state.totalPaused) / 1000;
        const h = Math.floor(elapsed / 3600);
        const m = Math.floor((elapsed % 3600) / 60);
        const s = Math.floor(elapsed % 60);
        if (ui.time) ui.time.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
        const bytes = (elapsed * state.bitrate) / 8;
        if (ui.size) ui.size.textContent = (bytes / 1024 / 1024).toFixed(1) + " MB";
        state.rafId = requestAnimationFrame(tick);
    };
    tick();
};

// ===== 工具: 在父窗口加载 html2canvas 并等待 =====
const waitForHtml2Canvas = (timeout = 10000) => {
    return new Promise((resolve, reject) => {
        const parentWin = window.parent;
        // 已经加载过了
        if (parentWin && parentWin.html2canvas) {
            resolve(parentWin.html2canvas);
            return;
        }
        if (!parentWin) {
            reject(new Error("无法访问父窗口"));
            return;
        }
        // 在父窗口注入 script
        const pDoc = parentWin.document;
        if (!pDoc.querySelector('script[data-obs-h2c]')) {
            const s = pDoc.createElement("script");
            s.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
            s.setAttribute("data-obs-h2c", "1");
            pDoc.head.appendChild(s);
        }
        const start = Date.now();
        const check = () => {
            if (parentWin.html2canvas) {
                resolve(parentWin.html2canvas);
            } else if (Date.now() - start > timeout) {
                reject(new Error("html2canvas 加载超时，请检查网络"));
            } else {
                setTimeout(check, 200);
            }
        };
        check();
    });
};

// ===== 工具: 找到 OBS 自己所在的窗口元素（避免套娃） =====
const findObsWindowEl = () => {
    try {
        // OBS 在 iframe 里，从 iframe 元素往上找父窗口容器
        let frameEl = null;
        const iframes = window.parent.document.querySelectorAll("iframe");
        for (const f of iframes) {
            try {
                if (f.contentWindow === window) {
                    frameEl = f;
                    break;
                }
            } catch (e) { /* cross-origin */ }
        }
        if (!frameEl) return null;
        // 往上找 .windows-open-window
        let el = frameEl.parentElement;
        for (let i = 0; i < 10 && el; i++) {
            if (el.classList && el.classList.contains("windows-open-window")) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    } catch (e) {
        return null;
    }
};

// ===== 创建桌面捕获流 =====
const createDesktopCapture = async () => {
    const parentWin = window.parent;
    if (!parentWin || parentWin === window) {
        throw new Error("无法访问父窗口（请在 Windows 模拟器中打开 OBS）");
    }
    await waitForHtml2Canvas(8000);

    const parentDoc = parentWin.document;
    // 直接捕获 body，包含完整桌面：壁纸 + 图标 + 所有窗口 + 任务栏
    let targetEl = parentDoc.body;

    console.log("[OBS] 桌面捕获目标:", targetEl.tagName, targetEl.className || "(无)");

    // 找到 OBS 自己的窗口元素，只排除它（避免套娃）
    const obsWindowEl = findObsWindowEl();
    console.log("[OBS] 排除自身窗口:", obsWindowEl ? "找到" : "未找到");

    // 用视口尺寸作为捕获大小
    const capW = Math.max(640, Math.floor(parentWin.innerWidth));
    const capH = Math.max(480, Math.floor(parentWin.innerHeight));
    console.log("[OBS] 捕获尺寸:", capW, "x", capH);

    const canvas = document.createElement("canvas");
    canvas.width = capW;
    canvas.height = capH;
    const ctx = canvas.getContext("2d");

    // 初始测试帧
    const grad = ctx.createLinearGradient(0, 0, capW, capH);
    grad.addColorStop(0, "#0078d7");
    grad.addColorStop(1, "#005a9e");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, capW, capH);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("桌面捕获初始化中...", capW / 2, capH / 2);

    let running = true;
    let lastFrame = 0;
    let lastError = null;
    const fps = 10;
    const frameInterval = 1000 / fps;

    const captureFrame = async () => {
        if (!running) return;
        const now = performance.now();
        if (now - lastFrame >= frameInterval) {
            lastFrame = now;
            try {
                const h2c = parentWin.html2canvas;
                if (!h2c) throw new Error("html2canvas 未加载");
                // 用父窗口的 html2canvas 捕获父窗口 body
                const c = await h2c(targetEl, {
                    windowWidth: capW,
                    windowHeight: capH,
                    scale: 1,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: null,
                    logging: false,
                    onclone: (clonedDoc) => {
                        // 修复克隆体尺寸
                        const clonedBody = clonedDoc.body;
                        const clonedHtml = clonedDoc.documentElement;
                        if (clonedBody) {
                            clonedBody.style.width = capW + "px";
                            clonedBody.style.height = capH + "px";
                            clonedBody.style.minWidth = capW + "px";
                            clonedBody.style.minHeight = capH + "px";
                            clonedBody.style.overflow = "hidden";
                            clonedBody.style.display = "block";
                        }
                        if (clonedHtml) {
                            clonedHtml.style.width = capW + "px";
                            clonedHtml.style.height = capH + "px";
                            clonedHtml.style.overflow = "hidden";
                        }
                        // 确保 .desk 铺满整个桌面
                        const desk = clonedDoc.querySelector(".desk");
                        if (desk) {
                            desk.style.width = "100%";
                            desk.style.height = "calc(100% - 40px)";
                            desk.style.position = "relative";
                        }
                    },
                    ignoreElements: (el) => {
                        // 只有勾选了「排除 OBS」才隐藏自身窗口（避免套娃）
                        if (ui.setExcludeObs && ui.setExcludeObs.checked && obsWindowEl) {
                            if (el === obsWindowEl || el.contains(obsWindowEl) || obsWindowEl.contains(el)) {
                                return true;
                            }
                        }
                        return false;
                    },
                });
                // 按比例缩放绘制到画布
                ctx.fillStyle = "#000";
                ctx.fillRect(0, 0, capW, capH);
                const ratio = Math.min(capW / c.width, capH / c.height);
                const dw = c.width * ratio;
                const dh = c.height * ratio;
                const dx = (capW - dw) / 2;
                const dy = (capH - dh) / 2;
                ctx.drawImage(c, dx, dy, dw, dh);
                lastError = null;
            } catch (err) {
                lastError = err.message || String(err);
                ctx.fillStyle = "#1a1a2e";
                ctx.fillRect(0, 0, capW, capH);
                ctx.fillStyle = "#ff6b6b";
                ctx.font = "bold 16px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("桌面捕获出错", capW / 2, capH / 2 - 15);
                ctx.fillStyle = "#aaa";
                ctx.font = "12px sans-serif";
                ctx.fillText(lastError.substring(0, 50), capW / 2, capH / 2 + 10);
            }
        }
        requestAnimationFrame(captureFrame);
    };
    captureFrame();

    const stream = canvas.captureStream(fps);
    stream._desktopCanvas = canvas;
    stream._desktopStop = () => { running = false; };

    return { stream, name: "Windows 桌面", width: capW, height: capH };
};

// ===== 添加来源 =====
const addSourceByType = async (type) => {
    try {
        let stream, name;
        if (type === "desktop") {
            alert("🪟 当前桌面（Windows）功能维护中，暂不可用\n请使用「整个屏幕」选项代替");
            return;

        } else if (type === "screen") {
            stream = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: 30 },
                audio: ui.setSysAudio && ui.setSysAudio.checked,
            });
            name = "屏幕捕获";

        } else if (type === "window") {
            stream = await navigator.mediaDevices.getDisplayMedia({
                video: { displaySurface: "window", frameRate: 30 },
                audio: ui.setSysAudio && ui.setSysAudio.checked,
            });
            name = "窗口捕获";

        } else if (type === "tab") {
            stream = await navigator.mediaDevices.getDisplayMedia({
                video: { displaySurface: "browser", frameRate: 30 },
                audio: ui.setSysAudio && ui.setSysAudio.checked,
            });
            name = "标签页捕获";

        } else if (type === "camera") {
            stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 1280, height: 720 },
                audio: false,
            });
            name = "摄像头";

        } else if (type === "mic") {
            stream = await navigator.mediaDevices.getUserMedia({
                audio: ui.setMic && ui.setMic.checked,
                video: false,
            });
            name = "麦克风";
        }

        if (stream) {
            // 监听轨道结束自动移除
            const tracks = stream.getVideoTracks();
            if (tracks.length > 0) {
                tracks[0].addEventListener("ended", () => {
                    const src = state.sources.find((s) => s.stream === stream);
                    if (src) removeSource(src.id);
                });
            }
            addSource(type, name, stream);
            if (ui.overlay) {
                const t = ui.overlay.querySelector(".obs-overlay-text");
                if (t) t.textContent = "来源已添加，可以拖动调整位置大小";
            }
        }
    } catch (e) {
        console.warn("添加来源失败:", e);
        if (ui.overlay) {
            const t = ui.overlay.querySelector(".obs-overlay-text");
            if (t) t.textContent = "添加失败: " + (e.message || "用户取消");
        }
    }
};

// ===== 配置持久化 =====
const saveConfig = () => {
    try {
        const cfg = {
            sources: state.sources.map((s) => ({
                type: s.type,
                name: s.name,
                enabled: s.enabled,
                muted: s.muted,
                volume: s.volume,
                isVideo: s.isVideo,
                isAudio: s.isAudio,
                x: s.x, y: s.y, width: s.width, height: s.height, zIndex: s.zIndex,
            })),
            quality: ui.quality ? ui.quality.value : "high",
            excludeObs: ui.setExcludeObs ? ui.setExcludeObs.checked : false,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
    } catch (e) {
        console.warn("保存配置失败:", e);
    }
};

const loadConfig = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
};

// 恢复桌面来源（只有桌面能自动恢复，其他需要用户授权）
// 桌面捕获功能维护中，此函数暂留空
const restoreDesktopSources = async () => {
    const cfg = loadConfig();
    if (!cfg || !cfg.sources) return;
    if (ui.quality && cfg.quality) ui.quality.value = cfg.quality;
    // TODO: 桌面捕获修复后再启用
};

// ===== 事件绑定 =====
if (ui.record) ui.record.addEventListener("click", startRecording);
if (ui.pause) ui.pause.addEventListener("click", pauseRecording);
if (ui.stop) ui.stop.addEventListener("click", stopRecording);

if (ui.addSource && ui.sourceModal) {
    ui.addSource.addEventListener("click", () => showModal(ui.sourceModal));
}
if (ui.sourceCancel && ui.sourceModal) {
    ui.sourceCancel.addEventListener("click", () => hideModal(ui.sourceModal));
}
if (ui.sourceModal) {
    ui.sourceModal.addEventListener("click", (e) => {
        if (e.target === ui.sourceModal) hideModal(ui.sourceModal);
    });
    ui.sourceModal.querySelectorAll(".obs-source-types li").forEach((li) => {
        li.addEventListener("click", async () => {
            const type = li.dataset.type;
            hideModal(ui.sourceModal);
            await addSourceByType(type);
        });
    });
}

if (ui.delSource) {
    ui.delSource.addEventListener("click", () => {
        if (state.activeSourceId) removeSource(state.activeSourceId);
    });
}

if (ui.settings && ui.settingsModal) {
    ui.settings.addEventListener("click", () => {
        refreshSetSource();
        showModal(ui.settingsModal);
    });
}

const refreshSetSource = () => {
    if (!ui.setSource) return;
    const videos = state.sources.filter((s) => s.isVideo);
    if (videos.length === 0) {
        ui.setSource.innerHTML = '<option value="">— 请先点 + 添加画面来源 —</option>';
        ui.setSource.disabled = true;
    } else {
        ui.setSource.disabled = false;
        ui.setSource.innerHTML = videos
            .map((s) => `<option value="${s.id}">${s.name}</option>`)
            .join("");
    }
};

if (ui.settingsCancel && ui.settingsModal) {
    ui.settingsCancel.addEventListener("click", () => hideModal(ui.settingsModal));
}
if (ui.settingsModal) {
    ui.settingsModal.addEventListener("click", (e) => {
        if (e.target === ui.settingsModal) hideModal(ui.settingsModal);
    });
}

if (ui.addScene && ui.sceneList) {
    ui.addScene.addEventListener("click", () => {
        const id = state.scenes.length;
        state.scenes.push({ id, name: `场景 ${id + 1}` });
        const li = document.createElement("li");
        li.dataset.scene = id;
        li.innerHTML = `<span class="obs-scene-name">场景 ${id + 1}</span>`;
        li.addEventListener("click", () => {
            state.activeScene = id;
            document.querySelectorAll(".obs-scene-list li").forEach((x) => x.classList.toggle("active", x === li));
        });
        ui.sceneList.append(li);
    });
}

// 质量选择变化时保存
if (ui.quality) {
    ui.quality.addEventListener("change", saveConfig);
}
// 排除 OBS 选项变化时保存
if (ui.setExcludeObs) {
    ui.setExcludeObs.addEventListener("change", saveConfig);
}

// 键盘快捷键
document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
    if (e.ctrlKey && e.key.toLowerCase() === "r") { e.preventDefault(); if (ui.record) ui.record.click(); }
    if (e.ctrlKey && e.key.toLowerCase() === "p") { e.preventDefault(); if (ui.pause) ui.pause.click(); }
    if (e.ctrlKey && e.key.toLowerCase() === "s") { e.preventDefault(); if (ui.stop) ui.stop.click(); }
    // Delete 删除选中来源
    if ((e.key === "Delete" || e.key === "Backspace") && state.activeSourceId) {
        if (document.activeElement === document.body) {
            e.preventDefault();
            removeSource(state.activeSourceId);
        }
    }
});

// ===== 初始化 =====
function safeInit() {
    try {
        if (ui.overlay) {
            const t = ui.overlay.querySelector(".obs-overlay-text");
            if (t) t.textContent = "请先添加来源 (屏幕 / 摄像头 / 麦克风)";
        }
        if (ui.cpu) ui.cpu.textContent = (navigator.hardwareConcurrency || "?") + "核";
        if (ui.res) ui.res.textContent = `${BASE_W}×${BASE_H}`;
        refreshSetSource();

        // 初始化预览缩放
        updatePreviewScale();
        setTimeout(updatePreviewScale, 100);
        setTimeout(updatePreviewScale, 500);

        // 尝试恢复桌面来源
        restoreDesktopSources();

        console.log("[OBS] 初始化完成");
    } catch (e) {
        console.error("[OBS] 初始化失败:", e);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit);
} else {
    safeInit();
}

window.__obs = { state, addSourceByType, startRecording, stopRecording, saveConfig };
