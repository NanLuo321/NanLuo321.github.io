(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  for (let i = 0; i < 70 && !window.__topSearch; i++) await sleep(200);
  await sleep(300);

	// 版本门可能在 prep 等待期间才盖上（它等整站 ready 才出场）→ 再压一次
	const gate = document.getElementById("version-gate");
	if (gate) {
		gate.hidden = true;
		gate.classList.remove("is-cover", "is-shown", "is-ready");
	}
	document.documentElement.style.overflow = "";

  const grab = document.querySelector('.ts-grab');
  const pd = (t, x, y, tgt, b) => tgt.dispatchEvent(new PointerEvent(t, {
    clientX: x, clientY: y, bubbles: true, cancelable: true, composed: true,
    pointerId: 1, pointerType: 'mouse', isPrimary: true, button: 0,
    buttons: b === undefined ? 1 : b,
  }));
  pd('pointerdown', 700, 5, grab);
  for (let y = 14; y <= 62; y += 6) { pd('pointermove', 700, y, window); await sleep(30); }
  return 'neck';
})();
