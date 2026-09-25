(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
	await sleep(500);
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";

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
	// 悬停 → 点击展开 → 输入关键词出结果面板
	pe("pointerenter", cx, cy, cap);
	pe("pointermove", cx, cy, cap);
	await sleep(300);
	pe("pointerdown", cx, cy, cap);
	pe("pointerup", cx, cy, cap, 0);
	pe("click", cx, cy, cap);
	await sleep(500);
	const inp = cap.querySelector(".ts-input");
	const setter = Object.getOwnPropertyDescriptor(
		HTMLInputElement.prototype,
		"value",
	).set;
	setter.call(inp, "svelte");
	inp.dispatchEvent(new Event("input", { bubbles: true }));
	await sleep(1400);
	return "open-kw";
})();
