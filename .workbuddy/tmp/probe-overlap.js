(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	const killGate = () => {
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
	killGate();
	await sleep(900);
	killGate();
	document.querySelector("[data-ai-trigger]")?.click();
	await sleep(1800);
	const ind = document.getElementById("scroll-down-indicator");
	const ir = ind.getBoundingClientRect();
	const cx = Math.round(ir.left + ir.width / 2);
	const cy = Math.round(ir.top + ir.height / 2);
	const panel = document.querySelector("[data-ai-panel]");
	const pr = panel.getBoundingClientRect();
	const overlap =
		ir.left < pr.right && ir.right > pr.left && ir.top < pr.bottom && ir.bottom > pr.top;
	return {
		indicatorRect: [Math.round(ir.left), Math.round(ir.top), Math.round(ir.width), Math.round(ir.height)],
		indicatorCls: ind.className,
		panelRect: [Math.round(pr.left), Math.round(pr.top), Math.round(pr.width), Math.round(pr.height)],
		overlap,
		topmostAtIndicatorCenter: document.elementsFromPoint(cx, cy).slice(0, 4).map((el) => `${el.tagName}#${el.id}.${(el.className || "").toString().slice(0, 40)}`),
		panelGlass: panel.hasAttribute("data-lg-on"),
	};
})()
