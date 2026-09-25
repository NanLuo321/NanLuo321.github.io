(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
	await sleep(400);

	// 版本门可能在 prep 等待期间才盖上 → 再压一次
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";

	const root = document.getElementById("top-search");
	const cap = root.querySelector(".ts-capsule");
	const canvas = root.querySelector(".ts-melt");
	const out = { before: {} };

	const cs = (el) => getComputedStyle(el);
	out.before.capsule = {
		opacity: cs(cap).opacity,
		pe: cs(cap).pointerEvents,
		blur: cs(cap).backdropFilter,
		bg: cs(cap).backgroundColor,
		cls: cap.className,
		rect: JSON.parse(JSON.stringify(cap.getBoundingClientRect())),
	};
	out.before.canvasOpacity = cs(canvas).opacity;

	// 悬停：pointerenter + 移到胶囊中部
	const pe = (t, x, y, tgt) =>
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
				buttons: 0,
			}),
		);
	const r = cap.getBoundingClientRect();
	pe("pointerenter", r.left + r.width / 2, r.top + r.height / 2, cap);
	for (let i = 0; i < 14; i++) {
		pe(
			"pointermove",
			r.left + r.width / 2 + (i - 7) * 6,
			r.top + r.height / 2,
			cap,
		);
		await sleep(60);
	}
	await sleep(500);
	out.hover = {
		rootCls: root.className,
		canvasOpacity: cs(canvas).opacity,
		capsuleBg: cs(cap).backgroundColor,
		capsuleBlur: cs(cap).backdropFilter,
	};
	// 悬停态截图由 shot.js 负责，这里把状态留住
	window.__hoverRect = r;
	return JSON.stringify(out);
})();
