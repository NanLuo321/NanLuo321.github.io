(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
	await sleep(1200); // 给 LiquidGlass 充分时间
	const cap = document.querySelector(".ts-capsule");
	const stats = window.__liquidGlass ? window.__liquidGlass.stats() : null;
	return JSON.stringify({
		hasLg: Boolean(window.__liquidGlass),
		lgOn: cap.getAttribute("data-lg-on") !== null,
		lgSkip: cap.getAttribute("data-lg-skip") !== null,
		inlineBd: cap.style.getPropertyValue("backdrop-filter"),
		computedBd: getComputedStyle(cap).backdropFilter.slice(0, 30),
		stats: stats ? { applied: stats.applied } : null,
		promax: document.body.classList.contains("site-promax"),
	});
})();
