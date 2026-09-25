
const FRAG = "#version 300 es\nprecision highp float;\nuniform vec2  uRes;\nuniform vec4  uBlob;   // cx, cy, halfX, halfY (px, y \u5411\u4e0b)\nuniform float uEdge;   // \u9876\u90e8\u5438\u9644\u7ebf\uff080 = \u9ed1\u6761\u5df2\u53bb\u6389\uff09\nuniform float uK;      // \u878d\u5408\u534a\u5f84\nuniform float uHeight, uHlAmt, uAb, uDpr, uCont, uDark, uValid;\nuniform vec3  uTint;   // \u6e05\u73bb\u7483\u90a3\u6863\u7684\u5e95\u8272\uff08\u53d6\u81ea\u7ad9\u70b9\u7684 --card-bg\uff09\nout vec4 outColor;\n\n// ---------- rounded-box SDF + \u89e3\u6790\u68af\u5ea6 ----------\n// supercircle_sdf \u7684\u5706\u89d2\u5206\u652f\uff1b\u5706 / \u80f6\u56ca / \u5706\u89d2\u77e9\u5f62\u662f\u540c\u4e00\u4e2a\u539f\u8bed\nvec4 sdRoundBox(vec2 p, vec2 c, vec2 b, float r){\n  vec2 lp = p - c;\n  vec2 q  = abs(lp) - b + r;\n  vec2 mq = max(q, vec2(0.0));\n  float dOut = length(mq);\n  float d = dOut + min(max(q.x, q.y), 0.0) - r;\n  vec2 grad = (dOut > 1e-4) ? (mq / dOut) * sign(lp)\n            : ((q.x > q.y) ? vec2(sign(lp.x), 0.0) : vec2(0.0, sign(lp.y)));\n  return vec4(d, grad, 1.0);\n}\n\n// ---------- \u82f9\u679c sdf_union\uff1a\u68af\u5ea6\u611f\u77e5 smooth min ----------\nvec4 sdfUnion(vec4 a, vec4 b, float k){\n  if (b.w == 0.0) b = vec4(10000.0, 0.0, 0.0, 0.0);\n  float kEff = k * clamp(0.5 - 0.5 * dot(a.yz, b.yz), 0.0, 1.0) + 1e-4;\n  float h = clamp(0.5 + 0.5 * (b.x - a.x) / kEff, 0.0, 1.0);\n  float d = mix(b.x, a.x, h) - kEff * h * (1.0 - h);   // IQ \u591a\u9879\u5f0f smin\n  vec2  g = mix(b.yz, a.yz, h);                        // \u68af\u5ea6\u540c\u6b65\u6df7\u5408\n  return vec4(d, normalize(g + vec2(1e-5)), 1.0);\n}\n\nvoid main(){\n  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);  // y \u5411\u4e0b\uff0c\u5bf9\u9f50 UI \u5750\u6807\n\n  // \u9876\u8fb9\u534a\u5e73\u9762\u4e0e\u6db2\u6ef4\u7684\u5e73\u6ed1\u5e76\u96c6\u3002uEdge = 0 \u2192 \u534a\u5e73\u9762\u6574\u6761\u5728\u89c6\u53e3\u5916\uff0c\n  // \u8c01\u4e5f\u770b\u4e0d\u89c1\uff1b\u4f46\u5b83\u4ecd\u7136\u628a\u9760\u8fd1\u9876\u8fb9\u7684\u6db2\u6ef4\u5f80\u4e0a\u5438\uff0c\u6db2\u9888\u5c31\u662f\u4ece\u8fd9\u91cc\u6765\u7684\u3002\n  vec4 bar  = vec4(p.y - uEdge, 0.0, 1.0, 1.0);\n  vec4 blob = sdRoundBox(p, uBlob.xy, uBlob.zw, min(uBlob.z, uBlob.w));\n  blob.w = uValid;\n  vec4 s = sdfUnion(bar, blob, uK);\n  float d = s.x;  vec2 g = s.yz;\n\n  // \u8986\u76d6\u7387\uff08\u753b\u5e03\u662f\u900f\u660e\u7684\uff0c\u8fd9\u5c31\u662f\u552f\u4e00\u7684 alpha \u95e8\uff09\u4e0e\u5916\u4fa7\u8f6f\u9634\u5f71\n  float aaw = max(fwidth(d), 1e-3);\n  float cov = smoothstep(aaw, -aaw, d);\n  float shade = (d > 0.0) ? exp(-d / 30.0) * 0.26 : 0.0;\n\n  // \u300c\u8d34\u8fb9\u300d\u6743\u91cd\uff1a\u79bb\u9876\u8fb9\u8d8a\u8fd1\u8d8a\u9ed1\uff08\u53c2\u8003\u5b9e\u73b0\u91cc\u90a3\u6863\u8d34\u8fb9\u9ed1\u73bb\u7483\uff09\n  float wb = uValid * clamp(0.5 + 0.5 * (bar.x - blob.x) / 24.0, 0.0, 1.0);\n  float darkAmt = mix(1.0, uDark, wb);\n\n  // \u68af\u5ea6\u5411\u300c\u4e2d\u5fc3\u5f84\u5411\u300d\u5fae\u6df7 8%\uff0c\u900f\u955c\u66f4\u5706\u6da6\uff08\u53ea\u5bf9\u6db2\u6ef4\uff0cbar \u533a\u57df wb\u22480\uff09\n  vec2 lp = p - uBlob.xy;\n  vec2 radial = normalize(vec2(lp.x, uBlob.z * lp.y / max(uBlob.w, 0.001)) + 1e-5);\n  vec2 gr = normalize(mix(g, radial, 0.08 * wb));\n\n  // \u5706\u5f27\u5256\u9762\uff08curvature=1\uff09\n  float t   = clamp(-d / uHeight, 0.0, 1.0);\n  float mag = 1.0 - sqrt(max(1.0 - (1.0 - t) * (1.0 - t), 0.0));\n\n  // face \u538b\u6697\uff1a\u5782\u76f4\u6e10\u53d8\uff08\u771f\u673a\u622a\u56fe\u9010\u50cf\u7d20\u6807\u5b9a\uff1a\u9876\u6697\u5e95\u900f\uff09\n  float ny = (p.y - uBlob.y) / max(uBlob.w, 1.0);\n  float m  = clamp(0.20 + 0.40 * ny, 0.0, 1.0);\n  float crush = mix(1.0, m, uCont * wb * darkAmt);\n\n  // edge_bleed\uff1a\u4eae\u5149\u4ece\u8fb9\u7f18\u6e17\u8fdb\u73bb\u7483\u5185\u4fa7\uff08\u8d34\u8fb9\u8ddd\u79bb\u5e26 + \u5256\u9762\u6743\u91cd\uff09\n  float xb  = clamp(-d / (10.0 * uDpr), 0.0, 1.0);\n  float wbd = clamp((d + 26.0 * uDpr) / (20.0 * uDpr), 0.0, 1.0);\n  float bleed = wbd * (1.0 - smoothstep(0.0, 1.0, xb)) * (1.0 - mag * 0.7);\n\n  // \u9ad8\u5149\uff1a\u7ec6\u5e26 2.2px\uff0ckey 45\u00b0 + fill 225\u00b0 \u5bf9\u89d2\u53cc\u5149\uff0c\u9510\u63a9\u7801 cut 0.52\n  float qd  = -d;\n  float hw  = 2.2 * uDpr;\n  float aaq = max(fwidth(qd), 1e-3);\n  float band = (1.0 - clamp(qd / hw, 0.0, 1.0))\n             * clamp(qd / aaq + 0.5, 0.0, 1.0)\n             * clamp((hw - qd) / aaq + 0.5, 0.0, 1.0);\n  vec2 kdir = vec2(0.7071, 0.7071);\n  float key  = band * clamp((dot( kdir, gr) - 0.52) / 0.48, 0.0, 1.0);\n  float fill = band * clamp((dot(-kdir, gr) - 0.52) / 0.48, 0.0, 1.0);\n  key  = key  / (1.0 + (1.0 - key)  * 8.0);\n  fill = fill / (1.0 + (1.0 - fill) * 8.0);\n  float hl = (key + fill) * uHlAmt * mix(1.0, 0.4, darkAmt);\n\n  // ---------- \u6750\u8d28 ----------\n  // \u53c2\u8003\u5b9e\u73b0\u7684\u73bb\u7483\u672c\u4f53\u662f\u300c\u6298\u5c04\u91c7\u6837\u7ed3\u679c \u00d7 \u5782\u76f4\u538b\u6697\u300d\u3002\u8fd9\u91cc\u6ca1\u6709\u8d34\u56fe\u53ef\u6298\u5c04\uff0c\n  // \u4e8e\u662f\u672c\u4f53\u53ea\u7559\u5e95\u8272\uff1a\u8d34\u8fb9\u4e00\u8def\u538b\u5230\u8fd1\u9ed1\uff0c\u843d\u5730\u56de\u5230\u7ad9\u70b9\u7684\u5361\u7247\u5e95\u8272 \u2014\u2014\n  // \u90a3\u4e00\u6863\u6b63\u597d\u548c\u5bfc\u822a\u5c9b\u91cc\u90a3\u679a\u641c\u7d22\u80f6\u56ca\u540c\u8272\uff0c\u4ea4\u63a5\u65f6\u770b\u4e0d\u51fa\u6362\u624b\u3002\n  vec3 body = mix(uTint, vec3(0.012, 0.016, 0.024), darkAmt);\n  body = mix(body, vec3(0.020, 0.025, 0.035), (1.0 - crush) * 0.85);\n  float bodyA = mix(0.55, 0.985, darkAmt);\n  bodyA = mix(bodyA, min(1.0, bodyA + 0.34), (1.0 - crush));\n\n  // \u8fb9\u7f18\u6e17\u5149 + \u9ad8\u5149\uff1a\u767d\u8272\u52a0\u6cd5\uff0c\u8272\u5dee\u7ed9\u4e00\u70b9\u51b7\u6696\u504f\u79fb\n  float lit = clamp(bleed * 0.55 + hl, 0.0, 1.4) * (1.0 - darkAmt * 0.32);\n  vec3 litTint = vec3(1.0 + 0.20 * uAb, 1.0, 1.0 - 0.16 * uAb);\n\n  float aa = cov * bodyA;\n  vec3 rgb = body * aa + litTint * lit * cov;          // \u9884\u4e58\n  float al = clamp(aa + lit * cov * (1.0 - aa) * 0.9, 0.0, 1.0);\n\n  // \u5916\u4fa7\u8f6f\u9634\u5f71\uff1a\u753b\u5e03\u91cc\u552f\u4e00\u300c\u538b\u4f4f\u9875\u9762\u300d\u7684\u4e1c\u897f\n  float aSh = shade * (1.0 - cov);\n  rgb *= (1.0 - aSh);\n  al = al + aSh * (1.0 - al);\n\n  outColor = vec4(rgb, al);\n}";
const VERT = "#version 300 es\nvoid main(){ vec2 v = vec2((gl_VertexID<<1)&2, gl_VertexID&1);\n  gl_Position = vec4(v*2.0-1.0, 0.0, 1.0); }";
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
