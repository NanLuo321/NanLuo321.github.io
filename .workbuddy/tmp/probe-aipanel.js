(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	const out = [];
	const trig = document.querySelector(".ai-trigger");
	if (!trig) return { err: "no .ai-trigger" };
	trig.click();
	await sleep(1500);
	const panel = document.querySelector(".ai-float-island");
	if (!panel) return { err: "no .ai-float-island after click" };
	const cs = getComputedStyle(panel);
	const st = panel.style;
	const r = panel.getBoundingClientRect();
	out.push({
		tag: "panel",
		cls: panel.className,
		lgOn: panel.hasAttribute("data-lg-on"),
		__lgOn: !!panel.__lgOn,
		inlineBg: st.getPropertyValue("background-color") + " | " + st.getPropertyPriority("background-color"),
		inlineBd: (st.getPropertyValue("backdrop-filter") || "").slice(0, 90) + " | " + st.getPropertyPriority("backdrop-filter"),
		compBg: cs.backgroundColor,
		compBd: cs.backdropFilter.slice(0, 90),
		pos: [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)],
	});
	// 祖先里谁上了玻璃
	const chain = [];
	let p = panel.parentElement;
	while (p && p !== document.body) {
		if (p.hasAttribute("data-lg-on") || p.__lgOn) chain.push(p.className || p.tagName);
		p = p.parentElement;
	}
	out.push({ tag: "glassAncestors", chain });
	// 引擎是否知道这个元素（register 列表 / 元素上有没有痕迹）
	out.push({
		tag: "engine",
		hasEngineScript: !!document.querySelector("script[data-lg-engine], script#liquid-glass"),
		bodyCls: document.body.className,
	});
	// 同页对照：左岛
	const island = document.querySelector("#navbar > div");
	if (island) {
		const ics = getComputedStyle(island);
		out.push({
			tag: "navbarIsland",
			lgOn: island.hasAttribute("data-lg-on"),
			inlineBg: island.style.getPropertyValue("background-color"),
			compBg: ics.backgroundColor,
			compBd: ics.backdropFilter.slice(0, 60),
		});
	}
	return out;
})()
