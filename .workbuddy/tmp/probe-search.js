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
	await sleep(800);
	gate();
	const before = {
		resultsPanel: !!document.querySelector(".dis-results-panel"),
		resultsGlass: document.querySelector(".dis-results-panel")?.hasAttribute("data-lg-on"),
		inputContainer: !!document.querySelector(".dis-input-container"),
		inputGlass: document.querySelector(".dis-input-container")?.hasAttribute("data-lg-on"),
	};
	// 点搜索按钮（#navbar-actions 里的第一个按钮）
	const btn = document.querySelector("#navbar-actions button");
	if (btn) btn.click();
	await sleep(1600);
	const rp = document.querySelector(".dis-results-panel");
	const ic = document.querySelector(".dis-input-container");
	const st = (el) =>
		el
			? {
					cls: (el.className || "").toString().slice(0, 54),
					glass: el.hasAttribute("data-lg-on"),
					bd: (getComputedStyle(el).backdropFilter || "").slice(0, 42),
					bg: getComputedStyle(el).backgroundColor,
					rect: (() => {
						const r = el.getBoundingClientRect();
						return [Math.round(r.width), Math.round(r.height)];
					})(),
				}
			: null;
	return { before, clicked: !!btn, results: st(rp), input: st(ic), islandGlass: document.querySelector("#navbar > div").hasAttribute("data-lg-on") };
})()
