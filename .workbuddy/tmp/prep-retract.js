/* 关掉搜索 → 液滴应该被顶边吸回去（retractFromCapsule），沿途仍是液态玻璃 */
(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 80 && !window.__topSearch; i++) await sleep(200);
	const killGate = () => {
		const g = document.getElementById("version-gate");
		if (g) {
			g.hidden = true;
			g.classList.remove("is-cover", "is-shown", "is-ready");
		}
	};
	killGate();
	document.documentElement.style.overflow = "";
	await sleep(500);
	try {
		const btn = Array.from(document.querySelectorAll("button,a,[role=button]")).find(
			(x) => (x.textContent || "").indexOf("我知道了") >= 0,
		);
		if (btn) btn.click();
		const all = Array.from(document.querySelectorAll("div,section,dialog"));
		const m = all.find(
			(x) => (x.textContent || "").indexOf("更好的体验") >= 0 && x.children.length <= 10,
		);
		if (m) {
			let p = m;
			for (let i = 0; i < 7 && p.parentElement && p.parentElement !== document.body; i++)
				p = p.parentElement;
			if (p && p !== document.body) p.style.display = "none";
		}
	} catch (e) {}

	// 打开
	window.__topSearch.open();
	await sleep(2200);
	const opened = window.__topSearch.isOpen();
	// 关闭
	window.__topSearch.close();
	await sleep(300);
	const mid = document.querySelector("#top-search").className;
	const lens = document.querySelector("#top-search .ts-lens");
	const mr = lens ? lens.getBoundingClientRect() : null;
	const box = mr
		? { x: Math.round(mr.x), y: Math.round(mr.y), w: Math.round(mr.width), h: Math.round(mr.height) }
		: null;
	await sleep(2600);
	for (let i = 0; i < 12; i++) {
		killGate();
		await sleep(80);
	}
	return JSON.stringify({
		opened,
		midClass: mid,
		lensMid: box,
		endClass: document.querySelector("#top-search").className,
		endLens: (() => {
			const l = document.querySelector("#top-search .ts-lens");
			const r = l ? l.getBoundingClientRect() : null;
			return r ? { y: Math.round(r.y), w: Math.round(r.width) } : null;
		})(),
	});
})();
