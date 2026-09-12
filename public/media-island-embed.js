/**
 * 灵动岛媒体指示器 —— 独立注入版（用于不走 Astro 布局的静态页，如 /w10/）
 *
 * 功能与 MediaIsland.astro 一致：
 *  - 音频播放 / 麦克风 / 相机占用时任一情况滑入，否则隐藏
 *  - 胶囊 38px，点击展开详情（当前歌曲读 .music-title/.music-artist，静态页无则显示未知曲目）
 *  - 状态点：麦克风红点 / 摄像头绿点
 *  - 站内跳转显示"正在跳转…"
 *  - Ctrl+Shift+E 调试台（模拟音频/麦克风/摄像头）
 * 若页面已存在 #media-island（Astro 版）则跳过，避免双份。
 */
(function () {
	"use strict";
	if (document.getElementById("media-island")) return;

	/* ---------- 样式 ---------- */
	var css = [
		"#media-island{position:fixed;top:.85rem;right:6.2rem;z-index:2147483000;display:flex;flex-direction:column;align-items:stretch;background:rgba(10,10,12,.9);-webkit-backdrop-filter:blur(16px) saturate(170%);backdrop-filter:blur(16px) saturate(170%);border:1px solid rgba(255,255,255,.09);box-shadow:0 6px 22px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,255,255,.07);color:#f5f5f7;border-radius:9999px;overflow:hidden;cursor:pointer;user-select:none;transition:transform .55s cubic-bezier(.32,.72,0,1),opacity .35s cubic-bezier(.32,.72,0,1),border-radius .4s cubic-bezier(.32,.72,0,1);font-family:inherit}",
		"#media-island.is-expanded{border-radius:24px}",
		"#media-island .mi-pill{display:flex;align-items:center;gap:9px;height:38px;padding:0 18px;font-size:.78rem;font-weight:600;letter-spacing:.02em;white-space:nowrap}",
		"#media-island.is-expanded .mi-pill{border-radius:0}",
		"#media-island .mi-eq{display:none;align-items:flex-end;gap:2.5px;height:16px}",
		"#media-island .mi-eq.show{display:inline-flex}",
		"#media-island .mi-eq i{width:3.5px;border-radius:2px;background:rgb(52,211,153);animation:mi-eq-bounce .9s ease-in-out infinite}",
		"#media-island .mi-eq i:nth-child(1){height:55%}#media-island .mi-eq i:nth-child(2){height:95%;animation-delay:.18s}#media-island .mi-eq i:nth-child(3){height:70%;animation-delay:.32s}#media-island .mi-eq i:nth-child(4){height:100%;animation-delay:.1s}",
		"@keyframes mi-eq-bounce{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}",
		"#media-island .mi-label{line-height:1;font-variant-numeric:tabular-nums;opacity:.94;max-width:220px;overflow:hidden;text-overflow:ellipsis}",
		"#media-island .mi-dot{display:none;width:7px;height:7px;border-radius:9999px;flex-shrink:0}",
		"#media-island .mi-dot.show{display:inline-block}",
		"#media-island .mi-dot-mic.show{background:rgb(255,69,58);box-shadow:0 0 6px rgba(255,69,58,.8)}",
		"#media-island .mi-dot-cam.show{background:rgb(48,209,88);box-shadow:0 0 6px rgba(48,209,88,.8)}",
		"#media-island .mi-detail{max-height:0;opacity:0;overflow:hidden;padding:0 18px;font-size:.74rem;transition:max-height .4s cubic-bezier(.32,.72,0,1),opacity .3s ease,padding .4s cubic-bezier(.32,.72,0,1)}",
		"#media-island.is-expanded .mi-detail{max-height:140px;opacity:1;padding:4px 18px 12px}",
		"#media-island .mi-row{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.06)}",
		"#media-island .mi-row:last-of-type{border-bottom:none}",
		"#media-island .mi-k{color:rgba(245,245,247,.55);flex-shrink:0}",
		"#media-island .mi-v{font-weight:600;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px}",
		"#media-island .mi-tip{margin-top:2px;text-align:center;font-size:.62rem;color:rgba(245,245,247,.4)}",
		"#media-island .mi-vol{display:none;align-items:center;gap:7px}",
		"#media-island .mi-vol.show{display:inline-flex}",
		"#media-island .mi-vol svg{width:15px;height:15px;flex-shrink:0}",
		"#media-island .mi-vol-bar{width:70px;height:4px;border-radius:2px;background:rgba(255,255,255,.18);overflow:hidden}",
		"#media-island .mi-vol-fill{display:block;height:100%;background:#f5f5f7;border-radius:2px;transition:width .15s ease}",
		"#media-island.mi-hidden{transform:translateY(-160%) scale(.85);opacity:0;pointer-events:none}",
		"#mi-debug{position:fixed;bottom:6.5rem;right:1rem;z-index:2147483001;width:240px;padding:12px 14px;border-radius:16px;background:rgba(18,18,22,.92);-webkit-backdrop-filter:blur(16px) saturate(160%);backdrop-filter:blur(16px) saturate(160%);border:1px solid rgba(255,255,255,.1);box-shadow:0 12px 40px rgba(0,0,0,.4);color:#f0f0f4;font-size:.74rem;display:none;flex-direction:column;gap:8px}",
		"#mi-debug.open{display:flex}",
		"#mi-debug .mid-head{display:flex;align-items:center;justify-content:space-between;font-weight:700;margin-bottom:2px}",
		"#mi-debug kbd{font-size:.6rem;padding:2px 6px;border-radius:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)}",
		"#mi-debug button{text-align:left;padding:7px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:#f0f0f4;font-size:.72rem;cursor:pointer;transition:background .2s ease,border-color .2s ease}",
		"#mi-debug button:hover{background:rgba(255,255,255,.1)}",
		"#mi-debug button.on{background:rgba(52,211,153,.16);border-color:rgba(52,211,153,.5)}",
		"#mi-debug button.on::after{content:' · ON';color:rgb(52,211,153);font-weight:700}",
		"#mi-debug .mid-real{font-size:.64rem;color:rgba(240,240,244,.55);line-height:1.5}",
		"@media (prefers-reduced-motion:reduce){#media-island{transition-duration:1ms!important}#media-island .mi-eq i{animation:none}}",
	].join("\n");
	var style = document.createElement("style");
	style.textContent = css;
	document.head.appendChild(style);

	/* ---------- DOM ---------- */
	var el = function (tag, cls, html) {
		var n = document.createElement(tag);
		if (cls) n.className = cls;
		if (html != null) n.innerHTML = html;
		return n;
	};

	var island = el("div", "mi-hidden");
	island.id = "media-island";
	var pill = el("div", "mi-pill");
	var eq = el("span", "mi-eq");
	for (var i = 0; i < 4; i++) eq.appendChild(el("i"));
	pill.appendChild(eq);
	var label = el("span", "mi-label");
	pill.appendChild(label);
	var VOL_SVG = '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z"/></svg>';
	var volWrap = el("span", "mi-vol", VOL_SVG + '<span class="mi-vol-bar"><span class="mi-vol-fill"></span></span>');
	pill.appendChild(volWrap);
	var volFill = volWrap.querySelector(".mi-vol-fill");
	var dotCam = el("span", "mi-dot mi-dot-cam");
	var dotMic = el("span", "mi-dot mi-dot-mic");
	pill.appendChild(dotCam);
	pill.appendChild(dotMic);
	island.appendChild(pill);

	var detail = el("div", "mi-detail");
	var row = function (k, v, vcls) {
		var r = el("div", "mi-row");
		r.appendChild(el("span", "mi-k", k));
		r.appendChild(el("span", vcls || "mi-v", v));
		return r;
	};
	var songEl = row("正在播放", "—");
	var micStateEl = row("麦克风", "未使用");
	var camStateEl = row("相机", "未使用");
	detail.appendChild(songEl);
	detail.appendChild(micStateEl);
	detail.appendChild(camStateEl);
	detail.appendChild(el("div", "mi-tip", "点击收起"));
	island.appendChild(detail);
	document.body.appendChild(island);

	/* ---------- 调试台 ---------- */
	var dbg = el("div", "");
	dbg.id = "mi-debug";
	dbg.appendChild(el("div", "mid-head", "<span>灵动岛调试台</span><kbd>Ctrl+Shift+E</kbd>"));
	var sim = { audio: false, mic: false, cam: false };
	var simBtns = {};
	["audio", "mic", "cam"].forEach(function (k) {
		var names = { audio: "模拟音频播放", mic: "模拟麦克风占用", cam: "模拟摄像头占用" };
		var b = el("button", "", names[k]);
		b.type = "button";
		b.dataset.mid = k;
		dbg.appendChild(b);
		simBtns[k] = b;
	});
	var realEl = el("div", "mid-real", "");
	dbg.appendChild(realEl);
	dbg.appendChild(el("div", "mid-real", "快捷键 · Ctrl+Shift+↑/↓ 调音量"));
	document.body.appendChild(dbg);

	/* ---------- 逻辑 ---------- */
	var navUntil = 0;
	var volUntil = 0;
	var volLevel = 1;
	var dotsPrev = false;
	var hideAt = 0;
	var streams = [];
	var wrapped = typeof WeakSet !== "undefined" ? new WeakSet() : [];

	/* 收集文档自身 + 可访问的 iframe 内部文档（w10 等模拟器把音视频都放在 iframe 里） */
	function collectDocs(root, depth, out) {
		out.push(root);
		if (depth <= 0) return;
		var fs = root.querySelectorAll("iframe");
		for (var i = 0; i < fs.length; i++) {
			try {
				var d = fs[i].contentDocument;
				if (d && d.body) collectDocs(d, depth - 1, out);
			} catch (err) { /* 跨域 iframe 不可访问，忽略 */ }
		}
	}
	function collectMedia() {
		var docs = [];
		collectDocs(document, 3, docs);
		var all = [];
		for (var d = 0; d < docs.length; d++) {
			var list = docs[d].querySelectorAll("audio,video");
			for (var i = 0; i < list.length; i++) all.push(list[i]);
		}
		return all;
	}
	function isPlaying(a) {
		return !a.paused && !a.ended && !a.muted && a.volume > 0;
	}
	function audioPlaying() {
		var list = collectMedia();
		for (var i = 0; i < list.length; i++) if (isPlaying(list[i])) return true;
		return false;
	}
	function currentSong() {
		var t = document.querySelector(".music-title");
		var ar = document.querySelector(".music-artist");
		if (t && ar && t.innerText.trim()) return t.innerText.trim() + " · " + ar.innerText.trim();
		if (t && t.innerText.trim()) return t.innerText.trim();
		var list = collectMedia();
		for (var i = 0; i < list.length; i++) {
			var a = list[i];
			if (isPlaying(a)) {
				var name = a.title || a.getAttribute("aria-label") || (a.dataset && (a.dataset.title || a.dataset.name)) || "";
				if (name) return name;
			}
		}
		return "未知曲目";
	}
	function sync() {
		var realAudio = audioPlaying();
		var dev = deviceStreamState();
		var elDev = elementStreamState();
		var realMic = dev.mic || elDev.mic;
		var realCam = dev.cam || elDev.cam;
		var a = realAudio || sim.audio;
		var mic = realMic || sim.mic;
		var cam = realCam || sim.cam;
		var nav = performance.now() < navUntil;
		var vol = performance.now() < volUntil;
		// 点先灭、岛后收：红/绿点从亮到灭时，岛保留 600ms 再退场
		var dotsOn = mic || cam;
		if (dotsPrev && !dotsOn) hideAt = performance.now() + 600;
		dotsPrev = dotsOn;
		var any = a || mic || cam || nav || vol || performance.now() < hideAt;
		island.classList.toggle("mi-hidden", !any);
		eq.classList.toggle("show", a && !vol);
		dotMic.classList.toggle("show", mic);
		dotCam.classList.toggle("show", cam);
		volWrap.classList.toggle("show", vol);
		volFill.style.width = Math.round(volLevel * 100) + "%";
		label.style.display = vol ? "none" : "";
		/* 麦克风/相机占用只亮红/绿状态点，不再显示文字 */
		label.textContent = nav ? "正在跳转…" : a ? currentSong() : "";
		songEl.lastChild.textContent = a ? currentSong() : "—";
		micStateEl.lastChild.textContent = mic ? (sim.mic && !realMic ? "使用中（模拟）" : "使用中") : "未使用";
		camStateEl.lastChild.textContent = cam ? (sim.cam && !realCam ? "使用中（模拟）" : "使用中") : "未使用";
		realEl.textContent = "真实状态 · 音频:" + (realAudio ? "播放" : "无") + " 麦克风:" + (realMic ? "占用" : "无") + " 相机:" + (realCam ? "占用" : "无");
	}

	island.addEventListener("click", function () {
		island.classList.toggle("is-expanded");
	});

	["play", "pause", "ended"].forEach(function (n) {
		document.addEventListener(n, sync, true);
	});
	window.addEventListener("bg-player-state-change", sync);

	/* ---------- 音量捕获（主页面 + 同源 iframe） ---------- */
	function onVolChange(e) {
		var t = e.target;
		/* 忽略流预览元素（摄像头预览 muted 切换会发 volumechange，非用户调音量） */
		if (!t || typeof t.volume !== "number" || t.srcObject) return;
		volLevel = t.muted ? 0 : t.volume;
		volUntil = performance.now() + 2000;
		sync();
	}
	var hookedDocs = typeof WeakSet !== "undefined" ? new WeakSet() : [];
	function hookDocVolumes() {
		var docs = [];
		collectDocs(document, 3, docs);
		for (var i = 0; i < docs.length; i++) {
			if (hookedDocs.has(docs[i])) continue;
			hookedDocs.add(docs[i]);
			docs[i].addEventListener("volumechange", onVolChange, true);
		}
	}

	document.addEventListener(
		"click",
		function (e) {
			if (e.defaultPrevented || e.metaKey || e.ctrlKey) return;
			var t = e.target;
			var link = t && t.closest ? t.closest("a[href]") : null;
			if (!link) return;
			if (link.target === "_blank" || link.hasAttribute("download")) return;
			var href = link.getAttribute("href") || "";
			if (!href || href.charAt(0) === "#" || href.indexOf("javascript:") === 0 || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return;
			try {
				var u = new URL(link.href, location.href);
				if (u.origin !== location.origin) return;
				if (u.pathname === location.pathname && u.hash && u.hash !== location.hash) return;
			} catch (err) {
				return;
			}
			navUntil = performance.now() + 8000;
			sync();
		},
		true,
	);
	window.addEventListener("pageshow", function () {
		navUntil = 0;
		sync();
	});

	/* ---------- 麦克风/摄像头占用检测（主页面 + 同源 iframe） ---------- */
	function deviceStreamState() {
		var mic = false, cam = false;
		for (var i = 0; i < streams.length; i++) {
			var ts = streams[i].getTracks();
			for (var j = 0; j < ts.length; j++) {
				if (ts[j].readyState !== "live") continue;
				if (ts[j].kind === "audio") mic = true;
				if (ts[j].kind === "video") cam = true;
			}
		}
		return { mic: mic, cam: cam };
	}
	/* 兜底：扫描 video/audio 元素上的 srcObject 实时流（如模拟器把摄像头预览画到 video 上） */
	function elementStreamState() {
		var mic = false, cam = false;
		var docs = [];
		collectDocs(document, 3, docs);
		for (var d = 0; d < docs.length; d++) {
			var els = docs[d].querySelectorAll("video,audio");
			for (var i = 0; i < els.length; i++) {
				var s = els[i].srcObject;
				if (!s || !s.getTracks) continue;
				var ts = s.getTracks();
				for (var j = 0; j < ts.length; j++) {
					if (ts[j].readyState !== "live") continue;
					if (ts[j].kind === "video") cam = true;
					if (ts[j].kind === "audio") mic = true;
				}
			}
		}
		return { mic: mic, cam: cam };
	}
	function refreshDeviceState() {
		sync();
	}
	function watchStream(stream) {
		if (streams.indexOf(stream) === -1) streams.push(stream);
		stream.getTracks().forEach(function (t) {
			t.addEventListener("ended", refreshDeviceState);
			t.addEventListener("mute", refreshDeviceState);
			t.addEventListener("unmute", refreshDeviceState);
		});
		refreshDeviceState();
	}
	function attachGUM(mediaDevices) {
		if (!mediaDevices || !mediaDevices.getUserMedia) return;
		if (wrapped.has(mediaDevices)) return;
		wrapped.add(mediaDevices);
		var orig = mediaDevices.getUserMedia.bind(mediaDevices);
		mediaDevices.getUserMedia = function (constraints) {
			return orig(constraints).then(function (stream) {
				watchStream(stream);
				return stream;
			});
		};
	}
	/* 主页面 */
	if (navigator.mediaDevices) attachGUM(navigator.mediaDevices);
	/* 同源 iframe：w10 模拟器等在 iframe 内部调 getUserMedia，需包装它们自己的 mediaDevices */
	function wrapIframeGUM() {
		var docs = [];
		collectDocs(document, 3, docs);
		for (var i = 0; i < docs.length; i++) {
			var w = docs[i].defaultView;
			if (w && w.navigator) attachGUM(w.navigator.mediaDevices);
		}
	}

	window.addEventListener("keydown", function (e) {
		if (e.ctrlKey && e.shiftKey && (e.key === "E" || e.key === "e")) {
			e.preventDefault();
			dbg.classList.toggle("open");
		} else if (e.ctrlKey && e.shiftKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
			e.preventDefault();
			adjustVolume(e.key === "ArrowUp" ? 0.1 : -0.1);
		}
	});
	Object.keys(simBtns).forEach(function (k) {
		simBtns[k].addEventListener("click", function () {
			sim[k] = !sim[k];
			simBtns[k].classList.toggle("on", sim[k]);
			sync();
		});
	});

	/* 快捷键调音量：优先生效于正在播放的媒体（页面+iframe），无媒体时直接驱动音量条 */
	function adjustVolume(delta) {
		var media = collectMedia().filter(function (m) { return !m.srcObject; });
		var playing = media.filter(function (m) { return !m.paused && !m.ended; });
		var list = playing.length ? playing : media;
		if (list.length) {
			list.forEach(function (m) {
				if (m.muted && delta > 0) m.muted = false;
				m.volume = Math.min(1, Math.max(0, Math.round((m.volume + delta) * 100) / 100));
			});
		} else {
			volLevel = Math.min(1, Math.max(0, Math.round((volLevel + delta) * 100) / 100));
			volUntil = performance.now() + 2000;
			sync();
		}
	}

	setInterval(function () {
		wrapIframeGUM();
		hookDocVolumes();
		sync();
	}, 600);
	sync();
})();
