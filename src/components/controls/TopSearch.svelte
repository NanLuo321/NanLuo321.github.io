<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { navigateToPage } from "@utils/navigation-utils";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import {
	loadSearchIndex,
	MAX_RESULTS,
	runSearch,
	searchIndexFailed,
	type SearchHit,
} from "@/utils/island-search";
import {
	createMelt,
	type Melt,
	type MeltTuning,
	meltTuning,
} from "@/utils/metaball-melt";
import { getSearchUrl } from "@/utils/url-utils";

/**
 * 屏幕上方那枚搜索（ProMax 桌面端专属）
 * ============================================================================
 * 液体那一段是参考实现的**原样移植**：WebGL2 + SDF。形状层公式全部来自
 * iOS 26.3 QuartzCore default.metallib 的反汇编（sdf_union 的梯度感知
 * smooth-min、玻璃位移 / 高光剖面），弹簧在 CPU 上做半隐式欧拉积分，
 * 每帧把中心 / 半宽 / k / 材质写进 uniform。细节见 utils/metaball-melt.ts。
 *
 *   IDLE    什么都看不见，只有最上面一条感应带（鼠标过去出提示）
 *   DRAG    从这里往下拖 → 液滴从屏幕顶边「渗」出来、跟着指针走，
 *           和顶边用 sdf_union 融成一坨：拉得越远，中间那根液颈越细。
 *   MORPH   拉过视口高度的 32% 松手 → 弹簧把液滴弹到屏幕上方化开成搜索
 *           胶囊；没拉够松手 → 被顶边吸回去。
 *   OPEN    液滴快落定时交给 DOM 那枚真胶囊接手（它的淡入正好盖住
 *           最后那几像素，看不出换手）
 *
 * 另一个入口：点导航岛里那枚放大镜 —— 液滴从岛上那枚图标的位置起飞，
 * 一路飞到屏幕上方落定，也就是「搜索框从岛内移动到屏幕上方」这件事本身。
 * 岛身全程不动、不拉伸（这是用户明确要求过的）。
 *
 * 两处刻意不照搬参考实现（用户明确要求）：
 *   · **去掉黑条**：顶部那条半平面退到视口外（uEdge = 0），只保留
 *     「把液滴吸住、拉出液颈」的几何作用，画不出黑色条带。
 *   · **去掉壁纸**：画布全程透明，页面自己从底下透出来。代价是 shader
 *     没法再采样贴图折射 → 真折射交给 .ts-lens（同一套圆角矩形，
 *     只是把滤镜换成真的 backdrop-filter）；shader 只负责材质。
 * 参考实现里那个调参面板挪到 Ctrl+Shift+E 后面，平时不占地方。
 *
 * ⚠ 为什么它是独立的一层，而不是塞进 Navbar：
 *   #top-row 是 `fixed + -translate-x-1/2`，transform 会给后代当**包含块**，
 *   后代里的 position:fixed 就不再相对视口了。所以这层挂在 body 直下。
 *
 * ⚠ 只在 body.site-promax 且 ≥768px 时启用：ProMax 把导航岛沉到了屏幕底部，
 *   顶部这块才是空的；其它版本 / 窄屏保持导航岛内展开的老样子。
 */

/* ---------------- 手感常量 ---------------- */
const CAP_TOP = 64; // 胶囊落点：离屏幕顶部多少（必须与 CSS 的 top 一致）
const CAP_H = 56; // 胶囊高度（必须与 CSS 的 height 一致）
const HINT_KEY = "topsearch-hint-seen"; // 提示只主动弹一次（按会话记）

/* ---------------- 状态 ---------------- */
let enabled = $state(false); // ProMax 桌面端才启用
/** idle 静默 · drag 拖拽中 · morph 松手后弹簧飞行中 · open 胶囊已接手 · retract 缩回顶边 */
let phase = $state<"idle" | "drag" | "morph" | "open" | "retract">("idle");
let meltOn = $state(false); // 画布 / 折射层可见（拖拽、悬停、打开态）
let capsuleOn = $state(false); // DOM 那枚真胶囊是否在场（落定后浮现、关闭即退场）
let glassOn = $state(false); // 胶囊玻璃正在由引擎实时渲染（悬停 / 打开态）
let capVeil = $state(false); // 胶囊临时让位（拖拽 / 岛内起飞的半路）
let meltFailed = $state(false); // 拿不到 WebGL2 → 退回最朴素的液滴
let tuneOn = $state(false); // 调参面板（Ctrl+Shift+E）
let hintOn = $state(false);
let hoverTop = $state(false);
let firstHint = $state(false);
let notice = $state(""); // 临时一句话（语音不可用之类）

let keyword = $state("");
let hits = $state<SearchHit[]>([]);
let totalHits = $state(0);
let isSearching = $state(false);
let indexFailed = $state(false);

let micSupported = $state(false);
let listening = $state(false);

/* ---------------- 节点 ---------------- */
let grabEl = $state<HTMLElement | null>(null);
let capsuleEl = $state<HTMLElement | null>(null);
let canvasEl = $state<HTMLCanvasElement | null>(null);
let lensEl = $state<HTMLElement | null>(null);
let blobEl = $state<HTMLElement | null>(null); // 没有 WebGL2 时的兜底液滴
let caretEl = $state<HTMLElement | null>(null);
let inputEl = $state<HTMLInputElement | null>(null);

const isOpen = $derived(phase === "open");

let melt: Melt | null = null;
/* 鼠标是否压在胶囊上（不用 $state：只参与逻辑，不进模板） */
let hoverCap = false;

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let closeTimer: ReturnType<typeof setTimeout> | undefined;
let hintTimer: ReturnType<typeof setTimeout> | undefined;
let noticeTimer: ReturnType<typeof setTimeout> | undefined;
let blinkTimer: ReturnType<typeof setTimeout> | undefined;
let indexWarmed = false;

/* ---------------- 几何 ---------------- */
/** 胶囊的落点（与 CSS 的 left/top/width/height 必须是同一套） */
const capsuleBox = () => {
	const vw = window.innerWidth;
	const w = Math.round(Math.min(560, vw * 0.62));
	return { w, h: CAP_H, cx: vw / 2, cy: CAP_TOP + CAP_H / 2 };
};

/* ---------------- 画布 / 折射层的显隐 ---------------- */
/** 画布醒目时立刻上，收工时慢慢淡出（0.26s 正好和胶囊的淡入错开一点） */
const showMelt = (on: boolean) => {
	const c = canvasEl;
	if (!c) return;
	if (on) {
		c.style.transition = "none";
		c.style.opacity = "1";
	} else {
		c.style.transition = "opacity .26s ease";
		c.style.opacity = "0";
	}
	if (!on && lensEl) lensEl.style.opacity = "0";
};

