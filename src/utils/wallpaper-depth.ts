/**
 * 壁纸「角色凸出」—— 浏览器端自动识别壁纸里的角色，并产出可当 CSS mask 的遮罩。
 * ============================================================================
 * 目的：让左缘那枚时间**嵌进角色里**（角色压在时间上、但时间仍在壁纸之上），
 * 也就是 iPhone 锁屏的景深 / 深度效果。
 *
 * 层级（见 WallpaperDepth.astro 里 is:global 那段）：
 *
 *   #wallpaper-wrapper   z:-1   壁纸本体（原来那张，一行没改）
 *   #left-time           z:65   时间（板块形态）/ z:58（进壁纸形态）
 *   #wallpaper-subject   z:25   角色层 =「壁纸本体 + 本文件产出的 mask」的同一张图
 *                        z:62   仅当 body.wp-subject-armed（裁切框真的生效了）才抬上来
 *
 * 角色层默认(25) 落在正文(30) 之下 —— 结构上就碰不到文章；只有进壁纸形态下
 * 「按时间框裁一刀」（applySubjectClip）真的生效时，才升到 62 去压住时间(58)。
 * 但横幅标题关在 #wallpaper-wrapper 的 z:-1 栈里出不来，光靠 z 保不住，
 * 所以那一刀是**必须**的，而且还得补上壁纸那层暗化 / 渐变（syncSubjectTint）
 * 让裁切边界无缝（两层亮度不平，边界就会露一条亮缝）。
 *
 * 为什么角色层是「壁纸的第二次绘制」而不是抠出来的图：mask-image 是纯 CSS
 * 遮罩，不需要把像素抠出来再合成 —— 只要让第二张壁纸**只显示角色那部分**，
 * 看起来就是角色从壁纸里凸出来、盖住了中间那层时间。
 *
 * ── 没有模型，纯 canvas 算 ────────────────────────────────────────────────
 * 不开模型、不下载权重、不依赖服务端：把图缩到 192px 长边，用
 * 「颜色离背景色模型的距离 + 边缘强度 + 中心权重 + 彩度」四路加权求显著性，
 * Otsu 自适应阈值二值化，形态学去噪，取最大连通域（带中心亲和加权），
 * 最后做一遍可分离盒式模糊当羽化 —— 输出的白+alpha PNG 直接喂给 mask-image。
 *
 * 对「角色居中、背景虚化/纯色」这类壁纸命中率很高（二次元壁纸绝大多数是这种）；
 * 角色和背景糊在一起时会识别不出来，那时返回 null，上层给用户明确提示。
 *
 * ⚠ 跨域限制（务必知道）：
 *   要读像素就必须图源允许跨域。t.alcy.cc（栗次元 API）**不返回 ACAO 头**，
 *   所以 API 随机图读不了 —— 这不是本文件的 bug，是浏览器的同源策略。
 *   同源图 / 用户自己上传的文件 / 允许跨域的图源都正常。
 *   （实测 wsrv.nl 直接拉黑 .cc 顶级域；allorigins 能过但要 26 秒，不可用。）
 */

/* ============================ 类型 ============================ */

