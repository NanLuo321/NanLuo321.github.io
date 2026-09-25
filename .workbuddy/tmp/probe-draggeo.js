(async () => {
	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
	await sleep(300);
	const grab = document.querySelector(".ts-grab");
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
	const rectOf = (el) => {
		const r = el.getBoundingClientRect();
		return (
			Math.round(r.x) + "," + Math.round(r.y) + " " + Math.round(r.width) + "x" + Math.round(r.height)
		);
	};
	const snap = (tag) => {
		const edge = document.querySelector(".ts-edge");
		const blob = document.querySelector(".ts-blob");
		const goo = document.querySelector(".ts-goo");
		return {
			tag: tag,
			edgeInline: edge.style.transform,
			edgeRect: rectOf(edge),
			blobXY: blob.style.getPropertyValue("--ts-x") + " / " + blob.style.getPropertyValue("--ts-y"),
			blobRect: rectOf(blob),
			blobOp: blob.style.opacity,
			gooH: goo.style.getPropertyValue("--ts-goo-h"),
			gooRect: rectOf(goo),
			vh: window.innerHeight,
		};
	};
	const out = [];
	pd("pointerdown", 700, 5, grab);
	out.push(snap("down"));
	for (const y of [20, 40, 62]) {
		pd("pointermove", 700, y, window);
		await sleep(40);
		out.push(snap("y=" + y));
	}
	return out;
})();
