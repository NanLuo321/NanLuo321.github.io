/* 极简 PNG 解码 + 行/列亮度剖面。
   用法: node pngscan.cjs <file.png> [y1 y2 ...]  —— 打印这些行的横向剖面摘要
          node pngscan.cjs <file.png> row <y>            —— 该行逐 8px 的 alpha/亮度
   只支持 Chrome 截图常见的 8bit RGBA/RGB、非隔行。 */
const fs = require("fs");
const zlib = require("zlib");

function decode(file) {
	const buf = fs.readFileSync(file);
	if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error("not png");
	let off = 8;
	let w = 0, h = 0, bd = 0, ct = 0, inter = 0;
	const idat = [];
	while (off < buf.length) {
		const len = buf.readUInt32BE(off);
		const type = buf.toString("ascii", off + 4, off + 8);
		const data = buf.subarray(off + 8, off + 8 + len);
		if (type === "IHDR") {
			w = data.readUInt32BE(0); h = data.readUInt32BE(4); bd = data[8]; ct = data[9]; inter = data[12];
		} else if (type === "IDAT") idat.push(Buffer.from(data));
		else if (type === "IEND") break;
		off += 12 + len;
	}
	if (bd !== 8) throw new Error("bitdepth " + bd);
	if (inter) throw new Error("interlaced");
	const ch = ct === 6 ? 4 : ct === 2 ? 3 : ct === 0 ? 1 : (() => { throw new Error("colortype " + ct); })();
	const raw = zlib.inflateSync(Buffer.concat(idat));
	const stride = w * ch;
	const out = Buffer.alloc(h * stride);
	let prev = Buffer.alloc(stride);
	let p = 0;
	for (let y = 0; y < h; y++) {
		const f = raw[p++];
		const line = Buffer.from(raw.subarray(p, p + stride));
		p += stride;
		for (let i = 0; i < stride; i++) {
			const a = i >= ch ? line[i - ch] : 0;
			const b = prev[i];
			const c = i >= ch ? prev[i - ch] : 0;
			let v = line[i];
			if (f === 1) v = (v + a) & 255;
			else if (f === 2) v = (v + b) & 255;
			else if (f === 3) v = (v + ((a + b) >> 1)) & 255;
			else if (f === 4) {
				const pa = Math.abs(b - c), pb = Math.abs(a - c), pc = Math.abs(a + b - 2 * c);
				const pr = pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
				v = (v + pr) & 255;
			}
			line[i] = v;
		}
		line.copy(out, y * stride);
		prev = line;
	}
	return { w, h, ch, data: out };
}

const px = (img, x, y) => {
	const i = (y * img.w + x) * img.ch;
	return img.ch === 4 ? [img.data[i], img.data[i + 1], img.data[i + 2], img.data[i + 3]]
		: [img.data[i], img.data[i + 1], img.data[i + 2], 255];
};
const lum = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

const file = process.argv[2];
const img = decode(file);
console.log(`# ${file}  ${img.w}x${img.h} ch=${img.ch}`);
const mode = process.argv[3];
if (mode === "row") {
	const y = +process.argv[4];
	let s = "";
	for (let x = 0; x < img.w; x += Math.max(1, Math.round(img.w / 64))) {
		const p = px(img, x, y);
		s += `${x}:${p[0]},${p[1]},${p[2]},${p[3]}  `;
	}
	console.log(`row y=${y}\n${s}`);
} else if (mode === "col") {
	const x = +process.argv[4];
	for (let y = 0; y < img.h; y += Math.max(1, Math.round(img.h / 60))) {
		const p = px(img, x, y);
		console.log(`  y=${y}  ${p[0]},${p[1]},${p[2]},${p[3]}  lum=${lum(p).toFixed(1)}`);
	}
} else if (mode === "topt") {
	// topt x y0 y1 : 给定 x，逐行打印 y0..y1 的 RGB
	const x = +process.argv[4];
	const y0 = +process.argv[5];
	const y1 = +process.argv[6];
	for (let y = y0; y <= y1; y++) {
		const p = px(img, x, y);
		console.log(`  x=${x} y=${y}  ${p.join(",")}`);
	}
} else if (mode === "region") {
	// region x0 y0 x1 y1 -> 最暗像素 + 平均亮度
	const [x0, y0, x1, y1] = process.argv.slice(4).map(Number);
	let min = 1e9, minAt = null, sum = 0, n = 0;
	for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
		const p = px(img, x, y);
		const l = lum(p);
		if (l < min) { min = l; minAt = [x, y, p.join(",")]; }
		sum += l; n++;
	}
	console.log(`region ${x0},${y0}-${x1},${y1}: avgLum=${(sum / n).toFixed(1)} darkest=${min.toFixed(1)} @${minAt[0]},${minAt[1]} rgba=${minAt[2]}`);
}
