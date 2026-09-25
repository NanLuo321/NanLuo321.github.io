(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	const trig = document.querySelector("[data-ai-trigger]");
	const panel = document.querySelector("[data-ai-panel]");
	const hist = [];
	const snap = (t) => {
		const r = panel.getBoundingClientRect();
		hist.push(`${t} cls=${panel.className} | ${Math.round(r.width)}x${Math.round(r.height)} @${Math.round(r.left)},${Math.round(r.top)}`);
	};
	snap("t0");
	trig.click();
	for (const t of [120, 500, 1200, 2000, 3000]) {
		await sleep(t === 120 ? 120 : 300);
		snap(t);
	}
	const cs = getComputedStyle(panel);
	return {
		hist,
		lgOn: panel.hasAttribute("data-lg-on"),
		__lgOn: !!panel.__lgOn,
		inlineBg: panel.style.getPropertyValue("background-color"),
		inlineBd: (panel.style.getPropertyValue("backdrop-filter") || "").slice(0, 80),
		compBg: cs.backgroundColor,
		compBd: cs.backdropFilter.slice(0, 80),
		compBgi: cs.backgroundImage.slice(0, 120),
		navbarBlurVar: cs.getPropertyValue("--navbar-glass-blur"),
		lgTint: cs.getPropertyValue("--lg-tint-bg"),
		islandOpen: document.querySelector(".article-island")?.className,
	};
})()
