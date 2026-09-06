/* noVNC 远程桌面 - 简洁 noVNC 风格前端
 * 顶部 IP 输入框 + noVNC 1.7 RFB 协议 + 设置抽屉
 */
import RFB from "/w10/vendor/novnc/core/rfb.js";

const $ = (id) => document.getElementById(id);

const ui = {
    host: $("novnc-host"),
    port: $("novnc-port"),
    ws: $("novnc-ws"),
    pass: $("novnc-pass"),
    quality: $("novnc-quality"),
    scale: $("novnc-scale"),
    clip: $("novnc-clip"),
    viewonly: $("novnc-viewonly"),
    resize: $("novnc-resize"),
    comp: $("novnc-comp"),
    timeout: $("novnc-timeout"),
    debug: $("novnc-debug"),
    connect: $("novnc-connect"),
    disconnect: $("novnc-disconnect"),
    fullscreen: $("novnc-fullscreen"),
    sendCad: $("novnc-send-cad"),
    led: $("novnc-led"),
    status: $("novnc-status"),
    screen: $("novnc-screen"),
    canvas: $("novnc-canvas"),
    placeholder: $("novnc-placeholder"),
    loading: $("novnc-loading"),
    loadingText: $("novnc-loading-text"),
    drawer: $("novnc-drawer"),
    settingsBtn: $("novnc-settings-btn"),
    drawerClose: $("novnc-drawer-close"),
};

let rfb = null;
const STORAGE_KEY = "novnc.connections";

const setStatus = (text, level) => {
    ui.status.textContent = text;
    ui.status.className = "novnc-status" + (level ? " " + level : "");
};

const setLed = (state) => {
    ui.led.setAttribute("data-state", state);
};

const setLoading = (show, text) => {
    ui.loading.hidden = !show;
    if (text) ui.loadingText.textContent = text;
};

const setPlaceholderVisible = (v) => {
    ui.placeholder.style.display = v ? "" : "none";
    ui.canvas.style.display = v ? "none" : "";
};

const buildWsUrl = () => {
    const ws = (ui.ws.value || "").trim();
    if (ws) return ws;
    const host = (ui.host.value || "").trim();
    const port = parseInt(ui.port.value, 10) || 5900;
    if (!host) return "";
    return `ws://${host}:6080/websockify`;
};

const loadSaved = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch { return []; }
};

const persistSaved = (list) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) { console.warn(e); }
};

const rememberCurrent = () => {
    const ws = buildWsUrl();
    if (!ws) return;
    const entry = {
        host: (ui.host.value || "").trim(),
        port: parseInt(ui.port.value, 10) || 5900,
        ws,
        time: Date.now(),
    };
    const list = loadSaved().filter((c) => c.ws !== ws);
    list.unshift(entry);
    if (list.length > 12) list.length = 12;
    persistSaved(list);
};

const connect = async () => {
    const wsUrl = buildWsUrl();
    if (!wsUrl) {
        setStatus("请填写远程主机地址或 WebSocket 网关。", "error");
        return;
    }

    rememberCurrent();

    if (rfb) {
        try { rfb.disconnect(); } catch (e) { /* noop */ }
        rfb = null;
    }

    setPlaceholderVisible(false);
    setLoading(true, "正在连接 " + wsUrl + " ...");
    setLed("connecting");
    setStatus("正在连接 " + wsUrl, "warn");
    ui.connect.hidden = true;
    ui.disconnect.hidden = false;

    try {
        rfb = new RFB(ui.canvas, wsUrl, {
            credentials: { password: ui.pass.value || "" },
            wsProtocols: ["binary"],
        });

        applyOptions();

        rfb.addEventListener("connect", () => {
            setStatus("已连接: " + wsUrl, "ok");
            setLoading(false);
            setLed("connected");
            ui.canvas.focus();
        });
        rfb.addEventListener("disconnect", (e) => {
            const detail = e.detail || {};
            const msg = detail.reason || (detail.clean ? "已断开" : "连接中断");
            setStatus(msg, detail.clean ? "" : "error");
            setLoading(false);
            setLed("idle");
            ui.connect.hidden = false;
            ui.disconnect.hidden = true;
            setPlaceholderVisible(true);
        });
        rfb.addEventListener("securityfailure", (e) => {
            const d = e.detail || {};
            setStatus(`安全验证失败: ${d.reason || "未知"} (${d.status || "?"})`, "error");
            setLoading(false);
            setLed("error");
        });
        rfb.addEventListener("desktopname", (e) => {
            const name = e.detail?.name;
            if (name) setStatus(`已连接: ${name} (${wsUrl})`, "ok");
        });
    } catch (err) {
        console.error(err);
        setStatus("连接失败: " + (err && err.message ? err.message : err), "error");
        setLoading(false);
        setLed("error");
        ui.connect.hidden = false;
        ui.disconnect.hidden = true;
        setPlaceholderVisible(true);
    }
};

