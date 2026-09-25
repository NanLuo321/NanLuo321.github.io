(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	await sleep(800);
	const panel = document.querySelector("[data-ai-panel]");
	const attrs0 = Array.from(panel.attributes).map((a) => a.name + "=" + (a.value || "").slice(0, 20));
	document.querySelector("[data-ai-trigger]").click();
	await sleep(1600);
	const attrs1 = Array.from(panel.attributes).map((a) => a.name + "=" + (a.value || "").slice(0, 20));
	const lgOnAfterOpen = panel.hasAttribute("data-lg-on");
	// 手动抖一下 class，看显隐观察者还在不在
	panel.classList.add("probe-x");
	panel.classList.remove("probe-x");
	await sleep(600);
	const lgOnAfterNudge = panel.hasAttribute("data-lg-on");
	// 引擎滤镜池
	const defs = document.querySelector("svg defs") || document.querySelector("defs");
	return {
		attrs0,
		attrs1,
		lgOnAfterOpen,
		lgOnAfterNudge,
		filters: defs ? defs.querySelectorAll("filter").length : "no defs",
		engineTag: !!document.getElementById("lg-defs"),
		panelVis: getComputedStyle(panel).visibility,
		panelRect: (() => {
			const r = panel.getBoundingClientRect();
			return [Math.round(r.width), Math.round(r.height)];
		})(),
	};
})()
