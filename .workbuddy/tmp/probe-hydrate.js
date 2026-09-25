(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	const out = [];
	const snap = (tag) => {
		const isls = [...document.querySelectorAll("astro-island")].map((el) => ({
			name: JSON.parse(el.getAttribute("opts") || "{}").name || "?",
			ssr: el.hasAttribute("ssr"),
			kids: el.children.length,
		}));
		out.push({
			t: tag,
			api: typeof window.__topSearch,
			islands: isls,
			layerDisp: document.querySelector("#top-search")
				? getComputedStyle(document.querySelector("#top-search")).display
				: null,
		});
	};
	snap("t0");
	await sleep(3000);
	snap("t3");
	await sleep(5000);
	snap("t8");
	return out;
})();
