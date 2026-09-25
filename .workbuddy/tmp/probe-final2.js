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
	const steps = [];
	const trig = document.querySelector("[data-ai-trigger]");
	const panel = document.querySelector("[data-ai-panel]");
	const island = document.querySelector(".article-island");
	const frame = document.querySelector("#navbar > div");
	const ind = document.getElementById("scroll-down-indicator");
	const snap = (t) => {
		const r = panel.getBoundingClientRect();
		steps.push({
			t,
			open: island.classList.contains("open"),
			panelCls: panel.className,
			panelGlass: panel.hasAttribute("data-lg-on"),
			panelBd: (getComputedStyle(panel).backdropFilter || "").slice(0, 40),
			panelRect: `${Math.round(r.width)}x${Math.round(r.height)}`,
			islandGlass: frame.hasAttribute("data-lg-on"),
			islandBd: (getComputedStyle(frame).backdropFilter || "").slice(0, 34),
			indicatorOpacity: getComputedStyle(ind).opacity,
			caps: document.querySelectorAll(".ai-cap").length,
			href: location.pathname,
		});
	};
	snap("初始");
	trig.click();
	await sleep(1700);
	snap("展开");
	trig.click();
	await sleep(1500);
	snap("收起");
	trig.click();
	await sleep(1700);
	snap("再展开");
	if (window.swup && window.swup.navigate) window.swup.navigate("/archive/");
	await sleep(1800);
	snap("切页后");
	const t2 = document.querySelector("[data-ai-trigger]");
	if (t2) t2.click();
	await sleep(1700);
	snap("切页后展开");
	trig.click();
	await sleep(1400);
	snap("切页后收起");
	return steps;
})()
