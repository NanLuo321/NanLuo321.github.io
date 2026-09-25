(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 100 && document.readyState !== "complete"; i++) await sleep(300);
	const killGate = () => {
		try {
			const g = document.getElementById("version-gate");
			if (g) {
				g.hidden = true;
				g.style.display = "none";
				g.style.pointerEvents = "none";
			}
			document.documentElement.style.overflow = "";
			document.querySelectorAll(".ai-hint-modal").forEach((m) => m.remove());
		} catch (e) {}
	};
	killGate();
	await sleep(1200);
	killGate();
	// 把鼠标移开，保持岛收起态
	document.body.dispatchEvent(
		new PointerEvent("pointermove", { bubbles: true, clientX: 20, clientY: 20, pointerType: "mouse", isPrimary: true }),
	);
	await sleep(1400);
	const arrow = document.querySelector(".promax-island-toggle, .navbar-hide-arrow, [data-island-arrow]");
	return {
		arrowCls: arrow ? arrow.className : "未按类名找到",
		arrowRect: arrow
			? (() => {
					const r = arrow.getBoundingClientRect();
					return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)];
				})()
			: null,
	};
})()
