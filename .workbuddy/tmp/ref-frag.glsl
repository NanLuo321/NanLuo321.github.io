#version 300 es
precision highp float;
uniform vec2  uRes;
uniform vec4  uBlob;   // cx, cy, halfX, halfY (px, y 向下)
uniform float uEdge;   // 顶部黑边高度
uniform float uK;      // 融合半径
uniform float uHeight, uRefract, uHlAmt, uAb, uDpr, uCont;
uniform float uDark;   // 液滴材质 1=贴边黑玻璃 0=落地浅磨砂
uniform float uValid;
uniform sampler2D uTex;
uniform float uHasTex;
uniform vec2  uTexSize;
out vec4 outColor;

// ---------- 背景:壁纸纹理 (cover-fit),加载失败降级程序化地图 ----------
// blurR>0 时按苹果的 blur→mip 映射取 LOD: lod = log2(r<2 ? r/2+1 : r)
vec3 bgcol(vec2 p, float blurR){
  if (uHasTex > 0.5) {
    float s  = max(uRes.x / uTexSize.x, uRes.y / uTexSize.y);
    vec2  uv = (p - 0.5 * (uRes - uTexSize * s)) / (uTexSize * s);
    float lod = max(0.0, log2(blurR < 2.0 ? blurR * 0.5 + 1.0 : blurR));
    return textureLod(uTex, clamp(uv, vec2(0.002), vec2(0.998)), lod).rgb;
  }
  vec2 st = p / uRes.y;
  vec2 g  = fract(st * 6.0) - 0.5;
  float street = smoothstep(0.43, 0.455, max(abs(g.x), abs(g.y)));
  vec3 c = mix(vec3(0.90, 0.885, 0.85), vec3(0.985, 0.975, 0.96), street);
  c = mix(c, vec3(0.78, 0.88, 0.71), 1.0 - smoothstep(0.10, 0.30, length(st - vec2(0.33, 0.62))));
  c = mix(c, vec3(0.69, 0.83, 0.93), 1.0 - smoothstep(0.15, 0.42, length(st - vec2(1.55, 0.40))));
  for (int i = 0; i < 6; i++) {
    vec2 q = vec2(0.21 + 0.27 * float(i), fract(0.37 + 0.61 * float(i)) * 0.8 + 0.12);
    float d = length(st - q) * uRes.y;
    c = mix(c, vec3(0.95, 0.45, 0.25), 1.0 - smoothstep(7.0, 9.0, d));
    c = mix(c, vec3(1.0), 1.0 - smoothstep(2.5, 4.0, d));
  }
  c *= 1.0 - 0.10 * st.y / (uRes.x / uRes.y);   // 轻微纵向渐变
  return c;
}

// ---------- rounded-box SDF + 解析梯度 ----------
// supercircle_sdf 的圆角分支(cornerFlags=圆角);圆/胶囊/圆角矩形同一原语
vec4 sdRoundBox(vec2 p, vec2 c, vec2 b, float r){
  vec2 lp = p - c;
  vec2 q  = abs(lp) - b + r;
  vec2 mq = max(q, vec2(0.0));
  float dOut = length(mq);
  float d = dOut + min(max(q.x, q.y), 0.0) - r;
  vec2 grad = (dOut > 1e-4) ? (mq / dOut) * sign(lp)
            : ((q.x > q.y) ? vec2(sign(lp.x), 0.0) : vec2(0.0, sign(lp.y)));
  return vec4(d, grad, 1.0);
}

// ---------- 苹果 sdf_union:梯度感知 smooth min ----------
// QuartzCore ShaderUtils_::sdf_union 逐行翻译
vec4 sdfUnion(vec4 a, vec4 b, float k){
  if (b.w == 0.0) b = vec4(10000.0, 0.0, 0.0, 0.0);     // half 0x70E2
  float kEff = k * clamp(0.5 - 0.5 * dot(a.yz, b.yz), 0.0, 1.0) + 1e-4;
  float h = clamp(0.5 + 0.5 * (b.x - a.x) / kEff, 0.0, 1.0);
  float d = mix(b.x, a.x, h) - kEff * h * (1.0 - h);    // IQ 多项式 smin
  vec2  g = mix(b.yz, a.yz, h);                         // 梯度同步混合
  return vec4(d, normalize(g + vec2(1e-5)), 1.0);
}