const disconnect = () => {
    if (rfb) {
        try { rfb.disconnect(); } catch (e) { /* noop */ }
        rfb = null;
    }
    setStatus("已断开", "");
    setLed("idle");
    setPlaceholderVisible(true);
    ui.connect.hidden = false;
    ui.disconnect.hidden = true;
};

const applyOptions = () => {
    if (!rfb) return;
    rfb.qualityLevel = parseInt(ui.quality.value, 10);
    rfb.compressionLevel = parseInt(ui.comp.value, 10);
    rfb.viewOnly = ui.viewonly.checked;
    rfb.clipboardPaste = ui.clip.checked;
    rfb.clipboardCopy = ui.clip.checked;
    rfb.resizeSession = ui.resize.checked;

    const scale = ui.scale.value;
    if (scale === "fit") {
        rfb.scaleViewport = true;
    } else {
        rfb.scaleViewport = scale !== "100";
        rfb.resizeSession = false;
    }
    rfb.computeScale();
};

ui.connect.addEventListener("click", connect);
ui.disconnect.addEventListener("click", disconnect);
ui.fullscreen.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        (ui.screen.requestFullscreen ? ui.screen.requestFullscreen() : Promise.reject())
            .catch((err) => setStatus("无法全屏: " + err.message, "error"));
    }
});
ui.sendCad.addEventListener("click", () => {
    if (rfb) {
        rfb.sendCtrlAltDel();
        setStatus("已发送 Ctrl+Alt+Del。", "");
    } else {
        setStatus("尚未连接,无法发送。", "warn");
    }
});

ui.settingsBtn.addEventListener("click", () => {
    ui.drawer.hidden = !ui.drawer.hidden;
});
ui.drawerClose.addEventListener("click", () => { ui.drawer.hidden = true; });

[ui.quality, ui.scale, ui.comp, ui.viewonly, ui.clip, ui.resize].forEach((el) => {
    el.addEventListener("change", applyOptions);
});

window.addEventListener("resize", () => {
    if (rfb && ui.scale.value === "fit") rfb.computeScale();
});
new ResizeObserver(() => {
    if (rfb && ui.scale.value === "fit") rfb.computeScale();
}).observe(ui.screen);

// 回车连接
[ui.host, ui.port, ui.ws, ui.pass].forEach((el) => {
    el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            connect();
        }
    });
});

// 初始化:加载最近一次连接
const saved = loadSaved();
if (saved[0]) {
    ui.host.value = saved[0].host || "";
    ui.port.value = saved[0].port || 5900;
    ui.ws.value = saved[0].ws || "";
    setStatus(`已加载最近连接: ${saved[0].ws || `${saved[0].host}:${saved[0].port}`} — 点击「连接」`, "");
} else {
    setStatus("就绪 — 填写远程主机地址后点击「连接」", "");
}
setLed("idle");
setPlaceholderVisible(true);

window.__novnc = { get rfb() { return rfb; }, connect, disconnect };
