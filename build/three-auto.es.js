var gp = Object.defineProperty;
var _p = (r, e, t) => e in r ? gp(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var me = (r, e, t) => _p(r, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const _c = "167", os = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, as = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, xp = 0, uh = 1, vp = 2, df = 1, yp = 2, $n = 3, oi = 0, jt = 1, Ln = 2, si = 0, Ls = 1, dl = 2, fh = 3, dh = 4, Mp = 5, Yi = 100, Sp = 101, Tp = 102, Ep = 103, bp = 104, Ap = 200, wp = 201, Rp = 202, Cp = 203, pl = 204, ml = 205, Pp = 206, Lp = 207, Dp = 208, Ip = 209, Np = 210, Up = 211, Op = 212, Fp = 213, Bp = 214, kp = 0, zp = 1, Hp = 2, Vo = 3, Vp = 4, Gp = 5, Wp = 6, Xp = 7, pf = 0, Yp = 1, qp = 2, Ri = 0, Kp = 1, jp = 2, Zp = 3, $p = 4, Jp = 5, Qp = 6, em = 7, ph = "attached", tm = "detached", mf = 300, ks = 301, zs = 302, gl = 303, _l = 304, sa = 306, Hs = 1e3, Ti = 1001, Go = 1002, Yt = 1003, gf = 1004, xr = 1005, an = 1006, Do = 1007, ti = 1008, ai = 1009, _f = 1010, xf = 1011, Pr = 1012, xc = 1013, Qi = 1014, An = 1015, ri = 1016, vc = 1017, yc = 1018, Vs = 1020, vf = 35902, yf = 1021, Mf = 1022, gn = 1023, Sf = 1024, Tf = 1025, Ds = 1026, Gs = 1027, Mc = 1028, Sc = 1029, Ef = 1030, Tc = 1031, Ec = 1033, Io = 33776, No = 33777, Uo = 33778, Oo = 33779, xl = 35840, vl = 35841, yl = 35842, Ml = 35843, Sl = 36196, Tl = 37492, El = 37496, bl = 37808, Al = 37809, wl = 37810, Rl = 37811, Cl = 37812, Pl = 37813, Ll = 37814, Dl = 37815, Il = 37816, Nl = 37817, Ul = 37818, Ol = 37819, Fl = 37820, Bl = 37821, Fo = 36492, kl = 36494, zl = 36495, bf = 36283, Hl = 36284, Vl = 36285, Gl = 36286, Lr = 2300, Dr = 2301, xa = 2302, mh = 2400, gh = 2401, _h = 2402, nm = 2500, im = 0, Af = 1, Wl = 2, sm = 3200, rm = 3201, wf = 0, om = 1, Si = "", Tt = "srgb", Dt = "srgb-linear", bc = "display-p3", ra = "display-p3-linear", Wo = "linear", st = "srgb", Xo = "rec709", Yo = "p3", ls = 7680, xh = 519, am = 512, lm = 513, cm = 514, Rf = 515, hm = 516, um = 517, fm = 518, dm = 519, Xl = 35044, vh = "300 es", ni = 2e3, qo = 2001;
class is {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const Ot = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let yh = 1234567;
const Sr = Math.PI / 180, Ws = 180 / Math.PI;
function vn() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ot[r & 255] + Ot[r >> 8 & 255] + Ot[r >> 16 & 255] + Ot[r >> 24 & 255] + "-" + Ot[e & 255] + Ot[e >> 8 & 255] + "-" + Ot[e >> 16 & 15 | 64] + Ot[e >> 24 & 255] + "-" + Ot[t & 63 | 128] + Ot[t >> 8 & 255] + "-" + Ot[t >> 16 & 255] + Ot[t >> 24 & 255] + Ot[n & 255] + Ot[n >> 8 & 255] + Ot[n >> 16 & 255] + Ot[n >> 24 & 255]).toLowerCase();
}
function Et(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Ac(r, e) {
  return (r % e + e) % e;
}
function pm(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function mm(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Tr(r, e, t) {
  return (1 - t) * r + t * e;
}
function gm(r, e, t, n) {
  return Tr(r, e, 1 - Math.exp(-t * n));
}
function _m(r, e = 1) {
  return e - Math.abs(Ac(r, e * 2) - e);
}
function xm(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function vm(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function ym(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Mm(r, e) {
  return r + Math.random() * (e - r);
}
function Sm(r) {
  return r * (0.5 - Math.random());
}
function Tm(r) {
  r !== void 0 && (yh = r);
  let e = yh += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Em(r) {
  return r * Sr;
}
function bm(r) {
  return r * Ws;
}
function Am(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function wm(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Rm(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Cm(r, e, t, n, i) {
  const s = Math.cos, o = Math.sin, a = s(t / 2), l = o(t / 2), c = s((e + n) / 2), h = o((e + n) / 2), u = s((e - n) / 2), f = o((e - n) / 2), d = s((n - e) / 2), _ = o((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(a * h, l * u, l * f, a * c);
      break;
    case "YZY":
      r.set(l * f, a * h, l * u, a * c);
      break;
    case "ZXZ":
      r.set(l * u, l * f, a * h, a * c);
      break;
    case "XZX":
      r.set(a * h, l * _, l * d, a * c);
      break;
    case "YXY":
      r.set(l * d, a * h, l * _, a * c);
      break;
    case "ZYZ":
      r.set(l * _, l * d, a * h, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function bn(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function $e(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Cf = {
  DEG2RAD: Sr,
  RAD2DEG: Ws,
  generateUUID: vn,
  clamp: Et,
  euclideanModulo: Ac,
  mapLinear: pm,
  inverseLerp: mm,
  lerp: Tr,
  damp: gm,
  pingpong: _m,
  smoothstep: xm,
  smootherstep: vm,
  randInt: ym,
  randFloat: Mm,
  randFloatSpread: Sm,
  seededRandom: Tm,
  degToRad: Em,
  radToDeg: bm,
  isPowerOfTwo: Am,
  ceilPowerOfTwo: wm,
  floorPowerOfTwo: Rm,
  setQuaternionFromProperEuler: Cm,
  normalize: $e,
  denormalize: bn
};
class te {
  constructor(e = 0, t = 0) {
    te.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Et(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Be {
  constructor(e, t, n, i, s, o, a, l, c) {
    Be.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, o, a, l, c);
  }
  set(e, t, n, i, s, o, a, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], f = n[2], d = n[5], _ = n[8], g = i[0], p = i[3], m = i[6], v = i[1], x = i[4], y = i[7], R = i[2], A = i[5], b = i[8];
    return s[0] = o * g + a * v + l * R, s[3] = o * p + a * x + l * A, s[6] = o * m + a * y + l * b, s[1] = c * g + h * v + u * R, s[4] = c * p + h * x + u * A, s[7] = c * m + h * y + u * b, s[2] = f * g + d * v + _ * R, s[5] = f * p + d * x + _ * A, s[8] = f * m + d * y + _ * b, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - n * s * h + n * a * l + i * s * c - i * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = h * o - a * c, f = a * l - h * s, d = c * s - o * l, _ = t * u + n * f + i * d;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = u * g, e[1] = (i * c - h * n) * g, e[2] = (a * n - i * o) * g, e[3] = f * g, e[4] = (h * t - i * l) * g, e[5] = (i * s - a * t) * g, e[6] = d * g, e[7] = (n * l - c * t) * g, e[8] = (o * t - n * s) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -i * c,
      i * l,
      -i * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(va.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(va.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(va.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const va = /* @__PURE__ */ new Be();
function Pf(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
function Ir(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Pm() {
  const r = Ir("canvas");
  return r.style.display = "block", r;
}
const Mh = {};
function Is(r) {
  r in Mh || (Mh[r] = !0, console.warn(r));
}
function Lm(r, e, t) {
  return new Promise(function(n, i) {
    function s() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const Sh = /* @__PURE__ */ new Be().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Th = /* @__PURE__ */ new Be().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), ar = {
  [Dt]: {
    transfer: Wo,
    primaries: Xo,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [Tt]: {
    transfer: st,
    primaries: Xo,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [ra]: {
    transfer: Wo,
    primaries: Yo,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (r) => r.applyMatrix3(Th),
    fromReference: (r) => r.applyMatrix3(Sh)
  },
  [bc]: {
    transfer: st,
    primaries: Yo,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(Th),
    fromReference: (r) => r.applyMatrix3(Sh).convertLinearToSRGB()
  }
}, Dm = /* @__PURE__ */ new Set([Dt, ra]), Ye = {
  enabled: !0,
  _workingColorSpace: Dt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!Dm.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = ar[e].toReference, i = ar[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return ar[r].primaries;
  },
  getTransfer: function(r) {
    return r === Si ? Wo : ar[r].transfer;
  },
  getLuminanceCoefficients: function(r, e = this._workingColorSpace) {
    return r.fromArray(ar[e].luminanceCoefficients);
  }
};
function Ns(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ya(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let cs;
class Im {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      cs === void 0 && (cs = Ir("canvas")), cs.width = e.width, cs.height = e.height;
      const n = cs.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = cs;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ir("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Ns(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ns(t[n] / 255) * 255) : t[n] = Ns(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Nm = 0;
class Lf {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Nm++ }), this.uuid = vn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? s.push(Ma(i[o].image)) : s.push(Ma(i[o]));
      } else
        s = Ma(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ma(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Im.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Um = 0;
class Ct extends is {
  constructor(e = Ct.DEFAULT_IMAGE, t = Ct.DEFAULT_MAPPING, n = Ti, i = Ti, s = an, o = ti, a = gn, l = ai, c = Ct.DEFAULT_ANISOTROPY, h = Si) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Um++ }), this.uuid = vn(), this.name = "", this.source = new Lf(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new te(0, 0), this.repeat = new te(1, 1), this.center = new te(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== mf) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Hs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ti:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Go:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Hs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ti:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Go:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Ct.DEFAULT_IMAGE = null;
Ct.DEFAULT_MAPPING = mf;
Ct.DEFAULT_ANISOTROPY = 1;
class Qe {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Qe.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], h = l[4], u = l[8], f = l[1], d = l[5], _ = l[9], g = l[2], p = l[6], m = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(c + d + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (c + 1) / 2, y = (d + 1) / 2, R = (m + 1) / 2, A = (h + f) / 4, b = (u + g) / 4, C = (_ + p) / 4;
      return x > y && x > R ? x < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), i = A / n, s = b / n) : y > R ? y < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(y), n = A / i, s = C / i) : R < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(R), n = b / s, i = C / s), this.set(n, i, s, t), this;
    }
    let v = Math.sqrt((p - _) * (p - _) + (u - g) * (u - g) + (f - h) * (f - h));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (p - _) / v, this.y = (u - g) / v, this.z = (f - h) / v, this.w = Math.acos((c + d + m - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Om extends is {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Qe(0, 0, e, t), this.scissorTest = !1, this.viewport = new Qe(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: an,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new Ct(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++)
      this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.textures.length; i < s; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Lf(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Rn extends Om {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Df extends Ct {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Yt, this.minFilter = Yt, this.wrapR = Ti, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Fm extends Ct {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Yt, this.minFilter = Yt, this.wrapR = Ti, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Fn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const f = s[o + 0], d = s[o + 1], _ = s[o + 2], g = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = d, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (u !== g || l !== f || c !== d || h !== _) {
      let p = 1 - a;
      const m = l * f + c * d + h * _ + u * g, v = m >= 0 ? 1 : -1, x = 1 - m * m;
      if (x > Number.EPSILON) {
        const R = Math.sqrt(x), A = Math.atan2(R, m * v);
        p = Math.sin(p * A) / R, a = Math.sin(a * A) / R;
      }
      const y = a * v;
      if (l = l * p + f * y, c = c * p + d * y, h = h * p + _ * y, u = u * p + g * y, p === 1 - a) {
        const R = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= R, c *= R, h *= R, u *= R;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = s[o], f = s[o + 1], d = s[o + 2], _ = s[o + 3];
    return e[t] = a * _ + h * u + l * d - c * f, e[t + 1] = l * _ + h * f + c * u - a * d, e[t + 2] = c * _ + h * d + a * f - l * u, e[t + 3] = h * _ - a * u - l * f - c * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(i / 2), u = a(s / 2), f = l(n / 2), d = l(i / 2), _ = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = f * h * u + c * d * _, this._y = c * d * u - f * h * _, this._z = c * h * _ + f * d * u, this._w = c * h * u - f * d * _;
        break;
      case "YXZ":
        this._x = f * h * u + c * d * _, this._y = c * d * u - f * h * _, this._z = c * h * _ - f * d * u, this._w = c * h * u + f * d * _;
        break;
      case "ZXY":
        this._x = f * h * u - c * d * _, this._y = c * d * u + f * h * _, this._z = c * h * _ + f * d * u, this._w = c * h * u - f * d * _;
        break;
      case "ZYX":
        this._x = f * h * u - c * d * _, this._y = c * d * u + f * h * _, this._z = c * h * _ - f * d * u, this._w = c * h * u + f * d * _;
        break;
      case "YZX":
        this._x = f * h * u + c * d * _, this._y = c * d * u + f * h * _, this._z = c * h * _ - f * d * u, this._w = c * h * u - f * d * _;
        break;
      case "XZY":
        this._x = f * h * u - c * d * _, this._y = c * d * u - f * h * _, this._z = c * h * _ + f * d * u, this._w = c * h * u + f * d * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], u = t[10], f = n + a + u;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (h - l) * d, this._y = (s - c) * d, this._z = (o - i) * d;
    } else if (n > a && n > u) {
      const d = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - l) / d, this._x = 0.25 * d, this._y = (i + o) / d, this._z = (s + c) / d;
    } else if (a > u) {
      const d = 2 * Math.sqrt(1 + a - n - u);
      this._w = (s - c) / d, this._x = (i + o) / d, this._y = 0.25 * d, this._z = (l + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / d, this._x = (s + c) / d, this._y = (l + h) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Et(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + o * a + i * c - s * l, this._y = i * h + o * l + s * a - n * c, this._z = s * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * o + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - t) * h) / c, f = Math.sin(t * h) / c;
    return this._w = o * u + this._w * f, this._x = n * u + this._x * f, this._y = i * u + this._y * f, this._z = s * u + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    L.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Eh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Eh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * i - a * n), h = 2 * (a * t - s * i), u = 2 * (s * n - o * t);
    return this.x = t + l * c + o * u - a * h, this.y = n + l * h + a * c - s * u, this.z = i + l * u + s * h - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = i * l - s * a, this.y = s * o - n * l, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Sa.copy(this).projectOnVector(e), this.sub(Sa);
  }
  reflect(e) {
    return this.sub(Sa.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Et(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Sa = /* @__PURE__ */ new L(), Eh = /* @__PURE__ */ new Fn();
class hi {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Sn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Sn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Sn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, Sn) : Sn.fromBufferAttribute(s, o), Sn.applyMatrix4(e.matrixWorld), this.expandByPoint(Sn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Jr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Jr.copy(n.boundingBox)), Jr.applyMatrix4(e.matrixWorld), this.union(Jr);
    }
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Sn), Sn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(lr), Qr.subVectors(this.max, lr), hs.subVectors(e.a, lr), us.subVectors(e.b, lr), fs.subVectors(e.c, lr), pi.subVectors(us, hs), mi.subVectors(fs, us), Ui.subVectors(hs, fs);
    let t = [
      0,
      -pi.z,
      pi.y,
      0,
      -mi.z,
      mi.y,
      0,
      -Ui.z,
      Ui.y,
      pi.z,
      0,
      -pi.x,
      mi.z,
      0,
      -mi.x,
      Ui.z,
      0,
      -Ui.x,
      -pi.y,
      pi.x,
      0,
      -mi.y,
      mi.x,
      0,
      -Ui.y,
      Ui.x,
      0
    ];
    return !Ta(t, hs, us, fs, Qr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ta(t, hs, us, fs, Qr)) ? !1 : (eo.crossVectors(pi, mi), t = [eo.x, eo.y, eo.z], Ta(t, hs, us, fs, Qr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Sn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Sn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Xn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Xn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Xn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Xn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Xn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Xn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Xn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Xn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Xn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Xn = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Sn = /* @__PURE__ */ new L(), Jr = /* @__PURE__ */ new hi(), hs = /* @__PURE__ */ new L(), us = /* @__PURE__ */ new L(), fs = /* @__PURE__ */ new L(), pi = /* @__PURE__ */ new L(), mi = /* @__PURE__ */ new L(), Ui = /* @__PURE__ */ new L(), lr = /* @__PURE__ */ new L(), Qr = /* @__PURE__ */ new L(), eo = /* @__PURE__ */ new L(), Oi = /* @__PURE__ */ new L();
function Ta(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    Oi.fromArray(r, s);
    const a = i.x * Math.abs(Oi.x) + i.y * Math.abs(Oi.y) + i.z * Math.abs(Oi.z), l = e.dot(Oi), c = t.dot(Oi), h = n.dot(Oi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const Bm = /* @__PURE__ */ new hi(), cr = /* @__PURE__ */ new L(), Ea = /* @__PURE__ */ new L();
class zn {
  constructor(e = new L(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Bm.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    cr.subVectors(e, this.center);
    const t = cr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(cr, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ea.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(cr.copy(e.center).add(Ea)), this.expandByPoint(cr.copy(e.center).sub(Ea))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Yn = /* @__PURE__ */ new L(), ba = /* @__PURE__ */ new L(), to = /* @__PURE__ */ new L(), gi = /* @__PURE__ */ new L(), Aa = /* @__PURE__ */ new L(), no = /* @__PURE__ */ new L(), wa = /* @__PURE__ */ new L();
class tr {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Yn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Yn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Yn.copy(this.origin).addScaledVector(this.direction, t), Yn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ba.copy(e).add(t).multiplyScalar(0.5), to.copy(t).sub(e).normalize(), gi.copy(this.origin).sub(ba);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(to), a = gi.dot(this.direction), l = -gi.dot(to), c = gi.lengthSq(), h = Math.abs(1 - o * o);
    let u, f, d, _;
    if (h > 0)
      if (u = o * l - a, f = o * a - l, _ = s * h, u >= 0)
        if (f >= -_)
          if (f <= _) {
            const g = 1 / h;
            u *= g, f *= g, d = u * (u + o * f + 2 * a) + f * (o * u + f + 2 * l) + c;
          } else
            f = s, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
        else
          f = -s, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
      else
        f <= -_ ? (u = Math.max(0, -(-o * s + a)), f = u > 0 ? -s : Math.min(Math.max(-s, -l), s), d = -u * u + f * (f + 2 * l) + c) : f <= _ ? (u = 0, f = Math.min(Math.max(-s, -l), s), d = f * (f + 2 * l) + c) : (u = Math.max(0, -(o * s + a)), f = u > 0 ? s : Math.min(Math.max(-s, -l), s), d = -u * u + f * (f + 2 * l) + c);
    else
      f = o > 0 ? -s : s, u = Math.max(0, -(o * f + a)), d = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ba).addScaledVector(to, f), d;
  }
  intersectSphere(e, t) {
    Yn.subVectors(e.center, this.origin);
    const n = Yn.dot(this.direction), i = Yn.dot(Yn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const o = Math.sqrt(s - i), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), h >= 0 ? (s = (e.min.y - f.y) * h, o = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, o = (e.min.y - f.y) * h), n > o || s > i || ((s > n || isNaN(n)) && (n = s), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - f.z) * u, l = (e.max.z - f.z) * u) : (a = (e.max.z - f.z) * u, l = (e.min.z - f.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Yn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Aa.subVectors(t, e), no.subVectors(n, e), wa.crossVectors(Aa, no);
    let o = this.direction.dot(wa), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    gi.subVectors(this.origin, e);
    const l = a * this.direction.dot(no.crossVectors(gi, no));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Aa.cross(gi));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * gi.dot(wa);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ue {
  constructor(e, t, n, i, s, o, a, l, c, h, u, f, d, _, g, p) {
    Ue.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, o, a, l, c, h, u, f, d, _, g, p);
  }
  set(e, t, n, i, s, o, a, l, c, h, u, f, d, _, g, p) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = i, m[1] = s, m[5] = o, m[9] = a, m[13] = l, m[2] = c, m[6] = h, m[10] = u, m[14] = f, m[3] = d, m[7] = _, m[11] = g, m[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ue().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / ds.setFromMatrixColumn(e, 0).length(), s = 1 / ds.setFromMatrixColumn(e, 1).length(), o = 1 / ds.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * h, d = o * u, _ = a * h, g = a * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = d + _ * c, t[5] = f - g * c, t[9] = -a * l, t[2] = g - f * c, t[6] = _ + d * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const f = l * h, d = l * u, _ = c * h, g = c * u;
      t[0] = f + g * a, t[4] = _ * a - d, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = d * a - _, t[6] = g + f * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const f = l * h, d = l * u, _ = c * h, g = c * u;
      t[0] = f - g * a, t[4] = -o * u, t[8] = _ + d * a, t[1] = d + _ * a, t[5] = o * h, t[9] = g - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const f = o * h, d = o * u, _ = a * h, g = a * u;
      t[0] = l * h, t[4] = _ * c - d, t[8] = f * c + g, t[1] = l * u, t[5] = g * c + f, t[9] = d * c - _, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const f = o * l, d = o * c, _ = a * l, g = a * c;
      t[0] = l * h, t[4] = g - f * u, t[8] = _ * u + d, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = d * u + _, t[10] = f - g * u;
    } else if (e.order === "XZY") {
      const f = o * l, d = o * c, _ = a * l, g = a * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = f * u + g, t[5] = o * h, t[9] = d * u - _, t[2] = _ * u - d, t[6] = a * h, t[10] = g * u + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(km, e, zm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return sn.subVectors(e, t), sn.lengthSq() === 0 && (sn.z = 1), sn.normalize(), _i.crossVectors(n, sn), _i.lengthSq() === 0 && (Math.abs(n.z) === 1 ? sn.x += 1e-4 : sn.z += 1e-4, sn.normalize(), _i.crossVectors(n, sn)), _i.normalize(), io.crossVectors(sn, _i), i[0] = _i.x, i[4] = io.x, i[8] = sn.x, i[1] = _i.y, i[5] = io.y, i[9] = sn.y, i[2] = _i.z, i[6] = io.z, i[10] = sn.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], f = n[9], d = n[13], _ = n[2], g = n[6], p = n[10], m = n[14], v = n[3], x = n[7], y = n[11], R = n[15], A = i[0], b = i[4], C = i[8], S = i[12], T = i[1], D = i[5], B = i[9], O = i[13], X = i[2], K = i[6], H = i[10], j = i[14], W = i[3], se = i[7], ae = i[11], ue = i[15];
    return s[0] = o * A + a * T + l * X + c * W, s[4] = o * b + a * D + l * K + c * se, s[8] = o * C + a * B + l * H + c * ae, s[12] = o * S + a * O + l * j + c * ue, s[1] = h * A + u * T + f * X + d * W, s[5] = h * b + u * D + f * K + d * se, s[9] = h * C + u * B + f * H + d * ae, s[13] = h * S + u * O + f * j + d * ue, s[2] = _ * A + g * T + p * X + m * W, s[6] = _ * b + g * D + p * K + m * se, s[10] = _ * C + g * B + p * H + m * ae, s[14] = _ * S + g * O + p * j + m * ue, s[3] = v * A + x * T + y * X + R * W, s[7] = v * b + x * D + y * K + R * se, s[11] = v * C + x * B + y * H + R * ae, s[15] = v * S + x * O + y * j + R * ue, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], u = e[6], f = e[10], d = e[14], _ = e[3], g = e[7], p = e[11], m = e[15];
    return _ * (+s * l * u - i * c * u - s * a * f + n * c * f + i * a * d - n * l * d) + g * (+t * l * d - t * c * f + s * o * f - i * o * d + i * c * h - s * l * h) + p * (+t * c * u - t * a * d - s * o * u + n * o * d + s * a * h - n * c * h) + m * (-i * a * h - t * l * u + t * a * f + i * o * u - n * o * f + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = e[9], f = e[10], d = e[11], _ = e[12], g = e[13], p = e[14], m = e[15], v = u * p * c - g * f * c + g * l * d - a * p * d - u * l * m + a * f * m, x = _ * f * c - h * p * c - _ * l * d + o * p * d + h * l * m - o * f * m, y = h * g * c - _ * u * c + _ * a * d - o * g * d - h * a * m + o * u * m, R = _ * u * l - h * g * l - _ * a * f + o * g * f + h * a * p - o * u * p, A = t * v + n * x + i * y + s * R;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / A;
    return e[0] = v * b, e[1] = (g * f * s - u * p * s - g * i * d + n * p * d + u * i * m - n * f * m) * b, e[2] = (a * p * s - g * l * s + g * i * c - n * p * c - a * i * m + n * l * m) * b, e[3] = (u * l * s - a * f * s - u * i * c + n * f * c + a * i * d - n * l * d) * b, e[4] = x * b, e[5] = (h * p * s - _ * f * s + _ * i * d - t * p * d - h * i * m + t * f * m) * b, e[6] = (_ * l * s - o * p * s - _ * i * c + t * p * c + o * i * m - t * l * m) * b, e[7] = (o * f * s - h * l * s + h * i * c - t * f * c - o * i * d + t * l * d) * b, e[8] = y * b, e[9] = (_ * u * s - h * g * s - _ * n * d + t * g * d + h * n * m - t * u * m) * b, e[10] = (o * g * s - _ * a * s + _ * n * c - t * g * c - o * n * m + t * a * m) * b, e[11] = (h * a * s - o * u * s - h * n * c + t * u * c + o * n * d - t * a * d) * b, e[12] = R * b, e[13] = (h * g * i - _ * u * i + _ * n * f - t * g * f - h * n * p + t * u * p) * b, e[14] = (_ * a * i - o * g * i - _ * n * l + t * g * l + o * n * p - t * a * p) * b, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * f + t * a * f) * b, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, h = s * a;
    return this.set(
      c * o + n,
      c * a - i * l,
      c * l + i * a,
      0,
      c * a + i * l,
      h * a + n,
      h * l - i * o,
      0,
      c * l - i * a,
      h * l + i * o,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, h = o + o, u = a + a, f = s * c, d = s * h, _ = s * u, g = o * h, p = o * u, m = a * u, v = l * c, x = l * h, y = l * u, R = n.x, A = n.y, b = n.z;
    return i[0] = (1 - (g + m)) * R, i[1] = (d + y) * R, i[2] = (_ - x) * R, i[3] = 0, i[4] = (d - y) * A, i[5] = (1 - (f + m)) * A, i[6] = (p + v) * A, i[7] = 0, i[8] = (_ + x) * b, i[9] = (p - v) * b, i[10] = (1 - (f + g)) * b, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = ds.set(i[0], i[1], i[2]).length();
    const o = ds.set(i[4], i[5], i[6]).length(), a = ds.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Tn.copy(this);
    const c = 1 / s, h = 1 / o, u = 1 / a;
    return Tn.elements[0] *= c, Tn.elements[1] *= c, Tn.elements[2] *= c, Tn.elements[4] *= h, Tn.elements[5] *= h, Tn.elements[6] *= h, Tn.elements[8] *= u, Tn.elements[9] *= u, Tn.elements[10] *= u, t.setFromRotationMatrix(Tn), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, s, o, a = ni) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), f = (n + i) / (n - i);
    let d, _;
    if (a === ni)
      d = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
    else if (a === qo)
      d = -o / (o - s), _ = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o, a = ni) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - s), f = (t + e) * c, d = (n + i) * h;
    let _, g;
    if (a === ni)
      _ = (o + s) * u, g = -2 * u;
    else if (a === qo)
      _ = s * u, g = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -d, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const ds = /* @__PURE__ */ new L(), Tn = /* @__PURE__ */ new Ue(), km = /* @__PURE__ */ new L(0, 0, 0), zm = /* @__PURE__ */ new L(1, 1, 1), _i = /* @__PURE__ */ new L(), io = /* @__PURE__ */ new L(), sn = /* @__PURE__ */ new L(), bh = /* @__PURE__ */ new Ue(), Ah = /* @__PURE__ */ new Fn();
class Bn {
  constructor(e = 0, t = 0, n = 0, i = Bn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], o = i[4], a = i[8], l = i[1], c = i[5], h = i[9], u = i[2], f = i[6], d = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Et(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Et(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Et(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Et(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Et(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, d));
        break;
      case "XZY":
        this._z = Math.asin(-Et(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return bh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(bh, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ah.setFromEuler(this), this.setFromQuaternion(Ah, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Bn.DEFAULT_ORDER = "XYZ";
class oa {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Hm = 0;
const wh = /* @__PURE__ */ new L(), ps = /* @__PURE__ */ new Fn(), qn = /* @__PURE__ */ new Ue(), so = /* @__PURE__ */ new L(), hr = /* @__PURE__ */ new L(), Vm = /* @__PURE__ */ new L(), Gm = /* @__PURE__ */ new Fn(), Rh = /* @__PURE__ */ new L(1, 0, 0), Ch = /* @__PURE__ */ new L(0, 1, 0), Ph = /* @__PURE__ */ new L(0, 0, 1), Lh = { type: "added" }, Wm = { type: "removed" }, ms = { type: "childadded", child: null }, Ra = { type: "childremoved", child: null };
class tt extends is {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Hm++ }), this.uuid = vn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = tt.DEFAULT_UP.clone();
    const e = new L(), t = new Bn(), n = new Fn(), i = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ue()
      },
      normalMatrix: {
        value: new Be()
      }
    }), this.matrix = new Ue(), this.matrixWorld = new Ue(), this.matrixAutoUpdate = tt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new oa(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ps.setFromAxisAngle(e, t), this.quaternion.multiply(ps), this;
  }
  rotateOnWorldAxis(e, t) {
    return ps.setFromAxisAngle(e, t), this.quaternion.premultiply(ps), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Rh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ch, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ph, e);
  }
  translateOnAxis(e, t) {
    return wh.copy(e).applyQuaternion(this.quaternion), this.position.add(wh.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Rh, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ch, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ph, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(qn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? so.copy(e) : so.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), hr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? qn.lookAt(hr, so, this.up) : qn.lookAt(so, hr, this.up), this.quaternion.setFromRotationMatrix(qn), i && (qn.extractRotation(i.matrixWorld), ps.setFromRotationMatrix(qn), this.quaternion.premultiply(ps.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Lh), ms.child = e, this.dispatchEvent(ms), ms.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Wm), Ra.child = e, this.dispatchEvent(Ra), Ra.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), qn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), qn.multiply(e.parent.matrixWorld)), e.applyMatrix4(qn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Lh), ms.child = e, this.dispatchEvent(ms), ms.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, o = i.length; s < o; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hr, e, Vm), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hr, Gm, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            s(e.shapes, u);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        i.material = a;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), f = o(e.skeletons), d = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d), _.length > 0 && (n.nodes = _);
    }
    return n.object = i, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
tt.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
tt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const En = /* @__PURE__ */ new L(), Kn = /* @__PURE__ */ new L(), Ca = /* @__PURE__ */ new L(), jn = /* @__PURE__ */ new L(), gs = /* @__PURE__ */ new L(), _s = /* @__PURE__ */ new L(), Dh = /* @__PURE__ */ new L(), Pa = /* @__PURE__ */ new L(), La = /* @__PURE__ */ new L(), Da = /* @__PURE__ */ new L();
class Dn {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), En.subVectors(e, t), i.cross(En);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    En.subVectors(i, t), Kn.subVectors(n, t), Ca.subVectors(e, t);
    const o = En.dot(En), a = En.dot(Kn), l = En.dot(Ca), c = Kn.dot(Kn), h = Kn.dot(Ca), u = o * c - a * a;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / u, d = (c * l - a * h) * f, _ = (o * h - a * l) * f;
    return s.set(1 - d - _, _, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, jn) === null ? !1 : jn.x >= 0 && jn.y >= 0 && jn.x + jn.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, o, a, l) {
    return this.getBarycoord(e, t, n, i, jn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, jn.x), l.addScaledVector(o, jn.y), l.addScaledVector(a, jn.z), l);
  }
  static isFrontFacing(e, t, n, i) {
    return En.subVectors(n, t), Kn.subVectors(e, t), En.cross(Kn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return En.subVectors(this.c, this.b), Kn.subVectors(this.a, this.b), En.cross(Kn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Dn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Dn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return Dn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Dn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Dn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let o, a;
    gs.subVectors(i, n), _s.subVectors(s, n), Pa.subVectors(e, n);
    const l = gs.dot(Pa), c = _s.dot(Pa);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    La.subVectors(e, i);
    const h = gs.dot(La), u = _s.dot(La);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(n).addScaledVector(gs, o);
    Da.subVectors(e, s);
    const d = gs.dot(Da), _ = _s.dot(Da);
    if (_ >= 0 && d <= _)
      return t.copy(s);
    const g = d * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0)
      return a = c / (c - _), t.copy(n).addScaledVector(_s, a);
    const p = h * _ - d * u;
    if (p <= 0 && u - h >= 0 && d - _ >= 0)
      return Dh.subVectors(s, i), a = (u - h) / (u - h + (d - _)), t.copy(i).addScaledVector(Dh, a);
    const m = 1 / (p + g + f);
    return o = g * m, a = f * m, t.copy(n).addScaledVector(gs, o).addScaledVector(_s, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const If = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, xi = { h: 0, s: 0, l: 0 }, ro = { h: 0, s: 0, l: 0 };
function Ia(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Se {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Tt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ye.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Ye.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ye.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Ye.workingColorSpace) {
    if (e = Ac(e, 1), t = Et(t, 0, 1), n = Et(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Ia(o, s, e + 1 / 3), this.g = Ia(o, s, e), this.b = Ia(o, s, e - 1 / 3);
    }
    return Ye.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Tt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Tt) {
    const n = If[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ns(e.r), this.g = Ns(e.g), this.b = Ns(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ya(e.r), this.g = ya(e.g), this.b = ya(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Tt) {
    return Ye.fromWorkingColorSpace(Ft.copy(this), e), Math.round(Et(Ft.r * 255, 0, 255)) * 65536 + Math.round(Et(Ft.g * 255, 0, 255)) * 256 + Math.round(Et(Ft.b * 255, 0, 255));
  }
  getHexString(e = Tt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ye.workingColorSpace) {
    Ye.fromWorkingColorSpace(Ft.copy(this), t);
    const n = Ft.r, i = Ft.g, s = Ft.b, o = Math.max(n, i, s), a = Math.min(n, i, s);
    let l, c;
    const h = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          l = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Ye.workingColorSpace) {
    return Ye.fromWorkingColorSpace(Ft.copy(this), t), e.r = Ft.r, e.g = Ft.g, e.b = Ft.b, e;
  }
  getStyle(e = Tt) {
    Ye.fromWorkingColorSpace(Ft.copy(this), e);
    const t = Ft.r, n = Ft.g, i = Ft.b;
    return e !== Tt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(xi), this.setHSL(xi.h + e, xi.s + t, xi.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(xi), e.getHSL(ro);
    const n = Tr(xi.h, ro.h, t), i = Tr(xi.s, ro.s, t), s = Tr(xi.l, ro.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ft = /* @__PURE__ */ new Se();
Se.NAMES = If;
let Xm = 0;
class Un extends is {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Xm++ }), this.uuid = vn(), this.name = "", this.type = "Material", this.blending = Ls, this.side = oi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = pl, this.blendDst = ml, this.blendEquation = Yi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Se(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Vo, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = xh, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ls, this.stencilZFail = ls, this.stencilZPass = ls, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ls && (n.blending = this.blending), this.side !== oi && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== pl && (n.blendSrc = this.blendSrc), this.blendDst !== ml && (n.blendDst = this.blendDst), this.blendEquation !== Yi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Vo && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== xh && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ls && (n.stencilFail = this.stencilFail), this.stencilZFail !== ls && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ls && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures), o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
  onBeforeRender() {
    console.warn("Material: onBeforeRender() has been removed.");
  }
}
class wn extends Un {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Se(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Bn(), this.combine = pf, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const vt = /* @__PURE__ */ new L(), oo = /* @__PURE__ */ new te();
class Pt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Xl, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = An, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return Is("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        oo.fromBufferAttribute(this, t), oo.applyMatrix3(e), this.setXY(t, oo.x, oo.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        vt.fromBufferAttribute(this, t), vt.applyMatrix3(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyMatrix4(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyNormalMatrix(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.transformDirection(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = bn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = $e(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array), s = $e(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Xl && (e.usage = this.usage), e;
  }
}
class Nf extends Pt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Uf extends Pt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Lt extends Pt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ym = 0;
const dn = /* @__PURE__ */ new Ue(), Na = /* @__PURE__ */ new tt(), xs = /* @__PURE__ */ new L(), rn = /* @__PURE__ */ new hi(), ur = /* @__PURE__ */ new hi(), wt = /* @__PURE__ */ new L();
class qt extends is {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ym++ }), this.uuid = vn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Pf(e) ? Uf : Nf)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Be().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return dn.makeRotationFromQuaternion(e), this.applyMatrix4(dn), this;
  }
  rotateX(e) {
    return dn.makeRotationX(e), this.applyMatrix4(dn), this;
  }
  rotateY(e) {
    return dn.makeRotationY(e), this.applyMatrix4(dn), this;
  }
  rotateZ(e) {
    return dn.makeRotationZ(e), this.applyMatrix4(dn), this;
  }
  translate(e, t, n) {
    return dn.makeTranslation(e, t, n), this.applyMatrix4(dn), this;
  }
  scale(e, t, n) {
    return dn.makeScale(e, t, n), this.applyMatrix4(dn), this;
  }
  lookAt(e) {
    return Na.lookAt(e), Na.updateMatrix(), this.applyMatrix4(Na.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(xs).negate(), this.translate(xs.x, xs.y, xs.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Lt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new hi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          rn.setFromBufferAttribute(s), this.morphTargetsRelative ? (wt.addVectors(this.boundingBox.min, rn.min), this.boundingBox.expandByPoint(wt), wt.addVectors(this.boundingBox.max, rn.max), this.boundingBox.expandByPoint(wt)) : (this.boundingBox.expandByPoint(rn.min), this.boundingBox.expandByPoint(rn.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new zn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (rn.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          ur.setFromBufferAttribute(a), this.morphTargetsRelative ? (wt.addVectors(rn.min, ur.min), rn.expandByPoint(wt), wt.addVectors(rn.max, ur.max), rn.expandByPoint(wt)) : (rn.expandByPoint(ur.min), rn.expandByPoint(ur.max));
        }
      rn.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        wt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(wt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            wt.fromBufferAttribute(a, c), l && (xs.fromBufferAttribute(e, c), wt.add(xs)), i = Math.max(i, n.distanceToSquared(wt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Pt(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let C = 0; C < n.count; C++)
      a[C] = new L(), l[C] = new L();
    const c = new L(), h = new L(), u = new L(), f = new te(), d = new te(), _ = new te(), g = new L(), p = new L();
    function m(C, S, T) {
      c.fromBufferAttribute(n, C), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, T), f.fromBufferAttribute(s, C), d.fromBufferAttribute(s, S), _.fromBufferAttribute(s, T), h.sub(c), u.sub(c), d.sub(f), _.sub(f);
      const D = 1 / (d.x * _.y - _.x * d.y);
      isFinite(D) && (g.copy(h).multiplyScalar(_.y).addScaledVector(u, -d.y).multiplyScalar(D), p.copy(u).multiplyScalar(d.x).addScaledVector(h, -_.x).multiplyScalar(D), a[C].add(g), a[S].add(g), a[T].add(g), l[C].add(p), l[S].add(p), l[T].add(p));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: e.count
    }]);
    for (let C = 0, S = v.length; C < S; ++C) {
      const T = v[C], D = T.start, B = T.count;
      for (let O = D, X = D + B; O < X; O += 3)
        m(
          e.getX(O + 0),
          e.getX(O + 1),
          e.getX(O + 2)
        );
    }
    const x = new L(), y = new L(), R = new L(), A = new L();
    function b(C) {
      R.fromBufferAttribute(i, C), A.copy(R);
      const S = a[C];
      x.copy(S), x.sub(R.multiplyScalar(R.dot(S))).normalize(), y.crossVectors(A, S);
      const D = y.dot(l[C]) < 0 ? -1 : 1;
      o.setXYZW(C, x.x, x.y, x.z, D);
    }
    for (let C = 0, S = v.length; C < S; ++C) {
      const T = v[C], D = T.start, B = T.count;
      for (let O = D, X = D + B; O < X; O += 3)
        b(e.getX(O + 0)), b(e.getX(O + 1)), b(e.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Pt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, d = n.count; f < d; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new L(), s = new L(), o = new L(), a = new L(), l = new L(), c = new L(), h = new L(), u = new L();
      if (e)
        for (let f = 0, d = e.count; f < d; f += 3) {
          const _ = e.getX(f + 0), g = e.getX(f + 1), p = e.getX(f + 2);
          i.fromBufferAttribute(t, _), s.fromBufferAttribute(t, g), o.fromBufferAttribute(t, p), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), a.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, p), a.add(h), l.add(h), c.add(h), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, d = t.count; f < d; f += 3)
          i.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), h.subVectors(o, s), u.subVectors(i, s), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      wt.fromBufferAttribute(e, t), wt.normalize(), e.setXYZ(t, wt.x, wt.y, wt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, f = new c.constructor(l.length * h);
      let d = 0, _ = 0;
      for (let g = 0, p = l.length; g < p; g++) {
        a.isInterleavedBufferAttribute ? d = l[g] * a.data.stride + a.offset : d = l[g] * h;
        for (let m = 0; m < h; m++)
          f[_++] = c[d++];
      }
      return new Pt(f, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new qt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], d = e(f, n);
        l.push(d);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u];
        h.push(d.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let f = 0, d = u.length; f < d; f++)
        h.push(u[f].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ih = /* @__PURE__ */ new Ue(), Fi = /* @__PURE__ */ new tr(), ao = /* @__PURE__ */ new zn(), Nh = /* @__PURE__ */ new L(), vs = /* @__PURE__ */ new L(), ys = /* @__PURE__ */ new L(), Ms = /* @__PURE__ */ new L(), Ua = /* @__PURE__ */ new L(), lo = /* @__PURE__ */ new L(), co = /* @__PURE__ */ new te(), ho = /* @__PURE__ */ new te(), uo = /* @__PURE__ */ new te(), Uh = /* @__PURE__ */ new L(), Oh = /* @__PURE__ */ new L(), Fh = /* @__PURE__ */ new L(), fo = /* @__PURE__ */ new L(), po = /* @__PURE__ */ new L();
class kt extends tt {
  constructor(e = new qt(), t = new wn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      lo.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l], u = s[l];
        h !== 0 && (Ua.fromBufferAttribute(u, e), o ? lo.addScaledVector(Ua, h) : lo.addScaledVector(Ua.sub(t), h));
      }
      t.add(lo);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ao.copy(n.boundingSphere), ao.applyMatrix4(s), Fi.copy(e.ray).recast(e.near), !(ao.containsPoint(Fi.origin) === !1 && (Fi.intersectSphere(ao, Nh) === null || Fi.origin.distanceToSquared(Nh) > (e.far - e.near) ** 2)) && (Ih.copy(s).invert(), Fi.copy(e.ray).applyMatrix4(Ih), !(n.boundingBox !== null && Fi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Fi)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, f = s.groups, d = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let _ = 0, g = f.length; _ < g; _++) {
          const p = f[_], m = o[p.materialIndex], v = Math.max(p.start, d.start), x = Math.min(a.count, Math.min(p.start + p.count, d.start + d.count));
          for (let y = v, R = x; y < R; y += 3) {
            const A = a.getX(y), b = a.getX(y + 1), C = a.getX(y + 2);
            i = mo(this, m, e, n, c, h, u, A, b, C), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const _ = Math.max(0, d.start), g = Math.min(a.count, d.start + d.count);
        for (let p = _, m = g; p < m; p += 3) {
          const v = a.getX(p), x = a.getX(p + 1), y = a.getX(p + 2);
          i = mo(this, o, e, n, c, h, u, v, x, y), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let _ = 0, g = f.length; _ < g; _++) {
          const p = f[_], m = o[p.materialIndex], v = Math.max(p.start, d.start), x = Math.min(l.count, Math.min(p.start + p.count, d.start + d.count));
          for (let y = v, R = x; y < R; y += 3) {
            const A = y, b = y + 1, C = y + 2;
            i = mo(this, m, e, n, c, h, u, A, b, C), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const _ = Math.max(0, d.start), g = Math.min(l.count, d.start + d.count);
        for (let p = _, m = g; p < m; p += 3) {
          const v = p, x = p + 1, y = p + 2;
          i = mo(this, o, e, n, c, h, u, v, x, y), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
  }
}
function qm(r, e, t, n, i, s, o, a) {
  let l;
  if (e.side === jt ? l = n.intersectTriangle(o, s, i, !0, a) : l = n.intersectTriangle(i, s, o, e.side === oi, a), l === null) return null;
  po.copy(a), po.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(po);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: po.clone(),
    object: r
  };
}
function mo(r, e, t, n, i, s, o, a, l, c) {
  r.getVertexPosition(a, vs), r.getVertexPosition(l, ys), r.getVertexPosition(c, Ms);
  const h = qm(r, e, t, n, vs, ys, Ms, fo);
  if (h) {
    i && (co.fromBufferAttribute(i, a), ho.fromBufferAttribute(i, l), uo.fromBufferAttribute(i, c), h.uv = Dn.getInterpolation(fo, vs, ys, Ms, co, ho, uo, new te())), s && (co.fromBufferAttribute(s, a), ho.fromBufferAttribute(s, l), uo.fromBufferAttribute(s, c), h.uv1 = Dn.getInterpolation(fo, vs, ys, Ms, co, ho, uo, new te())), o && (Uh.fromBufferAttribute(o, a), Oh.fromBufferAttribute(o, l), Fh.fromBufferAttribute(o, c), h.normal = Dn.getInterpolation(fo, vs, ys, Ms, Uh, Oh, Fh, new L()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: l,
      c,
      normal: new L(),
      materialIndex: 0
    };
    Dn.getNormal(vs, ys, Ms, u.normal), h.face = u;
  }
  return h;
}
class Xr extends qt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let f = 0, d = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, i, o, 2), _("x", "z", "y", 1, -1, e, n, -t, i, o, 3), _("x", "y", "z", 1, -1, e, t, n, i, s, 4), _("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Lt(c, 3)), this.setAttribute("normal", new Lt(h, 3)), this.setAttribute("uv", new Lt(u, 2));
    function _(g, p, m, v, x, y, R, A, b, C, S) {
      const T = y / b, D = R / C, B = y / 2, O = R / 2, X = A / 2, K = b + 1, H = C + 1;
      let j = 0, W = 0;
      const se = new L();
      for (let ae = 0; ae < H; ae++) {
        const ue = ae * D - O;
        for (let Le = 0; Le < K; Le++) {
          const Ge = Le * T - B;
          se[g] = Ge * v, se[p] = ue * x, se[m] = X, c.push(se.x, se.y, se.z), se[g] = 0, se[p] = 0, se[m] = A > 0 ? 1 : -1, h.push(se.x, se.y, se.z), u.push(Le / b), u.push(1 - ae / C), j += 1;
        }
      }
      for (let ae = 0; ae < C; ae++)
        for (let ue = 0; ue < b; ue++) {
          const Le = f + ue + K * ae, Ge = f + ue + K * (ae + 1), q = f + (ue + 1) + K * (ae + 1), J = f + (ue + 1) + K * ae;
          l.push(Le, Ge, J), l.push(Ge, q, J), W += 6;
        }
      a.addGroup(d, W, S), d += W, f += j;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Xr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Xs(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Gt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Xs(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Km(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function Of(r) {
  const e = r.getRenderTarget();
  return e === null ? r.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ye.workingColorSpace;
}
const Ko = { clone: Xs, merge: Gt };
var jm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Zm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Kt extends Un {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = jm, this.fragmentShader = Zm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Xs(e.uniforms), this.uniformsGroups = Km(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
let Ff = class extends tt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ue(), this.projectionMatrix = new Ue(), this.projectionMatrixInverse = new Ue(), this.coordinateSystem = ni;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
const vi = /* @__PURE__ */ new L(), Bh = /* @__PURE__ */ new te(), kh = /* @__PURE__ */ new te();
class Wt extends Ff {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ws * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Sr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ws * 2 * Math.atan(
      Math.tan(Sr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    vi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(vi.x, vi.y).multiplyScalar(-e / vi.z), vi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(vi.x, vi.y).multiplyScalar(-e / vi.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Bh, kh), t.subVectors(kh, Bh);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Sr * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ss = -90, Ts = 1;
class $m extends tt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Wt(Ss, Ts, e, t);
    i.layers = this.layers, this.add(i);
    const s = new Wt(Ss, Ts, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Wt(Ss, Ts, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Wt(Ss, Ts, e, t);
    a.layers = this.layers, this.add(a);
    const l = new Wt(Ss, Ts, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Wt(Ss, Ts, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === ni)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === qo)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, h] = this.children, u = e.getRenderTarget(), f = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, f, d), e.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class wc extends Ct {
  constructor(e, t, n, i, s, o, a, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ks, super(e, t, n, i, s, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Jm extends Rn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new wc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : an;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Xr(5, 5, 5), s = new Kt({
      name: "CubemapFromEquirect",
      uniforms: Xs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: jt,
      blending: si
    });
    s.uniforms.tEquirect.value = t;
    const o = new kt(i, s), a = t.minFilter;
    return t.minFilter === ti && (t.minFilter = an), new $m(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Oa = /* @__PURE__ */ new L(), Qm = /* @__PURE__ */ new L(), eg = /* @__PURE__ */ new Be();
class Mi {
  constructor(e = new L(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Oa.subVectors(n, t).cross(Qm.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Oa), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || eg.getNormalMatrix(e), i = this.coplanarPoint(Oa).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Bi = /* @__PURE__ */ new zn(), go = /* @__PURE__ */ new L();
class Rc {
  constructor(e = new Mi(), t = new Mi(), n = new Mi(), i = new Mi(), s = new Mi(), o = new Mi()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = ni) {
    const n = this.planes, i = e.elements, s = i[0], o = i[1], a = i[2], l = i[3], c = i[4], h = i[5], u = i[6], f = i[7], d = i[8], _ = i[9], g = i[10], p = i[11], m = i[12], v = i[13], x = i[14], y = i[15];
    if (n[0].setComponents(l - s, f - c, p - d, y - m).normalize(), n[1].setComponents(l + s, f + c, p + d, y + m).normalize(), n[2].setComponents(l + o, f + h, p + _, y + v).normalize(), n[3].setComponents(l - o, f - h, p - _, y - v).normalize(), n[4].setComponents(l - a, f - u, p - g, y - x).normalize(), t === ni)
      n[5].setComponents(l + a, f + u, p + g, y + x).normalize();
    else if (t === qo)
      n[5].setComponents(a, u, g, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Bi);
  }
  intersectsSprite(e) {
    return Bi.center.set(0, 0, 0), Bi.radius = 0.7071067811865476, Bi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Bi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (go.x = i.normal.x > 0 ? e.max.x : e.min.x, go.y = i.normal.y > 0 ? e.max.y : e.min.y, go.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(go) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Bf() {
  let r = null, e = !1, t = null, n = null;
  function i(s, o) {
    t(s, o), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function tg(r) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, f = r.createBuffer();
    r.bindBuffer(l, f), r.bufferData(l, c, h), a.onUploadCallback();
    let d;
    if (c instanceof Float32Array)
      d = r.FLOAT;
    else if (c instanceof Uint16Array)
      a.isFloat16BufferAttribute ? d = r.HALF_FLOAT : d = r.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      d = r.SHORT;
    else if (c instanceof Uint32Array)
      d = r.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      d = r.INT;
    else if (c instanceof Int8Array)
      d = r.BYTE;
    else if (c instanceof Uint8Array)
      d = r.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      d = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: f,
      type: d,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: a.version,
      size: u
    };
  }
  function n(a, l, c) {
    const h = l.array, u = l._updateRange, f = l.updateRanges;
    if (r.bindBuffer(c, a), u.count === -1 && f.length === 0 && r.bufferSubData(c, 0, h), f.length !== 0) {
      for (let d = 0, _ = f.length; d < _; d++) {
        const g = f[d];
        r.bufferSubData(
          c,
          g.start * h.BYTES_PER_ELEMENT,
          h,
          g.start,
          g.count
        );
      }
      l.clearUpdateRanges();
    }
    u.count !== -1 && (r.bufferSubData(
      c,
      u.offset * h.BYTES_PER_ELEMENT,
      h,
      u.offset,
      u.count
    ), u.count = -1), l.onUploadCallback();
  }
  function i(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (r.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = e.get(a);
      (!h || h.version < a.version) && e.set(a, {
        buffer: a.buffer,
        type: a.type,
        bytesPerElement: a.elementSize,
        version: a.version
      });
      return;
    }
    const c = e.get(a);
    if (c === void 0)
      e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, a, l), c.version = a.version;
    }
  }
  return {
    get: i,
    remove: s,
    update: o
  };
}
class aa extends qt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, h = l + 1, u = e / a, f = t / l, d = [], _ = [], g = [], p = [];
    for (let m = 0; m < h; m++) {
      const v = m * f - o;
      for (let x = 0; x < c; x++) {
        const y = x * u - s;
        _.push(y, -v, 0), g.push(0, 0, 1), p.push(x / a), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++)
      for (let v = 0; v < a; v++) {
        const x = v + c * m, y = v + c * (m + 1), R = v + 1 + c * (m + 1), A = v + 1 + c * m;
        d.push(x, y, A), d.push(y, R, A);
      }
    this.setIndex(d), this.setAttribute("position", new Lt(_, 3)), this.setAttribute("normal", new Lt(g, 3)), this.setAttribute("uv", new Lt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new aa(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var ng = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ig = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, sg = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, rg = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, og = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, ag = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, lg = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, cg = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, hg = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, ug = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, fg = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, dg = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, pg = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, mg = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, gg = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, _g = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, xg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, vg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, yg = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Mg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Sg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Tg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Eg = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, bg = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Ag = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, wg = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Rg = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Cg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Pg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Lg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Dg = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ig = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Ng = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Ug = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Og = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Fg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Bg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, kg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, zg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Hg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Vg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Gg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Wg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Xg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Yg = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, qg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Kg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, jg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Zg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, $g = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Jg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Qg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, e_ = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, t_ = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, n_ = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, i_ = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, s_ = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, r_ = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, o_ = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, a_ = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, l_ = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, c_ = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, h_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, u_ = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, f_ = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, d_ = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, p_ = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, m_ = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, g_ = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, __ = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, x_ = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, v_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, y_ = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, M_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, S_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, T_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, E_ = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, b_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, A_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, w_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, R_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, C_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, P_ = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, L_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, D_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, I_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, N_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, U_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, O_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, F_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, B_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, k_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, z_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, H_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, V_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, G_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, W_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, X_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Y_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, q_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, K_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, j_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Z_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, $_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, J_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Q_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, e0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const t0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, n0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, i0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, s0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, r0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, o0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, a0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, l0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, c0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, h0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, u0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, f0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, d0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, p0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, m0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, g0 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _0 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, x0 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, v0 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, y0 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, M0 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, S0 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, T0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, E0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, b0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, A0 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, w0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, R0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, C0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, P0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, L0 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, D0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, I0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, N0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Fe = {
  alphahash_fragment: ng,
  alphahash_pars_fragment: ig,
  alphamap_fragment: sg,
  alphamap_pars_fragment: rg,
  alphatest_fragment: og,
  alphatest_pars_fragment: ag,
  aomap_fragment: lg,
  aomap_pars_fragment: cg,
  batching_pars_vertex: hg,
  batching_vertex: ug,
  begin_vertex: fg,
  beginnormal_vertex: dg,
  bsdfs: pg,
  iridescence_fragment: mg,
  bumpmap_pars_fragment: gg,
  clipping_planes_fragment: _g,
  clipping_planes_pars_fragment: xg,
  clipping_planes_pars_vertex: vg,
  clipping_planes_vertex: yg,
  color_fragment: Mg,
  color_pars_fragment: Sg,
  color_pars_vertex: Tg,
  color_vertex: Eg,
  common: bg,
  cube_uv_reflection_fragment: Ag,
  defaultnormal_vertex: wg,
  displacementmap_pars_vertex: Rg,
  displacementmap_vertex: Cg,
  emissivemap_fragment: Pg,
  emissivemap_pars_fragment: Lg,
  colorspace_fragment: Dg,
  colorspace_pars_fragment: Ig,
  envmap_fragment: Ng,
  envmap_common_pars_fragment: Ug,
  envmap_pars_fragment: Og,
  envmap_pars_vertex: Fg,
  envmap_physical_pars_fragment: Kg,
  envmap_vertex: Bg,
  fog_vertex: kg,
  fog_pars_vertex: zg,
  fog_fragment: Hg,
  fog_pars_fragment: Vg,
  gradientmap_pars_fragment: Gg,
  lightmap_pars_fragment: Wg,
  lights_lambert_fragment: Xg,
  lights_lambert_pars_fragment: Yg,
  lights_pars_begin: qg,
  lights_toon_fragment: jg,
  lights_toon_pars_fragment: Zg,
  lights_phong_fragment: $g,
  lights_phong_pars_fragment: Jg,
  lights_physical_fragment: Qg,
  lights_physical_pars_fragment: e_,
  lights_fragment_begin: t_,
  lights_fragment_maps: n_,
  lights_fragment_end: i_,
  logdepthbuf_fragment: s_,
  logdepthbuf_pars_fragment: r_,
  logdepthbuf_pars_vertex: o_,
  logdepthbuf_vertex: a_,
  map_fragment: l_,
  map_pars_fragment: c_,
  map_particle_fragment: h_,
  map_particle_pars_fragment: u_,
  metalnessmap_fragment: f_,
  metalnessmap_pars_fragment: d_,
  morphinstance_vertex: p_,
  morphcolor_vertex: m_,
  morphnormal_vertex: g_,
  morphtarget_pars_vertex: __,
  morphtarget_vertex: x_,
  normal_fragment_begin: v_,
  normal_fragment_maps: y_,
  normal_pars_fragment: M_,
  normal_pars_vertex: S_,
  normal_vertex: T_,
  normalmap_pars_fragment: E_,
  clearcoat_normal_fragment_begin: b_,
  clearcoat_normal_fragment_maps: A_,
  clearcoat_pars_fragment: w_,
  iridescence_pars_fragment: R_,
  opaque_fragment: C_,
  packing: P_,
  premultiplied_alpha_fragment: L_,
  project_vertex: D_,
  dithering_fragment: I_,
  dithering_pars_fragment: N_,
  roughnessmap_fragment: U_,
  roughnessmap_pars_fragment: O_,
  shadowmap_pars_fragment: F_,
  shadowmap_pars_vertex: B_,
  shadowmap_vertex: k_,
  shadowmask_pars_fragment: z_,
  skinbase_vertex: H_,
  skinning_pars_vertex: V_,
  skinning_vertex: G_,
  skinnormal_vertex: W_,
  specularmap_fragment: X_,
  specularmap_pars_fragment: Y_,
  tonemapping_fragment: q_,
  tonemapping_pars_fragment: K_,
  transmission_fragment: j_,
  transmission_pars_fragment: Z_,
  uv_pars_fragment: $_,
  uv_pars_vertex: J_,
  uv_vertex: Q_,
  worldpos_vertex: e0,
  background_vert: t0,
  background_frag: n0,
  backgroundCube_vert: i0,
  backgroundCube_frag: s0,
  cube_vert: r0,
  cube_frag: o0,
  depth_vert: a0,
  depth_frag: l0,
  distanceRGBA_vert: c0,
  distanceRGBA_frag: h0,
  equirect_vert: u0,
  equirect_frag: f0,
  linedashed_vert: d0,
  linedashed_frag: p0,
  meshbasic_vert: m0,
  meshbasic_frag: g0,
  meshlambert_vert: _0,
  meshlambert_frag: x0,
  meshmatcap_vert: v0,
  meshmatcap_frag: y0,
  meshnormal_vert: M0,
  meshnormal_frag: S0,
  meshphong_vert: T0,
  meshphong_frag: E0,
  meshphysical_vert: b0,
  meshphysical_frag: A0,
  meshtoon_vert: w0,
  meshtoon_frag: R0,
  points_vert: C0,
  points_frag: P0,
  shadow_vert: L0,
  shadow_frag: D0,
  sprite_vert: I0,
  sprite_frag: N0
}, oe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Se(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Be() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Be() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Be() },
    normalScale: { value: /* @__PURE__ */ new te(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Be() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Se(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Se(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Be() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Se(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new te(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  }
}, Pn = {
  basic: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Se(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Se(0) },
        specular: { value: /* @__PURE__ */ new Se(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.roughnessmap,
      oe.metalnessmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Se(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.aomap,
      oe.lightmap,
      oe.emissivemap,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.gradientmap,
      oe.fog,
      oe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Se(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Gt([
      oe.points,
      oe.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Gt([
      oe.sprite,
      oe.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Be() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Be() }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Gt([
      oe.common,
      oe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distanceRGBA_vert,
    fragmentShader: Fe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Gt([
      oe.lights,
      oe.fog,
      {
        color: { value: /* @__PURE__ */ new Se(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
Pn.physical = {
  uniforms: /* @__PURE__ */ Gt([
    Pn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new te(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Se(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Be() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Be() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new te() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Se(0) },
      specularColor: { value: /* @__PURE__ */ new Se(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Be() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Be() },
      anisotropyVector: { value: /* @__PURE__ */ new te() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Be() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const _o = { r: 0, b: 0, g: 0 }, ki = /* @__PURE__ */ new Bn(), U0 = /* @__PURE__ */ new Ue();
function O0(r, e, t, n, i, s, o) {
  const a = new Se(0);
  let l = s === !0 ? 0 : 1, c, h, u = null, f = 0, d = null;
  function _(v) {
    let x = v.isScene === !0 ? v.background : null;
    return x && x.isTexture && (x = (v.backgroundBlurriness > 0 ? t : e).get(x)), x;
  }
  function g(v) {
    let x = !1;
    const y = _(v);
    y === null ? m(a, l) : y && y.isColor && (m(y, 1), x = !0);
    const R = r.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (r.autoClear || x) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function p(v, x) {
    const y = _(x);
    y && (y.isCubeTexture || y.mapping === sa) ? (h === void 0 && (h = new kt(
      new Xr(1, 1, 1),
      new Kt({
        name: "BackgroundCubeMaterial",
        uniforms: Xs(Pn.backgroundCube.uniforms),
        vertexShader: Pn.backgroundCube.vertexShader,
        fragmentShader: Pn.backgroundCube.fragmentShader,
        side: jt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(R, A, b) {
      this.matrixWorld.copyPosition(b.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), ki.copy(x.backgroundRotation), ki.x *= -1, ki.y *= -1, ki.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (ki.y *= -1, ki.z *= -1), h.material.uniforms.envMap.value = y, h.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(ki)), h.material.toneMapped = Ye.getTransfer(y.colorSpace) !== st, (u !== y || f !== y.version || d !== r.toneMapping) && (h.material.needsUpdate = !0, u = y, f = y.version, d = r.toneMapping), h.layers.enableAll(), v.unshift(h, h.geometry, h.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new kt(
      new aa(2, 2),
      new Kt({
        name: "BackgroundMaterial",
        uniforms: Xs(Pn.background.uniforms),
        vertexShader: Pn.background.vertexShader,
        fragmentShader: Pn.background.fragmentShader,
        side: oi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = y, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = Ye.getTransfer(y.colorSpace) !== st, y.matrixAutoUpdate === !0 && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (u !== y || f !== y.version || d !== r.toneMapping) && (c.material.needsUpdate = !0, u = y, f = y.version, d = r.toneMapping), c.layers.enableAll(), v.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(v, x) {
    v.getRGB(_o, Of(r)), n.buffers.color.setClear(_o.r, _o.g, _o.b, x, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(v, x = 1) {
      a.set(v), l = x, m(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(v) {
      l = v, m(a, l);
    },
    render: g,
    addToRenderList: p
  };
}
function F0(r, e) {
  const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = f(null);
  let s = i, o = !1;
  function a(T, D, B, O, X) {
    let K = !1;
    const H = u(O, B, D);
    s !== H && (s = H, c(s.object)), K = d(T, O, B, X), K && _(T, O, B, X), X !== null && e.update(X, r.ELEMENT_ARRAY_BUFFER), (K || o) && (o = !1, y(T, D, B, O), X !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(X).buffer));
  }
  function l() {
    return r.createVertexArray();
  }
  function c(T) {
    return r.bindVertexArray(T);
  }
  function h(T) {
    return r.deleteVertexArray(T);
  }
  function u(T, D, B) {
    const O = B.wireframe === !0;
    let X = n[T.id];
    X === void 0 && (X = {}, n[T.id] = X);
    let K = X[D.id];
    K === void 0 && (K = {}, X[D.id] = K);
    let H = K[O];
    return H === void 0 && (H = f(l()), K[O] = H), H;
  }
  function f(T) {
    const D = [], B = [], O = [];
    for (let X = 0; X < t; X++)
      D[X] = 0, B[X] = 0, O[X] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: B,
      attributeDivisors: O,
      object: T,
      attributes: {},
      index: null
    };
  }
  function d(T, D, B, O) {
    const X = s.attributes, K = D.attributes;
    let H = 0;
    const j = B.getAttributes();
    for (const W in j)
      if (j[W].location >= 0) {
        const ae = X[W];
        let ue = K[W];
        if (ue === void 0 && (W === "instanceMatrix" && T.instanceMatrix && (ue = T.instanceMatrix), W === "instanceColor" && T.instanceColor && (ue = T.instanceColor)), ae === void 0 || ae.attribute !== ue || ue && ae.data !== ue.data) return !0;
        H++;
      }
    return s.attributesNum !== H || s.index !== O;
  }
  function _(T, D, B, O) {
    const X = {}, K = D.attributes;
    let H = 0;
    const j = B.getAttributes();
    for (const W in j)
      if (j[W].location >= 0) {
        let ae = K[W];
        ae === void 0 && (W === "instanceMatrix" && T.instanceMatrix && (ae = T.instanceMatrix), W === "instanceColor" && T.instanceColor && (ae = T.instanceColor));
        const ue = {};
        ue.attribute = ae, ae && ae.data && (ue.data = ae.data), X[W] = ue, H++;
      }
    s.attributes = X, s.attributesNum = H, s.index = O;
  }
  function g() {
    const T = s.newAttributes;
    for (let D = 0, B = T.length; D < B; D++)
      T[D] = 0;
  }
  function p(T) {
    m(T, 0);
  }
  function m(T, D) {
    const B = s.newAttributes, O = s.enabledAttributes, X = s.attributeDivisors;
    B[T] = 1, O[T] === 0 && (r.enableVertexAttribArray(T), O[T] = 1), X[T] !== D && (r.vertexAttribDivisor(T, D), X[T] = D);
  }
  function v() {
    const T = s.newAttributes, D = s.enabledAttributes;
    for (let B = 0, O = D.length; B < O; B++)
      D[B] !== T[B] && (r.disableVertexAttribArray(B), D[B] = 0);
  }
  function x(T, D, B, O, X, K, H) {
    H === !0 ? r.vertexAttribIPointer(T, D, B, X, K) : r.vertexAttribPointer(T, D, B, O, X, K);
  }
  function y(T, D, B, O) {
    g();
    const X = O.attributes, K = B.getAttributes(), H = D.defaultAttributeValues;
    for (const j in K) {
      const W = K[j];
      if (W.location >= 0) {
        let se = X[j];
        if (se === void 0 && (j === "instanceMatrix" && T.instanceMatrix && (se = T.instanceMatrix), j === "instanceColor" && T.instanceColor && (se = T.instanceColor)), se !== void 0) {
          const ae = se.normalized, ue = se.itemSize, Le = e.get(se);
          if (Le === void 0) continue;
          const Ge = Le.buffer, q = Le.type, J = Le.bytesPerElement, pe = q === r.INT || q === r.UNSIGNED_INT || se.gpuType === xc;
          if (se.isInterleavedBufferAttribute) {
            const fe = se.data, Ie = fe.stride, Oe = se.offset;
            if (fe.isInstancedInterleavedBuffer) {
              for (let ke = 0; ke < W.locationSize; ke++)
                m(W.location + ke, fe.meshPerAttribute);
              T.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = fe.meshPerAttribute * fe.count);
            } else
              for (let ke = 0; ke < W.locationSize; ke++)
                p(W.location + ke);
            r.bindBuffer(r.ARRAY_BUFFER, Ge);
            for (let ke = 0; ke < W.locationSize; ke++)
              x(
                W.location + ke,
                ue / W.locationSize,
                q,
                ae,
                Ie * J,
                (Oe + ue / W.locationSize * ke) * J,
                pe
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let fe = 0; fe < W.locationSize; fe++)
                m(W.location + fe, se.meshPerAttribute);
              T.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let fe = 0; fe < W.locationSize; fe++)
                p(W.location + fe);
            r.bindBuffer(r.ARRAY_BUFFER, Ge);
            for (let fe = 0; fe < W.locationSize; fe++)
              x(
                W.location + fe,
                ue / W.locationSize,
                q,
                ae,
                ue * J,
                ue / W.locationSize * fe * J,
                pe
              );
          }
        } else if (H !== void 0) {
          const ae = H[j];
          if (ae !== void 0)
            switch (ae.length) {
              case 2:
                r.vertexAttrib2fv(W.location, ae);
                break;
              case 3:
                r.vertexAttrib3fv(W.location, ae);
                break;
              case 4:
                r.vertexAttrib4fv(W.location, ae);
                break;
              default:
                r.vertexAttrib1fv(W.location, ae);
            }
        }
      }
    }
    v();
  }
  function R() {
    C();
    for (const T in n) {
      const D = n[T];
      for (const B in D) {
        const O = D[B];
        for (const X in O)
          h(O[X].object), delete O[X];
        delete D[B];
      }
      delete n[T];
    }
  }
  function A(T) {
    if (n[T.id] === void 0) return;
    const D = n[T.id];
    for (const B in D) {
      const O = D[B];
      for (const X in O)
        h(O[X].object), delete O[X];
      delete D[B];
    }
    delete n[T.id];
  }
  function b(T) {
    for (const D in n) {
      const B = n[D];
      if (B[T.id] === void 0) continue;
      const O = B[T.id];
      for (const X in O)
        h(O[X].object), delete O[X];
      delete B[T.id];
    }
  }
  function C() {
    S(), o = !0, s !== i && (s = i, c(s.object));
  }
  function S() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: a,
    reset: C,
    resetDefaultState: S,
    dispose: R,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: b,
    initAttributes: g,
    enableAttribute: p,
    disableUnusedAttributes: v
  };
}
function B0(r, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function s(c, h) {
    r.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function o(c, h, u) {
    u !== 0 && (r.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let d = 0;
    for (let _ = 0; _ < u; _++)
      d += h[_];
    t.update(d, n, 1);
  }
  function l(c, h, u, f) {
    if (u === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null)
      for (let _ = 0; _ < c.length; _++)
        o(c[_], h[_], f[_]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, f, 0, u);
      let _ = 0;
      for (let g = 0; g < u; g++)
        _ += h[g];
      for (let g = 0; g < f.length; g++)
        t.update(_, n, f[g]);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function k0(r, e, t, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function o(A) {
    return !(A !== gn && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(A) {
    const b = A === ri && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== ai && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    A !== An && !b);
  }
  function l(A) {
    if (A === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === !0, f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), p = r.getParameter(r.MAX_VERTEX_ATTRIBS), m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), v = r.getParameter(r.MAX_VARYING_VECTORS), x = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), y = d > 0, R = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: _,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: m,
    maxVaryings: v,
    maxFragmentUniforms: x,
    vertexTextures: y,
    maxSamples: R
  };
}
function z0(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new Mi(), a = new Be(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const d = u.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = f, n = u.length, d;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, f) {
    t = h(u, f, 0);
  }, this.setState = function(u, f, d) {
    const _ = u.clippingPlanes, g = u.clipIntersection, p = u.clipShadows, m = r.get(u);
    if (!i || _ === null || _.length === 0 || s && !p)
      s ? h(null) : c();
    else {
      const v = s ? 0 : n, x = v * 4;
      let y = m.clippingState || null;
      l.value = y, y = h(_, f, x, d);
      for (let R = 0; R !== x; ++R)
        y[R] = t[R];
      m.clippingState = y, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, f, d, _) {
    const g = u !== null ? u.length : 0;
    let p = null;
    if (g !== 0) {
      if (p = l.value, _ !== !0 || p === null) {
        const m = d + g * 4, v = f.matrixWorldInverse;
        a.getNormalMatrix(v), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let x = 0, y = d; x !== g; ++x, y += 4)
          o.copy(u[x]).applyMatrix4(v, a), o.normal.toArray(p, y), p[y + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = g, e.numIntersection = 0, p;
  }
}
function H0(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === gl ? o.mapping = ks : a === _l && (o.mapping = zs), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === gl || a === _l)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Jm(l.height);
            return c.fromEquirectangularTexture(r, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class la extends Ff {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ws = 4, zh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], qi = 20, Fa = /* @__PURE__ */ new la(), Hh = /* @__PURE__ */ new Se();
let Ba = null, ka = 0, za = 0, Ha = !1;
const Wi = (1 + Math.sqrt(5)) / 2, Es = 1 / Wi, Vh = [
  /* @__PURE__ */ new L(-Wi, Es, 0),
  /* @__PURE__ */ new L(Wi, Es, 0),
  /* @__PURE__ */ new L(-Es, 0, Wi),
  /* @__PURE__ */ new L(Es, 0, Wi),
  /* @__PURE__ */ new L(0, Wi, -Es),
  /* @__PURE__ */ new L(0, Wi, Es),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, 1)
];
class Gh {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Ba = this._renderer.getRenderTarget(), ka = this._renderer.getActiveCubeFace(), za = this._renderer.getActiveMipmapLevel(), Ha = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Yh(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Xh(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ba, ka, za), this._renderer.xr.enabled = Ha, e.scissorTest = !1, xo(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ks || e.mapping === zs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ba = this._renderer.getRenderTarget(), ka = this._renderer.getActiveCubeFace(), za = this._renderer.getActiveMipmapLevel(), Ha = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: an,
      minFilter: an,
      generateMipmaps: !1,
      type: ri,
      format: gn,
      colorSpace: Dt,
      depthBuffer: !1
    }, i = Wh(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Wh(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = V0(s)), this._blurMaterial = G0(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new kt(this._lodPlanes[0], e);
    this._renderer.compile(t, Fa);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Wt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, f = h.toneMapping;
    h.getClearColor(Hh), h.toneMapping = Ri, h.autoClear = !1;
    const d = new wn({
      name: "PMREM.Background",
      side: jt,
      depthWrite: !1,
      depthTest: !1
    }), _ = new kt(new Xr(), d);
    let g = !1;
    const p = e.background;
    p ? p.isColor && (d.color.copy(p), e.background = null, g = !0) : (d.color.copy(Hh), g = !0);
    for (let m = 0; m < 6; m++) {
      const v = m % 3;
      v === 0 ? (a.up.set(0, l[m], 0), a.lookAt(c[m], 0, 0)) : v === 1 ? (a.up.set(0, 0, l[m]), a.lookAt(0, c[m], 0)) : (a.up.set(0, l[m], 0), a.lookAt(0, 0, c[m]));
      const x = this._cubeSize;
      xo(i, v * x, m > 2 ? x : 0, x, x), h.setRenderTarget(i), g && h.render(_, a), h.render(e, a);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = f, h.autoClear = u, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === ks || e.mapping === zs;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yh()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Xh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new kt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    xo(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Fa);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = Vh[(i - s - 1) % Vh.length];
      this._blur(e, s - 1, s, o, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new kt(this._lodPlanes[i], c), f = c.uniforms, d = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * qi - 1), g = s / _, p = isFinite(s) ? 1 + Math.floor(h * g) : qi;
    p > qi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);
    const m = [];
    let v = 0;
    for (let b = 0; b < qi; ++b) {
      const C = b / g, S = Math.exp(-C * C / 2);
      m.push(S), b === 0 ? v += S : b < p && (v += 2 * S);
    }
    for (let b = 0; b < m.length; b++)
      m[b] = m[b] / v;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = m, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: x } = this;
    f.dTheta.value = _, f.mipInt.value = x - n;
    const y = this._sizeLods[i], R = 3 * y * (i > x - ws ? i - x + ws : 0), A = 4 * (this._cubeSize - y);
    xo(t, R, A, 3 * y, 2 * y), l.setRenderTarget(t), l.render(u, Fa);
  }
}
function V0(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - ws + 1 + zh.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > r - ws ? l = zh[o - r + ws - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, f = [h, h, u, h, u, u, h, h, u, u, h, u], d = 6, _ = 6, g = 3, p = 2, m = 1, v = new Float32Array(g * _ * d), x = new Float32Array(p * _ * d), y = new Float32Array(m * _ * d);
    for (let A = 0; A < d; A++) {
      const b = A % 3 * 2 / 3 - 1, C = A > 2 ? 0 : -1, S = [
        b,
        C,
        0,
        b + 2 / 3,
        C,
        0,
        b + 2 / 3,
        C + 1,
        0,
        b,
        C,
        0,
        b + 2 / 3,
        C + 1,
        0,
        b,
        C + 1,
        0
      ];
      v.set(S, g * _ * A), x.set(f, p * _ * A);
      const T = [A, A, A, A, A, A];
      y.set(T, m * _ * A);
    }
    const R = new qt();
    R.setAttribute("position", new Pt(v, g)), R.setAttribute("uv", new Pt(x, p)), R.setAttribute("faceIndex", new Pt(y, m)), e.push(R), i > ws && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Wh(r, e, t) {
  const n = new Rn(r, e, t);
  return n.texture.mapping = sa, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function xo(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function G0(r, e, t) {
  const n = new Float32Array(qi), i = new L(0, 1, 0);
  return new Kt({
    name: "SphericalGaussianBlur",
    defines: {
      n: qi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Cc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: si,
    depthTest: !1,
    depthWrite: !1
  });
}
function Xh() {
  return new Kt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Cc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: si,
    depthTest: !1,
    depthWrite: !1
  });
}
function Yh() {
  return new Kt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Cc(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: si,
    depthTest: !1,
    depthWrite: !1
  });
}
function Cc() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function W0(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === gl || l === _l, h = l === ks || l === zs;
      if (c || h) {
        let u = e.get(a);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== f)
          return t === null && (t = new Gh(r)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const d = a.image;
          return c && d && d.height > 0 || h && d && i(d) ? (t === null && (t = new Gh(r)), u = c ? t.fromEquirectangular(a) : t.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), a.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      a[h] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function X0(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = t(n);
      return i === null && Is("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Y0(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes)
      e.remove(f.attributes[_]);
    for (const _ in f.morphAttributes) {
      const g = f.morphAttributes[_];
      for (let p = 0, m = g.length; p < m; p++)
        e.remove(g[p]);
    }
    f.removeEventListener("dispose", o), delete i[f.id];
    const d = s.get(f);
    d && (e.remove(d), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", o), i[f.id] = !0, t.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const _ in f)
      e.update(f[_], r.ARRAY_BUFFER);
    const d = u.morphAttributes;
    for (const _ in d) {
      const g = d[_];
      for (let p = 0, m = g.length; p < m; p++)
        e.update(g[p], r.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const f = [], d = u.index, _ = u.attributes.position;
    let g = 0;
    if (d !== null) {
      const v = d.array;
      g = d.version;
      for (let x = 0, y = v.length; x < y; x += 3) {
        const R = v[x + 0], A = v[x + 1], b = v[x + 2];
        f.push(R, A, A, b, b, R);
      }
    } else if (_ !== void 0) {
      const v = _.array;
      g = _.version;
      for (let x = 0, y = v.length / 3 - 1; x < y; x += 3) {
        const R = x + 0, A = x + 1, b = x + 2;
        f.push(R, A, A, b, b, R);
      }
    } else
      return;
    const p = new (Pf(f) ? Uf : Nf)(f, 1);
    p.version = g;
    const m = s.get(u);
    m && e.remove(m), s.set(u, p);
  }
  function h(u) {
    const f = s.get(u);
    if (f) {
      const d = u.index;
      d !== null && f.version < d.version && c(u);
    } else
      c(u);
    return s.get(u);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: h
  };
}
function q0(r, e, t) {
  let n;
  function i(f) {
    n = f;
  }
  let s, o;
  function a(f) {
    s = f.type, o = f.bytesPerElement;
  }
  function l(f, d) {
    r.drawElements(n, d, s, f * o), t.update(d, n, 1);
  }
  function c(f, d, _) {
    _ !== 0 && (r.drawElementsInstanced(n, d, s, f * o, _), t.update(d, n, _));
  }
  function h(f, d, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, s, f, 0, _);
    let p = 0;
    for (let m = 0; m < _; m++)
      p += d[m];
    t.update(p, n, 1);
  }
  function u(f, d, _, g) {
    if (_ === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let m = 0; m < f.length; m++)
        c(f[m] / o, d[m], g[m]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, d, 0, s, f, 0, g, 0, _);
      let m = 0;
      for (let v = 0; v < _; v++)
        m += d[v];
      for (let v = 0; v < g.length; v++)
        t.update(m, n, g[v]);
    }
  }
  this.setMode = i, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function K0(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case r.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case r.LINES:
        t.lines += a * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += a * s;
        break;
      case r.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function j0(r, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Qe();
  function s(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let f = n.get(a);
    if (f === void 0 || f.count !== u) {
      let S = function() {
        b.dispose(), n.delete(a), a.removeEventListener("dispose", S);
      };
      f !== void 0 && f.texture.dispose();
      const d = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, g = a.morphAttributes.color !== void 0, p = a.morphAttributes.position || [], m = a.morphAttributes.normal || [], v = a.morphAttributes.color || [];
      let x = 0;
      d === !0 && (x = 1), _ === !0 && (x = 2), g === !0 && (x = 3);
      let y = a.attributes.position.count * x, R = 1;
      y > e.maxTextureSize && (R = Math.ceil(y / e.maxTextureSize), y = e.maxTextureSize);
      const A = new Float32Array(y * R * 4 * u), b = new Df(A, y, R, u);
      b.type = An, b.needsUpdate = !0;
      const C = x * 4;
      for (let T = 0; T < u; T++) {
        const D = p[T], B = m[T], O = v[T], X = y * R * 4 * T;
        for (let K = 0; K < D.count; K++) {
          const H = K * C;
          d === !0 && (i.fromBufferAttribute(D, K), A[X + H + 0] = i.x, A[X + H + 1] = i.y, A[X + H + 2] = i.z, A[X + H + 3] = 0), _ === !0 && (i.fromBufferAttribute(B, K), A[X + H + 4] = i.x, A[X + H + 5] = i.y, A[X + H + 6] = i.z, A[X + H + 7] = 0), g === !0 && (i.fromBufferAttribute(O, K), A[X + H + 8] = i.x, A[X + H + 9] = i.y, A[X + H + 10] = i.z, A[X + H + 11] = O.itemSize === 4 ? i.w : 1);
        }
      }
      f = {
        count: u,
        texture: b,
        size: new te(y, R)
      }, n.set(a, f), a.addEventListener("dispose", S);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(r, "morphTexture", o.morphTexture, t);
    else {
      let d = 0;
      for (let g = 0; g < c.length; g++)
        d += c[g];
      const _ = a.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(r, "morphTargetBaseInfluence", _), l.getUniforms().setValue(r, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(r, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(r, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function Z0(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      i.get(f) !== c && (f.update(), i.set(f, c));
    }
    return u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
class kf extends Ct {
  constructor(e, t, n, i, s, o, a, l, c, h = Ds) {
    if (h !== Ds && h !== Gs)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Ds && (n = Qi), n === void 0 && h === Gs && (n = Vs), super(null, i, s, o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Yt, this.minFilter = l !== void 0 ? l : Yt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const zf = /* @__PURE__ */ new Ct(), qh = /* @__PURE__ */ new kf(1, 1), Hf = /* @__PURE__ */ new Df(), Vf = /* @__PURE__ */ new Fm(), Gf = /* @__PURE__ */ new wc(), Kh = [], jh = [], Zh = new Float32Array(16), $h = new Float32Array(9), Jh = new Float32Array(4);
function nr(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = Kh[i];
  if (s === void 0 && (s = new Float32Array(i), Kh[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, r[o].toArray(s, a);
  }
  return s;
}
function bt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function At(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function ca(r, e) {
  let t = jh[e];
  t === void 0 && (t = new Int32Array(e), jh[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function $0(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function J0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (bt(t, e)) return;
    r.uniform2fv(this.addr, e), At(t, e);
  }
}
function Q0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (bt(t, e)) return;
    r.uniform3fv(this.addr, e), At(t, e);
  }
}
function ex(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (bt(t, e)) return;
    r.uniform4fv(this.addr, e), At(t, e);
  }
}
function tx(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (bt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), At(t, e);
  } else {
    if (bt(t, n)) return;
    Jh.set(n), r.uniformMatrix2fv(this.addr, !1, Jh), At(t, n);
  }
}
function nx(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (bt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), At(t, e);
  } else {
    if (bt(t, n)) return;
    $h.set(n), r.uniformMatrix3fv(this.addr, !1, $h), At(t, n);
  }
}
function ix(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (bt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), At(t, e);
  } else {
    if (bt(t, n)) return;
    Zh.set(n), r.uniformMatrix4fv(this.addr, !1, Zh), At(t, n);
  }
}
function sx(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function rx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (bt(t, e)) return;
    r.uniform2iv(this.addr, e), At(t, e);
  }
}
function ox(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (bt(t, e)) return;
    r.uniform3iv(this.addr, e), At(t, e);
  }
}
function ax(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (bt(t, e)) return;
    r.uniform4iv(this.addr, e), At(t, e);
  }
}
function lx(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function cx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (bt(t, e)) return;
    r.uniform2uiv(this.addr, e), At(t, e);
  }
}
function hx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (bt(t, e)) return;
    r.uniform3uiv(this.addr, e), At(t, e);
  }
}
function ux(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (bt(t, e)) return;
    r.uniform4uiv(this.addr, e), At(t, e);
  }
}
function fx(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === r.SAMPLER_2D_SHADOW ? (qh.compareFunction = Rf, s = qh) : s = zf, t.setTexture2D(e || s, i);
}
function dx(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Vf, i);
}
function px(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Gf, i);
}
function mx(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Hf, i);
}
function gx(r) {
  switch (r) {
    case 5126:
      return $0;
    case 35664:
      return J0;
    case 35665:
      return Q0;
    case 35666:
      return ex;
    case 35674:
      return tx;
    case 35675:
      return nx;
    case 35676:
      return ix;
    case 5124:
    case 35670:
      return sx;
    case 35667:
    case 35671:
      return rx;
    case 35668:
    case 35672:
      return ox;
    case 35669:
    case 35673:
      return ax;
    case 5125:
      return lx;
    case 36294:
      return cx;
    case 36295:
      return hx;
    case 36296:
      return ux;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return fx;
    case 35679:
    case 36299:
    case 36307:
      return dx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return px;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return mx;
  }
}
function _x(r, e) {
  r.uniform1fv(this.addr, e);
}
function xx(r, e) {
  const t = nr(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function vx(r, e) {
  const t = nr(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function yx(r, e) {
  const t = nr(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Mx(r, e) {
  const t = nr(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Sx(r, e) {
  const t = nr(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function Tx(r, e) {
  const t = nr(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Ex(r, e) {
  r.uniform1iv(this.addr, e);
}
function bx(r, e) {
  r.uniform2iv(this.addr, e);
}
function Ax(r, e) {
  r.uniform3iv(this.addr, e);
}
function wx(r, e) {
  r.uniform4iv(this.addr, e);
}
function Rx(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Cx(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Px(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Lx(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Dx(r, e, t) {
  const n = this.cache, i = e.length, s = ca(t, i);
  bt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || zf, s[o]);
}
function Ix(r, e, t) {
  const n = this.cache, i = e.length, s = ca(t, i);
  bt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || Vf, s[o]);
}
function Nx(r, e, t) {
  const n = this.cache, i = e.length, s = ca(t, i);
  bt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || Gf, s[o]);
}
function Ux(r, e, t) {
  const n = this.cache, i = e.length, s = ca(t, i);
  bt(n, s) || (r.uniform1iv(this.addr, s), At(n, s));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || Hf, s[o]);
}
function Ox(r) {
  switch (r) {
    case 5126:
      return _x;
    case 35664:
      return xx;
    case 35665:
      return vx;
    case 35666:
      return yx;
    case 35674:
      return Mx;
    case 35675:
      return Sx;
    case 35676:
      return Tx;
    case 5124:
    case 35670:
      return Ex;
    case 35667:
    case 35671:
      return bx;
    case 35668:
    case 35672:
      return Ax;
    case 35669:
    case 35673:
      return wx;
    case 5125:
      return Rx;
    case 36294:
      return Cx;
    case 36295:
      return Px;
    case 36296:
      return Lx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Dx;
    case 35679:
    case 36299:
    case 36307:
      return Ix;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Nx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ux;
  }
}
class Fx {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = gx(t.type);
  }
}
class Bx {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Ox(t.type);
  }
}
class kx {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Va = /(\w+)(\])?(\[|\.)?/g;
function Qh(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function zx(r, e, t) {
  const n = r.name, i = n.length;
  for (Va.lastIndex = 0; ; ) {
    const s = Va.exec(n), o = Va.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
      Qh(t, c === void 0 ? new Fx(a, r, e) : new Bx(a, r, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new kx(a), Qh(t, u)), t = u;
    }
  }
}
class Bo {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      zx(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function eu(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const Hx = 37297;
let Vx = 0;
function Gx(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Wx(r) {
  const e = Ye.getPrimaries(Ye.workingColorSpace), t = Ye.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === Yo && t === Xo ? n = "LinearDisplayP3ToLinearSRGB" : e === Xo && t === Yo && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case Dt:
    case ra:
      return [n, "LinearTransferOETF"];
    case Tt:
    case bc:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function tu(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Gx(r.getShaderSource(e), o);
  } else
    return i;
}
function Xx(r, e) {
  const t = Wx(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Yx(r, e) {
  let t;
  switch (e) {
    case Kp:
      t = "Linear";
      break;
    case jp:
      t = "Reinhard";
      break;
    case Zp:
      t = "OptimizedCineon";
      break;
    case $p:
      t = "ACESFilmic";
      break;
    case Qp:
      t = "AgX";
      break;
    case em:
      t = "Neutral";
      break;
    case Jp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const vo = /* @__PURE__ */ new L();
function qx() {
  Ye.getLuminanceCoefficients(vo);
  const r = vo.x.toFixed(4), e = vo.y.toFixed(4), t = vo.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Kx(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(vr).join(`
`);
}
function jx(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Zx(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), o = s.name;
    let a = 1;
    s.type === r.FLOAT_MAT2 && (a = 2), s.type === r.FLOAT_MAT3 && (a = 3), s.type === r.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: r.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function vr(r) {
  return r !== "";
}
function nu(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function iu(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const $x = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Yl(r) {
  return r.replace($x, Qx);
}
const Jx = /* @__PURE__ */ new Map();
function Qx(r, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = Jx.get(e);
    if (n !== void 0)
      t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Yl(t);
}
const ev = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function su(r) {
  return r.replace(ev, tv);
}
function tv(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function ru(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function nv(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === df ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === yp ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === $n && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function iv(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case ks:
      case zs:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case sa:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function sv(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case zs:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function rv(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case pf:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Yp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case qp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function ov(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function av(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = nv(t), c = iv(t), h = sv(t), u = rv(t), f = ov(t), d = Kx(t), _ = jx(s), g = i.createProgram();
  let p, m, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(vr).join(`
`), p.length > 0 && (p += `
`), m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(vr).join(`
`), m.length > 0 && (m += `
`)) : (p = [
    ru(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(vr).join(`
`), m = [
    ru(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Ri ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Ri ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Ri ? Yx("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Xx("linearToOutputTexel", t.outputColorSpace),
    qx(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(vr).join(`
`)), o = Yl(o), o = nu(o, t), o = iu(o, t), a = Yl(a), a = nu(a, t), a = iu(a, t), o = su(o), a = su(a), t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, p = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, m = [
    "#define varying in",
    t.glslVersion === vh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === vh ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + m);
  const x = v + p + o, y = v + m + a, R = eu(i, i.VERTEX_SHADER, x), A = eu(i, i.FRAGMENT_SHADER, y);
  i.attachShader(g, R), i.attachShader(g, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
  function b(D) {
    if (r.debug.checkShaderErrors) {
      const B = i.getProgramInfoLog(g).trim(), O = i.getShaderInfoLog(R).trim(), X = i.getShaderInfoLog(A).trim();
      let K = !0, H = !0;
      if (i.getProgramParameter(g, i.LINK_STATUS) === !1)
        if (K = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, g, R, A);
        else {
          const j = tu(i, R, "vertex"), W = tu(i, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + B + `
` + j + `
` + W
          );
        }
      else B !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", B) : (O === "" || X === "") && (H = !1);
      H && (D.diagnostics = {
        runnable: K,
        programLog: B,
        vertexShader: {
          log: O,
          prefix: p
        },
        fragmentShader: {
          log: X,
          prefix: m
        }
      });
    }
    i.deleteShader(R), i.deleteShader(A), C = new Bo(i, g), S = Zx(i, g);
  }
  let C;
  this.getUniforms = function() {
    return C === void 0 && b(this), C;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && b(this), S;
  };
  let T = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return T === !1 && (T = i.getProgramParameter(g, Hx)), T;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Vx++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = R, this.fragmentShader = A, this;
}
let lv = 0;
class cv {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new hv(e), t.set(e, n)), n;
  }
}
class hv {
  constructor(e) {
    this.id = lv++, this.code = e, this.usedTimes = 0;
  }
}
function uv(r, e, t, n, i, s, o) {
  const a = new oa(), l = new cv(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, f = i.vertexTextures;
  let d = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function g(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, T, D, B, O) {
    const X = B.fog, K = O.geometry, H = S.isMeshStandardMaterial ? B.environment : null, j = (S.isMeshStandardMaterial ? t : e).get(S.envMap || H), W = j && j.mapping === sa ? j.image.height : null, se = _[S.type];
    S.precision !== null && (d = i.getMaxPrecision(S.precision), d !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", d, "instead."));
    const ae = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, ue = ae !== void 0 ? ae.length : 0;
    let Le = 0;
    K.morphAttributes.position !== void 0 && (Le = 1), K.morphAttributes.normal !== void 0 && (Le = 2), K.morphAttributes.color !== void 0 && (Le = 3);
    let Ge, q, J, pe;
    if (se) {
      const We = Pn[se];
      Ge = We.vertexShader, q = We.fragmentShader;
    } else
      Ge = S.vertexShader, q = S.fragmentShader, l.update(S), J = l.getVertexShaderID(S), pe = l.getFragmentShaderID(S);
    const fe = r.getRenderTarget(), Ie = O.isInstancedMesh === !0, Oe = O.isBatchedMesh === !0, ke = !!S.map, it = !!S.matcap, I = !!j, ht = !!S.aoMap, Xe = !!S.lightMap, qe = !!S.bumpMap, xe = !!S.normalMap, ut = !!S.displacementMap, Ce = !!S.emissiveMap, De = !!S.metalnessMap, P = !!S.roughnessMap, E = S.anisotropy > 0, G = S.clearcoat > 0, $ = S.dispersion > 0, ee = S.iridescence > 0, Z = S.sheen > 0, Me = S.transmission > 0, re = E && !!S.anisotropyMap, ce = G && !!S.clearcoatMap, Ne = G && !!S.clearcoatNormalMap, ne = G && !!S.clearcoatRoughnessMap, he = ee && !!S.iridescenceMap, He = ee && !!S.iridescenceThicknessMap, Ee = Z && !!S.sheenColorMap, de = Z && !!S.sheenRoughnessMap, Ae = !!S.specularMap, Pe = !!S.specularColorMap, rt = !!S.specularIntensityMap, M = Me && !!S.transmissionMap, F = Me && !!S.thicknessMap, k = !!S.gradientMap, Y = !!S.alphaMap, Q = S.alphaTest > 0, ve = !!S.alphaHash, we = !!S.extensions;
    let mt = Ri;
    S.toneMapped && (fe === null || fe.isXRRenderTarget === !0) && (mt = r.toneMapping);
    const Mt = {
      shaderID: se,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Ge,
      fragmentShader: q,
      defines: S.defines,
      customVertexShaderID: J,
      customFragmentShaderID: pe,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: d,
      batching: Oe,
      batchingColor: Oe && O._colorsTexture !== null,
      instancing: Ie,
      instancingColor: Ie && O.instanceColor !== null,
      instancingMorph: Ie && O.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: fe === null ? r.outputColorSpace : fe.isXRRenderTarget === !0 ? fe.texture.colorSpace : Dt,
      alphaToCoverage: !!S.alphaToCoverage,
      map: ke,
      matcap: it,
      envMap: I,
      envMapMode: I && j.mapping,
      envMapCubeUVHeight: W,
      aoMap: ht,
      lightMap: Xe,
      bumpMap: qe,
      normalMap: xe,
      displacementMap: f && ut,
      emissiveMap: Ce,
      normalMapObjectSpace: xe && S.normalMapType === om,
      normalMapTangentSpace: xe && S.normalMapType === wf,
      metalnessMap: De,
      roughnessMap: P,
      anisotropy: E,
      anisotropyMap: re,
      clearcoat: G,
      clearcoatMap: ce,
      clearcoatNormalMap: Ne,
      clearcoatRoughnessMap: ne,
      dispersion: $,
      iridescence: ee,
      iridescenceMap: he,
      iridescenceThicknessMap: He,
      sheen: Z,
      sheenColorMap: Ee,
      sheenRoughnessMap: de,
      specularMap: Ae,
      specularColorMap: Pe,
      specularIntensityMap: rt,
      transmission: Me,
      transmissionMap: M,
      thicknessMap: F,
      gradientMap: k,
      opaque: S.transparent === !1 && S.blending === Ls && S.alphaToCoverage === !1,
      alphaMap: Y,
      alphaTest: Q,
      alphaHash: ve,
      combine: S.combine,
      //
      mapUv: ke && g(S.map.channel),
      aoMapUv: ht && g(S.aoMap.channel),
      lightMapUv: Xe && g(S.lightMap.channel),
      bumpMapUv: qe && g(S.bumpMap.channel),
      normalMapUv: xe && g(S.normalMap.channel),
      displacementMapUv: ut && g(S.displacementMap.channel),
      emissiveMapUv: Ce && g(S.emissiveMap.channel),
      metalnessMapUv: De && g(S.metalnessMap.channel),
      roughnessMapUv: P && g(S.roughnessMap.channel),
      anisotropyMapUv: re && g(S.anisotropyMap.channel),
      clearcoatMapUv: ce && g(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Ne && g(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ne && g(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: he && g(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: He && g(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ee && g(S.sheenColorMap.channel),
      sheenRoughnessMapUv: de && g(S.sheenRoughnessMap.channel),
      specularMapUv: Ae && g(S.specularMap.channel),
      specularColorMapUv: Pe && g(S.specularColorMap.channel),
      specularIntensityMapUv: rt && g(S.specularIntensityMap.channel),
      transmissionMapUv: M && g(S.transmissionMap.channel),
      thicknessMapUv: F && g(S.thicknessMap.channel),
      alphaMapUv: Y && g(S.alphaMap.channel),
      //
      vertexTangents: !!K.attributes.tangent && (xe || E),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4,
      pointsUvs: O.isPoints === !0 && !!K.attributes.uv && (ke || Y),
      fog: !!X,
      useFog: S.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: O.isSkinnedMesh === !0,
      morphTargets: K.morphAttributes.position !== void 0,
      morphNormals: K.morphAttributes.normal !== void 0,
      morphColors: K.morphAttributes.color !== void 0,
      morphTargetsCount: ue,
      morphTextureStride: Le,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: r.shadowMap.enabled && D.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: mt,
      decodeVideoTexture: ke && S.map.isVideoTexture === !0 && Ye.getTransfer(S.map.colorSpace) === st,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === Ln,
      flipSided: S.side === jt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: we && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (we && S.extensions.multiDraw === !0 || Oe) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return Mt.vertexUv1s = c.has(1), Mt.vertexUv2s = c.has(2), Mt.vertexUv3s = c.has(3), c.clear(), Mt;
  }
  function m(S) {
    const T = [];
    if (S.shaderID ? T.push(S.shaderID) : (T.push(S.customVertexShaderID), T.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const D in S.defines)
        T.push(D), T.push(S.defines[D]);
    return S.isRawShaderMaterial === !1 && (v(T, S), x(T, S), T.push(r.outputColorSpace)), T.push(S.customProgramCacheKey), T.join();
  }
  function v(S, T) {
    S.push(T.precision), S.push(T.outputColorSpace), S.push(T.envMapMode), S.push(T.envMapCubeUVHeight), S.push(T.mapUv), S.push(T.alphaMapUv), S.push(T.lightMapUv), S.push(T.aoMapUv), S.push(T.bumpMapUv), S.push(T.normalMapUv), S.push(T.displacementMapUv), S.push(T.emissiveMapUv), S.push(T.metalnessMapUv), S.push(T.roughnessMapUv), S.push(T.anisotropyMapUv), S.push(T.clearcoatMapUv), S.push(T.clearcoatNormalMapUv), S.push(T.clearcoatRoughnessMapUv), S.push(T.iridescenceMapUv), S.push(T.iridescenceThicknessMapUv), S.push(T.sheenColorMapUv), S.push(T.sheenRoughnessMapUv), S.push(T.specularMapUv), S.push(T.specularColorMapUv), S.push(T.specularIntensityMapUv), S.push(T.transmissionMapUv), S.push(T.thicknessMapUv), S.push(T.combine), S.push(T.fogExp2), S.push(T.sizeAttenuation), S.push(T.morphTargetsCount), S.push(T.morphAttributeCount), S.push(T.numDirLights), S.push(T.numPointLights), S.push(T.numSpotLights), S.push(T.numSpotLightMaps), S.push(T.numHemiLights), S.push(T.numRectAreaLights), S.push(T.numDirLightShadows), S.push(T.numPointLightShadows), S.push(T.numSpotLightShadows), S.push(T.numSpotLightShadowsWithMaps), S.push(T.numLightProbes), S.push(T.shadowMapType), S.push(T.toneMapping), S.push(T.numClippingPlanes), S.push(T.numClipIntersection), S.push(T.depthPacking);
  }
  function x(S, T) {
    a.disableAll(), T.supportsVertexTextures && a.enable(0), T.instancing && a.enable(1), T.instancingColor && a.enable(2), T.instancingMorph && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), T.batching && a.enable(19), T.dispersion && a.enable(20), T.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T.morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a.enable(9), T.doubleSided && a.enable(10), T.flipSided && a.enable(11), T.useDepthPacking && a.enable(12), T.dithering && a.enable(13), T.transmission && a.enable(14), T.sheen && a.enable(15), T.opaque && a.enable(16), T.pointsUvs && a.enable(17), T.decodeVideoTexture && a.enable(18), T.alphaToCoverage && a.enable(19), S.push(a.mask);
  }
  function y(S) {
    const T = _[S.type];
    let D;
    if (T) {
      const B = Pn[T];
      D = Ko.clone(B.uniforms);
    } else
      D = S.uniforms;
    return D;
  }
  function R(S, T) {
    let D;
    for (let B = 0, O = h.length; B < O; B++) {
      const X = h[B];
      if (X.cacheKey === T) {
        D = X, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new av(r, T, S, s), h.push(D)), D;
  }
  function A(S) {
    if (--S.usedTimes === 0) {
      const T = h.indexOf(S);
      h[T] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function b(S) {
    l.remove(S);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: m,
    getUniforms: y,
    acquireProgram: R,
    releaseProgram: A,
    releaseShaderCache: b,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: C
  };
}
function fv() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = r.get(s);
    return o === void 0 && (o = {}, r.set(s, o)), o;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, o, a) {
    r.get(s)[o] = a;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function dv(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function ou(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function au() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, f, d, _, g, p) {
    let m = r[e];
    return m === void 0 ? (m = {
      id: u.id,
      object: u,
      geometry: f,
      material: d,
      groupOrder: _,
      renderOrder: u.renderOrder,
      z: g,
      group: p
    }, r[e] = m) : (m.id = u.id, m.object = u, m.geometry = f, m.material = d, m.groupOrder = _, m.renderOrder = u.renderOrder, m.z = g, m.group = p), e++, m;
  }
  function a(u, f, d, _, g, p) {
    const m = o(u, f, d, _, g, p);
    d.transmission > 0 ? n.push(m) : d.transparent === !0 ? i.push(m) : t.push(m);
  }
  function l(u, f, d, _, g, p) {
    const m = o(u, f, d, _, g, p);
    d.transmission > 0 ? n.unshift(m) : d.transparent === !0 ? i.unshift(m) : t.unshift(m);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || dv), n.length > 1 && n.sort(f || ou), i.length > 1 && i.sort(f || ou);
  }
  function h() {
    for (let u = e, f = r.length; u < f; u++) {
      const d = r[u];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: l,
    finish: h,
    sort: c
  };
}
function pv() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? (o = new au(), r.set(n, [o])) : i >= s.length ? (o = new au(), s.push(o)) : o = s[i], o;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function mv() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new Se()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new Se(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new Se(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new Se(),
            groundColor: new Se()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Se(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function gv() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new te()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new te()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new te(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let _v = 0;
function xv(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function vv(r) {
  const e = new mv(), t = gv(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new L());
  const i = new L(), s = new Ue(), o = new Ue();
  function a(c) {
    let h = 0, u = 0, f = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let d = 0, _ = 0, g = 0, p = 0, m = 0, v = 0, x = 0, y = 0, R = 0, A = 0, b = 0;
    c.sort(xv);
    for (let S = 0, T = c.length; S < T; S++) {
      const D = c[S], B = D.color, O = D.intensity, X = D.distance, K = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        h += B.r * O, u += B.g * O, f += B.b * O;
      else if (D.isLightProbe) {
        for (let H = 0; H < 9; H++)
          n.probe[H].addScaledVector(D.sh.coefficients[H], O);
        b++;
      } else if (D.isDirectionalLight) {
        const H = e.get(D);
        if (H.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const j = D.shadow, W = t.get(D);
          W.shadowIntensity = j.intensity, W.shadowBias = j.bias, W.shadowNormalBias = j.normalBias, W.shadowRadius = j.radius, W.shadowMapSize = j.mapSize, n.directionalShadow[d] = W, n.directionalShadowMap[d] = K, n.directionalShadowMatrix[d] = D.shadow.matrix, v++;
        }
        n.directional[d] = H, d++;
      } else if (D.isSpotLight) {
        const H = e.get(D);
        H.position.setFromMatrixPosition(D.matrixWorld), H.color.copy(B).multiplyScalar(O), H.distance = X, H.coneCos = Math.cos(D.angle), H.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), H.decay = D.decay, n.spot[g] = H;
        const j = D.shadow;
        if (D.map && (n.spotLightMap[R] = D.map, R++, j.updateMatrices(D), D.castShadow && A++), n.spotLightMatrix[g] = j.matrix, D.castShadow) {
          const W = t.get(D);
          W.shadowIntensity = j.intensity, W.shadowBias = j.bias, W.shadowNormalBias = j.normalBias, W.shadowRadius = j.radius, W.shadowMapSize = j.mapSize, n.spotShadow[g] = W, n.spotShadowMap[g] = K, y++;
        }
        g++;
      } else if (D.isRectAreaLight) {
        const H = e.get(D);
        H.color.copy(B).multiplyScalar(O), H.halfWidth.set(D.width * 0.5, 0, 0), H.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[p] = H, p++;
      } else if (D.isPointLight) {
        const H = e.get(D);
        if (H.color.copy(D.color).multiplyScalar(D.intensity), H.distance = D.distance, H.decay = D.decay, D.castShadow) {
          const j = D.shadow, W = t.get(D);
          W.shadowIntensity = j.intensity, W.shadowBias = j.bias, W.shadowNormalBias = j.normalBias, W.shadowRadius = j.radius, W.shadowMapSize = j.mapSize, W.shadowCameraNear = j.camera.near, W.shadowCameraFar = j.camera.far, n.pointShadow[_] = W, n.pointShadowMap[_] = K, n.pointShadowMatrix[_] = D.shadow.matrix, x++;
        }
        n.point[_] = H, _++;
      } else if (D.isHemisphereLight) {
        const H = e.get(D);
        H.skyColor.copy(D.color).multiplyScalar(O), H.groundColor.copy(D.groundColor).multiplyScalar(O), n.hemi[m] = H, m++;
      }
    }
    p > 0 && (r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = oe.LTC_FLOAT_1, n.rectAreaLTC2 = oe.LTC_FLOAT_2) : (n.rectAreaLTC1 = oe.LTC_HALF_1, n.rectAreaLTC2 = oe.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const C = n.hash;
    (C.directionalLength !== d || C.pointLength !== _ || C.spotLength !== g || C.rectAreaLength !== p || C.hemiLength !== m || C.numDirectionalShadows !== v || C.numPointShadows !== x || C.numSpotShadows !== y || C.numSpotMaps !== R || C.numLightProbes !== b) && (n.directional.length = d, n.spot.length = g, n.rectArea.length = p, n.point.length = _, n.hemi.length = m, n.directionalShadow.length = v, n.directionalShadowMap.length = v, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = v, n.pointShadowMatrix.length = x, n.spotLightMatrix.length = y + R - A, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = b, C.directionalLength = d, C.pointLength = _, C.spotLength = g, C.rectAreaLength = p, C.hemiLength = m, C.numDirectionalShadows = v, C.numPointShadows = x, C.numSpotShadows = y, C.numSpotMaps = R, C.numLightProbes = b, n.version = _v++);
  }
  function l(c, h) {
    let u = 0, f = 0, d = 0, _ = 0, g = 0;
    const p = h.matrixWorldInverse;
    for (let m = 0, v = c.length; m < v; m++) {
      const x = c[m];
      if (x.isDirectionalLight) {
        const y = n.directional[u];
        y.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(p), u++;
      } else if (x.isSpotLight) {
        const y = n.spot[d];
        y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(p), y.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(p), d++;
      } else if (x.isRectAreaLight) {
        const y = n.rectArea[_];
        y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(p), o.identity(), s.copy(x.matrixWorld), s.premultiply(p), o.extractRotation(s), y.halfWidth.set(x.width * 0.5, 0, 0), y.halfHeight.set(0, x.height * 0.5, 0), y.halfWidth.applyMatrix4(o), y.halfHeight.applyMatrix4(o), _++;
      } else if (x.isPointLight) {
        const y = n.point[f];
        y.position.setFromMatrixPosition(x.matrixWorld), y.position.applyMatrix4(p), f++;
      } else if (x.isHemisphereLight) {
        const y = n.hemi[g];
        y.direction.setFromMatrixPosition(x.matrixWorld), y.direction.transformDirection(p), g++;
      }
    }
  }
  return {
    setup: a,
    setupView: l,
    state: n
  };
}
function lu(r) {
  const e = new vv(r), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function a() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: c,
    setupLights: a,
    setupLightsView: l,
    pushLight: s,
    pushShadow: o
  };
}
function yv(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, s = 0) {
    const o = e.get(i);
    let a;
    return o === void 0 ? (a = new lu(r), e.set(i, [a])) : s >= o.length ? (a = new lu(r), o.push(a)) : a = o[s], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Mv extends Un {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = sm, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Sv extends Un {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Tv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ev = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function bv(r, e, t) {
  let n = new Rc();
  const i = new te(), s = new te(), o = new Qe(), a = new Mv({ depthPacking: rm }), l = new Sv(), c = {}, h = t.maxTextureSize, u = { [oi]: jt, [jt]: oi, [Ln]: Ln }, f = new Kt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new te() },
      radius: { value: 4 }
    },
    vertexShader: Tv,
    fragmentShader: Ev
  }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const _ = new qt();
  _.setAttribute(
    "position",
    new Pt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new kt(_, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = df;
  let m = this.type;
  this.render = function(A, b, C) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || A.length === 0) return;
    const S = r.getRenderTarget(), T = r.getActiveCubeFace(), D = r.getActiveMipmapLevel(), B = r.state;
    B.setBlending(si), B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
    const O = m !== $n && this.type === $n, X = m === $n && this.type !== $n;
    for (let K = 0, H = A.length; K < H; K++) {
      const j = A[K], W = j.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      i.copy(W.mapSize);
      const se = W.getFrameExtents();
      if (i.multiply(se), s.copy(W.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / se.x), i.x = s.x * se.x, W.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / se.y), i.y = s.y * se.y, W.mapSize.y = s.y)), W.map === null || O === !0 || X === !0) {
        const ue = this.type !== $n ? { minFilter: Yt, magFilter: Yt } : {};
        W.map !== null && W.map.dispose(), W.map = new Rn(i.x, i.y, ue), W.map.texture.name = j.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(W.map), r.clear();
      const ae = W.getViewportCount();
      for (let ue = 0; ue < ae; ue++) {
        const Le = W.getViewport(ue);
        o.set(
          s.x * Le.x,
          s.y * Le.y,
          s.x * Le.z,
          s.y * Le.w
        ), B.viewport(o), W.updateMatrices(j, ue), n = W.getFrustum(), y(b, C, W.camera, j, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === $n && v(W, C), W.needsUpdate = !1;
    }
    m = this.type, p.needsUpdate = !1, r.setRenderTarget(S, T, D);
  };
  function v(A, b) {
    const C = e.update(g);
    f.defines.VSM_SAMPLES !== A.blurSamples && (f.defines.VSM_SAMPLES = A.blurSamples, d.defines.VSM_SAMPLES = A.blurSamples, f.needsUpdate = !0, d.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Rn(i.x, i.y)), f.uniforms.shadow_pass.value = A.map.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, r.setRenderTarget(A.mapPass), r.clear(), r.renderBufferDirect(b, null, C, f, g, null), d.uniforms.shadow_pass.value = A.mapPass.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, r.setRenderTarget(A.map), r.clear(), r.renderBufferDirect(b, null, C, d, g, null);
  }
  function x(A, b, C, S) {
    let T = null;
    const D = C.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (D !== void 0)
      T = D;
    else if (T = C.isPointLight === !0 ? l : a, r.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) {
      const B = T.uuid, O = b.uuid;
      let X = c[B];
      X === void 0 && (X = {}, c[B] = X);
      let K = X[O];
      K === void 0 && (K = T.clone(), X[O] = K, b.addEventListener("dispose", R)), T = K;
    }
    if (T.visible = b.visible, T.wireframe = b.wireframe, S === $n ? T.side = b.shadowSide !== null ? b.shadowSide : b.side : T.side = b.shadowSide !== null ? b.shadowSide : u[b.side], T.alphaMap = b.alphaMap, T.alphaTest = b.alphaTest, T.map = b.map, T.clipShadows = b.clipShadows, T.clippingPlanes = b.clippingPlanes, T.clipIntersection = b.clipIntersection, T.displacementMap = b.displacementMap, T.displacementScale = b.displacementScale, T.displacementBias = b.displacementBias, T.wireframeLinewidth = b.wireframeLinewidth, T.linewidth = b.linewidth, C.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
      const B = r.properties.get(T);
      B.light = C;
    }
    return T;
  }
  function y(A, b, C, S, T) {
    if (A.visible === !1) return;
    if (A.layers.test(b.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && T === $n) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, A.matrixWorld);
      const O = e.update(A), X = A.material;
      if (Array.isArray(X)) {
        const K = O.groups;
        for (let H = 0, j = K.length; H < j; H++) {
          const W = K[H], se = X[W.materialIndex];
          if (se && se.visible) {
            const ae = x(A, se, S, T);
            A.onBeforeShadow(r, A, b, C, O, ae, W), r.renderBufferDirect(C, null, O, ae, A, W), A.onAfterShadow(r, A, b, C, O, ae, W);
          }
        }
      } else if (X.visible) {
        const K = x(A, X, S, T);
        A.onBeforeShadow(r, A, b, C, O, K, null), r.renderBufferDirect(C, null, O, K, A, null), A.onAfterShadow(r, A, b, C, O, K, null);
      }
    }
    const B = A.children;
    for (let O = 0, X = B.length; O < X; O++)
      y(B[O], b, C, S, T);
  }
  function R(A) {
    A.target.removeEventListener("dispose", R);
    for (const C in c) {
      const S = c[C], T = A.target.uuid;
      T in S && (S[T].dispose(), delete S[T]);
    }
  }
}
function Av(r) {
  function e() {
    let M = !1;
    const F = new Qe();
    let k = null;
    const Y = new Qe(0, 0, 0, 0);
    return {
      setMask: function(Q) {
        k !== Q && !M && (r.colorMask(Q, Q, Q, Q), k = Q);
      },
      setLocked: function(Q) {
        M = Q;
      },
      setClear: function(Q, ve, we, mt, Mt) {
        Mt === !0 && (Q *= mt, ve *= mt, we *= mt), F.set(Q, ve, we, mt), Y.equals(F) === !1 && (r.clearColor(Q, ve, we, mt), Y.copy(F));
      },
      reset: function() {
        M = !1, k = null, Y.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let M = !1, F = null, k = null, Y = null;
    return {
      setTest: function(Q) {
        Q ? pe(r.DEPTH_TEST) : fe(r.DEPTH_TEST);
      },
      setMask: function(Q) {
        F !== Q && !M && (r.depthMask(Q), F = Q);
      },
      setFunc: function(Q) {
        if (k !== Q) {
          switch (Q) {
            case kp:
              r.depthFunc(r.NEVER);
              break;
            case zp:
              r.depthFunc(r.ALWAYS);
              break;
            case Hp:
              r.depthFunc(r.LESS);
              break;
            case Vo:
              r.depthFunc(r.LEQUAL);
              break;
            case Vp:
              r.depthFunc(r.EQUAL);
              break;
            case Gp:
              r.depthFunc(r.GEQUAL);
              break;
            case Wp:
              r.depthFunc(r.GREATER);
              break;
            case Xp:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          k = Q;
        }
      },
      setLocked: function(Q) {
        M = Q;
      },
      setClear: function(Q) {
        Y !== Q && (r.clearDepth(Q), Y = Q);
      },
      reset: function() {
        M = !1, F = null, k = null, Y = null;
      }
    };
  }
  function n() {
    let M = !1, F = null, k = null, Y = null, Q = null, ve = null, we = null, mt = null, Mt = null;
    return {
      setTest: function(We) {
        M || (We ? pe(r.STENCIL_TEST) : fe(r.STENCIL_TEST));
      },
      setMask: function(We) {
        F !== We && !M && (r.stencilMask(We), F = We);
      },
      setFunc: function(We, St, _t) {
        (k !== We || Y !== St || Q !== _t) && (r.stencilFunc(We, St, _t), k = We, Y = St, Q = _t);
      },
      setOp: function(We, St, _t) {
        (ve !== We || we !== St || mt !== _t) && (r.stencilOp(We, St, _t), ve = We, we = St, mt = _t);
      },
      setLocked: function(We) {
        M = We;
      },
      setClear: function(We) {
        Mt !== We && (r.clearStencil(We), Mt = We);
      },
      reset: function() {
        M = !1, F = null, k = null, Y = null, Q = null, ve = null, we = null, mt = null, Mt = null;
      }
    };
  }
  const i = new e(), s = new t(), o = new n(), a = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), f = [], d = null, _ = !1, g = null, p = null, m = null, v = null, x = null, y = null, R = null, A = new Se(0, 0, 0), b = 0, C = !1, S = null, T = null, D = null, B = null, O = null;
  const X = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let K = !1, H = 0;
  const j = r.getParameter(r.VERSION);
  j.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL (\d)/.exec(j)[1]), K = H >= 1) : j.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]), K = H >= 2);
  let W = null, se = {};
  const ae = r.getParameter(r.SCISSOR_BOX), ue = r.getParameter(r.VIEWPORT), Le = new Qe().fromArray(ae), Ge = new Qe().fromArray(ue);
  function q(M, F, k, Y) {
    const Q = new Uint8Array(4), ve = r.createTexture();
    r.bindTexture(M, ve), r.texParameteri(M, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(M, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let we = 0; we < k; we++)
      M === r.TEXTURE_3D || M === r.TEXTURE_2D_ARRAY ? r.texImage3D(F, 0, r.RGBA, 1, 1, Y, 0, r.RGBA, r.UNSIGNED_BYTE, Q) : r.texImage2D(F + we, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, Q);
    return ve;
  }
  const J = {};
  J[r.TEXTURE_2D] = q(r.TEXTURE_2D, r.TEXTURE_2D, 1), J[r.TEXTURE_CUBE_MAP] = q(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), J[r.TEXTURE_2D_ARRAY] = q(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), J[r.TEXTURE_3D] = q(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), pe(r.DEPTH_TEST), s.setFunc(Vo), qe(!1), xe(uh), pe(r.CULL_FACE), ht(si);
  function pe(M) {
    c[M] !== !0 && (r.enable(M), c[M] = !0);
  }
  function fe(M) {
    c[M] !== !1 && (r.disable(M), c[M] = !1);
  }
  function Ie(M, F) {
    return h[M] !== F ? (r.bindFramebuffer(M, F), h[M] = F, M === r.DRAW_FRAMEBUFFER && (h[r.FRAMEBUFFER] = F), M === r.FRAMEBUFFER && (h[r.DRAW_FRAMEBUFFER] = F), !0) : !1;
  }
  function Oe(M, F) {
    let k = f, Y = !1;
    if (M) {
      k = u.get(F), k === void 0 && (k = [], u.set(F, k));
      const Q = M.textures;
      if (k.length !== Q.length || k[0] !== r.COLOR_ATTACHMENT0) {
        for (let ve = 0, we = Q.length; ve < we; ve++)
          k[ve] = r.COLOR_ATTACHMENT0 + ve;
        k.length = Q.length, Y = !0;
      }
    } else
      k[0] !== r.BACK && (k[0] = r.BACK, Y = !0);
    Y && r.drawBuffers(k);
  }
  function ke(M) {
    return d !== M ? (r.useProgram(M), d = M, !0) : !1;
  }
  const it = {
    [Yi]: r.FUNC_ADD,
    [Sp]: r.FUNC_SUBTRACT,
    [Tp]: r.FUNC_REVERSE_SUBTRACT
  };
  it[Ep] = r.MIN, it[bp] = r.MAX;
  const I = {
    [Ap]: r.ZERO,
    [wp]: r.ONE,
    [Rp]: r.SRC_COLOR,
    [pl]: r.SRC_ALPHA,
    [Np]: r.SRC_ALPHA_SATURATE,
    [Dp]: r.DST_COLOR,
    [Pp]: r.DST_ALPHA,
    [Cp]: r.ONE_MINUS_SRC_COLOR,
    [ml]: r.ONE_MINUS_SRC_ALPHA,
    [Ip]: r.ONE_MINUS_DST_COLOR,
    [Lp]: r.ONE_MINUS_DST_ALPHA,
    [Up]: r.CONSTANT_COLOR,
    [Op]: r.ONE_MINUS_CONSTANT_COLOR,
    [Fp]: r.CONSTANT_ALPHA,
    [Bp]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function ht(M, F, k, Y, Q, ve, we, mt, Mt, We) {
    if (M === si) {
      _ === !0 && (fe(r.BLEND), _ = !1);
      return;
    }
    if (_ === !1 && (pe(r.BLEND), _ = !0), M !== Mp) {
      if (M !== g || We !== C) {
        if ((p !== Yi || x !== Yi) && (r.blendEquation(r.FUNC_ADD), p = Yi, x = Yi), We)
          switch (M) {
            case Ls:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case dl:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case fh:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case dh:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", M);
              break;
          }
        else
          switch (M) {
            case Ls:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case dl:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case fh:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case dh:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", M);
              break;
          }
        m = null, v = null, y = null, R = null, A.set(0, 0, 0), b = 0, g = M, C = We;
      }
      return;
    }
    Q = Q || F, ve = ve || k, we = we || Y, (F !== p || Q !== x) && (r.blendEquationSeparate(it[F], it[Q]), p = F, x = Q), (k !== m || Y !== v || ve !== y || we !== R) && (r.blendFuncSeparate(I[k], I[Y], I[ve], I[we]), m = k, v = Y, y = ve, R = we), (mt.equals(A) === !1 || Mt !== b) && (r.blendColor(mt.r, mt.g, mt.b, Mt), A.copy(mt), b = Mt), g = M, C = !1;
  }
  function Xe(M, F) {
    M.side === Ln ? fe(r.CULL_FACE) : pe(r.CULL_FACE);
    let k = M.side === jt;
    F && (k = !k), qe(k), M.blending === Ls && M.transparent === !1 ? ht(si) : ht(M.blending, M.blendEquation, M.blendSrc, M.blendDst, M.blendEquationAlpha, M.blendSrcAlpha, M.blendDstAlpha, M.blendColor, M.blendAlpha, M.premultipliedAlpha), s.setFunc(M.depthFunc), s.setTest(M.depthTest), s.setMask(M.depthWrite), i.setMask(M.colorWrite);
    const Y = M.stencilWrite;
    o.setTest(Y), Y && (o.setMask(M.stencilWriteMask), o.setFunc(M.stencilFunc, M.stencilRef, M.stencilFuncMask), o.setOp(M.stencilFail, M.stencilZFail, M.stencilZPass)), Ce(M.polygonOffset, M.polygonOffsetFactor, M.polygonOffsetUnits), M.alphaToCoverage === !0 ? pe(r.SAMPLE_ALPHA_TO_COVERAGE) : fe(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function qe(M) {
    S !== M && (M ? r.frontFace(r.CW) : r.frontFace(r.CCW), S = M);
  }
  function xe(M) {
    M !== xp ? (pe(r.CULL_FACE), M !== T && (M === uh ? r.cullFace(r.BACK) : M === vp ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : fe(r.CULL_FACE), T = M;
  }
  function ut(M) {
    M !== D && (K && r.lineWidth(M), D = M);
  }
  function Ce(M, F, k) {
    M ? (pe(r.POLYGON_OFFSET_FILL), (B !== F || O !== k) && (r.polygonOffset(F, k), B = F, O = k)) : fe(r.POLYGON_OFFSET_FILL);
  }
  function De(M) {
    M ? pe(r.SCISSOR_TEST) : fe(r.SCISSOR_TEST);
  }
  function P(M) {
    M === void 0 && (M = r.TEXTURE0 + X - 1), W !== M && (r.activeTexture(M), W = M);
  }
  function E(M, F, k) {
    k === void 0 && (W === null ? k = r.TEXTURE0 + X - 1 : k = W);
    let Y = se[k];
    Y === void 0 && (Y = { type: void 0, texture: void 0 }, se[k] = Y), (Y.type !== M || Y.texture !== F) && (W !== k && (r.activeTexture(k), W = k), r.bindTexture(M, F || J[M]), Y.type = M, Y.texture = F);
  }
  function G() {
    const M = se[W];
    M !== void 0 && M.type !== void 0 && (r.bindTexture(M.type, null), M.type = void 0, M.texture = void 0);
  }
  function $() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function ee() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Z() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Me() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function re() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function ce() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Ne() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function ne() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function he() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function He() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (M) {
      console.error("THREE.WebGLState:", M);
    }
  }
  function Ee(M) {
    Le.equals(M) === !1 && (r.scissor(M.x, M.y, M.z, M.w), Le.copy(M));
  }
  function de(M) {
    Ge.equals(M) === !1 && (r.viewport(M.x, M.y, M.z, M.w), Ge.copy(M));
  }
  function Ae(M, F) {
    let k = l.get(F);
    k === void 0 && (k = /* @__PURE__ */ new WeakMap(), l.set(F, k));
    let Y = k.get(M);
    Y === void 0 && (Y = r.getUniformBlockIndex(F, M.name), k.set(M, Y));
  }
  function Pe(M, F) {
    const Y = l.get(F).get(M);
    a.get(F) !== Y && (r.uniformBlockBinding(F, Y, M.__bindingPointIndex), a.set(F, Y));
  }
  function rt() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), c = {}, W = null, se = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), f = [], d = null, _ = !1, g = null, p = null, m = null, v = null, x = null, y = null, R = null, A = new Se(0, 0, 0), b = 0, C = !1, S = null, T = null, D = null, B = null, O = null, Le.set(0, 0, r.canvas.width, r.canvas.height), Ge.set(0, 0, r.canvas.width, r.canvas.height), i.reset(), s.reset(), o.reset();
  }
  return {
    buffers: {
      color: i,
      depth: s,
      stencil: o
    },
    enable: pe,
    disable: fe,
    bindFramebuffer: Ie,
    drawBuffers: Oe,
    useProgram: ke,
    setBlending: ht,
    setMaterial: Xe,
    setFlipSided: qe,
    setCullFace: xe,
    setLineWidth: ut,
    setPolygonOffset: Ce,
    setScissorTest: De,
    activeTexture: P,
    bindTexture: E,
    unbindTexture: G,
    compressedTexImage2D: $,
    compressedTexImage3D: ee,
    texImage2D: he,
    texImage3D: He,
    updateUBOMapping: Ae,
    uniformBlockBinding: Pe,
    texStorage2D: Ne,
    texStorage3D: ne,
    texSubImage2D: Z,
    texSubImage3D: Me,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: ce,
    scissor: Ee,
    viewport: de,
    reset: rt
  };
}
function cu(r, e, t, n) {
  const i = wv(n);
  switch (t) {
    case yf:
      return r * e;
    case Sf:
      return r * e;
    case Tf:
      return r * e * 2;
    case Mc:
      return r * e / i.components * i.byteLength;
    case Sc:
      return r * e / i.components * i.byteLength;
    case Ef:
      return r * e * 2 / i.components * i.byteLength;
    case Tc:
      return r * e * 2 / i.components * i.byteLength;
    case Mf:
      return r * e * 3 / i.components * i.byteLength;
    case gn:
      return r * e * 4 / i.components * i.byteLength;
    case Ec:
      return r * e * 4 / i.components * i.byteLength;
    case Io:
    case No:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Uo:
    case Oo:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case vl:
    case Ml:
      return Math.max(r, 16) * Math.max(e, 8) / 4;
    case xl:
    case yl:
      return Math.max(r, 8) * Math.max(e, 8) / 2;
    case Sl:
    case Tl:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case El:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case bl:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Al:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case wl:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Rl:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Cl:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Pl:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ll:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Dl:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Il:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Nl:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ul:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ol:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Fl:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Bl:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Fo:
    case kl:
    case zl:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    case bf:
    case Hl:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case Vl:
    case Gl:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function wv(r) {
  switch (r) {
    case ai:
    case _f:
      return { byteLength: 1, components: 1 };
    case Pr:
    case xf:
    case ri:
      return { byteLength: 2, components: 1 };
    case vc:
    case yc:
      return { byteLength: 2, components: 4 };
    case Qi:
    case xc:
    case An:
      return { byteLength: 4, components: 1 };
    case vf:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
function Rv(r, e, t, n, i, s, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new te(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(P, E) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(P, E)
    ) : Ir("canvas");
  }
  function g(P, E, G) {
    let $ = 1;
    const ee = De(P);
    if ((ee.width > G || ee.height > G) && ($ = G / Math.max(ee.width, ee.height)), $ < 1)
      if (typeof HTMLImageElement < "u" && P instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && P instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && P instanceof ImageBitmap || typeof VideoFrame < "u" && P instanceof VideoFrame) {
        const Z = Math.floor($ * ee.width), Me = Math.floor($ * ee.height);
        u === void 0 && (u = _(Z, Me));
        const re = E ? _(Z, Me) : u;
        return re.width = Z, re.height = Me, re.getContext("2d").drawImage(P, 0, 0, Z, Me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + ee.width + "x" + ee.height + ") to (" + Z + "x" + Me + ")."), re;
      } else
        return "data" in P && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + ee.width + "x" + ee.height + ")."), P;
    return P;
  }
  function p(P) {
    return P.generateMipmaps && P.minFilter !== Yt && P.minFilter !== an;
  }
  function m(P) {
    r.generateMipmap(P);
  }
  function v(P, E, G, $, ee = !1) {
    if (P !== null) {
      if (r[P] !== void 0) return r[P];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + P + "'");
    }
    let Z = E;
    if (E === r.RED && (G === r.FLOAT && (Z = r.R32F), G === r.HALF_FLOAT && (Z = r.R16F), G === r.UNSIGNED_BYTE && (Z = r.R8)), E === r.RED_INTEGER && (G === r.UNSIGNED_BYTE && (Z = r.R8UI), G === r.UNSIGNED_SHORT && (Z = r.R16UI), G === r.UNSIGNED_INT && (Z = r.R32UI), G === r.BYTE && (Z = r.R8I), G === r.SHORT && (Z = r.R16I), G === r.INT && (Z = r.R32I)), E === r.RG && (G === r.FLOAT && (Z = r.RG32F), G === r.HALF_FLOAT && (Z = r.RG16F), G === r.UNSIGNED_BYTE && (Z = r.RG8)), E === r.RG_INTEGER && (G === r.UNSIGNED_BYTE && (Z = r.RG8UI), G === r.UNSIGNED_SHORT && (Z = r.RG16UI), G === r.UNSIGNED_INT && (Z = r.RG32UI), G === r.BYTE && (Z = r.RG8I), G === r.SHORT && (Z = r.RG16I), G === r.INT && (Z = r.RG32I)), E === r.RGB && G === r.UNSIGNED_INT_5_9_9_9_REV && (Z = r.RGB9_E5), E === r.RGBA) {
      const Me = ee ? Wo : Ye.getTransfer($);
      G === r.FLOAT && (Z = r.RGBA32F), G === r.HALF_FLOAT && (Z = r.RGBA16F), G === r.UNSIGNED_BYTE && (Z = Me === st ? r.SRGB8_ALPHA8 : r.RGBA8), G === r.UNSIGNED_SHORT_4_4_4_4 && (Z = r.RGBA4), G === r.UNSIGNED_SHORT_5_5_5_1 && (Z = r.RGB5_A1);
    }
    return (Z === r.R16F || Z === r.R32F || Z === r.RG16F || Z === r.RG32F || Z === r.RGBA16F || Z === r.RGBA32F) && e.get("EXT_color_buffer_float"), Z;
  }
  function x(P, E) {
    let G;
    return P ? E === null || E === Qi || E === Vs ? G = r.DEPTH24_STENCIL8 : E === An ? G = r.DEPTH32F_STENCIL8 : E === Pr && (G = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : E === null || E === Qi || E === Vs ? G = r.DEPTH_COMPONENT24 : E === An ? G = r.DEPTH_COMPONENT32F : E === Pr && (G = r.DEPTH_COMPONENT16), G;
  }
  function y(P, E) {
    return p(P) === !0 || P.isFramebufferTexture && P.minFilter !== Yt && P.minFilter !== an ? Math.log2(Math.max(E.width, E.height)) + 1 : P.mipmaps !== void 0 && P.mipmaps.length > 0 ? P.mipmaps.length : P.isCompressedTexture && Array.isArray(P.image) ? E.mipmaps.length : 1;
  }
  function R(P) {
    const E = P.target;
    E.removeEventListener("dispose", R), b(E), E.isVideoTexture && h.delete(E);
  }
  function A(P) {
    const E = P.target;
    E.removeEventListener("dispose", A), S(E);
  }
  function b(P) {
    const E = n.get(P);
    if (E.__webglInit === void 0) return;
    const G = P.source, $ = f.get(G);
    if ($) {
      const ee = $[E.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && C(P), Object.keys($).length === 0 && f.delete(G);
    }
    n.remove(P);
  }
  function C(P) {
    const E = n.get(P);
    r.deleteTexture(E.__webglTexture);
    const G = P.source, $ = f.get(G);
    delete $[E.__cacheKey], o.memory.textures--;
  }
  function S(P) {
    const E = n.get(P);
    if (P.depthTexture && P.depthTexture.dispose(), P.isWebGLCubeRenderTarget)
      for (let $ = 0; $ < 6; $++) {
        if (Array.isArray(E.__webglFramebuffer[$]))
          for (let ee = 0; ee < E.__webglFramebuffer[$].length; ee++) r.deleteFramebuffer(E.__webglFramebuffer[$][ee]);
        else
          r.deleteFramebuffer(E.__webglFramebuffer[$]);
        E.__webglDepthbuffer && r.deleteRenderbuffer(E.__webglDepthbuffer[$]);
      }
    else {
      if (Array.isArray(E.__webglFramebuffer))
        for (let $ = 0; $ < E.__webglFramebuffer.length; $++) r.deleteFramebuffer(E.__webglFramebuffer[$]);
      else
        r.deleteFramebuffer(E.__webglFramebuffer);
      if (E.__webglDepthbuffer && r.deleteRenderbuffer(E.__webglDepthbuffer), E.__webglMultisampledFramebuffer && r.deleteFramebuffer(E.__webglMultisampledFramebuffer), E.__webglColorRenderbuffer)
        for (let $ = 0; $ < E.__webglColorRenderbuffer.length; $++)
          E.__webglColorRenderbuffer[$] && r.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);
      E.__webglDepthRenderbuffer && r.deleteRenderbuffer(E.__webglDepthRenderbuffer);
    }
    const G = P.textures;
    for (let $ = 0, ee = G.length; $ < ee; $++) {
      const Z = n.get(G[$]);
      Z.__webglTexture && (r.deleteTexture(Z.__webglTexture), o.memory.textures--), n.remove(G[$]);
    }
    n.remove(P);
  }
  let T = 0;
  function D() {
    T = 0;
  }
  function B() {
    const P = T;
    return P >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + P + " texture units while this GPU supports only " + i.maxTextures), T += 1, P;
  }
  function O(P) {
    const E = [];
    return E.push(P.wrapS), E.push(P.wrapT), E.push(P.wrapR || 0), E.push(P.magFilter), E.push(P.minFilter), E.push(P.anisotropy), E.push(P.internalFormat), E.push(P.format), E.push(P.type), E.push(P.generateMipmaps), E.push(P.premultiplyAlpha), E.push(P.flipY), E.push(P.unpackAlignment), E.push(P.colorSpace), E.join();
  }
  function X(P, E) {
    const G = n.get(P);
    if (P.isVideoTexture && ut(P), P.isRenderTargetTexture === !1 && P.version > 0 && G.__version !== P.version) {
      const $ = P.image;
      if ($ === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if ($.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ge(G, P, E);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, G.__webglTexture, r.TEXTURE0 + E);
  }
  function K(P, E) {
    const G = n.get(P);
    if (P.version > 0 && G.__version !== P.version) {
      Ge(G, P, E);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, G.__webglTexture, r.TEXTURE0 + E);
  }
  function H(P, E) {
    const G = n.get(P);
    if (P.version > 0 && G.__version !== P.version) {
      Ge(G, P, E);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, G.__webglTexture, r.TEXTURE0 + E);
  }
  function j(P, E) {
    const G = n.get(P);
    if (P.version > 0 && G.__version !== P.version) {
      q(G, P, E);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, G.__webglTexture, r.TEXTURE0 + E);
  }
  const W = {
    [Hs]: r.REPEAT,
    [Ti]: r.CLAMP_TO_EDGE,
    [Go]: r.MIRRORED_REPEAT
  }, se = {
    [Yt]: r.NEAREST,
    [gf]: r.NEAREST_MIPMAP_NEAREST,
    [xr]: r.NEAREST_MIPMAP_LINEAR,
    [an]: r.LINEAR,
    [Do]: r.LINEAR_MIPMAP_NEAREST,
    [ti]: r.LINEAR_MIPMAP_LINEAR
  }, ae = {
    [am]: r.NEVER,
    [dm]: r.ALWAYS,
    [lm]: r.LESS,
    [Rf]: r.LEQUAL,
    [cm]: r.EQUAL,
    [fm]: r.GEQUAL,
    [hm]: r.GREATER,
    [um]: r.NOTEQUAL
  };
  function ue(P, E) {
    if (E.type === An && e.has("OES_texture_float_linear") === !1 && (E.magFilter === an || E.magFilter === Do || E.magFilter === xr || E.magFilter === ti || E.minFilter === an || E.minFilter === Do || E.minFilter === xr || E.minFilter === ti) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(P, r.TEXTURE_WRAP_S, W[E.wrapS]), r.texParameteri(P, r.TEXTURE_WRAP_T, W[E.wrapT]), (P === r.TEXTURE_3D || P === r.TEXTURE_2D_ARRAY) && r.texParameteri(P, r.TEXTURE_WRAP_R, W[E.wrapR]), r.texParameteri(P, r.TEXTURE_MAG_FILTER, se[E.magFilter]), r.texParameteri(P, r.TEXTURE_MIN_FILTER, se[E.minFilter]), E.compareFunction && (r.texParameteri(P, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(P, r.TEXTURE_COMPARE_FUNC, ae[E.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (E.magFilter === Yt || E.minFilter !== xr && E.minFilter !== ti || E.type === An && e.has("OES_texture_float_linear") === !1) return;
      if (E.anisotropy > 1 || n.get(E).__currentAnisotropy) {
        const G = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(P, G.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(E.anisotropy, i.getMaxAnisotropy())), n.get(E).__currentAnisotropy = E.anisotropy;
      }
    }
  }
  function Le(P, E) {
    let G = !1;
    P.__webglInit === void 0 && (P.__webglInit = !0, E.addEventListener("dispose", R));
    const $ = E.source;
    let ee = f.get($);
    ee === void 0 && (ee = {}, f.set($, ee));
    const Z = O(E);
    if (Z !== P.__cacheKey) {
      ee[Z] === void 0 && (ee[Z] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, G = !0), ee[Z].usedTimes++;
      const Me = ee[P.__cacheKey];
      Me !== void 0 && (ee[P.__cacheKey].usedTimes--, Me.usedTimes === 0 && C(E)), P.__cacheKey = Z, P.__webglTexture = ee[Z].texture;
    }
    return G;
  }
  function Ge(P, E, G) {
    let $ = r.TEXTURE_2D;
    (E.isDataArrayTexture || E.isCompressedArrayTexture) && ($ = r.TEXTURE_2D_ARRAY), E.isData3DTexture && ($ = r.TEXTURE_3D);
    const ee = Le(P, E), Z = E.source;
    t.bindTexture($, P.__webglTexture, r.TEXTURE0 + G);
    const Me = n.get(Z);
    if (Z.version !== Me.__version || ee === !0) {
      t.activeTexture(r.TEXTURE0 + G);
      const re = Ye.getPrimaries(Ye.workingColorSpace), ce = E.colorSpace === Si ? null : Ye.getPrimaries(E.colorSpace), Ne = E.colorSpace === Si || re === ce ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, E.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, E.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, E.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ne);
      let ne = g(E.image, !1, i.maxTextureSize);
      ne = Ce(E, ne);
      const he = s.convert(E.format, E.colorSpace), He = s.convert(E.type);
      let Ee = v(E.internalFormat, he, He, E.colorSpace, E.isVideoTexture);
      ue($, E);
      let de;
      const Ae = E.mipmaps, Pe = E.isVideoTexture !== !0, rt = Me.__version === void 0 || ee === !0, M = Z.dataReady, F = y(E, ne);
      if (E.isDepthTexture)
        Ee = x(E.format === Gs, E.type), rt && (Pe ? t.texStorage2D(r.TEXTURE_2D, 1, Ee, ne.width, ne.height) : t.texImage2D(r.TEXTURE_2D, 0, Ee, ne.width, ne.height, 0, he, He, null));
      else if (E.isDataTexture)
        if (Ae.length > 0) {
          Pe && rt && t.texStorage2D(r.TEXTURE_2D, F, Ee, Ae[0].width, Ae[0].height);
          for (let k = 0, Y = Ae.length; k < Y; k++)
            de = Ae[k], Pe ? M && t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, de.width, de.height, he, He, de.data) : t.texImage2D(r.TEXTURE_2D, k, Ee, de.width, de.height, 0, he, He, de.data);
          E.generateMipmaps = !1;
        } else
          Pe ? (rt && t.texStorage2D(r.TEXTURE_2D, F, Ee, ne.width, ne.height), M && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ne.width, ne.height, he, He, ne.data)) : t.texImage2D(r.TEXTURE_2D, 0, Ee, ne.width, ne.height, 0, he, He, ne.data);
      else if (E.isCompressedTexture)
        if (E.isCompressedArrayTexture) {
          Pe && rt && t.texStorage3D(r.TEXTURE_2D_ARRAY, F, Ee, Ae[0].width, Ae[0].height, ne.depth);
          for (let k = 0, Y = Ae.length; k < Y; k++)
            if (de = Ae[k], E.format !== gn)
              if (he !== null)
                if (Pe) {
                  if (M)
                    if (E.layerUpdates.size > 0) {
                      const Q = cu(de.width, de.height, E.format, E.type);
                      for (const ve of E.layerUpdates) {
                        const we = de.data.subarray(
                          ve * Q / de.data.BYTES_PER_ELEMENT,
                          (ve + 1) * Q / de.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, ve, de.width, de.height, 1, he, we, 0, 0);
                      }
                      E.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, 0, de.width, de.height, ne.depth, he, de.data, 0, 0);
                } else
                  t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, k, Ee, de.width, de.height, ne.depth, 0, de.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Pe ? M && t.texSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, 0, de.width, de.height, ne.depth, he, He, de.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, k, Ee, de.width, de.height, ne.depth, 0, he, He, de.data);
        } else {
          Pe && rt && t.texStorage2D(r.TEXTURE_2D, F, Ee, Ae[0].width, Ae[0].height);
          for (let k = 0, Y = Ae.length; k < Y; k++)
            de = Ae[k], E.format !== gn ? he !== null ? Pe ? M && t.compressedTexSubImage2D(r.TEXTURE_2D, k, 0, 0, de.width, de.height, he, de.data) : t.compressedTexImage2D(r.TEXTURE_2D, k, Ee, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pe ? M && t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, de.width, de.height, he, He, de.data) : t.texImage2D(r.TEXTURE_2D, k, Ee, de.width, de.height, 0, he, He, de.data);
        }
      else if (E.isDataArrayTexture)
        if (Pe) {
          if (rt && t.texStorage3D(r.TEXTURE_2D_ARRAY, F, Ee, ne.width, ne.height, ne.depth), M)
            if (E.layerUpdates.size > 0) {
              const k = cu(ne.width, ne.height, E.format, E.type);
              for (const Y of E.layerUpdates) {
                const Q = ne.data.subarray(
                  Y * k / ne.data.BYTES_PER_ELEMENT,
                  (Y + 1) * k / ne.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, Y, ne.width, ne.height, 1, he, He, Q);
              }
              E.clearLayerUpdates();
            } else
              t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ne.width, ne.height, ne.depth, he, He, ne.data);
        } else
          t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Ee, ne.width, ne.height, ne.depth, 0, he, He, ne.data);
      else if (E.isData3DTexture)
        Pe ? (rt && t.texStorage3D(r.TEXTURE_3D, F, Ee, ne.width, ne.height, ne.depth), M && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, ne.width, ne.height, ne.depth, he, He, ne.data)) : t.texImage3D(r.TEXTURE_3D, 0, Ee, ne.width, ne.height, ne.depth, 0, he, He, ne.data);
      else if (E.isFramebufferTexture) {
        if (rt)
          if (Pe)
            t.texStorage2D(r.TEXTURE_2D, F, Ee, ne.width, ne.height);
          else {
            let k = ne.width, Y = ne.height;
            for (let Q = 0; Q < F; Q++)
              t.texImage2D(r.TEXTURE_2D, Q, Ee, k, Y, 0, he, He, null), k >>= 1, Y >>= 1;
          }
      } else if (Ae.length > 0) {
        if (Pe && rt) {
          const k = De(Ae[0]);
          t.texStorage2D(r.TEXTURE_2D, F, Ee, k.width, k.height);
        }
        for (let k = 0, Y = Ae.length; k < Y; k++)
          de = Ae[k], Pe ? M && t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, he, He, de) : t.texImage2D(r.TEXTURE_2D, k, Ee, he, He, de);
        E.generateMipmaps = !1;
      } else if (Pe) {
        if (rt) {
          const k = De(ne);
          t.texStorage2D(r.TEXTURE_2D, F, Ee, k.width, k.height);
        }
        M && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, he, He, ne);
      } else
        t.texImage2D(r.TEXTURE_2D, 0, Ee, he, He, ne);
      p(E) && m($), Me.__version = Z.version, E.onUpdate && E.onUpdate(E);
    }
    P.__version = E.version;
  }
  function q(P, E, G) {
    if (E.image.length !== 6) return;
    const $ = Le(P, E), ee = E.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, P.__webglTexture, r.TEXTURE0 + G);
    const Z = n.get(ee);
    if (ee.version !== Z.__version || $ === !0) {
      t.activeTexture(r.TEXTURE0 + G);
      const Me = Ye.getPrimaries(Ye.workingColorSpace), re = E.colorSpace === Si ? null : Ye.getPrimaries(E.colorSpace), ce = E.colorSpace === Si || Me === re ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, E.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, E.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, E.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const Ne = E.isCompressedTexture || E.image[0].isCompressedTexture, ne = E.image[0] && E.image[0].isDataTexture, he = [];
      for (let Y = 0; Y < 6; Y++)
        !Ne && !ne ? he[Y] = g(E.image[Y], !0, i.maxCubemapSize) : he[Y] = ne ? E.image[Y].image : E.image[Y], he[Y] = Ce(E, he[Y]);
      const He = he[0], Ee = s.convert(E.format, E.colorSpace), de = s.convert(E.type), Ae = v(E.internalFormat, Ee, de, E.colorSpace), Pe = E.isVideoTexture !== !0, rt = Z.__version === void 0 || $ === !0, M = ee.dataReady;
      let F = y(E, He);
      ue(r.TEXTURE_CUBE_MAP, E);
      let k;
      if (Ne) {
        Pe && rt && t.texStorage2D(r.TEXTURE_CUBE_MAP, F, Ae, He.width, He.height);
        for (let Y = 0; Y < 6; Y++) {
          k = he[Y].mipmaps;
          for (let Q = 0; Q < k.length; Q++) {
            const ve = k[Q];
            E.format !== gn ? Ee !== null ? Pe ? M && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q, 0, 0, ve.width, ve.height, Ee, ve.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q, Ae, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pe ? M && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q, 0, 0, ve.width, ve.height, Ee, de, ve.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q, Ae, ve.width, ve.height, 0, Ee, de, ve.data);
          }
        }
      } else {
        if (k = E.mipmaps, Pe && rt) {
          k.length > 0 && F++;
          const Y = De(he[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, F, Ae, Y.width, Y.height);
        }
        for (let Y = 0; Y < 6; Y++)
          if (ne) {
            Pe ? M && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, he[Y].width, he[Y].height, Ee, de, he[Y].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ae, he[Y].width, he[Y].height, 0, Ee, de, he[Y].data);
            for (let Q = 0; Q < k.length; Q++) {
              const we = k[Q].image[Y].image;
              Pe ? M && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q + 1, 0, 0, we.width, we.height, Ee, de, we.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q + 1, Ae, we.width, we.height, 0, Ee, de, we.data);
            }
          } else {
            Pe ? M && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, Ee, de, he[Y]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Ae, Ee, de, he[Y]);
            for (let Q = 0; Q < k.length; Q++) {
              const ve = k[Q];
              Pe ? M && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q + 1, 0, 0, Ee, de, ve.image[Y]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + Y, Q + 1, Ae, Ee, de, ve.image[Y]);
            }
          }
      }
      p(E) && m(r.TEXTURE_CUBE_MAP), Z.__version = ee.version, E.onUpdate && E.onUpdate(E);
    }
    P.__version = E.version;
  }
  function J(P, E, G, $, ee, Z) {
    const Me = s.convert(G.format, G.colorSpace), re = s.convert(G.type), ce = v(G.internalFormat, Me, re, G.colorSpace);
    if (!n.get(E).__hasExternalTextures) {
      const ne = Math.max(1, E.width >> Z), he = Math.max(1, E.height >> Z);
      ee === r.TEXTURE_3D || ee === r.TEXTURE_2D_ARRAY ? t.texImage3D(ee, Z, ce, ne, he, E.depth, 0, Me, re, null) : t.texImage2D(ee, Z, ce, ne, he, 0, Me, re, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, P), xe(E) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, $, ee, n.get(G).__webglTexture, 0, qe(E)) : (ee === r.TEXTURE_2D || ee >= r.TEXTURE_CUBE_MAP_POSITIVE_X && ee <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, $, ee, n.get(G).__webglTexture, Z), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function pe(P, E, G) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, P), E.depthBuffer) {
      const $ = E.depthTexture, ee = $ && $.isDepthTexture ? $.type : null, Z = x(E.stencilBuffer, ee), Me = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, re = qe(E);
      xe(E) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, re, Z, E.width, E.height) : G ? r.renderbufferStorageMultisample(r.RENDERBUFFER, re, Z, E.width, E.height) : r.renderbufferStorage(r.RENDERBUFFER, Z, E.width, E.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, Me, r.RENDERBUFFER, P);
    } else {
      const $ = E.textures;
      for (let ee = 0; ee < $.length; ee++) {
        const Z = $[ee], Me = s.convert(Z.format, Z.colorSpace), re = s.convert(Z.type), ce = v(Z.internalFormat, Me, re, Z.colorSpace), Ne = qe(E);
        G && xe(E) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Ne, ce, E.width, E.height) : xe(E) ? a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Ne, ce, E.width, E.height) : r.renderbufferStorage(r.RENDERBUFFER, ce, E.width, E.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function fe(P, E) {
    if (E && E.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, P), !(E.depthTexture && E.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(E.depthTexture).__webglTexture || E.depthTexture.image.width !== E.width || E.depthTexture.image.height !== E.height) && (E.depthTexture.image.width = E.width, E.depthTexture.image.height = E.height, E.depthTexture.needsUpdate = !0), X(E.depthTexture, 0);
    const $ = n.get(E.depthTexture).__webglTexture, ee = qe(E);
    if (E.depthTexture.format === Ds)
      xe(E) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, $, 0, ee) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, $, 0);
    else if (E.depthTexture.format === Gs)
      xe(E) ? a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, $, 0, ee) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ie(P) {
    const E = n.get(P), G = P.isWebGLCubeRenderTarget === !0;
    if (P.depthTexture && !E.__autoAllocateDepthBuffer) {
      if (G) throw new Error("target.depthTexture not supported in Cube render targets");
      fe(E.__webglFramebuffer, P);
    } else if (G) {
      E.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        t.bindFramebuffer(r.FRAMEBUFFER, E.__webglFramebuffer[$]), E.__webglDepthbuffer[$] = r.createRenderbuffer(), pe(E.__webglDepthbuffer[$], P, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, E.__webglFramebuffer), E.__webglDepthbuffer = r.createRenderbuffer(), pe(E.__webglDepthbuffer, P, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Oe(P, E, G) {
    const $ = n.get(P);
    E !== void 0 && J($.__webglFramebuffer, P, P.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), G !== void 0 && Ie(P);
  }
  function ke(P) {
    const E = P.texture, G = n.get(P), $ = n.get(E);
    P.addEventListener("dispose", A);
    const ee = P.textures, Z = P.isWebGLCubeRenderTarget === !0, Me = ee.length > 1;
    if (Me || ($.__webglTexture === void 0 && ($.__webglTexture = r.createTexture()), $.__version = E.version, o.memory.textures++), Z) {
      G.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (E.mipmaps && E.mipmaps.length > 0) {
          G.__webglFramebuffer[re] = [];
          for (let ce = 0; ce < E.mipmaps.length; ce++)
            G.__webglFramebuffer[re][ce] = r.createFramebuffer();
        } else
          G.__webglFramebuffer[re] = r.createFramebuffer();
    } else {
      if (E.mipmaps && E.mipmaps.length > 0) {
        G.__webglFramebuffer = [];
        for (let re = 0; re < E.mipmaps.length; re++)
          G.__webglFramebuffer[re] = r.createFramebuffer();
      } else
        G.__webglFramebuffer = r.createFramebuffer();
      if (Me)
        for (let re = 0, ce = ee.length; re < ce; re++) {
          const Ne = n.get(ee[re]);
          Ne.__webglTexture === void 0 && (Ne.__webglTexture = r.createTexture(), o.memory.textures++);
        }
      if (P.samples > 0 && xe(P) === !1) {
        G.__webglMultisampledFramebuffer = r.createFramebuffer(), G.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, G.__webglMultisampledFramebuffer);
        for (let re = 0; re < ee.length; re++) {
          const ce = ee[re];
          G.__webglColorRenderbuffer[re] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, G.__webglColorRenderbuffer[re]);
          const Ne = s.convert(ce.format, ce.colorSpace), ne = s.convert(ce.type), he = v(ce.internalFormat, Ne, ne, ce.colorSpace, P.isXRRenderTarget === !0), He = qe(P);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, He, he, P.width, P.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + re, r.RENDERBUFFER, G.__webglColorRenderbuffer[re]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), P.depthBuffer && (G.__webglDepthRenderbuffer = r.createRenderbuffer(), pe(G.__webglDepthRenderbuffer, P, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, $.__webglTexture), ue(r.TEXTURE_CUBE_MAP, E);
      for (let re = 0; re < 6; re++)
        if (E.mipmaps && E.mipmaps.length > 0)
          for (let ce = 0; ce < E.mipmaps.length; ce++)
            J(G.__webglFramebuffer[re][ce], P, E, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, ce);
        else
          J(G.__webglFramebuffer[re], P, E, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      p(E) && m(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Me) {
      for (let re = 0, ce = ee.length; re < ce; re++) {
        const Ne = ee[re], ne = n.get(Ne);
        t.bindTexture(r.TEXTURE_2D, ne.__webglTexture), ue(r.TEXTURE_2D, Ne), J(G.__webglFramebuffer, P, Ne, r.COLOR_ATTACHMENT0 + re, r.TEXTURE_2D, 0), p(Ne) && m(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = r.TEXTURE_2D;
      if ((P.isWebGL3DRenderTarget || P.isWebGLArrayRenderTarget) && (re = P.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(re, $.__webglTexture), ue(re, E), E.mipmaps && E.mipmaps.length > 0)
        for (let ce = 0; ce < E.mipmaps.length; ce++)
          J(G.__webglFramebuffer[ce], P, E, r.COLOR_ATTACHMENT0, re, ce);
      else
        J(G.__webglFramebuffer, P, E, r.COLOR_ATTACHMENT0, re, 0);
      p(E) && m(re), t.unbindTexture();
    }
    P.depthBuffer && Ie(P);
  }
  function it(P) {
    const E = P.textures;
    for (let G = 0, $ = E.length; G < $; G++) {
      const ee = E[G];
      if (p(ee)) {
        const Z = P.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, Me = n.get(ee).__webglTexture;
        t.bindTexture(Z, Me), m(Z), t.unbindTexture();
      }
    }
  }
  const I = [], ht = [];
  function Xe(P) {
    if (P.samples > 0) {
      if (xe(P) === !1) {
        const E = P.textures, G = P.width, $ = P.height;
        let ee = r.COLOR_BUFFER_BIT;
        const Z = P.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, Me = n.get(P), re = E.length > 1;
        if (re)
          for (let ce = 0; ce < E.length; ce++)
            t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ce, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ce, r.TEXTURE_2D, null, 0);
        t.bindFramebuffer(r.READ_FRAMEBUFFER, Me.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Me.__webglFramebuffer);
        for (let ce = 0; ce < E.length; ce++) {
          if (P.resolveDepthBuffer && (P.depthBuffer && (ee |= r.DEPTH_BUFFER_BIT), P.stencilBuffer && P.resolveStencilBuffer && (ee |= r.STENCIL_BUFFER_BIT)), re) {
            r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, Me.__webglColorRenderbuffer[ce]);
            const Ne = n.get(E[ce]).__webglTexture;
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Ne, 0);
          }
          r.blitFramebuffer(0, 0, G, $, 0, 0, G, $, ee, r.NEAREST), l === !0 && (I.length = 0, ht.length = 0, I.push(r.COLOR_ATTACHMENT0 + ce), P.depthBuffer && P.resolveDepthBuffer === !1 && (I.push(Z), ht.push(Z), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, ht)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, I));
        }
        if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), re)
          for (let ce = 0; ce < E.length; ce++) {
            t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ce, r.RENDERBUFFER, Me.__webglColorRenderbuffer[ce]);
            const Ne = n.get(E[ce]).__webglTexture;
            t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ce, r.TEXTURE_2D, Ne, 0);
          }
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
      } else if (P.depthBuffer && P.resolveDepthBuffer === !1 && l) {
        const E = P.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [E]);
      }
    }
  }
  function qe(P) {
    return Math.min(i.maxSamples, P.samples);
  }
  function xe(P) {
    const E = n.get(P);
    return P.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && E.__useRenderToTexture !== !1;
  }
  function ut(P) {
    const E = o.render.frame;
    h.get(P) !== E && (h.set(P, E), P.update());
  }
  function Ce(P, E) {
    const G = P.colorSpace, $ = P.format, ee = P.type;
    return P.isCompressedTexture === !0 || P.isVideoTexture === !0 || G !== Dt && G !== Si && (Ye.getTransfer(G) === st ? ($ !== gn || ee !== ai) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", G)), E;
  }
  function De(P) {
    return typeof HTMLImageElement < "u" && P instanceof HTMLImageElement ? (c.width = P.naturalWidth || P.width, c.height = P.naturalHeight || P.height) : typeof VideoFrame < "u" && P instanceof VideoFrame ? (c.width = P.displayWidth, c.height = P.displayHeight) : (c.width = P.width, c.height = P.height), c;
  }
  this.allocateTextureUnit = B, this.resetTextureUnits = D, this.setTexture2D = X, this.setTexture2DArray = K, this.setTexture3D = H, this.setTextureCube = j, this.rebindTextures = Oe, this.setupRenderTarget = ke, this.updateRenderTargetMipmap = it, this.updateMultisampleRenderTarget = Xe, this.setupDepthRenderbuffer = Ie, this.setupFrameBufferTexture = J, this.useMultisampledRTT = xe;
}
function Cv(r, e) {
  function t(n, i = Si) {
    let s;
    const o = Ye.getTransfer(i);
    if (n === ai) return r.UNSIGNED_BYTE;
    if (n === vc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === yc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === vf) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === _f) return r.BYTE;
    if (n === xf) return r.SHORT;
    if (n === Pr) return r.UNSIGNED_SHORT;
    if (n === xc) return r.INT;
    if (n === Qi) return r.UNSIGNED_INT;
    if (n === An) return r.FLOAT;
    if (n === ri) return r.HALF_FLOAT;
    if (n === yf) return r.ALPHA;
    if (n === Mf) return r.RGB;
    if (n === gn) return r.RGBA;
    if (n === Sf) return r.LUMINANCE;
    if (n === Tf) return r.LUMINANCE_ALPHA;
    if (n === Ds) return r.DEPTH_COMPONENT;
    if (n === Gs) return r.DEPTH_STENCIL;
    if (n === Mc) return r.RED;
    if (n === Sc) return r.RED_INTEGER;
    if (n === Ef) return r.RG;
    if (n === Tc) return r.RG_INTEGER;
    if (n === Ec) return r.RGBA_INTEGER;
    if (n === Io || n === No || n === Uo || n === Oo)
      if (o === st)
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === Io) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === No) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Uo) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Oo) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === Io) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === No) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Uo) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Oo) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === xl || n === vl || n === yl || n === Ml)
      if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === xl) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === vl) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === yl) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Ml) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Sl || n === Tl || n === El)
      if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === Sl || n === Tl) return o === st ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === El) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === bl || n === Al || n === wl || n === Rl || n === Cl || n === Pl || n === Ll || n === Dl || n === Il || n === Nl || n === Ul || n === Ol || n === Fl || n === Bl)
      if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === bl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Al) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === wl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Rl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Cl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Pl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Ll) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Dl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Il) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Nl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ul) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Ol) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Fl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Bl) return o === st ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Fo || n === kl || n === zl)
      if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === Fo) return o === st ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === kl) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === zl) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === bf || n === Hl || n === Vl || n === Gl)
      if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === Fo) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === Hl) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Vl) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Gl) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Vs ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: t };
}
class Pv extends Wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class ii extends tt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Lv = { type: "move" };
class Ga {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ii(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ii(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ii(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const g of e.hand.values()) {
          const p = t.getJointPose(g, n), m = this._getHandJoint(c, g);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = h.position.distanceTo(u.position), d = 0.02, _ = 5e-3;
        c.inputState.pinching && f > d + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= d - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Lv)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ii();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Dv = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Iv = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Nv {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new Ct(), s = e.properties.get(i);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Kt({
        vertexShader: Dv,
        fragmentShader: Iv,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new kt(new aa(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Uv extends is {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, f = null, d = null, _ = null;
    const g = new Nv(), p = t.getContextAttributes();
    let m = null, v = null;
    const x = [], y = [], R = new te();
    let A = null;
    const b = new Wt();
    b.layers.enable(1), b.viewport = new Qe();
    const C = new Wt();
    C.layers.enable(2), C.viewport = new Qe();
    const S = [b, C], T = new Pv();
    T.layers.enable(1), T.layers.enable(2);
    let D = null, B = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let J = x[q];
      return J === void 0 && (J = new Ga(), x[q] = J), J.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let J = x[q];
      return J === void 0 && (J = new Ga(), x[q] = J), J.getGripSpace();
    }, this.getHand = function(q) {
      let J = x[q];
      return J === void 0 && (J = new Ga(), x[q] = J), J.getHandSpace();
    };
    function O(q) {
      const J = y.indexOf(q.inputSource);
      if (J === -1)
        return;
      const pe = x[J];
      pe !== void 0 && (pe.update(q.inputSource, q.frame, c || o), pe.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function X() {
      i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", X), i.removeEventListener("inputsourceschange", K);
      for (let q = 0; q < x.length; q++) {
        const J = y[q];
        J !== null && (y[q] = null, x[q].disconnect(J));
      }
      D = null, B = null, g.reset(), e.setRenderTarget(m), d = null, f = null, u = null, i = null, v = null, Ge.stop(), n.isPresenting = !1, e.setPixelRatio(A), e.setSize(R.width, R.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      s = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      a = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(q) {
      c = q;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(q) {
      if (i = q, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", X), i.addEventListener("inputsourceschange", K), p.xrCompatible !== !0 && await t.makeXRCompatible(), A = e.getPixelRatio(), e.getSize(R), i.renderState.layers === void 0) {
          const J = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, J), i.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), v = new Rn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: gn,
              type: ai,
              colorSpace: e.outputColorSpace,
              stencilBuffer: p.stencil
            }
          );
        } else {
          let J = null, pe = null, fe = null;
          p.depth && (fe = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, J = p.stencil ? Gs : Ds, pe = p.stencil ? Vs : Qi);
          const Ie = {
            colorFormat: t.RGBA8,
            depthFormat: fe,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), f = u.createProjectionLayer(Ie), i.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), v = new Rn(
            f.textureWidth,
            f.textureHeight,
            {
              format: gn,
              type: ai,
              depthTexture: new kf(f.textureWidth, f.textureHeight, pe, void 0, void 0, void 0, void 0, void 0, void 0, J),
              stencilBuffer: p.stencil,
              colorSpace: e.outputColorSpace,
              samples: p.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        v.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), Ge.setContext(i), Ge.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function K(q) {
      for (let J = 0; J < q.removed.length; J++) {
        const pe = q.removed[J], fe = y.indexOf(pe);
        fe >= 0 && (y[fe] = null, x[fe].disconnect(pe));
      }
      for (let J = 0; J < q.added.length; J++) {
        const pe = q.added[J];
        let fe = y.indexOf(pe);
        if (fe === -1) {
          for (let Oe = 0; Oe < x.length; Oe++)
            if (Oe >= y.length) {
              y.push(pe), fe = Oe;
              break;
            } else if (y[Oe] === null) {
              y[Oe] = pe, fe = Oe;
              break;
            }
          if (fe === -1) break;
        }
        const Ie = x[fe];
        Ie && Ie.connect(pe);
      }
    }
    const H = new L(), j = new L();
    function W(q, J, pe) {
      H.setFromMatrixPosition(J.matrixWorld), j.setFromMatrixPosition(pe.matrixWorld);
      const fe = H.distanceTo(j), Ie = J.projectionMatrix.elements, Oe = pe.projectionMatrix.elements, ke = Ie[14] / (Ie[10] - 1), it = Ie[14] / (Ie[10] + 1), I = (Ie[9] + 1) / Ie[5], ht = (Ie[9] - 1) / Ie[5], Xe = (Ie[8] - 1) / Ie[0], qe = (Oe[8] + 1) / Oe[0], xe = ke * Xe, ut = ke * qe, Ce = fe / (-Xe + qe), De = Ce * -Xe;
      J.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(De), q.translateZ(Ce), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert();
      const P = ke + Ce, E = it + Ce, G = xe - De, $ = ut + (fe - De), ee = I * it / E * P, Z = ht * it / E * P;
      q.projectionMatrix.makePerspective(G, $, ee, Z, P, E), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
    }
    function se(q, J) {
      J === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(J.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (i === null) return;
      g.texture !== null && (q.near = g.depthNear, q.far = g.depthFar), T.near = C.near = b.near = q.near, T.far = C.far = b.far = q.far, (D !== T.near || B !== T.far) && (i.updateRenderState({
        depthNear: T.near,
        depthFar: T.far
      }), D = T.near, B = T.far, b.near = D, b.far = B, C.near = D, C.far = B, b.updateProjectionMatrix(), C.updateProjectionMatrix(), q.updateProjectionMatrix());
      const J = q.parent, pe = T.cameras;
      se(T, J);
      for (let fe = 0; fe < pe.length; fe++)
        se(pe[fe], J);
      pe.length === 2 ? W(T, b, C) : T.projectionMatrix.copy(b.projectionMatrix), ae(q, T, J);
    };
    function ae(q, J, pe) {
      pe === null ? q.matrix.copy(J.matrixWorld) : (q.matrix.copy(pe.matrixWorld), q.matrix.invert(), q.matrix.multiply(J.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy(J.projectionMatrix), q.projectionMatrixInverse.copy(J.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = Ws * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return T;
    }, this.getFoveation = function() {
      if (!(f === null && d === null))
        return l;
    }, this.setFoveation = function(q) {
      l = q, f !== null && (f.fixedFoveation = q), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(T);
    };
    let ue = null;
    function Le(q, J) {
      if (h = J.getViewerPose(c || o), _ = J, h !== null) {
        const pe = h.views;
        d !== null && (e.setRenderTargetFramebuffer(v, d.framebuffer), e.setRenderTarget(v));
        let fe = !1;
        pe.length !== T.cameras.length && (T.cameras.length = 0, fe = !0);
        for (let Oe = 0; Oe < pe.length; Oe++) {
          const ke = pe[Oe];
          let it = null;
          if (d !== null)
            it = d.getViewport(ke);
          else {
            const ht = u.getViewSubImage(f, ke);
            it = ht.viewport, Oe === 0 && (e.setRenderTargetTextures(
              v,
              ht.colorTexture,
              f.ignoreDepthValues ? void 0 : ht.depthStencilTexture
            ), e.setRenderTarget(v));
          }
          let I = S[Oe];
          I === void 0 && (I = new Wt(), I.layers.enable(Oe), I.viewport = new Qe(), S[Oe] = I), I.matrix.fromArray(ke.transform.matrix), I.matrix.decompose(I.position, I.quaternion, I.scale), I.projectionMatrix.fromArray(ke.projectionMatrix), I.projectionMatrixInverse.copy(I.projectionMatrix).invert(), I.viewport.set(it.x, it.y, it.width, it.height), Oe === 0 && (T.matrix.copy(I.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale)), fe === !0 && T.cameras.push(I);
        }
        const Ie = i.enabledFeatures;
        if (Ie && Ie.includes("depth-sensing")) {
          const Oe = u.getDepthInformation(pe[0]);
          Oe && Oe.isValid && Oe.texture && g.init(e, Oe, i.renderState);
        }
      }
      for (let pe = 0; pe < x.length; pe++) {
        const fe = y[pe], Ie = x[pe];
        fe !== null && Ie !== void 0 && Ie.update(fe, J, c || o);
      }
      ue && ue(q, J), J.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: J }), _ = null;
    }
    const Ge = new Bf();
    Ge.setAnimationLoop(Le), this.setAnimationLoop = function(q) {
      ue = q;
    }, this.dispose = function() {
    };
  }
}
const zi = /* @__PURE__ */ new Bn(), Ov = /* @__PURE__ */ new Ue();
function Fv(r, e) {
  function t(p, m) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function n(p, m) {
    m.color.getRGB(p.fogColor.value, Of(r)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function i(p, m, v, x, y) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? s(p, m) : m.isMeshToonMaterial ? (s(p, m), u(p, m)) : m.isMeshPhongMaterial ? (s(p, m), h(p, m)) : m.isMeshStandardMaterial ? (s(p, m), f(p, m), m.isMeshPhysicalMaterial && d(p, m, y)) : m.isMeshMatcapMaterial ? (s(p, m), _(p, m)) : m.isMeshDepthMaterial ? s(p, m) : m.isMeshDistanceMaterial ? (s(p, m), g(p, m)) : m.isMeshNormalMaterial ? s(p, m) : m.isLineBasicMaterial ? (o(p, m), m.isLineDashedMaterial && a(p, m)) : m.isPointsMaterial ? l(p, m, v, x) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function s(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, t(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === jt && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, t(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === jt && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, t(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, t(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const v = e.get(m), x = v.envMap, y = v.envMapRotation;
    x && (p.envMap.value = x, zi.copy(y), zi.x *= -1, zi.y *= -1, zi.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === !1 && (zi.y *= -1, zi.z *= -1), p.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(zi)), p.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap && (p.lightMap.value = m.lightMap, p.lightMapIntensity.value = m.lightMapIntensity, t(m.lightMap, p.lightMapTransform)), m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, p.aoMapTransform));
  }
  function o(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, t(m.map, p.mapTransform));
  }
  function a(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function l(p, m, v, x) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * v, p.scale.value = x * 0.5, m.map && (p.map.value = m.map, t(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function h(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function u(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function f(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, p.roughnessMapTransform)), m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function d(p, m, v) {
    p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === jt && p.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (p.dispersion.value = m.dispersion), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = v.texture, p.transmissionSamplerSize.value.set(v.width, v.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function g(p, m) {
    const v = e.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(v.matrixWorld), p.nearDistance.value = v.shadow.camera.near, p.farDistance.value = v.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Bv(r, e, t, n) {
  let i = {}, s = {}, o = [];
  const a = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(v, x) {
    const y = x.program;
    n.uniformBlockBinding(v, y);
  }
  function c(v, x) {
    let y = i[v.id];
    y === void 0 && (_(v), y = h(v), i[v.id] = y, v.addEventListener("dispose", p));
    const R = x.program;
    n.updateUBOMapping(v, R);
    const A = e.render.frame;
    s[v.id] !== A && (f(v), s[v.id] = A);
  }
  function h(v) {
    const x = u();
    v.__bindingPointIndex = x;
    const y = r.createBuffer(), R = v.__size, A = v.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, y), r.bufferData(r.UNIFORM_BUFFER, R, A), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, x, y), y;
  }
  function u() {
    for (let v = 0; v < a; v++)
      if (o.indexOf(v) === -1)
        return o.push(v), v;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(v) {
    const x = i[v.id], y = v.uniforms, R = v.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, x);
    for (let A = 0, b = y.length; A < b; A++) {
      const C = Array.isArray(y[A]) ? y[A] : [y[A]];
      for (let S = 0, T = C.length; S < T; S++) {
        const D = C[S];
        if (d(D, A, S, R) === !0) {
          const B = D.__offset, O = Array.isArray(D.value) ? D.value : [D.value];
          let X = 0;
          for (let K = 0; K < O.length; K++) {
            const H = O[K], j = g(H);
            typeof H == "number" || typeof H == "boolean" ? (D.__data[0] = H, r.bufferSubData(r.UNIFORM_BUFFER, B + X, D.__data)) : H.isMatrix3 ? (D.__data[0] = H.elements[0], D.__data[1] = H.elements[1], D.__data[2] = H.elements[2], D.__data[3] = 0, D.__data[4] = H.elements[3], D.__data[5] = H.elements[4], D.__data[6] = H.elements[5], D.__data[7] = 0, D.__data[8] = H.elements[6], D.__data[9] = H.elements[7], D.__data[10] = H.elements[8], D.__data[11] = 0) : (H.toArray(D.__data, X), X += j.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, B, D.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function d(v, x, y, R) {
    const A = v.value, b = x + "_" + y;
    if (R[b] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? R[b] = A : R[b] = A.clone(), !0;
    {
      const C = R[b];
      if (typeof A == "number" || typeof A == "boolean") {
        if (C !== A)
          return R[b] = A, !0;
      } else if (C.equals(A) === !1)
        return C.copy(A), !0;
    }
    return !1;
  }
  function _(v) {
    const x = v.uniforms;
    let y = 0;
    const R = 16;
    for (let b = 0, C = x.length; b < C; b++) {
      const S = Array.isArray(x[b]) ? x[b] : [x[b]];
      for (let T = 0, D = S.length; T < D; T++) {
        const B = S[T], O = Array.isArray(B.value) ? B.value : [B.value];
        for (let X = 0, K = O.length; X < K; X++) {
          const H = O[X], j = g(H), W = y % R, se = W % j.boundary, ae = W + se;
          y += se, ae !== 0 && R - ae < j.storage && (y += R - ae), B.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), B.__offset = y, y += j.storage;
        }
      }
    }
    const A = y % R;
    return A > 0 && (y += R - A), v.__size = y, v.__cache = {}, this;
  }
  function g(v) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof v == "number" || typeof v == "boolean" ? (x.boundary = 4, x.storage = 4) : v.isVector2 ? (x.boundary = 8, x.storage = 8) : v.isVector3 || v.isColor ? (x.boundary = 16, x.storage = 12) : v.isVector4 ? (x.boundary = 16, x.storage = 16) : v.isMatrix3 ? (x.boundary = 48, x.storage = 48) : v.isMatrix4 ? (x.boundary = 64, x.storage = 64) : v.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", v), x;
  }
  function p(v) {
    const x = v.target;
    x.removeEventListener("dispose", p);
    const y = o.indexOf(x.__bindingPointIndex);
    o.splice(y, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
  }
  function m() {
    for (const v in i)
      r.deleteBuffer(i[v]);
    o = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: m
  };
}
class kv {
  constructor(e = {}) {
    const {
      canvas: t = Pm(),
      context: n = null,
      depth: i = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = o;
    const d = new Uint32Array(4), _ = new Int32Array(4);
    let g = null, p = null;
    const m = [], v = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Tt, this.toneMapping = Ri, this.toneMappingExposure = 1;
    const x = this;
    let y = !1, R = 0, A = 0, b = null, C = -1, S = null;
    const T = new Qe(), D = new Qe();
    let B = null;
    const O = new Se(0);
    let X = 0, K = t.width, H = t.height, j = 1, W = null, se = null;
    const ae = new Qe(0, 0, K, H), ue = new Qe(0, 0, K, H);
    let Le = !1;
    const Ge = new Rc();
    let q = !1, J = !1;
    const pe = new Ue(), fe = new L(), Ie = new Qe(), Oe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ke = !1;
    function it() {
      return b === null ? j : 1;
    }
    let I = n;
    function ht(w, N) {
      return t.getContext(w, N);
    }
    try {
      const w = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${_c}`), t.addEventListener("webglcontextlost", k, !1), t.addEventListener("webglcontextrestored", Y, !1), t.addEventListener("webglcontextcreationerror", Q, !1), I === null) {
        const N = "webgl2";
        if (I = ht(N, w), I === null)
          throw ht(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (w) {
      throw console.error("THREE.WebGLRenderer: " + w.message), w;
    }
    let Xe, qe, xe, ut, Ce, De, P, E, G, $, ee, Z, Me, re, ce, Ne, ne, he, He, Ee, de, Ae, Pe, rt;
    function M() {
      Xe = new X0(I), Xe.init(), Ae = new Cv(I, Xe), qe = new k0(I, Xe, e, Ae), xe = new Av(I), ut = new K0(I), Ce = new fv(), De = new Rv(I, Xe, xe, Ce, qe, Ae, ut), P = new H0(x), E = new W0(x), G = new tg(I), Pe = new F0(I, G), $ = new Y0(I, G, ut, Pe), ee = new Z0(I, $, G, ut), He = new j0(I, qe, De), Ne = new z0(Ce), Z = new uv(x, P, E, Xe, qe, Pe, Ne), Me = new Fv(x, Ce), re = new pv(), ce = new yv(Xe), he = new O0(x, P, E, xe, ee, f, l), ne = new bv(x, ee, qe), rt = new Bv(I, ut, qe, xe), Ee = new B0(I, Xe, ut), de = new q0(I, Xe, ut), ut.programs = Z.programs, x.capabilities = qe, x.extensions = Xe, x.properties = Ce, x.renderLists = re, x.shadowMap = ne, x.state = xe, x.info = ut;
    }
    M();
    const F = new Uv(x, I);
    this.xr = F, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const w = Xe.get("WEBGL_lose_context");
      w && w.loseContext();
    }, this.forceContextRestore = function() {
      const w = Xe.get("WEBGL_lose_context");
      w && w.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(w) {
      w !== void 0 && (j = w, this.setSize(K, H, !1));
    }, this.getSize = function(w) {
      return w.set(K, H);
    }, this.setSize = function(w, N, z = !0) {
      if (F.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      K = w, H = N, t.width = Math.floor(w * j), t.height = Math.floor(N * j), z === !0 && (t.style.width = w + "px", t.style.height = N + "px"), this.setViewport(0, 0, w, N);
    }, this.getDrawingBufferSize = function(w) {
      return w.set(K * j, H * j).floor();
    }, this.setDrawingBufferSize = function(w, N, z) {
      K = w, H = N, j = z, t.width = Math.floor(w * z), t.height = Math.floor(N * z), this.setViewport(0, 0, w, N);
    }, this.getCurrentViewport = function(w) {
      return w.copy(T);
    }, this.getViewport = function(w) {
      return w.copy(ae);
    }, this.setViewport = function(w, N, z, V) {
      w.isVector4 ? ae.set(w.x, w.y, w.z, w.w) : ae.set(w, N, z, V), xe.viewport(T.copy(ae).multiplyScalar(j).round());
    }, this.getScissor = function(w) {
      return w.copy(ue);
    }, this.setScissor = function(w, N, z, V) {
      w.isVector4 ? ue.set(w.x, w.y, w.z, w.w) : ue.set(w, N, z, V), xe.scissor(D.copy(ue).multiplyScalar(j).round());
    }, this.getScissorTest = function() {
      return Le;
    }, this.setScissorTest = function(w) {
      xe.setScissorTest(Le = w);
    }, this.setOpaqueSort = function(w) {
      W = w;
    }, this.setTransparentSort = function(w) {
      se = w;
    }, this.getClearColor = function(w) {
      return w.copy(he.getClearColor());
    }, this.setClearColor = function() {
      he.setClearColor.apply(he, arguments);
    }, this.getClearAlpha = function() {
      return he.getClearAlpha();
    }, this.setClearAlpha = function() {
      he.setClearAlpha.apply(he, arguments);
    }, this.clear = function(w = !0, N = !0, z = !0) {
      let V = 0;
      if (w) {
        let U = !1;
        if (b !== null) {
          const ie = b.texture.format;
          U = ie === Ec || ie === Tc || ie === Sc;
        }
        if (U) {
          const ie = b.texture.type, le = ie === ai || ie === Qi || ie === Pr || ie === Vs || ie === vc || ie === yc, ge = he.getClearColor(), _e = he.getClearAlpha(), be = ge.r, Re = ge.g, Te = ge.b;
          le ? (d[0] = be, d[1] = Re, d[2] = Te, d[3] = _e, I.clearBufferuiv(I.COLOR, 0, d)) : (_[0] = be, _[1] = Re, _[2] = Te, _[3] = _e, I.clearBufferiv(I.COLOR, 0, _));
        } else
          V |= I.COLOR_BUFFER_BIT;
      }
      N && (V |= I.DEPTH_BUFFER_BIT), z && (V |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I.clear(V);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", k, !1), t.removeEventListener("webglcontextrestored", Y, !1), t.removeEventListener("webglcontextcreationerror", Q, !1), re.dispose(), ce.dispose(), Ce.dispose(), P.dispose(), E.dispose(), ee.dispose(), Pe.dispose(), rt.dispose(), Z.dispose(), F.dispose(), F.removeEventListener("sessionstart", _t), F.removeEventListener("sessionend", fi), Nt.stop();
    };
    function k(w) {
      w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function Y() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const w = ut.autoReset, N = ne.enabled, z = ne.autoUpdate, V = ne.needsUpdate, U = ne.type;
      M(), ut.autoReset = w, ne.enabled = N, ne.autoUpdate = z, ne.needsUpdate = V, ne.type = U;
    }
    function Q(w) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage);
    }
    function ve(w) {
      const N = w.target;
      N.removeEventListener("dispose", ve), we(N);
    }
    function we(w) {
      mt(w), Ce.remove(w);
    }
    function mt(w) {
      const N = Ce.get(w).programs;
      N !== void 0 && (N.forEach(function(z) {
        Z.releaseProgram(z);
      }), w.isShaderMaterial && Z.releaseShaderCache(w));
    }
    this.renderBufferDirect = function(w, N, z, V, U, ie) {
      N === null && (N = Oe);
      const le = U.isMesh && U.matrixWorld.determinant() < 0, ge = fp(w, N, z, V, U);
      xe.setMaterial(V, le);
      let _e = z.index, be = 1;
      if (V.wireframe === !0) {
        if (_e = $.getWireframeAttribute(z), _e === void 0) return;
        be = 2;
      }
      const Re = z.drawRange, Te = z.attributes.position;
      let Ke = Re.start * be, ft = (Re.start + Re.count) * be;
      ie !== null && (Ke = Math.max(Ke, ie.start * be), ft = Math.min(ft, (ie.start + ie.count) * be)), _e !== null ? (Ke = Math.max(Ke, 0), ft = Math.min(ft, _e.count)) : Te != null && (Ke = Math.max(Ke, 0), ft = Math.min(ft, Te.count));
      const dt = ft - Ke;
      if (dt < 0 || dt === 1 / 0) return;
      Pe.setup(U, V, ge, z, _e);
      let tn, je = Ee;
      if (_e !== null && (tn = G.get(_e), je = de, je.setIndex(tn)), U.isMesh)
        V.wireframe === !0 ? (xe.setLineWidth(V.wireframeLinewidth * it()), je.setMode(I.LINES)) : je.setMode(I.TRIANGLES);
      else if (U.isLine) {
        let ye = V.linewidth;
        ye === void 0 && (ye = 1), xe.setLineWidth(ye * it()), U.isLineSegments ? je.setMode(I.LINES) : U.isLineLoop ? je.setMode(I.LINE_LOOP) : je.setMode(I.LINE_STRIP);
      } else U.isPoints ? je.setMode(I.POINTS) : U.isSprite && je.setMode(I.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          je.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (Xe.get("WEBGL_multi_draw"))
          je.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const ye = U._multiDrawStarts, Ut = U._multiDrawCounts, Ze = U._multiDrawCount, Mn = _e ? G.get(_e).bytesPerElement : 1, rs = Ce.get(V).currentProgram.getUniforms();
          for (let nn = 0; nn < Ze; nn++)
            rs.setValue(I, "_gl_DrawID", nn), je.render(ye[nn] / Mn, Ut[nn]);
        }
      else if (U.isInstancedMesh)
        je.renderInstances(Ke, dt, U.count);
      else if (z.isInstancedBufferGeometry) {
        const ye = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, Ut = Math.min(z.instanceCount, ye);
        je.renderInstances(Ke, dt, Ut);
      } else
        je.render(Ke, dt);
    };
    function Mt(w, N, z) {
      w.transparent === !0 && w.side === Ln && w.forceSinglePass === !1 ? (w.side = jt, w.needsUpdate = !0, $r(w, N, z), w.side = oi, w.needsUpdate = !0, $r(w, N, z), w.side = Ln) : $r(w, N, z);
    }
    this.compile = function(w, N, z = null) {
      z === null && (z = w), p = ce.get(z), p.init(N), v.push(p), z.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), w !== z && w.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), p.setupLights();
      const V = /* @__PURE__ */ new Set();
      return w.traverse(function(U) {
        const ie = U.material;
        if (ie)
          if (Array.isArray(ie))
            for (let le = 0; le < ie.length; le++) {
              const ge = ie[le];
              Mt(ge, z, U), V.add(ge);
            }
          else
            Mt(ie, z, U), V.add(ie);
      }), v.pop(), p = null, V;
    }, this.compileAsync = function(w, N, z = null) {
      const V = this.compile(w, N, z);
      return new Promise((U) => {
        function ie() {
          if (V.forEach(function(le) {
            Ce.get(le).currentProgram.isReady() && V.delete(le);
          }), V.size === 0) {
            U(w);
            return;
          }
          setTimeout(ie, 10);
        }
        Xe.get("KHR_parallel_shader_compile") !== null ? ie() : setTimeout(ie, 10);
      });
    };
    let We = null;
    function St(w) {
      We && We(w);
    }
    function _t() {
      Nt.stop();
    }
    function fi() {
      Nt.start();
    }
    const Nt = new Bf();
    Nt.setAnimationLoop(St), typeof self < "u" && Nt.setContext(self), this.setAnimationLoop = function(w) {
      We = w, F.setAnimationLoop(w), w === null ? Nt.stop() : Nt.start();
    }, F.addEventListener("sessionstart", _t), F.addEventListener("sessionend", fi), this.render = function(w, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0) return;
      if (w.matrixWorldAutoUpdate === !0 && w.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), F.enabled === !0 && F.isPresenting === !0 && (F.cameraAutoUpdate === !0 && F.updateCamera(N), N = F.getCamera()), w.isScene === !0 && w.onBeforeRender(x, w, N, b), p = ce.get(w, v.length), p.init(N), v.push(p), pe.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), Ge.setFromProjectionMatrix(pe), J = this.localClippingEnabled, q = Ne.init(this.clippingPlanes, J), g = re.get(w, m.length), g.init(), m.push(g), F.enabled === !0 && F.isPresenting === !0) {
        const ie = x.xr.getDepthSensingMesh();
        ie !== null && Wn(ie, N, -1 / 0, x.sortObjects);
      }
      Wn(w, N, 0, x.sortObjects), g.finish(), x.sortObjects === !0 && g.sort(W, se), ke = F.enabled === !1 || F.isPresenting === !1 || F.hasDepthSensing() === !1, ke && he.addToRenderList(g, w), this.info.render.frame++, q === !0 && Ne.beginShadows();
      const z = p.state.shadowsArray;
      ne.render(z, w, N), q === !0 && Ne.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const V = g.opaque, U = g.transmissive;
      if (p.setupLights(), N.isArrayCamera) {
        const ie = N.cameras;
        if (U.length > 0)
          for (let le = 0, ge = ie.length; le < ge; le++) {
            const _e = ie[le];
            or(V, U, w, _e);
          }
        ke && he.render(w);
        for (let le = 0, ge = ie.length; le < ge; le++) {
          const _e = ie[le];
          Ni(g, w, _e, _e.viewport);
        }
      } else
        U.length > 0 && or(V, U, w, N), ke && he.render(w), Ni(g, w, N);
      b !== null && (De.updateMultisampleRenderTarget(b), De.updateRenderTargetMipmap(b)), w.isScene === !0 && w.onAfterRender(x, w, N), Pe.resetDefaultState(), C = -1, S = null, v.pop(), v.length > 0 ? (p = v[v.length - 1], q === !0 && Ne.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, m.pop(), m.length > 0 ? g = m[m.length - 1] : g = null;
    };
    function Wn(w, N, z, V) {
      if (w.visible === !1) return;
      if (w.layers.test(N.layers)) {
        if (w.isGroup)
          z = w.renderOrder;
        else if (w.isLOD)
          w.autoUpdate === !0 && w.update(N);
        else if (w.isLight)
          p.pushLight(w), w.castShadow && p.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || Ge.intersectsSprite(w)) {
            V && Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);
            const le = ee.update(w), ge = w.material;
            ge.visible && g.push(w, le, ge, z, Ie.z, null);
          }
        } else if ((w.isMesh || w.isLine || w.isPoints) && (!w.frustumCulled || Ge.intersectsObject(w))) {
          const le = ee.update(w), ge = w.material;
          if (V && (w.boundingSphere !== void 0 ? (w.boundingSphere === null && w.computeBoundingSphere(), Ie.copy(w.boundingSphere.center)) : (le.boundingSphere === null && le.computeBoundingSphere(), Ie.copy(le.boundingSphere.center)), Ie.applyMatrix4(w.matrixWorld).applyMatrix4(pe)), Array.isArray(ge)) {
            const _e = le.groups;
            for (let be = 0, Re = _e.length; be < Re; be++) {
              const Te = _e[be], Ke = ge[Te.materialIndex];
              Ke && Ke.visible && g.push(w, le, Ke, z, Ie.z, Te);
            }
          } else ge.visible && g.push(w, le, ge, z, Ie.z, null);
        }
      }
      const ie = w.children;
      for (let le = 0, ge = ie.length; le < ge; le++)
        Wn(ie[le], N, z, V);
    }
    function Ni(w, N, z, V) {
      const U = w.opaque, ie = w.transmissive, le = w.transparent;
      p.setupLightsView(z), q === !0 && Ne.setGlobalState(x.clippingPlanes, z), V && xe.viewport(T.copy(V)), U.length > 0 && Zr(U, N, z), ie.length > 0 && Zr(ie, N, z), le.length > 0 && Zr(le, N, z), xe.buffers.depth.setTest(!0), xe.buffers.depth.setMask(!0), xe.buffers.color.setMask(!0), xe.setPolygonOffset(!1);
    }
    function or(w, N, z, V) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[V.id] === void 0 && (p.state.transmissionRenderTarget[V.id] = new Rn(1, 1, {
        generateMipmaps: !0,
        type: Xe.has("EXT_color_buffer_half_float") || Xe.has("EXT_color_buffer_float") ? ri : ai,
        minFilter: ti,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Ye.workingColorSpace
      }));
      const ie = p.state.transmissionRenderTarget[V.id], le = V.viewport || T;
      ie.setSize(le.z, le.w);
      const ge = x.getRenderTarget();
      x.setRenderTarget(ie), x.getClearColor(O), X = x.getClearAlpha(), X < 1 && x.setClearColor(16777215, 0.5), x.clear(), ke && he.render(z);
      const _e = x.toneMapping;
      x.toneMapping = Ri;
      const be = V.viewport;
      if (V.viewport !== void 0 && (V.viewport = void 0), p.setupLightsView(V), q === !0 && Ne.setGlobalState(x.clippingPlanes, V), Zr(w, z, V), De.updateMultisampleRenderTarget(ie), De.updateRenderTargetMipmap(ie), Xe.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Re = !1;
        for (let Te = 0, Ke = N.length; Te < Ke; Te++) {
          const ft = N[Te], dt = ft.object, tn = ft.geometry, je = ft.material, ye = ft.group;
          if (je.side === Ln && dt.layers.test(V.layers)) {
            const Ut = je.side;
            je.side = jt, je.needsUpdate = !0, ah(dt, z, V, tn, je, ye), je.side = Ut, je.needsUpdate = !0, Re = !0;
          }
        }
        Re === !0 && (De.updateMultisampleRenderTarget(ie), De.updateRenderTargetMipmap(ie));
      }
      x.setRenderTarget(ge), x.setClearColor(O, X), be !== void 0 && (V.viewport = be), x.toneMapping = _e;
    }
    function Zr(w, N, z) {
      const V = N.isScene === !0 ? N.overrideMaterial : null;
      for (let U = 0, ie = w.length; U < ie; U++) {
        const le = w[U], ge = le.object, _e = le.geometry, be = V === null ? le.material : V, Re = le.group;
        ge.layers.test(z.layers) && ah(ge, N, z, _e, be, Re);
      }
    }
    function ah(w, N, z, V, U, ie) {
      w.onBeforeRender(x, N, z, V, U, ie), w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), U.transparent === !0 && U.side === Ln && U.forceSinglePass === !1 ? (U.side = jt, U.needsUpdate = !0, x.renderBufferDirect(z, N, V, U, w, ie), U.side = oi, U.needsUpdate = !0, x.renderBufferDirect(z, N, V, U, w, ie), U.side = Ln) : x.renderBufferDirect(z, N, V, U, w, ie), w.onAfterRender(x, N, z, V, U, ie);
    }
    function $r(w, N, z) {
      N.isScene !== !0 && (N = Oe);
      const V = Ce.get(w), U = p.state.lights, ie = p.state.shadowsArray, le = U.state.version, ge = Z.getParameters(w, U.state, ie, N, z), _e = Z.getProgramCacheKey(ge);
      let be = V.programs;
      V.environment = w.isMeshStandardMaterial ? N.environment : null, V.fog = N.fog, V.envMap = (w.isMeshStandardMaterial ? E : P).get(w.envMap || V.environment), V.envMapRotation = V.environment !== null && w.envMap === null ? N.environmentRotation : w.envMapRotation, be === void 0 && (w.addEventListener("dispose", ve), be = /* @__PURE__ */ new Map(), V.programs = be);
      let Re = be.get(_e);
      if (Re !== void 0) {
        if (V.currentProgram === Re && V.lightsStateVersion === le)
          return ch(w, ge), Re;
      } else
        ge.uniforms = Z.getUniforms(w), w.onBeforeCompile(ge, x), Re = Z.acquireProgram(ge, _e), be.set(_e, Re), V.uniforms = ge.uniforms;
      const Te = V.uniforms;
      return (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (Te.clippingPlanes = Ne.uniform), ch(w, ge), V.needsLights = pp(w), V.lightsStateVersion = le, V.needsLights && (Te.ambientLightColor.value = U.state.ambient, Te.lightProbe.value = U.state.probe, Te.directionalLights.value = U.state.directional, Te.directionalLightShadows.value = U.state.directionalShadow, Te.spotLights.value = U.state.spot, Te.spotLightShadows.value = U.state.spotShadow, Te.rectAreaLights.value = U.state.rectArea, Te.ltc_1.value = U.state.rectAreaLTC1, Te.ltc_2.value = U.state.rectAreaLTC2, Te.pointLights.value = U.state.point, Te.pointLightShadows.value = U.state.pointShadow, Te.hemisphereLights.value = U.state.hemi, Te.directionalShadowMap.value = U.state.directionalShadowMap, Te.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Te.spotShadowMap.value = U.state.spotShadowMap, Te.spotLightMatrix.value = U.state.spotLightMatrix, Te.spotLightMap.value = U.state.spotLightMap, Te.pointShadowMap.value = U.state.pointShadowMap, Te.pointShadowMatrix.value = U.state.pointShadowMatrix), V.currentProgram = Re, V.uniformsList = null, Re;
    }
    function lh(w) {
      if (w.uniformsList === null) {
        const N = w.currentProgram.getUniforms();
        w.uniformsList = Bo.seqWithValue(N.seq, w.uniforms);
      }
      return w.uniformsList;
    }
    function ch(w, N) {
      const z = Ce.get(w);
      z.outputColorSpace = N.outputColorSpace, z.batching = N.batching, z.batchingColor = N.batchingColor, z.instancing = N.instancing, z.instancingColor = N.instancingColor, z.instancingMorph = N.instancingMorph, z.skinning = N.skinning, z.morphTargets = N.morphTargets, z.morphNormals = N.morphNormals, z.morphColors = N.morphColors, z.morphTargetsCount = N.morphTargetsCount, z.numClippingPlanes = N.numClippingPlanes, z.numIntersection = N.numClipIntersection, z.vertexAlphas = N.vertexAlphas, z.vertexTangents = N.vertexTangents, z.toneMapping = N.toneMapping;
    }
    function fp(w, N, z, V, U) {
      N.isScene !== !0 && (N = Oe), De.resetTextureUnits();
      const ie = N.fog, le = V.isMeshStandardMaterial ? N.environment : null, ge = b === null ? x.outputColorSpace : b.isXRRenderTarget === !0 ? b.texture.colorSpace : Dt, _e = (V.isMeshStandardMaterial ? E : P).get(V.envMap || le), be = V.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, Re = !!z.attributes.tangent && (!!V.normalMap || V.anisotropy > 0), Te = !!z.morphAttributes.position, Ke = !!z.morphAttributes.normal, ft = !!z.morphAttributes.color;
      let dt = Ri;
      V.toneMapped && (b === null || b.isXRRenderTarget === !0) && (dt = x.toneMapping);
      const tn = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, je = tn !== void 0 ? tn.length : 0, ye = Ce.get(V), Ut = p.state.lights;
      if (q === !0 && (J === !0 || w !== S)) {
        const fn = w === S && V.id === C;
        Ne.setState(V, w, fn);
      }
      let Ze = !1;
      V.version === ye.__version ? (ye.needsLights && ye.lightsStateVersion !== Ut.state.version || ye.outputColorSpace !== ge || U.isBatchedMesh && ye.batching === !1 || !U.isBatchedMesh && ye.batching === !0 || U.isBatchedMesh && ye.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && ye.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && ye.instancing === !1 || !U.isInstancedMesh && ye.instancing === !0 || U.isSkinnedMesh && ye.skinning === !1 || !U.isSkinnedMesh && ye.skinning === !0 || U.isInstancedMesh && ye.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && ye.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && ye.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && ye.instancingMorph === !1 && U.morphTexture !== null || ye.envMap !== _e || V.fog === !0 && ye.fog !== ie || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== Ne.numPlanes || ye.numIntersection !== Ne.numIntersection) || ye.vertexAlphas !== be || ye.vertexTangents !== Re || ye.morphTargets !== Te || ye.morphNormals !== Ke || ye.morphColors !== ft || ye.toneMapping !== dt || ye.morphTargetsCount !== je) && (Ze = !0) : (Ze = !0, ye.__version = V.version);
      let Mn = ye.currentProgram;
      Ze === !0 && (Mn = $r(V, N, U));
      let rs = !1, nn = !1, ma = !1;
      const xt = Mn.getUniforms(), di = ye.uniforms;
      if (xe.useProgram(Mn.program) && (rs = !0, nn = !0, ma = !0), V.id !== C && (C = V.id, nn = !0), rs || S !== w) {
        xt.setValue(I, "projectionMatrix", w.projectionMatrix), xt.setValue(I, "viewMatrix", w.matrixWorldInverse);
        const fn = xt.map.cameraPosition;
        fn !== void 0 && fn.setValue(I, fe.setFromMatrixPosition(w.matrixWorld)), qe.logarithmicDepthBuffer && xt.setValue(
          I,
          "logDepthBufFC",
          2 / (Math.log(w.far + 1) / Math.LN2)
        ), (V.isMeshPhongMaterial || V.isMeshToonMaterial || V.isMeshLambertMaterial || V.isMeshBasicMaterial || V.isMeshStandardMaterial || V.isShaderMaterial) && xt.setValue(I, "isOrthographic", w.isOrthographicCamera === !0), S !== w && (S = w, nn = !0, ma = !0);
      }
      if (U.isSkinnedMesh) {
        xt.setOptional(I, U, "bindMatrix"), xt.setOptional(I, U, "bindMatrixInverse");
        const fn = U.skeleton;
        fn && (fn.boneTexture === null && fn.computeBoneTexture(), xt.setValue(I, "boneTexture", fn.boneTexture, De));
      }
      U.isBatchedMesh && (xt.setOptional(I, U, "batchingTexture"), xt.setValue(I, "batchingTexture", U._matricesTexture, De), xt.setOptional(I, U, "batchingIdTexture"), xt.setValue(I, "batchingIdTexture", U._indirectTexture, De), xt.setOptional(I, U, "batchingColorTexture"), U._colorsTexture !== null && xt.setValue(I, "batchingColorTexture", U._colorsTexture, De));
      const ga = z.morphAttributes;
      if ((ga.position !== void 0 || ga.normal !== void 0 || ga.color !== void 0) && He.update(U, z, Mn), (nn || ye.receiveShadow !== U.receiveShadow) && (ye.receiveShadow = U.receiveShadow, xt.setValue(I, "receiveShadow", U.receiveShadow)), V.isMeshGouraudMaterial && V.envMap !== null && (di.envMap.value = _e, di.flipEnvMap.value = _e.isCubeTexture && _e.isRenderTargetTexture === !1 ? -1 : 1), V.isMeshStandardMaterial && V.envMap === null && N.environment !== null && (di.envMapIntensity.value = N.environmentIntensity), nn && (xt.setValue(I, "toneMappingExposure", x.toneMappingExposure), ye.needsLights && dp(di, ma), ie && V.fog === !0 && Me.refreshFogUniforms(di, ie), Me.refreshMaterialUniforms(di, V, j, H, p.state.transmissionRenderTarget[w.id]), Bo.upload(I, lh(ye), di, De)), V.isShaderMaterial && V.uniformsNeedUpdate === !0 && (Bo.upload(I, lh(ye), di, De), V.uniformsNeedUpdate = !1), V.isSpriteMaterial && xt.setValue(I, "center", U.center), xt.setValue(I, "modelViewMatrix", U.modelViewMatrix), xt.setValue(I, "normalMatrix", U.normalMatrix), xt.setValue(I, "modelMatrix", U.matrixWorld), V.isShaderMaterial || V.isRawShaderMaterial) {
        const fn = V.uniformsGroups;
        for (let _a = 0, mp = fn.length; _a < mp; _a++) {
          const hh = fn[_a];
          rt.update(hh, Mn), rt.bind(hh, Mn);
        }
      }
      return Mn;
    }
    function dp(w, N) {
      w.ambientLightColor.needsUpdate = N, w.lightProbe.needsUpdate = N, w.directionalLights.needsUpdate = N, w.directionalLightShadows.needsUpdate = N, w.pointLights.needsUpdate = N, w.pointLightShadows.needsUpdate = N, w.spotLights.needsUpdate = N, w.spotLightShadows.needsUpdate = N, w.rectAreaLights.needsUpdate = N, w.hemisphereLights.needsUpdate = N;
    }
    function pp(w) {
      return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return b;
    }, this.setRenderTargetTextures = function(w, N, z) {
      Ce.get(w.texture).__webglTexture = N, Ce.get(w.depthTexture).__webglTexture = z;
      const V = Ce.get(w);
      V.__hasExternalTextures = !0, V.__autoAllocateDepthBuffer = z === void 0, V.__autoAllocateDepthBuffer || Xe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), V.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(w, N) {
      const z = Ce.get(w);
      z.__webglFramebuffer = N, z.__useDefaultFramebuffer = N === void 0;
    }, this.setRenderTarget = function(w, N = 0, z = 0) {
      b = w, R = N, A = z;
      let V = !0, U = null, ie = !1, le = !1;
      if (w) {
        const _e = Ce.get(w);
        _e.__useDefaultFramebuffer !== void 0 ? (xe.bindFramebuffer(I.FRAMEBUFFER, null), V = !1) : _e.__webglFramebuffer === void 0 ? De.setupRenderTarget(w) : _e.__hasExternalTextures && De.rebindTextures(w, Ce.get(w.texture).__webglTexture, Ce.get(w.depthTexture).__webglTexture);
        const be = w.texture;
        (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (le = !0);
        const Re = Ce.get(w).__webglFramebuffer;
        w.isWebGLCubeRenderTarget ? (Array.isArray(Re[N]) ? U = Re[N][z] : U = Re[N], ie = !0) : w.samples > 0 && De.useMultisampledRTT(w) === !1 ? U = Ce.get(w).__webglMultisampledFramebuffer : Array.isArray(Re) ? U = Re[z] : U = Re, T.copy(w.viewport), D.copy(w.scissor), B = w.scissorTest;
      } else
        T.copy(ae).multiplyScalar(j).floor(), D.copy(ue).multiplyScalar(j).floor(), B = Le;
      if (xe.bindFramebuffer(I.FRAMEBUFFER, U) && V && xe.drawBuffers(w, U), xe.viewport(T), xe.scissor(D), xe.setScissorTest(B), ie) {
        const _e = Ce.get(w.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + N, _e.__webglTexture, z);
      } else if (le) {
        const _e = Ce.get(w.texture), be = N || 0;
        I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, _e.__webglTexture, z || 0, be);
      }
      C = -1;
    }, this.readRenderTargetPixels = function(w, N, z, V, U, ie, le) {
      if (!(w && w.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ge = Ce.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && le !== void 0 && (ge = ge[le]), ge) {
        xe.bindFramebuffer(I.FRAMEBUFFER, ge);
        try {
          const _e = w.texture, be = _e.format, Re = _e.type;
          if (!qe.textureFormatReadable(be)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!qe.textureTypeReadable(Re)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= w.width - V && z >= 0 && z <= w.height - U && I.readPixels(N, z, V, U, Ae.convert(be), Ae.convert(Re), ie);
        } finally {
          const _e = b !== null ? Ce.get(b).__webglFramebuffer : null;
          xe.bindFramebuffer(I.FRAMEBUFFER, _e);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(w, N, z, V, U, ie, le) {
      if (!(w && w.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ge = Ce.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && le !== void 0 && (ge = ge[le]), ge) {
        xe.bindFramebuffer(I.FRAMEBUFFER, ge);
        try {
          const _e = w.texture, be = _e.format, Re = _e.type;
          if (!qe.textureFormatReadable(be))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!qe.textureTypeReadable(Re))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          if (N >= 0 && N <= w.width - V && z >= 0 && z <= w.height - U) {
            const Te = I.createBuffer();
            I.bindBuffer(I.PIXEL_PACK_BUFFER, Te), I.bufferData(I.PIXEL_PACK_BUFFER, ie.byteLength, I.STREAM_READ), I.readPixels(N, z, V, U, Ae.convert(be), Ae.convert(Re), 0), I.flush();
            const Ke = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
            await Lm(I, Ke, 4);
            try {
              I.bindBuffer(I.PIXEL_PACK_BUFFER, Te), I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, ie);
            } finally {
              I.deleteBuffer(Te), I.deleteSync(Ke);
            }
            return ie;
          }
        } finally {
          const _e = b !== null ? Ce.get(b).__webglFramebuffer : null;
          xe.bindFramebuffer(I.FRAMEBUFFER, _e);
        }
      }
    }, this.copyFramebufferToTexture = function(w, N = null, z = 0) {
      w.isTexture !== !0 && (Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."), N = arguments[0] || null, w = arguments[1]);
      const V = Math.pow(2, -z), U = Math.floor(w.image.width * V), ie = Math.floor(w.image.height * V), le = N !== null ? N.x : 0, ge = N !== null ? N.y : 0;
      De.setTexture2D(w, 0), I.copyTexSubImage2D(I.TEXTURE_2D, z, 0, 0, le, ge, U, ie), xe.unbindTexture();
    }, this.copyTextureToTexture = function(w, N, z = null, V = null, U = 0) {
      w.isTexture !== !0 && (Is("WebGLRenderer: copyTextureToTexture function signature has changed."), V = arguments[0] || null, w = arguments[1], N = arguments[2], U = arguments[3] || 0, z = null);
      let ie, le, ge, _e, be, Re;
      z !== null ? (ie = z.max.x - z.min.x, le = z.max.y - z.min.y, ge = z.min.x, _e = z.min.y) : (ie = w.image.width, le = w.image.height, ge = 0, _e = 0), V !== null ? (be = V.x, Re = V.y) : (be = 0, Re = 0);
      const Te = Ae.convert(N.format), Ke = Ae.convert(N.type);
      De.setTexture2D(N, 0), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
      const ft = I.getParameter(I.UNPACK_ROW_LENGTH), dt = I.getParameter(I.UNPACK_IMAGE_HEIGHT), tn = I.getParameter(I.UNPACK_SKIP_PIXELS), je = I.getParameter(I.UNPACK_SKIP_ROWS), ye = I.getParameter(I.UNPACK_SKIP_IMAGES), Ut = w.isCompressedTexture ? w.mipmaps[U] : w.image;
      I.pixelStorei(I.UNPACK_ROW_LENGTH, Ut.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ut.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, ge), I.pixelStorei(I.UNPACK_SKIP_ROWS, _e), w.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, U, be, Re, ie, le, Te, Ke, Ut.data) : w.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, U, be, Re, Ut.width, Ut.height, Te, Ut.data) : I.texSubImage2D(I.TEXTURE_2D, U, be, Re, ie, le, Te, Ke, Ut), I.pixelStorei(I.UNPACK_ROW_LENGTH, ft), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, dt), I.pixelStorei(I.UNPACK_SKIP_PIXELS, tn), I.pixelStorei(I.UNPACK_SKIP_ROWS, je), I.pixelStorei(I.UNPACK_SKIP_IMAGES, ye), U === 0 && N.generateMipmaps && I.generateMipmap(I.TEXTURE_2D), xe.unbindTexture();
    }, this.copyTextureToTexture3D = function(w, N, z = null, V = null, U = 0) {
      w.isTexture !== !0 && (Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."), z = arguments[0] || null, V = arguments[1] || null, w = arguments[2], N = arguments[3], U = arguments[4] || 0);
      let ie, le, ge, _e, be, Re, Te, Ke, ft;
      const dt = w.isCompressedTexture ? w.mipmaps[U] : w.image;
      z !== null ? (ie = z.max.x - z.min.x, le = z.max.y - z.min.y, ge = z.max.z - z.min.z, _e = z.min.x, be = z.min.y, Re = z.min.z) : (ie = dt.width, le = dt.height, ge = dt.depth, _e = 0, be = 0, Re = 0), V !== null ? (Te = V.x, Ke = V.y, ft = V.z) : (Te = 0, Ke = 0, ft = 0);
      const tn = Ae.convert(N.format), je = Ae.convert(N.type);
      let ye;
      if (N.isData3DTexture)
        De.setTexture3D(N, 0), ye = I.TEXTURE_3D;
      else if (N.isDataArrayTexture || N.isCompressedArrayTexture)
        De.setTexture2DArray(N, 0), ye = I.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
      const Ut = I.getParameter(I.UNPACK_ROW_LENGTH), Ze = I.getParameter(I.UNPACK_IMAGE_HEIGHT), Mn = I.getParameter(I.UNPACK_SKIP_PIXELS), rs = I.getParameter(I.UNPACK_SKIP_ROWS), nn = I.getParameter(I.UNPACK_SKIP_IMAGES);
      I.pixelStorei(I.UNPACK_ROW_LENGTH, dt.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, dt.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, _e), I.pixelStorei(I.UNPACK_SKIP_ROWS, be), I.pixelStorei(I.UNPACK_SKIP_IMAGES, Re), w.isDataTexture || w.isData3DTexture ? I.texSubImage3D(ye, U, Te, Ke, ft, ie, le, ge, tn, je, dt.data) : N.isCompressedArrayTexture ? I.compressedTexSubImage3D(ye, U, Te, Ke, ft, ie, le, ge, tn, dt.data) : I.texSubImage3D(ye, U, Te, Ke, ft, ie, le, ge, tn, je, dt), I.pixelStorei(I.UNPACK_ROW_LENGTH, Ut), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ze), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Mn), I.pixelStorei(I.UNPACK_SKIP_ROWS, rs), I.pixelStorei(I.UNPACK_SKIP_IMAGES, nn), U === 0 && N.generateMipmaps && I.generateMipmap(ye), xe.unbindTexture();
    }, this.initRenderTarget = function(w) {
      Ce.get(w).__webglFramebuffer === void 0 && De.setupRenderTarget(w);
    }, this.initTexture = function(w) {
      w.isCubeTexture ? De.setTextureCube(w, 0) : w.isData3DTexture ? De.setTexture3D(w, 0) : w.isDataArrayTexture || w.isCompressedArrayTexture ? De.setTexture2DArray(w, 0) : De.setTexture2D(w, 0), xe.unbindTexture();
    }, this.resetState = function() {
      R = 0, A = 0, b = null, xe.reset(), Pe.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return ni;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === bc ? "display-p3" : "srgb", t.unpackColorSpace = Ye.workingColorSpace === ra ? "display-p3" : "srgb";
  }
}
class zv extends tt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Bn(), this.environmentIntensity = 1, this.environmentRotation = new Bn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Hv {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Xl, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = vn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return Is("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = vn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Vt = /* @__PURE__ */ new L();
class Pc {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Vt.fromBufferAttribute(this, t), Vt.applyMatrix4(e), this.setXYZ(t, Vt.x, Vt.y, Vt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Vt.fromBufferAttribute(this, t), Vt.applyNormalMatrix(e), this.setXYZ(t, Vt.x, Vt.y, Vt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Vt.fromBufferAttribute(this, t), Vt.transformDirection(e), this.setXYZ(t, Vt.x, Vt.y, Vt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = bn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = $e(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array), s = $e(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new Pt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Pc(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const hu = /* @__PURE__ */ new L(), uu = /* @__PURE__ */ new Qe(), fu = /* @__PURE__ */ new Qe(), Vv = /* @__PURE__ */ new L(), du = /* @__PURE__ */ new Ue(), yo = /* @__PURE__ */ new L(), Wa = /* @__PURE__ */ new zn(), pu = /* @__PURE__ */ new Ue(), Xa = /* @__PURE__ */ new tr();
class Gv extends kt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = ph, this.bindMatrix = new Ue(), this.bindMatrixInverse = new Ue(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new hi()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, yo), this.boundingBox.expandByPoint(yo);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new zn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, yo), this.boundingSphere.expandByPoint(yo);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Wa.copy(this.boundingSphere), Wa.applyMatrix4(i), e.ray.intersectsSphere(Wa) !== !1 && (pu.copy(i).invert(), Xa.copy(e.ray).applyMatrix4(pu), !(this.boundingBox !== null && Xa.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Xa)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Qe(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === ph ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === tm ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    uu.fromBufferAttribute(i.attributes.skinIndex, e), fu.fromBufferAttribute(i.attributes.skinWeight, e), hu.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const o = fu.getComponent(s);
      if (o !== 0) {
        const a = uu.getComponent(s);
        du.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Vv.copy(hu).applyMatrix4(du), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Wf extends tt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Xf extends Ct {
  constructor(e = null, t = 1, n = 1, i, s, o, a, l, c = Yt, h = Yt, u, f) {
    super(null, o, a, l, c, h, i, s, u, f), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const mu = /* @__PURE__ */ new Ue(), Wv = /* @__PURE__ */ new Ue();
class Lc {
  constructor(e = [], t = []) {
    this.uuid = vn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ue());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ue();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s] ? e[s].matrixWorld : Wv;
      mu.multiplyMatrices(a, t[s]), mu.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Lc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Xf(t, e, e, gn, An);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let o = t[s];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new Wf()), this.bones.push(o), this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class ql extends Pt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const bs = /* @__PURE__ */ new Ue(), gu = /* @__PURE__ */ new Ue(), Mo = [], _u = /* @__PURE__ */ new hi(), Xv = /* @__PURE__ */ new Ue(), fr = /* @__PURE__ */ new kt(), dr = /* @__PURE__ */ new zn();
class Yv extends kt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ql(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Xv);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new hi()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, bs), _u.copy(e.boundingBox).applyMatrix4(bs), this.boundingBox.union(_u);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new zn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, bs), dr.copy(e.boundingSphere).applyMatrix4(bs), this.boundingSphere.union(dr);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, o = e * s + 1;
    for (let a = 0; a < n.length; a++)
      n[a] = i[o + a];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (fr.geometry = this.geometry, fr.material = this.material, fr.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), dr.copy(this.boundingSphere), dr.applyMatrix4(n), e.ray.intersectsSphere(dr) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, bs), gu.multiplyMatrices(n, bs), fr.matrixWorld = gu, fr.raycast(e, Mo);
        for (let o = 0, a = Mo.length; o < a; o++) {
          const l = Mo[o];
          l.instanceId = s, l.object = this, t.push(l);
        }
        Mo.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new ql(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Xf(new Float32Array(i * this.count), i, this.count, Mc, An));
    const s = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < n.length; c++)
      o += n[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = i * e;
    s[l] = a, s.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class Dc extends Un {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Se(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const jo = /* @__PURE__ */ new L(), Zo = /* @__PURE__ */ new L(), xu = /* @__PURE__ */ new Ue(), pr = /* @__PURE__ */ new tr(), So = /* @__PURE__ */ new zn(), Ya = /* @__PURE__ */ new L(), vu = /* @__PURE__ */ new L();
class Ic extends tt {
  constructor(e = new qt(), t = new Dc()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        jo.fromBufferAttribute(t, i - 1), Zo.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += jo.distanceTo(Zo);
      e.setAttribute("lineDistance", new Lt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), So.copy(n.boundingSphere), So.applyMatrix4(i), So.radius += s, e.ray.intersectsSphere(So) === !1) return;
    xu.copy(i).invert(), pr.copy(e.ray).applyMatrix4(xu);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
    if (h !== null) {
      const d = Math.max(0, o.start), _ = Math.min(h.count, o.start + o.count);
      for (let g = d, p = _ - 1; g < p; g += c) {
        const m = h.getX(g), v = h.getX(g + 1), x = To(this, e, pr, l, m, v);
        x && t.push(x);
      }
      if (this.isLineLoop) {
        const g = h.getX(_ - 1), p = h.getX(d), m = To(this, e, pr, l, g, p);
        m && t.push(m);
      }
    } else {
      const d = Math.max(0, o.start), _ = Math.min(f.count, o.start + o.count);
      for (let g = d, p = _ - 1; g < p; g += c) {
        const m = To(this, e, pr, l, g, g + 1);
        m && t.push(m);
      }
      if (this.isLineLoop) {
        const g = To(this, e, pr, l, _ - 1, d);
        g && t.push(g);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function To(r, e, t, n, i, s) {
  const o = r.geometry.attributes.position;
  if (jo.fromBufferAttribute(o, i), Zo.fromBufferAttribute(o, s), t.distanceSqToSegment(jo, Zo, Ya, vu) > n) return;
  Ya.applyMatrix4(r.matrixWorld);
  const l = e.ray.origin.distanceTo(Ya);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: vu.clone().applyMatrix4(r.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      object: r
    };
}
const yu = /* @__PURE__ */ new L(), Mu = /* @__PURE__ */ new L();
class Yf extends Ic {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        yu.fromBufferAttribute(t, i), Mu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + yu.distanceTo(Mu);
      e.setAttribute("lineDistance", new Lt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class qv extends Ic {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class qf extends Un {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Se(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Su = /* @__PURE__ */ new Ue(), Kl = /* @__PURE__ */ new tr(), Eo = /* @__PURE__ */ new zn(), bo = /* @__PURE__ */ new L();
class Kv extends tt {
  constructor(e = new qt(), t = new qf()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Eo.copy(n.boundingSphere), Eo.applyMatrix4(i), Eo.radius += s, e.ray.intersectsSphere(Eo) === !1) return;
    Su.copy(i).invert(), Kl.copy(e.ray).applyMatrix4(Su);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, o.start), d = Math.min(c.count, o.start + o.count);
      for (let _ = f, g = d; _ < g; _++) {
        const p = c.getX(_);
        bo.fromBufferAttribute(u, p), Tu(bo, p, l, i, e, t, this);
      }
    } else {
      const f = Math.max(0, o.start), d = Math.min(u.count, o.start + o.count);
      for (let _ = f, g = d; _ < g; _++)
        bo.fromBufferAttribute(u, _), Tu(bo, _, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Tu(r, e, t, n, i, s, o) {
  const a = Kl.distanceSqToPoint(r);
  if (a < t) {
    const l = new L();
    Kl.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: o
    });
  }
}
class Hn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, i = this.getPoint(0), s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      n = this.getPoint(o / e), s += n.distanceTo(i), t.push(s), i = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let o;
    t ? o = t : o = e * n[s - 1];
    let a = 0, l = s - 1, c;
    for (; a <= l; )
      if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0)
        a = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === o)
      return i / (s - 1);
    const h = n[i], f = n[i + 1] - h, d = (o - h) / f;
    return (i + d) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const o = this.getPoint(i), a = this.getPoint(s), l = t || (o.isVector2 ? new te() : new L());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new L(), i = [], s = [], o = [], a = new L(), l = new Ue();
    for (let d = 0; d <= e; d++) {
      const _ = d / e;
      i[d] = this.getTangentAt(_, new L());
    }
    s[0] = new L(), o[0] = new L();
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), f = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (s[d] = s[d - 1].clone(), o[d] = o[d - 1].clone(), a.crossVectors(i[d - 1], i[d]), a.length() > Number.EPSILON) {
        a.normalize();
        const _ = Math.acos(Et(i[d - 1].dot(i[d]), -1, 1));
        s[d].applyMatrix4(l.makeRotationAxis(a, _));
      }
      o[d].crossVectors(i[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(Et(s[0].dot(s[e]), -1, 1));
      d /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let _ = 1; _ <= e; _++)
        s[_].applyMatrix4(l.makeRotationAxis(i[_], d * _)), o[_].crossVectors(i[_], s[_]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: o
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Nc extends Hn {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  getPoint(e, t = new te()) {
    const n = t, i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (o ? s = 0 : s = i), this.aClockwise === !0 && !o && (s === i ? s = -i : s = s - i);
    const a = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
      l = f * h - d * u + this.aX, c = f * u + d * h + this.aY;
    }
    return n.set(l, c);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class jv extends Nc {
  constructor(e, t, n, i, s, o) {
    super(e, t, n, n, i, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Uc() {
  let r = 0, e = 0, t = 0, n = 0;
  function i(s, o, a, l) {
    r = s, e = a, t = -3 * s + 3 * o - 2 * a - l, n = 2 * s - 2 * o + a + l;
  }
  return {
    initCatmullRom: function(s, o, a, l, c) {
      i(o, a, c * (a - s), c * (l - o));
    },
    initNonuniformCatmullRom: function(s, o, a, l, c, h, u) {
      let f = (o - s) / c - (a - s) / (c + h) + (a - o) / h, d = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
      f *= h, d *= h, i(o, a, f, d);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return r + e * s + t * o + n * a;
    }
  };
}
const Ao = /* @__PURE__ */ new L(), qa = /* @__PURE__ */ new Uc(), Ka = /* @__PURE__ */ new Uc(), ja = /* @__PURE__ */ new Uc();
class Zv extends Hn {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : l === 0 && a === s - 1 && (a = s - 2, l = 1);
    let c, h;
    this.closed || a > 0 ? c = i[(a - 1) % s] : (Ao.subVectors(i[0], i[1]).add(i[0]), c = Ao);
    const u = i[a % s], f = i[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = i[(a + 2) % s] : (Ao.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = Ao), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(c.distanceToSquared(u), d), g = Math.pow(u.distanceToSquared(f), d), p = Math.pow(f.distanceToSquared(h), d);
      g < 1e-4 && (g = 1), _ < 1e-4 && (_ = g), p < 1e-4 && (p = g), qa.initNonuniformCatmullRom(c.x, u.x, f.x, h.x, _, g, p), Ka.initNonuniformCatmullRom(c.y, u.y, f.y, h.y, _, g, p), ja.initNonuniformCatmullRom(c.z, u.z, f.z, h.z, _, g, p);
    } else this.curveType === "catmullrom" && (qa.initCatmullRom(c.x, u.x, f.x, h.x, this.tension), Ka.initCatmullRom(c.y, u.y, f.y, h.y, this.tension), ja.initCatmullRom(c.z, u.z, f.z, h.z, this.tension));
    return n.set(
      qa.calc(l),
      Ka.calc(l),
      ja.calc(l)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new L().fromArray(i));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function Eu(r, e, t, n, i) {
  const s = (n - e) * 0.5, o = (i - t) * 0.5, a = r * r, l = r * a;
  return (2 * t - 2 * n + s + o) * l + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t;
}
function $v(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function Jv(r, e) {
  return 2 * (1 - r) * r * e;
}
function Qv(r, e) {
  return r * r * e;
}
function Er(r, e, t, n) {
  return $v(r, e) + Jv(r, t) + Qv(r, n);
}
function ey(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function ty(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function ny(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function iy(r, e) {
  return r * r * r * e;
}
function br(r, e, t, n, i) {
  return ey(r, e) + ty(r, t) + ny(r, n) + iy(r, i);
}
class Kf extends Hn {
  constructor(e = new te(), t = new te(), n = new te(), i = new te()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new te()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      br(e, i.x, s.x, o.x, a.x),
      br(e, i.y, s.y, o.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class sy extends Hn {
  constructor(e = new L(), t = new L(), n = new L(), i = new L()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      br(e, i.x, s.x, o.x, a.x),
      br(e, i.y, s.y, o.y, a.y),
      br(e, i.z, s.z, o.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class jf extends Hn {
  constructor(e = new te(), t = new te()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new te()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new te()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class ry extends Hn {
  constructor(e = new L(), t = new L()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new L()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new L()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Zf extends Hn {
  constructor(e = new te(), t = new te(), n = new te()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new te()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Er(e, i.x, s.x, o.x),
      Er(e, i.y, s.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class oy extends Hn {
  constructor(e = new L(), t = new L(), n = new L()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Er(e, i.x, s.x, o.x),
      Er(e, i.y, s.y, o.y),
      Er(e, i.z, s.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class $f extends Hn {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new te()) {
    const n = t, i = this.points, s = (i.length - 1) * e, o = Math.floor(s), a = s - o, l = i[o === 0 ? o : o - 1], c = i[o], h = i[o > i.length - 2 ? i.length - 1 : o + 1], u = i[o > i.length - 3 ? i.length - 1 : o + 2];
    return n.set(
      Eu(a, l.x, c.x, h.x, u.x),
      Eu(a, l.y, c.y, h.y, u.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const i = this.points[t];
      e.points.push(i.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const i = e.points[t];
      this.points.push(new te().fromArray(i));
    }
    return this;
  }
}
var bu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: jv,
  CatmullRomCurve3: Zv,
  CubicBezierCurve: Kf,
  CubicBezierCurve3: sy,
  EllipseCurve: Nc,
  LineCurve: jf,
  LineCurve3: ry,
  QuadraticBezierCurve: Zf,
  QuadraticBezierCurve3: oy,
  SplineCurve: $f
});
class ay extends Hn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new bu[n](t, e));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e, t) {
    const n = e * this.getLength(), i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const o = i[s] - n, a = this.curves[s], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, t);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const o = s[i], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        n && n.equals(h) || (t.push(h), n = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(i.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const i = this.curves[t];
      e.curves.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const i = e.curves[t];
      this.curves.push(new bu[i.type]().fromJSON(i));
    }
    return this;
  }
}
class jl extends ay {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new te(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new jf(this.currentPoint.clone(), new te(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new Zf(
      this.currentPoint.clone(),
      new te(e, t),
      new te(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    const a = new Kf(
      this.currentPoint.clone(),
      new te(e, t),
      new te(n, i),
      new te(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new $f(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      e + a,
      t + l,
      n,
      i,
      s,
      o
    ), this;
  }
  absarc(e, t, n, i, s, o) {
    return this.absellipse(e, t, n, n, i, s, o), this;
  }
  ellipse(e, t, n, i, s, o, a, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, n, i, s, o, a, l), this;
  }
  absellipse(e, t, n, i, s, o, a, l) {
    const c = new Nc(e, t, n, i, s, o, a, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class Oc extends qt {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    };
    const s = [], o = [];
    a(i), c(n), h(), this.setAttribute("position", new Lt(s, 3)), this.setAttribute("normal", new Lt(s.slice(), 3)), this.setAttribute("uv", new Lt(o, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(v) {
      const x = new L(), y = new L(), R = new L();
      for (let A = 0; A < t.length; A += 3)
        d(t[A + 0], x), d(t[A + 1], y), d(t[A + 2], R), l(x, y, R, v);
    }
    function l(v, x, y, R) {
      const A = R + 1, b = [];
      for (let C = 0; C <= A; C++) {
        b[C] = [];
        const S = v.clone().lerp(y, C / A), T = x.clone().lerp(y, C / A), D = A - C;
        for (let B = 0; B <= D; B++)
          B === 0 && C === A ? b[C][B] = S : b[C][B] = S.clone().lerp(T, B / D);
      }
      for (let C = 0; C < A; C++)
        for (let S = 0; S < 2 * (A - C) - 1; S++) {
          const T = Math.floor(S / 2);
          S % 2 === 0 ? (f(b[C][T + 1]), f(b[C + 1][T]), f(b[C][T])) : (f(b[C][T + 1]), f(b[C + 1][T + 1]), f(b[C + 1][T]));
        }
    }
    function c(v) {
      const x = new L();
      for (let y = 0; y < s.length; y += 3)
        x.x = s[y + 0], x.y = s[y + 1], x.z = s[y + 2], x.normalize().multiplyScalar(v), s[y + 0] = x.x, s[y + 1] = x.y, s[y + 2] = x.z;
    }
    function h() {
      const v = new L();
      for (let x = 0; x < s.length; x += 3) {
        v.x = s[x + 0], v.y = s[x + 1], v.z = s[x + 2];
        const y = p(v) / 2 / Math.PI + 0.5, R = m(v) / Math.PI + 0.5;
        o.push(y, 1 - R);
      }
      _(), u();
    }
    function u() {
      for (let v = 0; v < o.length; v += 6) {
        const x = o[v + 0], y = o[v + 2], R = o[v + 4], A = Math.max(x, y, R), b = Math.min(x, y, R);
        A > 0.9 && b < 0.1 && (x < 0.2 && (o[v + 0] += 1), y < 0.2 && (o[v + 2] += 1), R < 0.2 && (o[v + 4] += 1));
      }
    }
    function f(v) {
      s.push(v.x, v.y, v.z);
    }
    function d(v, x) {
      const y = v * 3;
      x.x = e[y + 0], x.y = e[y + 1], x.z = e[y + 2];
    }
    function _() {
      const v = new L(), x = new L(), y = new L(), R = new L(), A = new te(), b = new te(), C = new te();
      for (let S = 0, T = 0; S < s.length; S += 9, T += 6) {
        v.set(s[S + 0], s[S + 1], s[S + 2]), x.set(s[S + 3], s[S + 4], s[S + 5]), y.set(s[S + 6], s[S + 7], s[S + 8]), A.set(o[T + 0], o[T + 1]), b.set(o[T + 2], o[T + 3]), C.set(o[T + 4], o[T + 5]), R.copy(v).add(x).add(y).divideScalar(3);
        const D = p(R);
        g(A, T + 0, v, D), g(b, T + 2, x, D), g(C, T + 4, y, D);
      }
    }
    function g(v, x, y, R) {
      R < 0 && v.x === 1 && (o[x] = v.x - 1), y.x === 0 && y.z === 0 && (o[x] = R / 2 / Math.PI + 0.5);
    }
    function p(v) {
      return Math.atan2(v.z, -v.x);
    }
    function m(v) {
      return Math.atan2(-v.y, Math.sqrt(v.x * v.x + v.z * v.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Oc(e.vertices, e.indices, e.radius, e.details);
  }
}
class Za extends jl {
  constructor(e) {
    super(e), this.uuid = vn(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const i = this.holes[t];
      e.holes.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const i = e.holes[t];
      this.holes.push(new jl().fromJSON(i));
    }
    return this;
  }
}
const ly = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = Jf(r, 0, i, t, !0);
    const o = [];
    if (!s || s.next === s.prev) return o;
    let a, l, c, h, u, f, d;
    if (n && (s = dy(r, e, s, t)), r.length > 80 * t) {
      a = c = r[0], l = h = r[1];
      for (let _ = t; _ < i; _ += t)
        u = r[_], f = r[_ + 1], u < a && (a = u), f < l && (l = f), u > c && (c = u), f > h && (h = f);
      d = Math.max(c - a, h - l), d = d !== 0 ? 32767 / d : 0;
    }
    return Nr(s, o, t, a, l, d, 0), o;
  }
};
function Jf(r, e, t, n, i) {
  let s, o;
  if (i === Ey(r, e, t, n) > 0)
    for (s = e; s < t; s += n) o = Au(s, r[s], r[s + 1], o);
  else
    for (s = t - n; s >= e; s -= n) o = Au(s, r[s], r[s + 1], o);
  return o && ha(o, o.next) && (Or(o), o = o.next), o;
}
function es(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (ha(t, t.next) || lt(t.prev, t, t.next) === 0)) {
      if (Or(t), t = e = t.prev, t === t.next) break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Nr(r, e, t, n, i, s, o) {
  if (!r) return;
  !o && s && xy(r, n, i, s);
  let a = r, l, c;
  for (; r.prev !== r.next; ) {
    if (l = r.prev, c = r.next, s ? hy(r, n, i, s) : cy(r)) {
      e.push(l.i / t | 0), e.push(r.i / t | 0), e.push(c.i / t | 0), Or(r), r = c.next, a = c.next;
      continue;
    }
    if (r = c, r === a) {
      o ? o === 1 ? (r = uy(es(r), e, t), Nr(r, e, t, n, i, s, 2)) : o === 2 && fy(r, e, t, n, i, s) : Nr(es(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function cy(r) {
  const e = r.prev, t = r, n = r.next;
  if (lt(e, t, n) >= 0) return !1;
  const i = e.x, s = t.x, o = n.x, a = e.y, l = t.y, c = n.y, h = i < s ? i < o ? i : o : s < o ? s : o, u = a < l ? a < c ? a : c : l < c ? l : c, f = i > s ? i > o ? i : o : s > o ? s : o, d = a > l ? a > c ? a : c : l > c ? l : c;
  let _ = n.next;
  for (; _ !== e; ) {
    if (_.x >= h && _.x <= f && _.y >= u && _.y <= d && Rs(i, a, s, l, o, c, _.x, _.y) && lt(_.prev, _, _.next) >= 0) return !1;
    _ = _.next;
  }
  return !0;
}
function hy(r, e, t, n) {
  const i = r.prev, s = r, o = r.next;
  if (lt(i, s, o) >= 0) return !1;
  const a = i.x, l = s.x, c = o.x, h = i.y, u = s.y, f = o.y, d = a < l ? a < c ? a : c : l < c ? l : c, _ = h < u ? h < f ? h : f : u < f ? u : f, g = a > l ? a > c ? a : c : l > c ? l : c, p = h > u ? h > f ? h : f : u > f ? u : f, m = Zl(d, _, e, t, n), v = Zl(g, p, e, t, n);
  let x = r.prevZ, y = r.nextZ;
  for (; x && x.z >= m && y && y.z <= v; ) {
    if (x.x >= d && x.x <= g && x.y >= _ && x.y <= p && x !== i && x !== o && Rs(a, h, l, u, c, f, x.x, x.y) && lt(x.prev, x, x.next) >= 0 || (x = x.prevZ, y.x >= d && y.x <= g && y.y >= _ && y.y <= p && y !== i && y !== o && Rs(a, h, l, u, c, f, y.x, y.y) && lt(y.prev, y, y.next) >= 0)) return !1;
    y = y.nextZ;
  }
  for (; x && x.z >= m; ) {
    if (x.x >= d && x.x <= g && x.y >= _ && x.y <= p && x !== i && x !== o && Rs(a, h, l, u, c, f, x.x, x.y) && lt(x.prev, x, x.next) >= 0) return !1;
    x = x.prevZ;
  }
  for (; y && y.z <= v; ) {
    if (y.x >= d && y.x <= g && y.y >= _ && y.y <= p && y !== i && y !== o && Rs(a, h, l, u, c, f, y.x, y.y) && lt(y.prev, y, y.next) >= 0) return !1;
    y = y.nextZ;
  }
  return !0;
}
function uy(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !ha(i, s) && Qf(i, n, n.next, s) && Ur(i, s) && Ur(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), Or(n), Or(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return es(n);
}
function fy(r, e, t, n, i, s) {
  let o = r;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && My(o, a)) {
        let l = ed(o, a);
        o = es(o, o.next), l = es(l, l.next), Nr(o, e, t, n, i, s, 0), Nr(l, e, t, n, i, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== r);
}
function dy(r, e, t, n) {
  const i = [];
  let s, o, a, l, c;
  for (s = 0, o = e.length; s < o; s++)
    a = e[s] * n, l = s < o - 1 ? e[s + 1] * n : r.length, c = Jf(r, a, l, n, !1), c === c.next && (c.steiner = !0), i.push(yy(c));
  for (i.sort(py), s = 0; s < i.length; s++)
    t = my(i[s], t);
  return t;
}
function py(r, e) {
  return r.x - e.x;
}
function my(r, e) {
  const t = gy(r, e);
  if (!t)
    return e;
  const n = ed(t, r);
  return es(n, n.next), es(t, t.next);
}
function gy(r, e) {
  let t = e, n = -1 / 0, i;
  const s = r.x, o = r.y;
  do {
    if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
      const f = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (f <= s && f > n && (n = f, i = t.x < t.next.x ? t : t.next, f === s))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i) return null;
  const a = i, l = i.x, c = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    s >= t.x && t.x >= l && s !== t.x && Rs(o < c ? s : n, o, l, c, o < c ? n : s, o, t.x, t.y) && (u = Math.abs(o - t.y) / (s - t.x), Ur(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && _y(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== a);
  return i;
}
function _y(r, e) {
  return lt(r.prev, r, e.prev) < 0 && lt(e.next, r, r.next) < 0;
}
function xy(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = Zl(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, vy(i);
}
function vy(r) {
  let e, t, n, i, s, o, a, l, c = 1;
  do {
    for (t = r, r = null, s = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++)
        ;
      for (l = c; a > 0 || l > 0 && n; )
        a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, c *= 2;
  } while (o > 1);
  return r;
}
function Zl(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function yy(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function Rs(r, e, t, n, i, s, o, a) {
  return (i - o) * (e - a) >= (r - o) * (s - a) && (r - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (i - o) * (n - a);
}
function My(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Sy(r, e) && // dones't intersect other edges
  (Ur(r, e) && Ur(e, r) && Ty(r, e) && // locally visible
  (lt(r.prev, r, e.prev) || lt(r, e.prev, e)) || // does not create opposite-facing sectors
  ha(r, e) && lt(r.prev, r, r.next) > 0 && lt(e.prev, e, e.next) > 0);
}
function lt(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function ha(r, e) {
  return r.x === e.x && r.y === e.y;
}
function Qf(r, e, t, n) {
  const i = Ro(lt(r, e, t)), s = Ro(lt(r, e, n)), o = Ro(lt(t, n, r)), a = Ro(lt(t, n, e));
  return !!(i !== s && o !== a || i === 0 && wo(r, t, e) || s === 0 && wo(r, n, e) || o === 0 && wo(t, r, n) || a === 0 && wo(t, e, n));
}
function wo(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function Ro(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Sy(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Qf(t, t.next, r, e)) return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function Ur(r, e) {
  return lt(r.prev, r, r.next) < 0 ? lt(r, e, r.next) >= 0 && lt(r, r.prev, e) >= 0 : lt(r, e, r.prev) < 0 || lt(r, r.next, e) < 0;
}
function Ty(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function ed(r, e) {
  const t = new $l(r.i, r.x, r.y), n = new $l(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function Au(r, e, t, n) {
  const i = new $l(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Or(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function $l(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Ey(r, e, t, n) {
  let i = 0;
  for (let s = e, o = t - n; s < t; s += n)
    i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
  return i;
}
class Fc {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Fc.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    wu(e), Ru(n, e);
    let o = e.length;
    t.forEach(wu);
    for (let l = 0; l < t.length; l++)
      i.push(o), o += t[l].length, Ru(n, t[l]);
    const a = ly.triangulate(n, i);
    for (let l = 0; l < a.length; l += 3)
      s.push(a.slice(l, l + 3));
    return s;
  }
}
function wu(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function Ru(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class Bc extends Oc {
  constructor(e = 1, t = 0) {
    const n = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ], i = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = {
      radius: e,
      detail: t
    };
  }
  static fromJSON(e) {
    return new Bc(e.radius, e.detail);
  }
}
class kc extends qt {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: o,
      thetaLength: a
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [], u = new L(), f = new L(), d = [], _ = [], g = [], p = [];
    for (let m = 0; m <= n; m++) {
      const v = [], x = m / n;
      let y = 0;
      m === 0 && o === 0 ? y = 0.5 / t : m === n && l === Math.PI && (y = -0.5 / t);
      for (let R = 0; R <= t; R++) {
        const A = R / t;
        u.x = -e * Math.cos(i + A * s) * Math.sin(o + x * a), u.y = e * Math.cos(o + x * a), u.z = e * Math.sin(i + A * s) * Math.sin(o + x * a), _.push(u.x, u.y, u.z), f.copy(u).normalize(), g.push(f.x, f.y, f.z), p.push(A + y, 1 - x), v.push(c++);
      }
      h.push(v);
    }
    for (let m = 0; m < n; m++)
      for (let v = 0; v < t; v++) {
        const x = h[m][v + 1], y = h[m][v], R = h[m + 1][v], A = h[m + 1][v + 1];
        (m !== 0 || o > 0) && d.push(x, y, A), (m !== n - 1 || l < Math.PI) && d.push(y, R, A);
      }
    this.setIndex(d), this.setAttribute("position", new Lt(_, 3)), this.setAttribute("normal", new Lt(g, 3)), this.setAttribute("uv", new Lt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new kc(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class zc extends Un {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Se(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Se(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = wf, this.normalScale = new te(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Bn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Vn extends zc {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new te(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Et(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Se(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Se(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Se(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function Co(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function by(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Ay(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Cu(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, o = 0; o !== n; ++s) {
    const a = t[s] * e;
    for (let l = 0; l !== e; ++l)
      i[o++] = r[a + l];
  }
  return i;
}
function td(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let o = s[n];
  if (o !== void 0)
    if (Array.isArray(o))
      do
        o = s[n], o !== void 0 && (e.push(s.time), t.push.apply(t, o)), s = r[i++];
      while (s !== void 0);
    else if (o.toArray !== void 0)
      do
        o = s[n], o !== void 0 && (e.push(s.time), o.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        o = s[n], o !== void 0 && (e.push(s.time), t.push(o)), s = r[i++];
      while (s !== void 0);
}
class Yr {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let o;
        t: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (s = i, i = t[++n], e < i)
                break e;
            }
            o = t.length;
            break t;
          }
          if (!(e >= s)) {
            const a = t[1];
            e < a && (n = 2, s = a);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            o = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let o = 0; o !== i; ++o)
      t[o] = n[s + o];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class wy extends Yr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: mh,
      endingEnd: mh
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, o = e + 1, a = i[s], l = i[o];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case gh:
          s = e, a = 2 * t - n;
          break;
        case _h:
          s = i.length - 2, a = t + i[s] - i[s + 1];
          break;
        default:
          s = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case gh:
          o = e, l = 2 * n - t;
          break;
        case _h:
          o = 1, l = n + i[1] - i[0];
          break;
        default:
          o = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, f = this._weightPrev, d = this._weightNext, _ = (n - t) / (i - t), g = _ * _, p = g * _, m = -f * p + 2 * f * g - f * _, v = (1 + f) * p + (-1.5 - 2 * f) * g + (-0.5 + f) * _ + 1, x = (-1 - d) * p + (1.5 + d) * g + 0.5 * _, y = d * p - d * g;
    for (let R = 0; R !== a; ++R)
      s[R] = m * o[h + R] + v * o[c + R] + x * o[l + R] + y * o[u + R];
    return s;
  }
}
class Ry extends Yr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = (n - t) / (i - t), u = 1 - h;
    for (let f = 0; f !== a; ++f)
      s[f] = o[c + f] * u + o[l + f] * h;
    return s;
  }
}
class Cy extends Yr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Gn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Co(t, this.TimeBufferType), this.values = Co(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Co(e.times, Array),
        values: Co(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Cy(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Ry(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new wy(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Lr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Dr:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case xa:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Lr;
      case this.InterpolantFactoryMethodLinear:
        return Dr;
      case this.InterpolantFactoryMethodSmooth:
        return xa;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, o = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; o !== -1 && n[o] > t; )
      --o;
    if (++o, s !== 0 || o !== i) {
      s >= o && (o = Math.max(o, 1), s = o - 1);
      const a = this.getValueSize();
      this.times = n.slice(s, o), this.values = this.values.slice(s * a, o * a);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let o = null;
    for (let a = 0; a !== s; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = !1;
        break;
      }
      o = l;
    }
    if (i !== void 0 && by(i))
      for (let a = 0, l = i.length; a !== l; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === xa, s = e.length - 1;
    let o = 1;
    for (let a = 1; a < s; ++a) {
      let l = !1;
      const c = e[a], h = e[a + 1];
      if (c !== h && (a !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const u = a * n, f = u - n, d = u + n;
          for (let _ = 0; _ !== n; ++_) {
            const g = t[u + _];
            if (g !== t[f + _] || g !== t[d + _]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const u = a * n, f = o * n;
          for (let d = 0; d !== n; ++d)
            t[f + d] = t[u + d];
        }
        ++o;
      }
    }
    if (s > 0) {
      e[o] = e[s];
      for (let a = s * n, l = o * n, c = 0; c !== n; ++c)
        t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Gn.prototype.TimeBufferType = Float32Array;
Gn.prototype.ValueBufferType = Float32Array;
Gn.prototype.DefaultInterpolation = Dr;
class ir extends Gn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ir.prototype.ValueTypeName = "bool";
ir.prototype.ValueBufferType = Array;
ir.prototype.DefaultInterpolation = Lr;
ir.prototype.InterpolantFactoryMethodLinear = void 0;
ir.prototype.InterpolantFactoryMethodSmooth = void 0;
class nd extends Gn {
}
nd.prototype.ValueTypeName = "color";
class Ys extends Gn {
}
Ys.prototype.ValueTypeName = "number";
class Py extends Yr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let h = c + a; c !== h; c += 4)
      Fn.slerpFlat(s, 0, o, c - a, o, c, l);
    return s;
  }
}
class qs extends Gn {
  InterpolantFactoryMethodLinear(e) {
    return new Py(this.times, this.values, this.getValueSize(), e);
  }
}
qs.prototype.ValueTypeName = "quaternion";
qs.prototype.InterpolantFactoryMethodSmooth = void 0;
class sr extends Gn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
sr.prototype.ValueTypeName = "string";
sr.prototype.ValueBufferType = Array;
sr.prototype.DefaultInterpolation = Lr;
sr.prototype.InterpolantFactoryMethodLinear = void 0;
sr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ks extends Gn {
}
Ks.prototype.ValueTypeName = "vector";
class Ly {
  constructor(e = "", t = -1, n = [], i = nm) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = vn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o)
      t.push(Iy(n[o]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, o = n.length; s !== o; ++s)
      t.push(Gn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, o = [];
    for (let a = 0; a < s; a++) {
      let l = [], c = [];
      l.push(
        (a + s - 1) % s,
        a,
        (a + 1) % s
      ), c.push(0, 1, 0);
      const h = Ay(l);
      l = Cu(l, 1, h), c = Cu(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), o.push(
        new Ys(
          ".morphTargetInfluences[" + t[a].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = c.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let f = i[u];
        f || (i[u] = f = []), f.push(c);
      }
    }
    const o = [];
    for (const a in i)
      o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return o;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, f, d, _, g) {
      if (d.length !== 0) {
        const p = [], m = [];
        td(d, p, m, _), p.length !== 0 && g.push(new u(f, p, m));
      }
    }, i = [], s = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const f = c[u].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const d = {};
          let _;
          for (_ = 0; _ < f.length; _++)
            if (f[_].morphTargets)
              for (let g = 0; g < f[_].morphTargets.length; g++)
                d[f[_].morphTargets[g]] = -1;
          for (const g in d) {
            const p = [], m = [];
            for (let v = 0; v !== f[_].morphTargets.length; ++v) {
              const x = f[_];
              p.push(x.time), m.push(x.morphTarget === g ? 1 : 0);
            }
            i.push(new Ys(".morphTargetInfluence[" + g + "]", p, m));
          }
          l = d.length * o;
        } else {
          const d = ".bones[" + t[u].name + "]";
          n(
            Ks,
            d + ".position",
            f,
            "pos",
            i
          ), n(
            qs,
            d + ".quaternion",
            f,
            "rot",
            i
          ), n(
            Ks,
            d + ".scale",
            f,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Dy(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ys;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ks;
    case "color":
      return nd;
    case "quaternion":
      return qs;
    case "bool":
    case "boolean":
      return ir;
    case "string":
      return sr;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Iy(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Dy(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    td(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Ei = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
let id = class {
  constructor(e, t, n) {
    const i = this;
    let s = !1, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && i.onStart !== void 0 && i.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, f = c.length; u < f; u += 2) {
        const d = c[u], _ = c[u + 1];
        if (d.global && (d.lastIndex = 0), d.test(h))
          return _;
      }
      return null;
    };
  }
};
const Ny = /* @__PURE__ */ new id();
class ui {
  constructor(e) {
    this.manager = e !== void 0 ? e : Ny, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
ui.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Zn = {};
class Uy extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Fr extends ui {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Ei.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Zn[e] !== void 0) {
      Zn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Zn[e] = [], Zn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const h = Zn[e], u = c.body.getReader(), f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), d = f ? parseInt(f) : 0, _ = d !== 0;
        let g = 0;
        const p = new ReadableStream({
          start(m) {
            v();
            function v() {
              u.read().then(({ done: x, value: y }) => {
                if (x)
                  m.close();
                else {
                  g += y.byteLength;
                  const R = new ProgressEvent("progress", { lengthComputable: _, loaded: g, total: d });
                  for (let A = 0, b = h.length; A < b; A++) {
                    const C = h[A];
                    C.onProgress && C.onProgress(R);
                  }
                  m.enqueue(y), v();
                }
              }, (x) => {
                m.error(x);
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new Uy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return c.json();
        default:
          if (a === void 0)
            return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), f = u && u[1] ? u[1].toLowerCase() : void 0, d = new TextDecoder(f);
            return c.arrayBuffer().then((_) => d.decode(_));
          }
      }
    }).then((c) => {
      Ei.add(e, c);
      const h = Zn[e];
      delete Zn[e];
      for (let u = 0, f = h.length; u < f; u++) {
        const d = h[u];
        d.onLoad && d.onLoad(c);
      }
    }).catch((c) => {
      const h = Zn[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete Zn[e];
      for (let u = 0, f = h.length; u < f; u++) {
        const d = h[u];
        d.onError && d.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class sd extends ui {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Ei.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = Ir("img");
    function l() {
      h(), Ei.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class Oy extends ui {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new wc();
    s.colorSpace = Tt;
    const o = new sd(this.manager);
    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
    let a = 0;
    function l(c) {
      o.load(e[c], function(h) {
        s.images[c] = h, a++, a === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let c = 0; c < e.length; ++c)
      l(c);
    return s;
  }
}
class rd extends ui {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Ct(), o = new sd(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
let qr = class extends tt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Se(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
};
class Fy extends qr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(tt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Se(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const $a = /* @__PURE__ */ new Ue(), Pu = /* @__PURE__ */ new L(), Lu = /* @__PURE__ */ new L();
class Hc {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new te(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ue(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Rc(), this._frameExtents = new te(1, 1), this._viewportCount = 1, this._viewports = [
      new Qe(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Pu.setFromMatrixPosition(e.matrixWorld), t.position.copy(Pu), Lu.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Lu), t.updateMatrixWorld(), $a.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix($a), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply($a);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class By extends Hc {
  constructor() {
    super(new Wt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Ws * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class od extends qr {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(tt.DEFAULT_UP), this.updateMatrix(), this.target = new tt(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.map = null, this.shadow = new By();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Du = /* @__PURE__ */ new Ue(), mr = /* @__PURE__ */ new L(), Ja = /* @__PURE__ */ new L();
class ky extends Hc {
  constructor() {
    super(new Wt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new te(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Qe(2, 1, 1, 1),
      // negative X
      new Qe(0, 1, 1, 1),
      // positive Z
      new Qe(3, 1, 1, 1),
      // negative Z
      new Qe(1, 1, 1, 1),
      // positive Y
      new Qe(3, 0, 1, 1),
      // negative Y
      new Qe(1, 0, 1, 1)
    ], this._cubeDirections = [
      new L(1, 0, 0),
      new L(-1, 0, 0),
      new L(0, 0, 1),
      new L(0, 0, -1),
      new L(0, 1, 0),
      new L(0, -1, 0)
    ], this._cubeUps = [
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 0, 1),
      new L(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), mr.setFromMatrixPosition(e.matrixWorld), n.position.copy(mr), Ja.copy(n.position), Ja.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Ja), n.updateMatrixWorld(), i.makeTranslation(-mr.x, -mr.y, -mr.z), Du.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Du);
  }
}
class ad extends qr {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new ky();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class zy extends Hc {
  constructor() {
    super(new la(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Hy extends qr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(tt.DEFAULT_UP), this.updateMatrix(), this.target = new tt(), this.shadow = new zy();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Vy extends qr {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Ar {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Gy extends ui {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = Ei.get(e);
    if (o !== void 0) {
      if (s.manager.itemStart(e), o.then) {
        o.then((c) => {
          t && t(c), s.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const l = fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Ei.add(e, c), t && t(c), s.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), Ei.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    Ei.add(e, l), s.manager.itemStart(e);
  }
}
class ld {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Iu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Iu();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Iu() {
  return (typeof performance > "u" ? Date : performance).now();
}
const Vc = "\\[\\]\\.:\\/", Wy = new RegExp("[" + Vc + "]", "g"), Gc = "[^" + Vc + "]", Xy = "[^" + Vc.replace("\\.", "") + "]", Yy = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Gc), qy = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Xy), Ky = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Gc), jy = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Gc), Zy = new RegExp(
  "^" + Yy + qy + Ky + jy + "$"
), $y = ["material", "materials", "bones", "map"];
class Jy {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Wy, "");
  }
  static parseTrackName(e) {
    const t = Zy.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      $y.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let o = 0; o < s.length; o++) {
          const a = s[o];
          if (a.name === t || a.uuid === t)
            return a;
          const l = n(a.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = Jy;
Je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Je.prototype.GetterByBindingType = [
  Je.prototype._getValue_direct,
  Je.prototype._getValue_array,
  Je.prototype._getValue_arrayElement,
  Je.prototype._getValue_toArray
];
Je.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Je.prototype._setValue_direct,
    Je.prototype._setValue_direct_setNeedsUpdate,
    Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Je.prototype._setValue_array,
    Je.prototype._setValue_array_setNeedsUpdate,
    Je.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Je.prototype._setValue_arrayElement,
    Je.prototype._setValue_arrayElement_setNeedsUpdate,
    Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Je.prototype._setValue_fromArray,
    Je.prototype._setValue_fromArray_setNeedsUpdate,
    Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
const Nu = /* @__PURE__ */ new Ue();
let Qy = class {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new tr(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new oa(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Nu.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Nu), this;
  }
  intersectObject(e, t = !0, n = []) {
    return Jl(e, this, n, t), n.sort(Uu), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      Jl(e[i], this, n, t);
    return n.sort(Uu), n;
  }
};
function Uu(r, e) {
  return r.distance - e.distance;
}
function Jl(r, e, t, n) {
  let i = !0;
  if (r.layers.test(e.layers) && r.raycast(e, t) === !1 && (i = !1), i === !0 && n === !0) {
    const s = r.children;
    for (let o = 0, a = s.length; o < a; o++)
      Jl(s[o], e, t, !0);
  }
}
class Ou {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Et(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Fu = /* @__PURE__ */ new L();
class eM extends tt {
  constructor(e, t) {
    super(), this.light = e, this.matrixAutoUpdate = !1, this.color = t, this.type = "SpotLightHelper";
    const n = new qt(), i = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1
    ];
    for (let o = 0, a = 1, l = 32; o < l; o++, a++) {
      const c = o / l * Math.PI * 2, h = a / l * Math.PI * 2;
      i.push(
        Math.cos(c),
        Math.sin(c),
        1,
        Math.cos(h),
        Math.sin(h),
        1
      );
    }
    n.setAttribute("position", new Lt(i, 3));
    const s = new Dc({ fog: !1, toneMapped: !1 });
    this.cone = new Yf(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), this.parent ? (this.parent.updateWorldMatrix(!0), this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)) : this.matrix.copy(this.light.matrixWorld), this.matrixWorld.copy(this.light.matrixWorld);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), Fu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Fu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
class tM extends kt {
  constructor(e, t, n) {
    const i = new kc(t, 4, 2), s = new wn({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, s), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const nM = /* @__PURE__ */ new L(), Bu = /* @__PURE__ */ new Se(), ku = /* @__PURE__ */ new Se();
class iM extends tt {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new Bc(t);
    i.rotateY(Math.PI * 0.5), this.material = new wn({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const s = i.getAttribute("position"), o = new Float32Array(s.count * 3);
    i.setAttribute("color", new Pt(o, 3)), this.add(new kt(i, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (this.color !== void 0)
      this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      Bu.copy(this.light.color), ku.copy(this.light.groundColor);
      for (let n = 0, i = t.count; n < i; n++) {
        const s = n < i / 2 ? Bu : ku;
        t.setXYZ(n, s.r, s.g, s.b);
      }
      t.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), e.lookAt(nM.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class sM {
  constructor() {
    this.type = "ShapePath", this.color = new Se(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new jl(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    return this.currentPath.bezierCurveTo(e, t, n, i, s, o), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(m) {
      const v = [];
      for (let x = 0, y = m.length; x < y; x++) {
        const R = m[x], A = new Za();
        A.curves = R.curves, v.push(A);
      }
      return v;
    }
    function n(m, v) {
      const x = v.length;
      let y = !1;
      for (let R = x - 1, A = 0; A < x; R = A++) {
        let b = v[R], C = v[A], S = C.x - b.x, T = C.y - b.y;
        if (Math.abs(T) > Number.EPSILON) {
          if (T < 0 && (b = v[A], S = -S, C = v[R], T = -T), m.y < b.y || m.y > C.y) continue;
          if (m.y === b.y) {
            if (m.x === b.x) return !0;
          } else {
            const D = T * (m.x - b.x) - S * (m.y - b.y);
            if (D === 0) return !0;
            if (D < 0) continue;
            y = !y;
          }
        } else {
          if (m.y !== b.y) continue;
          if (C.x <= m.x && m.x <= b.x || b.x <= m.x && m.x <= C.x) return !0;
        }
      }
      return y;
    }
    const i = Fc.isClockWise, s = this.subPaths;
    if (s.length === 0) return [];
    let o, a, l;
    const c = [];
    if (s.length === 1)
      return a = s[0], l = new Za(), l.curves = a.curves, c.push(l), c;
    let h = !i(s[0].getPoints());
    h = e ? !h : h;
    const u = [], f = [];
    let d = [], _ = 0, g;
    f[_] = void 0, d[_] = [];
    for (let m = 0, v = s.length; m < v; m++)
      a = s[m], g = a.getPoints(), o = i(g), o = e ? !o : o, o ? (!h && f[_] && _++, f[_] = { s: new Za(), p: g }, f[_].s.curves = a.curves, h && _++, d[_] = []) : d[_].push({ h: a, p: g[0] });
    if (!f[0]) return t(s);
    if (f.length > 1) {
      let m = !1, v = 0;
      for (let x = 0, y = f.length; x < y; x++)
        u[x] = [];
      for (let x = 0, y = f.length; x < y; x++) {
        const R = d[x];
        for (let A = 0; A < R.length; A++) {
          const b = R[A];
          let C = !0;
          for (let S = 0; S < f.length; S++)
            n(b.p, f[S].p) && (x !== S && v++, C ? (C = !1, u[S].push(b)) : m = !0);
          C && u[x].push(b);
        }
      }
      v > 0 && m === !1 && (d = u);
    }
    let p;
    for (let m = 0, v = f.length; m < v; m++) {
      l = f[m].s, c.push(l), p = d[m];
      for (let x = 0, y = p.length; x < y; x++)
        l.holes.push(p[x].h);
    }
    return c;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: _c
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = _c);
const rM = {
  el: "_canvas-scene",
  id: "_scene",
  name: "hello world",
  camera: {
    fov: 60,
    near: 1,
    far: 1e4,
    position: {
      x: 600,
      y: 600,
      z: 600
    },
    lookAt: !0,
    controls: {
      show: !0,
      enableDamping: !0,
      minPolarAngle: Math.PI * 0.25,
      maxPolarAngle: Math.PI * 0.75,
      minAzimuthAngle: -Math.PI * 0.45,
      maxAzimuthAngle: Math.PI * 0.25,
      enablePan: !1
    }
  },
  size: {
    type: "window",
    id: "_Background_3D"
  },
  rendererPass: {
    type: "BLOOM",
    outlineConfig: {
      edgeStrength: 3,
      edgeGlow: 1,
      edgeThickness: 3,
      pulsePeriod: 2,
      gamma: !0,
      antiAliasing: !0,
      showIndex: 1
    },
    bloomConfig: {
      strength: 0.8,
      radius: 0.5,
      threshold: 0.5
    }
  },
  renderer: {
    antialias: !0,
    alpha: !0,
    clearAlpha: 0,
    clearColor: ""
  },
  light: [
    {
      type: "ambient",
      color: "#ffffff",
      intensity: 0.8,
      helper: !1,
      lightId: 0,
      lightName: "光源1"
    }
  ],
  sources: []
};
class ua {
  constructor() {
    me(this, "callbacks");
    this.callbacks = {}, this.callbacks.base = {};
  }
  on(e, t) {
    return typeof e > "u" || e === "" ? (console.warn("wrong names"), !1) : typeof t > "u" ? (console.warn("wrong callback"), !1) : (this.resolveNames(e).forEach((i) => {
      const s = this.resolveName(i);
      this.callbacks[s.namespace] instanceof Object || (this.callbacks[s.namespace] = {}), this.callbacks[s.namespace][s.value] instanceof Array || (this.callbacks[s.namespace][s.value] = []), this.callbacks[s.namespace][s.value].push(t);
    }), this);
  }
  off(e) {
    return typeof e > "u" || e === "" ? (console.warn("wrong name"), !1) : (this.resolveNames(e).forEach((n) => {
      const i = this.resolveName(n);
      if (i.namespace !== "base" && i.value === "")
        delete this.callbacks[i.namespace];
      else if (i.namespace === "base")
        for (const s in this.callbacks)
          this.callbacks[s] instanceof Object && this.callbacks[s][i.value] instanceof Array && (delete this.callbacks[s][i.value], Object.keys(this.callbacks[s]).length === 0 && delete this.callbacks[s]);
      else this.callbacks[i.namespace] instanceof Object && this.callbacks[i.namespace][i.value] instanceof Array && (delete this.callbacks[i.namespace][i.value], Object.keys(this.callbacks[i.namespace]).length === 0 && delete this.callbacks[i.namespace]);
    }), this);
  }
  trigger(e, t) {
    const n = this;
    if (typeof e > "u" || e === "")
      return console.warn("wrong name"), !1;
    let i = null;
    const s = t instanceof Array ? t : [], o = this.resolveNames(e), a = this.resolveName(o[0]);
    if (a.namespace === "base")
      for (const l in this.callbacks)
        this.callbacks[l] instanceof Object && this.callbacks[l][a.value] instanceof Array && this.callbacks[l][a.value].forEach(function(c) {
          c.apply(n, s);
        });
    else if (this.callbacks[a.namespace] instanceof Object) {
      if (a.value === "")
        return console.warn("wrong name"), this;
      this.callbacks[a.namespace][a.value].forEach(function(l) {
        l.apply(n, s);
      });
    }
    return i;
  }
  resolveNames(e) {
    let t = [];
    return typeof e == "string" ? t = e.replace(/[^a-zA-Z0-9 ,/.]/g, "").replace(/[,/]+/g, " ").split(" ") : Array.isArray(e) && e.forEach((n) => {
      typeof n == "string" && t.push(
        n.replace(/[^a-zA-Z0-9 ,/.]/g, "").replace(/[,/]+/g, " ")
      );
    }), t;
  }
  resolveName(e) {
    const t = {
      original: e,
      value: "",
      namespace: "base"
      // Default namespace
    }, n = e.split(".");
    return t.value = n[0], n.length > 1 && n[1] !== "" && (t.namespace = n[1]), t;
  }
}
class oM extends ua {
  constructor(t) {
    super();
    me(this, "canvas");
    me(this, "eventOffset");
    me(this, "mouse");
    me(this, "mouseMoveHandler");
    this.canvas = t, this.eventOffset = {
      x: 0,
      y: 0
    }, this.mouse = new te(), this.mouseMoveHandler = (n) => {
      var h;
      let {
        top: i = 0,
        left: s = 0,
        width: o = 0,
        height: a = 0
      } = (h = this.canvas) == null ? void 0 : h.getBoundingClientRect(), l = n.clientX - s, c = n.clientY - i;
      this.mouse.x = l / o * 2 - 1, this.mouse.y = -(c / a) * 2 + 1, this.eventOffset.x = l, this.eventOffset.y = c, this.trigger("mousemove", null);
    }, this.canvas && window.addEventListener("mousemove", this.mouseMoveHandler, !1);
  }
  release() {
    window.removeEventListener("mousemove", this.mouseMoveHandler, !1);
  }
}
class aM extends ua {
  constructor() {
    super();
    me(this, "clock");
    me(this, "start");
    me(this, "current");
    me(this, "elapsed");
    me(this, "delta");
    me(this, "timer");
    me(this, "index");
    me(this, "elapsedTime");
    me(this, "animationTick");
    this.clock = new ld(), this.start = Date.now(), this.current = this.start, this.elapsed = 0, this.delta = 16, this.timer = 0, this.index = 0, this.elapsedTime = 0, this.animationTick = null, this.tick();
  }
  tick() {
    const t = Date.now();
    this.delta = t - this.current, this.current = t, this.elapsed = t - this.start, this.elapsedTime = this.clock.getElapsedTime(), this.trigger("tick", null), window.requestAnimationFrame(() => {
      this.tick();
    });
  }
  release() {
    this.animationTick && window.cancelAnimationFrame(this.animationTick);
  }
  tickS(t = 1e3, n) {
    this.timer += this.delta, this.timer >= t && (this.index++, this.timer = 0, n(this.index));
  }
}
class lM extends ua {
  constructor(t) {
    super();
    me(this, "width");
    me(this, "height");
    me(this, "pixelRatio");
    me(this, "resizeHandler");
    this.width = 100, this.height = 100, this.pixelRatio = Math.min(window.devicePixelRatio, 2), this.resizeHandler = () => {
      if (t.type === "parent") {
        const n = document.getElementById(t.id);
        if (n) {
          const i = n.parentElement;
          i ? (this.width = i.clientWidth, this.height = i.clientHeight) : console.error(
            "tips: The parent document cannot be found. Please put the current component inside the parent document ID according to the configuration item."
          );
        } else
          this.release(), console.error(
            "tips: Could not find parent element ID, please check the configuration"
          );
      } else
        this.width = window.innerWidth, this.height = window.innerHeight;
      this.trigger("resize", null);
    }, this.resizeHandler(), window.addEventListener("resize", this.resizeHandler);
  }
  info(t = "Now size") {
    console.log(t, "width:", this.width, "height:", this.height);
  }
  release() {
    window.removeEventListener("resize", this.resizeHandler);
  }
}
function zu(r, e) {
  if (e === im)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === Wl || e === Af) {
    let t = r.getIndex();
    if (t === null) {
      const o = [], a = r.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++)
          o.push(l);
        r.setIndex(o), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === Wl)
      for (let o = 1; o <= n; o++)
        i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else
      for (let o = 0; o < n; o++)
        o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class cM extends ui {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new pM(t);
    }), this.register(function(t) {
      return new mM(t);
    }), this.register(function(t) {
      return new EM(t);
    }), this.register(function(t) {
      return new bM(t);
    }), this.register(function(t) {
      return new AM(t);
    }), this.register(function(t) {
      return new _M(t);
    }), this.register(function(t) {
      return new xM(t);
    }), this.register(function(t) {
      return new vM(t);
    }), this.register(function(t) {
      return new yM(t);
    }), this.register(function(t) {
      return new dM(t);
    }), this.register(function(t) {
      return new MM(t);
    }), this.register(function(t) {
      return new gM(t);
    }), this.register(function(t) {
      return new TM(t);
    }), this.register(function(t) {
      return new SM(t);
    }), this.register(function(t) {
      return new uM(t);
    }), this.register(function(t) {
      return new wM(t);
    }), this.register(function(t) {
      return new RM(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = Ar.extractUrlBase(e);
      o = Ar.resolveURL(c, this.path);
    } else
      o = Ar.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new Fr(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, o, function(h) {
          t(h), s.manager.itemEnd(e);
        }, a);
      } catch (h) {
        a(h);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === cd) {
        try {
          o[ze.KHR_BINARY_GLTF] = new CM(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(o[ze.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(l.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new VM(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], f = s.extensionsRequired || [];
        switch (u) {
          case ze.KHR_MATERIALS_UNLIT:
            o[u] = new fM();
            break;
          case ze.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new PM(s, this.dracoLoader);
            break;
          case ze.KHR_TEXTURE_TRANSFORM:
            o[u] = new LM();
            break;
          case ze.KHR_MESH_QUANTIZATION:
            o[u] = new DM();
            break;
          default:
            f.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function hM() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const ze = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class uM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new Se(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Dt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Hy(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new ad(h), c.distance = u;
        break;
      case "spot":
        c = new od(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, Jn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], a = (s.extensions && s.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class fM {
  constructor() {
    this.name = ze.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return wn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Se(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const o = s.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Dt), e.opacity = o[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Tt));
    }
    return Promise.all(i);
  }
}
class dM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class pM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new te(a, a);
    }
    return Promise.all(s);
  }
}
class mM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class gM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class _M {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new Se(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Dt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Tt)), o.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(s);
  }
}
class xM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(s);
  }
}
class vM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Se().setRGB(a[0], a[1], a[2], Dt), Promise.all(s);
  }
}
class yM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class MM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Se().setRGB(a[0], a[1], a[2], Dt), o.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Tt)), Promise.all(s);
  }
}
class SM {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(s);
  }
}
class TM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Vn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(s);
  }
}
class EM {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, o);
  }
}
class bM {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const o = s.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class AM {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const o = s.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class wM {
  constructor(e) {
    this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(a) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, f = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, f, i.mode, i.filter).then(function(d) {
          return d.buffer;
        }) : o.ready.then(function() {
          const d = new ArrayBuffer(h * u);
          return o.decodeGltfBuffer(new Uint8Array(d), h, u, f, i.mode, i.filter), d;
        });
      });
    } else
      return null;
  }
}
class RM {
  constructor(e) {
    this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== mn.TRIANGLES && c.mode !== mn.TRIANGLE_STRIP && c.mode !== mn.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o)
      a.push(this.parser.getDependency("accessor", o[c]).then((h) => (l[c] = h, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], f = c[0].count, d = [];
      for (const _ of u) {
        const g = new Ue(), p = new L(), m = new Fn(), v = new L(1, 1, 1), x = new Yv(_.geometry, _.material, f);
        for (let y = 0; y < f; y++)
          l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, y), l.ROTATION && m.fromBufferAttribute(l.ROTATION, y), l.SCALE && v.fromBufferAttribute(l.SCALE, y), x.setMatrixAt(y, g.compose(p, m, v));
        for (const y in l)
          if (y === "_COLOR_0") {
            const R = l[y];
            x.instanceColor = new ql(R.array, R.itemSize, R.normalized);
          } else y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && _.geometry.setAttribute(y, l[y]);
        tt.prototype.copy.call(x, _), this.parser.assignFinalMaterial(x), d.push(x);
      }
      return h.isGroup ? (h.clear(), h.add(...d), h) : d[0];
    }));
  }
}
const cd = "glTF", gr = 12, Hu = { JSON: 1313821514, BIN: 5130562 };
class CM {
  constructor(e) {
    this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, gr), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== cd)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - gr, s = new DataView(e, gr);
    let o = 0;
    for (; o < i; ) {
      const a = s.getUint32(o, !0);
      o += 4;
      const l = s.getUint32(o, !0);
      if (o += 4, l === Hu.JSON) {
        const c = new Uint8Array(e, gr + o, a);
        this.content = n.decode(c);
      } else if (l === Hu.BIN) {
        const c = gr + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class PM {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const h in o) {
      const u = Ql[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = Ql[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const f = n.accessors[e.attributes[h]], d = Us[f.componentType];
        c[u] = d.name, l[u] = f.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u, f) {
        i.decodeDracoFile(h, function(d) {
          for (const _ in d.attributes) {
            const g = d.attributes[_], p = l[_];
            p !== void 0 && (g.normalized = p);
          }
          u(d);
        }, a, c, Dt, f);
      });
    });
  }
}
class LM {
  constructor() {
    this.name = ze.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class DM {
  constructor() {
    this.name = ze.KHR_MESH_QUANTIZATION;
  }
}
class hd extends Yr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let o = 0; o !== i; o++)
      t[o] = n[s + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h = i - t, u = (n - t) / h, f = u * u, d = f * u, _ = e * c, g = _ - c, p = -2 * d + 3 * f, m = d - f, v = 1 - p, x = m - f + u;
    for (let y = 0; y !== a; y++) {
      const R = o[g + y + a], A = o[g + y + l] * h, b = o[_ + y + a], C = o[_ + y] * h;
      s[y] = v * R + x * A + p * b + m * C;
    }
    return s;
  }
}
const IM = new Fn();
class NM extends hd {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return IM.fromArray(s).normalize().toArray(s), s;
  }
}
const mn = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, Us = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Vu = {
  9728: Yt,
  9729: an,
  9984: gf,
  9985: Do,
  9986: xr,
  9987: ti
}, Gu = {
  33071: Ti,
  33648: Go,
  10497: Hs
}, Qa = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Ql = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, yi = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, UM = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Dr,
  STEP: Lr
}, el = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function OM(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new zc({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: oi
  })), r.DefaultMaterial;
}
function Hi(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Jn(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function FM(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const o = [], a = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const f = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      o.push(f);
    }
    if (i) {
      const f = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      a.push(f);
    }
    if (s) {
      const f = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], u = c[1], f = c[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = f), r.morphTargetsRelative = !0, r;
  });
}
function BM(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function kM(r) {
  let e;
  const t = r.extensions && r.extensions[ze.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + tl(t.attributes) : e = r.indices + ":" + tl(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + tl(r.targets[n]);
  return e;
}
function tl(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function ec(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function zM(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const HM = new Ue();
class VM {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new hM(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, s = !1, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const l = a.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, s = a.indexOf("Firefox") > -1, o = s ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || s && o < 98 ? this.textureLoader = new rd(this.options.manager) : this.textureLoader = new Gy(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Fr(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][i.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Hi(s, a, i), Jn(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        for (const l of a.scenes)
          l.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const o = t[i].joints;
      for (let a = 0, l = o.length; a < l; a++)
        e[o[a]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, h] of o.children.entries())
        s(h, a.children[c]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, o) {
      n.load(Ar.resolveURL(t.uri, i.path), s, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = Qa[i.type], a = Us[i.componentType], l = i.normalized === !0, c = new a(i.count * o);
      return Promise.resolve(new Pt(c, o, l));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(o) {
      const a = o[0], l = Qa[i.type], c = Us[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, f = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === !0;
      let g, p;
      if (d && d !== u) {
        const m = Math.floor(f / d), v = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + m + ":" + i.count;
        let x = t.cache.get(v);
        x || (g = new c(a, m * d, i.count * d / h), x = new Hv(g, d / h), t.cache.add(v, x)), p = new Pc(x, l, f % d / h, _);
      } else
        a === null ? g = new c(i.count * l) : g = new c(a, f, i.count * l), p = new Pt(g, l, _);
      if (i.sparse !== void 0) {
        const m = Qa.SCALAR, v = Us[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, y = i.sparse.values.byteOffset || 0, R = new v(o[1], x, i.sparse.count * m), A = new c(o[2], y, i.sparse.count * l);
        a !== null && (p = new Pt(p.array.slice(), p.itemSize, p.normalized));
        for (let b = 0, C = R.length; b < C; b++) {
          const S = R[b];
          if (p.setX(S, A[b * l]), l >= 2 && p.setY(S, A[b * l + 1]), l >= 3 && p.setZ(S, A[b * l + 2]), l >= 4 && p.setW(S, A[b * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return p;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, o = t.images[s];
    let a = this.textureLoader;
    if (o.uri) {
      const l = n.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, s, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, o = s.textures[e], a = s.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri);
      const f = (s.samplers || {})[o.sampler] || {};
      return h.magFilter = Vu[f.magFilter] || an, h.minFilter = Vu[f.minFilter] || ti, h.wrapS = Gu[f.wrapS] || Hs, h.wrapT = Gu[f.wrapT] || Hs, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = !1;
    if (o.bufferView !== void 0)
      l = n.getDependency("bufferView", o.bufferView).then(function(u) {
        c = !0;
        const f = new Blob([u], { type: o.mimeType });
        return l = a.createObjectURL(f), l;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(f, d) {
        let _ = f;
        t.isImageBitmapLoader === !0 && (_ = function(g) {
          const p = new Ct(g);
          p.needsUpdate = !0, f(p);
        }), t.load(Ar.resolveURL(u, s.path), _, void 0, d);
      });
    }).then(function(u) {
      return c === !0 && a.revokeObjectURL(l), Jn(u, o), u.userData.mimeType = o.mimeType || zM(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), s.extensions[ze.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = s.associations.get(o);
          o = s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), s.associations.set(o, l);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new qf(), Un.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Dc(), Un.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (i || s || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), s && (l.vertexColors = !0), o && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return zc;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let o;
    const a = {}, l = s.extensions || {}, c = [];
    if (l[ze.KHR_MATERIALS_UNLIT]) {
      const u = i[ze.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), c.push(u.extendParams(a, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (a.color = new Se(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const f = u.baseColorFactor;
        a.color.setRGB(f[0], f[1], f[2], Dt), a.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, Tt)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, a);
      })));
    }
    s.doubleSided === !0 && (a.side = Ln);
    const h = s.alphaMode || el.OPAQUE;
    if (h === el.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === el.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && o !== wn && (c.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new te(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && o !== wn && (c.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && o !== wn) {
      const u = s.emissiveFactor;
      a.emissive = new Se().setRGB(u[0], u[1], u[2], Dt);
    }
    return s.emissiveTexture !== void 0 && o !== wn && c.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Tt)), Promise.all(c).then(function() {
      const u = new o(a);
      return s.name && (u.name = s.name), Jn(u, s), t.associations.set(u, { materials: e }), s.extensions && Hi(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(a) {
      return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return Wu(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = kM(c), u = i[h];
      if (u)
        o.push(u.promise);
      else {
        let f;
        c.extensions && c.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? f = s(c) : f = Wu(new qt(), c, t), i[h] = { primitive: c, promise: f }, o.push(f);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], o = s.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const h = o[l].material === void 0 ? OM(this.cache) : this.getDependency("material", o[l].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let d = 0, _ = h.length; d < _; d++) {
        const g = h[d], p = o[d];
        let m;
        const v = c[d];
        if (p.mode === mn.TRIANGLES || p.mode === mn.TRIANGLE_STRIP || p.mode === mn.TRIANGLE_FAN || p.mode === void 0)
          m = s.isSkinnedMesh === !0 ? new Gv(g, v) : new kt(g, v), m.isSkinnedMesh === !0 && m.normalizeSkinWeights(), p.mode === mn.TRIANGLE_STRIP ? m.geometry = zu(m.geometry, Af) : p.mode === mn.TRIANGLE_FAN && (m.geometry = zu(m.geometry, Wl));
        else if (p.mode === mn.LINES)
          m = new Yf(g, v);
        else if (p.mode === mn.LINE_STRIP)
          m = new Ic(g, v);
        else if (p.mode === mn.LINE_LOOP)
          m = new qv(g, v);
        else if (p.mode === mn.POINTS)
          m = new Kv(g, v);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && BM(m, s), m.name = t.createUniqueName(s.name || "mesh_" + e), Jn(m, s), p.extensions && Hi(i, m, p), t.assignFinalMaterial(m), u.push(m);
      }
      for (let d = 0, _ = u.length; d < _; d++)
        t.associations.set(u[d], {
          meshes: e,
          primitives: d
        });
      if (u.length === 1)
        return s.extensions && Hi(i, u[0], s), u[0];
      const f = new ii();
      s.extensions && Hi(i, f, s), t.associations.set(f, { meshes: e });
      for (let d = 0, _ = u.length; d < _; d++)
        f.add(u[d]);
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Wt(Cf.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new la(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Jn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), o = i, a = [], l = [];
      for (let c = 0, h = o.length; c < h; c++) {
        const u = o[c];
        if (u) {
          a.push(u);
          const f = new Ue();
          s !== null && f.fromArray(s.array, c * 16), l.push(f);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Lc(a, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], h = [];
    for (let u = 0, f = i.channels.length; u < f; u++) {
      const d = i.channels[u], _ = i.samplers[d.sampler], g = d.target, p = g.node, m = i.parameters !== void 0 ? i.parameters[_.input] : _.input, v = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
      g.node !== void 0 && (o.push(this.getDependency("node", p)), a.push(this.getDependency("accessor", m)), l.push(this.getDependency("accessor", v)), c.push(_), h.push(g));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h)
    ]).then(function(u) {
      const f = u[0], d = u[1], _ = u[2], g = u[3], p = u[4], m = [];
      for (let v = 0, x = f.length; v < x; v++) {
        const y = f[v], R = d[v], A = _[v], b = g[v], C = p[v];
        if (y === void 0) continue;
        y.updateMatrix && y.updateMatrix();
        const S = n._createAnimationTracks(y, R, A, b, C);
        if (S)
          for (let T = 0; T < S.length; T++)
            m.push(S[T]);
      }
      return new Ly(s, void 0, m);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const o = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = i.weights[l];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let c = 0, h = a.length; c < h; c++)
      o.push(n.getDependency("node", a[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(o),
      l
    ]).then(function(c) {
      const h = c[0], u = c[1], f = c[2];
      f !== null && h.traverse(function(d) {
        d.isSkinnedMesh && d.bind(f, HM);
      });
      for (let d = 0, _ = u.length; d < _; d++)
        h.add(u[d]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], o = s.name ? i.createUniqueName(s.name) : "", a = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), s.camera !== void 0 && a.push(i.getDependency("camera", s.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, s.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let h;
      if (s.isBone === !0 ? h = new Wf() : c.length > 1 ? h = new ii() : c.length === 1 ? h = c[0] : h = new tt(), h !== c[0])
        for (let u = 0, f = c.length; u < f; u++)
          h.add(c[u]);
      if (s.name && (h.userData.name = s.name, h.name = o), Jn(h, s), s.extensions && Hi(n, h, s), s.matrix !== void 0) {
        const u = new Ue();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new ii();
    n.name && (s.name = i.createUniqueName(n.name)), Jn(s, n), n.extensions && Hi(t, s, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++)
      a.push(i.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++)
        s.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [f, d] of i.associations)
          (f instanceof Un || f instanceof Ct) && u.set(f, d);
        return h.traverse((f) => {
          const d = i.associations.get(f);
          d != null && u.set(f, d);
        }), u;
      };
      return i.associations = c(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    yi[s.path] === yi.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid);
    }) : l.push(a);
    let c;
    switch (yi[s.path]) {
      case yi.weights:
        c = Ys;
        break;
      case yi.rotation:
        c = qs;
        break;
      case yi.position:
      case yi.scale:
        c = Ks;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Ys;
            break;
          case 2:
          case 3:
          default:
            c = Ks;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? UM[i.interpolation] : Dr, u = this._getArrayFromAccessor(n);
    for (let f = 0, d = l.length; f < d; f++) {
      const _ = new c(
        l[f] + "." + yi[s.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), o.push(_);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = ec(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, o = t.length; s < o; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof qs ? NM : hd;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function GM(r, e, t) {
  const n = e.attributes, i = new hi();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new L(l[0], l[1], l[2]),
        new L(c[0], c[1], c[2])
      ), a.normalized) {
        const h = ec(Us[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const a = new L(), l = new L();
    for (let c = 0, h = s.length; c < h; c++) {
      const u = s[c];
      if (u.POSITION !== void 0) {
        const f = t.json.accessors[u.POSITION], d = f.min, _ = f.max;
        if (d !== void 0 && _ !== void 0) {
          if (l.setX(Math.max(Math.abs(d[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(_[2]))), f.normalized) {
            const g = ec(Us[f.componentType]);
            l.multiplyScalar(g);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  r.boundingBox = i;
  const o = new zn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = o;
}
function Wu(r, e, t) {
  const n = e.attributes, i = [];
  function s(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      r.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = Ql[o] || o.toLowerCase();
    a in r.attributes || i.push(s(n[o], a));
  }
  if (e.indices !== void 0 && !r.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      r.setIndex(a);
    });
    i.push(o);
  }
  return Ye.workingColorSpace !== Dt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`), Jn(r, e), GM(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? FM(r, e.targets, t) : r;
  });
}
class WM extends ui {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, o = new Fr(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      const l = s.parse(JSON.parse(a));
      t && t(l);
    }, n, i);
  }
  parse(e) {
    return new XM(e);
  }
}
class XM {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], i = YM(e, t, this.data);
    for (let s = 0, o = i.length; s < o; s++)
      n.push(...i[s].toShapes());
    return n;
  }
}
function YM(r, e, t) {
  const n = Array.from(r), i = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, o = [];
  let a = 0, l = 0;
  for (let c = 0; c < n.length; c++) {
    const h = n[c];
    if (h === `
`)
      a = 0, l -= s;
    else {
      const u = qM(h, i, a, l, t);
      a += u.offsetX, o.push(u.path);
    }
  }
  return o;
}
function qM(r, e, t, n, i) {
  const s = i.glyphs[r] || i.glyphs["?"];
  if (!s) {
    console.error('THREE.Font: character "' + r + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  const o = new sM();
  let a, l, c, h, u, f, d, _;
  if (s.o) {
    const g = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
    for (let p = 0, m = g.length; p < m; )
      switch (g[p++]) {
        case "m":
          a = g[p++] * e + t, l = g[p++] * e + n, o.moveTo(a, l);
          break;
        case "l":
          a = g[p++] * e + t, l = g[p++] * e + n, o.lineTo(a, l);
          break;
        case "q":
          c = g[p++] * e + t, h = g[p++] * e + n, u = g[p++] * e + t, f = g[p++] * e + n, o.quadraticCurveTo(u, f, c, h);
          break;
        case "b":
          c = g[p++] * e + t, h = g[p++] * e + n, u = g[p++] * e + t, f = g[p++] * e + n, d = g[p++] * e + t, _ = g[p++] * e + n, o.bezierCurveTo(u, f, d, _, c, h);
          break;
      }
  }
  return { offsetX: s.ha * e, path: o };
}
const nl = /* @__PURE__ */ new WeakMap();
class KM extends ui {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, i) {
    const s = new Fr(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (o) => {
      this.parse(o, t, i);
    }, n, i);
  }
  parse(e, t, n = () => {
  }) {
    this.decodeDracoFile(e, t, null, null, Tt, n).catch(n);
  }
  decodeDracoFile(e, t, n, i, s = Dt, o = () => {
  }) {
    const a = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: s
    };
    return this.decodeGeometry(e, a).then(t).catch(o);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (nl.has(e)) {
      const l = nl.get(e);
      if (l.key === n)
        return l.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const s = this.workerNextTaskID++, o = e.byteLength, a = this._getWorker(s, o).then((l) => (i = l, new Promise((c, h) => {
      i._callbacks[s] = { resolve: c, reject: h }, i.postMessage({ type: "decode", id: s, taskConfig: t, buffer: e }, [e]);
    }))).then((l) => this._createGeometry(l.geometry));
    return a.catch(() => !0).then(() => {
      i && s && this._releaseTask(i, s);
    }), nl.set(e, {
      key: n,
      promise: a
    }), a;
  }
  _createGeometry(e) {
    const t = new qt();
    e.index && t.setIndex(new Pt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n], s = i.name, o = i.array, a = i.itemSize, l = new Pt(o, a);
      s === "color" && (this._assignVertexColorSpace(l, i.vertexColorSpace), l.normalized = !(o instanceof Float32Array)), t.setAttribute(s, l);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== Tt) return;
    const n = new Se();
    for (let i = 0, s = e.count; i < s; i++)
      n.fromBufferAttribute(e, i).convertSRGBToLinear(), e.setXYZ(i, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new Fr(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, s) => {
      n.load(e, i, void 0, s);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const i = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const s = jM.toString(), o = [
        "/* draco decoder */",
        i,
        "",
        "/* worker */",
        s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([o]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function(s) {
          const o = s.data;
          switch (o.type) {
            case "decode":
              i._callbacks[o.id].resolve(o);
              break;
            case "error":
              i._callbacks[o.id].reject(o);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + o.type + '"');
          }
        }, this.workerPool.push(i);
      } else
        this.workerPool.sort(function(i, s) {
          return i._taskLoad > s._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function jM() {
  let r, e;
  onmessage = function(o) {
    const a = o.data;
    switch (a.type) {
      case "init":
        r = a.decoderConfig, e = new Promise(function(h) {
          r.onModuleLoaded = function(u) {
            h({ draco: u });
          }, DracoDecoderModule(r);
        });
        break;
      case "decode":
        const l = a.buffer, c = a.taskConfig;
        e.then((h) => {
          const u = h.draco, f = new u.Decoder();
          try {
            const d = t(u, f, new Int8Array(l), c), _ = d.attributes.map((g) => g.array.buffer);
            d.index && _.push(d.index.array.buffer), self.postMessage({ type: "decode", id: a.id, geometry: d }, _);
          } catch (d) {
            console.error(d), self.postMessage({ type: "error", id: a.id, error: d.message });
          } finally {
            u.destroy(f);
          }
        });
        break;
    }
  };
  function t(o, a, l, c) {
    const h = c.attributeIDs, u = c.attributeTypes;
    let f, d;
    const _ = a.GetEncodedGeometryType(l);
    if (_ === o.TRIANGULAR_MESH)
      f = new o.Mesh(), d = a.DecodeArrayToMesh(l, l.byteLength, f);
    else if (_ === o.POINT_CLOUD)
      f = new o.PointCloud(), d = a.DecodeArrayToPointCloud(l, l.byteLength, f);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!d.ok() || f.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
    const g = { index: null, attributes: [] };
    for (const p in h) {
      const m = self[u[p]];
      let v, x;
      if (c.useUniqueIDs)
        x = h[p], v = a.GetAttributeByUniqueId(f, x);
      else {
        if (x = a.GetAttributeId(f, o[h[p]]), x === -1) continue;
        v = a.GetAttribute(f, x);
      }
      const y = i(o, a, f, p, m, v);
      p === "color" && (y.vertexColorSpace = c.vertexColorSpace), g.attributes.push(y);
    }
    return _ === o.TRIANGULAR_MESH && (g.index = n(o, a, f)), o.destroy(f), g;
  }
  function n(o, a, l) {
    const h = l.num_faces() * 3, u = h * 4, f = o._malloc(u);
    a.GetTrianglesUInt32Array(l, u, f);
    const d = new Uint32Array(o.HEAPF32.buffer, f, h).slice();
    return o._free(f), { array: d, itemSize: 1 };
  }
  function i(o, a, l, c, h, u) {
    const f = u.num_components(), _ = l.num_points() * f, g = _ * h.BYTES_PER_ELEMENT, p = s(o, h), m = o._malloc(g);
    a.GetAttributeDataArrayForAllPoints(l, u, p, g, m);
    const v = new h(o.HEAPF32.buffer, m, _).slice();
    return o._free(m), {
      name: c,
      array: v,
      itemSize: f
    };
  }
  function s(o, a) {
    switch (a) {
      case Float32Array:
        return o.DT_FLOAT32;
      case Int8Array:
        return o.DT_INT8;
      case Int16Array:
        return o.DT_INT16;
      case Int32Array:
        return o.DT_INT32;
      case Uint8Array:
        return o.DT_UINT8;
      case Uint16Array:
        return o.DT_UINT16;
      case Uint32Array:
        return o.DT_UINT32;
    }
  }
}
class ZM extends ua {
  constructor(t, n) {
    super();
    me(this, "sources");
    me(this, "items");
    me(this, "toLoad");
    me(this, "loaded");
    me(this, "loaders");
    this.sources = t;
    const i = new KM();
    i.setDecoderPath("draco/"), this.items = {}, this.toLoad = this.sources.length, this.loaded = 0, this.loaders = {
      gltfLoader: new cM(n),
      textureLoader: new rd(n),
      cubeTextureLoader: new Oy(n),
      fontLoader: new WM(n)
    }, this.loaders.gltfLoader.setDRACOLoader(i), this.startLoading();
  }
  startLoading() {
    for (const t of this.sources)
      t.type === "GLTF" ? this.loaders.gltfLoader.load(t.path, (n) => {
        this.sourceLoaded(t, n);
      }) : t.type === "TEXTURE" ? this.loaders.textureLoader.load(t.path, (n) => {
        this.sourceLoaded(t, n);
      }) : t.type === "FONT" && this.loaders.fontLoader.load(t.path, (n) => {
        this.sourceLoaded(t, n);
      });
  }
  sourceLoaded(t, n) {
    this.items[t.name] = n, this.loaded++, this.loaded === this.toLoad && this.trigger("ready", null);
  }
}
function Qn(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function ud(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var hn = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, js = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Wc, zt, ot, _n = 1e8, nt = 1 / _n, tc = Math.PI * 2, $M = tc / 4, JM = 0, fd = Math.sqrt, QM = Math.cos, eS = Math.sin, It = function(e) {
  return typeof e == "string";
}, pt = function(e) {
  return typeof e == "function";
}, li = function(e) {
  return typeof e == "number";
}, Xc = function(e) {
  return typeof e > "u";
}, kn = function(e) {
  return typeof e == "object";
}, Zt = function(e) {
  return e !== !1;
}, Yc = function() {
  return typeof window < "u";
}, Po = function(e) {
  return pt(e) || It(e);
}, dd = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ht = Array.isArray, nc = /(?:-?\.?\d|\.)+/gi, pd = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Cs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, il = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, md = /[+-]=-?[.\d]+/, gd = /[^,'"\[\]\s]+/gi, tS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, at, Cn, ic, qc, un = {}, $o = {}, _d, xd = function(e) {
  return ($o = ts(e, un)) && en;
}, Kc = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Br = function(e, t) {
  return !t && console.warn(e);
}, vd = function(e, t) {
  return e && (un[e] = t) && $o && ($o[e] = t) || un;
}, kr = function() {
  return 0;
}, nS = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ko = {
  suppressEvents: !0,
  kill: !1
}, iS = {
  suppressEvents: !0
}, jc = {}, Ci = [], sc = {}, yd, on = {}, sl = {}, Xu = 30, zo = [], Zc = "", $c = function(e) {
  var t = e[0], n, i;
  if (kn(t) || pt(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
    for (i = zo.length; i-- && !zo[i].targetTest(t); )
      ;
    n = zo[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Wd(e[i], n))) || e.splice(i, 1);
  return e;
}, ji = function(e) {
  return e._gsap || $c(xn(e))[0]._gsap;
}, Md = function(e, t, n) {
  return (n = e[t]) && pt(n) ? e[t]() : Xc(n) && e.getAttribute && e.getAttribute(t) || n;
}, $t = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, gt = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Rt = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Os = function(e, t) {
  var n = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
}, sS = function(e, t) {
  for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, Jo = function() {
  var e = Ci.length, t = Ci.slice(0), n, i;
  for (sc = {}, Ci.length = 0, n = 0; n < e; n++)
    i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Sd = function(e, t, n, i) {
  Ci.length && !zt && Jo(), e.render(t, n, zt && t < 0 && (e._initted || e._startAt)), Ci.length && !zt && Jo();
}, Td = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(gd).length < 2 ? t : It(e) ? e.trim() : e;
}, Ed = function(e) {
  return e;
}, yn = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, rS = function(e) {
  return function(t, n) {
    for (var i in n)
      i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
  };
}, ts = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, Yu = function r(e, t) {
  for (var n in t)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = kn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
  return e;
}, Qo = function(e, t) {
  var n = {}, i;
  for (i in e)
    i in t || (n[i] = e[i]);
  return n;
}, wr = function(e) {
  var t = e.parent || at, n = e.keyframes ? rS(Ht(e.keyframes)) : yn;
  if (Zt(e.inherit))
    for (; t; )
      n(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, oS = function(e, t) {
  for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; )
    ;
  return n < 0;
}, bd = function(e, t, n, i, s) {
  var o = e[i], a;
  if (s)
    for (a = t[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
}, fa = function(e, t, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var s = t._prev, o = t._next;
  s ? s._next = o : e[n] === t && (e[n] = o), o ? o._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null;
}, Li = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Zi = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var n = e; n; )
      n._dirty = 1, n = n.parent;
  return e;
}, aS = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, rc = function(e, t, n, i) {
  return e._startAt && (zt ? e._startAt.revert(ko) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, lS = function r(e) {
  return !e || e._ts && r(e.parent);
}, qu = function(e) {
  return e._repeat ? Zs(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Zs = function(e, t) {
  var n = Math.floor(e /= t);
  return e && n === e ? n - 1 : n;
}, ea = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, da = function(e) {
  return e._end = Rt(e._start + (e._tDur / Math.abs(e._ts || e._rts || nt) || 0));
}, pa = function(e, t) {
  var n = e._dp;
  return n && n.smoothChildTiming && e._ts && (e._start = Rt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), da(e), n._dirty || Zi(n, e)), e;
}, Ad = function(e, t) {
  var n;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = ea(e.rawTime(), t), (!t._dur || Kr(0, t.totalDuration(), n) - t._tTime > nt) && t.render(n, !0)), Zi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (n = e; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    e._zTime = -nt;
  }
}, In = function(e, t, n, i) {
  return t.parent && Li(t), t._start = Rt((li(n) ? n : n || e !== at ? pn(e, n, t) : e._time) + t._delay), t._end = Rt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), bd(e, t, "_first", "_last", e._sort ? "_start" : 0), oc(t) || (e._recent = t), i || Ad(e, t), e._ts < 0 && pa(e, e._tTime), e;
}, wd = function(e, t) {
  return (un.ScrollTrigger || Kc("scrollTrigger", t)) && un.ScrollTrigger.create(t, e);
}, Rd = function(e, t, n, i, s) {
  if (Qc(e, t, s), !e._initted)
    return 1;
  if (!n && e._pt && !zt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && yd !== ln.frame)
    return Ci.push(e), e._lazy = [s, i], 1;
}, cS = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, oc = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, hS = function(e, t, n, i) {
  var s = e.ratio, o = t < 0 || !t && (!e._start && cS(e) && !(!e._initted && oc(e)) || (e._ts < 0 || e._dp._ts < 0) && !oc(e)) ? 0 : 1, a = e._rDelay, l = 0, c, h, u;
  if (a && e._repeat && (l = Kr(0, e._tDur, t), h = Zs(l, a), e._yoyo && h & 1 && (o = 1 - o), h !== Zs(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || zt || i || e._zTime === nt || !t && e._zTime) {
    if (!e._initted && Rd(e, t, i, n, l))
      return;
    for (u = e._zTime, e._zTime = t || (n ? nt : 0), n || (n = t && !u), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(o, c.d), c = c._next;
    t < 0 && rc(e, t, n, !0), e._onUpdate && !n && cn(e, "onUpdate"), l && e._repeat && !n && e.parent && cn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Li(e, 1), !n && !zt && (cn(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, uS = function(e, t, n) {
  var i;
  if (n > t)
    for (i = e._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, $s = function(e, t, n, i) {
  var s = e._repeat, o = Rt(t) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : Rt(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && pa(e, e._tTime = e._tDur * a), e.parent && da(e), n || Zi(e.parent, e), e;
}, Ku = function(e) {
  return e instanceof Xt ? Zi(e) : $s(e, e._dur);
}, fS = {
  _start: 0,
  endTime: kr,
  totalDuration: kr
}, pn = function r(e, t, n) {
  var i = e.labels, s = e._recent || fS, o = e.duration() >= _n ? s.endTime(!1) : e._dur, a, l, c;
  return It(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && n && (l = l / 100 * (Ht(n) ? n[0] : n).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), n) + l : o + l)) : t == null ? o : +t;
}, Rr = function(e, t, n) {
  var i = li(t[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
  if (i && (o.duration = t[1]), o.parent = n, e) {
    for (a = o, l = n; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = Zt(l.vars.inherit) && l.parent;
    o.immediateRender = Zt(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return new yt(t[0], o, t[s + 1]);
}, Ii = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Kr = function(e, t, n) {
  return n < e ? e : n > t ? t : n;
}, Bt = function(e, t) {
  return !It(e) || !(t = tS.exec(e)) ? "" : t[1];
}, dS = function(e, t, n) {
  return Ii(n, function(i) {
    return Kr(e, t, i);
  });
}, ac = [].slice, Cd = function(e, t) {
  return e && kn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && kn(e[0])) && !e.nodeType && e !== Cn;
}, pS = function(e, t, n) {
  return n === void 0 && (n = []), e.forEach(function(i) {
    var s;
    return It(i) && !t || Cd(i, 1) ? (s = n).push.apply(s, xn(i)) : n.push(i);
  }) || n;
}, xn = function(e, t, n) {
  return ot && !t && ot.selector ? ot.selector(e) : It(e) && !n && (ic || !Js()) ? ac.call((t || qc).querySelectorAll(e), 0) : Ht(e) ? pS(e, n) : Cd(e) ? ac.call(e, 0) : e ? [e] : [];
}, lc = function(e) {
  return e = xn(e)[0] || Br("Invalid scope") || {}, function(t) {
    var n = e.current || e.nativeElement || e;
    return xn(t, n.querySelectorAll ? n : n === e ? Br("Invalid scope") || qc.createElement("div") : e);
  };
}, Pd = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Ld = function(e) {
  if (pt(e))
    return e;
  var t = kn(e) ? e : {
    each: e
  }, n = $i(t.ease), i = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, c = t.axis, h = i, u = i;
  return It(i) ? h = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (h = i[0], u = i[1]), function(f, d, _) {
    var g = (_ || t).length, p = o[g], m, v, x, y, R, A, b, C, S;
    if (!p) {
      if (S = t.grid === "auto" ? 0 : (t.grid || [1, _n])[1], !S) {
        for (b = -_n; b < (b = _[S++].getBoundingClientRect().left) && S < g; )
          ;
        S < g && S--;
      }
      for (p = o[g] = [], m = l ? Math.min(S, g) * h - 0.5 : i % S, v = S === _n ? 0 : l ? g * u / S - 0.5 : i / S | 0, b = 0, C = _n, A = 0; A < g; A++)
        x = A % S - m, y = v - (A / S | 0), p[A] = R = c ? Math.abs(c === "y" ? y : x) : fd(x * x + y * y), R > b && (b = R), R < C && (C = R);
      i === "random" && Pd(p), p.max = b - C, p.min = C, p.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (S > g ? g - 1 : c ? c === "y" ? g / S : S : Math.max(S, g / S)) || 0) * (i === "edges" ? -1 : 1), p.b = g < 0 ? s - g : s, p.u = Bt(t.amount || t.each) || 0, n = n && g < 0 ? Hd(n) : n;
    }
    return g = (p[f] - p.min) / p.max || 0, Rt(p.b + (n ? n(g) : g) * p.v) + p.u;
  };
}, cc = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(n) {
    var i = Rt(Math.round(parseFloat(n) / e) * e * t);
    return (i - i % 1) / t + (li(n) ? 0 : Bt(n));
  };
}, Dd = function(e, t) {
  var n = Ht(e), i, s;
  return !n && kn(e) && (i = n = e.radius || _n, e.values ? (e = xn(e.values), (s = !li(e[0])) && (i *= i)) : e = cc(e.increment)), Ii(t, n ? pt(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= i ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = _n, h = 0, u = e.length, f, d; u--; )
      s ? (f = e[u].x - a, d = e[u].y - l, f = f * f + d * d) : f = Math.abs(e[u] - a), f < c && (c = f, h = u);
    return h = !i || c <= i ? e[h] : o, s || h === o || li(o) ? h : h + Bt(o);
  } : cc(e));
}, Id = function(e, t, n, i) {
  return Ii(Ht(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
    return Ht(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
  });
}, mS = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    return t.reduce(function(s, o) {
      return o(s);
    }, i);
  };
}, gS = function(e, t) {
  return function(n) {
    return e(parseFloat(n)) + (t || Bt(n));
  };
}, _S = function(e, t, n) {
  return Ud(e, t, 0, 1, n);
}, Nd = function(e, t, n) {
  return Ii(n, function(i) {
    return e[~~t(i)];
  });
}, xS = function r(e, t, n) {
  var i = t - e;
  return Ht(e) ? Nd(e, r(0, e.length), t) : Ii(n, function(s) {
    return (i + (s - e) % i) % i + e;
  });
}, vS = function r(e, t, n) {
  var i = t - e, s = i * 2;
  return Ht(e) ? Nd(e, r(0, e.length - 1), t) : Ii(n, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o);
  });
}, zr = function(e) {
  for (var t = 0, n = "", i, s, o, a; ~(i = e.indexOf("random(", t)); )
    o = e.indexOf(")", i), a = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(a ? gd : nc), n += e.substr(t, i - t) + Id(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
  return n + e.substr(t, e.length - t);
}, Ud = function(e, t, n, i, s) {
  var o = t - e, a = i - n;
  return Ii(s, function(l) {
    return n + ((l - e) / o * a || 0);
  });
}, yS = function r(e, t, n, i) {
  var s = isNaN(e + t) ? 0 : function(d) {
    return (1 - d) * e + d * t;
  };
  if (!s) {
    var o = It(e), a = {}, l, c, h, u, f;
    if (n === !0 && (i = 1) && (n = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Ht(e) && !Ht(t)) {
      for (h = [], u = e.length, f = u - 2, c = 1; c < u; c++)
        h.push(r(e[c - 1], e[c]));
      u--, s = function(_) {
        _ *= u;
        var g = Math.min(f, ~~_);
        return h[g](_ - g);
      }, n = t;
    } else i || (e = ts(Ht(e) ? [] : {}, e));
    if (!h) {
      for (l in t)
        Jc.call(a, e, l, "get", t[l]);
      s = function(_) {
        return nh(_, a) || (o ? e.p : e);
      };
    }
  }
  return Ii(n, s);
}, ju = function(e, t, n) {
  var i = e.labels, s = _n, o, a, l;
  for (o in i)
    a = i[o] - t, a < 0 == !!n && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, cn = function(e, t, n) {
  var i = e.vars, s = i[t], o = ot, a = e._ctx, l, c, h;
  if (s)
    return l = i[t + "Params"], c = i.callbackScope || e, n && Ci.length && Jo(), a && (ot = a), h = l ? s.apply(c, l) : s.call(c), ot = o, h;
}, yr = function(e) {
  return Li(e), e.scrollTrigger && e.scrollTrigger.kill(!!zt), e.progress() < 1 && cn(e, "onInterrupt"), e;
}, Ps, Od = [], Fd = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Yc() || e.headless) {
      var t = e.name, n = pt(e), i = t && !n && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: kr,
        render: nh,
        add: Jc,
        kill: OS,
        modifier: US,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: th,
        aliases: {},
        register: 0
      };
      if (Js(), e !== i) {
        if (on[t])
          return;
        yn(i, yn(Qo(e, s), o)), ts(i.prototype, ts(s, Qo(e, o))), on[i.prop = t] = i, e.targetTest && (zo.push(i), jc[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      vd(t, i), e.register && e.register(en, i, Jt);
    } else
      Od.push(e);
}, et = 255, Mr = {
  aqua: [0, et, et],
  lime: [0, et, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, et],
  navy: [0, 0, 128],
  white: [et, et, et],
  olive: [128, 128, 0],
  yellow: [et, et, 0],
  orange: [et, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [et, 0, 0],
  pink: [et, 192, 203],
  cyan: [0, et, et],
  transparent: [et, et, et, 0]
}, rl = function(e, t, n) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * et + 0.5 | 0;
}, Bd = function(e, t, n) {
  var i = e ? li(e) ? [e >> 16, e >> 8 & et, e & et] : 0 : Mr.black, s, o, a, l, c, h, u, f, d, _;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Mr[e])
      i = Mr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & et, i & et, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & et, e & et];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = _ = e.match(nc), !t)
        l = +i[0] % 360 / 360, c = +i[1] / 100, h = +i[2] / 100, o = h <= 0.5 ? h * (c + 1) : h + c - h * c, s = h * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = rl(l + 1 / 3, s, o), i[1] = rl(l, s, o), i[2] = rl(l - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return i = e.match(pd), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(nc) || Mr.transparent;
    i = i.map(Number);
  }
  return t && !_ && (s = i[0] / et, o = i[1] / et, a = i[2] / et, u = Math.max(s, o, a), f = Math.min(s, o, a), h = (u + f) / 2, u === f ? l = c = 0 : (d = u - f, c = h > 0.5 ? d / (2 - u - f) : d / (u + f), l = u === s ? (o - a) / d + (o < a ? 6 : 0) : u === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(h * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, kd = function(e) {
  var t = [], n = [], i = -1;
  return e.split(Pi).forEach(function(s) {
    var o = s.match(Cs) || [];
    t.push.apply(t, o), n.push(i += o.length + 1);
  }), t.c = n, t;
}, Zu = function(e, t, n) {
  var i = "", s = (e + i).match(Pi), o = t ? "hsla(" : "rgba(", a = 0, l, c, h, u;
  if (!s)
    return e;
  if (s = s.map(function(f) {
    return (f = Bd(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), n && (h = kd(e), l = n.c, l.join(i) !== h.c.join(i)))
    for (c = e.replace(Pi, "1").split(Cs), u = c.length - 1; a < u; a++)
      i += c[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (h.length ? h : s.length ? s : n).shift());
  if (!c)
    for (c = e.split(Pi), u = c.length - 1; a < u; a++)
      i += c[a] + s[a];
  return i + c[u];
}, Pi = function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Mr)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
}(), MS = /hsl[a]?\(/, zd = function(e) {
  var t = e.join(" "), n;
  if (Pi.lastIndex = 0, Pi.test(t))
    return n = MS.test(t), e[1] = Zu(e[1], n), e[0] = Zu(e[0], n, kd(e[1])), !0;
}, Hr, ln = function() {
  var r = Date.now, e = 500, t = 33, n = r(), i = n, s = 1e3 / 240, o = s, a = [], l, c, h, u, f, d, _ = function g(p) {
    var m = r() - i, v = p === !0, x, y, R, A;
    if ((m > e || m < 0) && (n += m - t), i += m, R = i - n, x = R - o, (x > 0 || v) && (A = ++u.frame, f = R - u.time * 1e3, u.time = R = R / 1e3, o += x + (x >= s ? 4 : s - x), y = 1), v || (l = c(g)), y)
      for (d = 0; d < a.length; d++)
        a[d](R, f, A, p);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(p) {
      return f / (1e3 / (p || 60));
    },
    wake: function() {
      _d && (!ic && Yc() && (Cn = ic = window, qc = Cn.document || {}, un.gsap = en, (Cn.gsapVersions || (Cn.gsapVersions = [])).push(en.version), xd($o || Cn.GreenSockGlobals || !Cn.gsap && Cn || {}), Od.forEach(Fd)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), c = h || function(p) {
        return setTimeout(p, o - u.time * 1e3 + 1 | 0);
      }, Hr = 1, _(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(l), Hr = 0, c = kr;
    },
    lagSmoothing: function(p, m) {
      e = p || 1 / 0, t = Math.min(m || 33, e);
    },
    fps: function(p) {
      s = 1e3 / (p || 240), o = u.time * 1e3 + s;
    },
    add: function(p, m, v) {
      var x = m ? function(y, R, A, b) {
        p(y, R, A, b), u.remove(x);
      } : p;
      return u.remove(p), a[v ? "unshift" : "push"](x), Js(), x;
    },
    remove: function(p, m) {
      ~(m = a.indexOf(p)) && a.splice(m, 1) && d >= m && d--;
    },
    _listeners: a
  }, u;
}(), Js = function() {
  return !Hr && ln.wake();
}, Ve = {}, SS = /^[\d.\-M][\d.\-,\s]/, TS = /["']/g, ES = function(e) {
  for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, o = n.length, a, l, c; s < o; s++)
    l = n[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[i] = isNaN(c) ? c.replace(TS, "").trim() : +c, i = l.substr(a + 1).trim();
  return t;
}, bS = function(e) {
  var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
}, AS = function(e) {
  var t = (e + "").split("("), n = Ve[t[0]];
  return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [ES(t[1])] : bS(e).split(",").map(Td)) : Ve._CE && SS.test(e) ? Ve._CE("", e) : n;
}, Hd = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Vd = function r(e, t) {
  for (var n = e._first, i; n; )
    n instanceof Xt ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
}, $i = function(e, t) {
  return e && (pt(e) ? e : Ve[e] || AS(e)) || t;
}, ss = function(e, t, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: n,
    easeInOut: i
  }, o;
  return $t(e, function(a) {
    Ve[a] = un[a] = s, Ve[o = a.toLowerCase()] = n;
    for (var l in s)
      Ve[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ve[a + "." + l] = s[l];
  }), s;
}, Gd = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, ol = function r(e, t, n) {
  var i = t >= 1 ? t : 1, s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / tc * (Math.asin(1 / i) || 0), a = function(h) {
    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * eS((h - o) * s) + 1;
  }, l = e === "out" ? a : e === "in" ? function(c) {
    return 1 - a(1 - c);
  } : Gd(a);
  return s = tc / s, l.config = function(c, h) {
    return r(e, c, h);
  }, l;
}, al = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var n = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, i = e === "out" ? n : e === "in" ? function(s) {
    return 1 - n(1 - s);
  } : Gd(n);
  return i.config = function(s) {
    return r(e, s);
  }, i;
};
$t("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  ss(r + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, t);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
  });
});
Ve.Linear.easeNone = Ve.none = Ve.Linear.easeIn;
ss("Elastic", ol("in"), ol("out"), ol());
(function(r, e) {
  var t = 1 / e, n = 2 * t, i = 2.5 * t, s = function(a) {
    return a < t ? r * a * a : a < n ? r * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? r * (a -= 2.25 / e) * a + 0.9375 : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  ss("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
ss("Expo", function(r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
ss("Circ", function(r) {
  return -(fd(1 - r * r) - 1);
});
ss("Sine", function(r) {
  return r === 1 ? 1 : -QM(r * $M) + 1;
});
ss("Back", al("in"), al("out"), al());
Ve.SteppedEase = Ve.steps = un.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e, i = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - nt;
    return function(a) {
      return ((i * Kr(0, o, a) | 0) + s) * n;
    };
  }
};
js.ease = Ve["quad.out"];
$t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return Zc += r + "," + r + "Params,";
});
var Wd = function(e, t) {
  this.id = JM++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Md, this.set = t ? t.getSetter : th;
}, Vr = /* @__PURE__ */ function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, $s(this, +t.duration, 1, 1), this.data = t.data, ot && (this._ctx = ot, ot.data.push(this)), Hr || ln.wake();
  }
  var e = r.prototype;
  return e.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, e.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, $s(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(n, i) {
    if (Js(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (pa(this, n), !s._dp || s.parent || Ad(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && In(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === nt || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Sd(this, n, i)), this;
  }, e.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + qu(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, e.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + qu(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(n, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? Zs(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(n, i) {
    if (!arguments.length)
      return this._rts === -nt ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var s = this.parent && this._ts ? ea(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -nt ? 0 : this._rts, this.totalTime(Kr(-Math.abs(this._delay), this._tDur, s), i !== !1), da(this), aS(this);
  }, e.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Js(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== nt && (this._tTime -= nt)))), this) : this._ps;
  }, e.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && In(i, this, n - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(n) {
    return this._start + (Zt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ea(i.rawTime(n), this) : this._tTime : this._tTime;
  }, e.revert = function(n) {
    n === void 0 && (n = iS);
    var i = zt;
    return zt = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), zt = i, this;
  }, e.globalTime = function(n) {
    for (var i = this, s = arguments.length ? n : i.rawTime(); i; )
      s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : s;
  }, e.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, Ku(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, Ku(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, e.seek = function(n, i) {
    return this.totalTime(pn(this, n), Zt(i));
  }, e.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, Zt(i));
  }, e.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -nt : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -nt, this;
  }, e.isActive = function() {
    var n = this.parent || this._dp, i = this._start, s;
    return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - nt);
  }, e.eventCallback = function(n, i, s) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[n] = i, s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this) : o[n];
  }, e.then = function(n) {
    var i = this;
    return new Promise(function(s) {
      var o = pt(n) ? n : Ed, a = function() {
        var c = i.then;
        i.then = null, pt(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), s(o), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, e.kill = function() {
    yr(this);
  }, r;
}();
yn(Vr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -nt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Xt = /* @__PURE__ */ function(r) {
  ud(e, r);
  function e(n, i) {
    var s;
    return n === void 0 && (n = {}), s = r.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = Zt(n.sortChildren), at && In(n.parent || at, Qn(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), n.scrollTrigger && wd(Qn(s), n.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(i, s, o) {
    return Rr(0, arguments, this), this;
  }, t.from = function(i, s, o) {
    return Rr(1, arguments, this), this;
  }, t.fromTo = function(i, s, o, a) {
    return Rr(2, arguments, this), this;
  }, t.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, wr(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new yt(i, s, pn(this, o), 1), this;
  }, t.call = function(i, s, o) {
    return In(this, yt.delayedCall(0, i, s), o);
  }, t.staggerTo = function(i, s, o, a, l, c, h) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = h, o.parent = this, new yt(i, o, pn(this, l)), this;
  }, t.staggerFrom = function(i, s, o, a, l, c, h) {
    return o.runBackwards = 1, wr(o).immediateRender = Zt(o.immediateRender), this.staggerTo(i, s, o, a, l, c, h);
  }, t.staggerFromTo = function(i, s, o, a, l, c, h, u) {
    return a.startAt = o, wr(a).immediateRender = Zt(a.immediateRender), this.staggerTo(i, s, a, l, c, h, u);
  }, t.render = function(i, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, h = i <= 0 ? 0 : Rt(i), u = this._zTime < 0 != i < 0 && (this._initted || !c), f, d, _, g, p, m, v, x, y, R, A, b;
    if (this !== at && h > l && i >= 0 && (h = l), h !== this._tTime || o || u) {
      if (a !== this._time && c && (h += this._time - a, i += this._time - a), f = h, y = this._start, x = this._ts, m = !x, u && (c || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (A = this._yoyo, p = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(p * 100 + i, s, o);
        if (f = Rt(h % p), h === l ? (g = this._repeat, f = c) : (g = ~~(h / p), g && g === h / p && (f = c, g--), f > c && (f = c)), R = Zs(this._tTime, p), !a && this._tTime && R !== g && this._tTime - R * p - this._dur <= 0 && (R = g), A && g & 1 && (f = c - f, b = 1), g !== R && !this._lock) {
          var C = A && R & 1, S = C === (A && g & 1);
          if (g < R && (C = !C), a = C ? 0 : h % c ? c : h, this._lock = 1, this.render(a || (b ? 0 : Rt(g * p)), s, !c)._lock = 0, this._tTime = h, !s && this.parent && cn(this, "onRepeat"), this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1), a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, S && (this._lock = 2, a = C ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !b && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
          Vd(this, b);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = uS(this, Rt(a), Rt(f)), v && (h -= f - (f = v._start))), this._tTime = h, this._time = f, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && f && !s && !g && (cn(this, "onStart"), this._tTime !== h))
        return this;
      if (f >= a && i >= 0)
        for (d = this._first; d; ) {
          if (_ = d._next, (d._act || f >= d._start) && d._ts && v !== d) {
            if (d.parent !== this)
              return this.render(i, s, o);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, o), f !== this._time || !this._ts && !m) {
              v = 0, _ && (h += this._zTime = -nt);
              break;
            }
          }
          d = _;
        }
      else {
        d = this._last;
        for (var T = i < 0 ? i : f; d; ) {
          if (_ = d._prev, (d._act || T <= d._end) && d._ts && v !== d) {
            if (d.parent !== this)
              return this.render(i, s, o);
            if (d.render(d._ts > 0 ? (T - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (T - d._start) * d._ts, s, o || zt && (d._initted || d._startAt)), f !== this._time || !this._ts && !m) {
              v = 0, _ && (h += this._zTime = T ? -nt : nt);
              break;
            }
          }
          d = _;
        }
      }
      if (v && !s && (this.pause(), v.render(f >= a ? 0 : -nt)._zTime = f >= a ? 1 : -1, this._ts))
        return this._start = y, da(this), this.render(i, s, o);
      this._onUpdate && !s && cn(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && a) && (y === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && Li(this, 1), !s && !(i < 0 && !a) && (h || a || !l) && (cn(this, h === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, s) {
    var o = this;
    if (li(s) || (s = pn(this, s, i)), !(i instanceof Vr)) {
      if (Ht(i))
        return i.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (It(i))
        return this.addLabel(i, s);
      if (pt(i))
        i = yt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? In(this, i, s) : this;
  }, t.getChildren = function(i, s, o, a) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -_n);
    for (var l = [], c = this._first; c; )
      c._start >= a && (c instanceof yt ? s && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, o)))), c = c._next;
    return l;
  }, t.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === i)
        return s[o];
  }, t.remove = function(i) {
    return It(i) ? this.removeLabel(i) : pt(i) ? this.killTweensOf(i) : (fa(this, i), i === this._recent && (this._recent = this._last), Zi(this));
  }, t.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Rt(ln.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, s) {
    return this.labels[i] = pn(this, s), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, s, o) {
    var a = yt.delayedCall(0, s || kr, o);
    return a.data = "isPause", this._hasPause = 1, In(this, a, pn(this, i));
  }, t.removePause = function(i) {
    var s = this._first;
    for (i = pn(this, i); s; )
      s._start === i && s.data === "isPause" && Li(s), s = s._next;
  }, t.killTweensOf = function(i, s, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      bi !== a[l] && a[l].kill(i, s);
    return this;
  }, t.getTweensOf = function(i, s) {
    for (var o = [], a = xn(i), l = this._first, c = li(s), h; l; )
      l instanceof yt ? sS(l._targets, a) && (c ? (!bi || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (h = l.getTweensOf(a, s)).length && o.push.apply(o, h), l = l._next;
    return o;
  }, t.tweenTo = function(i, s) {
    s = s || {};
    var o = this, a = pn(o, i), l = s, c = l.startAt, h = l.onStart, u = l.onStartParams, f = l.immediateRender, d, _ = yt.to(o, yn({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || nt,
      onStart: function() {
        if (o.pause(), !d) {
          var p = s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
          _._dur !== p && $s(_, p, 0, 1).render(_._time, !0, !0), d = 1;
        }
        h && h.apply(_, u || []);
      }
    }, s));
    return f ? _.render(0) : _;
  }, t.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, yn({
      startAt: {
        time: pn(this, i)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), ju(this, pn(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), ju(this, pn(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + nt);
  }, t.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, c; a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (s)
      for (c in l)
        l[c] >= o && (l[c] += i);
    return Zi(this);
  }, t.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(i), s = s._next;
    return r.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Zi(this);
  }, t.totalDuration = function(i) {
    var s = 0, o = this, a = o._last, l = _n, c, h, u;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (u = o.parent; a; )
        c = a._prev, a._dirty && a.totalDuration(), h = a._start, h > l && o._sort && a._ts && !o._lock ? (o._lock = 1, In(o, a, h - a._delay, 1)._lock = 0) : l = h, h < 0 && a._ts && (s -= h, (!u && !o._dp || u && u.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = c;
      $s(o, o === at && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (at._ts && (Sd(at, ea(i, at)), yd = ln.frame), ln.frame >= Xu) {
      Xu += hn.autoSleep || 120;
      var s = at._first;
      if ((!s || !s._ts) && hn.autoSleep && ln._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || ln.sleep();
      }
    }
  }, e;
}(Vr);
yn(Xt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var wS = function(e, t, n, i, s, o, a) {
  var l = new Jt(this._pt, e, t, 0, 1, Zd, null, s), c = 0, h = 0, u, f, d, _, g, p, m, v;
  for (l.b = n, l.e = i, n += "", i += "", (m = ~i.indexOf("random(")) && (i = zr(i)), o && (v = [n, i], o(v, e, t), n = v[0], i = v[1]), f = n.match(il) || []; u = il.exec(i); )
    _ = u[0], g = i.substring(c, u.index), d ? d = (d + 1) % 5 : g.substr(-5) === "rgba(" && (d = 1), _ !== f[h++] && (p = parseFloat(f[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: g || h === 1 ? g : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: _.charAt(1) === "=" ? Os(p, _) - p : parseFloat(_) - p,
      m: d && d < 4 ? Math.round : 0
    }, c = il.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (md.test(i) || m) && (l.e = 0), this._pt = l, l;
}, Jc = function(e, t, n, i, s, o, a, l, c, h) {
  pt(i) && (i = i(s || 0, e, o));
  var u = e[t], f = n !== "get" ? n : pt(u) ? c ? e[t.indexOf("set") || !pt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u, d = pt(u) ? c ? DS : Kd : eh, _;
  if (It(i) && (~i.indexOf("random(") && (i = zr(i)), i.charAt(1) === "=" && (_ = Os(f, i) + (Bt(f) || 0), (_ || _ === 0) && (i = _))), !h || f !== i || hc)
    return !isNaN(f * i) && i !== "" ? (_ = new Jt(this._pt, e, t, +f || 0, i - (f || 0), typeof u == "boolean" ? NS : jd, 0, d), c && (_.fp = c), a && _.modifier(a, this, e), this._pt = _) : (!u && !(t in e) && Kc(t, i), wS.call(this, e, t, f, i, d, l || hn.stringFilter, c));
}, RS = function(e, t, n, i, s) {
  if (pt(e) && (e = Cr(e, s, t, n, i)), !kn(e) || e.style && e.nodeType || Ht(e) || dd(e))
    return It(e) ? Cr(e, s, t, n, i) : e;
  var o = {}, a;
  for (a in e)
    o[a] = Cr(e[a], s, t, n, i);
  return o;
}, Xd = function(e, t, n, i, s, o) {
  var a, l, c, h;
  if (on[e] && (a = new on[e]()).init(s, a.rawVars ? t[e] : RS(t[e], i, s, o, n), n, i, o) !== !1 && (n._pt = l = new Jt(n._pt, s, e, 0, 1, a.render, a, 0, a.priority), n !== Ps))
    for (c = n._ptLookup[n._targets.indexOf(s)], h = a._props.length; h--; )
      c[a._props[h]] = l;
  return a;
}, bi, hc, Qc = function r(e, t, n) {
  var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, c = i.onUpdate, h = i.runBackwards, u = i.yoyoEase, f = i.keyframes, d = i.autoRevert, _ = e._dur, g = e._startAt, p = e._targets, m = e.parent, v = m && m.data === "nested" ? m.vars.targets : p, x = e._overwrite === "auto" && !Wc, y = e.timeline, R, A, b, C, S, T, D, B, O, X, K, H, j;
  if (y && (!f || !s) && (s = "none"), e._ease = $i(s, js.ease), e._yEase = u ? Hd($i(u === !0 ? s : u, js.ease)) : 0, u && e._yoyo && !e._repeat && (u = e._yEase, e._yEase = e._ease, e._ease = u), e._from = !y && !!i.runBackwards, !y || f && !i.stagger) {
    if (B = p[0] ? ji(p[0]).harness : 0, H = B && i[B.prop], R = Qo(i, jc), g && (g._zTime < 0 && g.progress(1), t < 0 && h && a && !d ? g.render(-1, !0) : g.revert(h && _ ? ko : nS), g._lazy = 0), o) {
      if (Li(e._startAt = yt.set(p, yn({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !g && Zt(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return cn(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (zt || !a && !d) && e._startAt.revert(ko), a && _ && t <= 0 && n <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (h && _ && !g) {
      if (t && (a = !1), b = yn({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !g && Zt(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, R), H && (b[B.prop] = H), Li(e._startAt = yt.set(p, b)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (zt ? e._startAt.revert(ko) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        r(e._startAt, nt, nt);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = _ && Zt(l) || l && !_, A = 0; A < p.length; A++) {
      if (S = p[A], D = S._gsap || $c(p)[A]._gsap, e._ptLookup[A] = X = {}, sc[D.id] && Ci.length && Jo(), K = v === p ? A : v.indexOf(S), B && (O = new B()).init(S, H || R, e, K, v) !== !1 && (e._pt = C = new Jt(e._pt, S, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function(W) {
        X[W] = C;
      }), O.priority && (T = 1)), !B || H)
        for (b in R)
          on[b] && (O = Xd(b, R, e, K, S, v)) ? O.priority && (T = 1) : X[b] = C = Jc.call(e, S, b, "get", R[b], K, v, 0, i.stringFilter);
      e._op && e._op[A] && e.kill(S, e._op[A]), x && e._pt && (bi = e, at.killTweensOf(S, X, e.globalTime(t)), j = !e.parent, bi = 0), e._pt && l && (sc[D.id] = 1);
    }
    T && $d(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !j, f && t <= 0 && y.render(_n, !0, !0);
}, CS = function(e, t, n, i, s, o, a, l) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], h, u, f, d;
  if (!c)
    for (c = e._ptCache[t] = [], f = e._ptLookup, d = e._targets.length; d--; ) {
      if (h = f[d][t], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== t && h.fp !== t; )
          h = h._next;
      if (!h)
        return hc = 1, e.vars[t] = "+=0", Qc(e, a), hc = 0, l ? Br(t + " not eligible for reset") : 1;
      c.push(h);
    }
  for (d = c.length; d--; )
    u = c[d], h = u._pt || u, h.s = (i || i === 0) && !s ? i : h.s + (i || 0) + o * h.c, h.c = n - h.s, u.e && (u.e = gt(n) + Bt(u.e)), u.b && (u.b = h.s + Bt(u.b));
}, PS = function(e, t) {
  var n = e[0] ? ji(e[0]).harness : 0, i = n && n.aliases, s, o, a, l;
  if (!i)
    return t;
  s = ts({}, t);
  for (o in i)
    if (o in s)
      for (l = i[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, LS = function(e, t, n, i) {
  var s = t.ease || i || "power1.inOut", o, a;
  if (Ht(t))
    a = n[e] || (n[e] = []), t.forEach(function(l, c) {
      return a.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (o in t)
      a = n[o] || (n[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: s
      });
}, Cr = function(e, t, n, i, s) {
  return pt(e) ? e.call(t, n, i, s) : It(e) && ~e.indexOf("random(") ? zr(e) : e;
}, Yd = Zc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", qd = {};
$t(Yd + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return qd[r] = 1;
});
var yt = /* @__PURE__ */ function(r) {
  ud(e, r);
  function e(n, i, s, o) {
    var a;
    typeof i == "number" && (s.duration = i, i = s, s = null), a = r.call(this, o ? i : wr(i)) || this;
    var l = a.vars, c = l.duration, h = l.delay, u = l.immediateRender, f = l.stagger, d = l.overwrite, _ = l.keyframes, g = l.defaults, p = l.scrollTrigger, m = l.yoyoEase, v = i.parent || at, x = (Ht(n) || dd(n) ? li(n[0]) : "length" in i) ? [n] : xn(n), y, R, A, b, C, S, T, D;
    if (a._targets = x.length ? $c(x) : Br("GSAP target " + n + " not found. https://gsap.com", !hn.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, _ || f || Po(c) || Po(h)) {
      if (i = a.vars, y = a.timeline = new Xt({
        data: "nested",
        defaults: g || {},
        targets: v && v.data === "nested" ? v.vars.targets : x
      }), y.kill(), y.parent = y._dp = Qn(a), y._start = 0, f || Po(c) || Po(h)) {
        if (b = x.length, T = f && Ld(f), kn(f))
          for (C in f)
            ~Yd.indexOf(C) && (D || (D = {}), D[C] = f[C]);
        for (R = 0; R < b; R++)
          A = Qo(i, qd), A.stagger = 0, m && (A.yoyoEase = m), D && ts(A, D), S = x[R], A.duration = +Cr(c, Qn(a), R, S, x), A.delay = (+Cr(h, Qn(a), R, S, x) || 0) - a._delay, !f && b === 1 && A.delay && (a._delay = h = A.delay, a._start += h, A.delay = 0), y.to(S, A, T ? T(R, S, x) : 0), y._ease = Ve.none;
        y.duration() ? c = h = 0 : a.timeline = 0;
      } else if (_) {
        wr(yn(y.vars.defaults, {
          ease: "none"
        })), y._ease = $i(_.ease || i.ease || "none");
        var B = 0, O, X, K;
        if (Ht(_))
          _.forEach(function(H) {
            return y.to(x, H, ">");
          }), y.duration();
        else {
          A = {};
          for (C in _)
            C === "ease" || C === "easeEach" || LS(C, _[C], A, _.easeEach);
          for (C in A)
            for (O = A[C].sort(function(H, j) {
              return H.t - j.t;
            }), B = 0, R = 0; R < O.length; R++)
              X = O[R], K = {
                ease: X.e,
                duration: (X.t - (R ? O[R - 1].t : 0)) / 100 * c
              }, K[C] = X.v, y.to(x, K, B), B += K.duration;
          y.duration() < c && y.to({}, {
            duration: c - y.duration()
          });
        }
      }
      c || a.duration(c = y.duration());
    } else
      a.timeline = 0;
    return d === !0 && !Wc && (bi = Qn(a), at.killTweensOf(x), bi = 0), In(v, Qn(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (u || !c && !_ && a._start === Rt(v._time) && Zt(u) && lS(Qn(a)) && v.data !== "nested") && (a._tTime = -nt, a.render(Math.max(0, -h) || 0)), p && wd(Qn(a), p), a;
  }
  var t = e.prototype;
  return t.render = function(i, s, o) {
    var a = this._time, l = this._tDur, c = this._dur, h = i < 0, u = i > l - nt && !h ? l : i < nt ? 0 : i, f, d, _, g, p, m, v, x, y;
    if (!c)
      hS(this, i, s, o);
    else if (u !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (f = u, x = this.timeline, this._repeat) {
        if (g = c + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(g * 100 + i, s, o);
        if (f = Rt(u % g), u === l ? (_ = this._repeat, f = c) : (_ = ~~(u / g), _ && _ === Rt(u / g) && (f = c, _--), f > c && (f = c)), m = this._yoyo && _ & 1, m && (y = this._yEase, f = c - f), p = Zs(this._tTime, g), f === a && !o && this._initted && _ === p)
          return this._tTime = u, this;
        _ !== p && (x && this._yEase && Vd(x, m), this.vars.repeatRefresh && !m && !this._lock && this._time !== g && this._initted && (this._lock = o = 1, this.render(Rt(g * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Rd(this, h ? i : f, o, s, u))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== p))
          return this;
        if (c !== this._dur)
          return this.render(i, s, o);
      }
      if (this._tTime = u, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (y || this._ease)(f / c), this._from && (this.ratio = v = 1 - v), f && !a && !s && !_ && (cn(this, "onStart"), this._tTime !== u))
        return this;
      for (d = this._pt; d; )
        d.r(v, d.d), d = d._next;
      x && x.render(i < 0 ? i : x._dur * x._ease(f / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (h && rc(this, i, s, o), cn(this, "onUpdate")), this._repeat && _ !== p && this.vars.onRepeat && !s && this.parent && cn(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (h && !this._onUpdate && rc(this, i, !0, !0), (i || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && Li(this, 1), !s && !(h && !a) && (u || a || m) && (cn(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, s, o, a, l) {
    Hr || ln.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || Qc(this, c), h = this._ease(c / this._dur), CS(this, i, s, o, a, h, c, l) ? this.resetTo(i, s, o, a, 1) : (pa(this, 0), this.parent || bd(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? yr(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, bi && bi.vars.overwrite !== !0)._first || yr(this), this.parent && o !== this.timeline.totalDuration() && $s(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? xn(i) : a, c = this._ptLookup, h = this._pt, u, f, d, _, g, p, m;
    if ((!s || s === "all") && oS(a, l))
      return s === "all" && (this._pt = 0), yr(this);
    for (u = this._op = this._op || [], s !== "all" && (It(s) && (g = {}, $t(s, function(v) {
      return g[v] = 1;
    }), s = g), s = PS(a, s)), m = a.length; m--; )
      if (~l.indexOf(a[m])) {
        f = c[m], s === "all" ? (u[m] = s, _ = f, d = {}) : (d = u[m] = u[m] || {}, _ = s);
        for (g in _)
          p = f && f[g], p && ((!("kill" in p.d) || p.d.kill(g) === !0) && fa(this, p, "_pt"), delete f[g]), d !== "all" && (d[g] = 1);
      }
    return this._initted && !this._pt && h && yr(this), this;
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2]);
  }, e.from = function(i, s) {
    return Rr(1, arguments);
  }, e.delayedCall = function(i, s, o, a) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(i, s, o) {
    return Rr(2, arguments);
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s);
  }, e.killTweensOf = function(i, s, o) {
    return at.killTweensOf(i, s, o);
  }, e;
}(Vr);
yn(yt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
$t("staggerTo,staggerFrom,staggerFromTo", function(r) {
  yt[r] = function() {
    var e = new Xt(), t = ac.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var eh = function(e, t, n) {
  return e[t] = n;
}, Kd = function(e, t, n) {
  return e[t](n);
}, DS = function(e, t, n, i) {
  return e[t](i.fp, n);
}, IS = function(e, t, n) {
  return e.setAttribute(t, n);
}, th = function(e, t) {
  return pt(e[t]) ? Kd : Xc(e[t]) && e.setAttribute ? IS : eh;
}, jd = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, NS = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Zd = function(e, t) {
  var n = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; n; )
      i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, nh = function(e, t) {
  for (var n = t._pt; n; )
    n.r(e, n.d), n = n._next;
}, US = function(e, t, n, i) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === i && s.modifier(e, t, n), s = o;
}, OS = function(e) {
  for (var t = this._pt, n, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? fa(this, t, "_pt") : t.dep || (n = 1), t = i;
  return !n;
}, FS = function(e, t, n, i) {
  i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
}, $d = function(e) {
  for (var t = e._pt, n, i, s, o; t; ) {
    for (n = t._next, i = s; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : o) ? t._prev._next = t : s = t, (t._next = i) ? i._prev = t : o = t, t = n;
  }
  e._pt = s;
}, Jt = /* @__PURE__ */ function() {
  function r(t, n, i, s, o, a, l, c, h) {
    this.t = n, this.s = s, this.c = o, this.p = i, this.r = a || jd, this.d = l || this, this.set = c || eh, this.pr = h || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(n, i, s) {
    this.mSet = this.mSet || this.set, this.set = FS, this.m = n, this.mt = s, this.tween = i;
  }, r;
}();
$t(Zc + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return jc[r] = 1;
});
un.TweenMax = un.TweenLite = yt;
un.TimelineLite = un.TimelineMax = Xt;
at = new Xt({
  sortChildren: !1,
  defaults: js,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
hn.stringFilter = zd;
var Ji = [], Ho = {}, BS = [], $u = 0, kS = 0, ll = function(e) {
  return (Ho[e] || BS).map(function(t) {
    return t();
  });
}, uc = function() {
  var e = Date.now(), t = [];
  e - $u > 2 && (ll("matchMediaInit"), Ji.forEach(function(n) {
    var i = n.queries, s = n.conditions, o, a, l, c;
    for (a in i)
      o = Cn.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, c = 1);
    c && (n.revert(), l && t.push(n));
  }), ll("matchMediaRevert"), t.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), $u = e, ll("matchMedia"));
}, Jd = /* @__PURE__ */ function() {
  function r(t, n) {
    this.selector = n && lc(n), this.data = [], this._r = [], this.isReverted = !1, this.id = kS++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(n, i, s) {
    pt(n) && (s = i, i = n, n = pt);
    var o = this, a = function() {
      var c = ot, h = o.selector, u;
      return c && c !== o && c.data.push(o), s && (o.selector = lc(s)), ot = o, u = i.apply(o, arguments), pt(u) && o._r.push(u), ot = c, o.selector = h, o.isReverted = !1, u;
    };
    return o.last = a, n === pt ? a(o, function(l) {
      return o.add(null, l);
    }) : n ? o[n] = a : a;
  }, e.ignore = function(n) {
    var i = ot;
    ot = null, n(this), ot = i;
  }, e.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof yt && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(n, i) {
    var s = this;
    if (n ? function() {
      for (var a = s.getTweens(), l = s.data.length, c; l--; )
        c = s.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(h) {
          return a.splice(a.indexOf(h), 1);
        }));
      for (a.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, u) {
        return u.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(n);
      }), l = s.data.length; l--; )
        c = s.data[l], c instanceof Xt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof yt) && c.revert && c.revert(n);
      s._r.forEach(function(h) {
        return h(n, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = Ji.length; o--; )
        Ji[o].id === this.id && Ji.splice(o, 1);
  }, e.revert = function(n) {
    this.kill(n || {});
  }, r;
}(), zS = /* @__PURE__ */ function() {
  function r(t) {
    this.contexts = [], this.scope = t, ot && ot.data.push(this);
  }
  var e = r.prototype;
  return e.add = function(n, i, s) {
    kn(n) || (n = {
      matches: n
    });
    var o = new Jd(0, s || this.scope), a = o.conditions = {}, l, c, h;
    ot && !o.selector && (o.selector = ot.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = n;
    for (c in n)
      c === "all" ? h = 1 : (l = Cn.matchMedia(n[c]), l && (Ji.indexOf(o) < 0 && Ji.push(o), (a[c] = l.matches) && (h = 1), l.addListener ? l.addListener(uc) : l.addEventListener("change", uc)));
    return h && i(o, function(u) {
      return o.add(null, u);
    }), this;
  }, e.revert = function(n) {
    this.kill(n || {});
  }, e.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, r;
}(), ta = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t.forEach(function(i) {
      return Fd(i);
    });
  },
  timeline: function(e) {
    return new Xt(e);
  },
  getTweensOf: function(e, t) {
    return at.getTweensOf(e, t);
  },
  getProperty: function(e, t, n, i) {
    It(e) && (e = xn(e)[0]);
    var s = ji(e || {}).get, o = n ? Ed : Td;
    return n === "native" && (n = ""), e && (t ? o((on[t] && on[t].get || s)(e, t, n, i)) : function(a, l, c) {
      return o((on[a] && on[a].get || s)(e, a, l, c));
    });
  },
  quickSetter: function(e, t, n) {
    if (e = xn(e), e.length > 1) {
      var i = e.map(function(h) {
        return en.quickSetter(h, t, n);
      }), s = i.length;
      return function(h) {
        for (var u = s; u--; )
          i[u](h);
      };
    }
    e = e[0] || {};
    var o = on[t], a = ji(e), l = a.harness && (a.harness.aliases || {})[t] || t, c = o ? function(h) {
      var u = new o();
      Ps._pt = 0, u.init(e, n ? h + n : h, Ps, 0, [e]), u.render(1, u), Ps._pt && nh(1, Ps);
    } : a.set(e, l);
    return o ? c : function(h) {
      return c(e, l, n ? h + n : h, a, 1);
    };
  },
  quickTo: function(e, t, n) {
    var i, s = en.to(e, ts((i = {}, i[t] = "+=0.1", i.paused = !0, i), n || {})), o = function(l, c, h) {
      return s.resetTo(t, l, c, h);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return at.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = $i(e.ease, js.ease)), Yu(js, e || {});
  },
  config: function(e) {
    return Yu(hn, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, n = e.effect, i = e.plugins, s = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !on[a] && !un[a] && Br(t + " effect requires " + a + " plugin.");
    }), sl[t] = function(a, l, c) {
      return n(xn(a), yn(l || {}, s), c);
    }, o && (Xt.prototype[t] = function(a, l, c) {
      return this.add(sl[t](a, kn(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    Ve[e] = $i(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? $i(e, t) : Ve;
  },
  getById: function(e) {
    return at.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var n = new Xt(e), i, s;
    for (n.smoothChildTiming = Zt(e.smoothChildTiming), at.remove(n), n._dp = 0, n._time = n._tTime = at._time, i = at._first; i; )
      s = i._next, (t || !(!i._dur && i instanceof yt && i.vars.onComplete === i._targets[0])) && In(n, i, i._start - i._delay), i = s;
    return In(at, n, 0), n;
  },
  context: function(e, t) {
    return e ? new Jd(e, t) : ot;
  },
  matchMedia: function(e) {
    return new zS(e);
  },
  matchMediaRefresh: function() {
    return Ji.forEach(function(e) {
      var t = e.conditions, n, i;
      for (i in t)
        t[i] && (t[i] = !1, n = 1);
      n && e.revert();
    }) || uc();
  },
  addEventListener: function(e, t) {
    var n = Ho[e] || (Ho[e] = []);
    ~n.indexOf(t) || n.push(t);
  },
  removeEventListener: function(e, t) {
    var n = Ho[e], i = n && n.indexOf(t);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: xS,
    wrapYoyo: vS,
    distribute: Ld,
    random: Id,
    snap: Dd,
    normalize: _S,
    getUnit: Bt,
    clamp: dS,
    splitColor: Bd,
    toArray: xn,
    selector: lc,
    mapRange: Ud,
    pipe: mS,
    unitize: gS,
    interpolate: yS,
    shuffle: Pd
  },
  install: xd,
  effects: sl,
  ticker: ln,
  updateRoot: Xt.updateRoot,
  plugins: on,
  globalTimeline: at,
  core: {
    PropTween: Jt,
    globals: vd,
    Tween: yt,
    Timeline: Xt,
    Animation: Vr,
    getCache: ji,
    _removeLinkedListItem: fa,
    reverting: function() {
      return zt;
    },
    context: function(e) {
      return e && ot && (ot.data.push(e), e._ctx = ot), ot;
    },
    suppressOverwrites: function(e) {
      return Wc = e;
    }
  }
};
$t("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return ta[r] = yt[r];
});
ln.add(Xt.updateRoot);
Ps = ta.to({}, {
  duration: 0
});
var HS = function(e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
    n = n._next;
  return n;
}, VS = function(e, t) {
  var n = e._targets, i, s, o;
  for (i in t)
    for (s = n.length; s--; )
      o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = HS(o, i)), o && o.modifier && o.modifier(t[i], e, n[s], i));
}, cl = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, o) {
      o._onInit = function(a) {
        var l, c;
        if (It(s) && (l = {}, $t(s, function(h) {
          return l[h] = 1;
        }), s = l), t) {
          l = {};
          for (c in s)
            l[c] = t(s[c]);
          s = l;
        }
        VS(a, s);
      };
    }
  };
}, en = ta.registerPlugin({
  name: "attr",
  init: function(e, t, n, i, s) {
    var o, a, l;
    this.tween = n;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var n = t._pt; n; )
      zt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var n = t.length; n--; )
      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
  }
}, cl("roundProps", cc), cl("modifiers"), cl("snap", Dd)) || ta;
yt.version = Xt.version = en.version = "3.12.5";
_d = 1;
Yc() && Js();
Ve.Power0;
Ve.Power1;
Ve.Power2;
Ve.Power3;
Ve.Power4;
Ve.Linear;
Ve.Quad;
Ve.Cubic;
Ve.Quart;
Ve.Quint;
Ve.Strong;
Ve.Elastic;
Ve.Back;
Ve.SteppedEase;
Ve.Bounce;
Ve.Sine;
Ve.Expo;
Ve.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ju, Ai, Fs, ih, Ki, Qu, sh, GS = function() {
  return typeof window < "u";
}, ci = {}, Xi = 180 / Math.PI, Bs = Math.PI / 180, As = Math.atan2, ef = 1e8, rh = /([A-Z])/g, WS = /(left|right|width|margin|padding|x)/i, XS = /[\s,\(]\S/, Nn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, fc = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, YS = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, qS = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, KS = function(e, t) {
  var n = t.s + t.c * e;
  t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
}, Qd = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, ep = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, jS = function(e, t, n) {
  return e.style[t] = n;
}, ZS = function(e, t, n) {
  return e.style.setProperty(t, n);
}, $S = function(e, t, n) {
  return e._gsap[t] = n;
}, JS = function(e, t, n) {
  return e._gsap.scaleX = e._gsap.scaleY = n;
}, QS = function(e, t, n, i, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = n, o.renderTransform(s, o);
}, eT = function(e, t, n, i, s) {
  var o = e._gsap;
  o[t] = n, o.renderTransform(s, o);
}, ct = "transform", Qt = ct + "Origin", tT = function r(e, t) {
  var n = this, i = this.target, s = i.style, o = i._gsap;
  if (e in ci && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Nn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return n.tfm[a] = ei(i, a);
      }) : this.tfm[e] = o.x ? o[e] : ei(i, e), e === Qt && (this.tfm.zOrigin = o.zOrigin);
    else
      return Nn.transform.split(",").forEach(function(a) {
        return r.call(n, a, t);
      });
    if (this.props.indexOf(ct) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Qt, t, "")), e = ct;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, tp = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, nT = function() {
  var e = this.props, t = this.target, n = t.style, i = t._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? t[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(rh, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = sh(), (!s || !s.isStart) && !n[ct] && (tp(n), i.zOrigin && n[Qt] && (n[Qt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, np = function(e, t) {
  var n = {
    target: e,
    props: [],
    revert: nT,
    save: tT
  };
  return e._gsap || en.core.getCache(e), t && t.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, ip, dc = function(e, t) {
  var n = Ai.createElementNS ? Ai.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ai.createElement(e);
  return n && n.style ? n : Ai.createElement(e);
}, On = function r(e, t, n) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(rh, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, Qs(t) || t, 1) || "";
}, tf = "O,Moz,ms,Ms,Webkit".split(","), Qs = function(e, t, n) {
  var i = t || Ki, s = i.style, o = 5;
  if (e in s && !n)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(tf[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? tf[o] : "") + e;
}, pc = function() {
  GS() && window.document && (Ju = window, Ai = Ju.document, Fs = Ai.documentElement, Ki = dc("div") || {
    style: {}
  }, dc("div"), ct = Qs(ct), Qt = ct + "Origin", Ki.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ip = !!Qs("perspective"), sh = en.core.reverting, ih = 1);
}, hl = function r(e) {
  var t = dc("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, s = this.style.cssText, o;
  if (Fs.appendChild(t), t.appendChild(this), this.style.display = "block", e)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r;
    } catch {
    }
  else this._gsapBBox && (o = this._gsapBBox());
  return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), Fs.removeChild(t), this.style.cssText = s, o;
}, nf = function(e, t) {
  for (var n = t.length; n--; )
    if (e.hasAttribute(t[n]))
      return e.getAttribute(t[n]);
}, sp = function(e) {
  var t;
  try {
    t = e.getBBox();
  } catch {
    t = hl.call(e, !0);
  }
  return t && (t.width || t.height) || e.getBBox === hl || (t = hl.call(e, !0)), t && !t.width && !t.x && !t.y ? {
    x: +nf(e, ["x", "cx", "x1"]) || 0,
    y: +nf(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, rp = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && sp(e));
}, ns = function(e, t) {
  if (t) {
    var n = e.style, i;
    t in ci && t !== Qt && (t = ct), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(rh, "-$1").toLowerCase())) : n.removeAttribute(t);
  }
}, wi = function(e, t, n, i, s, o) {
  var a = new Jt(e._pt, t, n, 0, 1, o ? ep : Qd);
  return e._pt = a, a.b = i, a.e = s, e._props.push(n), a;
}, sf = {
  deg: 1,
  rad: 1,
  turn: 1
}, iT = {
  grid: 1,
  flex: 1
}, Di = function r(e, t, n, i) {
  var s = parseFloat(n) || 0, o = (n + "").trim().substr((s + "").length) || "px", a = Ki.style, l = WS.test(t), c = e.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, f = i === "px", d = i === "%", _, g, p, m;
  if (i === o || !s || sf[i] || sf[o])
    return s;
  if (o !== "px" && !f && (s = r(e, t, n, "px")), m = e.getCTM && rp(e), (d || o === "%") && (ci[t] || ~t.indexOf("adius")))
    return _ = m ? e.getBBox()[l ? "width" : "height"] : e[h], gt(d ? s / _ * u : s / 100 * _);
  if (a[l ? "width" : "height"] = u + (f ? o : i), g = ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, m && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === Ai || !g.appendChild) && (g = Ai.body), p = g._gsap, p && d && p.width && l && p.time === ln.time && !p.uncache)
    return gt(s / p.width * u);
  if (d && (t === "height" || t === "width")) {
    var v = e.style[t];
    e.style[t] = u + i, _ = e[h], v ? e.style[t] = v : ns(e, t);
  } else
    (d || o === "%") && !iT[On(g, "display")] && (a.position = On(e, "position")), g === e && (a.position = "static"), g.appendChild(Ki), _ = Ki[h], g.removeChild(Ki), a.position = "absolute";
  return l && d && (p = ji(g), p.time = ln.time, p.width = g[h]), gt(f ? _ * s / u : _ && s ? u / _ * s : 0);
}, ei = function(e, t, n, i) {
  var s;
  return ih || pc(), t in Nn && t !== "transform" && (t = Nn[t], ~t.indexOf(",") && (t = t.split(",")[0])), ci[t] && t !== "transform" ? (s = Wr(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : ia(On(e, Qt)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = na[t] && na[t](e, t, n) || On(e, t) || Md(e, t) || (t === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? Di(e, t, s, n) + n : s;
}, sT = function(e, t, n, i) {
  if (!n || n === "none") {
    var s = Qs(t, e, 1), o = s && On(e, s, 1);
    o && o !== n ? (t = s, n = o) : t === "borderColor" && (n = On(e, "borderTopColor"));
  }
  var a = new Jt(this._pt, e.style, t, 0, 1, Zd), l = 0, c = 0, h, u, f, d, _, g, p, m, v, x, y, R;
  if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (g = e.style[t], e.style[t] = i, i = On(e, t) || i, g ? e.style[t] = g : ns(e, t)), h = [n, i], zd(h), n = h[0], i = h[1], f = n.match(Cs) || [], R = i.match(Cs) || [], R.length) {
    for (; u = Cs.exec(i); )
      p = u[0], v = i.substring(l, u.index), _ ? _ = (_ + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (_ = 1), p !== (g = f[c++] || "") && (d = parseFloat(g) || 0, y = g.substr((d + "").length), p.charAt(1) === "=" && (p = Os(d, p) + y), m = parseFloat(p), x = p.substr((m + "").length), l = Cs.lastIndex - x.length, x || (x = x || hn.units[t] || y, l === i.length && (i += x, a.e += x)), y !== x && (d = Di(e, t, g, x) || 0), a._pt = {
        _next: a._pt,
        p: v || c === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = t === "display" && i === "none" ? ep : Qd;
  return md.test(i) && (a.e = 0), this._pt = a, a;
}, rf = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, rT = function(e) {
  var t = e.split(" "), n = t[0], i = t[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = rf[n] || n, t[1] = rf[i] || i, t.join(" ");
}, oT = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var n = t.t, i = n.style, s = t.u, o = n._gsap, a, l, c;
    if (s === "all" || s === !0)
      i.cssText = "", l = 1;
    else
      for (s = s.split(","), c = s.length; --c > -1; )
        a = s[c], ci[a] && (l = 1, a = a === "transformOrigin" ? Qt : ct), ns(n, a);
    l && (ns(n, ct), o && (o.svg && n.removeAttribute("transform"), Wr(n, 1), o.uncache = 1, tp(i)));
  }
}, na = {
  clearProps: function(e, t, n, i, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Jt(e._pt, t, n, 0, 0, oT);
      return o.u = i, o.pr = -10, o.tween = s, e._props.push(n), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Gr = [1, 0, 0, 1, 0, 0], op = {}, ap = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, of = function(e) {
  var t = On(e, ct);
  return ap(t) ? Gr : t.substr(7).match(pd).map(gt);
}, oh = function(e, t) {
  var n = e._gsap || ji(e), i = e.style, s = of(e), o, a, l, c;
  return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Gr : s) : (s === Gr && !e.offsetParent && e !== Fs && !n.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (c = 1, a = e.nextElementSibling, Fs.appendChild(e)), s = of(e), l ? i.display = l : ns(e, "display"), c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Fs.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, mc = function(e, t, n, i, s, o) {
  var a = e._gsap, l = s || oh(e, !0), c = a.xOrigin || 0, h = a.yOrigin || 0, u = a.xOffset || 0, f = a.yOffset || 0, d = l[0], _ = l[1], g = l[2], p = l[3], m = l[4], v = l[5], x = t.split(" "), y = parseFloat(x[0]) || 0, R = parseFloat(x[1]) || 0, A, b, C, S;
  n ? l !== Gr && (b = d * p - _ * g) && (C = y * (p / b) + R * (-g / b) + (g * v - p * m) / b, S = y * (-_ / b) + R * (d / b) - (d * v - _ * m) / b, y = C, R = S) : (A = sp(e), y = A.x + (~x[0].indexOf("%") ? y / 100 * A.width : y), R = A.y + (~(x[1] || x[0]).indexOf("%") ? R / 100 * A.height : R)), i || i !== !1 && a.smooth ? (m = y - c, v = R - h, a.xOffset = u + (m * d + v * g) - m, a.yOffset = f + (m * _ + v * p) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = y, a.yOrigin = R, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[Qt] = "0px 0px", o && (wi(o, a, "xOrigin", c, y), wi(o, a, "yOrigin", h, R), wi(o, a, "xOffset", u, a.xOffset), wi(o, a, "yOffset", f, a.yOffset)), e.setAttribute("data-svg-origin", y + " " + R);
}, Wr = function(e, t) {
  var n = e._gsap || new Wd(e);
  if ("x" in n && !t && !n.uncache)
    return n;
  var i = e.style, s = n.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), c = On(e, Qt) || "0", h, u, f, d, _, g, p, m, v, x, y, R, A, b, C, S, T, D, B, O, X, K, H, j, W, se, ae, ue, Le, Ge, q, J;
  return h = u = f = g = p = m = v = x = y = 0, d = _ = 1, n.svg = !!(e.getCTM && rp(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ct] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ct] !== "none" ? l[ct] : "")), i.scale = i.rotate = i.translate = "none"), b = oh(e, n.svg), n.svg && (n.uncache ? (W = e.getBBox(), c = n.xOrigin - W.x + "px " + (n.yOrigin - W.y) + "px", j = "") : j = !t && e.getAttribute("data-svg-origin"), mc(e, j || c, !!j || n.originIsAbsolute, n.smooth !== !1, b)), R = n.xOrigin || 0, A = n.yOrigin || 0, b !== Gr && (D = b[0], B = b[1], O = b[2], X = b[3], h = K = b[4], u = H = b[5], b.length === 6 ? (d = Math.sqrt(D * D + B * B), _ = Math.sqrt(X * X + O * O), g = D || B ? As(B, D) * Xi : 0, v = O || X ? As(O, X) * Xi + g : 0, v && (_ *= Math.abs(Math.cos(v * Bs))), n.svg && (h -= R - (R * D + A * O), u -= A - (R * B + A * X))) : (J = b[6], Ge = b[7], ae = b[8], ue = b[9], Le = b[10], q = b[11], h = b[12], u = b[13], f = b[14], C = As(J, Le), p = C * Xi, C && (S = Math.cos(-C), T = Math.sin(-C), j = K * S + ae * T, W = H * S + ue * T, se = J * S + Le * T, ae = K * -T + ae * S, ue = H * -T + ue * S, Le = J * -T + Le * S, q = Ge * -T + q * S, K = j, H = W, J = se), C = As(-O, Le), m = C * Xi, C && (S = Math.cos(-C), T = Math.sin(-C), j = D * S - ae * T, W = B * S - ue * T, se = O * S - Le * T, q = X * T + q * S, D = j, B = W, O = se), C = As(B, D), g = C * Xi, C && (S = Math.cos(C), T = Math.sin(C), j = D * S + B * T, W = K * S + H * T, B = B * S - D * T, H = H * S - K * T, D = j, K = W), p && Math.abs(p) + Math.abs(g) > 359.9 && (p = g = 0, m = 180 - m), d = gt(Math.sqrt(D * D + B * B + O * O)), _ = gt(Math.sqrt(H * H + J * J)), C = As(K, H), v = Math.abs(C) > 2e-4 ? C * Xi : 0, y = q ? 1 / (q < 0 ? -q : q) : 0), n.svg && (j = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !ap(On(e, ct)), j && e.setAttribute("transform", j))), Math.abs(v) > 90 && Math.abs(v) < 270 && (s ? (d *= -1, v += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (_ *= -1, v += v <= 0 ? 180 : -180)), t = t || n.uncache, n.x = h - ((n.xPercent = h && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + o, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + o, n.z = f + o, n.scaleX = gt(d), n.scaleY = gt(_), n.rotation = gt(g) + a, n.rotationX = gt(p) + a, n.rotationY = gt(m) + a, n.skewX = v + a, n.skewY = x + a, n.transformPerspective = y + o, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (i[Qt] = ia(c)), n.xOffset = n.yOffset = 0, n.force3D = hn.force3D, n.renderTransform = n.svg ? lT : ip ? lp : aT, n.uncache = 0, n;
}, ia = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, ul = function(e, t, n) {
  var i = Bt(t);
  return gt(parseFloat(t) + parseFloat(Di(e, "x", n + "px", i))) + i;
}, aT = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, lp(e, t);
}, Vi = "0deg", _r = "0px", Gi = ") ", lp = function(e, t) {
  var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.z, c = n.rotation, h = n.rotationY, u = n.rotationX, f = n.skewX, d = n.skewY, _ = n.scaleX, g = n.scaleY, p = n.transformPerspective, m = n.force3D, v = n.target, x = n.zOrigin, y = "", R = m === "auto" && e && e !== 1 || m === !0;
  if (x && (u !== Vi || h !== Vi)) {
    var A = parseFloat(h) * Bs, b = Math.sin(A), C = Math.cos(A), S;
    A = parseFloat(u) * Bs, S = Math.cos(A), o = ul(v, o, b * S * -x), a = ul(v, a, -Math.sin(A) * -x), l = ul(v, l, C * S * -x + x);
  }
  p !== _r && (y += "perspective(" + p + Gi), (i || s) && (y += "translate(" + i + "%, " + s + "%) "), (R || o !== _r || a !== _r || l !== _r) && (y += l !== _r || R ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Gi), c !== Vi && (y += "rotate(" + c + Gi), h !== Vi && (y += "rotateY(" + h + Gi), u !== Vi && (y += "rotateX(" + u + Gi), (f !== Vi || d !== Vi) && (y += "skew(" + f + ", " + d + Gi), (_ !== 1 || g !== 1) && (y += "scale(" + _ + ", " + g + Gi), v.style[ct] = y || "translate(0, 0)";
}, lT = function(e, t) {
  var n = t || this, i = n.xPercent, s = n.yPercent, o = n.x, a = n.y, l = n.rotation, c = n.skewX, h = n.skewY, u = n.scaleX, f = n.scaleY, d = n.target, _ = n.xOrigin, g = n.yOrigin, p = n.xOffset, m = n.yOffset, v = n.forceCSS, x = parseFloat(o), y = parseFloat(a), R, A, b, C, S;
  l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= Bs, c *= Bs, R = Math.cos(l) * u, A = Math.sin(l) * u, b = Math.sin(l - c) * -f, C = Math.cos(l - c) * f, c && (h *= Bs, S = Math.tan(c - h), S = Math.sqrt(1 + S * S), b *= S, C *= S, h && (S = Math.tan(h), S = Math.sqrt(1 + S * S), R *= S, A *= S)), R = gt(R), A = gt(A), b = gt(b), C = gt(C)) : (R = u, C = f, A = b = 0), (x && !~(o + "").indexOf("px") || y && !~(a + "").indexOf("px")) && (x = Di(d, "x", o, "px"), y = Di(d, "y", a, "px")), (_ || g || p || m) && (x = gt(x + _ - (_ * R + g * b) + p), y = gt(y + g - (_ * A + g * C) + m)), (i || s) && (S = d.getBBox(), x = gt(x + i / 100 * S.width), y = gt(y + s / 100 * S.height)), S = "matrix(" + R + "," + A + "," + b + "," + C + "," + x + "," + y + ")", d.setAttribute("transform", S), v && (d.style[ct] = S);
}, cT = function(e, t, n, i, s) {
  var o = 360, a = It(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Xi : 1), c = l - i, h = i + c + "deg", u, f;
  return a && (u = s.split("_")[1], u === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), u === "cw" && c < 0 ? c = (c + o * ef) % o - ~~(c / o) * o : u === "ccw" && c > 0 && (c = (c - o * ef) % o - ~~(c / o) * o)), e._pt = f = new Jt(e._pt, t, n, i, c, YS), f.e = h, f.u = "deg", e._props.push(n), f;
}, af = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, hT = function(e, t, n) {
  var i = af({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, a, l, c, h, u, f, d, _;
  i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), o[ct] = t, a = Wr(n, 1), ns(n, ct), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[ct], o[ct] = t, a = Wr(n, 1), o[ct] = c);
  for (l in ci)
    c = i[l], h = a[l], c !== h && s.indexOf(l) < 0 && (d = Bt(c), _ = Bt(h), u = d !== _ ? Di(n, l, c, _) : parseFloat(c), f = parseFloat(h), e._pt = new Jt(e._pt, a, l, u, f - u, fc), e._pt.u = _ || 0, e._props.push(l));
  af(a, i);
};
$t("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", n = "Right", i = "Bottom", s = "Left", o = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function(a) {
    return e < 2 ? r + a : "border" + a + r;
  });
  na[e > 1 ? "border" + r : r] = function(a, l, c, h, u) {
    var f, d;
    if (arguments.length < 4)
      return f = o.map(function(_) {
        return ei(a, _, c);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
    f = (h + "").split(" "), d = {}, o.forEach(function(_, g) {
      return d[_] = f[g] = f[g] || f[(g - 1) / 2 | 0];
    }), a.init(l, d, u);
  };
});
var cp = {
  name: "css",
  register: pc,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, n, i, s) {
    var o = this._props, a = e.style, l = n.vars.startAt, c, h, u, f, d, _, g, p, m, v, x, y, R, A, b, C;
    ih || pc(), this.styles = this.styles || np(e), C = this.styles.props, this.tween = n;
    for (g in t)
      if (g !== "autoRound" && (h = t[g], !(on[g] && Xd(g, t, n, i, e, s)))) {
        if (d = typeof h, _ = na[g], d === "function" && (h = h.call(n, i, e, s), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = zr(h)), _)
          _(this, e, g, h, n) && (b = 1);
        else if (g.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(g) + "").trim(), h += "", Pi.lastIndex = 0, Pi.test(c) || (p = Bt(c), m = Bt(h)), m ? p !== m && (c = Di(e, g, c, m) + m) : p && (h += p), this.add(a, "setProperty", c, h, i, s, 0, 0, g), o.push(g), C.push(g, 0, a[g]);
        else if (d !== "undefined") {
          if (l && g in l ? (c = typeof l[g] == "function" ? l[g].call(n, i, e, s) : l[g], It(c) && ~c.indexOf("random(") && (c = zr(c)), Bt(c + "") || c === "auto" || (c += hn.units[g] || Bt(ei(e, g)) || ""), (c + "").charAt(1) === "=" && (c = ei(e, g))) : c = ei(e, g), f = parseFloat(c), v = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), v && (h = h.substr(2)), u = parseFloat(h), g in Nn && (g === "autoAlpha" && (f === 1 && ei(e, "visibility") === "hidden" && u && (f = 0), C.push("visibility", 0, a.visibility), wi(this, a, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), g !== "scale" && g !== "transform" && (g = Nn[g], ~g.indexOf(",") && (g = g.split(",")[0]))), x = g in ci, x) {
            if (this.styles.save(g), y || (R = e._gsap, R.renderTransform && !t.parseTransform || Wr(e, t.parseTransform), A = t.smoothOrigin !== !1 && R.smooth, y = this._pt = new Jt(this._pt, a, ct, 0, 1, R.renderTransform, R, 0, -1), y.dep = 1), g === "scale")
              this._pt = new Jt(this._pt, R, "scaleY", R.scaleY, (v ? Os(R.scaleY, v + u) : u) - R.scaleY || 0, fc), this._pt.u = 0, o.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              C.push(Qt, 0, a[Qt]), h = rT(h), R.svg ? mc(e, h, 0, A, 0, this) : (m = parseFloat(h.split(" ")[2]) || 0, m !== R.zOrigin && wi(this, R, "zOrigin", R.zOrigin, m), wi(this, a, g, ia(c), ia(h)));
              continue;
            } else if (g === "svgOrigin") {
              mc(e, h, 1, A, 0, this);
              continue;
            } else if (g in op) {
              cT(this, R, g, f, v ? Os(f, v + h) : h);
              continue;
            } else if (g === "smoothOrigin") {
              wi(this, R, "smooth", R.smooth, h);
              continue;
            } else if (g === "force3D") {
              R[g] = h;
              continue;
            } else if (g === "transform") {
              hT(this, h, e);
              continue;
            }
          } else g in a || (g = Qs(g) || g);
          if (x || (u || u === 0) && (f || f === 0) && !XS.test(h) && g in a)
            p = (c + "").substr((f + "").length), u || (u = 0), m = Bt(h) || (g in hn.units ? hn.units[g] : p), p !== m && (f = Di(e, g, c, m)), this._pt = new Jt(this._pt, x ? R : a, g, f, (v ? Os(f, v + u) : u) - f, !x && (m === "px" || g === "zIndex") && t.autoRound !== !1 ? KS : fc), this._pt.u = m || 0, p !== m && m !== "%" && (this._pt.b = c, this._pt.r = qS);
          else if (g in a)
            sT.call(this, e, g, c, v ? v + h : h);
          else if (g in e)
            this.add(e, g, c || e[g], v ? v + h : h, i, s);
          else if (g !== "parseTransform") {
            Kc(g, h);
            continue;
          }
          x || (g in a ? C.push(g, 0, a[g]) : C.push(g, 1, c || e[g])), o.push(g);
        }
      }
    b && $d(this);
  },
  render: function(e, t) {
    if (t.tween._time || !sh())
      for (var n = t._pt; n; )
        n.r(e, n.d), n = n._next;
    else
      t.styles.revert();
  },
  get: ei,
  aliases: Nn,
  getSetter: function(e, t, n) {
    var i = Nn[t];
    return i && i.indexOf(",") < 0 && (t = i), t in ci && t !== Qt && (e._gsap.x || ei(e, "x")) ? n && Qu === n ? t === "scale" ? JS : $S : (Qu = n || {}) && (t === "scale" ? QS : eT) : e.style && !Xc(e.style[t]) ? jS : ~t.indexOf("-") ? ZS : th(e, t);
  },
  core: {
    _removeProperty: ns,
    _getMatrix: oh
  }
};
en.utils.checkPrefix = Qs;
en.core.getStyleSaver = np;
(function(r, e, t, n) {
  var i = $t(r + "," + e + "," + t, function(s) {
    ci[s] = 1;
  });
  $t(e, function(s) {
    hn.units[s] = "deg", op[s] = 1;
  }), Nn[i[13]] = r + "," + e, $t(n, function(s) {
    var o = s.split(":");
    Nn[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
$t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  hn.units[r] = "px";
});
en.registerPlugin(cp);
var gc = en.registerPlugin(cp) || en;
gc.core.Tween;
class rr {
  constructor(e) {
    me(this, "sizes");
    me(this, "scene");
    me(this, "canvas");
    me(this, "camera");
    me(this, "_camera");
    me(this, "resources");
    me(this, "time");
    me(this, "mouse");
    me(this, "eventOffset");
    var t, n, i;
    this._instance = e, this.sizes = e.sizes, this.scene = e.scene, this.camera = e.camera, this._camera = ((t = e.camera) == null ? void 0 : t.instance) || null, this.time = e.time, this.mouse = (n = e.mousemove) == null ? void 0 : n.mouse, this.eventOffset = (i = e.mousemove) == null ? void 0 : i.eventOffset, this.canvas = e._canvas, this.resources = e.resources;
  }
  resize() {
  }
  update() {
  }
  dispose() {
  }
}
class uT extends rr {
  constructor(t) {
    super(t);
    me(this, "loadingManager");
    this.createLoading(!!t._config.sources.length), this.loadingManager = new id(
      // Loaded
      () => {
        console.log("Loaded"), this.endLoading();
      },
      // Progress
      (n, i, s) => {
        console.log("Progress"), this.endLoadingBar(i, s);
      },
      () => {
        console.log("error");
      }
    );
  }
  createLoading(t) {
    if (document.querySelector(".loading-page")) return;
    const i = document.createElement("div");
    i.className = "loading-page", i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100vh", i.style.backgroundColor = "rgba(0, 0, 0, 0.7)", i.style.pointerEvents = "none", document.body.appendChild(i);
    const s = document.createElement("div");
    s.className = "loading-bar", i.appendChild(s), s.style.position = "absolute", s.style.top = "50%", s.style.width = "100%", s.style.height = "2px", s.style.background = "#ffffff", s.style.transform = "scaleX(0)", s.style.transformOrigin = "top left", s.style.transition = "transform  0.5s", t || (this.endLoading(), this.endLoadingBar(10, 10));
  }
  endLoading() {
    const t = document.querySelector(
      ".loading-bar"
    ), n = document.querySelector(".loading-page");
    n && (gc.set(n.style, { opacity: 1 }), gc.to(n.style, {
      duration: 5,
      opacity: 0,
      ease: "power1.inOut"
    }), window.setTimeout(() => {
      t.style.transform = "scaleX(0)", t.style.transformOrigin = "100% 0", t.style.transition = "transform 1.5s ease-in-out";
    }, 500));
  }
  endLoadingBar(t, n) {
    const i = document.querySelector(
      ".loading-bar"
    ), s = t / n;
    i.style.transform = `scaleX(${s})`;
  }
  resize() {
  }
  update() {
  }
  dispose() {
  }
}
const lf = { type: "change" }, fl = { type: "start" }, cf = { type: "end" }, Lo = new tr(), hf = new Mi(), fT = Math.cos(70 * Cf.DEG2RAD);
class dT extends is {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new L(), this.cursor = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: os.ROTATE, MIDDLE: os.DOLLY, RIGHT: os.PAN }, this.touches = { ONE: as.ROTATE, TWO: as.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(M) {
      M.addEventListener("keydown", ce), this._domElementKeyEvents = M;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", ce), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(lf), n.update(), s = i.NONE;
    }, this.update = function() {
      const M = new L(), F = new Fn().setFromUnitVectors(e.up, new L(0, 1, 0)), k = F.clone().invert(), Y = new L(), Q = new Fn(), ve = new L(), we = 2 * Math.PI;
      return function(Mt = null) {
        const We = n.object.position;
        M.copy(We).sub(n.target), M.applyQuaternion(F), a.setFromVector3(M), n.autoRotate && s === i.NONE && B(T(Mt)), n.enableDamping ? (a.theta += l.theta * n.dampingFactor, a.phi += l.phi * n.dampingFactor) : (a.theta += l.theta, a.phi += l.phi);
        let St = n.minAzimuthAngle, _t = n.maxAzimuthAngle;
        isFinite(St) && isFinite(_t) && (St < -Math.PI ? St += we : St > Math.PI && (St -= we), _t < -Math.PI ? _t += we : _t > Math.PI && (_t -= we), St <= _t ? a.theta = Math.max(St, Math.min(_t, a.theta)) : a.theta = a.theta > (St + _t) / 2 ? Math.max(St, a.theta) : Math.min(_t, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor);
        let fi = !1;
        if (n.zoomToCursor && A || n.object.isOrthographicCamera)
          a.radius = ae(a.radius);
        else {
          const Nt = a.radius;
          a.radius = ae(a.radius * c), fi = Nt != a.radius;
        }
        if (M.setFromSpherical(a), M.applyQuaternion(k), We.copy(n.target).add(M), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), h.set(0, 0, 0)), n.zoomToCursor && A) {
          let Nt = null;
          if (n.object.isPerspectiveCamera) {
            const Wn = M.length();
            Nt = ae(Wn * c);
            const Ni = Wn - Nt;
            n.object.position.addScaledVector(y, Ni), n.object.updateMatrixWorld(), fi = !!Ni;
          } else if (n.object.isOrthographicCamera) {
            const Wn = new L(R.x, R.y, 0);
            Wn.unproject(n.object);
            const Ni = n.object.zoom;
            n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), n.object.updateProjectionMatrix(), fi = Ni !== n.object.zoom;
            const or = new L(R.x, R.y, 0);
            or.unproject(n.object), n.object.position.sub(or).add(Wn), n.object.updateMatrixWorld(), Nt = M.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1;
          Nt !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Nt).add(n.object.position) : (Lo.origin.copy(n.object.position), Lo.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Lo.direction)) < fT ? e.lookAt(n.target) : (hf.setFromNormalAndCoplanarPoint(n.object.up, n.target), Lo.intersectPlane(hf, n.target))));
        } else if (n.object.isOrthographicCamera) {
          const Nt = n.object.zoom;
          n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / c)), Nt !== n.object.zoom && (n.object.updateProjectionMatrix(), fi = !0);
        }
        return c = 1, A = !1, fi || Y.distanceToSquared(n.object.position) > o || 8 * (1 - Q.dot(n.object.quaternion)) > o || ve.distanceToSquared(n.target) > o ? (n.dispatchEvent(lf), Y.copy(n.object.position), Q.copy(n.object.quaternion), ve.copy(n.target), !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", he), n.domElement.removeEventListener("pointerdown", De), n.domElement.removeEventListener("pointercancel", E), n.domElement.removeEventListener("wheel", ee), n.domElement.removeEventListener("pointermove", P), n.domElement.removeEventListener("pointerup", E), n.domElement.getRootNode().removeEventListener("keydown", Me, { capture: !0 }), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", ce), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const o = 1e-6, a = new Ou(), l = new Ou();
    let c = 1;
    const h = new L(), u = new te(), f = new te(), d = new te(), _ = new te(), g = new te(), p = new te(), m = new te(), v = new te(), x = new te(), y = new L(), R = new te();
    let A = !1;
    const b = [], C = {};
    let S = !1;
    function T(M) {
      return M !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * M : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function D(M) {
      const F = Math.abs(M * 0.01);
      return Math.pow(0.95, n.zoomSpeed * F);
    }
    function B(M) {
      l.theta -= M;
    }
    function O(M) {
      l.phi -= M;
    }
    const X = function() {
      const M = new L();
      return function(k, Y) {
        M.setFromMatrixColumn(Y, 0), M.multiplyScalar(-k), h.add(M);
      };
    }(), K = function() {
      const M = new L();
      return function(k, Y) {
        n.screenSpacePanning === !0 ? M.setFromMatrixColumn(Y, 1) : (M.setFromMatrixColumn(Y, 0), M.crossVectors(n.object.up, M)), M.multiplyScalar(k), h.add(M);
      };
    }(), H = function() {
      const M = new L();
      return function(k, Y) {
        const Q = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const ve = n.object.position;
          M.copy(ve).sub(n.target);
          let we = M.length();
          we *= Math.tan(n.object.fov / 2 * Math.PI / 180), X(2 * k * we / Q.clientHeight, n.object.matrix), K(2 * Y * we / Q.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (X(k * (n.object.right - n.object.left) / n.object.zoom / Q.clientWidth, n.object.matrix), K(Y * (n.object.top - n.object.bottom) / n.object.zoom / Q.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function j(M) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c /= M : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function W(M) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? c *= M : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function se(M, F) {
      if (!n.zoomToCursor)
        return;
      A = !0;
      const k = n.domElement.getBoundingClientRect(), Y = M - k.left, Q = F - k.top, ve = k.width, we = k.height;
      R.x = Y / ve * 2 - 1, R.y = -(Q / we) * 2 + 1, y.set(R.x, R.y, 1).unproject(n.object).sub(n.object.position).normalize();
    }
    function ae(M) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, M));
    }
    function ue(M) {
      u.set(M.clientX, M.clientY);
    }
    function Le(M) {
      se(M.clientX, M.clientX), m.set(M.clientX, M.clientY);
    }
    function Ge(M) {
      _.set(M.clientX, M.clientY);
    }
    function q(M) {
      f.set(M.clientX, M.clientY), d.subVectors(f, u).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      B(2 * Math.PI * d.x / F.clientHeight), O(2 * Math.PI * d.y / F.clientHeight), u.copy(f), n.update();
    }
    function J(M) {
      v.set(M.clientX, M.clientY), x.subVectors(v, m), x.y > 0 ? j(D(x.y)) : x.y < 0 && W(D(x.y)), m.copy(v), n.update();
    }
    function pe(M) {
      g.set(M.clientX, M.clientY), p.subVectors(g, _).multiplyScalar(n.panSpeed), H(p.x, p.y), _.copy(g), n.update();
    }
    function fe(M) {
      se(M.clientX, M.clientY), M.deltaY < 0 ? W(D(M.deltaY)) : M.deltaY > 0 && j(D(M.deltaY)), n.update();
    }
    function Ie(M) {
      let F = !1;
      switch (M.code) {
        case n.keys.UP:
          M.ctrlKey || M.metaKey || M.shiftKey ? O(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(0, n.keyPanSpeed), F = !0;
          break;
        case n.keys.BOTTOM:
          M.ctrlKey || M.metaKey || M.shiftKey ? O(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(0, -n.keyPanSpeed), F = !0;
          break;
        case n.keys.LEFT:
          M.ctrlKey || M.metaKey || M.shiftKey ? B(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(n.keyPanSpeed, 0), F = !0;
          break;
        case n.keys.RIGHT:
          M.ctrlKey || M.metaKey || M.shiftKey ? B(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : H(-n.keyPanSpeed, 0), F = !0;
          break;
      }
      F && (M.preventDefault(), n.update());
    }
    function Oe(M) {
      if (b.length === 1)
        u.set(M.pageX, M.pageY);
      else {
        const F = Pe(M), k = 0.5 * (M.pageX + F.x), Y = 0.5 * (M.pageY + F.y);
        u.set(k, Y);
      }
    }
    function ke(M) {
      if (b.length === 1)
        _.set(M.pageX, M.pageY);
      else {
        const F = Pe(M), k = 0.5 * (M.pageX + F.x), Y = 0.5 * (M.pageY + F.y);
        _.set(k, Y);
      }
    }
    function it(M) {
      const F = Pe(M), k = M.pageX - F.x, Y = M.pageY - F.y, Q = Math.sqrt(k * k + Y * Y);
      m.set(0, Q);
    }
    function I(M) {
      n.enableZoom && it(M), n.enablePan && ke(M);
    }
    function ht(M) {
      n.enableZoom && it(M), n.enableRotate && Oe(M);
    }
    function Xe(M) {
      if (b.length == 1)
        f.set(M.pageX, M.pageY);
      else {
        const k = Pe(M), Y = 0.5 * (M.pageX + k.x), Q = 0.5 * (M.pageY + k.y);
        f.set(Y, Q);
      }
      d.subVectors(f, u).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      B(2 * Math.PI * d.x / F.clientHeight), O(2 * Math.PI * d.y / F.clientHeight), u.copy(f);
    }
    function qe(M) {
      if (b.length === 1)
        g.set(M.pageX, M.pageY);
      else {
        const F = Pe(M), k = 0.5 * (M.pageX + F.x), Y = 0.5 * (M.pageY + F.y);
        g.set(k, Y);
      }
      p.subVectors(g, _).multiplyScalar(n.panSpeed), H(p.x, p.y), _.copy(g);
    }
    function xe(M) {
      const F = Pe(M), k = M.pageX - F.x, Y = M.pageY - F.y, Q = Math.sqrt(k * k + Y * Y);
      v.set(0, Q), x.set(0, Math.pow(v.y / m.y, n.zoomSpeed)), j(x.y), m.copy(v);
      const ve = (M.pageX + F.x) * 0.5, we = (M.pageY + F.y) * 0.5;
      se(ve, we);
    }
    function ut(M) {
      n.enableZoom && xe(M), n.enablePan && qe(M);
    }
    function Ce(M) {
      n.enableZoom && xe(M), n.enableRotate && Xe(M);
    }
    function De(M) {
      n.enabled !== !1 && (b.length === 0 && (n.domElement.setPointerCapture(M.pointerId), n.domElement.addEventListener("pointermove", P), n.domElement.addEventListener("pointerup", E)), !de(M) && (He(M), M.pointerType === "touch" ? Ne(M) : G(M)));
    }
    function P(M) {
      n.enabled !== !1 && (M.pointerType === "touch" ? ne(M) : $(M));
    }
    function E(M) {
      switch (Ee(M), b.length) {
        case 0:
          n.domElement.releasePointerCapture(M.pointerId), n.domElement.removeEventListener("pointermove", P), n.domElement.removeEventListener("pointerup", E), n.dispatchEvent(cf), s = i.NONE;
          break;
        case 1:
          const F = b[0], k = C[F];
          Ne({ pointerId: F, pageX: k.x, pageY: k.y });
          break;
      }
    }
    function G(M) {
      let F;
      switch (M.button) {
        case 0:
          F = n.mouseButtons.LEFT;
          break;
        case 1:
          F = n.mouseButtons.MIDDLE;
          break;
        case 2:
          F = n.mouseButtons.RIGHT;
          break;
        default:
          F = -1;
      }
      switch (F) {
        case os.DOLLY:
          if (n.enableZoom === !1) return;
          Le(M), s = i.DOLLY;
          break;
        case os.ROTATE:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enablePan === !1) return;
            Ge(M), s = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            ue(M), s = i.ROTATE;
          }
          break;
        case os.PAN:
          if (M.ctrlKey || M.metaKey || M.shiftKey) {
            if (n.enableRotate === !1) return;
            ue(M), s = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            Ge(M), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(fl);
    }
    function $(M) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          q(M);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          J(M);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          pe(M);
          break;
      }
    }
    function ee(M) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (M.preventDefault(), n.dispatchEvent(fl), fe(Z(M)), n.dispatchEvent(cf));
    }
    function Z(M) {
      const F = M.deltaMode, k = {
        clientX: M.clientX,
        clientY: M.clientY,
        deltaY: M.deltaY
      };
      switch (F) {
        case 1:
          k.deltaY *= 16;
          break;
        case 2:
          k.deltaY *= 100;
          break;
      }
      return M.ctrlKey && !S && (k.deltaY *= 10), k;
    }
    function Me(M) {
      M.key === "Control" && (S = !0, n.domElement.getRootNode().addEventListener("keyup", re, { passive: !0, capture: !0 }));
    }
    function re(M) {
      M.key === "Control" && (S = !1, n.domElement.getRootNode().removeEventListener("keyup", re, { passive: !0, capture: !0 }));
    }
    function ce(M) {
      n.enabled === !1 || n.enablePan === !1 || Ie(M);
    }
    function Ne(M) {
      switch (Ae(M), b.length) {
        case 1:
          switch (n.touches.ONE) {
            case as.ROTATE:
              if (n.enableRotate === !1) return;
              Oe(M), s = i.TOUCH_ROTATE;
              break;
            case as.PAN:
              if (n.enablePan === !1) return;
              ke(M), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case as.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              I(M), s = i.TOUCH_DOLLY_PAN;
              break;
            case as.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ht(M), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(fl);
    }
    function ne(M) {
      switch (Ae(M), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Xe(M), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          qe(M), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          ut(M), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Ce(M), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function he(M) {
      n.enabled !== !1 && M.preventDefault();
    }
    function He(M) {
      b.push(M.pointerId);
    }
    function Ee(M) {
      delete C[M.pointerId];
      for (let F = 0; F < b.length; F++)
        if (b[F] == M.pointerId) {
          b.splice(F, 1);
          return;
        }
    }
    function de(M) {
      for (let F = 0; F < b.length; F++)
        if (b[F] == M.pointerId) return !0;
      return !1;
    }
    function Ae(M) {
      let F = C[M.pointerId];
      F === void 0 && (F = new te(), C[M.pointerId] = F), F.set(M.pageX, M.pageY);
    }
    function Pe(M) {
      const F = M.pointerId === b[0] ? b[1] : b[0];
      return C[F];
    }
    n.domElement.addEventListener("contextmenu", he), n.domElement.addEventListener("pointerdown", De), n.domElement.addEventListener("pointercancel", E), n.domElement.addEventListener("wheel", ee, { passive: !1 }), n.domElement.getRootNode().addEventListener("keydown", Me, { passive: !0, capture: !0 }), this.update();
  }
}
class pT extends rr {
  constructor(t, n) {
    var i, s;
    super(n);
    me(this, "cameraConfig");
    me(this, "controls");
    me(this, "instance");
    this.cameraConfig = t, this.instance = new Wt(
      this.cameraConfig.fov,
      ((i = this.sizes) == null ? void 0 : i.width) / ((s = this.sizes) == null ? void 0 : s.height),
      this.cameraConfig.near,
      this.cameraConfig.far
    ), this.controls = new dT(this.instance, this.canvas), this.setInstance(), this.setControls();
  }
  setInstance() {
    this.instance.position.set(
      this.cameraConfig.position.x,
      this.cameraConfig.position.y,
      this.cameraConfig.position.z
    ), this.cameraConfig.lookAt && this.instance.lookAt(this.scene.position), this.instance.updateProjectionMatrix(), this.scene.add(this.instance);
  }
  setControls() {
    const t = this.cameraConfig.controls;
    this.controls.enableDamping = t.enableDamping, this.controls.minPolarAngle = t.minPolarAngle, this.controls.maxPolarAngle = t.maxPolarAngle, this.controls.minAzimuthAngle = t.minAzimuthAngle, this.controls.maxAzimuthAngle = t.maxAzimuthAngle, this.controls.enablePan = t.enablePan;
  }
  resize() {
    var t, n;
    this.instance.aspect = ((t = this.sizes) == null ? void 0 : t.width) / ((n = this.sizes) == null ? void 0 : n.height), this.instance.updateProjectionMatrix();
  }
  update() {
    var t;
    (t = this.controls) == null || t.update();
  }
  dispose() {
    var t;
    (t = this.controls) == null || t.dispose();
  }
}
class mT extends rr {
  constructor(t, n) {
    super(n);
    me(this, "instance");
    this.instance = new kv({
      canvas: this.canvas,
      antialias: t.antialias,
      alpha: t.alpha
    }), this.setRenderer(t);
  }
  setRenderer(t) {
    this.instance.outputColorSpace = Tt, t.clearAlpha ? this.instance.setClearAlpha(t.clearAlpha) : this.instance.setClearAlpha(0), t.clearColor && this.instance.setClearColor(t.clearColor), this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }
  info(t = "present memory:") {
    console.log(t, this.instance.info.memory);
  }
  resize() {
    var t;
    this.instance.setSize((t = this.sizes) == null ? void 0 : t.width, this.sizes.height), this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }
  update() {
    var t;
    this.instance.render(this.scene, (t = this.camera) == null ? void 0 : t.instance);
  }
  dispose() {
    this.instance.clear(), this.instance.setSize(0, 0), this.instance.dispose(), this.info("cleared memory:");
  }
}
const hp = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  )
};
class jr {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const gT = new la(-1, 1, 1, -1, 0, 1);
class _T extends qt {
  constructor() {
    super(), this.setAttribute("position", new Lt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Lt([0, 2, 0, 0, 2, 0], 2));
  }
}
const xT = new _T();
class up {
  constructor(e) {
    this._mesh = new kt(xT, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, gT);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class vT extends jr {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof Kt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Ko.clone(e.uniforms), this.material = new Kt({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new up(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class uf extends jr {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const i = e.getContext(), s = e.state;
    s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0);
    let o, a;
    this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), s.buffers.stencil.setFunc(i.ALWAYS, o, 4294967295), s.buffers.stencil.setClear(a), s.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.color.setMask(!0), s.buffers.depth.setMask(!0), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), s.buffers.stencil.setLocked(!0);
  }
}
class yT extends jr {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class ff {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new te());
      this._width = n.width, this._height = n.height, t = new Rn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: ri }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new vT(hp), this.copyPass.material.blending = si, this.clock = new ld();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled)
        return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, s = this.passes.length; i < s; i++) {
      const o = this.passes[i];
      if (o.enabled !== !1) {
        if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), o.needsSwap) {
          if (n) {
            const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        uf !== void 0 && (o instanceof uf ? n = !0 : o instanceof yT && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new te());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let s = 0; s < this.passes.length; s++)
      this.passes[s].setSize(n, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class MT extends jr {
  constructor(e, t, n = null, i = null, s = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new Se();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let s, o;
    this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (s = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(s), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = i;
  }
}
const ST = {
  name: "LuminosityHighPassShader",
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new Se(0) },
    defaultOpacity: { value: 0 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  )
};
class er extends jr {
  constructor(e, t, n, i) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new te(e.x, e.y) : new te(256, 256), this.clearColor = new Se(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new Rn(s, o, { type: ri }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let u = 0; u < this.nMips; u++) {
      const f = new Rn(s, o, { type: ri });
      f.texture.name = "UnrealBloomPass.h" + u, f.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(f);
      const d = new Rn(s, o, { type: ri });
      d.texture.name = "UnrealBloomPass.v" + u, d.texture.generateMipmaps = !1, this.renderTargetsVertical.push(d), s = Math.round(s / 2), o = Math.round(o / 2);
    }
    const a = ST;
    this.highPassUniforms = Ko.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new Kt({
      uniforms: this.highPassUniforms,
      vertexShader: a.vertexShader,
      fragmentShader: a.fragmentShader
    }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    for (let u = 0; u < this.nMips; u++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])), this.separableBlurMaterials[u].uniforms.invSize.value = new te(1 / s, 1 / o), s = Math.round(s / 2), o = Math.round(o / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const h = hp;
    this.copyUniforms = Ko.clone(h.uniforms), this.blendMaterial = new Kt({
      uniforms: this.copyUniforms,
      vertexShader: h.vertexShader,
      fragmentShader: h.fragmentShader,
      blending: dl,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new Se(), this.oldClearAlpha = 1, this.basic = new wn(), this.fsQuad = new up(null);
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++)
      this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2), i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let s = 0; s < this.nMips; s++)
      this.renderTargetsHorizontal[s].setSize(n, i), this.renderTargetsVertical[s].setSize(n, i), this.separableBlurMaterials[s].uniforms.invSize.value = new te(1 / n, 1 / i), n = Math.round(n / 2), i = Math.round(i / 2);
  }
  render(e, t, n, i, s) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const o = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let a = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[l].uniforms.direction.value = er.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = er.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), a = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
  }
  getSeperableBlurMaterial(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
    return new Kt({
      defines: {
        KERNEL_RADIUS: e
      },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new te(0.5, 0.5) },
        // inverse texture size
        direction: { value: new te(0.5, 0.5) },
        gaussianCoefficients: { value: t }
        // precomputed Gaussian coefficients
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(e) {
    return new Kt({
      defines: {
        NUM_MIPS: e
      },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
    });
  }
}
er.BlurDirectionX = new te(1, 0);
er.BlurDirectionY = new te(0, 1);
class TT extends rr {
  constructor(t, n) {
    super(n);
    me(this, "renderer");
    me(this, "bloomLayer");
    me(this, "materials");
    me(this, "darkMaterial");
    me(this, "bloomComposer");
    me(this, "finalComposer");
    me(this, "darkenNonBloomed", (t) => {
      t.isMesh && this.bloomLayer.test(t.layers) === !1 && (this.materials[t.uuid] = t.material, t.material = this.darkMaterial);
    });
    me(this, "restoreMaterial", (t) => {
      this.materials[t.uuid] && (t.material = this.materials[t.uuid], delete this.materials[t.uuid]);
    });
    this.renderer = n.renderer.instance, this.bloomLayer = new oa(), this.materials = {}, this.darkMaterial = new wn({ color: "black" }), this.bloomComposer = new ff(this.renderer), this.finalComposer = new ff(this.renderer), this.setBloomPass(t);
  }
  setBloomPass(t) {
    this.bloomLayer.set(1);
    const i = new MT(this.scene, this._camera);
    this.bloomComposer.renderToScreen = !1, this.bloomComposer.addPass(i), this.finalComposer.addPass(i);
    const s = new er(
      new te(
        this.renderer.domElement.offsetWidth,
        this.renderer.domElement.offsetHeight
      ),
      t.strength,
      t.radius,
      t.threshold
    );
    this.bloomComposer.addPass(s);
  }
  update() {
    this.scene.traverse(this.darkenNonBloomed), this.bloomComposer.render(), this.scene.traverse(this.restoreMaterial), this.finalComposer.render();
  }
}
class ET extends rr {
  constructor(t, n) {
    super(n);
    me(this, "light");
    this.light = new ii(), this.light.name = "light-group", this.setLight(t);
  }
  // 设置灯光
  setLight(t) {
    if (Array.isArray(t) && !t.length)
      return console.error("please add light configuration");
    let n, i;
    t.forEach(
      ({
        color: s,
        groundColor: o,
        type: a,
        intensity: l,
        distance: c,
        angle: h,
        penumbra: u,
        position: f,
        decay: d,
        helper: _
      }) => {
        switch (a) {
          case "point":
            n = new ad(s, l, c), _ && (i = new tM(n, 0.5));
            break;
          case "ambient":
            n = new Vy(s, l);
            break;
          case "hemisphere":
            n = new Fy(s, o, l), _ && (i = new iM(n, 0.5));
            break;
          case "spot":
            n = new od(
              s,
              l,
              c,
              h,
              u,
              d
            ), _ && (i = new eM(n, 0.5));
            break;
        }
        n.position.set(f == null ? void 0 : f.x, f == null ? void 0 : f.y, f == null ? void 0 : f.z), n.isSpotLight && this.light.add(n.target), n && this.light.add(n), i && this.light.add(i);
      }
    ), this.scene.add(this.light);
  }
}
class bT extends rr {
  constructor(t) {
    super(t);
    me(this, "raycaster");
    this.raycaster = new Qy();
  }
  update() {
    this.raycaster.setFromCamera(this.mouse, this._camera);
  }
}
class AT {
  constructor(e, t = rM) {
    me(this, "_canvas");
    me(this, "scene");
    me(this, "mousemove");
    me(this, "resources");
    me(this, "sizes");
    me(this, "camera");
    me(this, "renderer");
    me(this, "_config");
    me(this, "light");
    me(this, "time");
    me(this, "raycaster");
    me(this, "loading");
    me(this, "bloomPass");
    const n = document.getElementById(t.id);
    if (!n && !e)
      throw new Error("canvas has already been initialized.");
    switch (this._canvas = e || n, this._config = t, this.mousemove = new oM(this._canvas), this.sizes = new lM(this._config.size), this.scene = new zv(), this.time = new aM(), this.camera = new pT(this._config.camera, this), this.light = new ET(this._config.light, this), this.raycaster = new bT(this), this.renderer = new mT(this._config.renderer, this), this._config.rendererPass.type) {
      case "OUTLINE":
        break;
      case "BLOOM":
        this.bloomPass = new TT(
          this._config.rendererPass.bloomConfig,
          this
        );
        break;
    }
    this.loading = new uT(this), this.resources = new ZM(
      this._config.sources,
      this.loading.loadingManager
    ), this.sizes.on("resize", () => {
      this.resize();
    }), this.time.on("tick", () => {
      this.update();
    });
  }
  setOption(e) {
    this._config = { ...this._config, ...e };
  }
  resize() {
    var e, t;
    (e = this.camera) == null || e.resize(), (t = this.renderer) == null || t.resize();
  }
  update() {
    var e, t, n, i;
    switch ((e = this.camera) == null || e.update(), this.raycaster.update(), this._config.rendererPass.type) {
      case "OUTLINE":
        break;
      case "BLOOM":
        (t = this.bloomPass) == null || t.update();
        break;
      case "NONE":
        (n = this.renderer) == null || n.update();
        break;
      default:
        (i = this.renderer) == null || i.update();
        break;
    }
  }
  clearGroup(e) {
    if (!e.children.length) return;
    const t = (i) => {
      var s;
      (s = i.geometry) == null || s.dispose();
    }, n = (i) => {
      let s = i.children.filter((o) => o);
      s.forEach((o) => {
        o.children.length ? n(o) : (t(o), o.clear());
      }), i.clear(), s = null;
    };
    n(e);
  }
  dispose() {
    this.sizes.off("resize"), this.sizes.release(), this.time.off("tick"), this.time.release(), this.mousemove.off("mousemove"), this.mousemove.release(), this.scene.traverse((e) => {
      var t;
      (t = e == null ? void 0 : e.geometry) == null || t.dispose(), (e instanceof ii || e instanceof tt) && this.clearGroup(e);
    }), this.scene.clear(), this.renderer.dispose(), this.camera.dispose();
  }
}
me(AT, "__ins");
export {
  rM as CONFIG,
  AT as ThreeInstance
};
