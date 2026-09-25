(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	const log = [];
	const q = (s) => document.querySelector(s);
	const box = (el) => {
		if (!el) return null;
		const r = el.getBoundingClientRect();
		return `${Math.round(r.x)},${Math.round(r.y)} ${Math.round(r.width)}x${Math.round(r.height)}`;
	};
	const css = (el, props) => {
		if (!el) return null;
		const cs = getComputedStyle(el);
		const o = {};
		for (const p of props) o[p] = cs[p];
		return o;
	};

	const layer = q("#top-search");
	const grab = q(".ts-grab");
	const cap = q(".ts-capsule");
	const hint = q(".ts-hint");
	const api = window.__topSearch;

	const snap = (tag) => {
		const c = q(".ts-capsule");
		const panel = q(".ts-results-panel");
		log.push({
			t: tag,
			layer: layer ? getComputedStyle(layer).display : null,
			api: !!api,
			capRect: box(c),
			capCls: c ? c.className.replace(/svelte-\S+/g, "").trim() : null,
			capBd: c ? getComputedStyle(c).backdropFilter : null,
			capBg: c ? getComputedStyle(c).backgroundColor : null,
			lgOn: c ? c.hasAttribute("data-lg-on") : null,
			blobOp: q(".ts-blob") ? getComputedStyle(q(".ts-blob")).opacity : null,
			goo: q(".ts-goo") ? getComputedStyle(q(".ts-goo")).display : null,
			hintOp: q(".ts-hint") ? getComputedStyle(q(".ts-hint")).opacity : null,
			panel: box(panel),
			hits: document.querySelectorAll(".ts-item").length,
			focus: document.activeElement ? document.activeElement.className.split(" ")[0] : null,
		});
	};

	if (!layer || !grab || !cap || !api) {
		return { fatal: "missing", layer: !!layer, grab: !!grab, cap: !!cap, api: !!api };
	}

	// 本会话第一次进站：提示应该在挂载 1.5s 后自己露脸
	await sleep(300);
	snap("idle");
	// 鼠标贴到屏幕顶部 → 也该出提示
	window.dispatchEvent(
		new PointerEvent("pointermove", {
			clientX: 700,
			clientY: 8,
			bubbles: true,
			pointerId: 9,
			pointerType: "mouse",
			isPrimary: true,
		}),
	);
	await sleep(260);
	snap("hover-top");
	window.dispatchEvent(
		new PointerEvent("pointermove", {
			clientX: 700,
			clientY: 500,
			bubbles: true,
			pointerId: 9,
			pointerType: "mouse",
			isPrimary: true,
		}),
	);
	await sleep(260);
	snap("hover-away");

	const pd = (type, x, y, target, buttons) =>
		target.dispatchEvent(
			new PointerEvent(type, {
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

	// ① 顶部往下拖 → 松手够远 → 应该落成胶囊
	pd("pointerdown", 700, 6, grab);
	for (let y = 20; y <= 420; y += 40) {
		pd("pointermove", 700 + (y % 80) * 0.5, y, window);
		await sleep(16);
	}
	snap("drag");
	pd("pointerup", 705, 430, window, 0);
	await sleep(240);
	snap("open+0.24s");
	await sleep(900);
	snap("open+1.1s");

	// ② 打字 → 结果面板
	const inp = q(".ts-input");
	if (inp) {
		inp.value = "文章";
		inp.dispatchEvent(new Event("input", { bubbles: true }));
		await sleep(420);
	}
	snap("typed");

	// ③ Esc 收起
	document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
	await sleep(700);
	snap("closed");

	// ④ 点岛里那枚放大镜 → 胶囊从岛上飞上来
	const islBtn = q("#dynamic-island-search .dis-search-btn");
	const islRect = box(islBtn);
	if (islBtn) islBtn.click();
	await sleep(120);
	snap("fly+0.12s");
	await sleep(900);
	snap("fly done");

	// ⑤ 点空白关闭
	(document.querySelector("#main-grid") || document.body).dispatchEvent(
		new PointerEvent("pointerdown", {
			clientX: 60,
			clientY: 500,
			bubbles: true,
			composed: true,
			pointerId: 2,
			pointerType: "mouse",
			isPrimary: true,
		}),
	);
	await sleep(700);
	snap("outside closed");

	// ⑥ 「正在跳转」那种切页场景：内容被替换时应自动收起
	if (islBtn) islBtn.click();
	await sleep(900);
	document.dispatchEvent(new CustomEvent("swup:contentReplaced"));
	await sleep(700);
	snap("after swup");

	return { islandBtn: islRect, steps: log };
})();
