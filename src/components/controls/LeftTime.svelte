<script lang="ts">
import { onMount } from "svelte";
import { createMelt, type Melt } from "@/utils/metaball-melt";

/**
 * 屏幕左缘那枚时间（ProMax 桌面端专属）
 * ============================================================================
 * 与上方那枚搜索（TopSearch.svelte）**同一套液体管线**，只是把吸附边从
 * 屏幕顶边换成屏幕左缘（引擎的 `orient: "left"`）：
 *
 *   IDLE    只有左缘一条看不见的感应带（鼠标过去变 grab 手型）
 *   DRAG    从这里往右拖 → 液滴从左缘「渗」出来跟着指针走，
 *           与左缘用 sdf_union 融成一坨：拉得越远，中间那根液颈越细。
 *   MORPH   拉过视口宽度的 32% 松手 → 弹簧把液滴弹到落点、化开成时间面板；
 *           没拉够松手 → 被左缘吸回去。
 *   OPEN    液滴快落定时交给 DOM 那枚真面板接手（它的淡入正好盖住
 *           最后那几像素，看不出换手）；Esc / 点面板外 → 原路缩回左缘。
 *
 * 形状与材质零新增代码：引擎在 shader 入口把坐标系沿对角线翻一下，
 * 「顶边半平面吸附 / 贴边黑玻璃 / 上黑下透 / 45° 双光高光」原封不动变成
 * 左缘版本 —— 见 utils/metaball-melt.ts 里 uOrient 那段注释。
 *
 * ---------------------------------------------------------------------------
 * 这枚时间有**两种形态**，共用同一个面板 DOM、同一套 LiquidGlass 折射
 * （PRESETS 里 `.lt-panel` 那条），面板右上角那颗独立按钮切换：
 *
 *   ① 板块（默认）—— 一枚圆角液态玻璃盒：半透明白底 + 内描边 + 柔影，
 *      底色走 backdrop-filter 的 SVG 折射，是屏幕上实打实的一块玻璃。
 *      居中显示（vw/2, vh/2），时间**靠左**排。
 *
 *   ② 进壁纸 —— **整块玻璃去掉**（无底色 / 无描边 / 无外影 / 无折射，
 *      见 syncPanelGlass），只剩时间浮在壁纸上；形状拉长成长方形
 *      （min(760, 86vw) × 284），位置在**屏幕上方居中** —— 苹果锁屏那种
 *      「时间在顶上、角色的头/发压在它前面」。上方要避开站点搜索那条
 *      y≈26..107 的可见带（见 measurePanelAnchor），
 *      开屏那一下纵向拉伸弹回就是「时间被拽下来」的手感。
 *      ⚠ 这个形态下 `#left-time` 整层的 z 会被改写成 **58**（body.lt-in-wallpaper，
 *        见 WallpaperDepth.astro 的 is:global）—— 既高于正文(30)/#content-wrapper(50)
 *        （向下翻文章盖不掉时间），又低于裁切生效时抬到 62 的角色层（角色头/发压在
 *        时间前面）。**绝不能沉到正文之下**：那样一滚就有一张玻璃卡停在时间那格把它盖了。
 *        形态变更由 toggleMode / enterOpen / close / softReset 统一广播（publishMode）。
 *
 * ⚠ 与顶部搜索是两层独立的东西，谁先谁后只看 DOM 顺序：这层挂在
 *   `#top-search` 之后，所以左缘感应带从 top:80px 起，把屏幕左上角那
 *   26px 让给搜索的感应带，两个手势不打架。
 */

/* ---------------- 手感常量（必须与 CSS 里那套一致） ---------------- */
/* ① 板块：圆角玻璃盒 */
const PANEL_W = 460;
const PANEL_H = 248;
/* ② 进壁纸：拉长的长方形玻璃
   ⚠ 高度 176 → 248（2026-09-26）：数字改成**常驻细长**（纵向 ×1.6）之后，
     拉长是**视觉溢出**、行盒不跟着涨 —— 高度不够的话拉伸出来的字会顶到日期/溢出面板。
     （先改成 232 时其实白改：那时 transform 因为 inline 根本没生效。
       inline-block 修好、拉长真的画出来之后，才按 1em×1.6 + 日期重新算成 248。）
   ⚠ 248 → 284（同日晚些）：用户「时间太小了 放大一点」，字号 110 → 132。
   ⚠ 284 → **280**（同日晚些第二轮）：两件事一起动 ——
     ① 字号 132 → **150**（用户又提了一次「大一点」）；
     ② 用户点名「去掉玻璃块（仅限进壁纸）」→ `.lt-plate` 整个删掉。
     托底没了，配平式就少一项：以前数字必须整个躺在托底里（内缩 16，还要留几 px 余量），
     所以是 `WP_H ≥ 1.6em + 61`；现在只剩「数字 + 日期塞得进面板」→ `WP_H ≥ 1.6em + 29`。
     150px 时 1.6×150 + 29 = 269，取 **280**（上下各留 5.5px 呼吸）。
     高度其实反而**降了一点**（284→280）——数值变小但数字更大，全靠这一项。
   ⚠⚠ 这个高度**有天花板，不是随便抬**：它同时是 WallpaperDepth 那一刀裁切框的尺寸
     （clockBox() = 面板 rect，再向四周放 CLIP_PAD 14）。实测（prep-spot-h.js，
     1416×808）闸门就在 292/300 之间：
       h ≤ 292 → bestSpot 选顶部，裁切框底 424 ≤ 横幅标题底 425 → 洞贴下沿 → 可挖
       h ≥ 300 → 裁切框底 432 把**标题+副标题同时**吞进去 → punchEdge 判不出贴哪条边
                 → 退回裸 inset → 副标题会被角色层抹掉（拖动验收探针当场红）
     292 只剩 1px 余量，280 留 12px。要再放大字号，得先让 WallpaperDepth 支持
     「洞悬在框中间」的挖法，别硬抬这个数；字号上限 ≈ (WP_H - 29) / 1.6。
     这两个值必须与 CSS 的 `.lt-panel.wallpaper { width / height }` 同口径。 */
const WP_W = 760;
const WP_H = 280;
const WEEK = [
	"星期日",
	"星期一",
	"星期二",
	"星期三",
	"星期四",
	"星期五",
	"星期六",
];

/* ---------------- 状态 ---------------- */
let enabled = $state(false); // ProMax 桌面端才启用
/** idle 静默 · drag 拖拽中 · morph 松手后弹簧飞行中 · open 面板已接手 · retract 缩回左缘 */
let phase = $state<"idle" | "drag" | "morph" | "open" | "retract">("idle");
let meltOn = $state(false);
let panelOn = $state(false);
let meltFailed = $state(false);
/** 进壁纸模式（那颗独立按钮切换；跟着 localStorage 记住） */
let wm = $state(false);
let now = $state(new Date());

/* ---------------- 面板落点：用户摆的 / 自动避让算的 ----------------
   两种形态各记各的位置，都持久化（刷新后还在）：
   · pos     —— 用户拖出来的落点（面板中心，视口 px）。null = 没摆过。
   · autoPos —— 「自动避让」按角色地形图算出来的落点（见 refreshAutoPos）。
   实际用 `pos ?? (进壁纸 ? autoPos : null)`；都没有就回落到该形态的默认落点。
   双击面板 = 忘掉用户摆的位置、退回自动避让。 */
type XY = { x: number; y: number };
const POS_KEY = "ltPanelPos";
let pos = $state<XY | null>(null);
let autoPos = $state<XY | null>(null);
/** 正在拖面板：挂着它就把 top/left 的过渡关掉，否则跟手会「追」着指针跑 */
let dragging = $state(false);

