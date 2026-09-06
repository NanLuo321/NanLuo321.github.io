<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { onMount } from "svelte";
import Icon from "@/components/common/Icon.svelte";
import type { SearchResult } from "@/global";
import { url as formatUrl } from "@/utils/url-utils";

// --- Props ---
export let title = i18n(I18nKey.search);
export let description = "";

// --- State ---
let keyword = "";
let results: SearchResult[] = [];
let isSearching = false;
let initialized = false;
let dynamicCache: DynamicEntry[] | null = null;
let dynamicLoading: Promise<DynamicEntry[]> | null = null;

interface DynamicEntry {
	id: string;
	published: number;
	html: string;
	images?: Array<{ alt: string; src: string; title?: string }>;
	searchText: string;
	pinned?: boolean;
	location?: string;
}

const stripHtml = (html: string): string =>
	html
		.replace(/<style[\s\S]*?<\/style>/gi, " ")
		.replace(/<script[\s\S]*?<\/script>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, " ")
		.trim();

const extractExcerpt = (text: string, kw: string, len = 90): string => {
	if (!text) return "";
	const lower = text.toLowerCase();
	const idx = lower.indexOf(kw.toLowerCase());
	const radius = Math.floor(len / 2);
	let start = idx >= 0 ? Math.max(0, idx - radius) : 0;
	let end = Math.min(text.length, start + len);
	if (end - start < len) {
		start = Math.max(0, end - len);
	}
	const slice = text.slice(start, end);
	const escaped = slice
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
	if (idx < 0) return escaped;
	const localIdx = idx - start;
	const before = escaped.slice(0, localIdx);
	const match = escaped.slice(localIdx, localIdx + kw.length);
	const after = escaped.slice(localIdx + kw.length);
	const re = new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
	return (
		(start > 0 ? "… " : "") +
		before.replace(re, "<mark>$1</mark>") +
		match.replace(re, "<mark>$1</mark>") +
		after.replace(re, "<mark>$1</mark>") +
		(end < text.length ? " …" : "")
	);
};

const formatDynamicDate = (ts: number): string => {
	try {
		const d = new Date(ts);
		const y = d.getFullYear();
		const m = String(d.getMonth() + 1).padStart(2, "0");
		const day = String(d.getDate()).padStart(2, "0");
		const hh = String(d.getHours()).padStart(2, "0");
		const mm = String(d.getMinutes()).padStart(2, "0");
		return `${y}-${m}-${day} ${hh}:${mm}`;
	} catch {
		return "";
	}
};

const loadDynamics = async (): Promise<DynamicEntry[]> => {
	if (dynamicCache) return dynamicCache;
	if (dynamicLoading) return dynamicLoading;
	dynamicLoading = (async () => {
		try {
			const res = await fetch(formatUrl("/api/dynamic.json"));
			if (!res.ok) throw new Error(`status ${res.status}`);
			const data = (await res.json()) as DynamicEntry[];
			dynamicCache = Array.isArray(data) ? data : [];
		} catch (err) {
			console.warn("Failed to load dynamic entries for search:", err);
			dynamicCache = [];
		} finally {
			dynamicLoading = null;
		}
		return dynamicCache!;
	})();
	return dynamicLoading;
};

const searchDynamics = async (
	kw: string,
): Promise<SearchResult[]> => {
	const list = await loadDynamics();
	const lower = kw.toLowerCase();
	const hits: SearchResult[] = [];
	for (const item of list) {
		const text = (item.searchText || "").trim() || stripHtml(item.html || "");
		if (!text) continue;
		if (
			text.toLowerCase().includes(lower) ||
			(item.location || "").toLowerCase().includes(lower)
		) {
			const titleDate = formatDynamicDate(item.published);
			hits.push({
				url: formatUrl(`/dynamic/#${item.id}`),
				meta: {
					title: titleDate
						? `${i18n(I18nKey.dynamic)} · ${titleDate}`
						: i18n(I18nKey.dynamic),
				},
				excerpt: extractExcerpt(text, kw) || text.slice(0, 120),
			});
		}
	}
	hits.sort((a, b) => (b.meta.title || "").localeCompare(a.meta.title || ""));
	return hits;
};

// 在客户端获取 URL 参数
const getInitialKeyword = (): string => {
	if (typeof window !== "undefined") {
		const searchParams = new URLSearchParams(window.location.search);
		return searchParams.get("q") || "";
	}
	return "";
};

// --- Mocks for Dev Mode ---
const fakeResult: SearchResult[] = [
	{
		url: formatUrl("/"),
		meta: { title: "Dev Mode Search Result 1" },
		excerpt: "This is a <mark>mock</mark> result for development.",
	},
	{
		url: formatUrl("/"),
		meta: { title: "Dev Mode Search Result 2" },
		excerpt: "Pagefind only works in <mark>production</mark> build.",
	},
];

