(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 50 && !window.__topSearch; i++) await sleep(200);
	let err = null;
	let got = false;
	try {
		const m = await import("/src/utils/metaball-melt.ts");
		const c = document.createElement("canvas");
		const melt = m.createMelt({
			canvas: c,
			capsule: () => ({ cx: 0, cy: 0, w: 10, h: 10 }),
		});
		got = Boolean(melt);
	} catch (e) {
		err = String((e && e.stack) || e);
	}
	// 顺手确认 webgl2 本身拿不拿得到
	const t = document.createElement("canvas");
	const gl = t.getContext("webgl2");
	return JSON.stringify({ err, got, webgl2: Boolean(gl) });
})();
