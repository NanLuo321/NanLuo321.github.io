(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	await sleep(1000);
	const stats0 = window.__liquidGlass ? window.__liquidGlass.stats() : null;
	const panel = document.querySelector("[data-ai-panel]");
	const out = {
		statsCount: stats0 ? stats0.applied : "no engine",
		appliedList: stats0 ? stats0.el.map((e) => (e.className || e.tagName).toString().slice(0, 30)) : null,
	};
	document.querySelector("[data-ai-trigger]").click();
	await sleep(1600);
	out.lgOnAfterOpen = panel.hasAttribute("data-lg-on");
	out.attrsAfterOpen = Array.from(panel.attributes).map((a) => a.name);
	out.hidden = getComputedStyle(panel).visibility;
	// 手动请引擎给它上玻璃，看它到底能不能上
	if (window.__liquidGlass) {
		const ok = window.__liquidGlass.register(panel, {
			band: 24,
			strength: 1.2,
			blur: 2.2,
			sat: 1.2,
			tint: 0.62,
			nest: true,
			force: true,
		});
		out.registerReturned = ok;
		await sleep(400);
		out.lgOnAfterRegister = panel.hasAttribute("data-lg-on");
		out.inlineBdAfter = (panel.style.getPropertyValue("backdrop-filter") || "(空)").slice(0, 80);
		out.inlineBgAfter = panel.style.getPropertyValue("background-color") || "(空)";
		out.lgTintAfter = panel.style.getPropertyValue("--lg-tint-bg") || "(空,继承)";
	}
	out.stats1 = window.__liquidGlass ? window.__liquidGlass.stats().applied : null;
	return out;
})()
