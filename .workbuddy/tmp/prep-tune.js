/* 验调参面板：真按一次 Ctrl+Shift+E（用 keydown 事件，走组件里那条监听） */
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

	const before = document.querySelectorAll("#top-search .ts-tune").length;
	document.dispatchEvent(
		new KeyboardEvent("keydown", {
			key: "E",
			code: "KeyE",
			ctrlKey: true,
			shiftKey: true,
			bubbles: true,
			cancelable: true,
		}),
	);
	await sleep(400);
	const panel = document.querySelector("#top-search .ts-tune");
	const rows = panel ? panel.querySelectorAll(".ts-tune-row") : [];
	const rect = panel ? panel.getBoundingClientRect() : null;

	// 顺手验一下滑块真的写进了引擎参数
	let tuned = null;
	if (rows.length) {
		const inp = rows[0].querySelector("input");
		if (inp) {
			inp.value = "120";
			inp.dispatchEvent(new Event("input", { bubbles: true }));
			await sleep(150);
			tuned = rows[0].textContent.trim().replace(/\s+/g, " ");
		}
	}
	const after = document.querySelectorAll("#top-search .ts-tune").length;
	for (let i = 0; i < 15; i++) {
		killGate();
		await sleep(80);
	}
	return JSON.stringify({
		before,
		after,
		rows: rows.length,
		firstRowLabel: rows.length ? rows[0].firstChild.textContent : null,
		tuned,
		rect: rect ? { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) } : null,
	});
})();
