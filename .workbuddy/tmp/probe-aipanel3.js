(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	const trig = document.querySelector("[data-ai-trigger]");
	const panel = document.querySelector("[data-ai-panel]");
	const island = document.querySelector(".article-island");
	const evs = typeof getEventListeners === "function" ? getEventListeners(trig) : null;
	const info = {
		trigListeners: evs ? Object.fromEntries(Object.entries(evs).map(([k, v]) => [k, v.length])) : "no API",
		docListeners: (() => {
			try {
				const d = getEventListeners(document);
				return Object.fromEntries(Object.entries(d).map(([k, v]) => [k, v.length]));
			} catch (e) {
				return String(e);
			}
		})(),
		caps: document.querySelectorAll(".ai-cap").length,
		innerWidth: window.innerWidth,
		mobileMaxGuess: getComputedStyle(document.documentElement).getPropertyValue("--x"),
	};
	// 真实指针序列
	const r = trig.getBoundingClientRect();
	const opts = { bubbles: true, cancelable: true, composed: true, clientX: r.left + 10, clientY: r.top + 10, button: 0, buttons: 1, pointerId: 1, pointerType: "mouse", isPrimary: true };
	trig.dispatchEvent(new PointerEvent("pointerdown", opts));
	trig.dispatchEvent(new MouseEvent("mousedown", opts));
	trig.dispatchEvent(new PointerEvent("pointerup", { ...opts, buttons: 0 }));
	trig.dispatchEvent(new MouseEvent("mouseup", { ...opts, buttons: 0 }));
	trig.dispatchEvent(new MouseEvent("click", { ...opts, buttons: 0 }));
	await sleep(1400);
	info.afterRealClick = `${island.className} | panel=${panel.className} | ${Math.round(panel.getBoundingClientRect().width)}x${Math.round(panel.getBoundingClientRect().height)}`;
	// 再直接调 click()
	trig.click();
	await sleep(1400);
	info.afterDotClick = `${island.className} | panel=${panel.className} | ${Math.round(panel.getBoundingClientRect().width)}x${Math.round(panel.getBoundingClientRect().height)}`;
	return info;
})()
