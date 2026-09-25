(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 60 && !window.__topSearch; i++) await sleep(200);
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";
	await sleep(500);

	const q = (s) => document.querySelector(s);
	const root = q("#top-search");
	const cap = q("#top-search .ts-capsule");
	const lens = q("#top-search .ts-lens");
	const grab = q("#top-search .ts-grab");

	const pd = (t, x, y, tgt, buttons) =>
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
				buttons: buttons === undefined ? 1 : buttons,
			}),
		);

	const vh = document.documentElement.clientHeight;
	const vw = document.documentElement.clientWidth;
	const row = (t) => {
		const lr = lens.getBoundingClientRect();
		return `${String(t).padStart(5)} | root=${root.className.replace("svelte-ae2byi", "").padEnd(26)} | cap=${cap.className.replace("ts-capsule svelte-ae2byi", "cap").padEnd(14)} op=${getComputedStyle(cap).opacity.padEnd(6)} | lens=${Math.round(lr.x)},${Math.round(lr.y)} ${Math.round(lr.width)}x${Math.round(lr.height)}`;
	};

	const out = [`viewport ${vw}x${vh} · 阈值 ${Math.round(vh * 0.32)}px`, row(0)];
	pd("pointerdown", 720, 6, grab);
	pd("pointermove", 720, 60, window);
	await sleep(50);
	pd("pointermove", 720, 160, window);
	await sleep(50);
	pd("pointermove", 720, 300, window);
	await sleep(50);
	out.push(row("拖到300"));
	pd("pointerup", 720, 300, window, 0);
	const t0 = performance.now();
	for (let i = 1; i <= 26; i++) {
		await sleep(80);
		out.push(row(Math.round(performance.now() - t0)));
	}
	return out;
})();
