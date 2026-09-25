(async () => {
	const res = performance
		.getEntriesByType("resource")
		.filter((e) => /ArticleIsland|LiquidGlass/.test(e.name))
		.map((e) => `${e.name.split("/").slice(-2).join("/")} | ${e.initiatorType} | ${Math.round(e.duration)}ms | size=${e.transferSize} | ${e.responseStatus || ""}`);
	const scripts = Array.from(document.querySelectorAll("script[type=module], script[src]")).map((s) => (s.src || "").slice(-60)).slice(0, 12);
	return {
		res,
		scripts,
		rs: document.readyState,
		hasAstroPageLoad: true,
		panelInlineCss: document.querySelector("[data-ai-panel]")?.getAttribute("style"),
	};
})()
