/**
 * 液态 → 搜索（WebGL2 / SDF 管线）
 * ============================================================================
 * 逐行移植自参考实现：形状层公式全部来自 iOS 26.3 QuartzCore
 * default.metallib 的反汇编 —— sdf_union 的梯度感知 smooth-min、
 * sdf_glass_displacement / sdf_glass_highlight 的折射剖面与双光高光。
 *
 * 相对参考实现的删减（两处，都是把 demo 的「舞台」换成本站的真实页面）：
 *
 *  ① **去掉黑条**。参考实现用一条 `uEdge = 26px` 高的半平面当「屏幕顶部黑边」，
 *     液滴从它里面渗出来、和它拉出液颈。这里 `uEdge` 退到视口上方 1px
 *     （见 `meltTuning.edge`）—— 黑条整条画不出来，两条副作用也一并处理了：
 *     顶边那圈全宽软阴影只按 `barVis` 投（否则会在页面顶端糊出一条暗带），
 *     以及半平面下沿不再压在最顶一行留 1px 描边。但它在 SDF 里还在，于是
 *     「液滴靠近屏幕顶边时被吸住、拉出液颈」的几何一分不少。
 *
 *  ② **去掉壁纸**。参考实现自己往画布上画壁纸（内嵌 base64 图 + 程序化
 *     降级地图），照搬过来会把整站盖住。这里画布**全程透明**：页面自己
 *     从底下透出来。代价是 shader 没法再采样贴图做折射，所以折射改由
 *     DOM 那层 `.ts-lens` 承担（同样是 `border-radius` 裁出的圆角矩形，
 *     只是滤镜换成真的 `backdrop-filter`，折射的是真页面）；
 *     shader 只负责**材质**：黑玻璃↔清玻璃的过渡、上黑下透的压暗、
 *     边缘渗光、45°/225° 双光高光、外侧软阴影。
 *
 * 弹簧、状态机、速度拉伸、参数标定都按参考实现原样搬过来。
 */

/* ============================ 可调参数 ============================
 * 调参面板（Ctrl+Shift+E）直接写这个对象，引擎每帧读。
 */
export const meltTuning = {
	/** 融合半径：液颈粗细（苹果 sdf_union 的 k） */
	k: 64,
	/** 透镜高度：圆弧剖面的深度，决定边缘渗光的宽度 */
	height: 18,
	/** 折射强度：画布没法采样页面，这一档转交给 .ts-lens 的模糊量 */
	refract: 40,
	/** 高光强度 */
	hl: 1.5,
	/** 色差：边缘渗光的冷暖偏移 */
	ab: 0.12,
	/** 黑玻璃强度：上黑下透的压暗量 */
	cont: 0.72,
	/** 弹簧频率 ω */
	om: 11,
	/** 弹簧阻尼比 ζ */
	ze: 0.72,
	/** 拖拽液滴半径 */
	radius: 34,
	/** 悬停液凸半径：鼠标停在胶囊上时跟手的那颗小液滴 */
	bump: 24,
	/** 顶部吸附线。参考实现是 26（26px 黑边）；这里退到视口上方 1px，
	 *  黑条整条看不见，但那半边半平面还在 SDF 里，液颈照旧从这里拉出来。
	 *  别再改回 0 —— 下沿正好压在最顶一行会留下一条全宽的 1px 深色描边。 */
	edge: -1,
};

export type MeltTuning = typeof meltTuning;

export type MeltPhase = "idle" | "drag" | "morph" | "retract";

