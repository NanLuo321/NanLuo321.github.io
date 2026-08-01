// Mineradio API 配置
// 网易云接口由 scripts/mineradio-netease-api.cjs 提供。
// 启动方式：pnpm mineradio-api
window.MINERADIO_API_BASE = window.MINERADIO_API_BASE || "http://127.0.0.1:3300";
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
    var base = cleanBase(window.MINERADIO_API_BASE);
    return base ? base + apiPath : apiPath;
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
