(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
	await sleep(1000);
	const root = document.getElementById("top-search");
	const cap = root.querySelector(".ts-capsule");
	const lg = window.__liquidGlass;
	// 钩住 register / unregister，记录调用
	const log = [];
	const oReg = lg.register.bind(lg);
	const oUnreg = lg.unregister.bind(lg);
	lg.register = (el, cfg) => {
		const ret = oReg(el, cfg);
		log.push({
			op: "reg",
			ret,
			isCap: el === cap,
			t: performance.now() | 0,
		});
		return ret;
	};
	lg.unregister = (el) => {
		log.push({ op: "unreg", isCap: el === cap, t: performance.now() | 0 });
		return oUnreg(el);
	};
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
	await sleep(1500);
	return JSON.stringify({
		log,
		finalBd: getComputedStyle(cap).backdropFilter.slice(0, 26),
		lgOn: cap.getAttribute("data-lg-on") !== null,
	});
})();