/** 没有 WebGL2 时的兜底：一枚黑圆点跟着指针（液颈那些就没了） */
const paintFallback = (x: number, y: number, on: boolean) => {
	const b = blobEl;
	if (!b) return;
	b.style.transition = "none";
	b.style.opacity = on ? "1" : "0";
	b.style.setProperty("--ts-x", `${Math.round(x)}px`);
	b.style.setProperty("--ts-y", `${Math.round(y)}px`);
};

/* ---------------- 拖拽 ---------------- */
const onGrabDown = (e: PointerEvent) => {
	if (!enabled || !e.isPrimary || (e.pointerType === "mouse" && e.button !== 0))
		return;
	if (phase === "open" || phase === "morph") return;
	e.preventDefault();
	clearTimeout(closeTimer);
	hintOn = false;
	hoverTop = false;
	firstHint = false;
	markHintSeen();
	// 拖拽路上先把胶囊让位标记挂上（上一轮打开态可能还留着它），别跟液滴叠一起
	capVeil = true;
	if (melt) {
		meltOn = true;
		showMelt(true);
		glassOn = false;
		melt.down(e.clientX, e.clientY);
	} else {
		phase = "drag";
		paintFallback(e.clientX, e.clientY, true);
	}
	try {
		// 合成事件（自动化探针）里 pointerId 不一定能捕获，失败也不影响跟手
		(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
	} catch {
		/* ignore */
	}
};

const onPointerMove = (e: PointerEvent) => {
	if (phase === "drag") {
		if (melt) melt.move(e.clientX, e.clientY);
		else paintFallback(e.clientX, e.clientY, true);
		return;
	}
	// 鼠标贴到屏幕最上面 → 出提示（打开态 / 拖拽中不打扰）
	if (!enabled) return;
	const near = e.clientY <= 90 && !isOpen && phase === "idle";
	if (near !== hoverTop) hoverTop = near;
};

const onPointerUp = (e: PointerEvent) => {
	if (phase !== "drag") return;
	if (melt) {
		// 「拉够 / 没拉够」和落点全在引擎里判，这里不重复一套阈值
		melt.up(e.clientY);
		return;
	}
	paintFallback(e.clientX, e.clientY, false);
	if (e.clientY > window.innerHeight * 0.32) enterOpen();
	else phase = "idle";
};

/* ---------------- 开 / 合 ---------------- */
const markHintSeen = () => {
	try {
		sessionStorage.setItem(HINT_KEY, "1");
	} catch {
		/* 隐私模式下写不了，下次再提示一次也无所谓 */
	}
	firstHint = false;
};

const warmIndex = () => {
	if (indexWarmed) return;
	indexWarmed = true;
	loadSearchIndex();
};

/**
 * 落定（或直接就位）：胶囊淡入、内容从 blur 里凝聚、输入框接管焦点。
 * 这是胶囊**唯一上场**的时刻 —— 它平时不在页面上，从拖拽 / 岛内起飞落定
 * 之后才浮现（跟参考实现一致）。出现后玻璃交给引擎实时渲染。
 */
const enterOpen = () => {
	if (phase === "open") return;
	phase = "open";
	capsuleOn = true;
	hintOn = false;
	hoverTop = false;
	notice = "";
	keyword = "";
	hits = [];
	totalHits = 0;
	markHintSeen();
	warmIndex();
	capVeil = false;
	if (capsuleEl) {
		capsuleEl.classList.remove("is-out", "is-veil");
		// 重放「从 blur 里凝聚」：is-veil 摘掉之后要让它重新浮现一次
		capsuleEl.classList.remove("show");
		void capsuleEl.offsetWidth;
		capsuleEl.classList.add("show");
	}
	if (melt) {
		// 玻璃不换手给 CSS 了：引擎继续实时画（hold 模式），真折射 + SDF 材质
		capGlass();
	}
	clearTimeout(closeTimer);
	setTimeout(() => {
		inputEl?.focus();
		paintCaret();
	}, 160);
};

/**
 * 打开（公开 API）。
 * from 给的是「起飞点」—— 岛里那枚放大镜。给了就让液滴从那儿飞上来，
 * 没给就跳过液体，直接把胶囊摆出来。
 */
const open = (opts?: { from?: Element | null }) => {
	if (!enabled) return;
	if (melt && opts?.from) {
		meltOn = true;
		showMelt(true);
		glassOn = false;
		// 飞行路上先让胶囊让位（从打开态再起飞时它还在屏幕上）：液滴飞过来顶替它
		capVeil = true;
		melt.flyFrom(opts.from.getBoundingClientRect());
		return; // 落定后由 onSettle → enterOpen 接手
	}
	enterOpen();
};

const close = () => {
	if (phase === "idle") return;
	inputEl?.blur();
	if (caretEl) caretEl.style.display = "none";
	capsuleOn = false;
	hoverCap = false;
	keyword = "";
	hits = [];
	totalHits = 0;
	if (capsuleEl) {
		// 退场：撤掉 show（浮现那一档），挂 is-out 让它往上飘着淡出
		capsuleEl.classList.remove("show");
		capsuleEl.classList.add("is-out");
	}
	// 引擎那份玻璃收工（不还 SVG 玻璃了 —— 胶囊自己也要走，还上去只会在
	// 淡出半路换一次底色）
	capGlassOff(false);
	if (melt) {
		// 液滴就在胶囊位上，从那儿被顶边吸回去；路上让胶囊让位，免得两条影
		capVeil = true;
		meltOn = true;
		showMelt(true);
		melt.retractFromCapsule();
	} else {
		paintFallback(capsuleBox().cx, CAP_TOP + CAP_H, false);
		phase = "idle";
	}
};

const toggleOpen = () =>
	phase === "open" || phase === "morph" ? close() : open();

/* ---------------- 调参面板（Ctrl+Shift+E） ---------------- */
const TUNE_DEFAULTS: MeltTuning = {
	k: 64,
	height: 18,
	refract: 40,
	hl: 1.5,
	ab: 0.12,
	cont: 0.72,
	om: 11,
	ze: 0.72,
	radius: 34,
	/* 与 meltTuning.edge 保持一致：-1 把半平面下沿推出视口，免得最顶一行
	   留一道 1px 描边。resetTune() 会写回全部键，这里漏改就会把它带回来。 */
	edge: -1,
};

/** 面板上的读数：meltTuning 是引擎现读的普通对象，改它不会触发渲染，
 *  所以另存一份 $state 只为了把数字显示出来 */
let tuneVals = $state<MeltTuning>({ ...TUNE_DEFAULTS });

/** 每一档都直写 meltTuning —— 引擎每帧现读，不用同步任何别的状态 */
const tuneRows = [
	{
		key: "k",
		label: "融合半径 k",
		min: 10,
		max: 160,
		step: 1,
		fmt: (v: number) => `${v}`,
	},
	{
		key: "height",
		label: "透镜高度",
		min: 4,
		max: 60,
		step: 1,
		fmt: (v: number) => `${v}`,
	},
	{
		key: "refract",
		label: "折射强度",
		min: 0,
		max: 120,
		step: 1,
		fmt: (v: number) => `${v}`,
	},
	{
		key: "hl",
		label: "高光强度",
		min: 0,
		max: 3,
		step: 0.05,
		fmt: (v: number) => v.toFixed(2),
	},
	{
		key: "ab",
		label: "色差",
		min: 0,
		max: 1,
		step: 0.02,
		fmt: (v: number) => v.toFixed(2),
	},
	{
		key: "cont",
		label: "黑玻璃强度",
		min: 0,
		max: 1,
		step: 0.02,
		fmt: (v: number) => v.toFixed(2),
	},
	{
		key: "radius",
		label: "液滴半径",
		min: 12,
		max: 70,
		step: 1,
		fmt: (v: number) => `${v}`,
	},
	{
		key: "bump",
		label: "悬停液凸",
		min: 0,
		max: 60,
		step: 1,
		fmt: (v: number) => `${v}`,
	},
	{
		key: "om",
		label: "弹簧 ω",
		min: 4,
		max: 22,
		step: 0.5,
		fmt: (v: number) => v.toFixed(1),
	},
	{
		key: "ze",
		label: "阻尼比 ζ",
		min: 0.2,
		max: 1.2,
		step: 0.02,
		fmt: (v: number) => v.toFixed(2),
	},
] as const;

const setTune = (key: keyof MeltTuning, value: number) => {
	meltTuning[key] = value;
	tuneVals[key] = value;
};

const resetTune = () => {
	for (const key of Object.keys(TUNE_DEFAULTS) as (keyof MeltTuning)[]) {
		setTune(key, TUNE_DEFAULTS[key]);
	}
};

/* ---------------- 检索 ---------------- */
let lastKeyword = "";
$effect(() => {
	if (keyword !== lastKeyword) {
		lastKeyword = keyword;
		search(keyword);
	}
});

const search = (raw: string): void => {
	clearTimeout(debounceTimer);
	if (!raw.trim()) {
		hits = [];
		totalHits = 0;
		return;
	}
	isSearching = true;
	debounceTimer = setTimeout(async () => {
		const out = await runSearch(raw);
		hits = out.hits;
		totalHits = out.total;
		indexFailed = searchIndexFailed();
		isSearching = false;
	}, 130);
};

const handleResultClick = (event: Event, href: string): void => {
	event.preventDefault();
	close();
	navigateToPage(href);
};

const onInputKeydown = (e: KeyboardEvent): void => {
	if (e.key === "Escape") {
		e.stopPropagation();
		close();
		return;
	}
	if (e.key === "Enter") {
		const href = getSearchUrl(keyword);
		close();
		navigateToPage(href);
	}
};

/* ---------------- 光标：原生 caret 画不出辉光，量字宽自己画 ---------------- */
const mctx =
	typeof document === "undefined"
		? null
		: document.createElement("canvas").getContext("2d");

const paintCaret = () => {
	const inp = inputEl;
	const car = caretEl;
	if (!inp || !car || !mctx) return;
	if (phase !== "open" || document.activeElement !== inp) {
		car.style.display = "none";
		return;
	}
	const cs = getComputedStyle(inp);
	mctx.font = cs.font || `${cs.fontSize} ${cs.fontFamily}`;
	const padL = Number.parseFloat(cs.paddingLeft) || 0;
	const upto = inp.value.slice(0, inp.selectionStart ?? inp.value.length);
	const x = inp.offsetLeft + padL + mctx.measureText(upto).width;
	car.style.left = `${Math.min(x, inp.offsetLeft + inp.offsetWidth - 10)}px`;
	car.style.display = "block";
};

/** 打字时光标常亮（苹果行为）：重启一次闪烁 */
const restartBlink = () => {
	const car = caretEl;
	if (!car) return;
	car.style.animation = "none";
	clearTimeout(blinkTimer);
	blinkTimer = setTimeout(() => {
		car.style.animation = "";
	}, 80);
};

/* ---------------- 语音（浏览器不给就整枚按钮不出现） ---------------- */
type SpeechCtor = new () => {
	lang: string;
	interimResults: boolean;
	continuous: boolean;
	start: () => void;
	stop: () => void;
	onresult: ((ev: any) => void) | null;
	onerror: (() => void) | null;
	onend: (() => void) | null;
};
let rec: InstanceType<SpeechCtor> | null = null;

const flashNotice = (text: string) => {
	notice = text;
	clearTimeout(noticeTimer);
	noticeTimer = setTimeout(() => {
		notice = "";
	}, 2600);
};

const toggleMic = () => {
	if (!micSupported) return;
	if (listening) {
		rec?.stop();
		return;
	}
	const w = window as unknown as {
		webkitSpeechRecognition?: SpeechCtor;
		SpeechRecognition?: SpeechCtor;
	};
	const SR = w.webkitSpeechRecognition ?? w.SpeechRecognition;
	if (!SR) {
		flashNotice("这个浏览器不支持语音搜索");
		return;
	}
	const r = new SR();
	r.lang = "zh-CN";
	r.interimResults = true;
	r.continuous = false;
	r.onresult = (ev: any) => {
		let text = "";
		for (let i = ev.resultIndex; i < ev.results.length; i += 1) {
			text += ev.results[i][0].transcript;
		}
		keyword = text.trim();
		if (ev.results[ev.results.length - 1]?.isFinal) r.stop();
	};
	r.onerror = () => {
		listening = false;
		flashNotice("没听清，再说一次？");
	};
	r.onend = () => {
		listening = false;
	};
	rec = r;
	listening = true;
	try {
		r.start();
	} catch {
		listening = false;
		flashNotice("麦克风没能打开");
	}
};

/* ---------------- 启用判定 ---------------- */
/** 把液体那一段彻底收掉（切页 / 档位切换 / 卸载时用） */
const softReset = () => {
	clearTimeout(closeTimer);
	capsuleOn = false;
	meltOn = false;
	glassOn = false;
	capVeil = false;
	hoverCap = false;
	melt?.hide();
	showMelt(false);
	paintFallback(0, 0, false);
	if (capsuleEl) capsuleEl.classList.remove("show", "is-out", "is-veil");
	phase = "idle";
};

/* ---------------- 悬停：胶囊上的实时液态玻璃 ----------------
   平时是 CSS 玻璃 + 站点的 LiquidGlass SVG 折射（零 GPU 常驻）；
   鼠标压上来（或搜索打开）就切给引擎实时渲染 —— 参考实现的画质。
   液凸追指针，离开后收干、交叉淡接回。 */
type LGApi = {
	register: (el: Element, cfg?: Record<string, unknown>) => boolean;
	unregister: (el: Element) => void;
};
/** 与 LiquidGlass.astro 里 .ts-capsule 那条预设同口径（blur/tint 抬了一档，
 *  胶囊要的是参考实现那种烟灰感，不是岛面的通透） */
const CAP_LG_CFG = {
	band: 20,
	strength: 1.15,
	blur: 10,
	sat: 1.1,
	tint: 0.62,
	force: true,
};
const lg = () => (window as unknown as { __liquidGlass?: LGApi }).__liquidGlass;
/** 摘掉 LiquidGlass 的内联 SVG 玻璃 —— 不摘的话它和引擎的 SDF 玻璃叠两层 */
const dropLg = () => {
	if (capsuleEl) lg()?.unregister(capsuleEl);
};
/** 还回去：等 class 摘掉、computed 里重新有底色之后再挂。
 *  applyGlass 在收尾的那几百毫秒里会因过渡中的 computed 值拒绝一次
 *  （实测 ret=false），所以按帧重试到真挂上为止 —— 有界，不无限转。 */
const restoreLg = () => {
	let tries = 0;
	const attempt = () => {
		if (glassOn || !capsuleEl || tries++ > 12) return;
		if (capsuleEl.getAttribute("data-lg-on") !== null) return; // 已挂上
		if (!lg()?.register(capsuleEl, CAP_LG_CFG)) requestAnimationFrame(attempt);
	};
	requestAnimationFrame(attempt);
};
const capGlass = () => {
	if (glassOn) {
		melt?.holdOn();
		return;
	}
	dropLg();
	glassOn = true;
	meltOn = true;
	showMelt(true);
	melt?.holdOn();
};
/** 关掉实时玻璃：画布淡出、液凸收干。
 *  restore=false 是「胶囊自己也要退场」的场合（关闭搜索）—— 把 SVG 玻璃
 *  还到一枚正在淡出的胶囊上没有意义，只会让它在淡出半路换一次底色。 */
const capGlassOff = (restore = true) => {
	if (!glassOn) return;
	glassOn = false;
	showMelt(false);
	melt?.holdOff();
	if (restore) restoreLg();
};
const onCapEnter = (e: PointerEvent) => {
	if (!melt || meltFailed || e.pointerType !== "mouse") return;
	if (phase === "drag" || phase === "morph" || phase === "retract") return;
	hoverCap = true;
	capGlass();
};
const onCapMove = (e: PointerEvent) => {
	if (!melt || (!hoverCap && phase !== "open")) return;
	melt.holdPointer(e.clientX, e.clientY, true);
};
const onCapLeave = (e: PointerEvent) => {
	if (e.pointerType !== "mouse") return;
	hoverCap = false;
	if (!melt) return;
	melt.holdPointer(holdPtrX(), holdPtrY(), false);
	// 打开态玻璃继续亮着（正在搜索）；纯悬停态离开就收
	if (!isOpen && phase !== "drag" && phase !== "morph" && phase !== "retract") {
		capGlassOff();
	}
};
/* 液凸留在原地收干就好 —— 拿不到指针坐标时用胶囊中心附近 */
const holdPtrX = () => capsuleBox().cx;
const holdPtrY = () => capsuleBox().cy;

const sync = () => {
	const on =
		document.body.classList.contains("site-promax") &&
		window.matchMedia("(min-width: 768px)").matches;
	if (on === enabled) return;
	enabled = on;
	if (!on) {
		if (phase !== "idle" || capsuleOn) softReset();
		hintOn = false;
		return;
	}
	// 本会话没提示过 → 露一会儿脸，告诉访客「搜索搬到屏幕上方了」
	let seen = true;
	try {
		seen = sessionStorage.getItem(HINT_KEY) === "1";
	} catch {
		seen = false;
	}
	if (seen) return;
	hintTimer = setTimeout(() => {
		firstHint = true;
		clearTimeout(hintTimer);
		hintTimer = setTimeout(() => {
			firstHint = false;
		}, 7000);
	}, 1500);
};

$effect(() => {
	hintOn = enabled && !isOpen && phase === "idle" && (hoverTop || firstHint);
});

/* ---------------- 生命周期 ---------------- */
onMount(() => {
	const w = window as unknown as {
		webkitSpeechRecognition?: SpeechCtor;
		SpeechRecognition?: SpeechCtor;
	};
	micSupported = Boolean(w.webkitSpeechRecognition ?? w.SpeechRecognition);

	// 造液态引擎：拿不到 WebGL2（或 shader 编译失败）就退回一枚朴素黑圆点
	try {
		melt = createMelt({
			canvas: canvasEl,
			lens: lensEl,
			capsule: capsuleBox,
			onPhase: (p) => {
				phase = p === "idle" ? (capsuleOn ? "open" : "idle") : p;
				if (p === "idle") {
					// 玻璃还在悬停/打开态亮着就别把画布收了
					if (!glassOn) {
						meltOn = false;
						showMelt(false);
						restoreLg(); // 拖拽/缩回把 SVG 玻璃摘了的话，还回去
					}
					capVeil = false; // 缩回顶边 / 收干之后，撤掉让位标记
				}
			},
			onSettle: () => enterOpen(),
		});
	} catch {
		melt = null;
	}
	meltFailed = !melt;

	sync();
	const onVersion = () => sync();
	document.addEventListener("siteversionchange", onVersion);
	const mo = new MutationObserver(sync);
	mo.observe(document.body, { attributes: true, attributeFilter: ["class"] });
	const mq = window.matchMedia("(min-width: 768px)");
	mq.addEventListener("change", sync);

	// 调参面板：Ctrl+Shift+E 开关（参考实现里那个面板挪到这里）。
	// ⚠ 不持久化：它是调参工具，不是常驻 UI —— 之前记到 sessionStorage 里，
	//   按过一次它就每次刷新都自己冒出来，被当成「面板赖着不走」的 bug。
	//   每次打开页面都从关着开始，按 Ctrl+Shift+E 才出现。
	const onTuneKey = (e: KeyboardEvent) => {
		if (!e.ctrlKey || !e.shiftKey || e.code !== "KeyE") return;
		e.preventDefault();
		tuneOn = !tuneOn;
	};
	document.addEventListener("keydown", onTuneKey);

	window.addEventListener("pointermove", onPointerMove, { passive: true });
	window.addEventListener("pointerup", onPointerUp);
	window.addEventListener("pointercancel", onPointerUp);
	window.addEventListener("resize", () => paintCaret());
	document.addEventListener("selectionchange", () => paintCaret());
	// 切页（swup 换内容）时把搜索收起来，别把面板留在新页面上
	const onSwapped = () => {
		if (phase !== "idle" || capsuleOn) softReset();
	};
	document.addEventListener("swup:contentReplaced", onSwapped);

	const api = {
		open,
		close,
		toggle: toggleOpen,
		isOpen: () => phase === "open",
	};
	(window as unknown as { __topSearch?: typeof api }).__topSearch = api;

	return () => {
		document.removeEventListener("siteversionchange", onVersion);
		document.removeEventListener("keydown", onTuneKey);
		mo.disconnect();
		mq.removeEventListener("change", sync);
		window.removeEventListener("pointermove", onPointerMove);
		window.removeEventListener("pointerup", onPointerUp);
		window.removeEventListener("pointercancel", onPointerUp);
		document.removeEventListener("swup:contentReplaced", onSwapped);
		melt?.destroy();
		melt = null;
		clearTimeout(debounceTimer);
		clearTimeout(closeTimer);
		clearTimeout(hintTimer);
		clearTimeout(noticeTimer);
		clearTimeout(blinkTimer);
		rec?.stop();
	};
});

// 打开时才吃 Esc / 点空白关闭：别在平时抢全局键盘
$effect(() => {
	if (!isOpen) return;
	const onEsc = (e: KeyboardEvent) => {
		if (e.key === "Escape") close();
	};
	const onDown = (e: PointerEvent) => {
		const t = e.target as Element | null;
		// 事件目标理论上一定是元素，但合成事件 / Shadow DOM 场景下可能是
		// Document 或 Window —— 那也算「点在外面」，照样关，
		// 而且不能让它抛异常（之前的写法会直接吃掉这一次关闭）
		if (!t || typeof t.closest !== "function") {
			close();
			return;
		}
		if (t.closest(".ts-capsule") || t.closest(".ts-results-panel")) return;
		if (t.closest("#dynamic-island-search")) return;
		close();
	};
	document.addEventListener("keydown", onEsc);
	// 捕获阶段：不然页面里的 stopPropagation 会把这一下吃掉
	document.addEventListener("pointerdown", onDown, true);
	return () => {
		document.removeEventListener("keydown", onEsc);
		document.removeEventListener("pointerdown", onDown, true);
	};
});
</script>

<div
	id="top-search"
	class:ts-drag={phase === "drag"}
	class:ts-open={isOpen}
	class:ts-retract={phase === "retract"}
	class:liquid-on={meltOn}
	class:glass-on={glassOn && !meltFailed}
	class:no-liquid={meltFailed}
>
	<!-- 真折射那一层：跟液滴同一个圆角矩形（引擎每帧写 left/top/宽高/圆角），
	     滤镜是真的 backdrop-filter —— 参考实现的「壁纸」去掉之后，
	     玻璃里透出来的就是页面本身 -->
	<div class="ts-lens" bind:this={lensEl} aria-hidden="true"></div>

	<!-- 液滴本体：WebGL2 + SDF（材质、液颈、双光高光、外侧软阴影） -->
	<canvas class="ts-melt" bind:this={canvasEl} aria-hidden="true"></canvas>

	<!-- 没有 WebGL2 时的兜底：一枚黑圆点，液颈/高光就没了 -->
	<span class="ts-blob" bind:this={blobEl} aria-hidden="true"></span>

	<!-- 顶部感应带：只有这样一条看不见的带子吃事件，页面照常能点 -->
	<button
		type="button"
		class="ts-grab"
		bind:this={grabEl}
		aria-label="从屏幕顶部往下拖拽，唤出搜索"
		on:pointerdown={onGrabDown}
	></button>

	<!-- 搜索胶囊：打开页面时**不在**页面上。只有从顶部往下拖、液滴落定
	     （或岛内放大镜起飞落定）之后才浮现 —— 跟参考实现一致。出现后玻璃由
	     引擎实时渲染；点一下或聚焦即展开搜索。 -->
	<div
		class="ts-capsule"
		class:show={capsuleOn}
		class:is-veil={capVeil}
		bind:this={capsuleEl}
		on:pointerenter={onCapEnter}
		on:pointermove={onCapMove}
		on:pointerleave={onCapLeave}
		on:click={() => {
			if (phase === "idle") enterOpen();
		}}
	>
		<Icon icon="material-symbols:search-rounded" class="ts-ic" />
		<input
			class="ts-input"
			bind:this={inputEl}
			bind:value={keyword}
			on:keydown={onInputKeydown}
			on:input={restartBlink}
			on:keyup={() => paintCaret()}
			on:click={() => paintCaret()}
			on:focus={() => {
				paintCaret(true);
				if (phase === "idle") enterOpen();
			}}
			placeholder="搜索或提问"
			spellcheck="false"
			autocomplete="off"
			aria-label="站内搜索"
		/>
		<span class="ts-caret" bind:this={caretEl} aria-hidden="true"></span>
		{#if keyword}
			<!-- 触发重算：值被清空时光标要跟着回到最左 -->
			<button
				type="button"
				class="ts-btn ts-clear"
				on:click={() => {
					keyword = "";
					inputEl?.focus();
					paintCaret();
				}}
				aria-label="清空"
				tabindex={-1}
			>
				<Icon icon="material-symbols:close-rounded" class="text-[1rem]"></Icon>
			</button>
		{/if}
		{#if micSupported}
			<button
				type="button"
				class="ts-btn ts-mic"
				class:on={listening}
				on:click={toggleMic}
				aria-label={listening ? "停止语音输入" : "语音输入"}
				title="语音输入"
				tabindex={-1}
			>
				<Icon
					icon="material-symbols:mic-rounded"
					class="text-[1.05rem]"
				></Icon>
			</button>
		{/if}
	</div>

	<!-- 结果面板 -->
	{#if isOpen && keyword.trim()}
		<div class="ts-results-panel">
			<div class="ts-results">
				{#if isSearching}
					<div class="ts-empty">{i18n(I18nKey.searchLoading)}</div>
				{:else if hits.length > 0}
					{#each hits as item (item.url + item.title)}
						<a
							href={item.url}
							on:click={(e) => handleResultClick(e, item.url)}
							class="ts-item"
						>
							<div class="ts-item-head">
								<span class="ts-item-title">{@html item.title}</span>
								<span class="ts-item-badge">{item.badge}</span>
							</div>
							{#if item.snippet}
								<div class="ts-item-snippet">{@html item.snippet}</div>
							{/if}
						</a>
					{/each}
					{#if totalHits > MAX_RESULTS}
						<a
							href={getSearchUrl(keyword)}
							on:click={(e) => handleResultClick(e, getSearchUrl(keyword))}
							class="ts-more"
						>
							{i18n(I18nKey.searchViewMore).replace(
								"{count}",
								(totalHits - MAX_RESULTS).toString(),
							)}
						</a>
					{/if}
				{:else}
					<div class="ts-empty">
						{indexFailed
							? "搜索索引加载失败，请刷新后重试"
							: i18n(I18nKey.searchNoResults)}
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<!-- 提示：鼠标贴到屏幕最上面时出，本会话第一次进站也主动露一次脸 -->
	<div class="ts-hint" class:on={hintOn || Boolean(notice)}>
		{#if notice}
			<span class="ts-hint-text">{notice}</span>
		{:else}
			<!-- 两态：刚进站先说搜索搬到哪了；鼠标贴到屏幕顶边再说怎么拉出来 -->
			<span class="ts-hint-arrow" aria-hidden="true">{firstHint && !hoverTop ? "↑" : "↓"}</span>
			<span class="ts-hint-text">
				{firstHint && !hoverTop ? "搜索就在上方" : "从网页向下拉出现搜索框"}
			</span>
		{/if}
	</div>

	<!-- 调参面板：Ctrl+Shift+E 开关，平时不占地方（参考实现里那个侧栏） -->
	{#if tuneOn}
		<aside class="ts-tune" aria-label="液体参数">
			<div class="ts-tune-head">
				<b>液态 → 搜索</b>
				<button
					type="button"
					class="ts-tune-x"
					on:click={() => (tuneOn = false)}
					aria-label="关闭调参面板">✕</button
				>
			</div>
			<p class="ts-tune-sub">
				QuartzCore SDF 管线 · WebGL2<br />
				<b>Ctrl+Shift+E</b> 开关
			</p>
			{#each tuneRows as row (row.key)}
				<label class="ts-tune-row">
					<span>{row.label}</span>
					<i>{row.fmt(tuneVals[row.key])}</i>
					<input
						type="range"
						min={row.min}
						max={row.max}
						step={row.step}
						value={tuneVals[row.key]}
						on:input={(e) => setTune(row.key, Number(e.currentTarget.value))}
					/>
				</label>
			{/each}
			<button type="button" class="ts-tune-reset" on:click={resetTune}>
				复位
			</button>
		</aside>
	{/if}
</div>

<style>
	/* ================= 顶层容器 ================= */
	#top-search {
		position: fixed;
		inset: 0;
		z-index: 65; /* 导航岛(50) 之上、版本门(100000) 之下 */
		pointer-events: none;
		display: none;
	}
	@media (min-width: 768px) {
		/* ProMax 专属：导航岛沉底之后，屏幕顶部这块才是空的 */
		:global(body.site-promax) #top-search {
			display: block;
		}
	}

	/* 顶部 26px 的感应带：透明、只吃自己那一格的事件 */
	.ts-grab {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 26px;
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
		pointer-events: auto;
		cursor: grab;
		touch-action: none;
		-webkit-appearance: none;
		appearance: none;
	}
	.ts-grab:active {
		cursor: grabbing;
	}

	/* ================= 液态层（WebGL2 画布 + 真折射层） =================
	   只在拖拽 / 开合的那几百毫秒里出画面：常驻一块全屏 rAF 不值得，
	   逐帧重算的 backdrop-filter 更不值得。
	   DOM 顺序 = 层次：.ts-lens 在下（真折射），画布在上（材质）。 */
	.ts-melt {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		display: block;
		opacity: 0;
		pointer-events: none;
	}

	/* 真折射那一层：引擎每帧把它摆成液滴那个圆角矩形（left/top/宽高/圆角
	   全是内联值），形状外靠 border-radius 裁掉 —— 于是只有液滴那一块在
	   折射真页面。参考实现的「壁纸」去掉之后，这就是玻璃里透出来的东西。 */
	.ts-lens {
		position: absolute;
		left: 0;
		top: 0;
		width: 0;
		height: 0;
		opacity: 0;
		pointer-events: none;
	}

	/* 兜底液滴（拿不到 WebGL2 时）：一枚黑圆点。液颈 / 高光就没了，但拖拽
	   这件事本身还成立，不至于点下去什么都不发生。 */
	.ts-blob {
		position: absolute;
		left: 0;
		top: 0;
		width: 64px;
		height: 64px;
		border-radius: 9999px;
		opacity: 0;
		pointer-events: none;
		background: radial-gradient(
			120% 120% at 34% 24%,
			rgba(48, 58, 74, 0.98) 0%,
			rgba(8, 12, 19, 0.99) 58%,
			rgba(2, 4, 8, 1) 100%
		);
		transform: translate(
			calc(var(--ts-x, 0px) - 50%),
			calc(var(--ts-y, 0px) - 50%)
		);
	}

	/* ================= 搜索胶囊 ================= */
	.ts-capsule {
		position: absolute;
		left: 50%;
		top: 64px;
		width: min(560px, 62vw);
		height: 56px;
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 0 10px 0 20px;
		border-radius: 9999px;
		box-sizing: border-box;
		/* 底色留在 background-color：LiquidGlass 的透底只认它（画进渐变里
		   引擎读不到基准，胶囊就会保持全饱和） */
		background-color: color-mix(
			in oklch,
			var(--card-bg, #ffffff) 55%,
			transparent
		);
		/* 平时这档玻璃的磨砂：不模糊的话壁纸会原样透上来，糊出一块浑浊色斑
		   （LiquidGlass 活着时它的内联滤镜会盖掉这一条 —— 这是它摘掉后的保底） */
		backdrop-filter: blur(18px) saturate(158%);
		-webkit-backdrop-filter: blur(18px) saturate(158%);
		border: 1px solid
			color-mix(in oklch, var(--card-border, #e5e5e5) 45%, transparent);
		box-shadow:
			0 20px 50px rgba(0, 0, 0, 0.22),
			inset 0 1px 0 rgba(255, 255, 255, 0.42);
		color: rgba(0, 0, 0, 0.72);
		opacity: 0;
		pointer-events: none;
		transform: translate(-50%, 0) translate(0px, 0px) scale(1);
		transition: none;
	}
	:global(.dark) .ts-capsule {
		color: rgba(255, 255, 255, 0.8);
		box-shadow:
			0 20px 50px rgba(0, 0, 0, 0.42),
			inset 0 1px 0 rgba(255, 255, 255, 0.12);
	}
	/* ⚠ 下面这几条带状态类（is-fly / show / is-out）的选择器必须写 :global()
	   —— 这些类名不在模板里，是脚本按指针位置现算现挂的；Svelte 的静态分析
	   看不见它们，会把整条规则当「没人用的 CSS」删掉（编译期警告 + 规则消失），
	   于是「飞过来」和「淡出」全都静默失效。 */
	:global(#top-search .ts-capsule.is-fly) {
		transform: translate(-50%, 0)
			translate(var(--ts-fx, 0px), var(--ts-fy, 0px))
			scale(var(--ts-fs, 1));
	}
	:global(#top-search .ts-capsule.show) {
		opacity: 1;
		pointer-events: auto;
		transition:
			transform 0.62s cubic-bezier(0.32, 0.9, 0.28, 1),
			opacity 0.34s ease,
			/* 玻璃档位切换（CSS ↔ 引擎实时渲染）走交叉淡，别啪一下跳变 */
			background-color 0.26s ease,
			border-color 0.26s ease,
			box-shadow 0.26s ease;
	}
	/* 悬停 / 打开态：玻璃交给引擎的 SDF 材质，DOM 这层全让位
	   （再叠一层 backdrop-filter 会把折射糊两遍） */
	#top-search.glass-on .ts-capsule {
		background-color: transparent;
		border-color: transparent;
		box-shadow: none;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
	}
	/* 拖拽 / 岛内起飞的半路：胶囊临时让位 */
	.ts-capsule.is-veil {
		opacity: 0 !important;
		pointer-events: none !important;
		transition:
			opacity 0.18s ease,
			transform 0.62s cubic-bezier(0.32, 0.9, 0.28, 1);
	}
	:global(#top-search .ts-capsule.is-out) {
		opacity: 0;
		transform: translate(-50%, 0) translate(0px, -14px) scale(0.94);
		transition:
			transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
			opacity 0.3s ease;
	}

	/* 图标 / 文字「从 blur 里凝聚」（照抄参考实现的 mat 关键帧）。
	   ⚠ 这条也必须 :global()：.ts-ic 是挂在 <Icon> 组件上的类名，
	   Svelte 看不到组件内部，静态分析同样会把它判成死代码删掉。 */
	:global(.ts-capsule .ts-ic) {
		flex: none;
		font-size: 1.125rem;
		opacity: 0;
	}
	.ts-input {
		flex: 1;
		min-width: 0;
		height: 100%;
		background: transparent;
		border: 0;
		outline: none;
		font-size: 1rem;
		letter-spacing: 0.01em;
		color: inherit;
		caret-color: transparent;
		opacity: 0;
	}
	.ts-input::placeholder {
		color: rgba(0, 0, 0, 0.38);
	}
	:global(.dark) .ts-input::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}
	:global(#top-search .ts-capsule.show .ts-ic),
	:global(#top-search .ts-capsule.show .ts-input) {
		animation: ts-materialize 0.55s ease-out 0.08s both;
	}
	@keyframes ts-materialize {
		from {
			opacity: 0;
			filter: blur(9px);
		}
		to {
			opacity: 1;
			filter: blur(0);
		}
	}

	/* 发光光标：原生 caret 做不出辉光，量字宽自己画一根 */
	.ts-caret {
		position: absolute;
		width: 2px;
		height: 21px;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 1px;
		background: currentColor;
		box-shadow:
			0 0 5px rgba(0, 0, 0, 0.28),
			0 0 14px rgba(0, 0, 0, 0.18);
		display: none;
		pointer-events: none;
		animation: ts-blink 1.12s step-end infinite;
	}
	:global(.dark) .ts-caret {
		background: rgba(255, 255, 255, 0.92);
		box-shadow:
			0 0 5px rgba(255, 255, 255, 0.9),
			0 0 14px rgba(255, 255, 255, 0.45);
	}
	@keyframes ts-blink {
		0%,
		60% {
			opacity: 1;
		}
		61%,
		100% {
			opacity: 0;
		}
	}

	.ts-btn {
		flex: none;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		border-radius: 9999px;
		background: transparent;
		color: inherit;
		opacity: 0.62;
		cursor: pointer;
		transition:
			opacity 0.15s ease,
			background 0.15s ease;
	}
	.ts-btn:hover {
		opacity: 1;
		background: color-mix(in oklch, currentColor 12%, transparent);
	}
	.ts-mic.on {
		opacity: 1;
		color: #ff3b30;
		animation: ts-mic-pulse 1.1s ease-in-out infinite;
	}
	@keyframes ts-mic-pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.16);
		}
	}

	/* ================= 结果面板 ================= */
	.ts-results-panel {
		position: absolute;
		left: 50%;
		top: calc(64px + 56px + 10px);
		width: min(560px, 62vw);
		transform: translateX(-50%);
		pointer-events: auto;
		z-index: 2;
		background-color: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(24px) saturate(180%);
		-webkit-backdrop-filter: blur(24px) saturate(180%);
		border: 1px solid rgba(255, 255, 255, 0.35);
		border-radius: 1.25rem;
		box-shadow:
			0 18px 46px rgba(0, 0, 0, 0.18),
			inset 0 1px 0 rgba(255, 255, 255, 0.5);
		animation: ts-results-in 0.28s cubic-bezier(0.32, 0.72, 0, 1);
		transform-origin: top center;
	}
	:global(.dark) .ts-results-panel {
		background-color: rgba(30, 30, 35, 0.72);
		border-color: rgba(255, 255, 255, 0.12);
		box-shadow:
			0 18px 46px rgba(0, 0, 0, 0.45),
			inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}
	@keyframes ts-results-in {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(-6px) scale(0.97);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0) scale(1);
		}
	}

	.ts-results {
		max-height: 52vh;
		overflow-y: auto;
		padding: 0.4rem;
	}
	.ts-item {
		display: block;
		padding: 0.45rem 0.65rem;
		border-radius: 0.75rem;
		text-decoration: none;
		transition: background 0.15s ease;
	}
	.ts-item:hover {
		background: var(--btn-plain-bg-hover, rgba(0, 0, 0, 0.05));
	}
	.ts-item-head {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}
	.ts-item-title {
		flex: 1;
		min-width: 0;
		font-size: 0.8125rem;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.86);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	:global(.dark) .ts-item-title {
		color: rgba(255, 255, 255, 0.9);
	}
	.ts-item-badge {
		flex: none;
		padding: 0.05rem 0.3rem;
		border-radius: 9999px;
		font-size: 0.625rem;
		font-weight: 600;
		line-height: 1.35;
		color: var(--primary, #ff6b6b);
		background: color-mix(in oklch, var(--primary, #ff6b6b) 14%, transparent);
	}
	.ts-item-snippet {
		margin-top: 0.1rem;
		font-size: 0.6875rem;
		line-height: 1.4;
		color: rgba(0, 0, 0, 0.5);
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	:global(.dark) .ts-item-snippet {
		color: rgba(255, 255, 255, 0.5);
	}
	.ts-item-snippet :global(mark) {
		background: color-mix(in oklch, var(--primary, #ff6b6b) 22%, transparent);
		color: inherit;
		border-radius: 3px;
		padding: 0 1px;
	}
	.ts-more {
		display: block;
		margin-top: 0.15rem;
		padding: 0.45rem 0.6rem;
		border-radius: 0.75rem;
		text-align: center;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--primary, #ff6b6b);
		text-decoration: none;
	}
	.ts-more:hover {
		background: var(--btn-plain-bg-hover, rgba(0, 0, 0, 0.05));
	}
	.ts-empty {
		padding: 0.55rem 0.65rem;
		font-size: 0.75rem;
		color: rgba(0, 0, 0, 0.45);
	}
	:global(.dark) .ts-empty {
		color: rgba(255, 255, 255, 0.45);
	}
	.ts-results::-webkit-scrollbar {
		width: 4px;
	}
	.ts-results::-webkit-scrollbar-track {
		background: transparent;
	}
	.ts-results::-webkit-scrollbar-thumb {
		background: rgba(128, 128, 128, 0.3);
		border-radius: 9999px;
	}

	/* ================= 提示 ================= */
	.ts-hint {
		position: absolute;
		left: 50%;
		top: 26px;
		transform: translate(-50%, -6px);
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 5px 12px;
		border-radius: 9999px;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		white-space: nowrap;
		color: rgba(255, 255, 255, 0.92);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
		background: rgba(10, 14, 20, 0.72);
		border: 1px solid rgba(255, 255, 255, 0.14);
		backdrop-filter: blur(10px) saturate(140%);
		-webkit-backdrop-filter: blur(10px) saturate(140%);
		box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
		opacity: 0;
		pointer-events: none;
		transition:
			opacity 0.32s ease,
			transform 0.42s cubic-bezier(0.32, 0.72, 0, 1);
	}
	.ts-hint.on {
		opacity: 1;
		transform: translate(-50%, 0);
	}
	.ts-hint-arrow {
		font-size: 0.8125rem;
		line-height: 1;
		animation: ts-hint-bob 1.5s ease-in-out infinite;
	}
	@keyframes ts-hint-bob {
		0%,
		100% {
			transform: translateY(-1px);
		}
		50% {
			transform: translateY(2px);
		}
	}

	/* ================= 调参面板（Ctrl+Shift+E） =================
	   参考实现里那个侧栏：参数标定照抄（sdf_union 的 k、透镜高度、双光
	   高光、色差、黑玻璃、弹簧 ω/ζ）。平时整个不渲染，连 Tab 序列都进不去。 */
	.ts-tune {
		position: absolute;
		right: 16px;
		top: 16px;
		width: 244px;
		max-height: calc(100vh - 32px);
		overflow-y: auto;
		padding: 13px 14px 11px;
		border-radius: 16px;
		box-sizing: border-box;
		pointer-events: auto;
		z-index: 4;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.9);
		background: rgba(13, 16, 22, 0.76);
		border: 1px solid rgba(255, 255, 255, 0.14);
		backdrop-filter: blur(14px) saturate(150%);
		-webkit-backdrop-filter: blur(14px) saturate(150%);
		box-shadow: 0 18px 44px rgba(0, 0, 0, 0.42);
	}
	.ts-tune-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.8125rem;
		letter-spacing: 0.02em;
	}
	.ts-tune-x {
		border: 0;
		background: transparent;
		color: inherit;
		opacity: 0.55;
		font-size: 0.875rem;
		line-height: 1;
		padding: 2px 4px;
		cursor: pointer;
	}
	.ts-tune-x:hover {
		opacity: 1;
	}
	.ts-tune-sub {
		margin: 3px 0 12px;
		font-size: 0.625rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.5);
	}
	.ts-tune-sub b {
		color: #5b9dff;
		font-weight: 600;
	}
	.ts-tune-row {
		display: block;
		margin-bottom: 9px;
	}
	.ts-tune-row > span {
		font-size: 0.6875rem;
		color: rgba(255, 255, 255, 0.74);
	}
	.ts-tune-row > i {
		float: right;
		font-style: normal;
		font-size: 0.6875rem;
		color: #5b9dff;
		font-variant-numeric: tabular-nums;
	}
	.ts-tune-row input[type="range"] {
		display: block;
		width: 100%;
		height: 3px;
		margin-top: 5px;
		accent-color: #5b9dff;
		cursor: pointer;
	}
	.ts-tune-reset {
		width: 100%;
		margin-top: 3px;
		padding: 6px 0;
		border: 1px solid rgba(255, 255, 255, 0.16);
		border-radius: 9px;
		background: rgba(255, 255, 255, 0.06);
		color: inherit;
		font-size: 0.6875rem;
		cursor: pointer;
	}
	.ts-tune-reset:hover {
		background: rgba(255, 255, 255, 0.12);
	}
	.ts-tune::-webkit-scrollbar {
		width: 4px;
	}
	.ts-tune::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.18);
		border-radius: 9999px;
	}

	@media (prefers-reduced-motion: reduce) {
		.ts-hint,
		.ts-capsule,
		.ts-hint-arrow,
		.ts-caret,
		.ts-mic.on {
			animation: none;
			transition-duration: 0.01ms;
		}
	}
</style>
