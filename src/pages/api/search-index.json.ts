import { getCollection } from "astro:content";
import {
	getCategoryList,
	getSortedPosts,
	getTagList,
} from "@/utils/content-utils";
import {
	dynamicPlainText,
	dynamicSlug,
	sortDynamics,
} from "@/utils/dynamic-utils";
import { navBarConfig, siteConfig } from "@/config";
// LinkPresets 未在 @/config 索引里导出，直接从模块取
import { LinkPresets } from "@/config/navBarConfig";
import { getPostUrlBySlug, url } from "@/utils/url-utils";

/**
 * 全站统一检索索引
 * ============================================================================
 * 导航岛右上角的搜索以前只查 Pagefind，而 Pagefind 索引里只有文章正文：
 *   - 「最新动态」(/api/dynamic.json) 完全不在它的检索范围内；
 *   - Pagefind 只在 `pnpm build` 之后存在，开发环境下搜索框是死的；
 *   - Pagefind 是分词检索，中文单字（如「日」「记」「文」「章」）基本搜不到。
 *
 * 这里在构建期把所有可检索内容拉平成一份 JSON，客户端做子串匹配，
 * 于是：任何单字、任意片段都能命中，且开发/生产环境表现一致。
 */

export type SearchDocKind = "post" | "dynamic" | "category" | "tag" | "page";

export interface SearchDoc {
	/** 条目标注，客户端用它决定角标文案与排序权重 */
	kind: SearchDocKind;
	title: string;
	url: string;
	/** 副标题 / 摘要 */
	desc?: string;
	/** 面包屑，例如「日记 · 专栏」 */
	meta?: string;
	/** 可检索的正文纯文本（已截断） */
	text?: string;
	/** 时间戳，用于同权重时的排序 */
	date?: number;
}

/** 单篇正文最多携带的字符数，避免索引体积失控（大站点可适当调小） */
const MAX_BODY_CHARS = 1600;

/** 把 Markdown 拉平成一行纯文本 */
const markdownToPlainText = (markdown: string): string =>
	markdown
		// 代码块整体丢弃（体积大、噪声多）
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/~~~[\s\S]*?~~~/g, " ")
		// 图片丢弃，链接只保留文字
		.replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
		.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/<\/?[a-zA-Z][^>]*>/g, " ")
		// 目录/指令类行
		.replace(/^\s*(import|export)\s.+$/gm, " ")
		// Markdown 标记符号
		.replace(/[#>*_`~|]/g, " ")
		.replace(/\s+/g, " ")
		.trim();

const truncate = (text: string, max: number): string =>
	text.length > max ? text.slice(0, max) : text;

/** 静态页面：直接来自导航配置，保证「文章」「归档」「最新动态」等页面名可被搜到 */
function collectPageDocs(): SearchDoc[] {
	const docs: SearchDoc[] = [];
	const seen = new Set<string>();
	const pages = siteConfig.pages as Record<string, boolean | undefined>;
	const isEnabled = (pageKey?: string): boolean =>
		!pageKey || pages[pageKey] !== false;

	const push = (name: string, href: string, desc: string): void => {
		const final = href.startsWith("http") ? href : url(href);
		if (!name || seen.has(final)) return;
		seen.add(final);
		docs.push({ kind: "page", title: name, url: final, desc });
	};

	for (const link of navBarConfig.links) {
		if (isEnabled(link.pageKey)) push(link.name, link.url, "页面");
		for (const child of link.children ?? []) {
			if (isEnabled(child.pageKey)) push(child.name, child.url, "页面");
		}
	}

	// 预设里存在、但没出现在当前导航栏上的页面
	for (const preset of Object.values(LinkPresets)) {
		if (isEnabled(preset.pageKey)) push(preset.name, preset.url, "页面");
	}

	// 导航栏上没有入口、但用户会直接搜的页面
	push("最新动态", "/dynamic/", "动态时间线");
	push("搜索", "/search/", "高级搜索");
	push("全部分类", "/categories/", "按分类浏览");
	push("全部标签", "/tags/", "按标签浏览");

	return docs;
}

export async function GET(): Promise<Response> {
	const docs: SearchDoc[] = collectPageDocs();

	// ---- 文章 ----
	const posts = await getSortedPosts();
	for (const post of posts) {
		const data = post.data;
		const hasPassword = Boolean(data.password && data.password.length > 0);
		const metaParts = [data.category, ...(data.tags ?? [])].filter(
			(part): part is string => Boolean(part && String(part).trim()),
		);
		docs.push({
			kind: "post",
			title: data.title,
			url: getPostUrlBySlug(post.id),
			desc: data.description || "",
			meta: metaParts.join(" · "),
			// 加密文章不把正文带进索引
			text: hasPassword
				? ""
				: truncate(markdownToPlainText(post.body ?? ""), MAX_BODY_CHARS),
			date: data.published instanceof Date ? data.published.getTime() : undefined,
		});
	}

	// ---- 最新动态 / 日记 ----
	const dynamics = sortDynamics(await getCollection("dynamic"));
	for (const entry of dynamics) {
		const text = dynamicPlainText(entry);
		const location = entry.data.location?.trim() ?? "";
		docs.push({
			kind: "dynamic",
			title: `动态 · ${entry.data.published.toISOString().slice(0, 10)}`,
			url: url(`/dynamic/#dynamic-${dynamicSlug(entry.id)}`),
			desc: location ? `来自 ${location}` : "动态",
			meta: "最新动态",
			text: truncate(text, MAX_BODY_CHARS),
			date: entry.data.published.getTime(),
		});
	}

	// ---- 分类 / 标签（「日记」是一个分类，必须能搜到它的入口）----
	for (const category of await getCategoryList()) {
		docs.push({
			kind: "category",
			title: category.name,
			url: category.url,
			desc: `分类 · ${category.count} 篇`,
			meta: "分类",
		});
	}

	for (const tag of await getTagList()) {
		docs.push({
			kind: "tag",
			title: tag.name,
			url: url(`/archive/?tag=${encodeURIComponent(tag.name.trim())}`),
			desc: `标签 · ${tag.count} 篇`,
			meta: "标签",
		});
	}

	return new Response(JSON.stringify({ docs }), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
