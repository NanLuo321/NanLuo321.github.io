import io
import json

frag = io.open(r'E:\NanLuo321.github.io-main\.workbuddy\tmp\frag.glsl', encoding='utf-8').read()
vert = io.open(r'E:\NanLuo321.github.io-main\.workbuddy\tmp\vert.glsl', encoding='utf-8').read()

JS = """
const FRAG = __FRAG__;
const VERT = __VERT__;
const NL = String.fromCharCode(10);
const log = (s) => { const el = document.getElementById("log"); el.textContent += NL + s; };
const cv = document.getElementById("c");
const gl = cv.getContext("webgl2", { alpha: true, premultipliedAlpha: true, antialias: false });
if (!gl) { log("NO WEBGL2"); } else {
  const sh = (t, src) => {
    const s = gl.createShader(t); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { log("COMPILE FAIL: " + gl.getShaderInfoLog(s)); return null; }
    return s;
  };
  const vs = sh(gl.VERTEX_SHADER, VERT), fs = sh(gl.FRAGMENT_SHADER, FRAG);
  const p = gl.createProgram();
  gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) log("LINK FAIL: " + gl.getProgramInfoLog(p));
  gl.useProgram(p);
  const names = ["uRes","uBlob","uEdge","uK","uHeight","uHlAmt","uAb","uDpr","uCont","uDark","uValid","uTint"];
  const U = {};
  for (const n of names) U[n] = gl.getUniformLocation(p, n);
  const missing = names.filter((k) => !U[k]);
  log("missing uniforms: " + (missing.length ? missing.join(",") : "none"));
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.clearColor(0, 0, 0, 0);
  gl.viewport(0, 0, 600, 400);
  gl.uniform2f(U.uRes, 600, 400);
  gl.uniform4f(U.uBlob, 300, 200, 34, 34);
  gl.uniform1f(U.uEdge, 0);
  gl.uniform1f(U.uK, 64);
  gl.uniform1f(U.uHeight, 18);
  gl.uniform1f(U.uHlAmt, 1.5);
  gl.uniform1f(U.uAb, 0.12);
  gl.uniform1f(U.uDpr, 1);
  gl.uniform1f(U.uCont, 0.5);
  gl.uniform1f(U.uDark, 1);
  gl.uniform1f(U.uValid, 1);
  gl.uniform3f(U.uTint, 1, 1, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  log("glError=" + gl.getError());
  const px = (x, y) => {
    const b = new Uint8Array(4);
    gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, b);
    return Array.from(b).join(",");
  };
  log("blob center GL(300,200) = " + px(300, 200));
  log("blob edge   GL(270,200) = " + px(270, 200));
  log("far corner  GL(20,20)   = " + px(20, 20));
}
"""

js = JS.replace('__FRAG__', json.dumps(frag)).replace('__VERT__', json.dumps(vert))
html = (
    '<!doctype html><html><head><meta charset="utf-8"><style>'
    'body{margin:0;background:#222;color:#fff;font:12px monospace}'
    '#log{position:fixed;left:0;bottom:0;background:#000;padding:8px;white-space:pre;z-index:2}'
    '#c{display:block;width:600px;height:400px}'
    '</style></head><body><canvas id="c" width="600" height="400"></canvas>'
    '<div id="log">init</div><script>' + js + '</script></body></html>'
)
io.open(r'E:\NanLuo321.github.io-main\public\_melt-test.html', 'w', encoding='utf-8', newline='\n').write(html)

code = js
io.open(r'E:\NanLuo321.github.io-main\.workbuddy\tmp\melt-test-script.mjs', 'w', encoding='utf-8', newline='\n').write(code)

import subprocess
r = subprocess.run(
    [r'C:\Users\NanLuo\.workbuddy\binaries\node\versions\22.22.2-3\node.exe', '--check',
     r'E:\NanLuo321.github.io-main\.workbuddy\tmp\melt-test-script.mjs'],
    capture_output=True, text=True,
)
print('syntax check exit', r.returncode, r.stderr[-400:])
print('written public/_melt-test.html')
