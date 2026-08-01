const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

function loadNeteaseApi() {
	try {
		return require("NeteaseCloudMusicApi");
	} catch (rootError) {
		const runtimePath = path.join(__dirname, "mineradio-api-runtime", "node_modules", "NeteaseCloudMusicApi");
		try {
			return require(runtimePath);
		} catch (_) {
			throw rootError;
		}
	}
}

const {
	cloudsearch,
	song_detail,
	song_url,
	song_url_v1,
	login_qr_key,
	login_qr_create,
	login_qr_check,
	login_status,
	logout,
	lyric,
	lyric_new,
	user_playlist,
	playlist_detail,
	playlist_track_all,
	recommend_resource,
	recommend_songs,
	personalized,
} = loadNeteaseApi();

const HOST = process.env.MINERADIO_API_HOST || "127.0.0.1";
const PORT = Number(process.env.MINERADIO_API_PORT || 3300);
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, ".mineradio-api");
const COOKIE_FILE = path.join(DATA_DIR, "netease.cookie");
const UA =
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";

let userCookie = loadCookie();

function ensureDataDir() {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadCookie() {
	try {
		return fs.readFileSync(COOKIE_FILE, "utf8").trim();
	} catch (_) {
		return "";
	}
}

function saveCookie(cookie) {
	userCookie = normalizeCookieHeader(cookie);
	ensureDataDir();
	if (userCookie) fs.writeFileSync(COOKIE_FILE, userCookie, "utf8");
	else if (fs.existsSync(COOKIE_FILE)) fs.unlinkSync(COOKIE_FILE);
}

function normalizeCookieHeader(value) {
	if (!value) return "";
	if (Array.isArray(value)) {
		return value
			.map((item) => String(item || "").split(";")[0].trim())
			.filter(Boolean)
			.join("; ");
	}
	return String(value)
		.split(/\r?\n|,(?=\s*[^;,=\s]+=[^;,]+)/)
		.map((item) => item.split(";")[0].trim())
		.filter(Boolean)
		.join("; ");
}

function parseCookieString(cookie) {
	const out = {};
	String(cookie || "")
		.split(";")
		.forEach((part) => {
			const index = part.indexOf("=");
			if (index <= 0) return;
			out[part.slice(0, index).trim()] = part.slice(index + 1).trim();
		});
	return out;
}

function readCookieFromResponse(result) {
	return normalizeCookieHeader(
		(result && (result.cookie || result.cookies)) ||
			(result && result.body && (result.body.cookie || result.body.cookies)) ||
			(result && result.body && result.body.data && (result.body.data.cookie || result.body.data.cookies)) ||
			"",
	);
}

function corsHeaders(req) {
	const origin = req.headers.origin || "*";
	return {
		"Access-Control-Allow-Origin": origin,
		"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type,Authorization",
		"Access-Control-Allow-Credentials": "true",
		Vary: "Origin",
	};
}

function sendJSON(req, res, data, status = 200) {
	res.writeHead(status, {
		...corsHeaders(req),
		"Content-Type": "application/json; charset=utf-8",
		"Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
		Pragma: "no-cache",
		Expires: "0",
	});
	res.end(JSON.stringify(data));
}

function sendText(req, res, text, status = 200, type = "text/plain; charset=utf-8") {
	res.writeHead(status, {
		...corsHeaders(req),
		"Content-Type": type,
		"Cache-Control": "no-store",
	});
	res.end(text);
}

async function readRequestBody(req) {
	const chunks = [];
	for await (const chunk of req) chunks.push(chunk);
	const raw = Buffer.concat(chunks).toString("utf8");
	if (!raw) return {};
	const type = req.headers["content-type"] || "";
	if (type.includes("application/json")) {
		try {
			return JSON.parse(raw);
		} catch (_) {
			return {};
		}
	}
	return Object.fromEntries(new URLSearchParams(raw));
}

function mapArtists(raw) {
	return (Array.isArray(raw) ? raw : [])
		.map((artist) => ({ id: artist && artist.id, name: (artist && artist.name) || "" }))
		.filter((artist) => artist.name);
}

function mapSongRecord(song) {
	const s = song || {};
	const artists = mapArtists(s.ar || s.artists);
	const album = s.al || s.album || {};
	return {
		provider: "netease",
		source: "netease",
		type: "song",
		id: s.id,
		name: s.name || "",
		artist: artists.map((artist) => artist.name).join(" / "),
		artists,
		artistId: artists[0] && artists[0].id,
		album: album.name || "",
		albumId: album.id || "",
		cover: album.picUrl || album.coverUrl || "",
		duration: s.dt || s.duration || 0,
		popularity: Number(s.pop || s.popularity || s.score || 0) || 0,
		fee: s.fee,
	};
}

function mapPlaylist(playlist) {
	const item = playlist || {};
	const creator = item.creator || item.user || {};
	return {
		provider: "netease",
		source: "netease",
		type: "playlist",
		id: item.id,
		name: item.name || item.title || "",
		cover: item.picUrl || item.coverImgUrl || item.coverUrl || "",
		trackCount: item.trackCount || item.songCount || 0,
		playCount: item.playCount || item.playcount || 0,
		creator: creator.nickname || creator.name || "",
	};
}

async function handleSearch(url) {
	const keywords = url.searchParams.get("keywords") || "";
	const limit = Math.max(1, Math.min(50, Number(url.searchParams.get("limit") || 20) || 20));
	const offset = Math.max(0, Number(url.searchParams.get("offset") || 0) || 0);
	if (!keywords.trim()) return { songs: [], offset, limit, nextOffset: offset, hasMore: false };
	const result = await cloudsearch({ keywords, type: 1, limit, offset, cookie: userCookie, timestamp: Date.now() });
	const rawSongs = (result.body && result.body.result && result.body.result.songs) || [];
	let songs = rawSongs.map(mapSongRecord).filter((song) => song.id);
	const missingCoverIds = songs.filter((song) => !song.cover).map((song) => song.id);
	if (missingCoverIds.length) {
		try {
			const detail = await song_detail({ ids: missingCoverIds.join(","), cookie: userCookie, timestamp: Date.now() });
			const picById = new Map();
			for (const item of (detail.body && detail.body.songs) || []) {
				const pic = item && item.al && item.al.picUrl;
				if (item && item.id && pic) picById.set(item.id, pic);
			}
			songs = songs.map((song) => (song.cover ? song : { ...song, cover: picById.get(song.id) || "" }));
		} catch (_) {}
	}
	return { songs, offset, limit, nextOffset: offset + songs.length, hasMore: songs.length >= limit };
}

function normalizeQuality(value) {
	const q = String(value || "").toLowerCase();
	if (["jymaster", "master", "sky"].includes(q)) return "jymaster";
	if (["hires", "hi-res", "highres"].includes(q)) return "hires";
	if (["lossless", "flac", "sq"].includes(q)) return "lossless";
	if (["exhigh", "high", "320k", "hq"].includes(q)) return "exhigh";
	if (["standard", "normal", "128k"].includes(q)) return "standard";
	return "exhigh";
}

async function handleSongUrl(url) {
	const id = url.searchParams.get("id");
	const level = normalizeQuality(url.searchParams.get("quality") || url.searchParams.get("level"));
	if (!id) return { error: "Missing song id", url: "" };
	let body = {};
	try {
		const result = await song_url_v1({ id, level, cookie: userCookie, timestamp: Date.now() });
		body = result.body || {};
	} catch (_) {
		const result = await song_url({ id, br: level === "standard" ? 128000 : 320000, cookie: userCookie, timestamp: Date.now() });
		body = result.body || {};
	}
	const data = Array.isArray(body.data) ? body.data[0] : null;
	if (!data || !data.url) {
		return {
			provider: "netease",
			source: "netease",
			id,
			url: "",
			restricted: true,
			category: userCookie ? "url_unavailable" : "login_required",
			message: userCookie ? "网易云没有返回可播放地址，可能是版权、会员或地区限制" : "网易云需要登录后获取完整播放地址",
			code: data && data.code,
			fee: data && data.fee,
		};
	}
	return {
		provider: "netease",
		source: "netease",
		id,
		url: data.url,
		br: data.br,
		size: data.size,
		md5: data.md5,
		level: data.level || level,
		type: data.type,
		time: data.time,
		code: data.code,
		fee: data.fee,
	};
}

function normalizeLoginInfoFromProfile(profile, account, extra) {
	const p = profile || {};
	const a = account || {};
	const userId = p.userId || a.id || a.userId || "";
	const vipType = Number(p.vipType || p.redVipLevel || (extra && extra.vipType) || 0) || 0;
	const loggedIn = !!(userId || p.nickname || userCookie);
	return {
		loggedIn,
		userId,
		nickname: p.nickname || (loggedIn ? "网易云用户" : ""),
		avatar: p.avatarUrl || "",
		vipType,
		vipLevel: vipType > 0 ? "vip" : "none",
		isVip: vipType > 0,
		isSvip: vipType > 10,
		vipLabel: vipType > 10 ? "黑胶 SVIP" : vipType > 0 ? "黑胶 VIP" : "无VIP",
		hasCookie: !!userCookie,
	};
}

async function getLoginInfo() {
	if (!userCookie) {
		return { loggedIn: false, vipType: 0, vipLevel: "none", isVip: false, isSvip: false, vipLabel: "无VIP", hasCookie: false };
	}
	try {
		const result = await login_status({ cookie: userCookie, timestamp: Date.now() });
		const data = result.body && result.body.data;
		const info = normalizeLoginInfoFromProfile(data && data.profile, data && data.account, data);
		info.rawCode = result.body && result.body.code;
		return info;
	} catch (err) {
		return {
			loggedIn: true,
			pendingProfile: true,
			nickname: "网易云用户",
			avatar: "",
			vipType: 0,
			vipLevel: "none",
			isVip: false,
			isSvip: false,
			vipLabel: "无VIP",
			hasCookie: true,
			warning: err.message,
		};
	}
}

async function handleQrCheck(url) {
	const key = url.searchParams.get("key");
	if (!key) return { error: "Missing QR key", code: 400 };
	let result = await login_qr_check({ key, noCookie: true, timestamp: Date.now() });
	let body = result.body || {};
	let cookie = readCookieFromResponse(result);
	if (Number(body.code) === 803 && !cookie) {
		try {
			result = await login_qr_check({ key, timestamp: Date.now() });
			body = result.body || body;
			cookie = readCookieFromResponse(result);
		} catch (_) {}
	}
	if (Number(body.code) === 803 && cookie) saveCookie(cookie);
	const info = Number(body.code) === 803 ? await getLoginInfo() : {};
	return {
		code: Number(body.code || result.code || 0),
		message: body.message || result.message || "",
		nickname: body.nickname || (body.profile && body.profile.nickname),
		avatar: body.avatarUrl || (body.profile && body.profile.avatarUrl),
		hasCookie: !!cookie || !!userCookie,
		...info,
	};
}

async function handleLyric(url) {
	const id = url.searchParams.get("id");
	if (!id) return { error: "Missing song id", lyric: "" };
	let body = {};
	let source = "lyric";
	try {
		const result = await lyric_new({ id, cookie: userCookie, timestamp: Date.now() });
		body = result.body || {};
		source = "lyric_new";
	} catch (_) {
		const result = await lyric({ id, cookie: userCookie, timestamp: Date.now() });
		body = result.body || {};
	}
	return {
		lyric: (body.lrc && body.lrc.lyric) || "",
		tlyric: (body.tlyric && body.tlyric.lyric) || "",
		yrc: (body.yrc && body.yrc.lyric) || "",
		ytlrc: (body.ytlrc && body.ytlrc.lyric) || "",
		romalrc: (body.romalrc && body.romalrc.lyric) || "",
		yromalrc: (body.yromalrc && body.yromalrc.lyric) || "",
		source,
	};
}

async function proxyStream(req, res, targetUrl, fallbackType) {
	if (!targetUrl || !/^https?:\/\//i.test(targetUrl)) {
		sendText(req, res, "Invalid url", 400);
		return;
	}
	const headers = { "User-Agent": UA, Referer: "https://music.163.com/" };
	if (req.headers.range) headers.Range = req.headers.range;
	const upstream = await fetch(targetUrl, { headers });
	const outHeaders = {
		...corsHeaders(req),
		"Content-Type": upstream.headers.get("content-type") || fallbackType,
		"Cache-Control": "public, max-age=86400",
		"Accept-Ranges": "bytes",
	};
	for (const key of ["content-length", "content-range"]) {
		const value = upstream.headers.get(key);
		if (value) outHeaders[key.replace(/(^|-)([a-z])/g, (m) => m.toUpperCase())] = value;
	}
	res.writeHead(upstream.status, outHeaders);
	if (!upstream.body) {
		res.end();
		return;
	}
	for await (const chunk of upstream.body) res.write(chunk);
	res.end();
}

async function route(req, res) {
	if (req.method === "OPTIONS") {
		res.writeHead(204, corsHeaders(req));
		res.end();
		return;
	}

	const url = new URL(req.url, `http://${req.headers.host || `${HOST}:${PORT}`}`);
	const pn = url.pathname;

	try {
		if (pn === "/api/health") {
			sendJSON(req, res, { ok: true, provider: "netease", loggedIn: !!userCookie });
			return;
		}

		if (pn === "/api/search") {
			sendJSON(req, res, await handleSearch(url));
			return;
		}

		if (pn === "/api/song/url") {
			sendJSON(req, res, { ...(await handleSongUrl(url)), ...(await getLoginInfo()) });
			return;
		}

		if (pn === "/api/lyric") {
			sendJSON(req, res, await handleLyric(url));
			return;
		}

		if (pn === "/api/login/qr/key") {
			const result = await login_qr_key({ timestamp: Date.now() });
			sendJSON(req, res, { key: result.body && result.body.data && result.body.data.unikey });
			return;
		}

		if (pn === "/api/login/qr/create") {
			const key = url.searchParams.get("key");
			const result = await login_qr_create({ key, qrimg: true, timestamp: Date.now() });
			const data = result.body && result.body.data;
			sendJSON(req, res, { img: data && data.qrimg, url: data && data.qrurl });
			return;
		}

		if (pn === "/api/login/qr/check") {
			sendJSON(req, res, await handleQrCheck(url));
			return;
		}

		if (pn === "/api/login/cookie" && req.method === "POST") {
			const body = await readRequestBody(req);
			const cookie = normalizeCookieHeader(body.cookie || body.data || body.text || "");
			const parsed = parseCookieString(cookie);
			if (!parsed.MUSIC_U) {
				sendJSON(req, res, { loggedIn: false, error: "INVALID_NETEASE_COOKIE", message: "网易云 Cookie 缺少 MUSIC_U" }, 400);
				return;
			}
			saveCookie(cookie);
			sendJSON(req, res, { ...(await getLoginInfo()), saved: true, hasCookie: true });
			return;
		}

		if (pn === "/api/login/status") {
			sendJSON(req, res, await getLoginInfo());
			return;
		}

		if (pn === "/api/logout") {
			try {
				if (userCookie) await logout({ cookie: userCookie, timestamp: Date.now() });
			} catch (_) {}
			saveCookie("");
			sendJSON(req, res, { ok: true, loggedIn: false });
			return;
		}

		if (pn === "/api/user/playlists") {
			const info = await getLoginInfo();
			if (!info.loggedIn || !info.userId) {
				sendJSON(req, res, { loggedIn: false, playlists: [] });
				return;
			}
			const limit = Math.max(1, Math.min(1000, Number(url.searchParams.get("limit") || 100) || 100));
			const offset = Math.max(0, Number(url.searchParams.get("offset") || 0) || 0);
			const result = await user_playlist({ uid: info.userId, limit, offset, cookie: userCookie, timestamp: Date.now() });
			const playlists = ((result.body && result.body.playlist) || []).map(mapPlaylist);
			sendJSON(req, res, { loggedIn: true, userId: info.userId, playlists, offset, limit, hasMore: playlists.length >= limit });
			return;
		}

		if (pn === "/api/playlist/tracks") {
			const id = url.searchParams.get("id");
			const limit = Math.max(1, Math.min(1000, Number(url.searchParams.get("limit") || 100) || 100));
			const offset = Math.max(0, Number(url.searchParams.get("offset") || 0) || 0);
			if (!id) {
				sendJSON(req, res, { error: "Missing playlist id", tracks: [] }, 400);
				return;
			}
			let playlist = { id, name: "", cover: "", trackCount: 0 };
			let tracks = [];
			try {
				const result = await playlist_track_all({ id, limit, offset, cookie: userCookie, timestamp: Date.now() });
				tracks = ((result.body && result.body.songs) || []).map(mapSongRecord);
			} catch (_) {
				const result = await playlist_detail({ id, cookie: userCookie, timestamp: Date.now() });
				const detail = result.body && result.body.playlist;
				playlist = mapPlaylist(detail);
				tracks = ((detail && detail.tracks) || []).slice(offset, offset + limit).map(mapSongRecord);
			}
			sendJSON(req, res, { playlist, tracks, offset, limit, nextOffset: offset + tracks.length, hasMore: tracks.length >= limit });
			return;
		}

		if (pn === "/api/discover/home") {
			const sections = [];
			try {
				const r = await personalized({ limit: 12, cookie: userCookie, timestamp: Date.now() });
				sections.push({ id: "netease-playlists", title: "网易云推荐歌单", playlists: ((r.body && r.body.result) || []).map(mapPlaylist) });
			} catch (_) {}
			try {
				const r = userCookie ? await recommend_songs({ cookie: userCookie, timestamp: Date.now() }) : await recommend_resource({ cookie: userCookie, timestamp: Date.now() });
				const songs = ((r.body && r.body.data && r.body.data.dailySongs) || (r.body && r.body.recommend) || []).map(mapSongRecord);
				if (songs.length) sections.push({ id: "netease-songs", title: "网易云每日推荐", songs });
			} catch (_) {}
			sendJSON(req, res, { provider: "netease", sections });
			return;
		}

		if (pn === "/api/cover") {
			await proxyStream(req, res, url.searchParams.get("url"), "image/jpeg");
			return;
		}

		if (pn === "/api/audio") {
			await proxyStream(req, res, url.searchParams.get("url"), "audio/mpeg");
			return;
		}

		sendJSON(req, res, { error: "NOT_FOUND", message: `Mineradio 网易云 API 未实现：${pn}` }, 404);
	} catch (err) {
		console.error("[MineradioNeteaseApi]", pn, err);
		sendJSON(req, res, { error: err.message || String(err) }, 500);
	}
}

const server = http.createServer(route);

server.listen(PORT, HOST, () => {
	console.log("======================================================");
	console.log(` Mineradio 网易云 API → http://${HOST}:${PORT}`);
	console.log(` 登录态: ${userCookie ? "已加载 Cookie" : "未登录"}`);
	console.log(" 在另一个终端运行 pnpm dev，然后打开 /mineradio-app/");
	console.log("======================================================");
});
