#version 300 es
precision highp float;
uniform vec2  uRes;
uniform vec4  uBlob;   // cx, cy, halfX, halfY (px, y 向下)
uniform float uEdge;   // 顶部吸附线（0 = 黑条已去掉）
uniform float uK;      // 融合半径
uniform float uHeight, uHlAmt, uAb, uDpr, uCont, uDark, uValid;
uniform vec3  uTint;   // 清玻璃那档的底色（取自站点的 --card-bg）
out vec4 outColor;

// ---------- rounded-box SDF + 解析梯度 ----------
// supercircle_sdf 的圆角分支；圆 / 胶囊 / 圆角矩形是同一个原语
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

// ---------- 苹果 sdf_union：梯度感知 smooth min ----------
vec4 sdfUnion(vec4 a, vec4 b, float k){
  if (b.w == 0.0) b = vec4(10000.0, 0.0, 0.0, 0.0);
  float kEff = k * clamp(0.5 - 0.5 * dot(a.yz, b.yz), 0.0, 1.0) + 1e-4;
  float h = clamp(0.5 + 0.5 * (b.x - a.x) / kEff, 0.0, 1.0);
  float d = mix(b.x, a.x, h) - kEff * h * (1.0 - h);   // IQ 多项式 smin
  vec2  g = mix(b.yz, a.yz, h);                        // 梯度同步混合
  return vec4(d, normalize(g + vec2(1e-5)), 1.0);
}

void main(){
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);  // y 向下，对齐 UI 坐标

  // 顶边半平面与液滴的平滑并集。uEdge = 0 → 半平面整条在视口外，
  // 谁也看不见；但它仍然把靠近顶边的液滴往上吸，液颈就是从这里来的。
  vec4 bar  = vec4(p.y - uEdge, 0.0, 1.0, 1.0);
  vec4 blob = sdRoundBox(p, uBlob.xy, uBlob.zw, min(uBlob.z, uBlob.w));
  blob.w = uValid;
  vec4 s = sdfUnion(bar, blob, uK);
  float d = s.x;  vec2 g = s.yz;

  // 覆盖率（画布是透明的，这就是唯一的 alpha 门）与外侧软阴影
  float aaw = max(fwidth(d), 1e-3);
  float cov = smoothstep(aaw, -aaw, d);
  float shade = (d > 0.0) ? exp(-d / 30.0) * 0.26 : 0.0;

  // 「贴边」权重：离顶边越近越黑（参考实现里那档贴边黑玻璃）
  float wb = uValid * clamp(0.5 + 0.5 * (bar.x - blob.x) / 24.0, 0.0, 1.0);
  float darkAmt = mix(1.0, uDark, wb);

  // 梯度向「中心径向」微混 8%，透镜更圆润（只对液滴，bar 区域 wb≈0）
  vec2 lp = p - uBlob.xy;
  vec2 radial = normalize(vec2(lp.x, uBlob.z * lp.y / max(uBlob.w, 0.001)) + 1e-5);
  vec2 gr = normalize(mix(g, radial, 0.08 * wb));

  // 圆弧剖面（curvature=1）
  float t   = clamp(-d / uHeight, 0.0, 1.0);
  float mag = 1.0 - sqrt(max(1.0 - (1.0 - t) * (1.0 - t), 0.0));

  // face 压暗：垂直渐变（真机截图逐像素标定：顶暗底透）
  float ny = (p.y - uBlob.y) / max(uBlob.w, 1.0);
  float m  = clamp(0.20 + 0.40 * ny, 0.0, 1.0);
  float crush = mix(1.0, m, uCont * wb * darkAmt);

  // edge_bleed：亮光从边缘渗进玻璃内侧（贴边距离带 + 剖面权重）
  float xb  = clamp(-d / (10.0 * uDpr), 0.0, 1.0);
  float wbd = clamp((d + 26.0 * uDpr) / (20.0 * uDpr), 0.0, 1.0);
  float bleed = wbd * (1.0 - smoothstep(0.0, 1.0, xb)) * (1.0 - mag * 0.7);

  // 高光：细带 2.2px，key 45° + fill 225° 对角双光，锐掩码 cut 0.52
  float qd  = -d;
  float hw  = 2.2 * uDpr;
  float aaq = max(fwidth(qd), 1e-3);
  float band = (1.0 - clamp(qd / hw, 0.0, 1.0))
             * clamp(qd / aaq + 0.5, 0.0, 1.0)
             * clamp((hw - qd) / aaq + 0.5, 0.0, 1.0);
  vec2 kdir = vec2(0.7071, 0.7071);
  float key  = band * clamp((dot( kdir, gr) - 0.52) / 0.48, 0.0, 1.0);
  float fill = band * clamp((dot(-kdir, gr) - 0.52) / 0.48, 0.0, 1.0);
  key  = key  / (1.0 + (1.0 - key)  * 8.0);
  fill = fill / (1.0 + (1.0 - fill) * 8.0);
  float hl = (key + fill) * uHlAmt * mix(1.0, 0.4, darkAmt);

  // ---------- 材质 ----------
  // 参考实现的玻璃本体是「折射采样结果 × 垂直压暗」。这里没有贴图可折射，
  // 于是本体只留底色：贴边一路压到近黑，落地回到站点的卡片底色 ——
  // 那一档正好和导航岛里那枚搜索胶囊同色，交接时看不出换手。
  vec3 body = mix(uTint, vec3(0.012, 0.016, 0.024), darkAmt);
  body = mix(body, vec3(0.020, 0.025, 0.035), (1.0 - crush) * 0.85);
  float bodyA = mix(0.55, 0.985, darkAmt);
  bodyA = mix(bodyA, min(1.0, bodyA + 0.34), (1.0 - crush));

  // 边缘渗光 + 高光：白色加法，色差给一点冷暖偏移
  float lit = clamp(bleed * 0.55 + hl, 0.0, 1.4) * (1.0 - darkAmt * 0.32);
  vec3 litTint = vec3(1.0 + 0.20 * uAb, 1.0, 1.0 - 0.16 * uAb);

  float aa = cov * bodyA;
  vec3 rgb = body * aa + litTint * lit * cov;          // 预乘
  float al = clamp(aa + lit * cov * (1.0 - aa) * 0.9, 0.0, 1.0);

  // 外侧软阴影：画布里唯一「压住页面」的东西
  float aSh = shade * (1.0 - cov);
  rgb *= (1.0 - aSh);
  al = al + aSh * (1.0 - al);

  outColor = vec4(rgb, al);
}