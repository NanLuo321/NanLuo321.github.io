(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	const killGate = () => {
		try {
			const g = document.getElementById("version-gate");
			if (g) {
				g.hidden = true;
				g.style.display = "none";
			}
			document.documentElement.style.overflow = "";
			document.querySelectorAll(".ai-hint-modal").forEach((m) => m.remove());
		} catch (e) {}
	};
	killGate();
	await sleep(900);
	killGate();
	// 把鼠标移开，让岛自动隐藏
	window.dispatchEvent(
		new PointerEvent("pointermove", { bubbles: true, clientX: 15, clientY: 15, pointerType: "mouse", isPrimary: true }),
	);
	await sleep(1500);
	const out = { viewport: [window.innerWidth, window.innerHeight] };
	out.wrapperCls = document.getElementById("navbar-wrapper")?.className;
	out.toggleRect = (() => {
		const r = document.getElementById("fullscreen-navbar-toggle").getBoundingClientRect();
		return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)];
	})();
	out.hit710 = document.elementsFromPoint(710, 690).slice(0, 3).map((el) => ({
		tag: el.tagName,
		id: el.id,
		cls: (el.className || "").toString().slice(0, 50),
		rect: (() => {
			const r = el.getBoundingClientRect();
			return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)];
		})(),
	}));
	// 找出这个点上所有「画着东西」的元素
	const hits = [];
	document.querySelectorAll("body *").forEach((el) => {
		const r = el.getBoundingClientRect();
		if (r.left <= 710 && r.right >= 710 && r.top <= 690 && r.bottom >= 690 && r.width < 200 && r.height < 200) {
			const cs = getComputedStyle(el);
			if (cs.visibility === "hidden" || cs.display === "none" || cs.opacity === "0") return;
			hits.push(`${el.tagName}#${el.id}.${(el.className || "").toString().slice(0, 36)} ${Math.round(r.width)}x${Math.round(r.height)}@${Math.round(r.left)},${Math.round(r.top)} z=${cs.zIndex} op=${cs.opacity}`);
		}
	});
	out.smallElsAtPoint = hits.slice(0, 12);
	return out;
})()
