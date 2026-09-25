(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	await sleep(800);
	const trig = document.querySelector("[data-ai-trigger]");
	if (!trig) return { err: "no trigger" };
	trig.click();
	await sleep(1600);
	const panel = document.querySelector("[data-ai-panel]");
	const cs = getComputedStyle(panel);
	const r = panel.getBoundingClientRect();
	return {
		readyState: document.readyState,
		cls: panel.className,
		rect: [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)],
		lgOn: panel.hasAttribute("data-lg-on"),
		inlineBg: panel.style.getPropertyValue("background-color") || "(空)",
		inlineBgi: (panel.style.getPropertyValue("background-image") || "(空)").slice(0, 200),
		inlineBd: (panel.style.getPropertyValue("backdrop-filter") || "(空)").slice(0, 90),
		compBg: cs.backgroundColor,
		compBd: cs.backdropFilter.slice(0, 90),
		compBgi: cs.backgroundImage.slice(0, 200),
		glassTopVar: cs.getPropertyValue("--ai-glass-top"),
		lgTintBg: cs.getPropertyValue("--lg-tint-bg"),
		islandInlineBg: document.querySelector("#navbar > div")?.style.getPropertyValue("background-color"),
	};
})()
