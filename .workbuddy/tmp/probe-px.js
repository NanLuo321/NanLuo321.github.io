(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	let waited = 0;
	while (!window.__topSearch && waited < 20000) {
		await sleep(200);
		waited += 200;
	}
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";
	await sleep(600);

	const q = (s) => document.querySelector(s);
	const canvas = q("#top-search .ts-melt");
	const grab = q("#top-search .ts-grab");
	const pd = (t, x, y, tgt, b) =>
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
				buttons: b === undefined ? 1 : b,
			}),
		);
	pd("pointerdown", 708, 5, grab);
	await sleep(200);
	pd("pointermove", 708, 300, window);
	await sleep(1500);

	const gl = canvas.getContext("webgl2");
	const H = canvas.height;
	const sample = (cssX, cssY) => {
		// GL 原点在左下：y 要翻过来
		const px = new Uint8Array(4);
		gl.readPixels(cssX, H - cssY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
		return Array.from(px).join(",");
	};
	const out = { waited, before: {} };
	await new Promise((res) => {
		requestAnimationFrame(() => {
			// 同一帧内：引擎的 rAF 先跑并画好，这里紧跟其后读
			out.before = {
				blobCenter: sample(708, 300),
				blobEdge: sample(690, 300),
				farCorner: sample(20, 700),
				err: gl.getError(),
			};
			res();
		});
	});
	await sleep(50);
	out.after = {
		blobCenter: sample(708, 300),
		farCorner: sample(20, 700),
	};
	out.phase = q("#top-search").className;
	out.isLost = gl.isContextLost();
	return out;
})();
