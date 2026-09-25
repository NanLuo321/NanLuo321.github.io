(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 60 && !window.__topSearch; i++) await sleep(200);
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";
	await sleep(500);

	const cap = document.querySelector("#top-search .ts-capsule");
	const info = (tag) => ({
		t: tag,
		capCls: cap.className,
		capOp: getComputedStyle(cap).opacity,
		capDataLg: cap.hasAttribute("data-lg-on"),
		rootCls: document.querySelector("#top-search").className,
	});

	const out = [info("before")];
	window.__topSearch.open();
	await sleep(600);
	out.push(info("after-open"));
	// 找出命中 .ts-capsule 的所有规则
	const hits = [];
	for (const sheet of document.styleSheets) {
		let rules;
		try {
			rules = sheet.cssRules;
		} catch {
			continue;
		}
		for (const r of rules) {
			if (r.selectorText && r.selectorText.indexOf("ts-capsule") >= 0) {
				hits.push(`${r.selectorText} { ${r.style.cssText.slice(0, 90)} }`);
			}
		}
	}
	return { steps: out, rules: hits };
})();
