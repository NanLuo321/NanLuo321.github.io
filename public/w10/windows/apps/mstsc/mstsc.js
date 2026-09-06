/* 远程桌面连接 - mstsc 风格前端
 * 底层基于 noVNC 1.7.0 (VNC over WebSocket)
 * 用 importmap 把 npm 包映射到站点根下的 /w10/vendor/novnc/
 */
import RFB from "/w10/vendor/novnc/core/rfb.js";

const $ = (id) => document.getElementById(id);

const ui = {
    host: $("mstsc-host"),
    port: $("mstsc-port"),
    ws: $("mstsc-ws"),
    user: $("mstsc-user"),
    pass: $("mstsc-pass"),
    save: $("mstsc-save"),
    quality: $("mstsc-quality"),
    scale: $("mstsc-scale"),
    cursor: $("mstsc-cursor"),
    clip: $("mstsc-clip"),
    bell: $("mstsc-bell"),
    viewonly: $("mstsc-viewonly"),
    resize: $("mstsc-resize"),
    timeout: $("mstsc-timeout"),
    retry: $("mstsc-retry"),
    comp: $("mstsc-comp"),
    debug: $("mstsc-debug"),
    connect: $("mstsc-connect"),
    saveBtn: $("mstsc-save-btn"),
    open: $("mstsc-open"),
    status: $("mstsc-status"),
    screen: $("mstsc-screen"),
    screenTitle: $("mstsc-screen-title"),
    canvasWrap: $("mstsc-canvas-wrap"),
    canvas: $("mstsc-canvas"),
    loading: $("mstsc-loading"),
    loadingText: $("mstsc-loading-text"),
    sendCad: $("mstsc-send-ctrl-alt-del"),
    fullscreen: $("mstsc-fullscreen"),
    disconnect: $("mstsc-disconnect"),
    navItems: document.querySelectorAll(".mstsc-nav li"),
    tabs: document.querySelectorAll(".mstsc-tab"),
};

let rfb = null;
let savedConnections = [];

const STORAGE_KEY = "mstsc.connections";

const setStatus = (text, level) => {
    ui.status.textContent = text;
    ui.status.className = "mstsc-status" + (level ? " " + level : "");
};

const setLoading = (show, text) => {
    ui.loading.hidden = !show;
    if (text) ui.loadingText.textContent = text;
};

const showScreen = (show) => {
    ui.screen.hidden = !show;
};

const buildWsUrl = () => {
    const ws = (ui.ws.value || "").trim();
    if (ws) return ws;
    const host = (ui.host.value || "").trim();
    const port = parseInt(ui.port.value, 10) || 3389;
    if (!host) return "";
    return `ws://${host}:6080/websockify`;
};

const loadSaved = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        savedConnections = raw ? JSON.parse(raw) : [];
    } catch {
        savedConnections = [];
    }
};

const persistSaved = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedConnections));
    } catch (e) {
        console.warn("无法保存连接:", e);
    }
};

const rememberCurrent = () => {
    const ws = buildWsUrl();
    const host = (ui.host.value || "").trim();
    if (!host && !ws) return;
    const entry = {
        host,
        port: parseInt(ui.port.value, 10) || 3389,
        ws,
        user: ui.user.value || "",
        pass: ui.pass.value || "",
        time: Date.now(),
    };
    const key = entry.ws || `${entry.host}:${entry.port}`;
    savedConnections = savedConnections.filter((c) => (c.ws || `${c.host}:${c.port}`) !== key);
    savedConnections.unshift(entry);
    if (savedConnections.length > 12) savedConnections.length = 12;
    persistSaved();
};

const applyEntry = (entry) => {
    ui.host.value = entry.host || "";
    ui.port.value = entry.port || 3389;
    ui.ws.value = entry.ws || "";
    ui.user.value = entry.user || "";
    ui.pass.value = entry.pass || "";
};

const connect = async () => {
    const wsUrl = buildWsUrl();
    if (!wsUrl) {
        setStatus("请填写计算机地址或 WebSocket 网关地址。", "error");
        return;
    }

    rememberCurrent();

    if (rfb) {
        try { rfb.disconnect(); } catch (e) { /* noop */ }
        rfb = null;
    }

    setLoading(true, "正在连接 " + wsUrl + " ...");
    showScreen(true);
    setStatus("正在连接...", "");

    try {
        rfb = new RFB(ui.canvas, wsUrl, {
            credentials: { password: ui.pass.value || "" },
            wsProtocols: ["binary"],
        });

        applyDisplayOptions();
        applyExperienceOptions();
        applyAdvancedOptions();

        rfb.addEventListener("connect", () => {
            setStatus("已连接: " + wsUrl, "ok");
            setLoading(false);
            ui.screenTitle.textContent = `远程会话 — ${ui.host.value || wsUrl}`;
            ui.canvas.focus();
        });
        rfb.addEventListener("disconnect", (e) => {
            const detail = e.detail || {};
            const msg = detail.reason || detail.clean ? "已断开" : "连接中断";
            setStatus(msg, detail.clean ? "" : "error");
            setLoading(false);
        });
        rfb.addEventListener("securityfailure", (e) => {
            const d = e.detail || {};
            setStatus(`安全验证失败: ${d.reason || "未知"} (${d.status || "?"})`, "error");
            setLoading(false);
        });
        rfb.addEventListener("capabilities", () => {
            if (ui.debug.checked) console.log("[vnc] capabilities", rfb.capabilities);
        });
        rfb.addEventListener("desktopname", (e) => {
            const name = e.detail?.name;
            if (name) ui.screenTitle.textContent = `远程会话 — ${name}`;
        });
    } catch (err) {
        console.error(err);
        setStatus("连接失败: " + (err && err.message ? err.message : err), "error");
        setLoading(false);
        showScreen(false);
    }
};