const loadPos = (mode: boolean): XY | null => {
	try {
		const raw = localStorage.getItem(POS_KEY);
		if (!raw) return null;
		const o = JSON.parse(raw) as Record<string, XY | undefined>;
		const p = o[mode ? "wallpaper" : "panel"];
		if (p && Number.isFinite(p.x) && Number.isFinite(p.y))
			return { x: p.x, y: p.y };
	} catch {
		/* 隐私模式 / 脏数据 → 当没摆过 */
	}
	return null;
};
const storePos = (mode: boolean, p: XY | null): void => {
	try {
		const raw = localStorage.getItem(POS_KEY);
		const o: Record<string, XY> = raw
			? (JSON.parse(raw) as Record<string, XY>)
			: {};
		const k = mode ? "wallpaper" : "panel";
		if (p) o[k] = p;
		else delete o[k];
		localStorage.setItem(POS_KEY, JSON.stringify(o));
	} catch {
		/* ignore */
	}
};

/** 当前生效的落点：用户摆的优先，其次进壁纸的自动避让，最后交给默认落点 */
const spot = $derived(pos ?? (wm ? autoPos : null));

/* ---------------- 节点 ---------------- */
let canvasEl = $state<HTMLCanvasElement | null>(null);
let lensEl = $state<HTMLElement | null>(null);
let panelEl = $state<HTMLElement | null>(null);
/** 进壁纸形态下那颗钉在「整个视口左下角」的 ✕（`.lt-panel` 的兄弟） */
let cornerToolsEl = $state<HTMLElement | null>(null);
let blobEl = $state<HTMLElement | null>(null);

const isOpen = $derived(phase === "open");

let melt: Melt | null = null;
let tickTimer: ReturnType<typeof setInterval> | undefined;

/* ---------------- 面板落点 ----------------
   ① 板块：屏幕正中（vw/2, vh/2），跟 CSS 的 `top:50% + translate(-50%,-50%)` 同一套。
   ② 进壁纸：**屏幕上方居中** —— 苹果锁屏那种：时间在顶部，角色的头/发压在它前面。
   顶部要避开站点自己的搜索：`#top-search` 是满屏固定层，它「看得见」的那部分
   实测在 `y ≈ 26..107`（放大镜 x449、麦克风 x947、提示条 y26..56），而且
   `#left-time` 跟它同为 z:65、DOM 还更靠后 —— 压上去会**直接盖住搜索图标**，
   所以时间从这条带子下面起。
   ⚠ 顶部**没有**导航栏：ProMax 的 `#top-row` 是「沉底那排」（实测 y 715..783），
     所以上边除了搜索带没有别的东西要躲。 */
let panelAnchorY = $state<number | null>(null);
/** 顶部搜索的可见带（实测 y 26..107）+ 一点呼吸：时间从它下面开始 */
const WP_TOP_INSET = 118;
const measurePanelAnchor = () => {
	const vh = window.innerHeight;
	// 面板顶边落在 WP_TOP_INSET，中心再往下加半个面板高；
	// 高屏上用视口 24% 兜底，免得时间孤零零贴在顶上
	return Math.max(WP_TOP_INSET + WP_H / 2, Math.round(vh * 0.24));
};
/** 该形态的面板尺寸（必须与 CSS 那两条 width/height 同一口径） */
const panelSize = () => {
	const vw = window.innerWidth;
	return wm
		? { w: Math.round(Math.min(WP_W, vw * 0.86)), h: WP_H }
		: { w: Math.round(Math.min(PANEL_W, vw * 0.76)), h: PANEL_H };
};

/** 液体 blob 的落点胶囊 —— 必须与上面两种形态的 CSS 尺寸同一口径 */
const panelBox = () => {
	const { w, h } = panelSize();
	if (spot) return { w, h, cx: spot.x, cy: spot.y };
	const vw = window.innerWidth;
	const vh = window.innerHeight;
	if (wm) return { w, h, cx: vw / 2, cy: panelAnchorY ?? measurePanelAnchor() };
	return { w, h, cx: vw / 2, cy: vh / 2 };
};

/** 把落点写进面板：有自定义落点就写 left/top；
    没有就回落到各形态的默认（板块 = CSS 的 50%，进壁纸 = 代理锚点）。 */
const applyPanelPlacement = () => {
	const el = panelEl;
	if (!el) return;
	if (spot) {
		el.style.left = `${Math.round(spot.x)}px`;
		el.style.top = `${Math.round(spot.y)}px`;
		return;
	}
	el.style.removeProperty("left");
	if (wm) {
		const cy = panelAnchorY ?? measurePanelAnchor();
		el.style.top = `${Math.round(cy)}px`;
	} else {
		el.style.removeProperty("top"); // 回落到 CSS 的 top:50%
	}
};

/* ---------------- 自动避让：挑一块角色盖得最少的地方 ----------------
   角色层是按 mask 把「同一张壁纸再画一遍」压在时间上面（时间 z:58 < 角色 62），
   所以时间正压在角色身上时就会整块被吃掉。壁纸里角色在哪儿、有多厚，
   WallpaperDepth 的地形图知道（bestSpot）—— 让它挑一块角色最薄的落点，
   用户还能再拖。没有地形图（跨域 API 图 / 还没识别完）时安静地回落到默认落点。 */
type DepApi = { bestSpot?: (w: number, h: number) => XY | null };
const dep = () =>
	(window as unknown as { __wallpaperDepth?: DepApi }).__wallpaperDepth;

/** 重算「进壁纸」的自动避让落点；用户自己摆过（pos）就不必算了 */
const refreshAutoPos = () => {
	if (!wm || pos) return;
	const { w, h } = panelSize();
	autoPos = dep()?.bestSpot?.(w, h) ?? null;
};

/* ---------------- LiquidGlass：进壁纸形态要去掉整块玻璃 ----------------
   两种形态对「玻璃」的要求正好相反：
   · 板块   —— 要一块实打实的液态玻璃（.42 的白底 + SVG 折射）。
   · 进壁纸 —— **整块玻璃撤掉**：无底色、无描边、无外影、无折射，只剩时间浮在壁纸上。
   引擎把「元素本来的底色」缓存成 __lgBaseBg 只记一次（见 LiquidGlass.astro
   里 baseBgOf 那段注释），所以摘下再装回时必须先清这份基准，否则折射停在旧底色上。
   ⚠ 引擎会在首扫 / 切档 / 换页 / 缩放重建时**重新**扫到 `.lt-panel` 这条预设，
     一次 unregister 挡不住。所以进壁纸时额外给元素挂 `data-lg-skip`
     （applyGlass 一进门见到它就 `return false`），再补一个只盯 data-lg-on 的观察者兜底。 */
type LGApi = {
	register: (el: Element, cfg?: Record<string, unknown>) => boolean;
	unregister: (el: Element) => void;
};
const lg = () => (window as unknown as { __liquidGlass?: LGApi }).__liquidGlass;
/** 与 LiquidGlass.astro 里 `.lt-panel` 那条预设同口径，两边改要一起改 */
const PANEL_LG_CFG = {
	band: 24,
	strength: 1.2,
	blur: 2.4,
	sat: 1.16,
	tint: 0.62,
	force: true,
};

