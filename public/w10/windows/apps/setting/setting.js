// ===== 页面导航 =====
var pages = document.querySelectorAll('.page');
function showPage(path) {
  pages.forEach(function (p) { p.style.display = 'none'; });
  var target = document.querySelector('.page[path="' + path + '"]');
  if (target) target.style.display = 'block';
}
document.querySelectorAll('.setting-item[data-go]').forEach(function (e) {
  e.onclick = function () { showPage(this.getAttribute('data-go')); };
});
document.querySelectorAll('.fh, .home').forEach(function (e) {
  e.onclick = function () { showPage('/index'); };
});
// 侧边栏 tab 切换
document.querySelectorAll('.celan .list li').forEach(function (li) {
  li.onclick = function () {
    var page = li.closest('.page');
    page.querySelectorAll('.celan .list li').forEach(function (x) { x.classList.remove('active'); });
    li.classList.add('active');
    page.querySelectorAll('.se-content').forEach(function (c) { c.style.display = 'none'; });
    var se = page.querySelector('.se-content[data-id="' + li.getAttribute('data-se') + '"]');
    if (se) se.style.display = 'block';
  };
});
// 初始化：只显示当前激活的 se-content
document.querySelectorAll('.page .celan').forEach(function (celan) {
  var page = celan.closest('.page');
  var activeLi = celan.querySelector('.list li.active') || celan.querySelector('.list li');
  if (activeLi) activeLi.click();
});
// 页内跳转链接
document.querySelectorAll('[data-goto]').forEach(function (a) {
  a.onclick = function () { showPage(this.getAttribute('data-goto')); };
});

// ===== 主题 =====
var themeCards = document.querySelectorAll('.theme-card');
var savedTheme = localStorage.getItem('w10_theme') || 'light';
themeCards.forEach(function (c) {
  if (c.getAttribute('data-theme') == savedTheme) c.classList.add('on');
  c.onclick = function () {
    themeCards.forEach(function (x) { x.classList.remove('on'); });
    c.classList.add('on');
    localStorage.setItem('w10_theme', c.getAttribute('data-theme'));
    applyThemeToParent();
  };
});
function applyThemeToParent() {
  try {
    var theme = localStorage.getItem('w10_theme');
    var pd = parent.document;
    var ov = pd.getElementById('w10-theme-overlay');
    if (theme == 'dark') {
      if (!ov) {
        ov = pd.createElement('div');
        ov.id = 'w10-theme-overlay';
        var desk = pd.querySelector('.desk');
        if (desk) desk.append(ov);
      }
      ov.style.cssText = 'position:absolute;left:0;top:0;right:0;bottom:0;background:#0007;pointer-events:none;';
    } else if (ov) {
      ov.remove();
    }
  } catch (err) { }
}

// ===== 背景颜色 =====
var bgColors = ['#0078d7', '#1e1e1e', '#2d7d9a', '#3a7d44', '#8b5a2b', '#7a3e3e', '#5a4a7a', '#c0504d', '#4a90d9', '#7d3a5a', '#2f6f4f', '#000000'];
var bgWrap = document.getElementById('bgColors');
if (bgWrap) {
  var savedBg = localStorage.getItem('w10_bgcolor');
  function markBg() {
    bgWrap.querySelectorAll('.bg-color').forEach(function (x) { x.classList.remove('on'); });
    var sb = localStorage.getItem('w10_bgcolor');
    bgWrap.querySelectorAll('.bg-color').forEach(function (x) {
      if (sb && x.style.background == sb) x.classList.add('on');
      if (!sb && x.getAttribute('data-kind') == 'default') x.classList.add('on');
    });
  }
  function applyBgToParent() {
    try {
      var w = localStorage.getItem('w10_wallpaper');
      var bg = localStorage.getItem('w10_bgcolor');
      var pb = parent.document.body;
      if (w) {
        pb.style.backgroundImage = 'url("' + w + '")';
        pb.style.backgroundSize = 'cover';
        pb.style.backgroundPosition = 'center center';
      } else if (bg) {
        pb.style.backgroundImage = 'none';
        pb.style.backgroundColor = bg;
      } else {
        pb.style.backgroundImage = '';
        pb.style.backgroundColor = '';
      }
    } catch (err) { }
  }
  // 默认壁纸色块
  var dft = document.createElement('div');
  dft.className = 'bg-color';
  dft.setAttribute('data-kind', 'default');
  dft.title = '默认壁纸';
  dft.style.background = 'linear-gradient(135deg,#1a5a9a,#6ab0e0)';
  dft.onclick = function () {
    localStorage.removeItem('w10_bgcolor');
    localStorage.removeItem('w10_wallpaper');
    markBg();
    applyBgToParent();
    syncWallpaperStatus();
  };
  bgWrap.append(dft);
  // 颜色色块
  bgColors.forEach(function (c) {
    var d = document.createElement('div');
    d.className = 'bg-color';
    d.style.background = c;
    d.title = c;
    d.onclick = function () {
      localStorage.setItem('w10_bgcolor', c);
      localStorage.removeItem('w10_wallpaper');
      markBg();
      applyBgToParent();
      syncWallpaperStatus();
    };
    bgWrap.append(d);
  });
  markBg();
}