/* ============================ 形状层 ============================ */
const FRAG = `#version 300 es
precision highp float;
uniform vec2  uRes;
uniform vec4  uBlob;   // cx, cy, halfX, halfY (px, y 向下)
uniform vec4  uBlob2;  // 悬停液凸：cx, cy, r, r（hold 模式下跟指针走）
uniform float uEdge;   // 顶部吸附线（0 = 黑条已去掉）
uniform float uK;      // 融合半径
uniform float uK2;     // 液凸与胶囊的融合半径
uniform float uHeight, uHlAmt, uAb, uDpr, uCont, uDark, uValid, uValid2, uOrient;
uniform vec3  uTint;   // 清玻璃那档的底色（取自站点的 --card-bg）
out vec4 outColor;

// ---------- rounded-box SDF + 解析梯度 ----------
// supercircle_sdf 的圆角分支；圆 / 胶囊 / 圆角矩形是同一个原语
vec4 sdRoundBox(vec2 p, vec2 c, vec2 b, float r){
  vec2 lp = p - c;
  vec2 q  = abs(lp) - b + r;
  vec2 mq = max(q, vec2(0.0));
  float dOut = length(mq);
  float d = dOut + min(max(q.x, q.y), 0.0) - r;
  vec2 grad = (dOut > 1e-4) ? (mq / dOut) * sign(lp)
            : ((q.x > q.y) ? vec2(sign(lp.x), 0.0) : vec2(0.0, sign(lp.y)));
  return vec4(d, grad, 1.0);
}

// ---------- 苹果 sdf_union：梯度感知 smooth min ----------
vec4 sdfUnion(vec4 a, vec4 b, float k){
  if (b.w == 0.0) b = vec4(10000.0, 0.0, 0.0, 0.0);
  float kEff = k * clamp(0.5 - 0.5 * dot(a.yz, b.yz), 0.0, 1.0) + 1e-4;
  float h = clamp(0.5 + 0.5 * (b.x - a.x) / kEff, 0.0, 1.0);
  float d = mix(b.x, a.x, h) - kEff * h * (1.0 - h);   // IQ 多项式 smin
  vec2  g = mix(b.yz, a.yz, h);                        // 梯度同步混合
  return vec4(d, normalize(g + vec2(1e-5)), 1.0);
}

void main(){
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);  // y 向下，对齐 UI 坐标

  // 左缘模式（uOrient=1）：把坐标系沿对角线翻一下 —— 顶边那一整套几何
  // （半平面吸附、液颈、贴边黑玻璃、上黑下透的压暗、高光朝向）原封不动
  // 变成「左缘」的几何。CPU 传进来的 blob / 液凸坐标按同一套翻转
  // （见 uniform 上传处），shader 其余部分零改动。
  if (uOrient > 0.5) p = p.yx;

  // 顶边半平面与液滴的平滑并集。uEdge 退到视口上方（见 meltTuning.edge）→
  // 半平面整条画不出来；但它仍然把靠近顶边的液滴往上吸，液颈就是从这里来的。
  vec4 bar  = vec4(p.y - uEdge, 0.0, 1.0, 1.0);
  vec4 blob = sdRoundBox(p, uBlob.xy, uBlob.zw, min(uBlob.z, uBlob.w));
  blob.w = uValid;
  // 悬停液凸：与胶囊同一个 SDF 原语，弹簧跟手 —— 靠近边缘时从玻璃里
  // 「鼓」出去一小块，这就是悬停时的液态反馈
  vec4 bump = sdRoundBox(p, uBlob2.xy, uBlob2.zw, min(uBlob2.z, uBlob2.w));
  bump.w = uValid2;
  vec4 s = sdfUnion(bar, blob, uK);
  s = sdfUnion(s, bump, uK2);
  float d = s.x;  vec2 g = s.yz;

  // 覆盖率（画布是透明的，这就是唯一的 alpha 门）与外侧软阴影
  float aaw = max(fwidth(d), 1e-3);
  float cov = smoothstep(aaw, -aaw, d);

  // 「贴边」权重：离顶边越近越黑（参考实现里那档贴边黑玻璃）
  float wb = uValid * clamp(0.5 + 0.5 * (bar.x - blob.x) / 24.0, 0.0, 1.0);
  float darkAmt = mix(1.0, uDark, wb);

  // 梯度向「中心径向」微混 8%，透镜更圆润（只对液滴，bar 区域 wb≈0）
  vec2 lp = p - uBlob.xy;
  vec2 radial = normalize(vec2(lp.x, uBlob.z * lp.y / max(uBlob.w, 0.001)) + 1e-5);
  vec2 gr = normalize(mix(g, radial, 0.08 * wb));

  // 圆弧剖面（curvature=1）
  float t   = clamp(-d / uHeight, 0.0, 1.0);
  float mag = 1.0 - sqrt(max(1.0 - (1.0 - t) * (1.0 - t), 0.0));

  // face 压暗：垂直渐变（真机截图逐像素标定：顶暗底透）
  float ny = (p.y - uBlob.y) / max(uBlob.w, 1.0);
  float m  = clamp(0.20 + 0.40 * ny, 0.0, 1.0);
  float crush = mix(1.0, m, uCont * wb * darkAmt);

  // edge_bleed：亮光从边缘渗进玻璃内侧（贴边距离带 + 剖面权重）
  float xb  = clamp(-d / (10.0 * uDpr), 0.0, 1.0);
  float wbd = clamp((d + 26.0 * uDpr) / (20.0 * uDpr), 0.0, 1.0);
  float bleed = wbd * (1.0 - smoothstep(0.0, 1.0, xb)) * (1.0 - mag * 0.7);

  // 高光：细带 2.2px，key 45° + fill 225° 对角双光，锐掩码 cut 0.52
  float qd  = -d;
  float hw  = 2.2 * uDpr;
  float aaq = max(fwidth(qd), 1e-3);
  float band = (1.0 - clamp(qd / hw, 0.0, 1.0))
             * clamp(qd / aaq + 0.5, 0.0, 1.0)
             * clamp((hw - qd) / aaq + 0.5, 0.0, 1.0);
  vec2 kdir = vec2(0.7071, 0.7071);
  float key  = band * clamp((dot( kdir, gr) - 0.52) / 0.48, 0.0, 1.0);
  float fill = band * clamp((dot(-kdir, gr) - 0.52) / 0.48, 0.0, 1.0);
  key  = key  / (1.0 + (1.0 - key)  * 8.0);
  fill = fill / (1.0 + (1.0 - fill) * 8.0);
  float hl = (key + fill) * uHlAmt * mix(1.0, 0.4, darkAmt);

  // ---------- 材质 ----------
  // 参考实现的玻璃本体是「折射采样结果 × 垂直压暗」。这里没有贴图可折射，
  // 于是本体只留底色：贴边一路压到近黑，落地回到站点的卡片底色 ——
  // 那一档正好和导航岛里那枚搜索胶囊同色，交接时看不出换手。
  vec3 body = mix(uTint, vec3(0.012, 0.016, 0.024), darkAmt);
  body = mix(body, vec3(0.020, 0.025, 0.035), (1.0 - crush) * 0.85);
  float bodyA = mix(0.55, 0.985, darkAmt);
  bodyA = mix(bodyA, min(1.0, bodyA + 0.34), (1.0 - crush));

  // 边缘渗光 + 高光：白色加法，色差给一点冷暖偏移
  float lit = clamp(bleed * 0.55 + hl, 0.0, 1.4) * (1.0 - darkAmt * 0.32);
  vec3 litTint = vec3(1.0 + 0.20 * uAb, 1.0, 1.0 - 0.16 * uAb);

  float aa = cov * bodyA;
  vec3 rgb = body * aa + litTint * lit * cov;          // 预乘
  float al = clamp(aa + lit * cov * (1.0 - aa) * 0.9, 0.0, 1.0);

  // 外侧软阴影：画布里唯一「压住页面」的东西。两份分开算 ——
  // barVis 是黑条露出视口的比例：uEdge ≤ 0（黑条已去掉，当前 -1）时它是 0，
  // 否则那条半平面会沿着页面顶边糊出一条全宽暗带，正是要删掉的那条黑条的残影；
  // 液滴自己那份阴影与黑条无关，照旧投。
  float barVis = clamp(uEdge / 26.0, 0.0, 1.0);
  float shadeBar = (d > 0.0) ? exp(-d / 30.0) * 0.26 : 0.0;
  float shadeBlob = (uValid > 0.5 && blob.x > 0.0) ? exp(-blob.x / 30.0) * 0.26 : 0.0;
  float shadeBump = (uValid2 > 0.5 && bump.x > 0.0) ? exp(-bump.x / 30.0) * 0.26 : 0.0;
  float aSh = max(max(shadeBar * barVis, shadeBlob), shadeBump) * (1.0 - cov);
  rgb *= (1.0 - aSh);
  al = al + aSh * (1.0 - al);

  outColor = vec4(rgb, al);
}`;

