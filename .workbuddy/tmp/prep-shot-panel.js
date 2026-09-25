(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	const killGate = () => {
		try {
			const g = document.getElementById("version-gate");
			if (g) {
				g.hidden = true;
				g.style.display = "none";
				g.style.pointerEvents = "none";
			}
			document.documentElement.style.overflow = "";
			document.querySelectorAll(".ai-hint-modal").forEach((m) => m.remove());
		} catch (e) {}
	};
	killGate();
	await sleep(900);
	killGate();
	const t = document.querySelector("[data-ai-trigger]");
	if (t) t.click();
	await sleep(1800);
	killGate();
	return "panel-open";
})()
