/**
 * 站内搜索的检索内核
 * ============================================================================
 * 索引来自 /api/search-index.json（构建期把所有内容拉平成一份 JSON）：
 * 文章、最新动态/日记、分类、标签、静态页面全都在里面。
 *
 * 检索方式刻意用「子串匹配」而不是 Pagefind 的分词检索：
 *   - 中文单字（「日」「记」「文」「章」「动」「态」）必须能命中；
 *   - 开发环境也要能用（Pagefind 只在 build 之后存在）。
 *
 * 这份内核被两处复用（所以抽出来，逻辑只有一份）：
 *   · DynamicIslandSearch.svelte —— 导航岛右上角那枚搜索（normal / lite / 窄屏）
 *   · TopSearch.svelte          —— ProMax 桌面端「屏幕上方」那枚搜索胶囊
 */

import { url as formatUrl } from "@/utils/url-utils";

export type SearchDocKind = "post" | "dynamic" | "category" | "tag" | "page";

export interface SearchDoc {
	kind: SearchDocKind;
	title: string;
	url: string;
	desc?: string;
	meta?: string;
	text?: string;
	date?: number;
}

export interface SearchHit {
	title: string;
	url: string;
	kind: SearchDocKind;
	badge: string;
	snippet: string;
}

export interface SearchOutcome {
	hits: SearchHit[];
	total: number;
	failed: boolean;
}

export const KIND_BADGE: Record<SearchDocKind, string> = {
	post: "文章",
	dynamic: "动态",
	category: "分类",
	tag: "标签",
	page: "页面",
};

export const MAX_RESULTS = 6;

// --- 索引缓存（模块级：多个搜索入口共享同一份，只拉一次） ---
let docs: SearchDoc[] = [];
let indexPromise: Promise<void> | null = null;
let indexFailed = false;

export const loadSearchIndex = (): Promise<void> => {
	if (docs.length > 0) return Promise.resolve();
	if (indexPromise) return indexPromise;
	indexPromise = (async () => {
		try {
			const res = await fetch(formatUrl("/api/search-index.json"));
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			const list = Array.isArray(data) ? data : (data?.docs ?? []);
			docs = Array.isArray(list) ? list : [];
			indexFailed = false;
		} catch (error) {
			console.warn("[island-search] 索引加载失败:", error);
			docs = [];
			indexFailed = true;
		} finally {
			indexPromise = null;
		}
	})();
	return indexPromise;
};

export const searchIndexFailed = (): boolean => indexFailed;

// --- 匹配辅助 ---
const escapeHtml = (text: string): string =>
	text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");

const escapeRegExp = (text: string): string =>
	text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** 把命中的字串包成 <mark>（先转义再高亮，避免 HTML 注入） */
const highlight = (text: string, term: string): string => {
	if (!term) return escapeHtml(text);
	return escapeHtml(text).replace(
		new RegExp(escapeRegExp(escapeHtml(term)), "gi"),
		(matched) => `<mark>${matched}</mark>`,
	);
};

/** 围绕第一个命中位置截一段上下文 */
const buildSnippet = (doc: SearchDoc, term: string, len = 78): string => {
	const source = doc.desc || doc.text || "";
	if (!source) return "";
	const at = source.toLowerCase().indexOf(term);
	if (at < 0) return highlight(source.slice(0, len), "");
	const radius = Math.floor(len / 2);
	const start = Math.max(0, at - radius);
	const end = Math.min(source.length, start + len);
	return (
		(start > 0 ? "… " : "") +
		highlight(source.slice(start, end), term) +
		(end < source.length ? " …" : "")
	);
};

/** 同一字段的命中权重：标题 > 分类/标签 > 摘要 > 正文 */
const scoreDoc = (doc: SearchDoc, query: string, terms: string[]): number => {
	const title = (doc.title || "").toLowerCase();
	const meta = (doc.meta || "").toLowerCase();
	const desc = (doc.desc || "").toLowerCase();
	const text = (doc.text || "").toLowerCase();
	const haystack = `${title} ${meta} ${desc} ${text}`;

	// 多词查询按 AND 处理：有一个词没出现就整体不命中
	for (const term of terms) {
		if (!haystack.includes(term)) return 0;
	}

	let score = 0;
	if (title.includes(query)) score += title === query ? 200 : 110;
	if (meta.includes(query)) score += 55;
	if (desc.includes(query)) score += 40;
	if (text.includes(query)) score += 18;

	for (const term of terms) {
		if (title.includes(term)) score += 22;
		if (meta.includes(term)) score += 11;
		if (desc.includes(term)) score += 7;
		if (text.includes(term)) score += 3;
	}

	// 同分时：入口类条目（页面/分类/标签）优先于正文条目
	score +=
		{ page: 9, category: 10, tag: 8, post: 5, dynamic: 4 }[doc.kind] ?? 0;
	// 标题本身就是查询词时再抬一手，避免「文章」被别的长标题压掉
	if (doc.kind === "page" && title.length <= query.length + 2) score += 12;
	return score;
};

/**
 * 跑一次检索：等索引就绪 → 打分排序 → 取前 limit 条。
 * 空查询直接返回空结果（调用方不用自己判）。
 */
export const runSearch = async (
	raw: string,
	limit = MAX_RESULTS,
): Promise<SearchOutcome> => {
	const query = raw.trim().toLowerCase();
	if (!query) return { hits: [], total: 0, failed: false };

	await loadSearchIndex();
	const terms = query.split(/\s+/).filter(Boolean);
	const scored: Array<{ doc: SearchDoc; score: number }> = [];
	for (const doc of docs) {
		const score = scoreDoc(doc, query, terms);
		if (score > 0) scored.push({ doc, score });
	}
	scored.sort(
		(a, b) => b.score - a.score || (b.doc.date ?? 0) - (a.doc.date ?? 0),
	);

	return {
		total: scored.length,
		failed: indexFailed,
		hits: scored.slice(0, limit).map(({ doc }) => ({
			title: highlight(doc.title || "", query),
			url: doc.url,
			kind: doc.kind,
			badge: KIND_BADGE[doc.kind] ?? "内容",
			snippet: buildSnippet(doc, query),
		})),
	};
};
