// Mineradio API 配置
// 如果后端和个人主页同域部署，保持空字符串即可。
// 如果后端单独运行，请改成后端地址，例如：http://127.0.0.1:3000
window.MINERADIO_API_BASE = window.MINERADIO_API_BASE || "";
// 如果后端依赖登录 Cookie，可以改成：{ credentials: "include" }
window.MINERADIO_API_FETCH_OPTIONS = window.MINERADIO_API_FETCH_OPTIONS || {};

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