/** 归一化（0~1）或视口像素（px）的矩形，用哪套看字段注释 */
export interface Rect {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface SubjectMask {
	/** 白 + alpha 的 PNG dataURL，直接当 mask-image 用（不透明＝角色） */
	maskUrl: string;
	/** 角色外接框，**归一化到图像**（0~1） */
	box: Rect;
	/** 角色占画面比例（0~1） */
	coverage: number;
	/** 分析时用的分辨率 */
	width: number;
	height: number;
	/** 这一趟花了多久（ms），面板上显示用 */
	ms: number;
}

export interface DepthStatus {
	ready: boolean;
	reason: string;
	coverage: number;
	ms: number;
}

/* ============================ 小工具 ============================ */

const clamp01 = (v: number): number => (v < 0 ? 0 : v > 1 ? 1 : v);

/* ============================ 图源 ============================ */

/**
 * 把一张图加载成**能读像素**的 HTMLImageElement。
 * 拿不到（跨域 / 404 / 解码失败）就返回 null —— 调用方据此给提示。
 */
export function loadReadableImage(
	url: string,
): Promise<HTMLImageElement | null> {
	const sameOrigin =
		url.startsWith("/") || url.startsWith("blob:") || url.startsWith("data:");
	if (url.startsWith("data:")) return decodeImage(url, false);

	const tries: Array<string | null> = sameOrigin
		? [url]
		: [
				url,
				// 兜底代理：wsrv.nl 会给 ACAO: *，还能顺手把 webp 转成 png。
				// 它按策略拉黑了一批顶级域（.cc 就在黑名单里），拉不动就快速失败，
				// 不会拖慢「这张图读不了」的判定。
				`https://wsrv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ""))}`,
			];

	return (async () => {
		for (const u of tries) {
			if (!u) continue;
			// 同源 / blob 不需要（也不该）带 crossOrigin：带了反而会变成 CORS 请求
			const im = await decodeImage(u, !sameOrigin && u === url);
			if (!im) continue;
			// 真正读一个像素来验货 —— canvas 被污染时 getImageData 会抛
			try {
				const c = document.createElement("canvas");
				c.width = c.height = 1;
				const cx = c.getContext("2d");
				if (!cx) continue;
				cx.drawImage(im, 0, 0, 1, 1);
				cx.getImageData(0, 0, 1, 1);
				return im;
			} catch {
				/* 读不了 → 试下一个图源 */
			}
		}
		return null;
	})();
}

function decodeImage(
	src: string,
	cors: boolean,
): Promise<HTMLImageElement | null> {
	return new Promise((resolve) => {
		const im = new Image();
		if (cors) im.crossOrigin = "anonymous";
		im.decoding = "async";
		im.onload = () => resolve(im);
		im.onerror = () => resolve(null);
		im.src = src;
	});
}

/* ============================ 角色识别 ============================ */

/** 分析分辨率长边（越大越准越慢；192 在 5~20ms 量级） */
const MAX_EDGE = 192;
/** 取多宽的一圈当「背景色模型」 */
const BORDER_FRAC = 0.085;
/** 羽化半径（分析分辨率下的 px） */
const FEATHER_PX = 2.4;
/** 角色占画面比例低于/高于这个范围就认为没识别到 */
const MIN_AREA = 0.02;
const MAX_AREA = 0.93;
/** 小于这个面积的连通域直接丢掉 */
const MIN_BLOB = 0.012;

/**
 * 识别壁纸里的角色，产出遮罩。
 * 读不了像素（跨域）或识别不出来 → null。
 */
export function computeSubjectMask(img: HTMLImageElement): SubjectMask | null {
	const t0 = performance.now();
	const nw = img.naturalWidth || img.width;
	const nh = img.naturalHeight || img.height;
	if (!nw || !nh) return null;

	const s = Math.min(1, MAX_EDGE / Math.max(nw, nh));
	const w = Math.max(32, Math.round(nw * s));
	const h = Math.max(32, Math.round(nh * s));
	const N = w * h;

	const cv = document.createElement("canvas");
	cv.width = w;
	cv.height = h;
	const ctx = cv.getContext("2d", { willReadFrequently: true });
	if (!ctx) return null;
	ctx.drawImage(img, 0, 0, w, h);

	let data: Uint8ClampedArray;
	try {
		data = ctx.getImageData(0, 0, w, h).data;
	} catch {
		return null; /* 画布被跨域图污染 */
	}

	/* ---- 1) 亮度 / 彩度 ---- */
	const lum = new Float32Array(N);
	const sat = new Float32Array(N);
	for (let i = 0; i < N; i++) {
		const p = i * 4;
		const r = data[p];
		const g = data[p + 1];
		const b = data[p + 2];
		lum[i] = 0.299 * r + 0.587 * g + 0.114 * b;
		const mx = r > g ? (r > b ? r : b) : g > b ? g : b;
		const mn = r < g ? (r < b ? r : b) : g < b ? g : b;
		sat[i] = (mx - mn) / 255;
	}

	/* ---- 2) 背景色模型：取外圈那一带的均值 + 方差 ---- */
	const bx = Math.max(3, Math.round(w * BORDER_FRAC));
	const by = Math.max(3, Math.round(h * BORDER_FRAC));
	let n = 0;
	let sr = 0;
	let sg = 0;
	let sb = 0;
	let sr2 = 0;
	let sg2 = 0;
	let sb2 = 0;
	for (let y = 0; y < h; y++) {
		const rowEdge = y < by || y >= h - by;
		for (let x = 0; x < w; x++) {
			if (!rowEdge && x >= bx && x < w - bx) continue;
			const p = (y * w + x) * 4;
			const r = data[p];
			const g = data[p + 1];
			const b = data[p + 2];
			n++;
			sr += r;
			sg += g;
			sb += b;
			sr2 += r * r;
			sg2 += g * g;
			sb2 += b * b;
		}
	}
	if (!n) return null;
	const mr = sr / n;
	const mg = sg / n;
	const mb = sb / n;
	const ringStd =
		(Math.sqrt(Math.max(0, sr2 / n - mr * mr)) +
			Math.sqrt(Math.max(0, sg2 / n - mg * mg)) +
			Math.sqrt(Math.max(0, sb2 / n - mb * mb))) /
		3;
	/* 归一化尺度：背景本身越花，容许的色差就越大 */
	const dScale = Math.max(30, ringStd * 2.6);

	/* ---- 3) 显著性 ---- */
	const sal = new Float32Array(N);
	for (let y = 0; y < h; y++) {
		const y0 = y > 0 ? y - 1 : 0;
		const y1 = y < h - 1 ? y + 1 : h - 1;
		for (let x = 0; x < w; x++) {
			const i = y * w + x;
			const p = i * 4;

			/* ① 离背景色的距离 */
			const dr = data[p] - mr;
			const dg = data[p + 1] - mg;
			const db = data[p + 2] - mb;
			const d = Math.sqrt(dr * dr + dg * dg + db * db) / (dScale * 2.1);

			/* ② 边缘强度（Sobel 近似：3x3 亮度差的最大值） */
			const x0 = x > 0 ? x - 1 : 0;
			const x1 = x < w - 1 ? x + 1 : w - 1;
			let gmax = Math.abs(lum[y * w + x1] - lum[y * w + x0]);
			const gv = Math.abs(lum[y1 * w + x] - lum[y0 * w + x]);
			if (gv > gmax) gmax = gv;
			const diagA = Math.abs(lum[y1 * w + x1] - lum[y0 * w + x0]);
			if (diagA > gmax) gmax = diagA;
			const diagB = Math.abs(lum[y1 * w + x0] - lum[y0 * w + x1]);
			if (diagB > gmax) gmax = diagB;
			const edge = clamp01(gmax / 58);

			/* ③ 中心权重（椭圆，横向宽容一点） */
			const nx = ((x + 0.5) / w) * 2 - 1;
			const ny = ((y + 0.5) / h) * 2 - 1;
			const rr = Math.sqrt(nx * nx * 0.8 + ny * ny);
			const center = clamp01(1.15 - rr * 0.95);

			/* ④ 彩度（角色一般比虚化背景更"有颜色"） */
			const sc = clamp01(sat[i] / 0.3);

			sal[i] = clamp01(
				0.44 * clamp01(d) + 0.22 * edge + 0.14 * center + 0.2 * sc,
			);
		}
	}

	/* ---- 4) 先把显著性抹平一点再阈值化 ----
	   逐像素的显著性天生带噪点（照片纹理、线稿噪），直接 Otsu 会切出一地碎屑。
	   抹一遍 3x3，让同一块区域"投票"出一个更连贯的形状 —— 这一步对
	   「角色 + 花哨背景」这种真实壁纸的效果提升最明显。 */
	const salS = boxBlur(sal, w, h, 1);

	/* ---- 5) Otsu 自适应阈值 ---- */
	const hist = new Float64Array(256);
	for (let i = 0; i < N; i++) hist[Math.round(clamp01(salS[i]) * 255)]++;
	let sum = 0;
	for (let t = 0; t < 256; t++) sum += t * hist[t];
	let wB = 0;
	let sumB = 0;
	let best = -1;
	let thr = 128;
	for (let t = 0; t < 256; t++) {
		wB += hist[t];
		if (!wB) continue;
		const wF = N - wB;
		if (!wF) break;
		sumB += t * hist[t];
		const mB = sumB / wB;
		const mF = (sum - sumB) / wF;
		const between = wB * wF * (mB - mF) * (mB - mF);
		if (between > best) {
			best = between;
			thr = t;
		}
	}
	/* 阈值别走极端：Otsu 在全虚化图上可能给出 3 或 250 */
	if (thr < 40) thr = 40;
	if (thr > 220) thr = 220;

	/* ---- 6) 二值化 + 形态学去噪 ---- */
	/* 标注成宽泛的 Uint8Array：morph() 返回的是 Uint8Array<ArrayBufferLike>，
	   不标的话会被推成 Uint8Array<ArrayBuffer> 而赋不回去 */
	let m: Uint8Array = new Uint8Array(N);
	for (let i = 0; i < N; i++) m[i] = clamp01(salS[i]) * 255 > thr ? 1 : 0;
	m = morph(m, w, h, 1, 0, false); // 开：腐蚀掉孤立噪点
	m = morph(m, w, h, 0, 2, true); // 闭两遍（8 邻域）：把角色的碎块并成一整片
	m = morph(m, w, h, 1, 1, true);

	/* ---- 6) 连通域：取「最大 + 够靠中间」的那一块 ---- */
	const label = new Int32Array(N).fill(-1);
	const stack = new Int32Array(N);
	const comps: Array<{ area: number; sx: number; sy: number; id: number }> = [];
	let id = 0;
	for (let seed = 0; seed < N; seed++) {
		if (!m[seed] || label[seed] >= 0) continue;
		const cur = id++;
		let sp = 0;
		stack[sp++] = seed;
		label[seed] = cur;
		let area = 0;
		let sx = 0;
		let sy = 0;
		while (sp > 0) {
			const q = stack[--sp];
			const qx = q % w;
			const qy = (q - qx) / w;
			area++;
			sx += qx;
			sy += qy;
			if (qx > 0 && m[q - 1] && label[q - 1] < 0) {
				label[q - 1] = cur;
				stack[sp++] = q - 1;
			}
			if (qx < w - 1 && m[q + 1] && label[q + 1] < 0) {
				label[q + 1] = cur;
				stack[sp++] = q + 1;
			}
			if (qy > 0 && m[q - w] && label[q - w] < 0) {
				label[q - w] = cur;
				stack[sp++] = q - w;
			}
			if (qy < h - 1 && m[q + w] && label[q + w] < 0) {
				label[q + w] = cur;
				stack[sp++] = q + w;
			}
		}
		comps.push({ area, sx, sy, id: cur });
	}

	let bestC: { area: number; id: number } | null = null;
	let bestScore = -1;
	for (const c of comps) {
		if (c.area < N * MIN_BLOB) continue;
		const cx = c.sx / c.area / w;
		const cy = c.sy / c.area / h;
		const dx = (cx - 0.5) * 2;
		const dy = (cy - 0.5) * 2;
		const affinity = 1 - clamp01(Math.sqrt(dx * dx + dy * dy));
		const score = c.area * (0.6 + 0.4 * affinity);
		if (score > bestScore) {
			bestScore = score;
			bestC = { area: c.area, id: c.id };
		}
	}
	if (!bestC) return null;

	const coverage = bestC.area / N;
	if (coverage < MIN_AREA || coverage > MAX_AREA) return null;

	/* ---- 7) 选中的那块 → 实心（填掉内部小洞）----
	   角色的线稿 / 衣服花纹 / 头发之间会有大量比背景更"没特色"的小孔，
	   只取连通域会让遮罩变成一张筛子 —— 于是看不出是个人。
	   做法是经典的「从边框往里 flood fill 背景」：淹不到的就是角色内部的洞，补上。 */
	const solid = new Uint8Array(N);
	for (let i = 0; i < N; i++) solid[i] = label[i] === bestC.id ? 1 : 0;
	const reached = new Uint8Array(N);
	const stack2 = new Int32Array(N);
	let sp2 = 0;
	const push = (i: number): void => {
		if (!solid[i] && !reached[i]) {
			reached[i] = 1;
			stack2[sp2++] = i;
		}
	};
	for (let x = 0; x < w; x++) {
		push(x);
		push((h - 1) * w + x);
	}
	for (let y = 0; y < h; y++) {
		push(y * w);
		push(y * w + w - 1);
	}
	while (sp2 > 0) {
		const q = stack2[--sp2];
		const qx = q % w;
		const qy = (q - qx) / w;
		if (qx > 0) push(q - 1);
		if (qx < w - 1) push(q + 1);
		if (qy > 0) push(q - w);
		if (qy < h - 1) push(q + w);
	}
	let filled = 0;
	for (let i = 0; i < N; i++) {
		if (!solid[i] && !reached[i]) {
			solid[i] = 1;
			filled++;
		}
	}

	/* ---- 8) 外接框 + 羽化 ---- */
	let x0 = w;
	let y0 = h;
	let x1 = -1;
	let y1 = -1;
	const soft = new Float32Array(N);
	for (let y = 0; y < h; y++) {
		for (let x = 0; x < w; x++) {
			const i = y * w + x;
			if (!solid[i]) continue;
			soft[i] = 1;
			if (x < x0) x0 = x;
			if (x > x1) x1 = x;
			if (y < y0) y0 = y;
			if (y > y1) y1 = y;
		}
	}
	if (x1 < 0) return null;

	const feather = boxBlur(soft, w, h, FEATHER_PX);

	const out = ctx.createImageData(w, h);
	for (let i = 0; i < N; i++) {
		const p = i * 4;
		out.data[p] = 255;
		out.data[p + 1] = 255;
		out.data[p + 2] = 255;
		const a = feather[i];
		out.data[p + 3] = a > 0.04 ? Math.round(Math.min(1, a) * 255) : 0;
	}
	ctx.putImageData(out, 0, 0);

	return {
		maskUrl: cv.toDataURL("image/png"),
		box: {
			x: x0 / w,
			y: y0 / h,
			w: (x1 - x0 + 1) / w,
			h: (y1 - y0 + 1) / h,
		},
		coverage: (bestC.area + filled) / N,
		width: w,
		height: h,
		ms: Math.round(performance.now() - t0),
	};
}

/** 形态学：erode / dilate 各跑一遍（eight=true 用 8 邻域，斜向也连） */
function morph(
	src: Uint8Array,
	w: number,
	h: number,
	erode: number,
	dilate: number,
	eight: boolean,
): Uint8Array {
	let cur = src;
	for (let it = 0; it < erode; it++) {
		const nxt = new Uint8Array(cur.length);
		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const i = y * w + x;
				if (!cur[i]) continue;
				const a = x > 0 ? cur[i - 1] : 0;
				const b = x < w - 1 ? cur[i + 1] : 0;
				const c = y > 0 ? cur[i - w] : 0;
				const d = y < h - 1 ? cur[i + w] : 0;
				let keep = !!(a && b && c && d);
				if (keep && eight) {
					const e = x > 0 && y > 0 ? cur[i - w - 1] : 0;
					const f = x < w - 1 && y > 0 ? cur[i - w + 1] : 0;
					const g = x > 0 && y < h - 1 ? cur[i + w - 1] : 0;
					const k = x < w - 1 && y < h - 1 ? cur[i + w + 1] : 0;
					keep = !!(e && f && g && k);
				}
				nxt[i] = keep ? 1 : 0;
			}
		}
		cur = nxt;
	}
	for (let it = 0; it < dilate; it++) {
		const nxt = new Uint8Array(cur.length);
		for (let y = 0; y < h; y++) {
			for (let x = 0; x < w; x++) {
				const i = y * w + x;
				if (cur[i]) {
					nxt[i] = 1;
					continue;
				}
				const a = x > 0 ? cur[i - 1] : 0;
				const b = x < w - 1 ? cur[i + 1] : 0;
				const c = y > 0 ? cur[i - w] : 0;
				const d = y < h - 1 ? cur[i + w] : 0;
				let on = !!(a || b || c || d);
				if (!on && eight) {
					const e = x > 0 && y > 0 ? cur[i - w - 1] : 0;
					const f = x < w - 1 && y > 0 ? cur[i - w + 1] : 0;
					const g = x > 0 && y < h - 1 ? cur[i + w - 1] : 0;
					const k = x < w - 1 && y < h - 1 ? cur[i + w + 1] : 0;
					on = !!(e || f || g || k);
				}
				nxt[i] = on ? 1 : 0;
			}
		}
		cur = nxt;
	}
	return cur;
}