const disconnect = () => {
    if (rfb) {
        try { rfb.disconnect(); } catch (e) { /* noop */ }
        rfb = null;
    }
    setStatus("已断开", "");
    showScreen(false);
};

const applyDisplayOptions = () => {
    if (!rfb) return;
    const quality = parseInt(ui.quality.value, 10);
    rfb.qualityLevel = quality;
    const scale = ui.scale.value;
    rfb.scaleViewport = scale !== "100";
    rfb.resizeSession = ui.resize.checked;
    if (scale === "fit") {
        rfb.scaleViewport = true;
    }
    ui.canvas.style.width = "";
    ui.canvas.style.height = "";
};

const applyExperienceOptions = () => {
    if (!rfb) return;
    rfb.viewOnly = ui.viewonly.checked;
    rfb.clipboardPaste = ui.clip.checked;
    rfb.clipboardCopy = ui.clip.checked;
};

const applyAdvancedOptions = () => {
    if (!rfb) return;
    const compression = parseInt(ui.comp.value, 10);
    rfb.compressionLevel = compression;
};

// --- 事件绑定 ---

ui.connect.addEventListener("click", () => connect());
ui.saveBtn.addEventListener("click", () => {
    rememberCurrent();
    setStatus("已保存到本地。", "ok");
});
ui.open.addEventListener("click", () => {
    const idx = prompt(
        "输入要打开的连接序号 (1-" + savedConnections.length + ")，取消返回。\n" +
        savedConnections
            .map((c, i) => `${i + 1}. ${c.ws || `${c.host}:${c.port}`}  (${new Date(c.time).toLocaleString()})`)
            .join("\n"),
        "1",
    );
    if (!idx) return;
    const i = parseInt(idx, 10) - 1;
    if (savedConnections[i]) {
        applyEntry(savedConnections[i]);
        setStatus(`已加载连接 ${idx}`, "ok");
    } else {
        setStatus("序号无效。", "error");
    }
});

ui.disconnect.addEventListener("click", () => disconnect());
ui.sendCad.addEventListener("click", () => {
    if (rfb) {
        rfb.sendCtrlAltDel();
        setStatus("已发送 Ctrl+Alt+Del。", "");
    }
});
ui.fullscreen.addEventListener("click", () => {
    const wrap = ui.canvasWrap;
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        (wrap.requestFullscreen ? wrap.requestFullscreen() : Promise.reject()).catch((err) =>
            setStatus("无法全屏: " + err.message, "error"),
        );
    }
});

ui.quality.addEventListener("change", applyDisplayOptions);
ui.scale.addEventListener("change", () => {
    applyDisplayOptions();
    if (rfb && ui.scale.value === "fit") {
        const rect = ui.canvasWrap.getBoundingClientRect();
        rfb.computeScale();
    }
});
ui.resize.addEventListener("change", applyDisplayOptions);
ui.viewonly.addEventListener("change", applyExperienceOptions);
ui.clip.addEventListener("change", applyExperienceOptions);
ui.comp.addEventListener("change", applyAdvancedOptions);

// 自适应缩放
const refit = () => {
    if (!rfb) return;
    if (ui.scale.value === "fit") rfb.computeScale();
};
window.addEventListener("resize", refit);
new ResizeObserver(refit).observe(ui.canvasWrap);

// 左侧导航切换
ui.navItems.forEach((li) => {
    li.addEventListener("click", () => {
        const tab = li.getAttribute("data-tab");
        ui.navItems.forEach((x) => x.classList.toggle("active", x === li));
        ui.tabs.forEach((t) => t.setAttribute("data-active", t.getAttribute("data-tab") === tab ? "true" : "false"));
    });
});

// 标题栏按钮（模拟 Win10 窗口行为：交给宿主 Popup 处理；这里只做简单响应）
document.querySelectorAll(".mstsc-tb-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const action = btn.getAttribute("data-action");
        if (action === "help") {
            alert(
                "远程桌面连接 (mstsc)\n\n" +
                "• 浏览器无法直接走 TCP 远程桌面，需要一个 WebSocket 网关\n" +
                "  (如 websockify、noVNC proxy、Apache Guacamole、ironRDP-simple-web)。\n" +
                "• 在「计算机」填主机/IP，「WebSocket 网关」填 ws://…/websockify 形式的地址。\n" +
                "• 留空网关时默认拼 ws://&lt;host&gt;:6080/websockify。\n\n" +
                "底层驱动: noVNC 1.7.0 (RFB/VNC 协议)。",
            );
        }
        e.stopPropagation();
    });
});

// 启动
loadSaved();
if (savedConnections[0]) applyEntry(savedConnections[0]);
setStatus("就绪 — 填写计算机地址后点击「连接」", "");

// 暴露给宿主 Popup 调试
window.__mstsc = { get rfb() { return rfb; }, connect, disconnect };