// 全屏三角形，无 VBO：id → (0,0) (2,0) (0,2)，铺满 [-1,1]² 并溢出。
// 注意第二项必须是 &2 而不是 &1，否则 id0/id2 顶点重合、三角形面积为零，什么也画不出来。
const VERT = `#version 300 es
void main(){ vec2 v = vec2((gl_VertexID<<1)&2, gl_VertexID&2);
  gl_Position = vec4(v*2.0-1.0, 0.0, 1.0); }`;

/** 弹簧：shader 无状态，每帧 CPU 半隐式欧拉积分，把参数写进 uniform */
export class Spring {
	x: number;
	v: number;
	t: number;
	om: number;
	ze: number;
	constructor(v: number) {
		this.x = v;
		this.v = 0;
		this.t = v;
		this.om = 11;
		this.ze = 0.72;
	}
	set(om: number, ze: number) {
		this.om = om;
		this.ze = ze;
		return this;
	}
	step(dt: number) {
		this.v +=
			(this.om * this.om * (this.t - this.x) - 2 * this.ze * this.om * this.v) *
			dt;
		this.x += this.v * dt;
		return this.x;
	}
	/** 到位了吗 */
	settled(eps = 1.2, vel = 24) {
		return Math.abs(this.t - this.x) < eps && Math.abs(this.v) < vel;
	}
}