/** 可分离盒式模糊跑 2 遍 ≈ 高斯；拿来做遮罩边缘的羽化 */
function boxBlur(
	src: Float32Array,
	w: number,
	h: number,
	radius: number,
): Float32Array {
	const r = Math.max(1, Math.round(radius));
	let cur = src;
	for (let pass = 0; pass < 2; pass++) {
		const tmp = new Float32Array(cur.length);
		const win = r * 2 + 1;
		/* 横向 */
		for (let y = 0; y < h; y++) {
			let acc = 0;
			const base = y * w;
			for (let k = -r; k <= r; k++)
				acc += cur[base + Math.min(w - 1, Math.max(0, k))];
			for (let x = 0; x < w; x++) {
				tmp[base + x] = acc / win;
				const out = base + Math.min(w - 1, Math.max(0, x - r));
				const inn = base + Math.min(w - 1, Math.max(0, x + r + 1));
				acc += cur[inn] - cur[out];
			}
		}
		/* 纵向 */
		const tmp2 = new Float32Array(cur.length);
		for (let x = 0; x < w; x++) {
			let acc = 0;
			for (let k = -r; k <= r; k++) {
				const yy = Math.min(h - 1, Math.max(0, k));
				acc += tmp[yy * w + x];
			}
			for (let y = 0; y < h; y++) {
				tmp2[y * w + x] = acc / win;
				const oy = Math.min(h - 1, Math.max(0, y - r));
				const iy = Math.min(h - 1, Math.max(0, y + r + 1));
				acc += tmp[iy * w + x] - tmp[oy * w + x];
			}
		}
		cur = tmp2;
	}
	return cur;
}

