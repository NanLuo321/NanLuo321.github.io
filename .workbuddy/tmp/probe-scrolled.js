(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	const gate = () => {
		try {
			const g = document.getElementById("version-gate");
			if (g) {
				g.hidden = true;
				g.style.display = "none";
			}
			document.documentElement.style.overflow = "";
			document.querySelectorAll(".ai-hint-modal").forEach((m) => m.remove());
		} catch (e) {}
	};
	gate();
	await sleep(700);
	gate();
	const out = { steps: [] };
	const snap = (t) => {
		const panel = document.querySelector("[data-ai-panel]");
		const r = panel.getBoundingClientRect();
		const isl = document.querySelector("[data-article-island]").getBoundingClientRect();
		out.steps.push({
			t,
			scrollY: Math.round(window.scrollY),
			panel: `${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)}`,
			panelInView: r.top >= 0 && r.bottom <= window.innerHeight + 1,
			islandTop: Math.round(isl.top),
			panelGlass: panel.hasAttribute("data-lg-on"),
			bodyCls: document.body.classList.contains("pm-at-top") ? "pm-at-top" : "(scrolled)",
		});
	};
	snap("顶部·收起");
	window.scrollTo(0, 700);
	await sleep(900);
	snap("滚到700·收起");
	document.querySelector("[data-ai-trigger]").click();
	await sleep(1700);
	snap("滚到700·展开");
	document.querySelector("[data-ai-trigger]").click();
	await sleep(1400);
	window.scrollTo(0, 0);
	await sleep(900);
	snap("回顶·收起");
	document.querySelector("[data-ai-trigger]").click();
	await sleep(1700);
	snap("回顶·展开");
	return out;
})()
