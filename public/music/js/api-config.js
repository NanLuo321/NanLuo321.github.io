// Mineradio API 配置
// 网易云接口使用公开 API 服务。
window.MINERADIO_API_BASE = window.MINERADIO_API_BASE || "https://music-api.jerry-nis.top";
window.MINERADIO_API_STRIP_PREFIX = window.MINERADIO_API_STRIP_PREFIX || "/api";
window.MINERADIO_NETEASE_COOKIE_KEY = window.MINERADIO_NETEASE_COOKIE_KEY || "mineradio-netease-cookie-v1";
window.MINERADIO_API_FETCH_OPTIONS = window.MINERADIO_API_FETCH_OPTIONS || { credentials: "include" };

(function initMineradioApiBase() {
  function cleanBase(base) {
    return String(base || "").trim().replace(/\/+$/, "");
  }

  function apiPathFromUrl(value) {
    if (typeof value !== "string") return "";
    if (value.indexOf("/api/") === 0) return value;
    try {
      var parsed = new URL(value, window.location.origin);
      return parsed.pathname.indexOf("/api/") === 0 ? parsed.pathname + parsed.search + parsed.hash : "";
    } catch (e) {
      return "";
    }
  }

  function isApiPath(value) {
    return !!apiPathFromUrl(value);
  }

  function resolveApiUrl(value) {
    var apiPath = apiPathFromUrl(value);
    if (!apiPath) return value;
    var stripPrefix = cleanBase(window.MINERADIO_API_STRIP_PREFIX);
    if (stripPrefix && apiPath.indexOf(stripPrefix + "/") === 0) {
      apiPath = apiPath.slice(stripPrefix.length) || "/";
    }
    apiPath = normalizeNeteasePlaybackPath(apiPath);
    apiPath = appendNeteaseCookie(apiPath);
    var base = cleanBase(window.MINERADIO_API_BASE);
    return base ? base + apiPath : apiPath;
  }

  function normalizeNeteasePlaybackPath(apiPath) {
    try {
      var parsed = new URL(apiPath, window.location.origin);
      if (parsed.pathname !== "/song/url") return apiPath;
      parsed.pathname = "/song/url/v1";
      if (parsed.searchParams.has("quality") && !parsed.searchParams.has("level")) {
        parsed.searchParams.set("level", parsed.searchParams.get("quality") || "exhigh");
      }
      parsed.searchParams.delete("quality");
      return parsed.pathname + parsed.search + parsed.hash;
    } catch (e) {
      return apiPath;
    }
  }

  function shouldAppendNeteaseCookie(pathname) {
    if (!pathname || pathname.indexOf("/login/qr/") === 0) return false;
    if (pathname === "/search" || pathname.indexOf("/search/") === 0) return false;
    if (pathname.indexOf("/qq/") === 0 || pathname.indexOf("/kugou/") === 0 || pathname.indexOf("/qishui/") === 0 || pathname.indexOf("/spotify/") === 0) return false;
    return true;
  }

  function appendNeteaseCookie(apiPath) {
    try {
      var cookie = localStorage.getItem(window.MINERADIO_NETEASE_COOKIE_KEY || "mineradio-netease-cookie-v1");
      if (!cookie) return apiPath;
      var parsed = new URL(apiPath, window.location.origin);
      if (!shouldAppendNeteaseCookie(parsed.pathname) || parsed.searchParams.has("cookie")) return apiPath;
      parsed.searchParams.set("cookie", cookie);
      return parsed.pathname + parsed.search + parsed.hash;
    } catch (e) {
      return apiPath;
    }
  }

  function mergeApiFetchOptions(init) {
    return Object.assign({}, window.MINERADIO_API_FETCH_OPTIONS || {}, init || {});
  }

  window.resolveMineradioApiUrl = resolveApiUrl;

  if (typeof window.fetch !== "function" || window.__mineradioFetchPatched) return;
  var nativeFetch = window.fetch.bind(window);
  window.__mineradioFetchPatched = true;

  window.fetch = function mineradioFetch(input, init) {
    if (typeof input === "string") {
      return nativeFetch(resolveApiUrl(input), isApiPath(input) ? mergeApiFetchOptions(init) : init);
    }

    if (input && typeof Request !== "undefined" && input instanceof Request && isApiPath(input.url)) {
      return nativeFetch(new Request(resolveApiUrl(input.url), input), mergeApiFetchOptions(init));
    }

    return nativeFetch(input, init);
  };
})();