/** 进壁纸：撤玻璃 + 挂豁免；板块：摘豁免 + 清基准重新装回来 */
const syncPanelGlass = () => {
	const el = panelEl;
	if (!el) return;
	const api = lg();
	if (wm) {
		el.setAttribute("data-lg-skip", "");
		api?.unregister(el);
		return;
	}
	el.removeAttribute("data-lg-skip");
	if (!api) return;
	(el as unknown as { __lgBaseBg?: unknown }).__lgBaseBg = undefined;
	api.unregister(el);
	/* ⚠ 不能只押一帧就 register：撤掉到装回之间，`.lt-panel` 的 background-color
	   正从「进壁纸的 transparent」过渡回「板块的 .42」（0.34s）。过渡途中量到的
	   alpha ≈ 0，而引擎的准入门槛 hasGlassBackdrop() 要求 alpha ≥ 0.04
	   （或 background-image 非 none）—— 于是 applyGlass 直接 return false，
	   玻璃再也不会回来（实测切回板块后 data-lg-on 一直挂不上、折射是 none）。
	   所以按返回值重试：真装上（return true）才收工，最多试 ~1.3s。 */
	let tries = 0;
	const attempt = (): void => {
		if (wm || !el.isConnected) return; /* 中途又切走了就别装了 */
		if (api.register(el, PANEL_LG_CFG)) return; /* 装上了 */
		if (++tries >= 14) return;
		setTimeout(attempt, 90);
	};
	setTimeout(attempt, 16);
};

/* 兜底：引擎若在别处（切档 / 换页 / 缩放重建）又把玻璃贴回这块面板，立刻再撤一次。
   只盯 data-lg-on 这一个属性；撤掉后属性消失、不会自激。 */
let glassMO: MutationObserver | undefined;
const guardPanelGlass = () => {
	const el = panelEl;
	if (!el || glassMO) return;
	glassMO = new MutationObserver(() => {
		if (!wm || el.getAttribute("data-lg-on") === null) return;
		el.setAttribute("data-lg-skip", "");
		lg()?.unregister(el);
	});
	glassMO.observe(el, { attributes: true, attributeFilter: ["data-lg-on"] });
};

/* ---------------- （已删除）玻璃托底 .lt-plate ----------------
   曾经在「进壁纸」形态下垫一块很淡的真折射玻璃（LiquidGlass 的 backdrop-filter），
   2026-09-26 晚用户点名**去掉**：「去掉玻璃块（仅限进壁纸）」。所以这块整个撤了：
   元素 `.lt-plate`、PLATE_LG_CFG / placePlate / syncPlateGlass / trackPlate /
   onPanelSettled 全部删掉，**liquid glass 的招牌改由数字自己扛**（白渐变裁进字面，
   见 CSS 里 .lt-hm 那段）。板块形态不受影响 —— 它的玻璃是 `.lt-panel` 本体那层底。
   ⚠ 留下的历史教训（将来若又要「真折射托底」，必须照做）：
     · 它必须是 `.lt-panel` 的**兄弟**，绝不能是子元素 —— `.lt-panel` 带
       `transform: translate(-50%,-50%)`，transform 会给后代立 **backdrop root**，
       子孙的 backdrop-filter 只能在面板内部取样、摸不到壁纸，折射当场失效；
     · 它自己也不许带 transform，几何只能靠 left/top/width/height 写内联；
     · 面板的尺寸/位置有 0.44s 过渡（还有 0.7s 落定动画），几何**不能「猜一拍」**，
       要么逐帧跟、要么用 animationend 收尾 —— 否则会按被 scale 放大过的旧值内缩、
       探出面板。 */

/* ---------------- 形态对外广播 ----------------
   形态会牵动别的东西，都在这里一次报出去：

   1) 全局 CSS 的层级要按形态分档 ——「进壁纸」时这一层整根沉到 z:20，
      好让角色层(z:25) 压住时间；而正文(30) / 搜索(65) / 导航岛(80) 稳稳压在
      两者之上。所以把形态挂在 body 上（见 WallpaperDepth.astro 的 is:global）。

   2) 角色层那一刀裁切框要跟着时间框重新对（WallpaperDepth 的 applySubjectClip）。
      时间框只在「进壁纸 + 面板收进/露出/换形态」时变，所以开合与形态切换必须广播。
      用事件而不是直接调函数：面板与角色层互不认识，谁先起来都行。 */
const publishMode = () => {
	try {
		document.body.classList.toggle("lt-in-wallpaper", wm);
	} catch {
		/* ignore */
	}
	try {
		document.dispatchEvent(
			new CustomEvent("lefttimechange", {
				detail: { mode: wm ? "wallpaper" : "panel", open: panelOn },
			}),
		);
	} catch {
		/* ignore */
	}
};

/* ---------------- 形态：跟壁纸来源自动走 ----------------
   用户点名（2026-09-26 晚）：「右上角那个按钮自动切换 —— API 壁纸就板块模式，
   自定义壁纸就进壁纸模式，关闭按钮保留」。所以形态**不再由用户点按钮决定**：
     · API 随机图（t.alcy.cc，跨域、读不了像素）→ 板块模式（居中那块玻璃盒）；
     · 自定义图片（本地存的、能读像素做角色凸出）→ 进壁纸模式（浮在壁纸上）。
   想换形态 → 去壁纸面板改来源（岛里那颗 #wp-source-toggle）。
   右上角那颗 .lt-mode 按钮因此整个删掉了，只留关闭的 ✕。

   ⚠ 来源的真值在 localStorage 的 `wpSource`（WallpaperDepth 的 saveState 写的）。
     这里刻意**不**去问 `__wallpaperDepth.source()`：那是另一个组件，
     两边谁先 init 说不准（探针里 LeftTime 可能先起来）；localStorage 是同步的、
     启动那一刻就是对的。代价是键名要跟着 WallpaperDepth 一起改（WP_SRC_KEY）。
   ⚠ 来源变了要有人通知：WallpaperDepth 在 applySource() 末尾复用
     `wallpaperdepthchange` 广播（换图本来就重算了地形图），见 onDepthChange。 */
const WP_SRC_KEY = "wpSource";
const sourceIsCustom = () => {
	try {
		return localStorage.getItem(WP_SRC_KEY) === "custom";
	} catch {
		return false; /* 隐私模式读不到 → 退回板块：至少不会把字压在壁纸上看不清 */
	}
};

/** 换到某个形态。已经是那个形态就直接返回（幂等 —— 事件可能重复触发）。 */
const setMode = (on: boolean) => {
	if (on === wm) return;
	wm = on;
	/* 两种形态各记各的落点：换形态就把该形态存的位置取出来，并重算一次自动避让 */
	pos = loadPos(wm);
	autoPos = null;
	refreshAutoPos();
	// 落点先算好（进壁纸那套是顶部锚点），面板开着就立刻写进去；
	// 顺带把玻璃按新形态重装/撤掉
	panelAnchorY = measurePanelAnchor();
	if (panelOn) applyPanelPlacement();
	syncPanelGlass();
	// 形态变了：body 上的挂钩 + 角色层的裁切框都要跟着重新对
	publishMode();
};

/** 按壁纸来源把形态对一遍（启动 + 每次来源变更都调） */
const syncModeFromSource = () => setMode(sourceIsCustom());

/* ---------------- 进壁纸形态：✕ 钉在「整个视口」左下角 ----------------
   用户点名（2026-09-26）：「把我圈的 x 放在整个网站的左下角」。
   CSS 已经把它 fixed 到 left:22 / bottom:22；这里只用 JS 兜一种情况 ——
   沉底导航岛（`#top-row`）是 ~810px 宽的**居中定宽条**，窗口窄到 ~918px 以下时
   它的左缘会压到视口左缘（实测 776 宽时岛是 x=-17..793，左下角命中它的 logo 按钮）。
   那时把 ✕ 抬到岛的上沿之上，否则 ✕(z:58) 会被岛(z:80)整颗盖住 ——
   看得见的是岛、点到的也是岛，✕ 等于没画。
   宽屏（岛够不到左缘）就老老实实贴角，不加任何偏移。 */
const CORNER_GAP = 22;
const placeCornerTools = () => {
	const el = cornerToolsEl;
	if (!el) return;
	el.style.left = `${CORNER_GAP}px`;
	const island =
		document.querySelector("#top-row") ||
		document.querySelector("#mobile-nav-island");
	const ir = island ? island.getBoundingClientRect() : null;
	let bottom = CORNER_GAP;
	if (ir && ir.width > 4 && ir.left < CORNER_GAP + 48) {
		bottom = Math.round(window.innerHeight - ir.top + CORNER_GAP);
	}
	el.style.bottom = `${bottom}px`;
};

