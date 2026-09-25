(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 80 && !window.__topSearch; i++) await sleep(200);
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";
	await sleep(600);
	try {
		const btn = Array.from(document.querySelectorAll('button,a,[role=button]')).find(
			(x) => (x.textContent || "").indexOf("我知道了") >= 0,
		);
		if (btn) btn.click();
		const all = Array.from(document.querySelectorAll("div,section,dialog"));
		const m = all.find(
			(x) =>
				(x.textContent || "").indexOf("更好的体验") >= 0 && x.children.length <= 10,
		);
		if (m) {
			let p = m;
			for (let i = 0; i < 7 && p.parentElement && p.parentElement !== document.body; i++)
				p = p.parentElement;
			if (p && p !== document.body) p.style.display = "none";
		}
	} catch (e) {}

	const canvas = document.querySelector("#top-search .ts-melt");
	const gl = canvas.getContext("webgl2");
	const H = canvas.height;
	const row = (cssY, x) => {
		const px = new Uint8Array(4);
		gl.readPixels(x, H - cssY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
		return Array.from(px).join(",");
	};
	/* readPixels 只在「引擎这一帧已经画完、缓冲区还没被合成器丢弃」时有效。
	   引擎的 rAF 与我们的 rAF 谁先谁后由注册顺序决定 → 连采 40 帧取每个点的
	   最大 alpha，总能覆盖到引擎画完的那几帧。 */
	const scanTop = async (xs) => {
		const best = {};
		for (let f = 0; f < 40; f++) {
			await new Promise((r) => requestAnimationFrame(r));
			for (const k in xs) {
				const [cx, cy] = xs[k];
				const px = new Uint8Array(4);
				gl.readPixels(cx, H - cy, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
				const cur = best[k];
				if (!cur || px[3] > cur.a) best[k] = { a: px[3], v: Array.from(px).join(",") };
			}
		}
		const o = {};
		for (const k in xs) o[k] = best[k] ? best[k].v : "none";
		return o;
	};
	const TOP = { y1: [100, 1], y4: [100, 4], y10: [100, 10], y20: [100, 20], y34: [100, 34], y50: [100, 50], y70: [100, 70], y100: [100, 100] };
	const NECK = { blob: [700, 70], neck: [700, 30], neck2: [700, 46], farLeft: [60, 70], farRight: [1300, 70] };

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

	const out = {};
	out.idle = await scanTop(TOP);

	pd("pointerdown", 700, 5, grab);
	await sleep(120);
	for (let y = 14; y <= 70; y += 8) {
		pd("pointermove", 700, y, window);
		await sleep(30);
	}
	await sleep(400);
	out.dragTop = await scanTop(TOP);
	out.dragNeck = await scanTop(NECK);
	out.canvas = { w: canvas.width, h: canvas.height, cssW: canvas.clientWidth };
	out.meltClass = document.querySelector("#top-search").className;
	out.err = gl.getError();
	return out;
})();