// --- Core Search Logic ---
const search = async () => {
	if (!initialized || !keyword.trim()) {
		results = [];
		return;
	}
	isSearching = true;

	try {
		const postResults: SearchResult[] = [];
		if (import.meta.env.PROD && window.pagefind) {
			const response = await window.pagefind.search(keyword);
			const rawResults = await Promise.all(
				response.results.map((item) => item.data()),
			);
			postResults.push(...rawResults);
		} else if (import.meta.env.DEV) {
			postResults.push(
				...fakeResult.filter(
					(item) =>
						item.excerpt.toLowerCase().includes(keyword.toLowerCase()) ||
						item.meta.title.toLowerCase().includes(keyword.toLowerCase()),
				),
			);
		}

		const dynamicResults = await searchDynamics(keyword);
		results = [...postResults, ...dynamicResults];
	} catch (error) {
		console.error("Search error:", error);
		results = [];
	} finally {
		isSearching = false;
	}
};

// --- Initialization onMount ---
onMount(() => {
	const initialize = async () => {
		initialized = true;

		// 预热日记索引（不阻塞 UI）
		loadDynamics().catch(() => {});

		// 从 URL 获取初始关键词
		const initialKeyword = getInitialKeyword();
		if (initialKeyword) {
			keyword = initialKeyword;
		}

		// 如果有关键词，自动执行搜索
		if (keyword.trim()) {
			await search();
		}
	};

	// 开发环境直接初始化
	if (import.meta.env.DEV) {
		initialize();
	} else {
		// 生产环境等待 Pagefind 加载
		if (window.pagefind) {
			initialize();
		} else {
			document.addEventListener("pagefindready", initialize, {
				once: true,
			});
		}
	}
});

let debounceTimer: NodeJS.Timeout;
const handleInput = () => {
	clearTimeout(debounceTimer);
	debounceTimer = setTimeout(() => {
		search();
	}, 300);
};

const isDynamicResult = (result: SearchResult): boolean => {
	const url = (result.url || "").toLowerCase();
	return url.startsWith("/dynamic/") || url.includes("/dynamic#");
};
</script>

<div class="card-base px-6 py-6 md:px-9 md:py-6 mb-4 rounded-(--radius-large)">
    <!-- Title Section -->
    <div class="mb-4">
        <div class="flex items-center gap-3 mb-3">
            <div class="h-8 w-8 rounded-lg bg-(--primary) flex items-center justify-center text-white dark:text-black/70">
                <Icon icon="material-symbols:search" class="text-[1.5rem]"></Icon>
            </div>
            <div class="text-3xl font-bold text-90">
                {title}
            </div>
        </div>
        {#if description}
            <p class="text-base text-50 leading-relaxed">
                {description}
            </p>
        {/if}
    </div>

    <!-- Search Bar -->
    <div class="relative flex">
        <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon icon="material-symbols:search" class="text-2xl text-50" />
            </div>
            <input
                type="text"
                class="block w-full p-4 pl-10 text-sm bg-transparent border border-black/10 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-(--primary) focus:border-(--primary) hover:border-black/20 dark:hover:border-white/20 text-75 placeholder:opacity-50 transition-colors outline-hidden"
                placeholder={i18n(I18nKey.search)}
                bind:value={keyword}
                on:input={handleInput}
            >
        </div>
    </div>
</div>

<div class="grid grid-cols-1 gap-4">
    <!-- Results Area -->
    <div>
        {#if isSearching}
            <div class="flex justify-center py-10">
                <Icon icon="svg-spinners:ring-resize" class="text-4xl text-(--primary)" />
            </div>
        {:else if results.length > 0}
            <div class="space-y-4">
                {#each results as result}
                    <div class="card-base p-6 block rounded-(--radius-large)">
                        <a href={result.url} class="block group">
                            <div class="flex items-center gap-2 mb-2">
                                <h5 class="text-2xl font-bold tracking-tight text-90 group-hover:text-(--primary) transition-colors">
                                    {@html result.meta.title}
                                </h5>
                                {#if isDynamicResult(result)}
                                    <span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-(--primary)/10 text-(--primary)">
                                        <Icon icon="material-symbols:forum-rounded" class="text-[0.95rem]" />
                                        {i18n(I18nKey.dynamic)}
                                    </span>
                                {:else}
                                    <span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-50">
                                        <Icon icon="material-symbols:article-rounded" class="text-[0.95rem]" />
                                        {i18n(I18nKey.posts)}
                                    </span>
                                {/if}
                            </div>
                            <p class="font-normal text-75">
                                {@html result.excerpt}
                            </p>
                        </a>
                    </div>
                {/each}
            </div>
        {:else if keyword}
            <div class="card-base p-10 text-center text-50 rounded-(--radius-large)">
                {i18n(I18nKey.searchNoResults)}
            </div>
        {:else}
             <div class="card-base p-10 text-center text-50 rounded-(--radius-large)">
                {i18n(I18nKey.searchTypeSomething)}
            </div>
        {/if}
    </div>
</div>

<style>
    /* 关键字高亮效果 - 主题色 */
    :global(mark) {
        background: transparent;
        color: var(--primary);
        font-weight: 600;
        padding: 0 0.1em;
    }
</style>