/** ✕ 只在「进壁纸 + 面板露脸」时渲染，所以跟着这两个状态跑；
    fixed 定位不随面板拖动变，但窗口尺寸一变就得重算（岛可能压过来）。 */
$effect(() => {
	if (!wm || !panelOn) return;
	placeCornerTools();
});

/* ---------------- 时间文本 ---------------- */
const pad = (n: number) => (n < 10 ? `0${n}` : String(n));
const hh = $derived(pad(now.getHours()));
const mm = $derived(pad(now.getMinutes()));
const dayText = $derived(`${now.getMonth() + 1}月${now.getDate()}日`);
const weekText = $derived(WEEK[now.getDay()]);

/* ---------------- 画布 / 折射层的显隐 ---------------- */
const showMelt = (on: boolean) => {
	const c = canvasEl;
	if (!c) return;
	if (on) {
		c.style.transition = "none";
		c.style.opacity = "1";
	} else {
		// 跟面板 opacity 淡入对齐到 120ms —— 把液态层↔DOM 层的交叠窗口压到最短
		c.style.transition = "opacity 0.12s linear";
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
	b.style.setProperty("--lt-x", `${Math.round(x)}px`);
	b.style.setProperty("--lt-y", `${Math.round(y)}px`);
};

/* ---------------- 开 / 合 ---------------- */
const enterOpen = () => {
	if (phase === "open") return;
	phase = "open";
	panelOn = true;
	now = new Date(); // 一露脸就是准的，别等下一秒的 tick
	// 位置：先按角色地形图算一次自动避让（进壁纸形态、且用户没自己摆过时），
	// 再写进面板 —— 与 JS 的 panelBox() 同一坐标，液态 blob 的 morph 目标就是这里
	refreshAutoPos();
	applyPanelPlacement();
	// 时间露脸了 → 角色层这才有「可压的东西」，去把裁切框对出来
	publishMode();
};

const close = () => {
	if (phase === "idle") return;
	panelOn = false;
	if (melt) {
		// 液滴就在面板位上，从那儿被左缘吸回去
		meltOn = true;
		showMelt(true);
		melt.retractFromCapsule();
	} else {
		paintFallback(0, 0, false);
		phase = "idle";
	}
	// 时间收走了 → 角色层没有可压的东西了，整块裁掉
	publishMode();
};

/** 把液体那一段彻底收掉（切页 / 档位切换 / 卸载时用） */
const softReset = () => {
	panelOn = false;
	meltOn = false;
	melt?.hide();
	showMelt(false);
	paintFallback(0, 0, false);
	phase = "idle";
	publishMode();
};

/* ---------------- 拖拽 ----------------
   两种拖拽共用同一个全局 pointermove / pointerup：
   · 左缘那一下（.lt-grab）→ 把液态时间「拉」出来，交给引擎；
   · 面板自己（.lt-panel 的任意非按钮处）→ 把时间**挪**到屏幕任意位置（pdrag）。
   面板拖动带 4px 阈值：没移过阈值就当成一次普通点击，不影响以后可能加的交互。 */
let pdrag: {
	id: number;
	sx: number;
	sy: number;
	ox: number;
	oy: number;
	moved: boolean;
} | null = null;
let rafPending = false;

/** 把落点夹在视口里（面板比视口还大时，至少保证中心不越界） */
const clampPos = (x: number, y: number): XY => {
	const el = panelEl;
	const halfW = (el ? el.offsetWidth : 0) / 2;
	const halfH = (el ? el.offsetHeight : 0) / 2;
	const vw = window.innerWidth;
	const vh = window.innerHeight;
	const xLo = Math.min(halfW, vw - halfW);
	const xHi = Math.max(halfW, vw - halfW);
	const yLo = Math.min(halfH, vh - halfH);
	const yHi = Math.max(halfH, vh - halfH);
	return {
		x: Math.round(Math.min(xHi, Math.max(xLo, x))),
		y: Math.round(Math.min(yHi, Math.max(yLo, y))),
	};
};

/** 面板上按下 → 准备拖（按钮上的按下放行，别抢「回板块 / 关闭」） */
const onPanelDown = (e: PointerEvent) => {
	if (!enabled || !e.isPrimary || (e.pointerType === "mouse" && e.button !== 0))
		return;
	if (phase !== "open") return;
	const t = e.target as Element | null;
	if (t && typeof t.closest === "function" && t.closest("button")) return;
	const el = panelEl;
	if (!el) return;
	const r = el.getBoundingClientRect();
	pdrag = {
		id: e.pointerId,
		sx: e.clientX,
		sy: e.clientY,
		ox: r.left + r.width / 2,
		oy: r.top + r.height / 2,
		moved: false,
	};
	e.preventDefault(); /* 别把拖动变成「选中文字」 */
};

/** 双击面板 = 忘掉用户摆的位置，退回自动避让 */
const onPanelDblClick = (e: MouseEvent) => {
	const t = e.target as Element | null;
	if (t && typeof t.closest === "function" && t.closest("button")) return;
	pos = null;
	storePos(wm, null);
	refreshAutoPos();
	applyPanelPlacement();
	publishMode();
};

const onGrabDown = (e: PointerEvent) => {
	if (!enabled || !e.isPrimary || (e.pointerType === "mouse" && e.button !== 0))
		return;
	if (phase === "open" || phase === "morph") return;
	e.preventDefault();
	// 拖拽开始的那一刻就锁定面板的落点 —— 之后整个 morph 都跑向同一坐标，
	// 引擎的弹簧中途换目标会出现「追一下」那种轻微跳动
	panelAnchorY = measurePanelAnchor();
	if (melt) {
		meltOn = true;
		showMelt(true);
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
	/* ① 挪面板 */
	if (pdrag) {
		const dx = e.clientX - pdrag.sx;
		const dy = e.clientY - pdrag.sy;
		if (!pdrag.moved && Math.hypot(dx, dy) < 4) return; /* 还没过阈值，当点击 */
		if (!pdrag.moved) {
			pdrag.moved = true;
			dragging = true; /* 关掉 top/left 过渡，跟手 */
		}
		const p = clampPos(pdrag.ox + dx, pdrag.oy + dy);
		pos = p;
		if (panelEl) {
			panelEl.style.left = `${p.x}px`;
			panelEl.style.top = `${p.y}px`;
		}
		/* 角色那一刀是跟着时间框的，拖动中要立刻跟上（否则挡住的位置会滞一帧）。
		   rAF 节流：一帧最多广播一次，别把 pointermove 的洪流全转成重排。 */
		if (!rafPending) {
			rafPending = true;
			requestAnimationFrame(() => {
				rafPending = false;
				if (phase === "open") publishMode();
			});
		}
		return;
	}
	/* ② 左缘拉出的液滴跟手 */
	if (phase !== "drag") return;
	if (melt) melt.move(e.clientX, e.clientY);
	else paintFallback(e.clientX, e.clientY, true);
};

const onPointerUp = (e: PointerEvent) => {
	/* ① 松手结束「挪面板」：真挪过才落盘 */
	if (pdrag) {
		const moved = pdrag.moved;
		pdrag = null;
		dragging = false;
		if (moved && pos) storePos(wm, pos);
		return;
	}
	/* ② 左缘拉出的液滴松手 */
	if (phase !== "drag") return;
	if (melt) {
		// 「拉够 / 没拉够」全在引擎里判（left 模式量的是 x）
		melt.up(e.clientX, e.clientY);
		return;
	}
	if (e.clientX > window.innerWidth * 0.32) enterOpen();
	else {
		paintFallback(0, 0, false);
		phase = "idle";
	}
};

/* ---------------- 启用判定 ---------------- */
const sync = () => {
	const on =
		document.body.classList.contains("site-promax") &&
		window.matchMedia("(min-width: 768px)").matches;
	if (on === enabled) return;
	enabled = on;
	if (!on) softReset();
};

/* ---------------- 生命周期 ---------------- */
onMount(() => {
	/* 形态：开局就按**壁纸来源**定 —— API 随机图 → 板块模式，自定义图 → 进壁纸模式。
	   （以前是读 localStorage 的「用户上次点的形态」，现在形态不由用户点按钮决定，
	     见 setMode 那段；所以 `ltWallpaperMode` 这个键已经作废、不再读写。） */
	syncModeFromSource();
	pos = loadPos(wm);
	try {
		melt = createMelt({
			canvas: canvasEl as HTMLCanvasElement,
			lens: lensEl,
			orient: "left", // 吸附边换成屏幕左缘
			capsule: panelBox,
			onPhase: (p) => {
				phase = p === "idle" ? (panelOn ? "open" : "idle") : p;
				if (p === "idle") {
					meltOn = false;
					showMelt(false);
				}
			},
			// 液滴快落定时：面板 DOM 立刻接手、引擎画布最短时间内淡出
			// —— 把「液态层 ↔ DOM 层」交叠窗口压到 120ms，那之前用户看到的
			// 「过渡」就是两层玻璃叠在同一格里各自淡入淡出。
			onSettle: () => {
				enterOpen();
				showMelt(false);
				meltOn = false;
			},
		});
	} catch {
		melt = null;
	}
	meltFailed = !melt;

	/* 形态玻璃：按记忆里的形态先把玻璃装好 / 撤掉。
	   开局跟引擎首扫（~80ms / DOMContentLoaded+140ms）是抢跑的，所以补两拍再确认一次；
	   syncPanelGlass 是幂等的，多跑无副作用。 */
	guardPanelGlass();
	syncPanelGlass();
	setTimeout(syncPanelGlass, 260);
	setTimeout(syncPanelGlass, 900);

	/* 开局就把形态报出去：记忆里若是「进壁纸」，body 的挂钩与角色层的层级
	   必须从第一帧起就对上，不能等用户拖出面板才纠正 */
	publishMode();

	sync();
	const onVersion = () => {
		sync();
		syncPanelGlass(); // 切档会让引擎重扫一遍，形态玻璃要重新对一次
	};
	document.addEventListener("siteversionchange", onVersion);
	/* 角色识别完 / 换了壁纸 → 地形图变了，自动避让要重算，面板挪一次。
	   ⚠ 换**壁纸来源**（API ⇄ 自定义）也是走的这个事件 —— WallpaperDepth 在
	     applySource() 末尾复用 `wallpaperdepthchange` 广播，所以这里顺手把
	     形态也按来源对一遍（API→板块 / 自定义→进壁纸）。 */
	const onDepthChange = () => {
		syncModeFromSource();
		refreshAutoPos();
		if (panelOn) {
			applyPanelPlacement();
			publishMode();
		}
	};
	document.addEventListener("wallpaperdepthchange", onDepthChange);
	const mo = new MutationObserver(sync);
	mo.observe(document.body, { attributes: true, attributeFilter: ["class"] });
	const mq = window.matchMedia("(min-width: 768px)");
	mq.addEventListener("change", sync);
	/* 窗口尺寸变了：左下角那颗 ✕ 要不要给沉底导航岛让位，得重算（见 placeCornerTools） */
	const onResize = () => placeCornerTools();
	window.addEventListener("resize", onResize);

	// 秒针：只在面板活着（或在飞过来的路上）时才动，平时不白白重排
	tickTimer = setInterval(() => {
		if (panelOn || phase === "morph") now = new Date();
	}, 1000);

	window.addEventListener("pointermove", onPointerMove, { passive: true });
	window.addEventListener("pointerup", onPointerUp);
	window.addEventListener("pointercancel", onPointerUp);
	// 切页（swup 换内容）时把面板收起来，别把它留在新页面上
	const onSwapped = () => {
		if (phase !== "idle" || panelOn) softReset();
	};
	document.addEventListener("swup:contentReplaced", onSwapped);

	const api = {
		open: () => enterOpen(),
		close,
		isOpen: () => phase === "open",
		/** 探针/调试用：**强制**切到某个形态（正常运行时形态只跟壁纸来源走，
		    这个口子留给探针 —— 它要能在不改来源的情况下测两档形态） */
		wallpaper: (on = true) => setMode(on),
		mode: () => (wm ? "wallpaper" : "panel"),
		/** 探针/调试用：把形态重新按壁纸来源对一遍 */
		syncMode: () => syncModeFromSource(),
	};
	(window as unknown as { __leftTime?: typeof api }).__leftTime = api;

	return () => {
		document.removeEventListener("siteversionchange", onVersion);
		document.removeEventListener("wallpaperdepthchange", onDepthChange);
		mo.disconnect();
		glassMO?.disconnect();
		glassMO = undefined;
		document.body.classList.remove("lt-in-wallpaper");
		mq.removeEventListener("change", sync);
		window.removeEventListener("resize", onResize);
		window.removeEventListener("pointermove", onPointerMove);
		window.removeEventListener("pointerup", onPointerUp);
		window.removeEventListener("pointercancel", onPointerUp);
		document.removeEventListener("swup:contentReplaced", onSwapped);
		clearInterval(tickTimer);
		melt?.destroy();
		melt = null;
	};
});

/* 打开时才吃 Esc：别在平时抢全局键盘。
   ⚠ 点击空白处**不再**关闭 —— 面板现在是个可拖动的浮层（抓面板哪儿都能拖），
     随手点一下空白就被收走太容易误触。关它请用右上角那颗 X（或 Esc）。 */
$effect(() => {
	if (!isOpen) return;
	const onEsc = (e: KeyboardEvent) => {
		if (e.key === "Escape") close();
	};
	document.addEventListener("keydown", onEsc);
	return () => {
		document.removeEventListener("keydown", onEsc);
	};
});
</script>

<!-- 挂在 body 直下（与 #top-search 同理：岛上的 transform 会给 fixed 当包含块） -->
<div
	id="left-time"
	class:liquid-on={meltOn}
	class:no-liquid={meltFailed}
	class:lt-open={isOpen}
>
	<!-- 真折射层：跟液滴同一个圆角矩形，滤镜是真的 backdrop-filter -->
	<div class="lt-lens" bind:this={lensEl} aria-hidden="true"></div>

	<!-- 液滴本体：WebGL2 + SDF -->
	<canvas class="lt-melt" bind:this={canvasEl} aria-hidden="true"></canvas>

	<!-- 没有 WebGL2 时的兜底：一枚黑圆点 -->
	<span class="lt-blob" bind:this={blobEl} aria-hidden="true"></span>

	<!-- 左缘感应带：只有这一条吃事件，页面照常能点。
	     从 80px 起，把屏幕左上角让给搜索的顶部感应带 -->
	<button
		type="button"
		class="lt-grab"
		aria-label="从屏幕左缘往右拖拽，唤出时间"
		on:pointerdown={onGrabDown}
	></button>

	<!-- （`.lt-plate` 玻璃托底已于 2026-09-26 删除，见 JS 里那段「已删除」注释） -->

	<!-- 时间面板：拖够松手、液滴落定之后才浮现。
	     两种形态共用这一个 DOM（.wallpaper 类切形状 + 位置 + 玻璃的有无）。
	     这里**故意不做位移过渡**（不像早先那样 translate -16px scale 0.98 飘进来）：
	     液态 blob 收尾的位置本来就在面板那一格，panel 再 scale 飘一下反而会让
	     「液态层 ↔ DOM 层」交叠出一层多余的小玻璃（用户看到的"过渡"）。
	     只留 opacity 的极短淡入（120ms）盖住引擎最后那两帧弹簧回弹。 -->
	<div
		class="lt-panel"
		class:show={panelOn}
		class:wallpaper={wm}
		class:dragging
		bind:this={panelEl}
		on:pointerdown={onPanelDown}
		on:dblclick={onPanelDblClick}
	>
		<div class="lt-time">
			<span class="lt-hm">{hh}:{mm}</span>
		</div>
		<div class="lt-date">{weekText} · {dayText}</div>

		<!-- 工具条：**只剩关闭 X**（那颗「板块 ⇄ 进壁纸」的形态按钮 2026-09-26 删了 ——
		     形态改成跟壁纸来源自动走，没有可切的东西了）。
		     ⚠ 两档形态位置不同，所以是**两个位置、同一种按钮**：
		       · 板块 → 面板内部右上角（这里，绝对定位、不参与时间排版）；
		       · 进壁纸 → 整个视口的左下角，见面板后面那颗 .lt-tools-corner。
		     搬出去的原因写在 CSS `.lt-tools-corner` 那段（面板的 transform 会当包含块）。
		     ⚠ 抓这一带能拖动面板：onPanelDown 见到按下落在 <button> 上就放行，
		       所以「关闭」照常是一次点击，不会变成拖动。 -->
		{#if !wm}
			<div class="lt-tools">
				<button type="button" class="lt-x" aria-label="关闭时间" on:click={close}>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.2"
						stroke-linecap="round"
						aria-hidden="true"
					>
						<path d="M6 6l12 12M18 6L6 18"></path>
					</svg>
				</button>
			</div>
		{/if}
	</div>

	<!-- 进壁纸形态的 ✕：钉在**整个视口**左下角。
	     ⚠ 必须是 `.lt-panel` 的兄弟而不是子元素 —— 面板有 `transform`，会给后代立包含块，
	       里面的 `position:fixed` 只会贴着面板摆；而且面板可拖动，跟着它走就不叫「网站左下角」。
	     ⚠ 只在面板真的露脸时渲染（panelOn）：它是 fixed，不受面板 opacity 管，
	       不 gate 的话「时间收走了 ✕ 还留在左下角」。
	     bottom 由 placeCornerTools() 兜一手（沉底导航岛压到左缘时抬到岛上方）。 -->
	{#if wm && panelOn}
		<div class="lt-tools lt-tools-corner" bind:this={cornerToolsEl}>
			<button type="button" class="lt-x" aria-label="关闭时间" on:click={close}>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
					aria-hidden="true"
				>
					<path d="M6 6l12 12M18 6L6 18"></path>
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	#left-time {
		position: fixed;
		inset: 0;
		/* 板块形态：正文(30) 之上（是一块浮在正文上的玻璃盒）、导航岛(80) 之下。
		   ⚠ 进壁纸形态把这一层改成 z:58（body.lt-in-wallpaper）—— 仍要留在
		     正文(30) / #content-wrapper(50) 之上，否则向下翻时文章会把时间盖掉；
		     同时低于顶部搜索(65)，保持搜索永远是最上面那层 UI。
		     角色层(默认 25，裁切生效时才抬到 62) 由此压在时间前面。
		     见 WallpaperDepth.astro 里 is:global 的层级约定。 */
		z-index: 65;
		pointer-events: none;
		display: none;
	}
	@media (min-width: 768px) {
		/* ProMax 专属：跟顶部搜索同一档位判定 */
		:global(body.site-promax) #left-time {
			display: block;
		}
	}

	/* 左缘 26px 的感应带：透明、只吃自己那一格的事件。
	   top/bottom 各留 80px —— 上面避开搜索的顶部感应带，下面避开沉底的导航岛 */
	.lt-grab {
		position: absolute;
		left: 0;
		top: 80px;
		bottom: 80px;
		width: 26px;
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
	.lt-grab:active {
		cursor: grabbing;
	}

	/* ================= 液态层（与顶部搜索同构） =================
	   DOM 顺序 = 层次：.lt-lens 在下（真折射），画布在上（材质）。 */
	.lt-melt {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		display: block;
		opacity: 0;
		pointer-events: none;
	}
	.lt-lens {
		position: absolute;
		left: 0;
		top: 0;
		width: 0;
		height: 0;
		opacity: 0;
		pointer-events: none;
	}
	.lt-blob {
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
			calc(var(--lt-x, 0px) - 50%),
			calc(var(--lt-y, 0px) - 50%)
		);
	}

	/* ================= 时间面板 =================
	   一枚 DOM，两种形态。宽度/高度/圆角/位置都在下面这条过渡里 ——
	   点那颗独立按钮时玻璃板「变形」过去，而不是硬切。
	   ⚠ 高度必须写死（跟 JS 的 panelBox() 同口径）：液态 blob 的落点是个
	     圆角矩形胶囊，面板自己不占位的话，交接那一下尺寸会对不上。 */
	.lt-panel {
		position: absolute;
		left: 50%;
		top: 50%;
		width: min(460px, 76vw);
		height: 248px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* 板块：时间**靠左** —— 452 宽的玻璃盒里，数字贴左边起排，
		   右边留白；进壁纸那边在下面自己改回「居中」。 */
		align-items: flex-start;
		text-align: left;
		gap: 10px;
		padding: 0 26px 0 44px;
		border-radius: 34px;
		color: rgba(255, 255, 255, 0.97);
		/* 板块：真正的液态玻璃盒。
		   ⚠ 底色刻意用**纯 background-color**（不是渐变）—— LiquidGlass 的
		     透底（tint）只认 background-color，渐变底读不出 alpha，折射就会被
		     那层实底整个盖住、白瞎一块玻璃（点名的 force 也救不回来）。
		     玻璃表面的那点光泽交给 ::before 那层薄渐变。 */
		background-color: rgba(255, 255, 255, 0.42);
		border: 1px solid rgba(255, 255, 255, 0.38);
		box-shadow:
			0 18px 46px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.5);
		text-shadow: 0 1px 10px rgba(0, 0, 0, 0.42);
		opacity: 0;
		pointer-events: none;
		touch-action: none; /* 触屏上拖面板别顺带把页面滚了 */
		transform: translate(-50%, -50%) scaleY(1);
		/* 锚点在面板顶边 —— 开屏 scaleY>1 时只往下方伸长
		   （苹果时间拉長就是这种感觉：被从上面拽下来、上边不动、下边往下滑） */
		transform-origin: center top;
		transition:
			opacity 0.14s linear,
			width 0.44s cubic-bezier(0.22, 1, 0.36, 1),
			height 0.44s cubic-bezier(0.22, 1, 0.36, 1),
			top 0.44s cubic-bezier(0.22, 1, 0.36, 1),
			border-radius 0.44s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.34s ease,
			border-color 0.34s ease,
			box-shadow 0.34s ease;
	}
	/* 玻璃表面的薄光泽：只是一层低 alpha 的斜向渐变，压在折射之上也不遮背景 */
	.lt-panel::before {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		background: linear-gradient(
			158deg,
			rgba(255, 255, 255, 0.26),
			rgba(255, 255, 255, 0) 44%,
			rgba(255, 255, 255, 0.12)
		);
	}
	.lt-panel.show {
		opacity: 1;
		pointer-events: auto;
		/* 整个面板都是拖动把手：抓哪儿都能把时间挪走 */
		cursor: grab;
		/* 落定那一瞬：纵向先撑到 1.45 倍再回弹 —— 苹果时间拉長的弹性手感。
		   both 让动画结束后停在 100% 那帧（= 基态），免得 transform 来回跳。 */
		animation: ltTimeStretch 0.68s cubic-bezier(0.34, 1.45, 0.6, 1) both;
	}
	/* 拖动中：把 top/left 的过渡关掉，否则面板会「追」着指针慢慢挪。
	   只留一下 opacity —— 免得形态切换那几条过渡把拖动搞得黏糊糊的。 */
	.lt-panel.dragging {
		transition: opacity 0.14s linear;
		cursor: grabbing;
	}

	/* ---------- ② 进壁纸：整块玻璃撤掉，只剩时间浮在壁纸上 ----------
	   「去掉玻璃」= 底色 / 描边 / 外影 / SVG 折射**全部**撤掉（折射在 JS 里
	   unregister + data-lg-skip 一起摘，见 syncPanelGlass）。留下来的只有文字 ——
	   白字压在亮天空上，所以补一层暗描保证读得清（text-shadow 不是玻璃）。
	   位置由 JS 写内联 top（屏幕上方居中），横向仍旧 left:50% 居中。 */
	.lt-panel.wallpaper {
		width: min(760px, 86vw);
		/* ⚠ 与 JS 的 WP_H 同口径（改一边必须改另一边）。演进：176 → 248 → 284 → **280**。
		   176→248：数字常驻纵向 ×1.6（并且 inline-block 之后终于真的画出来了），
		           而 scaleY 只改视觉不改行盒 —— 高度不够会顶到日期/溢出面板。
		   248→284：字号上限 110→132（用户「时间太小了 放大一点」），视觉盒按 1.6em 线性涨。
		   284→**280**（2026-09-26 第二轮）：字号 132→150（用户又提一次「大一点」），
		           同时用户点名「去掉玻璃块（仅限进壁纸）」→ `.lt-plate` 玻璃托底整个删掉。
		           托底没了，配平少一项：以前数字要整个躺在托底里（内缩 16）→ `≥ 1.6em + 61`；
		           现在只剩「数字+日期塞得进面板」→ `≥ 1.6em + 29`。150px 时 = 269，取 280。
		           所以高度反而**降了一点**（284→280），但数字更大了 —— 全靠删托底腾出的空间。
		   ⚠ 别硬抬这个数：它还是 WallpaperDepth 那一刀裁切框的尺寸，≥300 会把横幅标题
		     和副标题同时吞进框里、punchEdge 挖不掉（见 JS 常量那段的实测闸门，292/300）。 */
		height: 280px;
		padding: 0 40px;
		border-radius: 46px;
		background-color: transparent;
		border-color: transparent;
		box-shadow: none;
		/* 顶部居中：把板块那套「靠左」改回来 */
		align-items: center;
		text-align: center;
		text-shadow:
			0 2px 20px rgba(0, 0, 0, 0.55),
			0 1px 3px rgba(0, 0, 0, 0.4);
	}
	/* 玻璃表面的那层光泽也一并去掉 */
	.lt-panel.wallpaper::before {
		background: none;
	}
	/* ---------- （已删除）.lt-plate 玻璃托底 ----------
	   曾经是「进壁纸」形态下垫在时间底下的一块很淡的真折射玻璃。2026-09-26 用户点名
	   去掉：「去掉玻璃块（仅限进壁纸）」。CSS / 元素 / JS 一起撤了。
	   记住那条坑：它若回来，**不许有 border / 内阴影** —— 引擎会把底色的 alpha 压到
	   0.025，而 border 还是 0.10（描边比填充明显 4 倍），于是只剩一圈空心方框，
	   用户原话「数字外在壁纸内有玻璃」。玻璃该靠折射立起来，不靠描边。 */

	/* 长方形形态的落定动画：从「略窄略高」摊开成「宽扁的长方形」——
	   横向拉伸的那一下就是「拉伸长方形时间」的字面意思。 */
	.lt-panel.wallpaper.show {
		animation: ltTimeStretchWide 0.7s cubic-bezier(0.34, 1.45, 0.6, 1) both;
	}
	@keyframes ltTimeStretch {
		0% {
			transform: translate(-50%, -50%) scaleY(1.45);
		}
		100% {
			transform: translate(-50%, -50%) scaleY(1);
		}
	}
	@keyframes ltTimeStretchWide {
		0% {
			transform: translate(-50%, -50%) scaleY(1.5) scaleX(0.94);
		}
		100% {
			transform: translate(-50%, -50%) scaleY(1) scaleX(1);
		}
	}

	/* 大号时间：iOS 锁屏分量 —— 撑满面板宽、白字 + text-shadow（继承自面板） */
	.lt-hm {
		font-size: clamp(72px, 11vw, 138px);
		font-weight: 700;
		letter-spacing: -0.045em;
		line-height: 0.9;
		font-variant-numeric: tabular-nums;
	}
	.lt-date {
		font-size: 0.96rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		opacity: 0.88;
	}
	/* 长方形比板块宽得多但矮得多：字号收一档、字距放开一点，
	   让这行数字在长条里「铺开」，不至于缩在中间一小坨。

	   ============ 「玻璃数字 + 常驻细长 ×1.5」（2026-09-26）============
	   两件事叠在一起：
	   ① 玻璃数字 —— 把一段**白色渐变裁进字面**（background-clip:text +
	      text-fill-color:transparent），字身带 alpha（.97→.70），所以壁纸从字里
	      透得出来；再加 1.2px 的白色描边当玻璃棱角的高光。
	      ⚠ 暗描只能用 `text-shadow`，**不能用 `filter: drop-shadow`** ——
	        实测（public/.wp-test/lab.html，同一元素同一条渐变，逐行对照）：
	        `background-clip:text` 与 `filter` 撞在一起时，Chromium 会把这一格
	        整个画成空白（computed style 全对、像素上什么都没有，p99 掉到背景值）。
	        而 text-shadow 是按字形轮廓画的，透明字身不吃它，暗描照样成立。
	        第一版就是被这条坑到：看着像「字变虚」，其实是整块没画出来。
	   ② 常驻细长 —— 字重 700→300 让笔画先细下来，再 `scaleY(1.6)` 纵向拉高。
	      这才是参考图里那种「细长」；落定那次 scaleY 动画只是额外的一点弹性。
	      ⚠⚠ `transform` 对 **display:inline** 的元素**完全不生效**！
	         `.lt-hm` 是个 `<span>`（默认 inline），所以第一版写上 `scaleY(1.5)`、
	         computed style 也回 `matrix(1,0,0,1.5,0,0)`，**画面上一点没拉长** ——
	         用户截图直接点名「数字不是竖向拉伸」。实测取证（探针）：
	           offsetHeight=140、getBoundingClientRect().height=140 → 有效缩放 1.000
	           clientHeight=0（inline 元素没有 client 盒）
	         修法就是补一句 `display: inline-block`。上一版探针之所以「通过」，
	         是因为它只断言了 computed transform 的字符串 —— **量错了对象**：
	         要判「有没有拉长」，只能比 rect 与 offset 的高度，不能看声明。
	      ⚠ scaleY 只改视觉、不改行盒 → 面板高度必须跟着涨（WP_H 176→248），
	        否则拉出来的字会顶到日期、甚至溢出面板。 */
	.lt-panel.wallpaper .lt-hm {
		/* ⚠ transform 的前提：inline 元素的 transform 会被浏览器直接忽略 */
		display: inline-block;
		/* 字号一路抬上去的账：110（初版）→ 132（第一轮「太小了」）→ **150**（第二轮）。
		   vf 项必须跟着上限走 —— 否则窄窗（<1364px）永远够不到新上限，改了等于没改。
		   ⚠ 这一档能开到 150，是因为**托底 `.lt-plate` 被删了**：以前数字必须整个躺在
		     托底里（内缩 16），所以 `WP_H ≥ 1.6×字号 + 61`；现在只剩「数字+日期塞得进面板」
		     这一条 → `WP_H ≥ 1.6×字号 + 29`。而 WP_H 仍然卡着裁切框的闸门（≤292，
		     见 JS 常量那段），150 + 280 是这两条一起让出来的位置。 */
		font-size: clamp(72px, 11vw, 150px);
		/* 字重 700→300：细下来才有「细长」的样子。
		   上一版退到 400 是**误诊**：当时看到「300 只剩描边」，以为是字太重会糊，
		   真相是 text-shadow 把字身的填充整个抹掉了（见下面那条），跟字重无关。
		   填充修好之后 300 才敢用。 */
		font-weight: 300;
		letter-spacing: -0.005em;
		line-height: 1;
		transform: scaleY(1.6);
		transform-origin: center center;
		/* ⚠ 拉长是**视觉溢出**，行盒不跟着涨 —— 上下各溢出 (1.6-1)/2 = 0.3em。
		   inline-block 之后这个溢出会真的画出来，不预留就会压在日期上。
		   用 em 表达（0.3em）而不是写死 33px：字号是 clamp 的，写死只在最大档对。
		   效果：margin 盒 = 1em + 0.6em = 1.6em，正好把视觉盒包住。 */
		margin: 0.3em 0;
		/* 玻璃字身：上亮下透。字身在 .86 以上就不算「一层纱」了，
		   配合深描边在亮/暗壁纸上都立得住。 */
		background-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0.95) 46%,
			rgba(255, 255, 255, 0.86) 100%
		);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		/* 字的「棱」改用**深描边**收边：字身已经是白的，白描边等于没描；
		   亮壁纸（浅天空/浅色人物）上要靠深边才读得清。 */
		-webkit-text-stroke: 1.4px rgba(14, 18, 30, 0.3);
		/* ⚠⚠ 这里**必须显式 text-shadow: none**，两个理由叠在一起：
		   ① 它是可继承属性 —— `.lt-panel.wallpaper` 上那条暗晕会继承下来；
		   ② **`text-shadow` 与 `background-clip:text` 同元素共存，
		      在本版 Chromium 下会把字身的填充整个抹掉**，比 filter 那条更隐蔽。
		      实测（受控 lab，同一条渐变逐行对照，阈值 200 的亮像素占比）：
		        纯渐变（对照）        11.02%   ← 填充正常
		        渐变 + 暗 text-shadow  0.00%   ← 填充**一个像素都没有**
		        渐变 + 白描边          13.31%   ← 描边不影响
		        渐变 + scaleY(1.5)     15.91%   ← transform 不影响
		        三件套（线上真实组合）  0.40%
		        三件套 + 完全不透明渐变 1.14%   ← 与 alpha 无关，是 shadow 本身
		      所以线上看到的「黑色数字」= 只剩 -webkit-text-stroke 的白描边
		      + text-shadow 的暗晕，字身是空的（实测该区域 max=228.6、
		      >200 的像素只占 0.91%，只有一圈边）。上一版把 filter 换成
		      text-shadow 以为躲开了，其实撞的是同一堵墙 —— 暗晕得靠别的层做，
		      不能挂在这个元素上。 */
		text-shadow: none;
	}
	.lt-panel.wallpaper .lt-date {
		letter-spacing: 0.22em;
		opacity: 0.82;
	}

	/* 右上角工具条：[X] —— 绝对定位，不参与时间排版。
	   放在面板**里面**、贴着右上角：进壁纸形态下面板底边已经贴到沉底导航岛，
	   往外挂东西必然压岛（老注释里踩过一次）。
	   （这里原先还有一颗「回板块 / 进壁纸」的 .lt-mode，2026-09-26 用户点名删掉 ——
	     形态现在跟壁纸来源自动走，没有可切的东西了。） */
	.lt-tools {
		position: absolute;
		top: 12px;
		right: 14px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		pointer-events: auto;
	}

	/* 关闭：一颗圆钮，**两档形态都是深底白字**。
	   点击空白**不再**关闭面板了，所以这颗 X 是唯一的「点一下就收」的入口
	   （另外 Esc 也还能收）。 */
	.lt-x {
		width: 32px;
		height: 32px;
		padding: 0;
		margin: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: none;
		border-radius: 9999px;
		border: 1px solid rgba(255, 255, 255, 0.34);
		background-color: rgba(16, 20, 28, 0.5);
		color: rgba(255, 255, 255, 0.95);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.26);
		cursor: pointer;
		-webkit-appearance: none;
		appearance: none;
		transition:
			background-color 0.24s ease,
			border-color 0.24s ease,
			transform 0.24s ease;
	}
	.lt-x:hover {
		background-color: rgba(16, 20, 28, 0.64);
		border-color: rgba(255, 255, 255, 0.46);
	}
	.lt-x:active {
		transform: scale(0.94);
	}
	.lt-x svg {
		width: 14px;
		height: 14px;
		display: block;
	}
	/* ⚠⚠ 壁纸形态**刻意不给 .lt-x 加覆盖底色**（旧版在这里翻成浅底 rgba(255,255,255,.22)，
	   而 ✕ 的 content 色仍是白 → 亮壁纸上白压白，✕ 整个消失 = 用户那句
	   「右上角的按钮去哪里了」）。
	   所以 X 直接沿用基类的深底白字（两档形态一致），保证任何壁纸上都读得清。
	   位置是另一回事：**进壁纸形态把它挪到整个视口的左下角**（见下一条）。 */
	/* 进壁纸形态：✕ 钉在**整个视口**的左下角（2026-09-26 用户「放在整个网站的左下角」）。
	   这一档的节点不是面板的子元素，而是 `.lt-panel` 的**兄弟**（见模板里的 {#if wm}）——
	   ⚠ 为什么必须搬出来：面板带 `transform: translate(-50%,-50%)`，而 transform 会给
	     后代立**包含块**，子孙的 `position:fixed` 会退化成「贴着面板右上角」，
	     根本到不了视口角落；而且面板自己能拖，跟着面板走的位置也不叫「网站左下角」。
	   ⚠ 只在这一档搬：板块形态的面板是居中的玻璃盒，✕ 贴着它右上角才对（那条走 .lt-tools）。
	   ⚠ bottom 由 JS 兜一手（placeCornerTools）：沉底导航岛是 ~810px 的定宽居中条，
	     窗口窄到 ~918px 以下时它的左缘会压到视口左缘，那会儿 ✕ 得抬到岛上方，
	     否则 ✕(z:58) 会被岛(z:80)整颗盖住（看得见的是岛、点到的也是岛）。 */
	.lt-tools-corner {
		position: fixed;
		/* ⚠⚠ 必须显式清掉 .lt-tools 基类那两条 `top:12px; right:14px`！
		   这颗 ✕ 同时挂着 `lt-tools lt-tools-corner` 两个类（复用基类的 inline-flex /
		   对齐 / 间距 / pointer-events）。只写 left/bottom 的话，**position:fixed +
		   top:12px + bottom:22px + height:auto** 会把盒子**纵向抻满**（12 顶到 22 底），
		   再被 `align-items:center` 把按钮居中 —— 实测 ✕ 落在 cy≈399（vh/2）而不是底部，
		   看起来像「✕ 卡在屏幕中间」。`top:auto; right:auto` 一写，盒子才按内容高度收缩、
		   老实贴到底角。踩过的坑：探针玻璃验收当场红在「✕ 钉在整个视口左下角」这条。 */
		top: auto;
		right: auto;
		left: 22px;
		bottom: 22px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		pointer-events: auto;
	}

	@media (prefers-reduced-motion: reduce) {
		.lt-panel {
			transition: opacity 0.1s linear;
		}
		.lt-panel.show,
		.lt-panel.wallpaper.show {
			animation: none;
		}
	}
</style>
