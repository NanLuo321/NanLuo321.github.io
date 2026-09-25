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
	const grab = root.querySelector(".ts-grab");
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
	pd("pointerdown", 700, 5, grab);
	for (let y = 14; y <= 90; y += 8) {
		pd("pointermove", 700, y, window);
		await sleep(30);
	}
	pd("pointerup", 700, 90, window, 0); // 没拉够（<32%）→ 被吸回去
	await sleep(2200);
	const cs = getComputedStyle(cap);
	return JSON.stringify({
		capOpacity: cs.opacity,
		capCls: cap.className,
		rootCls: root.className,
	});
})();
