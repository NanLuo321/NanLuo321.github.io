var player = document.getElementById('player');
var videoArea = document.getElementById('videoArea');
var placeholder = document.getElementById('placeholder');
var playlistUl = document.getElementById('playlistUl');
var statusText = document.getElementById('statusText');

var playlist = [];
var current = -1;
var volume = parseInt(localStorage.getItem('w10_volume')) || 80;
if (player) player.volume = volume / 100;

var volFill = document.getElementById('volFill');
var volDot = document.getElementById('volDot');
var volNum = document.getElementById('volNum');

function setVolUI(v) {
  if (volFill) volFill.style.width = v + '%';
  if (volDot) volDot.style.left = v + '%';
  if (volNum) volNum.innerText = v;
  var ic = document.querySelector('.vol-ic span');
  if (ic) ic.className = v == 0 ? 'bi bi-volume-mute-fill' : v < 50 ? 'bi bi-volume-down-fill' : 'bi bi-volume-up-fill';
}
setVolUI(volume);

// ===== 时间格式化 =====
function fmt(t) {
  if (isNaN(t)) t = 0;
  t = Math.floor(t);
  var m = Math.floor(t / 60);
  var s = t % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

// ===== 播放源 =====
function loadSource(src, title) {
  player.src = src;
  player.style.display = 'block';
  placeholder.style.display = 'none';
  statusText.innerText = title;
  player.play().catch(function () { });
}

function openFile(file) {
  var url = URL.createObjectURL(file);
  playlist.push({ title: file.name, src: url });
  renderPlaylist();
  loadSource(url, file.name);
  current = playlist.length - 1;
  markPlaying();
}

function openStream(url) {
  if (!url) return;
  playlist.push({ title: url, src: url });
  renderPlaylist();
  loadSource(url, '网络串流');
  current = playlist.length - 1;
  markPlaying();
}

// ===== 播放列表渲染 =====
function renderPlaylist() {
  playlistUl.innerHTML = '';
  playlist.forEach(function (item, i) {
    var li = document.createElement('li');
    li.innerText = item.title;
    li.setAttribute('data-i', i);
    li.onclick = function () {
      current = i;
      loadSource(item.src, item.title);
      markPlaying();
    };
    playlistUl.append(li);
  });
}
function markPlaying() {
  playlistUl.querySelectorAll('li').forEach(function (li) {
    li.classList.remove('playing');
  });
  var li = playlistUl.querySelector('li[data-i="' + current + '"]');
  if (li) li.classList.add('playing');
}

// ===== 打开文件 / 网络串流 =====
document.getElementById('btnOpenFile').onclick = function () { document.getElementById('fileInput').click(); };
document.getElementById('btnPhOpenFile').onclick = function () { document.getElementById('fileInput').click(); };
document.getElementById('fileInput').onchange = function () {
  if (this.files && this.files[0]) openFile(this.files[0]);
  this.value = '';
};
document.getElementById('btnOpenStream').onclick = function () {
  var box = document.querySelector('.stream-box');
  box.style.display = box.style.display == 'none' ? 'flex' : 'none';
  if (box.style.display == 'flex') document.getElementById('streamInput').focus();
};
document.getElementById('btnPhOpenStream').onclick = function () {
  var box = document.querySelector('.stream-box');
  box.style.display = 'flex';
  document.getElementById('streamInput').focus();
};
document.getElementById('streamGo').onclick = function () {
  var url = document.getElementById('streamInput').value.trim();
  if (url) {
    openStream(url);
    document.getElementById('streamInput').value = '';
  }
};
document.getElementById('streamInput').addEventListener('keydown', function (e) {
  if (e.key == 'Enter') document.getElementById('streamGo').click();
});

// ===== 播放控制 =====
var btnPlay = document.getElementById('btnPlay');
var playing = false;
function syncPlayBtn() {
  btnPlay.querySelector('span').className = playing ? 'bi bi-pause-fill' : 'bi bi-play-fill';
}
btnPlay.onclick = function () {
  if (!player.src) { document.getElementById('fileInput').click(); return; }
  if (player.paused) { player.play(); } else { player.pause(); }
};
player.onplay = function () { playing = true; syncPlayBtn(); };
player.onpause = function () { playing = false; syncPlayBtn(); };
player.onended = function () {
  if (current < playlist.length - 1) {
    current++;
    var item = playlist[current];
    loadSource(item.src, item.title);
    markPlaying();
  } else {
    playing = false;
    syncPlayBtn();
  }
};
document.getElementById('btnStop').onclick = function () {
  player.pause();
  player.currentTime = 0;
  playing = false;
  syncPlayBtn();
};
document.getElementById('btnPrev').onclick = function () {
  if (current > 0) {
    current--;
    var item = playlist[current];
    loadSource(item.src, item.title);
    markPlaying();
  }
};
document.getElementById('btnNext').onclick = function () {
  if (current < playlist.length - 1) {
    current++;
    var item = playlist[current];
    loadSource(item.src, item.title);
    markPlaying();
  }
};

// ===== 进度条 =====
var seek = document.getElementById('seek');
var seekFill = document.getElementById('seekFill');
var seekDot = document.getElementById('seekDot');
player.addEventListener('timeupdate', function () {
  if (!player.duration) return;
  var pct = player.currentTime / player.duration * 100;
  seekFill.style.width = pct + '%';
  seekDot.style.left = pct + '%';
  document.getElementById('timeCur').innerText = fmt(player.currentTime);
  document.getElementById('timeTotal').innerText = fmt(player.duration);
});
function seekTo(e) {
  if (!player.duration) return;
  var rect = seek.getBoundingClientRect();
  var pct = (e.clientX - rect.left) / rect.width;
  pct = pct < 0 ? 0 : pct > 1 ? 1 : pct;
  player.currentTime = pct * player.duration;
}
seek.addEventListener('click', seekTo);
seekDot.addEventListener('mousedown', function (e) {
  e.preventDefault();
  e.stopPropagation();
  function mv(ev) { seekTo(ev); }
  document.addEventListener('mousemove', mv);
  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', mv);
  }, { once: true });
});

// ===== 音量 =====
var volSeek = document.getElementById('volSeek');
function volTo(e) {
  var rect = volSeek.getBoundingClientRect();
  var pct = (e.clientX - rect.left) / rect.width;
  pct = pct < 0 ? 0 : pct > 1 ? 1 : pct;
  volume = Math.round(pct * 100);
  player.volume = volume / 100;
  localStorage.setItem('w10_volume', volume);
  setVolUI(volume);
}
volSeek.addEventListener('click', volTo);
volDot.addEventListener('mousedown', function (e) {
  e.preventDefault();
  e.stopPropagation();
  function mv(ev) { volTo(ev); }
  document.addEventListener('mousemove', mv);
  document.addEventListener('mouseup', function () {
    document.removeEventListener('mousemove', mv);
  }, { once: true });
});

// ===== 全屏（iframe 内扩展模式） =====
document.getElementById('btnFullscreen').onclick = function () {
  if (document.body.classList.contains('expanded')) {
    document.body.classList.remove('expanded');
    this.querySelector('span').className = 'bi bi-arrows-fullscreen';
  } else {
    document.body.classList.add('expanded');
    this.querySelector('span').className = 'bi bi-fullscreen-exit';
  }
};

// 从父窗口传入的启动参数（可选：自动播放某个串流）
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type == 'vlc-open' && data.src) {
    openStream(data.src);
  }
});