/* ============================ 铺图几何 ============================ */

/**
 * 复刻 object-fit / object-position：算出**图片内容**实际被画在元素盒里的哪个矩形。
 * 角色层要用它把图像空间的 bbox 换算成视口像素。
 */
export function contentRect(
	box: Rect,
	natW: number,
	natH: number,
	fit: string,
	pos: string,
): Rect {
	if (!natW || !natH) return { ...box };
	let w = box.w;
	let h = box.h;
	if (fit === "contain" || fit === "scale-down") {
		const s = Math.min(box.w / natW, box.h / natH);
		w = natW * s;
		h = natH * s;
	} else if (fit === "cover") {
		const s = Math.max(box.w / natW, box.h / natH);
		w = natW * s;
		h = natH * s;
	} else if (fit === "none") {
		w = natW;
		h = natH;
	}
	const [px, py] = parsePosition(pos);
	return {
		x: box.x + (box.w - w) * px,
		y: box.y + (box.h - h) * py,
		w,
		h,
	};
}

/** object-position / mask-position 的解析（computed 里通常已经是两个百分比） */
function parsePosition(pos: string): [number, number] {
	const parts = (pos || "50% 50%").trim().split(/\s+/);
	const one = (v: string, fallback: number): number => {
		if (!v) return fallback;
		if (v.endsWith("%")) return (Number.parseFloat(v) || 0) / 100;
		if (v === "left" || v === "top") return 0;
		if (v === "center") return 0.5;
		if (v === "right" || v === "bottom") return 1;
		return fallback;
	};
	return [one(parts[0], 0.5), one(parts[1], 0.5)];
}

