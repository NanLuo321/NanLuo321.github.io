(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	await sleep(1500);
	const on = Array.from(document.querySelectorAll("[data-lg-on]"));
	return {
		hardwareConcurrency: navigator.hardwareConcurrency,
		glassCount: on.length,
		list: on.slice(0, 45).map((e) => (e.className || e.tagName).toString().slice(0, 44)),
		panelIsGlass: document.querySelector("[data-ai-panel]").hasAttribute("data-lg-on"),
	};
})()