void main(){
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);  // y 向下,对齐 UI 坐标

  vec4 bar  = vec4(p.y - uEdge, 0.0, 1.0, 1.0);            // 顶部黑边 = 半平面
  vec4 blob = sdRoundBox(p, uBlob.xy, uBlob.zw, min(uBlob.z, uBlob.w));
  blob.w = uValid;
  vec4 s = sdfUnion(bar, blob, uK);
  float d = s.x;  vec2 g = s.yz;

  // 背景 + 外侧软阴影 (sdf_shadow)
  float sh = (d > 0.0) ? exp(-d / 30.0) * 0.22 : 0.0;
  vec3 col = bgcol(p, 0.0) * (1.0 - sh);

  // ---------- 玻璃 = 折射 + 高光,无 face color ----------
  // 公式同 QuartzCore sdf_glass_displacement/highlight,参数取 z1han siri27 标定
  float wb = uValid * clamp(0.5 + 0.5 * (bar.x - blob.x) / 24.0, 0.0, 1.0);
  float darkAmt = mix(1.0, uDark, wb);

  // 梯度向"中心径向"微混 8%,透镜更圆润(只对液滴,bar 区域 wb≈0)
  vec2 lp = p - uBlob.xy;
  vec2 radial = normalize(vec2(lp.x, uBlob.z * lp.y / max(uBlob.w, 0.001)) + 1e-5);
  vec2 gr = normalize(mix(g, radial, 0.08 * wb));

  // 圆弧剖面 (curvature=1),折射量为负 → 边缘把外侧内容"拉进来"(放大镜感)
  float t   = clamp(-d / uHeight, 0.0, 1.0);
  float mag = 1.0 - sqrt(max(1.0 - (1.0 - t) * (1.0 - t), 0.0));
  vec2  dsp = -uRefract * mag * gr;
  // 边缘环:近清晰采样 + 色差
  vec3 sharp;
  sharp.r = bgcol(p + dsp * (1.0 - uAb), 3.0).r;
  sharp.g = bgcol(p + dsp, 3.0).g;
  sharp.b = bgcol(p + dsp * (1.0 + uAb), 3.0).b;
  // 内部:8 抽样圆盘 + 中等 mip 联合模糊——纯 mip 三线性有块感,圆盘把它抹匀
  float br = mix(14.0, 60.0, clamp(-d / (50.0 * uDpr), 0.0, 1.0)) * uDpr;
  vec3 soft = bgcol(p + dsp, br * 0.4) * 0.2;
  for (int i = 0; i < 8; i++) {
    float a = 0.7854 * float(i);
    soft += bgcol(p + dsp + vec2(cos(a), sin(a)) * br * 0.7, br * 0.4) * 0.1;
  }
  float deep = clamp(-d / (40.0 * uDpr), 0.0, 1.0);   // 越深入越用模糊
  vec3 refr = mix(sharp, soft, deep);

  // face 压暗 = 乘法系数的垂直渐变(真机截图逐像素实测标定):
  // 顶 ×0.03(近纯黑) 中 ×0.19 底 ×0.34,线性 m ≈ 0.20 + 0.40·ny;
  // 用乘法不残留底图对比(不发花),用渐变还原"上黑下透"
  float ny = (p.y - uBlob.y) / max(uBlob.w, 1.0);   // -1=顶 +1=底
  float m  = clamp(0.20 + 0.40 * ny, 0.0, 1.0);
  float crush = mix(1.0, m, uCont * wb);
  refr = refr * crush + vec3(0.008, 0.010, 0.014) * uCont * wb;

  // edge_bleed(IR 解码):亮背景从边缘渗入玻璃内侧——圆剖面位移 + mip 模糊
  // + 贴边距离带 + 亮度四次方门控(背景越亮渗越多,暗处几乎不渗)
  float xb  = clamp(-d / (10.0 * uDpr), 0.0, 1.0);
  float dbl = 24.0 * uDpr * (1.0 - sqrt(xb * (2.0 - xb)));
  vec3 bleed = bgcol(p + gr * dbl, 22.0);
  float wbd  = clamp((d + 26.0 * uDpr) / (20.0 * uDpr), 0.0, 1.0);
  float blum = dot(bleed, vec3(0.2125, 0.7154, 0.0721));
  float bm   = pow(clamp(blum * 1.2, 0.0, 1.0), 2.0) * wbd;
  refr = mix(refr, bleed, bm * bm * 0.85);

  vec3 glass = mix(refr, refr * 0.10 + vec3(0.016), darkAmt); // 落地=纯玻璃,贴边=黑玻璃

  // 高光:细带 2.2px,key 45° + fill 225° 对角双光,锐掩码 cut 0.52,压缩 norm 8
  float qd  = -d;
  float hw  = 2.2 * uDpr;
  float aaq = max(fwidth(qd), 1e-3);
  float band = (1.0 - clamp(qd / hw, 0.0, 1.0))
             * clamp(qd / aaq + 0.5, 0.0, 1.0)
             * clamp((hw - qd) / aaq + 0.5, 0.0, 1.0);
  vec2 kdir = vec2(0.7071, 0.7071);
  float key  = band * clamp((dot(kdir, gr) - 0.52) / 0.48, 0.0, 1.0);
  float fill = band * clamp((dot(-kdir, gr) - 0.52) / 0.48, 0.0, 1.0);
  key  = key  / (1.0 + (1.0 - key)  * 8.0);
  fill = fill / (1.0 + (1.0 - fill) * 8.0);
  glass += (key + fill) * uHlAmt * mix(1.0, 0.4, darkAmt);

  float aaw = max(fwidth(d), 1e-3);
  col = mix(col, glass, smoothstep(aaw, -aaw, d));
  outColor = vec4(col, 1.0);
}