// ===== 自定义壁纸 =====
function syncWallpaperStatus() {
  var st = document.getElementById('wpStatus');
  if (!st) return;
  st.innerText = localStorage.getItem('w10_wallpaper') ? '已使用自定义壁纸' : '支持 JPG / PNG 等图片格式，上传后立即生效';
}
function applyWallpaperToParent() {
  try {
    var w = localStorage.getItem('w10_wallpaper');
    var pb = parent.document.body;
    if (w) {
      pb.style.backgroundImage = 'url("' + w + '")';
      pb.style.backgroundSize = 'cover';
      pb.style.backgroundPosition = 'center center';
    } else {
      var bg = localStorage.getItem('w10_bgcolor');
      if (bg) {
        pb.style.backgroundImage = 'none';
        pb.style.backgroundColor = bg;
      } else {
        pb.style.backgroundImage = '';
        pb.style.backgroundColor = '';
      }
    }
  } catch (err) { }
}
var wpFile = document.getElementById('wpFile');
if (wpFile) {
  document.getElementById('wpUploadBtn').onclick = function () { wpFile.click(); };
  wpFile.onchange = function () {
    var file = wpFile.files[0];
    if (!file) return;
    if (!/^image\//.test(file.type)) return;
    var rd = new FileReader();
    rd.onload = function () {
      localStorage.setItem('w10_wallpaper', rd.result);
      localStorage.removeItem('w10_bgcolor');
      markBg();
      applyWallpaperToParent();
      syncWallpaperStatus();
    };
    rd.readAsDataURL(file);
  };
  document.getElementById('wpRemoveBtn').onclick = function () {
    localStorage.removeItem('w10_wallpaper');
    applyWallpaperToParent();
    syncWallpaperStatus();
  };
  syncWallpaperStatus();
}

// ===== 分辨率 =====
var resSel = document.getElementById('resSel');
if (resSel) {
  var savedRes = localStorage.getItem('w10_resolution');
  if (savedRes) resSel.value = savedRes;
  resSel.onchange = function () {
    try { if (parent.requestResolution) parent.requestResolution(resSel.value); } catch (err) { }
  };
  // 被桌面端“恢复原来的显示”时同步下拉框
  window.addEventListener('storage', function (e) {
    if (e.key == 'w10_resolution') resSel.value = e.newValue || resSel.value;
  });
}

// ===== 缩放 =====
var scaleSel = document.getElementById('scaleSel');
if (scaleSel) {
  var savedScale = localStorage.getItem('w10_scale');
  if (savedScale) scaleSel.value = savedScale;
  scaleSel.onchange = function () {
    localStorage.setItem('w10_scale', scaleSel.value);
    try { if (parent.applyDisplay) parent.applyDisplay(); } catch (err) { }
  };
}

// ===== 音量 =====
function updateVolRangeUI(v) {
  var r1 = document.getElementById('volRange');
  if (!r1) return;
  var pct = v / 100;
  var r2 = r1.querySelector('span.r2');
  var r3 = r1.querySelector('span.r3');
  if (r2) r2.style.width = 'calc((100% - 8px) * ' + pct + ')';
  if (r3) r3.style.left = 'calc((100% - 8px) * ' + pct + ')';
  var vv = document.getElementById('volVal');
  if (vv) vv.innerText = Math.round(v);
}
function volChange(t) {
  var val = Math.round(t.value);
  localStorage.setItem('w10_volume', val);
  updateVolRangeUI(val);
  try {
    var pd = parent.document;
    var frame = pd.querySelector('.sound-frame .win-range');
    if (frame) {
      frame.setAttribute('data-value', val);
      var r2 = frame.querySelector('span.r2');
      var r3 = frame.querySelector('span.r3');
      if (r2) r2.style.width = 'calc((100% - 8px) * ' + (val / 100) + ')';
      if (r3) r3.style.left = 'calc((100% - 8px) * ' + (val / 100) + ')';
      var sd = pd.querySelector('.sound-frame .sound-data');
      if (sd) sd.innerText = val;
    }
    var img = pd.querySelector('.bar .right .sound img');
    if (img) img.src = '../../img/icon/ui/audio' + (val == 0 ? 0 : val <= 33 ? 1 : val <= 66 ? 2 : 3) + '.png';
  } catch (err) { }
}
function volMuteChange(muted) {
  var range = document.getElementById('volRange');
  var v = muted ? 0 : (parseInt(localStorage.getItem('w10_volume')) || 70);
  if (range) range.setAttribute('data-value', v);
  updateVolRangeUI(v);
  volChange({ value: v });
}
var savedVol = parseInt(localStorage.getItem('w10_volume'));
if (isNaN(savedVol)) savedVol = 70;
var volRange = document.getElementById('volRange');
if (volRange) {
  volRange.setAttribute('data-value', savedVol);
  updateVolRangeUI(savedVol);
  volChange({ value: savedVol });
}

// ===== 开关组件（win-check2，带持久化）=====
document.querySelectorAll('.win-check2').forEach(function (e) {
  var key = e.getAttribute('data-store');
  if (key && localStorage.getItem(key) == '1') e.classList.add('checked');
  function render() {
    e.querySelector('.statu').innerHTML = e.classList.contains('checked') ? '开' : '关';
    if (key) localStorage.setItem(key, e.classList.contains('checked') ? '1' : '0');
  }
  render();
  e.onclick = function () {
    e.classList.toggle('checked');
    render();
    var act = e.getAttribute('data-change');
    if (act && typeof window[act] == 'function') window[act](e.classList.contains('checked'));
  };
});

// ===== 夜间模式 =====
function nightModeChange(on) {
  try {
    var pd = parent.document;
    var ov = pd.getElementById('w10-night-overlay');
    if (on) {
      if (!ov) {
        ov = pd.createElement('div');
        ov.id = 'w10-night-overlay';
        var desk = pd.querySelector('.desk');
        if (desk) desk.append(ov);
      }
      ov.style.cssText = 'position:absolute;left:0;top:0;right:0;bottom:0;background:rgba(255,160,60,.12);pointer-events:none;';
    } else if (ov) {
      ov.remove();
    }
  } catch (err) { }
}

// ===== WiFi 列表 =====
var wifiNames = ['CMCC-5G', 'ChinaNet-x7W2', 'TP-LINK_9F3A', 'Xiaomi_Home_2.4G', 'TP-LINK_5G_ABCD', 'Room-704-5G', 'HUAWEI-B311-8K2', 'Tenda_Home_4E77', 'WiFi-ZB3Q', 'OPPO_A53_5G'];
function buildWifiList(container, withConnected) {
  var names = wifiNames.slice();
  for (var i = names.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = names[i]; names[i] = names[j]; names[j] = t;
  }
  container.innerHTML = '';
  names.forEach(function (name, idx) {
    var connected = withConnected && idx == 0;
    var item = document.createElement('div');
    item.className = 'net-item';
    item.innerHTML = '<div class="ic"><span class="bi bi-wifi"></span></div>' +
      '<div style="flex:1;">' +
      '<div class="nm">' + name + '</div>' +
      (connected ? '<div class="st">已连接，安全</div>' : '<div class="st">安全</div>') +
      '</div>' +
      (connected ? '<span class="bi bi-check2" style="color:#107c10;font-size:18px;"></span>' : '');
    container.append(item);
  });
}
var wifiList = document.getElementById('wifiList');
if (wifiList) buildWifiList(wifiList, true);
function wlanChange(on) {
  var list = document.getElementById('wifiList');
  if (list) list.style.display = on ? 'block' : 'none';
}
// 初始化 WLAN 开关状态
var wlanSwitch = document.getElementById('wlanSwitch');
if (wlanSwitch) wlanChange(wlanSwitch.classList.contains('checked'));
