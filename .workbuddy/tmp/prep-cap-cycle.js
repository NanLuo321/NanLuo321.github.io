(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
	await sleep(400);
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";

	const root = document.getElementById("top-search");
	const cap = root.querySelector(".ts-capsule");
	const canvas = root.querySelector(".ts-melt");
	const cs = (el) => getComputedStyle(el);
	const snap = (tag) =>
		({
			tag,
			rootCls: root.className,
			capOpacity: cs(cap).opacity,
			capBg: cs(cap).backgroundColor,
			capBlur: cs(cap).backdropFilter.slice(0, 24),
			canvasOpacity: cs(canvas).opacity,
			focused: document.activeElement === cap.querySelector(".ts-input"),
			panel: Boolean(root.querySelector(".ts-results-panel")),
		});

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
	const out = { idle: snap("idle") };

	// 悬停 → 点一下展开
	pe("pointerenter", cx, cy, cap);
	pe("pointermove", cx, cy, cap);
	await sleep(350);
	out.hover = snap("hover");
	pe("pointerdown", cx, cy, cap);
	pe("pointerup", cx, cy, cap, 0);
	pe("click", cx, cy, cap);
	await sleep(600);
	out.open = snap("open");

	// 指针离开（打开态玻璃应保持）
	pe("pointerout", cx, cy, cap);
	pe("pointerleave", cx, cy, cap);
	await sleep(500);
	out.openLeft = snap("openLeft");

	// Esc 收起 → 胶囊留在原地，玻璃交还 CSS/LiquidGlass
	document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
	await sleep(900);
	out.closed = snap("closed");
	return JSON.stringify(out);
})();