export interface CapsuleBox {
	cx: number;
	cy: number;
	w: number;
	h: number;
}

export interface MeltOptions {
	canvas: HTMLCanvasElement;
	/** 真折射那一层（DOM）：引擎每帧把圆角矩形和透明度写上去 */
	lens?: HTMLElement | null;
	/** 胶囊落点（视口坐标）—— 必须与组件 CSS 里的尺寸是同一套 */
	capsule: () => CapsuleBox;
	/** 吸附边：top = 屏幕顶边（默认，搜索）；left = 屏幕左缘（时间）。
	 *  只影响「从哪条边渗出来 / 拉多远算拉够 / 缩回哪条边」，
	 *  形状与材质在 shader 里靠坐标翻转原样复用。 */
	orient?: "top" | "left";
	onPhase?: (p: MeltPhase) => void;
	/** 弹簧落定：可以交给 DOM 那枚真胶囊了 */
	onSettle?: () => void;
}

/**
 * 造一台液滴引擎。返回 null = 这个浏览器/显卡给不了 WebGL2，
 * 调用方需要退回到最朴素的兜底表现。
 */
export function createMelt(opts: MeltOptions) {
	const { canvas, lens, capsule } = opts;
	const orient = opts.orient === "left" ? "left" : "top";
	const gl = canvas.getContext("webgl2", {
		antialias: false,
		alpha: true,
		premultipliedAlpha: true,
		depth: false,
		stencil: false,
	}) as WebGL2RenderingContext | null;
	if (!gl) return null;

	const sh = (type: number, src: string) => {
		const s = gl.createShader(type);
		if (!s) throw new Error("createShader failed");
		gl.shaderSource(s, src);
		gl.compileShader(s);
		if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
			throw new Error(gl.getShaderInfoLog(s) ?? "shader compile failed");
		}
		return s;
	};
	const prog = gl.createProgram();
	if (!prog) return null;
	gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
	gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
	gl.linkProgram(prog);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
		throw new Error(gl.getProgramInfoLog(prog) ?? "program link failed");
	}
	gl.useProgram(prog);
	const U: Record<string, WebGLUniformLocation | null> = {};
	for (const n of [
		"uRes",
		"uBlob",
		"uBlob2",
		"uEdge",
		"uK",
		"uK2",
		"uHeight",
		"uHlAmt",
		"uAb",
		"uDpr",
		"uCont",
		"uDark",
		"uValid",
		"uValid2",
		"uOrient",
		"uTint",
	]) {
		U[n] = gl.getUniformLocation(prog, n);
	}
	// 左缘翻转是常量，链接完写一次就够
	gl.uniform1f(U.uOrient, orient === "left" ? 1 : 0);
	// 预乘 alpha：rgb 里已经带过 alpha，混合不能再乘一遍
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
	gl.clearColor(0, 0, 0, 0);

	const dpr = Math.min(window.devicePixelRatio || 1, 2);
	const P = meltTuning;

	const sp = {
		cx: new Spring(0),
		cy: new Spring(0),
		bx: new Spring(0),
		by: new Spring(0),
		k: new Spring(P.k),
		dark: new Spring(1),
		cont: new Spring(0),
	};

	/* 悬停液凸的弹簧：比胶囊本体的更软（ω 低一档），跟手时带一点迟到感，
	   这点「追不上」正是液态手感。 */
	const bp = {
		x: new Spring(0).set(9, 0.8),
		y: new Spring(0).set(9, 0.8),
		r: new Spring(0).set(11, 0.75),
	};

	let phase: MeltPhase = "idle";
	/* hold = 胶囊玻璃实时渲染中（悬停 / 搜索打开）。它与 phase 正交：
	   morph 落定后进入 hold，引擎相位停在 morph，直到 holdOff 收干才 sleep。 */
	let hold = false;
	let holdPtr = { x: 0, y: 0, inside: false };
	let pointer = { x: 0, y: 0 };
	let raf = 0;
	let last = 0;
	let settleFired = false;
	let sizeDirty = false;
	let tint: [number, number, number] = [1, 1, 1];
	let disposed = false;

	/* 清玻璃那一档的底色 = 站点的 --card-bg：和导航岛里那枚搜索胶囊同色，
	   弹簧落定时两边交接才看不出换手。任意颜色格式都行 —— 借一个临时元素
	   让浏览器自己算成 rgb()。 */
	const readTint = () => {
		try {
			const probe = document.createElement("span");
			probe.style.cssText =
				"position:absolute;left:-9999px;top:0;background-color:var(--card-bg,#ffffff)";
			document.body.appendChild(probe);
			const cs = getComputedStyle(probe).backgroundColor;
			probe.remove();
			const m = cs.match(/-?[\d.]+/g);
			if (m && m.length >= 3) {
				tint = [Number(m[0]) / 255, Number(m[1]) / 255, Number(m[2]) / 255];
			}
		} catch {
			/* 读不到就用白 */
		}
	};

	const setPhase = (p: MeltPhase) => {
		if (p === phase) return;
		phase = p;
		opts.onPhase?.(p);
	};

	const resize = () => {
		const w = document.documentElement.clientWidth || window.innerWidth;
		const h = document.documentElement.clientHeight || window.innerHeight;
		const cw = Math.max(1, Math.round(w * dpr));
		const ch = Math.max(1, Math.round(h * dpr));
		if (canvas.width !== cw || canvas.height !== ch) {
			canvas.width = cw;
			canvas.height = ch;
		}
		gl.viewport(0, 0, cw, ch);
	};

	/** 真折射那层：圆角矩形 + 透明度，每帧跟着弹簧走 */
	const paintLens = (darkAmt: number) => {
		if (!lens) return;
		const w = Math.max(2, sp.bx.x * 2);
		const h = Math.max(2, sp.by.x * 2);
		const r = Math.min(sp.bx.x, sp.by.x);
		lens.style.transform = `translate(${(sp.cx.x - sp.bx.x).toFixed(2)}px, ${(
			sp.cy.x - sp.by.x
		).toFixed(2)}px)`;
		lens.style.width = `${w.toFixed(2)}px`;
		lens.style.height = `${h.toFixed(2)}px`;
		lens.style.borderRadius = `${r.toFixed(2)}px`;
		// 贴着顶边那档是不透的黑玻璃，折射层露不出来也没必要算
		const clarity = Math.max(0, Math.min(1, (0.9 - darkAmt) / 0.55));
		lens.style.opacity = clarity.toFixed(3);
		lens.style.backdropFilter = `blur(${(P.refract * 0.17).toFixed(2)}px) saturate(145%) brightness(1.04)`;
		lens.style.setProperty(
			"-webkit-backdrop-filter",
			`blur(${(P.refract * 0.17).toFixed(2)}px) saturate(145%) brightness(1.04)`,
		);
	};

	const setMorphSprings = () => {
		for (const s of [sp.cx, sp.cy, sp.bx, sp.by]) s.set(P.om, P.ze);
	};

	const bumpGone = () => bp.r.settled(0.4, 6) && bp.r.x < 0.6;

	const frame = (now: number) => {
		if (disposed) return;
		/* 缩放过窗口就重建一次尺寸。不每帧量 clientWidth —— 每帧改 .ts-lens
		   的样式已经脏了布局，再去量会把 layout 逼着同步刷一遍。 */
		if (sizeDirty) {
			sizeDirty = false;
			resize();
		}
		const dt = Math.min((now - last) / 1000, 1 / 30);
		last = now;

		if (phase === "drag") {
			// 沿吸附边钳住：top 模式不许越过顶边，left 模式不许越过左缘
			if (orient === "left") {
				sp.cx.t = Math.max(pointer.x, P.edge * 0.5);
				sp.cy.t = pointer.y;
			} else {
				sp.cx.t = pointer.x;
				sp.cy.t = Math.max(pointer.y, P.edge * 0.5);
			}
			// 速度拉伸：液滴朝运动方向微微变长
			const st = P.radius + Math.min(26, Math.abs(sp.cx.v) * 0.045);
			const st2 = P.radius + Math.min(26, Math.abs(sp.cy.v) * 0.045);
			sp.bx.t = st;
			sp.by.t = st2;
		}
		if (hold) {
			/* hold 模式：胶囊玻璃每帧实时渲染。目标值每帧重读 capsule()，
			   窗口缩放时玻璃跟着走；液凸追指针。 */
			const c = capsule();
			sp.cx.t = c.cx;
			sp.cy.t = c.cy;
			sp.bx.t = c.w / 2;
			sp.by.t = c.h / 2;
			sp.dark.t = 0;
			sp.k.t = 10;
			sp.cont.t = 1;
			bp.x.t = holdPtr.x;
			bp.y.t = holdPtr.y;
			bp.r.t = holdPtr.inside ? P.bump : 0;
		}
		for (const key in sp) sp[key as keyof typeof sp].step(dt);
		for (const s of [bp.x, bp.y, bp.r]) s.step(dt);
		// 缩回完成判定：贴着吸附边的那根半轴缩没了才算完（top=by，left=bx）
		if (
			phase === "retract" &&
			(orient === "left" ? sp.bx.x : sp.by.x) < 2.5 &&
			bumpGone()
		) {
			sleep();
			return;
		}
		if (phase === "morph") {
			/* 「快到了」和「落定」要分开：前者立刻把 DOM 那枚真胶囊叫出来接手
			   （它的淡入 0.34s 正好盖住最后那几像素），后者才停 rAF —— 一起做
			   的话胶囊会在液滴还差 10px 时突然跳一下。 */
			if (!settleFired && sp.cx.settled(14, 220) && sp.cy.settled(14, 220)) {
				settleFired = true;
				opts.onSettle?.();
			}
			if (sp.cx.settled() && sp.cy.settled() && (hold || bumpGone())) {
				// hold 在 onSettle 里接的班：别睡，交给下面的 hold 分支继续画
				if (!hold) {
					sleep();
					return;
				}
			}
		}
		if (!hold && phase === "idle" && bumpGone()) {
			sleep();
			return;
		}

		const darkAmt = Math.max(0, Math.min(1, sp.dark.x));
		gl.uniform2f(U.uRes, canvas.width, canvas.height);
		// uRes 仍是屏幕坐标（y 翻转发生在 shader 入口、翻转之前）；
		// blob / 液凸在 left 模式下按 (y,x) 传 —— 与 shader 里的坐标系翻转配套
		const bwx = Math.max(sp.bx.x, 0.5) * dpr;
		const bwy = Math.max(sp.by.x, 0.5) * dpr;
		if (orient === "left") {
			gl.uniform4f(U.uBlob, sp.cy.x * dpr, sp.cx.x * dpr, bwy, bwx);
		} else {
			gl.uniform4f(U.uBlob, sp.cx.x * dpr, sp.cy.x * dpr, bwx, bwy);
		}
		const bpr = Math.max(bp.r.x, 0.5) * dpr;
		if (orient === "left") {
			gl.uniform4f(U.uBlob2, bp.y.x * dpr, bp.x.x * dpr, bpr, bpr);
		} else {
			gl.uniform4f(U.uBlob2, bp.x.x * dpr, bp.y.x * dpr, bpr, bpr);
		}
		gl.uniform1f(U.uEdge, P.edge * dpr);
		gl.uniform1f(U.uK, sp.k.x * dpr);
		gl.uniform1f(U.uK2, P.k * dpr);
		gl.uniform1f(U.uHeight, P.height * dpr);
		gl.uniform1f(U.uHlAmt, P.hl);
		gl.uniform1f(U.uAb, P.ab);
		gl.uniform1f(U.uDpr, dpr);
		gl.uniform1f(U.uDark, darkAmt);
		gl.uniform1f(U.uCont, Math.max(0, Math.min(1, sp.cont.x)) * P.cont);
		// 胶囊本体在 hold（含收尾交叉淡）期间也要继续画
		gl.uniform1f(U.uValid, hold || phase !== "idle" ? 1 : 0);
		gl.uniform1f(U.uValid2, bp.r.x > 0.5 ? 1 : 0);
		gl.uniform3f(U.uTint, tint[0], tint[1], tint[2]);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawArrays(gl.TRIANGLES, 0, 3);

		paintLens(darkAmt);
		raf = requestAnimationFrame(frame);
	};

	const wake = () => {
		if (disposed || raf) return;
		resize();
		last = performance.now();
		raf = requestAnimationFrame(frame);
	};

	/* 窗口尺寸只在真正的 resize 事件里标脏，帧里再统一处理 */
	const onWinResize = () => {
		sizeDirty = true;
	};
	window.addEventListener("resize", onWinResize);

	/** 收工：停 rAF、清画布、把折射层也收掉 */
	const sleep = () => {
		if (raf) cancelAnimationFrame(raf);
		raf = 0;
		gl.clear(gl.COLOR_BUFFER_BIT);
		if (lens) lens.style.opacity = "0";
		setPhase("idle");
	};

	const toCapsule = (animate: boolean) => {
		const c = capsule();
		setMorphSprings();
		sp.cx.t = c.cx;
		sp.cy.t = c.cy;
		sp.bx.t = c.w / 2;
		sp.by.t = c.h / 2;
		sp.dark.t = 0; // 材质变浅
		sp.k.t = 10; // 与顶边脱开
		sp.cont.t = 1; // 上黑下透淡入
		settleFired = false;
		if (!animate) {
			for (const s of [sp.cx, sp.cy, sp.bx, sp.by, sp.k, sp.dark, sp.cont]) {
				s.x = s.t;
				s.v = 0;
			}
		}
	};

	/** 把液滴就地摆到胶囊位（不动画）—— 关闭 / 直接出现时用 */
	const snapToCapsule = () => {
		const c = capsule();
		sp.cx.x = c.cx;
		sp.cy.x = c.cy;
		sp.bx.x = c.w / 2;
		sp.by.x = c.h / 2;
		sp.k.x = 10;
		sp.dark.x = 0;
		sp.cont.x = 1;
		for (const s of [sp.cx, sp.cy, sp.bx, sp.by, sp.k, sp.dark, sp.cont])
			s.v = 0;
	};

	/** 液凸归零（半径清 0，uValid2 随之关门） */
	const resetBump = () => {
		bp.x.x = bp.x.t = 0;
		bp.y.x = bp.y.t = 0;
		bp.r.x = bp.r.t = 0;
		for (const s of [bp.x, bp.y, bp.r]) s.v = 0;
	};

	return {
		phase: () => phase,
		wake,
		/** 从吸附边某个坐标按下 */
		down(x: number, y: number) {
			hold = false;
			resetBump();
			readTint();
			resize();
			pointer = { x, y };
			// 从吸附边里渗出来：top 模式固定 y、left 模式固定 x
			if (orient === "left") {
				sp.cx.x = P.edge * 0.5;
				sp.cx.v = 0;
				sp.cy.x = y;
				sp.cy.v = 0;
			} else {
				sp.cx.x = x;
				sp.cx.v = 0;
				sp.cy.x = P.edge * 0.5;
				sp.cy.v = 0;
			}
			sp.bx.x = sp.by.x = 2;
			// 跟手要紧：中心用硬弹簧，半宽回到正常阻尼（初值 2 会弹一下才有体积）
			sp.cx.set(18, 0.95);
			sp.cy.set(18, 0.95);
			sp.bx.set(P.om, P.ze);
			sp.by.set(P.om, P.ze);
			sp.dark.x = sp.dark.t = 1;
			sp.k.x = sp.k.t = P.k;
			sp.cont.x = sp.cont.t = 0;
			setPhase("drag");
			wake();
		},
		move(x: number, y: number) {
			if (phase !== "drag") return;
			pointer = { x, y };
		},
		/** 松手：拉够 → 弹成胶囊；没拉够 → 被吸回吸附边。
		 *  阈值沿拉伸轴：top 模式看 y（视口高度），left 模式看 x（视口宽度）。 */
		up(x: number, y: number) {
			if (phase !== "drag") return;
			const reach = orient === "left" ? x : y;
			const span =
				orient === "left"
					? document.documentElement.clientWidth || window.innerWidth
					: document.documentElement.clientHeight || window.innerHeight;
			if (reach > span * 0.32) {
				toCapsule(true);
				setPhase("morph");
			} else {
				this.retract();
			}
		},
		/** 从某个 DOM 矩形起飞（岛里那枚放大镜）→ 落到屏幕上方 */
		flyFrom(rect: {
			left: number;
			top: number;
			width: number;
			height: number;
		}) {
			readTint();
			resize();
			sp.cx.x = rect.left + rect.width / 2;
			sp.cy.x = rect.top + rect.height / 2;
			sp.bx.x = Math.max(14, rect.width / 2);
			sp.by.x = Math.max(14, rect.height / 2);
			sp.cx.v = sp.cy.v = sp.bx.v = sp.by.v = 0;
			sp.dark.x = 1;
			sp.cont.x = 0;
			sp.k.x = P.k;
			toCapsule(true);
			setPhase("morph");
			wake();
		},
		/** 缩回吸附边（点空白 / Esc / 没拉够松手） */
		retract() {
			setMorphSprings();
			if (orient === "left") sp.cx.t = P.edge * 0.3;
			else sp.cy.t = P.edge * 0.3;
			sp.bx.t = sp.by.t = 1;
			sp.dark.t = 1;
			sp.k.t = P.k;
			sp.cont.t = 0;
			setPhase("retract");
			wake();
		},
		/** 从「已经落定的胶囊位」缩回顶边 —— 关闭搜索时用 */
		retractFromCapsule() {
			snapToCapsule();
			this.retract();
		},
		/**
		 * 胶囊玻璃实时渲染开（悬停 / 搜索打开）。
		 * 注意**不改引擎相位**：hold 与 phase 正交，拨相位会让 onPhase 把
		 * 组件的 open/idle 状态带偏。弹簧停在胶囊位（上一轮开合）就无缝接；
		 * 还停在初值（首次悬停）就地摆好，不做动画。
		 */
		holdOn() {
			if (disposed || phase === "drag" || phase === "retract") return;
			readTint();
			hold = true;
			holdPtr = { x: 0, y: 0, inside: false };
			if (
				phase === "idle" ||
				(phase === "morph" &&
					sp.cx.settled() &&
					sp.cy.settled() &&
					(orient === "left" ? sp.bx : sp.by).settled())
			) {
				snapToCapsule();
			}
			wake();
		},
		/** 悬停中：液凸目标点 / 是否还压在胶囊上 */
		holdPointer(x: number, y: number, inside: boolean) {
			if (!hold) return;
			holdPtr = { x, y, inside };
		},
		/** 收摊：液凸收干、胶囊玻璃交还给 DOM 的 CSS 玻璃，然后休眠 */
		holdOff() {
			if (!hold) return;
			hold = false;
			holdPtr = { ...holdPtr, inside: false };
			bp.r.t = 0;
		},
		/** 立刻消失（切页 / 版本档位变了） */
		hide() {
			hold = false;
			resetBump();
			sleep();
		},
		destroy() {
			disposed = true;
			if (raf) cancelAnimationFrame(raf);
			raf = 0;
			window.removeEventListener("resize", onWinResize);
			gl.getExtension("WEBGL_lose_context")?.loseContext();
		},
	};
}

export type Melt = NonNullable<ReturnType<typeof createMelt>>;
