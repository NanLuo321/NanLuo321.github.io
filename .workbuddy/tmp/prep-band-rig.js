/* 测顶部残留阴影带：把壁纸换成已知纯色，任何压暗都只可能来自 melt 的 shade。
   同时给出液颈的存在性证据（在中轴上从顶边往下扫，找连续不透明段）。 */
(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 80 && !window.__topSearch; i++) await sleep(200);
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";
	await sleep(500);
	try {
		const btn = Array.from(document.querySelectorAll('button,a,[role=button]')).find(
			(x) => (x.textContent || "").indexOf("我知道了") >= 0,
		);
		if (btn) btn.click();
		const all = Array.from(document.querySelectorAll("div,section,dialog"));
		const m = all.find(
			(x) => (x.textContent || "").indexOf("更好的体验") >= 0 && x.children.length <= 10,
		);
		if (m) {
			let p = m;
			for (let i = 0; i < 7 && p.parentElement && p.parentElement !== document.body; i++)
				p = p.parentElement;
			if (p && p !== document.body) p.style.display = "none";
		}
	} catch (e) {}

	// 固定底：藏掉壁纸层与所有可能的叠加，铺一块已知中灰 (128,128,128)
	const w = document.getElementById("wallpaper-wrapper");
	if (w) w.style.display = "none";
	for (const el of document.querySelectorAll("#top-search")) el.style.setProperty("background", "none", "important");
	const bg = document.createElement("div");
	bg.id = "__rig_bg";
	bg.style.cssText =
		"position:fixed;inset:0;z-index:-1;background:rgb(128,128,128);pointer-events:none";
	document.body.appendChild(bg);
	document.body.style.setProperty("background", "rgb(128,128,128)", "important");
	await sleep(300);

	const grab = document.querySelector("#top-search .ts-grab");
	const pd = (t, x, y, tgt, b) =>
		tgt.dispatchEvent(
			new PointerEvent(t, {
				clientX: x,
				clientY: y,
				bubbles: true,
				cancelable: true,
				composed: true,
				pointerId: 1,
				pointerType: "mouse",
				isPrimary: true,
				button: 0,
				buttons: b === undefined ? 1 : b,
			}),
		);
	const mode = new URLSearchParams(location.search).get("rig") || "drag";
	if (mode === "drag") {
		pd("pointerdown", 700, 5, grab);
		await sleep(120);
		for (let y = 14; y <= 70; y += 8) {
			pd("pointermove", 700, y, window);
			await sleep(30);
		}
		await sleep(600);
	}
	/* 版本门是「等整站 ready 才出场」的，可能在我们等待期间才盖上 —— 收尾再压一次，
	   否则会得到一张全黑的图（这个假象骗过一整轮排查）。 */
	for (let i = 0; i < 20; i++) {
		const g = document.getElementById("version-gate");
		if (g) {
			g.hidden = true;
			g.classList.remove("is-cover", "is-shown", "is-ready");
		}
		await sleep(100);
	}
	return JSON.stringify({
		mode,
		bg: getComputedStyle(bg).backgroundColor,
		gate: document.getElementById("version-gate")?.className ?? "none",
	});
})();
