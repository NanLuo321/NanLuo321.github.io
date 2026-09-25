(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	let waited = 0;
	while (!window.__topSearch && waited < 20000) {
		await sleep(200);
		waited += 200;
	}
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";
	try {
		const btn = Array.from(document.querySelectorAll("button,a,[role=button]")).find(
			(x) => (x.textContent || "").indexOf("我知道了") >= 0,
		);
		if (btn) btn.click();
	} catch (e) {}
	await sleep(800);

	const q = (s) => document.querySelector(s);
	const rect = (el) => {
		const r = el.getBoundingClientRect();
		return (
			Math.round(r.x) + "," + Math.round(r.y) + " " + Math.round(r.width) + "x" + Math.round(r.height)
		);
	};
	const grab = q("#top-search .ts-grab");
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
	pd("pointerdown", 708, 5, grab);
	await sleep(200);
	for (const y of [80, 180, 300]) {
		pd("pointermove", 708, y, window);
		await sleep(500);
	}
	await sleep(1500);

	const canvas = q("#top-search .ts-melt");
	const lens = q("#top-search .ts-lens");
	const glide = canvas.getContext("webgl2");
	canvas.style.background = "#ff0000";
	await sleep(300);
	return {
		waitedMs: waited,
		hasApi: !!window.__topSearch,
		rootCls: q("#top-search").className,
		canvasOp: getComputedStyle(canvas).opacity,
		canvasRect: rect(canvas),
		canvasBuf: canvas.width + "x" + canvas.height,
		ctxLost: glide ? glide.isContextLost() : "no-ctx",
		ctxErr: glide ? glide.getError() : "-",
		lensRect: rect(lens),
	};
})();