/** 归一化 bbox × 内容矩形 → 视口像素的 bbox */
export function mapBoxToViewport(nbox: Rect, content: Rect): Rect {
	return {
		x: content.x + nbox.x * content.w,
		y: content.y + nbox.y * content.h,
		w: nbox.w * content.w,
		h: nbox.h * content.h,
	};
}

/* ============================ 自定义壁纸的持久化 ============================ */

const DB_NAME = "nanluo-wallpaper";
const DB_STORE = "blobs";
const KEY_CUSTOM = "custom-wallpaper";

function openDb(): Promise<IDBDatabase | null> {
	return new Promise((resolve) => {
		try {
			const req = indexedDB.open(DB_NAME, 1);
			req.onupgradeneeded = () => {
				const db = req.result;
				if (!db.objectStoreNames.contains(DB_STORE))
					db.createObjectStore(DB_STORE);
			};
			req.onsuccess = () => resolve(req.result);
			req.onerror = () => resolve(null);
		} catch {
			resolve(null);
		}
	});
}

export async function saveCustomImage(blob: Blob): Promise<boolean> {
	const db = await openDb();
	if (!db) return false;
	return new Promise((resolve) => {
		try {
			const tx = db.transaction(DB_STORE, "readwrite");
			tx.objectStore(DB_STORE).put(blob, KEY_CUSTOM);
			tx.oncomplete = () => resolve(true);
			tx.onerror = () => resolve(false);
		} catch {
			resolve(false);
		}
	});
}

export async function loadCustomImage(): Promise<Blob | null> {
	const db = await openDb();
	if (!db) return null;
	return new Promise((resolve) => {
		try {
			const req = db
				.transaction(DB_STORE, "readonly")
				.objectStore(DB_STORE)
				.get(KEY_CUSTOM);
			req.onsuccess = () => resolve((req.result as Blob) || null);
			req.onerror = () => resolve(null);
		} catch {
			resolve(null);
		}
	});
}

export async function clearCustomImage(): Promise<void> {
	const db = await openDb();
	if (!db) return;
	await new Promise<void>((resolve) => {
		try {
			const tx = db.transaction(DB_STORE, "readwrite");
			tx.objectStore(DB_STORE).delete(KEY_CUSTOM);
			tx.oncomplete = () => resolve();
			tx.onerror = () => resolve();
		} catch {
			resolve();
		}
	});
}
