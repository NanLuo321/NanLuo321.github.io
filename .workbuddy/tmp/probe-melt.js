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

	const q = (s) => document.querySelector(s);
	const root = q("#top-search");
	const canvas = q("#top-search .ts-melt");
	const lens = q("#top-search .ts-lens");
	const grab = q("#top-search .ts-grab");
	const cap = q("#top-search .ts-capsule");

	const snap = (tag) => {
		const cs = canvas ? getComputedStyle(canvas) : null;
		const ls = lens ? getComputedStyle(lens) : null;
		const lr = lens ? lens.getBoundingClientRect() : null;
		return {
			t: tag,
			cls: root ? root.className : "-",
			cv: canvas ? `${canvas.width}x${canvas.height} op=${cs.opacity}` : "-",
			lens: lr
				? `${Math.round(lr.x)},${Math.round(lr.y)} ${Math.round(lr.width)}x${Math.round(lr.height)} r=${ls.borderRadius} op=${ls.opacity}`
				: "-",
			lensBd: ls ? String(ls.backdropFilter || "").slice(0, 30) : "-",
			capOp: cap ? getComputedStyle(cap).opacity : "-",
		};
	};

	const pd = (t, x, y, tgt, buttons) =>
		tgt.dispatchEvent(
			new PointerEvent(t, {
				clientX: x,
				clientY: y,
				bubbles: true,
				cancelable: true,
				composed: true,
				pointerId: 1,
				pointerType: "mouse",
				isPrimary: true,
				button: 0,
				buttons: buttons === undefined ? 1 : buttons,
			}),
		);

	const out = [];
	out.push(snap("idle"));
	pd("pointerdown", 720, 6, grab);
	await sleep(60);
	out.push(snap("down"));
	for (const y of [34, 90, 170, 250]) {
		pd("pointermove", 720, y, window);
		await sleep(80);
		out.push(snap("drag@" + y));
	}
	// 拉够（> 32% * 900 = 288）→ 松手成胶囊
	pd("pointerup", 720, 320, window, 0);
	await sleep(140);
	out.push(snap("release"));
	await sleep(1100);
	out.push(snap("settled"));

	// 搜索还能用吗
	const inp = q("#top-search .ts-input");
	if (inp) {
		inp.value = "文章";
		inp.dispatchEvent(new Event("input", { bubbles: true }));
	}
	await sleep(700);
	out.push({
			t: "search",
			hits: document.querySelectorAll("#top-search .ts-item").length,
			panel: !!q("#top-search .ts-results-panel"),
		});

	window.__topSearch.close();
	await sleep(900);
	out.push(snap("closed"));

	// Ctrl+Shift+E 调参面板
	document.dispatchEvent(
		new KeyboardEvent("keydown", {
			key: "e",
			code: "KeyE",
			ctrlKey: true,
			shiftKey: true,
			bubbles: true,
		}),
	);
	await sleep(250);
	out.push({
		t: "tune",
		panel: !!q("#top-search .ts-tune"),
		sliders: document.querySelectorAll('#top-search .ts-tune input[type="range"]')
			.length,
	});
	// 拖一格看看有没有改到读数
	const first = q('#top-search .ts-tune input[type="range"]');
	if (first) {
		first.value = "120";
		first.dispatchEvent(new Event("input", { bubbles: true }));
		await sleep(150);
		out.push({ t: "tune-slide", read: q("#top-search .ts-tune i")?.textContent });
	}

	return out;
})();
