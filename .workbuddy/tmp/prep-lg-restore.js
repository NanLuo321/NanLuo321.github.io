(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
	await sleep(1000);
	const root = document.getElementById("top-search");
	const cap = root.querySelector(".ts-capsule");
	const pe = (t, x, y, tgt, btn) =>
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
				button: btn === undefined ? 0 : btn,
				buttons: btn === undefined ? 1 : 0,
			}),
		);
	const r = cap.getBoundingClientRect();
	const cx = r.left + r.width / 2;
	const cy = r.top + r.height / 2;
	// 悬停 → 点击展开 → 离开 → Esc 收起
	pe("pointerenter", cx, cy, cap);
	pe("pointermove", cx, cy, cap);
	await sleep(300);
	pe("pointerdown", cx, cy, cap);
	pe("pointerup", cx, cy, cap, 0);
	pe("click", cx, cy, cap);
	await sleep(500);
	pe("pointerleave", cx, cy, cap);
	await sleep(300);
	document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
	await sleep(1200);
	const lg = window.__liquidGlass;
	const before = {
		lgOn: cap.getAttribute("data-lg-on") !== null,
		computedBd: getComputedStyle(cap).backdropFilter.slice(0, 26),
		applied: lg.stats().applied,
	};
	// 手动补一枪 register，看返回值
	const ret = lg.register(cap, {
		band: 20,
		strength: 1.15,
		blur: 10,
		sat: 1.1,
		tint: 0.62,
		force: true,
	});
	await sleep(200);
	const after = {
		ret,
		lgOn: cap.getAttribute("data-lg-on") !== null,
		computedBd: getComputedStyle(cap).backdropFilter.slice(0, 26),
		applied: lg.stats().applied,
	};
	return JSON.stringify({ before, after });
})();
