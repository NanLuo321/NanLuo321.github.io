var localStream = null;
var localVideo = document.getElementById('localVideo');
var camOff = document.getElementById('camOff');

// ===== 隐私声明 =====
var privacyMask = document.getElementById('privacyMask');
document.getElementById('privacyAgree').onclick = function () {
  privacyMask.classList.add('hidden');
};
document.getElementById('privacyRefuse').onclick = function () {
  privacyMask.classList.add('hidden');
};

// ===== 页面切换 =====
function show(el) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('localView').style.display = 'none';
  el.style.display = 'flex';
}
document.getElementById('cardLocal').onclick = function () {
  show(document.getElementById('localView'));
};
document.getElementById('backLocal').onclick = function () {
  stopCamera();
  show(document.getElementById('home'));
};

// ===== 本地摄像头 =====
function setCamState(on) {
  localVideo.hidden = !on;
  camOff.style.display = on ? 'none' : 'block';
}
document.getElementById('btnStartCam').onclick = startCamera;
document.getElementById('btnStopCam').onclick = stopCamera;

function startCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    camOff.querySelector('p').innerText = '当前浏览器不支持摄像头访问';
    return;
  }
  navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false })
    .then(function (stream) {
      localStream = stream;
      localVideo.srcObject = stream;
      setCamState(true);
    })
    .catch(function (err) {
      camOff.querySelector('p').innerText = '无法访问摄像头：' + (err && err.name ? err.name : '未知错误');
    });
}
function stopCamera() {
  if (localStream) {
    localStream.getTracks().forEach(function (t) { t.stop(); });
    localStream = null;
  }
  localVideo.srcObject = null;
  setCamState(false);
}

// ===== 拍照 =====
var photoStrip = document.getElementById('photoStrip');
document.getElementById('btnCapture').onclick = function () {
  if (!localStream) return;
  var canvas = document.createElement('canvas');
  canvas.width = localVideo.videoWidth || 640;
  canvas.height = localVideo.videoHeight || 480;
  canvas.getContext('2d').drawImage(localVideo, 0, 0, canvas.width, canvas.height);
  var dataUrl = canvas.toDataURL('image/png');
  var img = document.createElement('img');
  img.src = dataUrl;
  img.onclick = function () {
    document.getElementById('shotImg').src = dataUrl;
    document.getElementById('shotMask').style.display = 'flex';
  };
  photoStrip.prepend(img);
  while (photoStrip.children.length > 8) photoStrip.removeChild(photoStrip.lastChild);
};
document.getElementById('shotDiscard').onclick = function () {
  document.getElementById('shotMask').style.display = 'none';
};
document.getElementById('shotKeep').onclick = function () {
  var a = document.createElement('a');
  a.href = document.getElementById('shotImg').src;
  a.download = 'camera-' + Date.now() + '.png';
  a.click();
  document.getElementById('shotMask').style.display = 'none';
};
