(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	const describe = (el, pt) => {
		if (!el) return null;
		const r = el.getBoundingClientRect();
		return {
			pt,
			tag: el.tagName,
			id: el.id,
			cls: (el.className || "").toString().slice(0, 70),
			rect: [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)],
			text: (el.textContent || "").trim().slice(0, 24),
			zIndex: getComputedStyle(el).zIndex,
			html: el.outerHTML.slice(0, 160),
		};
	};
	const pts = [
		[710, 685],
		[730, 690],
		[1080, 750],
	];
	const out = {};
	pts.forEach((p) => {
		const list = document.elementsFromPoint(p[0], p[1]);
		out[p.join(",")] = list.slice(0, 4).map((el, i) => describe(el, p));
	});
	return out;
})()
