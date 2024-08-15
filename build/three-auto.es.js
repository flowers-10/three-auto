var Bd = Object.defineProperty;
var zd = (r, e, t) => e in r ? Bd(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var pe = (r, e, t) => zd(r, typeof e != "symbol" ? e + "" : e, t);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Sl = "154", $i = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Qi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, kd = 0, pc = 1, Hd = 2, Lu = 1, Gd = 2, Wn = 3, ei = 0, Gt = 1, An = 2, Jn = 0, Es = 1, Ho = 2, mc = 3, gc = 4, Vd = 5, vs = 100, Wd = 101, Xd = 102, _c = 103, xc = 104, qd = 200, Yd = 201, jd = 202, Kd = 203, Du = 204, Iu = 205, Zd = 206, Jd = 207, $d = 208, Qd = 209, ep = 210, tp = 0, np = 1, ip = 2, Go = 3, sp = 4, rp = 5, ap = 6, op = 7, Uu = 0, lp = 1, cp = 2, $n = 0, hp = 1, up = 2, fp = 3, dp = 4, pp = 5, Nu = 300, Ps = 301, Ls = 302, Vo = 303, Wo = 304, Ca = 306, Ds = 1e3, on = 1001, xa = 1002, Mt = 1003, Xo = 1004, da = 1005, Ht = 1006, Ou = 1007, Xi = 1008, gi = 1009, mp = 1010, gp = 1011, Tl = 1012, Fu = 1013, fi = 1014, Yn = 1015, Qn = 1016, Bu = 1017, zu = 1018, Fi = 1020, _p = 1021, ln = 1023, xp = 1024, vp = 1025, Bi = 1026, Is = 1027, yp = 1028, ku = 1029, Mp = 1030, Hu = 1031, Gu = 1033, Va = 33776, Wa = 33777, Xa = 33778, qa = 33779, vc = 35840, yc = 35841, Mc = 35842, Sc = 35843, Sp = 36196, Tc = 37492, Ec = 37496, bc = 37808, Ac = 37809, wc = 37810, Rc = 37811, Cc = 37812, Pc = 37813, Lc = 37814, Dc = 37815, Ic = 37816, Uc = 37817, Nc = 37818, Oc = 37819, Fc = 37820, Bc = 37821, Ya = 36492, Tp = 36283, zc = 36284, kc = 36285, Hc = 36286, _r = 2300, Us = 2301, ja = 2302, Gc = 2400, Vc = 2401, Wc = 2402, Ep = 2500, bp = 0, Vu = 1, qo = 2, Wu = 3e3, zi = 3001, Ap = 3200, wp = 3201, Xu = 0, Rp = 1, ki = "", Te = "srgb", Mn = "srgb-linear", qu = "display-p3", Ka = 7680, Cp = 519, Pp = 512, Lp = 513, Dp = 514, Ip = 515, Up = 516, Np = 517, Op = 518, Fp = 519, Yo = 35044, Xc = "300 es", jo = 1035, jn = 2e3, va = 2001;
class Zi {
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
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const Rt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let qc = 1234567;
const cr = Math.PI / 180, Ns = 180 / Math.PI;
function fn() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Rt[r & 255] + Rt[r >> 8 & 255] + Rt[r >> 16 & 255] + Rt[r >> 24 & 255] + "-" + Rt[e & 255] + Rt[e >> 8 & 255] + "-" + Rt[e >> 16 & 15 | 64] + Rt[e >> 24 & 255] + "-" + Rt[t & 63 | 128] + Rt[t >> 8 & 255] + "-" + Rt[t >> 16 & 255] + Rt[t >> 24 & 255] + Rt[n & 255] + Rt[n >> 8 & 255] + Rt[n >> 16 & 255] + Rt[n >> 24 & 255]).toLowerCase();
}
function dt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function El(r, e) {
  return (r % e + e) % e;
}
function Bp(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function zp(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function hr(r, e, t) {
  return (1 - t) * r + t * e;
}
function kp(r, e, t, n) {
  return hr(r, e, 1 - Math.exp(-t * n));
}
function Hp(r, e = 1) {
  return e - Math.abs(El(r, e * 2) - e);
}
function Gp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function Vp(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Wp(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Xp(r, e) {
  return r + Math.random() * (e - r);
}
function qp(r) {
  return r * (0.5 - Math.random());
}
function Yp(r) {
  r !== void 0 && (qc = r);
  let e = qc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function jp(r) {
  return r * cr;
}
function Kp(r) {
  return r * Ns;
}
function Ko(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Yu(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function ya(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Zp(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), l = a(t / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), f = a((e - n) / 2), d = s((n - e) / 2), _ = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, l * u, l * f, o * c);
      break;
    case "YZY":
      r.set(l * f, o * h, l * u, o * c);
      break;
    case "ZXZ":
      r.set(l * u, l * f, o * h, o * c);
      break;
    case "XZX":
      r.set(o * h, l * _, l * d, o * c);
      break;
    case "YXY":
      r.set(l * d, o * h, l * _, o * c);
      break;
    case "ZYZ":
      r.set(l * _, l * d, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Kn(r, e) {
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
function je(r, e) {
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
const Jp = {
  DEG2RAD: cr,
  RAD2DEG: Ns,
  generateUUID: fn,
  clamp: dt,
  euclideanModulo: El,
  mapLinear: Bp,
  inverseLerp: zp,
  lerp: hr,
  damp: kp,
  pingpong: Hp,
  smoothstep: Gp,
  smootherstep: Vp,
  randInt: Wp,
  randFloat: Xp,
  randFloatSpread: qp,
  seededRandom: Yp,
  degToRad: jp,
  radToDeg: Kp,
  isPowerOfTwo: Ko,
  ceilPowerOfTwo: Yu,
  floorPowerOfTwo: ya,
  setQuaternionFromProperEuler: Zp,
  normalize: je,
  denormalize: Kn
};
class se {
  constructor(e = 0, t = 0) {
    se.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
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
    return Math.acos(dt(n, -1, 1));
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
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Oe {
  constructor(e, t, n, i, s, a, o, l, c) {
    Oe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c);
  }
  set(e, t, n, i, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
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
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], f = n[2], d = n[5], _ = n[8], g = i[0], m = i[3], p = i[6], y = i[1], x = i[4], v = i[7], S = i[2], T = i[5], E = i[8];
    return s[0] = a * g + o * y + l * S, s[3] = a * m + o * x + l * T, s[6] = a * p + o * v + l * E, s[1] = c * g + h * y + u * S, s[4] = c * m + h * x + u * T, s[7] = c * p + h * v + u * E, s[2] = f * g + d * y + _ * S, s[5] = f * m + d * x + _ * T, s[8] = f * p + d * v + _ * E, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * s * h + n * o * l + i * s * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, f = o * l - h * s, d = c * s - a * l, _ = t * u + n * f + i * d;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = u * g, e[1] = (i * c - h * n) * g, e[2] = (o * n - i * a) * g, e[3] = f * g, e[4] = (h * t - i * l) * g, e[5] = (i * s - o * t) * g, e[6] = d * g, e[7] = (n * l - c * t) * g, e[8] = (a * t - n * s) * g, this;
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
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -i * c,
      i * l,
      -i * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Za.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Za.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Za.makeTranslation(e, t)), this;
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
const Za = /* @__PURE__ */ new Oe();
function ju(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
function xr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
const Yc = {};
function ur(r) {
  r in Yc || (Yc[r] = !0, console.warn(r));
}
function bs(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Ja(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const $p = /* @__PURE__ */ new Oe().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), Qp = /* @__PURE__ */ new Oe().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]);
function em(r) {
  return r.convertSRGBToLinear().applyMatrix3(Qp);
}
function tm(r) {
  return r.applyMatrix3($p).convertLinearToSRGB();
}
const nm = {
  [Mn]: (r) => r,
  [Te]: (r) => r.convertSRGBToLinear(),
  [qu]: em
}, im = {
  [Mn]: (r) => r,
  [Te]: (r) => r.convertLinearToSRGB(),
  [qu]: tm
}, mn = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
  },
  get workingColorSpace() {
    return Mn;
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = nm[e], i = im[t];
    if (n === void 0 || i === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace);
  }
};
let es;
class Ku {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      es === void 0 && (es = xr("canvas")), es.width = e.width, es.height = e.height;
      const n = es.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = es;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = xr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = bs(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(bs(t[n] / 255) * 255) : t[n] = bs(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let sm = 0;
class Zu {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: sm++ }), this.uuid = fn(), this.data = e, this.version = 0;
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
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push($a(i[a].image)) : s.push($a(i[a]));
      } else
        s = $a(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function $a(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Ku.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let rm = 0;
class wt extends Zi {
  constructor(e = wt.DEFAULT_IMAGE, t = wt.DEFAULT_MAPPING, n = on, i = on, s = Ht, a = Xi, o = ln, l = gi, c = wt.DEFAULT_ANISOTROPY, h = ki) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: rm++ }), this.uuid = fn(), this.name = "", this.source = new Zu(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new se(0, 0), this.repeat = new se(1, 1), this.center = new se(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Oe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === zi ? Te : ki), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== Nu) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ds:
          e.x = e.x - Math.floor(e.x);
          break;
        case on:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case xa:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ds:
          e.y = e.y - Math.floor(e.y);
          break;
        case on:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case xa:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Te ? zi : Wu;
  }
  set encoding(e) {
    ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === zi ? Te : ki;
  }
}
wt.DEFAULT_IMAGE = null;
wt.DEFAULT_MAPPING = Nu;
wt.DEFAULT_ANISOTROPY = 1;
class Ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ke.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
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
    const l = e.elements, c = l[0], h = l[4], u = l[8], f = l[1], d = l[5], _ = l[9], g = l[2], m = l[6], p = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + d + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (c + 1) / 2, v = (d + 1) / 2, S = (p + 1) / 2, T = (h + f) / 4, E = (u + g) / 4, C = (_ + m) / 4;
      return x > v && x > S ? x < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), i = T / n, s = E / n) : v > S ? v < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(v), n = T / i, s = C / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(S), n = E / s, i = C / s), this.set(n, i, s, t), this;
    }
    let y = Math.sqrt((m - _) * (m - _) + (u - g) * (u - g) + (f - h) * (f - h));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (m - _) / y, this.y = (u - g) / y, this.z = (f - h) / y, this.w = Math.acos((c + d + p - 1) / 2), this;
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
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
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
class yn extends Zi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ke(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ke(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === zi ? Te : ki), this.texture = new wt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Ht, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Zu(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ju extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Mt, this.minFilter = Mt, this.wrapR = on, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class am extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Mt, this.minFilter = Mt, this.wrapR = on, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ln {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const f = s[a + 0], d = s[a + 1], _ = s[a + 2], g = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = d, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (u !== g || l !== f || c !== d || h !== _) {
      let m = 1 - o;
      const p = l * f + c * d + h * _ + u * g, y = p >= 0 ? 1 : -1, x = 1 - p * p;
      if (x > Number.EPSILON) {
        const S = Math.sqrt(x), T = Math.atan2(S, p * y);
        m = Math.sin(m * T) / S, o = Math.sin(o * T) / S;
      }
      const v = o * y;
      if (l = l * m + f * v, c = c * m + d * v, h = h * m + _ * v, u = u * m + g * v, m === 1 - o) {
        const S = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= S, c *= S, h *= S, u *= S;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = s[a], f = s[a + 1], d = s[a + 2], _ = s[a + 3];
    return e[t] = o * _ + h * u + l * d - c * f, e[t + 1] = l * _ + h * f + c * u - o * d, e[t + 2] = c * _ + h * d + o * f - l * u, e[t + 3] = h * _ - o * u - l * f - c * d, e;
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
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(s / 2), f = l(n / 2), d = l(i / 2), _ = l(s / 2);
    switch (a) {
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
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], f = n + o + u;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (h - l) * d, this._y = (s - c) * d, this._z = (a - i) * d;
    } else if (n > o && n > u) {
      const d = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / d, this._x = 0.25 * d, this._y = (i + a) / d, this._z = (s + c) / d;
    } else if (o > u) {
      const d = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - c) / d, this._x = (i + a) / d, this._y = 0.25 * d, this._z = (l + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / d, this._x = (s + c) / d, this._y = (l + h) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(dt(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - s * l, this._y = i * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * a + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, f = Math.sin(t * h) / c;
    return this._w = a * u + this._w * f, this._x = n * u + this._x * f, this._y = i * u + this._y * f, this._z = s * u + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
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
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
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
    return this.applyQuaternion(jc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(jc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = l * t + a * i - o * n, h = l * n + o * t - s * i, u = l * i + s * n - a * t, f = -s * t - a * n - o * i;
    return this.x = c * l + f * -s + h * -o - u * -a, this.y = h * l + f * -a + u * -s - c * -o, this.z = u * l + f * -o + c * -a - h * -s, this;
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
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
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
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Qa.copy(this).projectOnVector(e), this.sub(Qa);
  }
  reflect(e) {
    return this.sub(Qa.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(dt(n, -1, 1));
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
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Qa = /* @__PURE__ */ new L(), jc = /* @__PURE__ */ new Ln();
class ii {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Bn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Bn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Bn.copy(t).multiplyScalar(0.5);
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
    if (e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0)
      e.boundingBox === null && e.computeBoundingBox(), ts.copy(e.boundingBox), ts.applyMatrix4(e.matrixWorld), this.union(ts);
    else {
      const i = e.geometry;
      if (i !== void 0)
        if (t && i.attributes !== void 0 && i.attributes.position !== void 0) {
          const s = i.attributes.position;
          for (let a = 0, o = s.count; a < o; a++)
            Bn.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld), this.expandByPoint(Bn);
        } else
          i.boundingBox === null && i.computeBoundingBox(), ts.copy(i.boundingBox), ts.applyMatrix4(e.matrixWorld), this.union(ts);
    }
    const n = e.children;
    for (let i = 0, s = n.length; i < s; i++)
      this.expandByObject(n[i], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
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
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Bn), Bn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Js), Br.subVectors(this.max, Js), ns.subVectors(e.a, Js), is.subVectors(e.b, Js), ss.subVectors(e.c, Js), ri.subVectors(is, ns), ai.subVectors(ss, is), bi.subVectors(ns, ss);
    let t = [
      0,
      -ri.z,
      ri.y,
      0,
      -ai.z,
      ai.y,
      0,
      -bi.z,
      bi.y,
      ri.z,
      0,
      -ri.x,
      ai.z,
      0,
      -ai.x,
      bi.z,
      0,
      -bi.x,
      -ri.y,
      ri.x,
      0,
      -ai.y,
      ai.x,
      0,
      -bi.y,
      bi.x,
      0
    ];
    return !eo(t, ns, is, ss, Br) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !eo(t, ns, is, ss, Br)) ? !1 : (zr.crossVectors(ri, ai), t = [zr.x, zr.y, zr.z], eo(t, ns, is, ss, Br));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Bn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Bn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Fn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Fn = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Bn = /* @__PURE__ */ new L(), ts = /* @__PURE__ */ new ii(), ns = /* @__PURE__ */ new L(), is = /* @__PURE__ */ new L(), ss = /* @__PURE__ */ new L(), ri = /* @__PURE__ */ new L(), ai = /* @__PURE__ */ new L(), bi = /* @__PURE__ */ new L(), Js = /* @__PURE__ */ new L(), Br = /* @__PURE__ */ new L(), zr = /* @__PURE__ */ new L(), Ai = /* @__PURE__ */ new L();
function eo(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    Ai.fromArray(r, s);
    const o = i.x * Math.abs(Ai.x) + i.y * Math.abs(Ai.y) + i.z * Math.abs(Ai.z), l = e.dot(Ai), c = t.dot(Ai), h = n.dot(Ai);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const om = /* @__PURE__ */ new ii(), $s = /* @__PURE__ */ new L(), to = /* @__PURE__ */ new L();
class In {
  constructor(e = new L(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : om.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
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
    $s.subVectors(e, this.center);
    const t = $s.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector($s, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (to.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint($s.copy(e.center).add(to)), this.expandByPoint($s.copy(e.center).sub(to))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const zn = /* @__PURE__ */ new L(), no = /* @__PURE__ */ new L(), kr = /* @__PURE__ */ new L(), oi = /* @__PURE__ */ new L(), io = /* @__PURE__ */ new L(), Hr = /* @__PURE__ */ new L(), so = /* @__PURE__ */ new L();
class Lr {
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
    return this.origin.copy(this.at(e, zn)), this;
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
    const t = zn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (zn.copy(this.origin).addScaledVector(this.direction, t), zn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    no.copy(e).add(t).multiplyScalar(0.5), kr.copy(t).sub(e).normalize(), oi.copy(this.origin).sub(no);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(kr), o = oi.dot(this.direction), l = -oi.dot(kr), c = oi.lengthSq(), h = Math.abs(1 - a * a);
    let u, f, d, _;
    if (h > 0)
      if (u = a * l - o, f = a * o - l, _ = s * h, u >= 0)
        if (f >= -_)
          if (f <= _) {
            const g = 1 / h;
            u *= g, f *= g, d = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * l) + c;
          } else
            f = s, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * l) + c;
        else
          f = -s, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * l) + c;
      else
        f <= -_ ? (u = Math.max(0, -(-a * s + o)), f = u > 0 ? -s : Math.min(Math.max(-s, -l), s), d = -u * u + f * (f + 2 * l) + c) : f <= _ ? (u = 0, f = Math.min(Math.max(-s, -l), s), d = f * (f + 2 * l) + c) : (u = Math.max(0, -(a * s + o)), f = u > 0 ? s : Math.min(Math.max(-s, -l), s), d = -u * u + f * (f + 2 * l) + c);
    else
      f = a > 0 ? -s : s, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(no).addScaledVector(kr, f), d;
  }
  intersectSphere(e, t) {
    zn.subVectors(e.center, this.origin);
    const n = zn.dot(this.direction), i = zn.dot(zn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
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
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), h >= 0 ? (s = (e.min.y - f.y) * h, a = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, a = (e.min.y - f.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - f.z) * u, l = (e.max.z - f.z) * u) : (o = (e.max.z - f.z) * u, l = (e.min.z - f.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, zn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    io.subVectors(t, e), Hr.subVectors(n, e), so.crossVectors(io, Hr);
    let a = this.direction.dot(so), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    oi.subVectors(this.origin, e);
    const l = o * this.direction.dot(Hr.crossVectors(oi, Hr));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(io.cross(oi));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * oi.dot(so);
    return h < 0 ? null : this.at(h / a, s);
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
class Ne {
  constructor(e, t, n, i, s, a, o, l, c, h, u, f, d, _, g, m) {
    Ne.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c, h, u, f, d, _, g, m);
  }
  set(e, t, n, i, s, a, o, l, c, h, u, f, d, _, g, m) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = s, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = f, p[3] = d, p[7] = _, p[11] = g, p[15] = m, this;
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
    return new Ne().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / rs.setFromMatrixColumn(e, 0).length(), s = 1 / rs.setFromMatrixColumn(e, 1).length(), a = 1 / rs.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * h, d = a * u, _ = o * h, g = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = d + _ * c, t[5] = f - g * c, t[9] = -o * l, t[2] = g - f * c, t[6] = _ + d * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * h, d = l * u, _ = c * h, g = c * u;
      t[0] = f + g * o, t[4] = _ * o - d, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = d * o - _, t[6] = g + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * h, d = l * u, _ = c * h, g = c * u;
      t[0] = f - g * o, t[4] = -a * u, t[8] = _ + d * o, t[1] = d + _ * o, t[5] = a * h, t[9] = g - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * h, d = a * u, _ = o * h, g = o * u;
      t[0] = l * h, t[4] = _ * c - d, t[8] = f * c + g, t[1] = l * u, t[5] = g * c + f, t[9] = d * c - _, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, d = a * c, _ = o * l, g = o * c;
      t[0] = l * h, t[4] = g - f * u, t[8] = _ * u + d, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = d * u + _, t[10] = f - g * u;
    } else if (e.order === "XZY") {
      const f = a * l, d = a * c, _ = o * l, g = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = f * u + g, t[5] = a * h, t[9] = d * u - _, t[2] = _ * u - d, t[6] = o * h, t[10] = g * u + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(lm, e, cm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Kt.subVectors(e, t), Kt.lengthSq() === 0 && (Kt.z = 1), Kt.normalize(), li.crossVectors(n, Kt), li.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Kt.x += 1e-4 : Kt.z += 1e-4, Kt.normalize(), li.crossVectors(n, Kt)), li.normalize(), Gr.crossVectors(Kt, li), i[0] = li.x, i[4] = Gr.x, i[8] = Kt.x, i[1] = li.y, i[5] = Gr.y, i[9] = Kt.y, i[2] = li.z, i[6] = Gr.z, i[10] = Kt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], f = n[9], d = n[13], _ = n[2], g = n[6], m = n[10], p = n[14], y = n[3], x = n[7], v = n[11], S = n[15], T = i[0], E = i[4], C = i[8], M = i[12], A = i[1], W = i[5], X = i[9], I = i[13], F = i[2], z = i[6], Z = i[10], k = i[14], Y = i[3], Q = i[7], J = i[11], B = i[15];
    return s[0] = a * T + o * A + l * F + c * Y, s[4] = a * E + o * W + l * z + c * Q, s[8] = a * C + o * X + l * Z + c * J, s[12] = a * M + o * I + l * k + c * B, s[1] = h * T + u * A + f * F + d * Y, s[5] = h * E + u * W + f * z + d * Q, s[9] = h * C + u * X + f * Z + d * J, s[13] = h * M + u * I + f * k + d * B, s[2] = _ * T + g * A + m * F + p * Y, s[6] = _ * E + g * W + m * z + p * Q, s[10] = _ * C + g * X + m * Z + p * J, s[14] = _ * M + g * I + m * k + p * B, s[3] = y * T + x * A + v * F + S * Y, s[7] = y * E + x * W + v * z + S * Q, s[11] = y * C + x * X + v * Z + S * J, s[15] = y * M + x * I + v * k + S * B, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], f = e[10], d = e[14], _ = e[3], g = e[7], m = e[11], p = e[15];
    return _ * (+s * l * u - i * c * u - s * o * f + n * c * f + i * o * d - n * l * d) + g * (+t * l * d - t * c * f + s * a * f - i * a * d + i * c * h - s * l * h) + m * (+t * c * u - t * o * d - s * a * u + n * a * d + s * o * h - n * c * h) + p * (-i * o * h - t * l * u + t * o * f + i * a * u - n * a * f + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], f = e[10], d = e[11], _ = e[12], g = e[13], m = e[14], p = e[15], y = u * m * c - g * f * c + g * l * d - o * m * d - u * l * p + o * f * p, x = _ * f * c - h * m * c - _ * l * d + a * m * d + h * l * p - a * f * p, v = h * g * c - _ * u * c + _ * o * d - a * g * d - h * o * p + a * u * p, S = _ * u * l - h * g * l - _ * o * f + a * g * f + h * o * m - a * u * m, T = t * y + n * x + i * v + s * S;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const E = 1 / T;
    return e[0] = y * E, e[1] = (g * f * s - u * m * s - g * i * d + n * m * d + u * i * p - n * f * p) * E, e[2] = (o * m * s - g * l * s + g * i * c - n * m * c - o * i * p + n * l * p) * E, e[3] = (u * l * s - o * f * s - u * i * c + n * f * c + o * i * d - n * l * d) * E, e[4] = x * E, e[5] = (h * m * s - _ * f * s + _ * i * d - t * m * d - h * i * p + t * f * p) * E, e[6] = (_ * l * s - a * m * s - _ * i * c + t * m * c + a * i * p - t * l * p) * E, e[7] = (a * f * s - h * l * s + h * i * c - t * f * c - a * i * d + t * l * d) * E, e[8] = v * E, e[9] = (_ * u * s - h * g * s - _ * n * d + t * g * d + h * n * p - t * u * p) * E, e[10] = (a * g * s - _ * o * s + _ * n * c - t * g * c - a * n * p + t * o * p) * E, e[11] = (h * o * s - a * u * s - h * n * c + t * u * c + a * n * d - t * o * d) * E, e[12] = S * E, e[13] = (h * g * i - _ * u * i + _ * n * f - t * g * f - h * n * m + t * u * m) * E, e[14] = (_ * o * i - a * g * i - _ * n * l + t * g * l + a * n * m - t * o * m) * E, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * f + t * o * f) * E, this;
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
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      h * o + n,
      h * l - i * a,
      0,
      c * l - i * o,
      h * l + i * a,
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
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
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
    const i = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, u = o + o, f = s * c, d = s * h, _ = s * u, g = a * h, m = a * u, p = o * u, y = l * c, x = l * h, v = l * u, S = n.x, T = n.y, E = n.z;
    return i[0] = (1 - (g + p)) * S, i[1] = (d + v) * S, i[2] = (_ - x) * S, i[3] = 0, i[4] = (d - v) * T, i[5] = (1 - (f + p)) * T, i[6] = (m + y) * T, i[7] = 0, i[8] = (_ + x) * E, i[9] = (m - y) * E, i[10] = (1 - (f + g)) * E, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = rs.set(i[0], i[1], i[2]).length();
    const a = rs.set(i[4], i[5], i[6]).length(), o = rs.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], gn.copy(this);
    const c = 1 / s, h = 1 / a, u = 1 / o;
    return gn.elements[0] *= c, gn.elements[1] *= c, gn.elements[2] *= c, gn.elements[4] *= h, gn.elements[5] *= h, gn.elements[6] *= h, gn.elements[8] *= u, gn.elements[9] *= u, gn.elements[10] *= u, t.setFromRotationMatrix(gn), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = jn) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), f = (n + i) / (n - i);
    let d, _;
    if (o === jn)
      d = -(a + s) / (a - s), _ = -2 * a * s / (a - s);
    else if (o === va)
      d = -a / (a - s), _ = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = jn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), f = (t + e) * c, d = (n + i) * h;
    let _, g;
    if (o === jn)
      _ = (a + s) * u, g = -2 * u;
    else if (o === va)
      _ = s * u, g = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
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
const rs = /* @__PURE__ */ new L(), gn = /* @__PURE__ */ new Ne(), lm = /* @__PURE__ */ new L(0, 0, 0), cm = /* @__PURE__ */ new L(1, 1, 1), li = /* @__PURE__ */ new L(), Gr = /* @__PURE__ */ new L(), Kt = /* @__PURE__ */ new L(), Kc = /* @__PURE__ */ new Ne(), Zc = /* @__PURE__ */ new Ln();
class Pa {
  constructor(e = 0, t = 0, n = 0, i = Pa.DEFAULT_ORDER) {
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
    const i = e.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], f = i[6], d = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(dt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-dt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(dt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-dt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(dt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-dt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Kc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Kc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Zc.setFromEuler(this), this.setFromQuaternion(Zc, e);
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
Pa.DEFAULT_ORDER = "XYZ";
class La {
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
let hm = 0;
const Jc = /* @__PURE__ */ new L(), as = /* @__PURE__ */ new Ln(), kn = /* @__PURE__ */ new Ne(), Vr = /* @__PURE__ */ new L(), Qs = /* @__PURE__ */ new L(), um = /* @__PURE__ */ new L(), fm = /* @__PURE__ */ new Ln(), $c = /* @__PURE__ */ new L(1, 0, 0), Qc = /* @__PURE__ */ new L(0, 1, 0), eh = /* @__PURE__ */ new L(0, 0, 1), dm = { type: "added" }, th = { type: "removed" };
class Ze extends Zi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: hm++ }), this.uuid = fn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ze.DEFAULT_UP.clone();
    const e = new L(), t = new Pa(), n = new Ln(), i = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
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
        value: new Ne()
      },
      normalMatrix: {
        value: new Oe()
      }
    }), this.matrix = new Ne(), this.matrixWorld = new Ne(), this.matrixAutoUpdate = Ze.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new La(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return as.setFromAxisAngle(e, t), this.quaternion.multiply(as), this;
  }
  rotateOnWorldAxis(e, t) {
    return as.setFromAxisAngle(e, t), this.quaternion.premultiply(as), this;
  }
  rotateX(e) {
    return this.rotateOnAxis($c, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Qc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(eh, e);
  }
  translateOnAxis(e, t) {
    return Jc.copy(e).applyQuaternion(this.quaternion), this.position.add(Jc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis($c, e);
  }
  translateY(e) {
    return this.translateOnAxis(Qc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(eh, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(kn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Vr.copy(e) : Vr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Qs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? kn.lookAt(Qs, Vr, this.up) : kn.lookAt(Vr, Qs, this.up), this.quaternion.setFromRotationMatrix(kn), i && (kn.extractRotation(i.matrixWorld), as.setFromRotationMatrix(kn), this.quaternion.premultiply(as.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(dm)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(th)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(th);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), kn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), kn.multiply(e.parent.matrixWorld)), e.applyMatrix4(kn), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Qs, e, um), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Qs, fm, e), e;
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
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
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
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
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
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), f = a(e.skeletons), d = a(e.animations), _ = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d), _.length > 0 && (n.nodes = _);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Ze.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
Ze.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const _n = /* @__PURE__ */ new L(), Hn = /* @__PURE__ */ new L(), ro = /* @__PURE__ */ new L(), Gn = /* @__PURE__ */ new L(), os = /* @__PURE__ */ new L(), ls = /* @__PURE__ */ new L(), nh = /* @__PURE__ */ new L(), ao = /* @__PURE__ */ new L(), oo = /* @__PURE__ */ new L(), lo = /* @__PURE__ */ new L();
let Wr = !1;
class vn {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), _n.subVectors(e, t), i.cross(_n);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    _n.subVectors(i, t), Hn.subVectors(n, t), ro.subVectors(e, t);
    const a = _n.dot(_n), o = _n.dot(Hn), l = _n.dot(ro), c = Hn.dot(Hn), h = Hn.dot(ro), u = a * c - o * o;
    if (u === 0)
      return s.set(-2, -1, -1);
    const f = 1 / u, d = (c * l - o * h) * f, _ = (a * h - o * l) * f;
    return s.set(1 - d - _, _, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Gn), Gn.x >= 0 && Gn.y >= 0 && Gn.x + Gn.y <= 1;
  }
  static getUV(e, t, n, i, s, a, o, l) {
    return Wr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Wr = !0), this.getInterpolation(e, t, n, i, s, a, o, l);
  }
  static getInterpolation(e, t, n, i, s, a, o, l) {
    return this.getBarycoord(e, t, n, i, Gn), l.setScalar(0), l.addScaledVector(s, Gn.x), l.addScaledVector(a, Gn.y), l.addScaledVector(o, Gn.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return _n.subVectors(n, t), Hn.subVectors(e, t), _n.cross(Hn).dot(i) < 0;
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
    return _n.subVectors(this.c, this.b), Hn.subVectors(this.a, this.b), _n.cross(Hn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return vn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return vn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Wr === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Wr = !0), vn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return vn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return vn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return vn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    os.subVectors(i, n), ls.subVectors(s, n), ao.subVectors(e, n);
    const l = os.dot(ao), c = ls.dot(ao);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    oo.subVectors(e, i);
    const h = os.dot(oo), u = ls.dot(oo);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(os, a);
    lo.subVectors(e, s);
    const d = os.dot(lo), _ = ls.dot(lo);
    if (_ >= 0 && d <= _)
      return t.copy(s);
    const g = d * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), t.copy(n).addScaledVector(ls, o);
    const m = h * _ - d * u;
    if (m <= 0 && u - h >= 0 && d - _ >= 0)
      return nh.subVectors(s, i), o = (u - h) / (u - h + (d - _)), t.copy(i).addScaledVector(nh, o);
    const p = 1 / (m + g + f);
    return a = g * p, o = f * p, t.copy(n).addScaledVector(os, a).addScaledVector(ls, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let pm = 0;
class Cn extends Zi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: pm++ }), this.uuid = fn(), this.name = "", this.type = "Material", this.blending = Es, this.side = ei, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Du, this.blendDst = Iu, this.blendEquation = vs, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Go, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Cp, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ka, this.stencilZFail = Ka, this.stencilZPass = Ka, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Es && (n.blending = this.blending), this.side !== ei && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = this.alphaHash), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
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
}
const $u = {
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
}, xn = { h: 0, s: 0, l: 0 }, Xr = { h: 0, s: 0, l: 0 };
function co(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Ee {
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
  setHex(e, t = Te) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, mn.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = mn.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, mn.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = mn.workingColorSpace) {
    if (e = El(e, 1), t = dt(t, 0, 1), n = dt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = co(a, s, e + 1 / 3), this.g = co(a, s, e), this.b = co(a, s, e - 1 / 3);
    }
    return mn.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Te) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
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
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Te) {
    const n = $u[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = bs(e.r), this.g = bs(e.g), this.b = bs(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ja(e.r), this.g = Ja(e.g), this.b = Ja(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Te) {
    return mn.fromWorkingColorSpace(Ct.copy(this), e), Math.round(dt(Ct.r * 255, 0, 255)) * 65536 + Math.round(dt(Ct.g * 255, 0, 255)) * 256 + Math.round(dt(Ct.b * 255, 0, 255));
  }
  getHexString(e = Te) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = mn.workingColorSpace) {
    mn.fromWorkingColorSpace(Ct.copy(this), t);
    const n = Ct.r, i = Ct.g, s = Ct.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
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
  getRGB(e, t = mn.workingColorSpace) {
    return mn.fromWorkingColorSpace(Ct.copy(this), t), e.r = Ct.r, e.g = Ct.g, e.b = Ct.b, e;
  }
  getStyle(e = Te) {
    mn.fromWorkingColorSpace(Ct.copy(this), e);
    const t = Ct.r, n = Ct.g, i = Ct.b;
    return e !== Te ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(xn), xn.h += e, xn.s += t, xn.l += n, this.setHSL(xn.h, xn.s, xn.l), this;
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
    this.getHSL(xn), e.getHSL(Xr);
    const n = hr(xn.h, Xr.h, t), i = hr(xn.s, Xr.s, t), s = hr(xn.l, Xr.l, t);
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
const Ct = /* @__PURE__ */ new Ee();
Ee.NAMES = $u;
class cn extends Cn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Uu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ht = /* @__PURE__ */ new L(), qr = /* @__PURE__ */ new se();
class Tt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Yo, this.updateRange = { offset: 0, count: -1 }, this.gpuType = Yn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
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
        qr.fromBufferAttribute(this, t), qr.applyMatrix3(e), this.setXY(t, qr.x, qr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ht.fromBufferAttribute(this, t), ht.applyMatrix3(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyMatrix4(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyNormalMatrix(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.transformDirection(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = je(t, this.array), n = je(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = je(t, this.array), n = je(n, this.array), i = je(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = je(t, this.array), n = je(n, this.array), i = je(i, this.array), s = je(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== Yo && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Qu extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ef extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Et extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let mm = 0;
const sn = /* @__PURE__ */ new Ne(), ho = /* @__PURE__ */ new Ze(), cs = /* @__PURE__ */ new L(), Zt = /* @__PURE__ */ new ii(), er = /* @__PURE__ */ new ii(), yt = /* @__PURE__ */ new L();
class kt extends Zi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: mm++ }), this.uuid = fn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ju(e) ? ef : Qu)(e, 1) : this.index = e, this;
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
      const s = new Oe().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return sn.makeRotationFromQuaternion(e), this.applyMatrix4(sn), this;
  }
  rotateX(e) {
    return sn.makeRotationX(e), this.applyMatrix4(sn), this;
  }
  rotateY(e) {
    return sn.makeRotationY(e), this.applyMatrix4(sn), this;
  }
  rotateZ(e) {
    return sn.makeRotationZ(e), this.applyMatrix4(sn), this;
  }
  translate(e, t, n) {
    return sn.makeTranslation(e, t, n), this.applyMatrix4(sn), this;
  }
  scale(e, t, n) {
    return sn.makeScale(e, t, n), this.applyMatrix4(sn), this;
  }
  lookAt(e) {
    return ho.lookAt(e), ho.updateMatrix(), this.applyMatrix4(ho.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(cs).negate(), this.translate(cs.x, cs.y, cs.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Et(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ii());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Zt.setFromBufferAttribute(s), this.morphTargetsRelative ? (yt.addVectors(this.boundingBox.min, Zt.min), this.boundingBox.expandByPoint(yt), yt.addVectors(this.boundingBox.max, Zt.max), this.boundingBox.expandByPoint(yt)) : (this.boundingBox.expandByPoint(Zt.min), this.boundingBox.expandByPoint(Zt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new In());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Zt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          er.setFromBufferAttribute(o), this.morphTargetsRelative ? (yt.addVectors(Zt.min, er.min), Zt.expandByPoint(yt), yt.addVectors(Zt.max, er.max), Zt.expandByPoint(yt)) : (Zt.expandByPoint(er.min), Zt.expandByPoint(er.max));
        }
      Zt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        yt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(yt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            yt.fromBufferAttribute(o, c), l && (cs.fromBufferAttribute(e, c), yt.add(cs)), i = Math.max(i, n.distanceToSquared(yt));
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
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Tt(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array, c = [], h = [];
    for (let A = 0; A < o; A++)
      c[A] = new L(), h[A] = new L();
    const u = new L(), f = new L(), d = new L(), _ = new se(), g = new se(), m = new se(), p = new L(), y = new L();
    function x(A, W, X) {
      u.fromArray(i, A * 3), f.fromArray(i, W * 3), d.fromArray(i, X * 3), _.fromArray(a, A * 2), g.fromArray(a, W * 2), m.fromArray(a, X * 2), f.sub(u), d.sub(u), g.sub(_), m.sub(_);
      const I = 1 / (g.x * m.y - m.x * g.y);
      isFinite(I) && (p.copy(f).multiplyScalar(m.y).addScaledVector(d, -g.y).multiplyScalar(I), y.copy(d).multiplyScalar(g.x).addScaledVector(f, -m.x).multiplyScalar(I), c[A].add(p), c[W].add(p), c[X].add(p), h[A].add(y), h[W].add(y), h[X].add(y));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, W = v.length; A < W; ++A) {
      const X = v[A], I = X.start, F = X.count;
      for (let z = I, Z = I + F; z < Z; z += 3)
        x(
          n[z + 0],
          n[z + 1],
          n[z + 2]
        );
    }
    const S = new L(), T = new L(), E = new L(), C = new L();
    function M(A) {
      E.fromArray(s, A * 3), C.copy(E);
      const W = c[A];
      S.copy(W), S.sub(E.multiplyScalar(E.dot(W))).normalize(), T.crossVectors(C, W);
      const I = T.dot(h[A]) < 0 ? -1 : 1;
      l[A * 4] = S.x, l[A * 4 + 1] = S.y, l[A * 4 + 2] = S.z, l[A * 4 + 3] = I;
    }
    for (let A = 0, W = v.length; A < W; ++A) {
      const X = v[A], I = X.start, F = X.count;
      for (let z = I, Z = I + F; z < Z; z += 3)
        M(n[z + 0]), M(n[z + 1]), M(n[z + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Tt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, d = n.count; f < d; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new L(), s = new L(), a = new L(), o = new L(), l = new L(), c = new L(), h = new L(), u = new L();
      if (e)
        for (let f = 0, d = e.count; f < d; f += 3) {
          const _ = e.getX(f + 0), g = e.getX(f + 1), m = e.getX(f + 2);
          i.fromBufferAttribute(t, _), s.fromBufferAttribute(t, g), a.fromBufferAttribute(t, m), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let f = 0, d = t.count; f < d; f += 3)
          i.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      yt.fromBufferAttribute(e, t), yt.normalize(), e.setXYZ(t, yt.x, yt.y, yt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, f = new c.constructor(l.length * h);
      let d = 0, _ = 0;
      for (let g = 0, m = l.length; g < m; g++) {
        o.isInterleavedBufferAttribute ? d = l[g] * o.data.stride + o.offset : d = l[g] * h;
        for (let p = 0; p < h; p++)
          f[_++] = c[d++];
      }
      return new Tt(f, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new kt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], d = e(f, n);
        l.push(d);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
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
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
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
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ih = /* @__PURE__ */ new Ne(), wi = /* @__PURE__ */ new Lr(), Yr = /* @__PURE__ */ new In(), sh = /* @__PURE__ */ new L(), hs = /* @__PURE__ */ new L(), us = /* @__PURE__ */ new L(), fs = /* @__PURE__ */ new L(), uo = /* @__PURE__ */ new L(), jr = /* @__PURE__ */ new L(), Kr = /* @__PURE__ */ new se(), Zr = /* @__PURE__ */ new se(), Jr = /* @__PURE__ */ new se(), rh = /* @__PURE__ */ new L(), ah = /* @__PURE__ */ new L(), oh = /* @__PURE__ */ new L(), $r = /* @__PURE__ */ new L(), Qr = /* @__PURE__ */ new L();
class Lt extends Ze {
  constructor(e = new kt(), t = new cn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      jr.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], u = s[l];
        h !== 0 && (uo.fromBufferAttribute(u, e), a ? jr.addScaledVector(uo, h) : jr.addScaledVector(uo.sub(t), h));
      }
      t.add(jr);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Yr.copy(n.boundingSphere), Yr.applyMatrix4(s), wi.copy(e.ray).recast(e.near), !(Yr.containsPoint(wi.origin) === !1 && (wi.intersectSphere(Yr, sh) === null || wi.origin.distanceToSquared(sh) > (e.far - e.near) ** 2)) && (ih.copy(s).invert(), wi.copy(e.ray).applyMatrix4(ih), !(n.boundingBox !== null && wi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, wi)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, f = s.groups, d = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, g = f.length; _ < g; _++) {
          const m = f[_], p = a[m.materialIndex], y = Math.max(m.start, d.start), x = Math.min(o.count, Math.min(m.start + m.count, d.start + d.count));
          for (let v = y, S = x; v < S; v += 3) {
            const T = o.getX(v), E = o.getX(v + 1), C = o.getX(v + 2);
            i = ea(this, p, e, n, c, h, u, T, E, C), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const _ = Math.max(0, d.start), g = Math.min(o.count, d.start + d.count);
        for (let m = _, p = g; m < p; m += 3) {
          const y = o.getX(m), x = o.getX(m + 1), v = o.getX(m + 2);
          i = ea(this, a, e, n, c, h, u, y, x, v), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, g = f.length; _ < g; _++) {
          const m = f[_], p = a[m.materialIndex], y = Math.max(m.start, d.start), x = Math.min(l.count, Math.min(m.start + m.count, d.start + d.count));
          for (let v = y, S = x; v < S; v += 3) {
            const T = v, E = v + 1, C = v + 2;
            i = ea(this, p, e, n, c, h, u, T, E, C), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const _ = Math.max(0, d.start), g = Math.min(l.count, d.start + d.count);
        for (let m = _, p = g; m < p; m += 3) {
          const y = m, x = m + 1, v = m + 2;
          i = ea(this, a, e, n, c, h, u, y, x, v), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function gm(r, e, t, n, i, s, a, o) {
  let l;
  if (e.side === Gt ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, e.side === ei, o), l === null) return null;
  Qr.copy(o), Qr.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(Qr);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Qr.clone(),
    object: r
  };
}
function ea(r, e, t, n, i, s, a, o, l, c) {
  r.getVertexPosition(o, hs), r.getVertexPosition(l, us), r.getVertexPosition(c, fs);
  const h = gm(r, e, t, n, hs, us, fs, $r);
  if (h) {
    i && (Kr.fromBufferAttribute(i, o), Zr.fromBufferAttribute(i, l), Jr.fromBufferAttribute(i, c), h.uv = vn.getInterpolation($r, hs, us, fs, Kr, Zr, Jr, new se())), s && (Kr.fromBufferAttribute(s, o), Zr.fromBufferAttribute(s, l), Jr.fromBufferAttribute(s, c), h.uv1 = vn.getInterpolation($r, hs, us, fs, Kr, Zr, Jr, new se()), h.uv2 = h.uv1), a && (rh.fromBufferAttribute(a, o), ah.fromBufferAttribute(a, l), oh.fromBufferAttribute(a, c), h.normal = vn.getInterpolation($r, hs, us, fs, rh, ah, oh, new L()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: l,
      c,
      normal: new L(),
      materialIndex: 0
    };
    vn.getNormal(hs, us, fs, u.normal), h.face = u;
  }
  return h;
}
class Xs extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let f = 0, d = 0;
    _("z", "y", "x", -1, -1, n, t, e, a, s, 0), _("z", "y", "x", 1, -1, n, t, -e, a, s, 1), _("x", "z", "y", 1, 1, e, n, t, i, a, 2), _("x", "z", "y", 1, -1, e, n, -t, i, a, 3), _("x", "y", "z", 1, -1, e, t, n, i, s, 4), _("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Et(c, 3)), this.setAttribute("normal", new Et(h, 3)), this.setAttribute("uv", new Et(u, 2));
    function _(g, m, p, y, x, v, S, T, E, C, M) {
      const A = v / E, W = S / C, X = v / 2, I = S / 2, F = T / 2, z = E + 1, Z = C + 1;
      let k = 0, Y = 0;
      const Q = new L();
      for (let J = 0; J < Z; J++) {
        const B = J * W - I;
        for (let G = 0; G < z; G++) {
          const le = G * A - X;
          Q[g] = le * y, Q[m] = B * x, Q[p] = F, c.push(Q.x, Q.y, Q.z), Q[g] = 0, Q[m] = 0, Q[p] = T > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), u.push(G / E), u.push(1 - J / C), k += 1;
        }
      }
      for (let J = 0; J < C; J++)
        for (let B = 0; B < E; B++) {
          const G = f + B + z * J, le = f + B + z * (J + 1), ie = f + (B + 1) + z * (J + 1), ae = f + (B + 1) + z * J;
          l.push(G, le, ae), l.push(le, ie, ae), Y += 6;
        }
      o.addGroup(d, Y, M), d += Y, f += k;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Xs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Os(r) {
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
function Ft(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Os(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function _m(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function tf(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : Mn;
}
const Ma = { clone: Os, merge: Ft };
var xm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, vm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Qt extends Cn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = xm, this.fragmentShader = vm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Os(e.uniforms), this.uniformsGroups = _m(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
let nf = class extends Ze {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ne(), this.projectionMatrix = new Ne(), this.projectionMatrixInverse = new Ne(), this.coordinateSystem = jn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
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
class Bt extends nf {
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
    this.fov = Ns * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(cr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ns * 2 * Math.atan(
      Math.tan(cr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
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
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(cr * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ds = -90, ps = 1;
class ym extends Ze {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
    const i = new Bt(ds, ps, e, t);
    i.layers = this.layers, this.add(i);
    const s = new Bt(ds, ps, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Bt(ds, ps, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Bt(ds, ps, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Bt(ds, ps, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Bt(ds, ps, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === jn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === va)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [i, s, a, o, l, c] = this.children, h = e.getRenderTarget(), u = e.toneMapping, f = e.xr.enabled;
    e.toneMapping = $n, e.xr.enabled = !1;
    const d = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}
class bl extends wt {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Ps, super(e, t, n, i, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Mm extends yn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === zi ? Te : ki), this.texture = new bl(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ht;
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
    }, i = new Xs(5, 5, 5), s = new Qt({
      name: "CubemapFromEquirect",
      uniforms: Os(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Gt,
      blending: Jn
    });
    s.uniforms.tEquirect.value = t;
    const a = new Lt(i, s), o = t.minFilter;
    return t.minFilter === Xi && (t.minFilter = Ht), new ym(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const fo = /* @__PURE__ */ new L(), Sm = /* @__PURE__ */ new L(), Tm = /* @__PURE__ */ new Oe();
class Di {
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
    const i = fo.subVectors(n, t).cross(Sm.subVectors(e, t)).normalize();
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
    const n = e.delta(fo), i = this.normal.dot(n);
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
    const n = t || Tm.getNormalMatrix(e), i = this.coplanarPoint(fo).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const Ri = /* @__PURE__ */ new In(), ta = /* @__PURE__ */ new L();
class Al {
  constructor(e = new Di(), t = new Di(), n = new Di(), i = new Di(), s = new Di(), a = new Di()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = jn) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], f = i[7], d = i[8], _ = i[9], g = i[10], m = i[11], p = i[12], y = i[13], x = i[14], v = i[15];
    if (n[0].setComponents(l - s, f - c, m - d, v - p).normalize(), n[1].setComponents(l + s, f + c, m + d, v + p).normalize(), n[2].setComponents(l + a, f + h, m + _, v + y).normalize(), n[3].setComponents(l - a, f - h, m - _, v - y).normalize(), n[4].setComponents(l - o, f - u, m - g, v - x).normalize(), t === jn)
      n[5].setComponents(l + o, f + u, m + g, v + x).normalize();
    else if (t === va)
      n[5].setComponents(o, u, g, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ri);
  }
  intersectsSprite(e) {
    return Ri.center.set(0, 0, 0), Ri.radius = 0.7071067811865476, Ri.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ri);
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
      if (ta.x = i.normal.x > 0 ? e.max.x : e.min.x, ta.y = i.normal.y > 0 ? e.max.y : e.min.y, ta.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(ta) < 0)
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
function sf() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
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
function Em(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, h) {
    const u = c.array, f = c.usage, d = r.createBuffer();
    r.bindBuffer(h, d), r.bufferData(h, u, f), c.onUploadCallback();
    let _;
    if (u instanceof Float32Array)
      _ = r.FLOAT;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          _ = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = r.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      _ = r.SHORT;
    else if (u instanceof Uint32Array)
      _ = r.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      _ = r.INT;
    else if (u instanceof Int8Array)
      _ = r.BYTE;
    else if (u instanceof Uint8Array)
      _ = r.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      _ = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: d,
      type: _,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, h, u) {
    const f = h.array, d = h.updateRange;
    r.bindBuffer(u, c), d.count === -1 ? r.bufferSubData(u, 0, f) : (t ? r.bufferSubData(
      u,
      d.offset * f.BYTES_PER_ELEMENT,
      f,
      d.offset,
      d.count
    ) : r.bufferSubData(
      u,
      d.offset * f.BYTES_PER_ELEMENT,
      f.subarray(d.offset, d.offset + d.count)
    ), d.count = -1), h.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (r.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (s(u.buffer, c, h), u.version = c.version);
  }
  return {
    get: a,
    remove: o,
    update: l
  };
}
class wl extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, f = t / l, d = [], _ = [], g = [], m = [];
    for (let p = 0; p < h; p++) {
      const y = p * f - a;
      for (let x = 0; x < c; x++) {
        const v = x * u - s;
        _.push(v, -y, 0), g.push(0, 0, 1), m.push(x / o), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let y = 0; y < o; y++) {
        const x = y + c * p, v = y + c * (p + 1), S = y + 1 + c * (p + 1), T = y + 1 + c * p;
        d.push(x, v, T), d.push(v, S, T);
      }
    this.setIndex(d), this.setAttribute("position", new Et(_, 3)), this.setAttribute("normal", new Et(g, 3)), this.setAttribute("uv", new Et(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new wl(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var bm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Am = `#ifdef USE_ALPHAHASH
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
#endif`, wm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Rm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Cm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Pm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Lm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Dm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Im = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Um = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Nm = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Om = `#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`, Fm = `#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Bm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`, zm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, km = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Hm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Gm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Vm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Wm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Xm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, qm = `#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`, Ym = `#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`, jm = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Km = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Zm = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Jm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, $m = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Qm = "gl_FragColor = linearToOutputTexel( gl_FragColor );", eg = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, tg = `#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`, ng = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, ig = `#ifdef USE_ENVMAP
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
#endif`, sg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, rg = `#ifdef USE_ENVMAP
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
#endif`, ag = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, og = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, lg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, cg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, hg = `#ifdef USE_GRADIENTMAP
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
}`, ug = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, fg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, dg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, pg = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, mg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`, gg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`, _g = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, xg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, vg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, yg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Mg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`, Sg = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`, Tg = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Eg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, bg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Ag = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, wg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Rg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Cg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Pg = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, Lg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Dg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Ig = `#if defined( USE_POINTS_UV )
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
#endif`, Ug = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ng = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Og = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Fg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Bg = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, zg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, kg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, Hg = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Gg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Vg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Wg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Xg = `#ifdef USE_NORMALMAP
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
#endif`, qg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Yg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, jg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Kg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Zg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Jg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`, $g = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Qg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, e_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, t_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, n_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, i_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, s_ = `#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, r_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, a_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, o_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, l_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, c_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, h_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, u_ = `#ifdef USE_SKINNING
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
#endif`, f_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, d_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, p_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, m_ = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, g_ = `#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, __ = `#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, x_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, v_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, y_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, M_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const S_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, T_ = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, E_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, b_ = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, A_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, w_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, R_ = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`, C_ = `#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`, P_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`, L_ = `#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, D_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, I_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, U_ = `uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, N_ = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, O_ = `#include <common>
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
	#include <morphcolor_vertex>
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
}`, F_ = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`, B_ = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`, z_ = `#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`, k_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`, H_ = `#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`, G_ = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, V_ = `#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, W_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`, X_ = `#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`, q_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`, Y_ = `#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, j_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`, K_ = `#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`, Z_ = `uniform float size;
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
}`, J_ = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`, $_ = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`, Q_ = `uniform vec3 color;
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
}`, e0 = `uniform float rotation;
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
}`, t0 = `uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`, Ie = {
  alphahash_fragment: bm,
  alphahash_pars_fragment: Am,
  alphamap_fragment: wm,
  alphamap_pars_fragment: Rm,
  alphatest_fragment: Cm,
  alphatest_pars_fragment: Pm,
  aomap_fragment: Lm,
  aomap_pars_fragment: Dm,
  begin_vertex: Im,
  beginnormal_vertex: Um,
  bsdfs: Nm,
  iridescence_fragment: Om,
  bumpmap_pars_fragment: Fm,
  clipping_planes_fragment: Bm,
  clipping_planes_pars_fragment: zm,
  clipping_planes_pars_vertex: km,
  clipping_planes_vertex: Hm,
  color_fragment: Gm,
  color_pars_fragment: Vm,
  color_pars_vertex: Wm,
  color_vertex: Xm,
  common: qm,
  cube_uv_reflection_fragment: Ym,
  defaultnormal_vertex: jm,
  displacementmap_pars_vertex: Km,
  displacementmap_vertex: Zm,
  emissivemap_fragment: Jm,
  emissivemap_pars_fragment: $m,
  colorspace_fragment: Qm,
  colorspace_pars_fragment: eg,
  envmap_fragment: tg,
  envmap_common_pars_fragment: ng,
  envmap_pars_fragment: ig,
  envmap_pars_vertex: sg,
  envmap_physical_pars_fragment: gg,
  envmap_vertex: rg,
  fog_vertex: ag,
  fog_pars_vertex: og,
  fog_fragment: lg,
  fog_pars_fragment: cg,
  gradientmap_pars_fragment: hg,
  lightmap_fragment: ug,
  lightmap_pars_fragment: fg,
  lights_lambert_fragment: dg,
  lights_lambert_pars_fragment: pg,
  lights_pars_begin: mg,
  lights_toon_fragment: _g,
  lights_toon_pars_fragment: xg,
  lights_phong_fragment: vg,
  lights_phong_pars_fragment: yg,
  lights_physical_fragment: Mg,
  lights_physical_pars_fragment: Sg,
  lights_fragment_begin: Tg,
  lights_fragment_maps: Eg,
  lights_fragment_end: bg,
  logdepthbuf_fragment: Ag,
  logdepthbuf_pars_fragment: wg,
  logdepthbuf_pars_vertex: Rg,
  logdepthbuf_vertex: Cg,
  map_fragment: Pg,
  map_pars_fragment: Lg,
  map_particle_fragment: Dg,
  map_particle_pars_fragment: Ig,
  metalnessmap_fragment: Ug,
  metalnessmap_pars_fragment: Ng,
  morphcolor_vertex: Og,
  morphnormal_vertex: Fg,
  morphtarget_pars_vertex: Bg,
  morphtarget_vertex: zg,
  normal_fragment_begin: kg,
  normal_fragment_maps: Hg,
  normal_pars_fragment: Gg,
  normal_pars_vertex: Vg,
  normal_vertex: Wg,
  normalmap_pars_fragment: Xg,
  clearcoat_normal_fragment_begin: qg,
  clearcoat_normal_fragment_maps: Yg,
  clearcoat_pars_fragment: jg,
  iridescence_pars_fragment: Kg,
  opaque_fragment: Zg,
  packing: Jg,
  premultiplied_alpha_fragment: $g,
  project_vertex: Qg,
  dithering_fragment: e_,
  dithering_pars_fragment: t_,
  roughnessmap_fragment: n_,
  roughnessmap_pars_fragment: i_,
  shadowmap_pars_fragment: s_,
  shadowmap_pars_vertex: r_,
  shadowmap_vertex: a_,
  shadowmask_pars_fragment: o_,
  skinbase_vertex: l_,
  skinning_pars_vertex: c_,
  skinning_vertex: h_,
  skinnormal_vertex: u_,
  specularmap_fragment: f_,
  specularmap_pars_fragment: d_,
  tonemapping_fragment: p_,
  tonemapping_pars_fragment: m_,
  transmission_fragment: g_,
  transmission_pars_fragment: __,
  uv_pars_fragment: x_,
  uv_pars_vertex: v_,
  uv_vertex: y_,
  worldpos_vertex: M_,
  background_vert: S_,
  background_frag: T_,
  backgroundCube_vert: E_,
  backgroundCube_frag: b_,
  cube_vert: A_,
  cube_frag: w_,
  depth_vert: R_,
  depth_frag: C_,
  distanceRGBA_vert: P_,
  distanceRGBA_frag: L_,
  equirect_vert: D_,
  equirect_frag: I_,
  linedashed_vert: U_,
  linedashed_frag: N_,
  meshbasic_vert: O_,
  meshbasic_frag: F_,
  meshlambert_vert: B_,
  meshlambert_frag: z_,
  meshmatcap_vert: k_,
  meshmatcap_frag: H_,
  meshnormal_vert: G_,
  meshnormal_frag: V_,
  meshphong_vert: W_,
  meshphong_frag: X_,
  meshphysical_vert: q_,
  meshphysical_frag: Y_,
  meshtoon_vert: j_,
  meshtoon_frag: K_,
  points_vert: Z_,
  points_frag: J_,
  shadow_vert: $_,
  shadow_frag: Q_,
  sprite_vert: e0,
  sprite_frag: t0
}, oe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  envmap: {
    envMap: { value: null },
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
    aoMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Oe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Oe() },
    normalScale: { value: /* @__PURE__ */ new se(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Oe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Oe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ee(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
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
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Oe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ee(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new se(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Oe() },
    alphaTest: { value: 0 }
  }
}, bn = {
  basic: {
    uniforms: /* @__PURE__ */ Ft([
      oe.common,
      oe.specularmap,
      oe.envmap,
      oe.aomap,
      oe.lightmap,
      oe.fog
    ]),
    vertexShader: Ie.meshbasic_vert,
    fragmentShader: Ie.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new Ee(0) }
      }
    ]),
    vertexShader: Ie.meshlambert_vert,
    fragmentShader: Ie.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new Ee(0) },
        specular: { value: /* @__PURE__ */ new Ee(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ie.meshphong_vert,
    fragmentShader: Ie.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new Ee(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Ie.meshphysical_vert,
    fragmentShader: Ie.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ft([
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
        emissive: { value: /* @__PURE__ */ new Ee(0) }
      }
    ]),
    vertexShader: Ie.meshtoon_vert,
    fragmentShader: Ie.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ft([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      oe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ie.meshmatcap_vert,
    fragmentShader: Ie.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ft([
      oe.points,
      oe.fog
    ]),
    vertexShader: Ie.points_vert,
    fragmentShader: Ie.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ft([
      oe.common,
      oe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ie.linedashed_vert,
    fragmentShader: Ie.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ft([
      oe.common,
      oe.displacementmap
    ]),
    vertexShader: Ie.depth_vert,
    fragmentShader: Ie.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ft([
      oe.common,
      oe.bumpmap,
      oe.normalmap,
      oe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.meshnormal_vert,
    fragmentShader: Ie.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ft([
      oe.sprite,
      oe.fog
    ]),
    vertexShader: Ie.sprite_vert,
    fragmentShader: Ie.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Oe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ie.background_vert,
    fragmentShader: Ie.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ie.backgroundCube_vert,
    fragmentShader: Ie.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ie.cube_vert,
    fragmentShader: Ie.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ie.equirect_vert,
    fragmentShader: Ie.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Ft([
      oe.common,
      oe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ie.distanceRGBA_vert,
    fragmentShader: Ie.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ft([
      oe.lights,
      oe.fog,
      {
        color: { value: /* @__PURE__ */ new Ee(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.shadow_vert,
    fragmentShader: Ie.shadow_frag
  }
};
bn.physical = {
  uniforms: /* @__PURE__ */ Ft([
    bn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Oe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Oe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new se(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Oe() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Oe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Oe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ee(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Oe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Oe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Oe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new se() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Oe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ee(0) },
      specularColor: { value: /* @__PURE__ */ new Ee(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Oe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Oe() },
      anisotropyVector: { value: /* @__PURE__ */ new se() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Oe() }
    }
  ]),
  vertexShader: Ie.meshphysical_vert,
  fragmentShader: Ie.meshphysical_frag
};
const na = { r: 0, b: 0, g: 0 };
function n0(r, e, t, n, i, s, a) {
  const o = new Ee(0);
  let l = s === !0 ? 0 : 1, c, h, u = null, f = 0, d = null;
  function _(m, p) {
    let y = !1, x = p.isScene === !0 ? p.background : null;
    switch (x && x.isTexture && (x = (p.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? g(o, l) : x && x.isColor && (g(x, 1), y = !0), r.xr.getEnvironmentBlendMode()) {
      case "opaque":
        y = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, a), y = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, a), y = !0;
        break;
    }
    (r.autoClear || y) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), x && (x.isCubeTexture || x.mapping === Ca) ? (h === void 0 && (h = new Lt(
      new Xs(1, 1, 1),
      new Qt({
        name: "BackgroundCubeMaterial",
        uniforms: Os(bn.backgroundCube.uniforms),
        vertexShader: bn.backgroundCube.vertexShader,
        fragmentShader: bn.backgroundCube.fragmentShader,
        side: Gt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(T, E, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, h.material.toneMapped = x.colorSpace !== Te, (u !== x || f !== x.version || d !== r.toneMapping) && (h.material.needsUpdate = !0, u = x, f = x.version, d = r.toneMapping), h.layers.enableAll(), m.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (c === void 0 && (c = new Lt(
      new wl(2, 2),
      new Qt({
        name: "BackgroundMaterial",
        uniforms: Os(bn.background.uniforms),
        vertexShader: bn.background.vertexShader,
        fragmentShader: bn.background.fragmentShader,
        side: ei,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = x, c.material.uniforms.backgroundIntensity.value = p.backgroundIntensity, c.material.toneMapped = x.colorSpace !== Te, x.matrixAutoUpdate === !0 && x.updateMatrix(), c.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || f !== x.version || d !== r.toneMapping) && (c.material.needsUpdate = !0, u = x, f = x.version, d = r.toneMapping), c.layers.enableAll(), m.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function g(m, p) {
    m.getRGB(na, tf(r)), n.buffers.color.setClear(na.r, na.g, na.b, p, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(m, p = 1) {
      o.set(m), l = p, g(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(m) {
      l = m, g(o, l);
    },
    render: _
  };
}
function i0(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, l = m(null);
  let c = l, h = !1;
  function u(F, z, Z, k, Y) {
    let Q = !1;
    if (a) {
      const J = g(k, Z, z);
      c !== J && (c = J, d(c.object)), Q = p(F, k, Z, Y), Q && y(F, k, Z, Y);
    } else {
      const J = z.wireframe === !0;
      (c.geometry !== k.id || c.program !== Z.id || c.wireframe !== J) && (c.geometry = k.id, c.program = Z.id, c.wireframe = J, Q = !0);
    }
    Y !== null && t.update(Y, r.ELEMENT_ARRAY_BUFFER), (Q || h) && (h = !1, C(F, z, Z, k), Y !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function f() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function d(F) {
    return n.isWebGL2 ? r.bindVertexArray(F) : s.bindVertexArrayOES(F);
  }
  function _(F) {
    return n.isWebGL2 ? r.deleteVertexArray(F) : s.deleteVertexArrayOES(F);
  }
  function g(F, z, Z) {
    const k = Z.wireframe === !0;
    let Y = o[F.id];
    Y === void 0 && (Y = {}, o[F.id] = Y);
    let Q = Y[z.id];
    Q === void 0 && (Q = {}, Y[z.id] = Q);
    let J = Q[k];
    return J === void 0 && (J = m(f()), Q[k] = J), J;
  }
  function m(F) {
    const z = [], Z = [], k = [];
    for (let Y = 0; Y < i; Y++)
      z[Y] = 0, Z[Y] = 0, k[Y] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: z,
      enabledAttributes: Z,
      attributeDivisors: k,
      object: F,
      attributes: {},
      index: null
    };
  }
  function p(F, z, Z, k) {
    const Y = c.attributes, Q = z.attributes;
    let J = 0;
    const B = Z.getAttributes();
    for (const G in B)
      if (B[G].location >= 0) {
        const ie = Y[G];
        let ae = Q[G];
        if (ae === void 0 && (G === "instanceMatrix" && F.instanceMatrix && (ae = F.instanceMatrix), G === "instanceColor" && F.instanceColor && (ae = F.instanceColor)), ie === void 0 || ie.attribute !== ae || ae && ie.data !== ae.data) return !0;
        J++;
      }
    return c.attributesNum !== J || c.index !== k;
  }
  function y(F, z, Z, k) {
    const Y = {}, Q = z.attributes;
    let J = 0;
    const B = Z.getAttributes();
    for (const G in B)
      if (B[G].location >= 0) {
        let ie = Q[G];
        ie === void 0 && (G === "instanceMatrix" && F.instanceMatrix && (ie = F.instanceMatrix), G === "instanceColor" && F.instanceColor && (ie = F.instanceColor));
        const ae = {};
        ae.attribute = ie, ie && ie.data && (ae.data = ie.data), Y[G] = ae, J++;
      }
    c.attributes = Y, c.attributesNum = J, c.index = k;
  }
  function x() {
    const F = c.newAttributes;
    for (let z = 0, Z = F.length; z < Z; z++)
      F[z] = 0;
  }
  function v(F) {
    S(F, 0);
  }
  function S(F, z) {
    const Z = c.newAttributes, k = c.enabledAttributes, Y = c.attributeDivisors;
    Z[F] = 1, k[F] === 0 && (r.enableVertexAttribArray(F), k[F] = 1), Y[F] !== z && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](F, z), Y[F] = z);
  }
  function T() {
    const F = c.newAttributes, z = c.enabledAttributes;
    for (let Z = 0, k = z.length; Z < k; Z++)
      z[Z] !== F[Z] && (r.disableVertexAttribArray(Z), z[Z] = 0);
  }
  function E(F, z, Z, k, Y, Q, J) {
    J === !0 ? r.vertexAttribIPointer(F, z, Z, Y, Q) : r.vertexAttribPointer(F, z, Z, k, Y, Q);
  }
  function C(F, z, Z, k) {
    if (n.isWebGL2 === !1 && (F.isInstancedMesh || k.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const Y = k.attributes, Q = Z.getAttributes(), J = z.defaultAttributeValues;
    for (const B in Q) {
      const G = Q[B];
      if (G.location >= 0) {
        let le = Y[B];
        if (le === void 0 && (B === "instanceMatrix" && F.instanceMatrix && (le = F.instanceMatrix), B === "instanceColor" && F.instanceColor && (le = F.instanceColor)), le !== void 0) {
          const ie = le.normalized, ae = le.itemSize, xe = t.get(le);
          if (xe === void 0) continue;
          const Ce = xe.buffer, Me = xe.type, Ve = xe.bytesPerElement, At = n.isWebGL2 === !0 && (Me === r.INT || Me === r.UNSIGNED_INT || le.gpuType === Fu);
          if (le.isInterleavedBufferAttribute) {
            const Ue = le.data, N = Ue.stride, gt = le.offset;
            if (Ue.isInstancedInterleavedBuffer) {
              for (let ve = 0; ve < G.locationSize; ve++)
                S(G.location + ve, Ue.meshPerAttribute);
              F.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = Ue.meshPerAttribute * Ue.count);
            } else
              for (let ve = 0; ve < G.locationSize; ve++)
                v(G.location + ve);
            r.bindBuffer(r.ARRAY_BUFFER, Ce);
            for (let ve = 0; ve < G.locationSize; ve++)
              E(
                G.location + ve,
                ae / G.locationSize,
                Me,
                ie,
                N * Ve,
                (gt + ae / G.locationSize * ve) * Ve,
                At
              );
          } else {
            if (le.isInstancedBufferAttribute) {
              for (let Ue = 0; Ue < G.locationSize; Ue++)
                S(G.location + Ue, le.meshPerAttribute);
              F.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let Ue = 0; Ue < G.locationSize; Ue++)
                v(G.location + Ue);
            r.bindBuffer(r.ARRAY_BUFFER, Ce);
            for (let Ue = 0; Ue < G.locationSize; Ue++)
              E(
                G.location + Ue,
                ae / G.locationSize,
                Me,
                ie,
                ae * Ve,
                ae / G.locationSize * Ue * Ve,
                At
              );
          }
        } else if (J !== void 0) {
          const ie = J[B];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                r.vertexAttrib2fv(G.location, ie);
                break;
              case 3:
                r.vertexAttrib3fv(G.location, ie);
                break;
              case 4:
                r.vertexAttrib4fv(G.location, ie);
                break;
              default:
                r.vertexAttrib1fv(G.location, ie);
            }
        }
      }
    }
    T();
  }
  function M() {
    X();
    for (const F in o) {
      const z = o[F];
      for (const Z in z) {
        const k = z[Z];
        for (const Y in k)
          _(k[Y].object), delete k[Y];
        delete z[Z];
      }
      delete o[F];
    }
  }
  function A(F) {
    if (o[F.id] === void 0) return;
    const z = o[F.id];
    for (const Z in z) {
      const k = z[Z];
      for (const Y in k)
        _(k[Y].object), delete k[Y];
      delete z[Z];
    }
    delete o[F.id];
  }
  function W(F) {
    for (const z in o) {
      const Z = o[z];
      if (Z[F.id] === void 0) continue;
      const k = Z[F.id];
      for (const Y in k)
        _(k[Y].object), delete k[Y];
      delete Z[F.id];
    }
  }
  function X() {
    I(), h = !0, c !== l && (c = l, d(c.object));
  }
  function I() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: u,
    reset: X,
    resetDefaultState: I,
    dispose: M,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: W,
    initAttributes: x,
    enableAttribute: v,
    disableUnusedAttributes: T
  };
}
function s0(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(c) {
    s = c;
  }
  function o(c, h) {
    r.drawArrays(s, c, h), t.update(h, s, 1);
  }
  function l(c, h, u) {
    if (u === 0) return;
    let f, d;
    if (i)
      f = r, d = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), d = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[d](s, c, h, u), t.update(h, s, u);
  }
  this.setMode = a, this.render = o, this.renderInstances = l;
}
function r0(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const E = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(E) {
    if (E === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      E = "mediump";
    }
    return E === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), f = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_TEXTURE_SIZE), _ = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), g = r.getParameter(r.MAX_VERTEX_ATTRIBS), m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), p = r.getParameter(r.MAX_VARYING_VECTORS), y = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), x = f > 0, v = a || e.has("OES_texture_float"), S = x && v, T = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: f,
    maxTextureSize: d,
    maxCubemapSize: _,
    maxAttributes: g,
    maxVertexUniforms: m,
    maxVaryings: p,
    maxFragmentUniforms: y,
    vertexTextures: x,
    floatFragmentTextures: v,
    floatVertexTextures: S,
    maxSamples: T
  };
}
function a0(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new Di(), o = new Oe(), l = { value: null, needsUpdate: !1 };
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
    const _ = u.clippingPlanes, g = u.clipIntersection, m = u.clipShadows, p = r.get(u);
    if (!i || _ === null || _.length === 0 || s && !m)
      s ? h(null) : c();
    else {
      const y = s ? 0 : n, x = y * 4;
      let v = p.clippingState || null;
      l.value = v, v = h(_, f, x, d);
      for (let S = 0; S !== x; ++S)
        v[S] = t[S];
      p.clippingState = v, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, f, d, _) {
    const g = u !== null ? u.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = l.value, _ !== !0 || m === null) {
        const p = d + g * 4, y = f.matrixWorldInverse;
        o.getNormalMatrix(y), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let x = 0, v = d; x !== g; ++x, v += 4)
          a.copy(u[x]).applyMatrix4(y, o), a.normal.toArray(m, v), m[v + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = g, e.numIntersection = 0, m;
  }
}
function o0(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Vo ? a.mapping = Ps : o === Wo && (a.mapping = Ls), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Vo || o === Wo)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Mm(l.height / 2);
            return c.fromEquirectangularTexture(r, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Da extends nf {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ys = 4, lh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Ni = 20, po = /* @__PURE__ */ new Da(), ch = /* @__PURE__ */ new Ee();
let mo = null;
const Ii = (1 + Math.sqrt(5)) / 2, ms = 1 / Ii, hh = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, Ii, ms),
  /* @__PURE__ */ new L(0, Ii, -ms),
  /* @__PURE__ */ new L(ms, 0, Ii),
  /* @__PURE__ */ new L(-ms, 0, Ii),
  /* @__PURE__ */ new L(Ii, ms, 0),
  /* @__PURE__ */ new L(-Ii, ms, 0)
];
class uh {
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
    mo = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ph(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = dh(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(mo), e.scissorTest = !1, ia(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ps || e.mapping === Ls ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), mo = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Ht,
      minFilter: Ht,
      generateMipmaps: !1,
      type: Qn,
      format: ln,
      colorSpace: Mn,
      depthBuffer: !1
    }, i = fh(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = fh(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = l0(s)), this._blurMaterial = c0(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Lt(this._lodPlanes[0], e);
    this._renderer.compile(t, po);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Bt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, f = h.toneMapping;
    h.getClearColor(ch), h.toneMapping = $n, h.autoClear = !1;
    const d = new cn({
      name: "PMREM.Background",
      side: Gt,
      depthWrite: !1,
      depthTest: !1
    }), _ = new Lt(new Xs(), d);
    let g = !1;
    const m = e.background;
    m ? m.isColor && (d.color.copy(m), e.background = null, g = !0) : (d.color.copy(ch), g = !0);
    for (let p = 0; p < 6; p++) {
      const y = p % 3;
      y === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : y === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p]));
      const x = this._cubeSize;
      ia(i, y * x, p > 2 ? x : 0, x, x), h.setRenderTarget(i), g && h.render(_, o), h.render(e, o);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = f, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Ps || e.mapping === Ls;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = ph()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = dh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Lt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    ia(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, po);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = hh[(i - 1) % hh.length];
      this._blur(e, i - 1, i, s, a);
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
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Lt(this._lodPlanes[i], c), f = c.uniforms, d = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Ni - 1), g = s / _, m = isFinite(s) ? 1 + Math.floor(h * g) : Ni;
    m > Ni && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);
    const p = [];
    let y = 0;
    for (let E = 0; E < Ni; ++E) {
      const C = E / g, M = Math.exp(-C * C / 2);
      p.push(M), E === 0 ? y += M : E < m && (y += 2 * M);
    }
    for (let E = 0; E < p.length; E++)
      p[E] = p[E] / y;
    f.envMap.value = e.texture, f.samples.value = m, f.weights.value = p, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: x } = this;
    f.dTheta.value = _, f.mipInt.value = x - n;
    const v = this._sizeLods[i], S = 3 * v * (i > x - ys ? i - x + ys : 0), T = 4 * (this._cubeSize - v);
    ia(t, S, T, 3 * v, 2 * v), l.setRenderTarget(t), l.render(u, po);
  }
}
function l0(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - ys + 1 + lh.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > r - ys ? l = lh[a - r + ys - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, f = [h, h, u, h, u, u, h, h, u, u, h, u], d = 6, _ = 6, g = 3, m = 2, p = 1, y = new Float32Array(g * _ * d), x = new Float32Array(m * _ * d), v = new Float32Array(p * _ * d);
    for (let T = 0; T < d; T++) {
      const E = T % 3 * 2 / 3 - 1, C = T > 2 ? 0 : -1, M = [
        E,
        C,
        0,
        E + 2 / 3,
        C,
        0,
        E + 2 / 3,
        C + 1,
        0,
        E,
        C,
        0,
        E + 2 / 3,
        C + 1,
        0,
        E,
        C + 1,
        0
      ];
      y.set(M, g * _ * T), x.set(f, m * _ * T);
      const A = [T, T, T, T, T, T];
      v.set(A, p * _ * T);
    }
    const S = new kt();
    S.setAttribute("position", new Tt(y, g)), S.setAttribute("uv", new Tt(x, m)), S.setAttribute("faceIndex", new Tt(v, p)), e.push(S), i > ys && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function fh(r, e, t) {
  const n = new yn(r, e, t);
  return n.texture.mapping = Ca, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ia(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function c0(r, e, t) {
  const n = new Float32Array(Ni), i = new L(0, 1, 0);
  return new Qt({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ni,
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
    vertexShader: Rl(),
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
    blending: Jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function dh() {
  return new Qt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Rl(),
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
    blending: Jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ph() {
  return new Qt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Rl(),
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
    blending: Jn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Rl() {
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
function h0(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Vo || l === Wo, h = l === Ps || l === Ls;
      if (c || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return t === null && (t = new uh(r)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const u = o.image;
            if (c && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new uh(r));
              const f = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, f), o.addEventListener("dispose", s), f.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function u0(r) {
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
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function f0(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes)
      e.remove(f.attributes[_]);
    for (const _ in f.morphAttributes) {
      const g = f.morphAttributes[_];
      for (let m = 0, p = g.length; m < p; m++)
        e.remove(g[m]);
    }
    f.removeEventListener("dispose", a), delete i[f.id];
    const d = s.get(f);
    d && (e.remove(d), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", a), i[f.id] = !0, t.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const _ in f)
      e.update(f[_], r.ARRAY_BUFFER);
    const d = u.morphAttributes;
    for (const _ in d) {
      const g = d[_];
      for (let m = 0, p = g.length; m < p; m++)
        e.update(g[m], r.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const f = [], d = u.index, _ = u.attributes.position;
    let g = 0;
    if (d !== null) {
      const y = d.array;
      g = d.version;
      for (let x = 0, v = y.length; x < v; x += 3) {
        const S = y[x + 0], T = y[x + 1], E = y[x + 2];
        f.push(S, T, T, E, E, S);
      }
    } else {
      const y = _.array;
      g = _.version;
      for (let x = 0, v = y.length / 3 - 1; x < v; x += 3) {
        const S = x + 0, T = x + 1, E = x + 2;
        f.push(S, T, T, E, E, S);
      }
    }
    const m = new (ju(f) ? ef : Qu)(f, 1);
    m.version = g;
    const p = s.get(u);
    p && e.remove(p), s.set(u, m);
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
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function d0(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(f) {
    s = f;
  }
  let o, l;
  function c(f) {
    o = f.type, l = f.bytesPerElement;
  }
  function h(f, d) {
    r.drawElements(s, d, o, f * l), t.update(d, s, 1);
  }
  function u(f, d, _) {
    if (_ === 0) return;
    let g, m;
    if (i)
      g = r, m = "drawElementsInstanced";
    else if (g = e.get("ANGLE_instanced_arrays"), m = "drawElementsInstancedANGLE", g === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[m](s, d, o, f * l, _), t.update(d, s, _);
  }
  this.setMode = a, this.setIndex = c, this.render = h, this.renderInstances = u;
}
function p0(r) {
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
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
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
function m0(r, e) {
  return r[0] - e[0];
}
function g0(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function _0(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new Ke(), o = [];
  for (let c = 0; c < 8; c++)
    o[c] = [c, 0];
  function l(c, h, u) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const _ = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = _ !== void 0 ? _.length : 0;
      let m = s.get(h);
      if (m === void 0 || m.count !== g) {
        let z = function() {
          I.dispose(), s.delete(h), h.removeEventListener("dispose", z);
        };
        var d = z;
        m !== void 0 && m.texture.dispose();
        const x = h.morphAttributes.position !== void 0, v = h.morphAttributes.normal !== void 0, S = h.morphAttributes.color !== void 0, T = h.morphAttributes.position || [], E = h.morphAttributes.normal || [], C = h.morphAttributes.color || [];
        let M = 0;
        x === !0 && (M = 1), v === !0 && (M = 2), S === !0 && (M = 3);
        let A = h.attributes.position.count * M, W = 1;
        A > e.maxTextureSize && (W = Math.ceil(A / e.maxTextureSize), A = e.maxTextureSize);
        const X = new Float32Array(A * W * 4 * g), I = new Ju(X, A, W, g);
        I.type = Yn, I.needsUpdate = !0;
        const F = M * 4;
        for (let Z = 0; Z < g; Z++) {
          const k = T[Z], Y = E[Z], Q = C[Z], J = A * W * 4 * Z;
          for (let B = 0; B < k.count; B++) {
            const G = B * F;
            x === !0 && (a.fromBufferAttribute(k, B), X[J + G + 0] = a.x, X[J + G + 1] = a.y, X[J + G + 2] = a.z, X[J + G + 3] = 0), v === !0 && (a.fromBufferAttribute(Y, B), X[J + G + 4] = a.x, X[J + G + 5] = a.y, X[J + G + 6] = a.z, X[J + G + 7] = 0), S === !0 && (a.fromBufferAttribute(Q, B), X[J + G + 8] = a.x, X[J + G + 9] = a.y, X[J + G + 10] = a.z, X[J + G + 11] = Q.itemSize === 4 ? a.w : 1);
          }
        }
        m = {
          count: g,
          texture: I,
          size: new se(A, W)
        }, s.set(h, m), h.addEventListener("dispose", z);
      }
      let p = 0;
      for (let x = 0; x < f.length; x++)
        p += f[x];
      const y = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", y), u.getUniforms().setValue(r, "morphTargetInfluences", f), u.getUniforms().setValue(r, "morphTargetsTexture", m.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", m.size);
    } else {
      const _ = f === void 0 ? 0 : f.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== _) {
        g = [];
        for (let v = 0; v < _; v++)
          g[v] = [v, 0];
        n[h.id] = g;
      }
      for (let v = 0; v < _; v++) {
        const S = g[v];
        S[0] = v, S[1] = f[v];
      }
      g.sort(g0);
      for (let v = 0; v < 8; v++)
        v < _ && g[v][1] ? (o[v][0] = g[v][0], o[v][1] = g[v][1]) : (o[v][0] = Number.MAX_SAFE_INTEGER, o[v][1] = 0);
      o.sort(m0);
      const m = h.morphAttributes.position, p = h.morphAttributes.normal;
      let y = 0;
      for (let v = 0; v < 8; v++) {
        const S = o[v], T = S[0], E = S[1];
        T !== Number.MAX_SAFE_INTEGER && E ? (m && h.getAttribute("morphTarget" + v) !== m[T] && h.setAttribute("morphTarget" + v, m[T]), p && h.getAttribute("morphNormal" + v) !== p[T] && h.setAttribute("morphNormal" + v, p[T]), i[v] = E, y += E) : (m && h.hasAttribute("morphTarget" + v) === !0 && h.deleteAttribute("morphTarget" + v), p && h.hasAttribute("morphNormal" + v) === !0 && h.deleteAttribute("morphNormal" + v), i[v] = 0);
      }
      const x = h.morphTargetsRelative ? 1 : 1 - y;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", x), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function x0(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      i.get(f) !== c && (f.update(), i.set(f, c));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const rf = /* @__PURE__ */ new wt(), af = /* @__PURE__ */ new Ju(), of = /* @__PURE__ */ new am(), lf = /* @__PURE__ */ new bl(), mh = [], gh = [], _h = new Float32Array(16), xh = new Float32Array(9), vh = new Float32Array(4);
function qs(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = mh[i];
  if (s === void 0 && (s = new Float32Array(i), mh[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function pt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function mt(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Ia(r, e) {
  let t = gh[e];
  t === void 0 && (t = new Int32Array(e), gh[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function v0(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function y0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    r.uniform2fv(this.addr, e), mt(t, e);
  }
}
function M0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (pt(t, e)) return;
    r.uniform3fv(this.addr, e), mt(t, e);
  }
}
function S0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    r.uniform4fv(this.addr, e), mt(t, e);
  }
}
function T0(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    vh.set(n), r.uniformMatrix2fv(this.addr, !1, vh), mt(t, n);
  }
}
function E0(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    xh.set(n), r.uniformMatrix3fv(this.addr, !1, xh), mt(t, n);
  }
}
function b0(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    _h.set(n), r.uniformMatrix4fv(this.addr, !1, _h), mt(t, n);
  }
}
function A0(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function w0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    r.uniform2iv(this.addr, e), mt(t, e);
  }
}
function R0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (pt(t, e)) return;
    r.uniform3iv(this.addr, e), mt(t, e);
  }
}
function C0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    r.uniform4iv(this.addr, e), mt(t, e);
  }
}
function P0(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function L0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    r.uniform2uiv(this.addr, e), mt(t, e);
  }
}
function D0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (pt(t, e)) return;
    r.uniform3uiv(this.addr, e), mt(t, e);
  }
}
function I0(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    r.uniform4uiv(this.addr, e), mt(t, e);
  }
}
function U0(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || rf, i);
}
function N0(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || of, i);
}
function O0(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || lf, i);
}
function F0(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || af, i);
}
function B0(r) {
  switch (r) {
    case 5126:
      return v0;
    case 35664:
      return y0;
    case 35665:
      return M0;
    case 35666:
      return S0;
    case 35674:
      return T0;
    case 35675:
      return E0;
    case 35676:
      return b0;
    case 5124:
    case 35670:
      return A0;
    case 35667:
    case 35671:
      return w0;
    case 35668:
    case 35672:
      return R0;
    case 35669:
    case 35673:
      return C0;
    case 5125:
      return P0;
    case 36294:
      return L0;
    case 36295:
      return D0;
    case 36296:
      return I0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return U0;
    case 35679:
    case 36299:
    case 36307:
      return N0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return O0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return F0;
  }
}
function z0(r, e) {
  r.uniform1fv(this.addr, e);
}
function k0(r, e) {
  const t = qs(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function H0(r, e) {
  const t = qs(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function G0(r, e) {
  const t = qs(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function V0(r, e) {
  const t = qs(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function W0(r, e) {
  const t = qs(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function X0(r, e) {
  const t = qs(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function q0(r, e) {
  r.uniform1iv(this.addr, e);
}
function Y0(r, e) {
  r.uniform2iv(this.addr, e);
}
function j0(r, e) {
  r.uniform3iv(this.addr, e);
}
function K0(r, e) {
  r.uniform4iv(this.addr, e);
}
function Z0(r, e) {
  r.uniform1uiv(this.addr, e);
}
function J0(r, e) {
  r.uniform2uiv(this.addr, e);
}
function $0(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Q0(r, e) {
  r.uniform4uiv(this.addr, e);
}
function ex(r, e, t) {
  const n = this.cache, i = e.length, s = Ia(t, i);
  pt(n, s) || (r.uniform1iv(this.addr, s), mt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || rf, s[a]);
}
function tx(r, e, t) {
  const n = this.cache, i = e.length, s = Ia(t, i);
  pt(n, s) || (r.uniform1iv(this.addr, s), mt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || of, s[a]);
}
function nx(r, e, t) {
  const n = this.cache, i = e.length, s = Ia(t, i);
  pt(n, s) || (r.uniform1iv(this.addr, s), mt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || lf, s[a]);
}
function ix(r, e, t) {
  const n = this.cache, i = e.length, s = Ia(t, i);
  pt(n, s) || (r.uniform1iv(this.addr, s), mt(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || af, s[a]);
}
function sx(r) {
  switch (r) {
    case 5126:
      return z0;
    case 35664:
      return k0;
    case 35665:
      return H0;
    case 35666:
      return G0;
    case 35674:
      return V0;
    case 35675:
      return W0;
    case 35676:
      return X0;
    case 5124:
    case 35670:
      return q0;
    case 35667:
    case 35671:
      return Y0;
    case 35668:
    case 35672:
      return j0;
    case 35669:
    case 35673:
      return K0;
    case 5125:
      return Z0;
    case 36294:
      return J0;
    case 36295:
      return $0;
    case 36296:
      return Q0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ex;
    case 35679:
    case 36299:
    case 36307:
      return tx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return nx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ix;
  }
}
class rx {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = B0(t.type);
  }
}
class ax {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = sx(t.type);
  }
}
class ox {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const go = /(\w+)(\])?(\[|\.)?/g;
function yh(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function lx(r, e, t) {
  const n = r.name, i = n.length;
  for (go.lastIndex = 0; ; ) {
    const s = go.exec(n), a = go.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      yh(t, c === void 0 ? new rx(o, r, e) : new ax(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new ox(o), yh(t, u)), t = u;
    }
  }
}
class pa {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      lx(s, a, this);
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
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Mh(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let cx = 0;
function hx(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function ux(r) {
  switch (r) {
    case Mn:
      return ["Linear", "( value )"];
    case Te:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), ["Linear", "( value )"];
  }
}
function Sh(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + hx(r.getShaderSource(e), a);
  } else
    return i;
}
function fx(r, e) {
  const t = ux(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function dx(r, e) {
  let t;
  switch (e) {
    case hp:
      t = "Linear";
      break;
    case up:
      t = "Reinhard";
      break;
    case fp:
      t = "OptimizedCineon";
      break;
    case dp:
      t = "ACESFilmic";
      break;
    case pp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function px(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ar).join(`
`);
}
function mx(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function gx(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function ar(r) {
  return r !== "";
}
function Th(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Eh(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const _x = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Zo(r) {
  return r.replace(_x, vx);
}
const xx = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function vx(r, e) {
  let t = Ie[e];
  if (t === void 0) {
    const n = xx.get(e);
    if (n !== void 0)
      t = Ie[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Zo(t);
}
const yx = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function bh(r) {
  return r.replace(yx, Mx);
}
function Mx(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Ah(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Sx(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Lu ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Gd ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Wn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Tx(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Ps:
      case Ls:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ca:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Ex(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Ls:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function bx(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Uu:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case lp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case cp:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Ax(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function wx(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Sx(t), c = Tx(t), h = Ex(t), u = bx(t), f = Ax(t), d = t.isWebGL2 ? "" : px(t), _ = mx(s), g = i.createProgram();
  let m, p, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ar).join(`
`), m.length > 0 && (m += `
`), p = [
    d,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(ar).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    Ah(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
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
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
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
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ar).join(`
`), p = [
    d,
    Ah(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
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
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
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
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== $n ? "#define TONE_MAPPING" : "",
    t.toneMapping !== $n ? Ie.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== $n ? dx("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ie.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    fx("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ar).join(`
`)), a = Zo(a), a = Th(a, t), a = Eh(a, t), o = Zo(o), o = Th(o, t), o = Eh(o, t), a = bh(a), o = bh(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, m = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    t.glslVersion === Xc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Xc ? "" : "#define gl_FragColor pc_fragColor",
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
` + p);
  const x = y + m + a, v = y + p + o, S = Mh(i, i.VERTEX_SHADER, x), T = Mh(i, i.FRAGMENT_SHADER, v);
  if (i.attachShader(g, S), i.attachShader(g, T), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g), r.debug.checkShaderErrors) {
    const M = i.getProgramInfoLog(g).trim(), A = i.getShaderInfoLog(S).trim(), W = i.getShaderInfoLog(T).trim();
    let X = !0, I = !0;
    if (i.getProgramParameter(g, i.LINK_STATUS) === !1)
      if (X = !1, typeof r.debug.onShaderError == "function")
        r.debug.onShaderError(i, g, S, T);
      else {
        const F = Sh(i, S, "vertex"), z = Sh(i, T, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Program Info Log: ` + M + `
` + F + `
` + z
        );
      }
    else M !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", M) : (A === "" || W === "") && (I = !1);
    I && (this.diagnostics = {
      runnable: X,
      programLog: M,
      vertexShader: {
        log: A,
        prefix: m
      },
      fragmentShader: {
        log: W,
        prefix: p
      }
    });
  }
  i.deleteShader(S), i.deleteShader(T);
  let E;
  this.getUniforms = function() {
    return E === void 0 && (E = new pa(i, g)), E;
  };
  let C;
  return this.getAttributes = function() {
    return C === void 0 && (C = gx(i, g)), C;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = cx++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = S, this.fragmentShader = T, this;
}
let Rx = 0;
class Cx {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
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
    return n === void 0 && (n = new Px(e), t.set(e, n)), n;
  }
}
class Px {
  constructor(e) {
    this.id = Rx++, this.code = e, this.usedTimes = 0;
  }
}
function Lx(r, e, t, n, i, s, a) {
  const o = new La(), l = new Cx(), c = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, f = i.vertexTextures;
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
  function g(M) {
    return M === 0 ? "uv" : `uv${M}`;
  }
  function m(M, A, W, X, I) {
    const F = X.fog, z = I.geometry, Z = M.isMeshStandardMaterial ? X.environment : null, k = (M.isMeshStandardMaterial ? t : e).get(M.envMap || Z), Y = k && k.mapping === Ca ? k.image.height : null, Q = _[M.type];
    M.precision !== null && (d = i.getMaxPrecision(M.precision), d !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", d, "instead."));
    const J = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, B = J !== void 0 ? J.length : 0;
    let G = 0;
    z.morphAttributes.position !== void 0 && (G = 1), z.morphAttributes.normal !== void 0 && (G = 2), z.morphAttributes.color !== void 0 && (G = 3);
    let le, ie, ae, xe;
    if (Q) {
      const Sn = bn[Q];
      le = Sn.vertexShader, ie = Sn.fragmentShader;
    } else
      le = M.vertexShader, ie = M.fragmentShader, l.update(M), ae = l.getVertexShaderID(M), xe = l.getFragmentShaderID(M);
    const Ce = r.getRenderTarget(), Me = I.isInstancedMesh === !0, Ve = !!M.map, At = !!M.matcap, Ue = !!k, N = !!M.aoMap, gt = !!M.lightMap, ve = !!M.bumpMap, we = !!M.normalMap, Se = !!M.displacementMap, $e = !!M.emissiveMap, Fe = !!M.metalnessMap, Le = !!M.roughnessMap, Xe = M.anisotropy > 0, ft = M.clearcoat > 0, _t = M.iridescence > 0, R = M.sheen > 0, b = M.transmission > 0, q = Xe && !!M.anisotropyMap, ne = ft && !!M.clearcoatMap, te = ft && !!M.clearcoatNormalMap, P = ft && !!M.clearcoatRoughnessMap, $ = _t && !!M.iridescenceMap, ee = _t && !!M.iridescenceThicknessMap, H = R && !!M.sheenColorMap, de = R && !!M.sheenRoughnessMap, _e = !!M.specularMap, ge = !!M.specularColorMap, me = !!M.specularIntensityMap, ue = b && !!M.transmissionMap, be = b && !!M.thicknessMap, ze = !!M.gradientMap, D = !!M.alphaMap, ce = M.alphaTest > 0, V = !!M.alphaHash, re = !!M.extensions, he = !!z.attributes.uv1, We = !!z.attributes.uv2, et = !!z.attributes.uv3;
    return {
      isWebGL2: h,
      shaderID: Q,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: le,
      fragmentShader: ie,
      defines: M.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: xe,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: d,
      instancing: Me,
      instancingColor: Me && I.instanceColor !== null,
      supportsVertexTextures: f,
      outputColorSpace: Ce === null ? r.outputColorSpace : Ce.isXRRenderTarget === !0 ? Ce.texture.colorSpace : Mn,
      map: Ve,
      matcap: At,
      envMap: Ue,
      envMapMode: Ue && k.mapping,
      envMapCubeUVHeight: Y,
      aoMap: N,
      lightMap: gt,
      bumpMap: ve,
      normalMap: we,
      displacementMap: f && Se,
      emissiveMap: $e,
      normalMapObjectSpace: we && M.normalMapType === Rp,
      normalMapTangentSpace: we && M.normalMapType === Xu,
      metalnessMap: Fe,
      roughnessMap: Le,
      anisotropy: Xe,
      anisotropyMap: q,
      clearcoat: ft,
      clearcoatMap: ne,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: P,
      iridescence: _t,
      iridescenceMap: $,
      iridescenceThicknessMap: ee,
      sheen: R,
      sheenColorMap: H,
      sheenRoughnessMap: de,
      specularMap: _e,
      specularColorMap: ge,
      specularIntensityMap: me,
      transmission: b,
      transmissionMap: ue,
      thicknessMap: be,
      gradientMap: ze,
      opaque: M.transparent === !1 && M.blending === Es,
      alphaMap: D,
      alphaTest: ce,
      alphaHash: V,
      combine: M.combine,
      //
      mapUv: Ve && g(M.map.channel),
      aoMapUv: N && g(M.aoMap.channel),
      lightMapUv: gt && g(M.lightMap.channel),
      bumpMapUv: ve && g(M.bumpMap.channel),
      normalMapUv: we && g(M.normalMap.channel),
      displacementMapUv: Se && g(M.displacementMap.channel),
      emissiveMapUv: $e && g(M.emissiveMap.channel),
      metalnessMapUv: Fe && g(M.metalnessMap.channel),
      roughnessMapUv: Le && g(M.roughnessMap.channel),
      anisotropyMapUv: q && g(M.anisotropyMap.channel),
      clearcoatMapUv: ne && g(M.clearcoatMap.channel),
      clearcoatNormalMapUv: te && g(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: P && g(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: $ && g(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: ee && g(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: H && g(M.sheenColorMap.channel),
      sheenRoughnessMapUv: de && g(M.sheenRoughnessMap.channel),
      specularMapUv: _e && g(M.specularMap.channel),
      specularColorMapUv: ge && g(M.specularColorMap.channel),
      specularIntensityMapUv: me && g(M.specularIntensityMap.channel),
      transmissionMapUv: ue && g(M.transmissionMap.channel),
      thicknessMapUv: be && g(M.thicknessMap.channel),
      alphaMapUv: D && g(M.alphaMap.channel),
      //
      vertexTangents: !!z.attributes.tangent && (we || Xe),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4,
      vertexUv1s: he,
      vertexUv2s: We,
      vertexUv3s: et,
      pointsUvs: I.isPoints === !0 && !!z.attributes.uv && (Ve || D),
      fog: !!F,
      useFog: M.fog === !0,
      fogExp2: F && F.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: I.isSkinnedMesh === !0,
      morphTargets: z.morphAttributes.position !== void 0,
      morphNormals: z.morphAttributes.normal !== void 0,
      morphColors: z.morphAttributes.color !== void 0,
      morphTargetsCount: B,
      morphTextureStride: G,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && W.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: M.toneMapped ? r.toneMapping : $n,
      useLegacyLights: r.useLegacyLights,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === An,
      flipSided: M.side === Gt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: re && M.extensions.derivatives === !0,
      extensionFragDepth: re && M.extensions.fragDepth === !0,
      extensionDrawBuffers: re && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: re && M.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function p(M) {
    const A = [];
    if (M.shaderID ? A.push(M.shaderID) : (A.push(M.customVertexShaderID), A.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const W in M.defines)
        A.push(W), A.push(M.defines[W]);
    return M.isRawShaderMaterial === !1 && (y(A, M), x(A, M), A.push(r.outputColorSpace)), A.push(M.customProgramCacheKey), A.join();
  }
  function y(M, A) {
    M.push(A.precision), M.push(A.outputColorSpace), M.push(A.envMapMode), M.push(A.envMapCubeUVHeight), M.push(A.mapUv), M.push(A.alphaMapUv), M.push(A.lightMapUv), M.push(A.aoMapUv), M.push(A.bumpMapUv), M.push(A.normalMapUv), M.push(A.displacementMapUv), M.push(A.emissiveMapUv), M.push(A.metalnessMapUv), M.push(A.roughnessMapUv), M.push(A.anisotropyMapUv), M.push(A.clearcoatMapUv), M.push(A.clearcoatNormalMapUv), M.push(A.clearcoatRoughnessMapUv), M.push(A.iridescenceMapUv), M.push(A.iridescenceThicknessMapUv), M.push(A.sheenColorMapUv), M.push(A.sheenRoughnessMapUv), M.push(A.specularMapUv), M.push(A.specularColorMapUv), M.push(A.specularIntensityMapUv), M.push(A.transmissionMapUv), M.push(A.thicknessMapUv), M.push(A.combine), M.push(A.fogExp2), M.push(A.sizeAttenuation), M.push(A.morphTargetsCount), M.push(A.morphAttributeCount), M.push(A.numDirLights), M.push(A.numPointLights), M.push(A.numSpotLights), M.push(A.numSpotLightMaps), M.push(A.numHemiLights), M.push(A.numRectAreaLights), M.push(A.numDirLightShadows), M.push(A.numPointLightShadows), M.push(A.numSpotLightShadows), M.push(A.numSpotLightShadowsWithMaps), M.push(A.shadowMapType), M.push(A.toneMapping), M.push(A.numClippingPlanes), M.push(A.numClipIntersection), M.push(A.depthPacking);
  }
  function x(M, A) {
    o.disableAll(), A.isWebGL2 && o.enable(0), A.supportsVertexTextures && o.enable(1), A.instancing && o.enable(2), A.instancingColor && o.enable(3), A.matcap && o.enable(4), A.envMap && o.enable(5), A.normalMapObjectSpace && o.enable(6), A.normalMapTangentSpace && o.enable(7), A.clearcoat && o.enable(8), A.iridescence && o.enable(9), A.alphaTest && o.enable(10), A.vertexColors && o.enable(11), A.vertexAlphas && o.enable(12), A.vertexUv1s && o.enable(13), A.vertexUv2s && o.enable(14), A.vertexUv3s && o.enable(15), A.vertexTangents && o.enable(16), A.anisotropy && o.enable(17), M.push(o.mask), o.disableAll(), A.fog && o.enable(0), A.useFog && o.enable(1), A.flatShading && o.enable(2), A.logarithmicDepthBuffer && o.enable(3), A.skinning && o.enable(4), A.morphTargets && o.enable(5), A.morphNormals && o.enable(6), A.morphColors && o.enable(7), A.premultipliedAlpha && o.enable(8), A.shadowMapEnabled && o.enable(9), A.useLegacyLights && o.enable(10), A.doubleSided && o.enable(11), A.flipSided && o.enable(12), A.useDepthPacking && o.enable(13), A.dithering && o.enable(14), A.transmission && o.enable(15), A.sheen && o.enable(16), A.opaque && o.enable(17), A.pointsUvs && o.enable(18), M.push(o.mask);
  }
  function v(M) {
    const A = _[M.type];
    let W;
    if (A) {
      const X = bn[A];
      W = Ma.clone(X.uniforms);
    } else
      W = M.uniforms;
    return W;
  }
  function S(M, A) {
    let W;
    for (let X = 0, I = c.length; X < I; X++) {
      const F = c[X];
      if (F.cacheKey === A) {
        W = F, ++W.usedTimes;
        break;
      }
    }
    return W === void 0 && (W = new wx(r, A, M, s), c.push(W)), W;
  }
  function T(M) {
    if (--M.usedTimes === 0) {
      const A = c.indexOf(M);
      c[A] = c[c.length - 1], c.pop(), M.destroy();
    }
  }
  function E(M) {
    l.remove(M);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: v,
    acquireProgram: S,
    releaseProgram: T,
    releaseShaderCache: E,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: C
  };
}
function Dx() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
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
function Ix(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function wh(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Rh() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, f, d, _, g, m) {
    let p = r[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: f,
      material: d,
      groupOrder: _,
      renderOrder: u.renderOrder,
      z: g,
      group: m
    }, r[e] = p) : (p.id = u.id, p.object = u, p.geometry = f, p.material = d, p.groupOrder = _, p.renderOrder = u.renderOrder, p.z = g, p.group = m), e++, p;
  }
  function o(u, f, d, _, g, m) {
    const p = a(u, f, d, _, g, m);
    d.transmission > 0 ? n.push(p) : d.transparent === !0 ? i.push(p) : t.push(p);
  }
  function l(u, f, d, _, g, m) {
    const p = a(u, f, d, _, g, m);
    d.transmission > 0 ? n.unshift(p) : d.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || Ix), n.length > 1 && n.sort(f || wh), i.length > 1 && i.sort(f || wh);
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
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Ux() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new Rh(), r.set(n, [a])) : i >= s.length ? (a = new Rh(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Nx() {
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
            color: new Ee()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new Ee(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new Ee(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new Ee(),
            groundColor: new Ee()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ee(),
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
function Ox() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new se()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new se()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new se(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let Fx = 0;
function Bx(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function zx(r, e) {
  const t = new Nx(), n = Ox(), i = {
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
      numSpotMaps: -1
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
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++) i.probe.push(new L());
  const s = new L(), a = new Ne(), o = new Ne();
  function l(h, u) {
    let f = 0, d = 0, _ = 0;
    for (let W = 0; W < 9; W++) i.probe[W].set(0, 0, 0);
    let g = 0, m = 0, p = 0, y = 0, x = 0, v = 0, S = 0, T = 0, E = 0, C = 0;
    h.sort(Bx);
    const M = u === !0 ? Math.PI : 1;
    for (let W = 0, X = h.length; W < X; W++) {
      const I = h[W], F = I.color, z = I.intensity, Z = I.distance, k = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        f += F.r * z * M, d += F.g * z * M, _ += F.b * z * M;
      else if (I.isLightProbe)
        for (let Y = 0; Y < 9; Y++)
          i.probe[Y].addScaledVector(I.sh.coefficients[Y], z);
      else if (I.isDirectionalLight) {
        const Y = t.get(I);
        if (Y.color.copy(I.color).multiplyScalar(I.intensity * M), I.castShadow) {
          const Q = I.shadow, J = n.get(I);
          J.shadowBias = Q.bias, J.shadowNormalBias = Q.normalBias, J.shadowRadius = Q.radius, J.shadowMapSize = Q.mapSize, i.directionalShadow[g] = J, i.directionalShadowMap[g] = k, i.directionalShadowMatrix[g] = I.shadow.matrix, v++;
        }
        i.directional[g] = Y, g++;
      } else if (I.isSpotLight) {
        const Y = t.get(I);
        Y.position.setFromMatrixPosition(I.matrixWorld), Y.color.copy(F).multiplyScalar(z * M), Y.distance = Z, Y.coneCos = Math.cos(I.angle), Y.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), Y.decay = I.decay, i.spot[p] = Y;
        const Q = I.shadow;
        if (I.map && (i.spotLightMap[E] = I.map, E++, Q.updateMatrices(I), I.castShadow && C++), i.spotLightMatrix[p] = Q.matrix, I.castShadow) {
          const J = n.get(I);
          J.shadowBias = Q.bias, J.shadowNormalBias = Q.normalBias, J.shadowRadius = Q.radius, J.shadowMapSize = Q.mapSize, i.spotShadow[p] = J, i.spotShadowMap[p] = k, T++;
        }
        p++;
      } else if (I.isRectAreaLight) {
        const Y = t.get(I);
        Y.color.copy(F).multiplyScalar(z), Y.halfWidth.set(I.width * 0.5, 0, 0), Y.halfHeight.set(0, I.height * 0.5, 0), i.rectArea[y] = Y, y++;
      } else if (I.isPointLight) {
        const Y = t.get(I);
        if (Y.color.copy(I.color).multiplyScalar(I.intensity * M), Y.distance = I.distance, Y.decay = I.decay, I.castShadow) {
          const Q = I.shadow, J = n.get(I);
          J.shadowBias = Q.bias, J.shadowNormalBias = Q.normalBias, J.shadowRadius = Q.radius, J.shadowMapSize = Q.mapSize, J.shadowCameraNear = Q.camera.near, J.shadowCameraFar = Q.camera.far, i.pointShadow[m] = J, i.pointShadowMap[m] = k, i.pointShadowMatrix[m] = I.shadow.matrix, S++;
        }
        i.point[m] = Y, m++;
      } else if (I.isHemisphereLight) {
        const Y = t.get(I);
        Y.skyColor.copy(I.color).multiplyScalar(z * M), Y.groundColor.copy(I.groundColor).multiplyScalar(z * M), i.hemi[x] = Y, x++;
      }
    }
    y > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_FLOAT_1, i.rectAreaLTC2 = oe.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_HALF_1, i.rectAreaLTC2 = oe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = d, i.ambient[2] = _;
    const A = i.hash;
    (A.directionalLength !== g || A.pointLength !== m || A.spotLength !== p || A.rectAreaLength !== y || A.hemiLength !== x || A.numDirectionalShadows !== v || A.numPointShadows !== S || A.numSpotShadows !== T || A.numSpotMaps !== E) && (i.directional.length = g, i.spot.length = p, i.rectArea.length = y, i.point.length = m, i.hemi.length = x, i.directionalShadow.length = v, i.directionalShadowMap.length = v, i.pointShadow.length = S, i.pointShadowMap.length = S, i.spotShadow.length = T, i.spotShadowMap.length = T, i.directionalShadowMatrix.length = v, i.pointShadowMatrix.length = S, i.spotLightMatrix.length = T + E - C, i.spotLightMap.length = E, i.numSpotLightShadowsWithMaps = C, A.directionalLength = g, A.pointLength = m, A.spotLength = p, A.rectAreaLength = y, A.hemiLength = x, A.numDirectionalShadows = v, A.numPointShadows = S, A.numSpotShadows = T, A.numSpotMaps = E, i.version = Fx++);
  }
  function c(h, u) {
    let f = 0, d = 0, _ = 0, g = 0, m = 0;
    const p = u.matrixWorldInverse;
    for (let y = 0, x = h.length; y < x; y++) {
      const v = h[y];
      if (v.isDirectionalLight) {
        const S = i.directional[f];
        S.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), f++;
      } else if (v.isSpotLight) {
        const S = i.spot[_];
        S.position.setFromMatrixPosition(v.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), _++;
      } else if (v.isRectAreaLight) {
        const S = i.rectArea[g];
        S.position.setFromMatrixPosition(v.matrixWorld), S.position.applyMatrix4(p), o.identity(), a.copy(v.matrixWorld), a.premultiply(p), o.extractRotation(a), S.halfWidth.set(v.width * 0.5, 0, 0), S.halfHeight.set(0, v.height * 0.5, 0), S.halfWidth.applyMatrix4(o), S.halfHeight.applyMatrix4(o), g++;
      } else if (v.isPointLight) {
        const S = i.point[d];
        S.position.setFromMatrixPosition(v.matrixWorld), S.position.applyMatrix4(p), d++;
      } else if (v.isHemisphereLight) {
        const S = i.hemi[m];
        S.direction.setFromMatrixPosition(v.matrixWorld), S.direction.transformDirection(p), m++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function Ch(r, e) {
  const t = new zx(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o
  };
}
function kx(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let l;
    return o === void 0 ? (l = new Ch(r, e), t.set(s, [l])) : a >= o.length ? (l = new Ch(r, e), o.push(l)) : l = o[a], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Hx extends Cn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ap, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Gx extends Cn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Vx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Wx = `uniform sampler2D shadow_pass;
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
function Xx(r, e, t) {
  let n = new Al();
  const i = new se(), s = new se(), a = new Ke(), o = new Hx({ depthPacking: wp }), l = new Gx(), c = {}, h = t.maxTextureSize, u = { [ei]: Gt, [Gt]: ei, [An]: An }, f = new Qt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new se() },
      radius: { value: 4 }
    },
    vertexShader: Vx,
    fragmentShader: Wx
  }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const _ = new kt();
  _.setAttribute(
    "position",
    new Tt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new Lt(_, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Lu;
  let p = this.type;
  this.render = function(S, T, E) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || S.length === 0) return;
    const C = r.getRenderTarget(), M = r.getActiveCubeFace(), A = r.getActiveMipmapLevel(), W = r.state;
    W.setBlending(Jn), W.buffers.color.setClear(1, 1, 1, 1), W.buffers.depth.setTest(!0), W.setScissorTest(!1);
    const X = p !== Wn && this.type === Wn, I = p === Wn && this.type !== Wn;
    for (let F = 0, z = S.length; F < z; F++) {
      const Z = S[F], k = Z.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      i.copy(k.mapSize);
      const Y = k.getFrameExtents();
      if (i.multiply(Y), s.copy(k.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / Y.x), i.x = s.x * Y.x, k.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / Y.y), i.y = s.y * Y.y, k.mapSize.y = s.y)), k.map === null || X === !0 || I === !0) {
        const J = this.type !== Wn ? { minFilter: Mt, magFilter: Mt } : {};
        k.map !== null && k.map.dispose(), k.map = new yn(i.x, i.y, J), k.map.texture.name = Z.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(k.map), r.clear();
      const Q = k.getViewportCount();
      for (let J = 0; J < Q; J++) {
        const B = k.getViewport(J);
        a.set(
          s.x * B.x,
          s.y * B.y,
          s.x * B.z,
          s.y * B.w
        ), W.viewport(a), k.updateMatrices(Z, J), n = k.getFrustum(), v(T, E, k.camera, Z, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === Wn && y(k, E), k.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, r.setRenderTarget(C, M, A);
  };
  function y(S, T) {
    const E = e.update(g);
    f.defines.VSM_SAMPLES !== S.blurSamples && (f.defines.VSM_SAMPLES = S.blurSamples, d.defines.VSM_SAMPLES = S.blurSamples, f.needsUpdate = !0, d.needsUpdate = !0), S.mapPass === null && (S.mapPass = new yn(i.x, i.y)), f.uniforms.shadow_pass.value = S.map.texture, f.uniforms.resolution.value = S.mapSize, f.uniforms.radius.value = S.radius, r.setRenderTarget(S.mapPass), r.clear(), r.renderBufferDirect(T, null, E, f, g, null), d.uniforms.shadow_pass.value = S.mapPass.texture, d.uniforms.resolution.value = S.mapSize, d.uniforms.radius.value = S.radius, r.setRenderTarget(S.map), r.clear(), r.renderBufferDirect(T, null, E, d, g, null);
  }
  function x(S, T, E, C) {
    let M = null;
    const A = E.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (A !== void 0)
      M = A;
    else if (M = E.isPointLight === !0 ? l : o, r.localClippingEnabled && T.clipShadows === !0 && Array.isArray(T.clippingPlanes) && T.clippingPlanes.length !== 0 || T.displacementMap && T.displacementScale !== 0 || T.alphaMap && T.alphaTest > 0 || T.map && T.alphaTest > 0) {
      const W = M.uuid, X = T.uuid;
      let I = c[W];
      I === void 0 && (I = {}, c[W] = I);
      let F = I[X];
      F === void 0 && (F = M.clone(), I[X] = F), M = F;
    }
    if (M.visible = T.visible, M.wireframe = T.wireframe, C === Wn ? M.side = T.shadowSide !== null ? T.shadowSide : T.side : M.side = T.shadowSide !== null ? T.shadowSide : u[T.side], M.alphaMap = T.alphaMap, M.alphaTest = T.alphaTest, M.map = T.map, M.clipShadows = T.clipShadows, M.clippingPlanes = T.clippingPlanes, M.clipIntersection = T.clipIntersection, M.displacementMap = T.displacementMap, M.displacementScale = T.displacementScale, M.displacementBias = T.displacementBias, M.wireframeLinewidth = T.wireframeLinewidth, M.linewidth = T.linewidth, E.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const W = r.properties.get(M);
      W.light = E;
    }
    return M;
  }
  function v(S, T, E, C, M) {
    if (S.visible === !1) return;
    if (S.layers.test(T.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || S.receiveShadow && M === Wn) && (!S.frustumCulled || n.intersectsObject(S))) {
      S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, S.matrixWorld);
      const X = e.update(S), I = S.material;
      if (Array.isArray(I)) {
        const F = X.groups;
        for (let z = 0, Z = F.length; z < Z; z++) {
          const k = F[z], Y = I[k.materialIndex];
          if (Y && Y.visible) {
            const Q = x(S, Y, C, M);
            r.renderBufferDirect(E, null, X, Q, S, k);
          }
        }
      } else if (I.visible) {
        const F = x(S, I, C, M);
        r.renderBufferDirect(E, null, X, F, S, null);
      }
    }
    const W = S.children;
    for (let X = 0, I = W.length; X < I; X++)
      v(W[X], T, E, C, M);
  }
}
function qx(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let D = !1;
    const ce = new Ke();
    let V = null;
    const re = new Ke(0, 0, 0, 0);
    return {
      setMask: function(he) {
        V !== he && !D && (r.colorMask(he, he, he, he), V = he);
      },
      setLocked: function(he) {
        D = he;
      },
      setClear: function(he, We, et, xt, Sn) {
        Sn === !0 && (he *= xt, We *= xt, et *= xt), ce.set(he, We, et, xt), re.equals(ce) === !1 && (r.clearColor(he, We, et, xt), re.copy(ce));
      },
      reset: function() {
        D = !1, V = null, re.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let D = !1, ce = null, V = null, re = null;
    return {
      setTest: function(he) {
        he ? Ce(r.DEPTH_TEST) : Me(r.DEPTH_TEST);
      },
      setMask: function(he) {
        ce !== he && !D && (r.depthMask(he), ce = he);
      },
      setFunc: function(he) {
        if (V !== he) {
          switch (he) {
            case tp:
              r.depthFunc(r.NEVER);
              break;
            case np:
              r.depthFunc(r.ALWAYS);
              break;
            case ip:
              r.depthFunc(r.LESS);
              break;
            case Go:
              r.depthFunc(r.LEQUAL);
              break;
            case sp:
              r.depthFunc(r.EQUAL);
              break;
            case rp:
              r.depthFunc(r.GEQUAL);
              break;
            case ap:
              r.depthFunc(r.GREATER);
              break;
            case op:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          V = he;
        }
      },
      setLocked: function(he) {
        D = he;
      },
      setClear: function(he) {
        re !== he && (r.clearDepth(he), re = he);
      },
      reset: function() {
        D = !1, ce = null, V = null, re = null;
      }
    };
  }
  function a() {
    let D = !1, ce = null, V = null, re = null, he = null, We = null, et = null, xt = null, Sn = null;
    return {
      setTest: function(st) {
        D || (st ? Ce(r.STENCIL_TEST) : Me(r.STENCIL_TEST));
      },
      setMask: function(st) {
        ce !== st && !D && (r.stencilMask(st), ce = st);
      },
      setFunc: function(st, Tn, Ut) {
        (V !== st || re !== Tn || he !== Ut) && (r.stencilFunc(st, Tn, Ut), V = st, re = Tn, he = Ut);
      },
      setOp: function(st, Tn, Ut) {
        (We !== st || et !== Tn || xt !== Ut) && (r.stencilOp(st, Tn, Ut), We = st, et = Tn, xt = Ut);
      },
      setLocked: function(st) {
        D = st;
      },
      setClear: function(st) {
        Sn !== st && (r.clearStencil(st), Sn = st);
      },
      reset: function() {
        D = !1, ce = null, V = null, re = null, he = null, We = null, et = null, xt = null, Sn = null;
      }
    };
  }
  const o = new i(), l = new s(), c = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let f = {}, d = {}, _ = /* @__PURE__ */ new WeakMap(), g = [], m = null, p = !1, y = null, x = null, v = null, S = null, T = null, E = null, C = null, M = !1, A = null, W = null, X = null, I = null, F = null;
  const z = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Z = !1, k = 0;
  const Y = r.getParameter(r.VERSION);
  Y.indexOf("WebGL") !== -1 ? (k = parseFloat(/^WebGL (\d)/.exec(Y)[1]), Z = k >= 1) : Y.indexOf("OpenGL ES") !== -1 && (k = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), Z = k >= 2);
  let Q = null, J = {};
  const B = r.getParameter(r.SCISSOR_BOX), G = r.getParameter(r.VIEWPORT), le = new Ke().fromArray(B), ie = new Ke().fromArray(G);
  function ae(D, ce, V, re) {
    const he = new Uint8Array(4), We = r.createTexture();
    r.bindTexture(D, We), r.texParameteri(D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(D, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let et = 0; et < V; et++)
      n && (D === r.TEXTURE_3D || D === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ce, 0, r.RGBA, 1, 1, re, 0, r.RGBA, r.UNSIGNED_BYTE, he) : r.texImage2D(ce + et, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, he);
    return We;
  }
  const xe = {};
  xe[r.TEXTURE_2D] = ae(r.TEXTURE_2D, r.TEXTURE_2D, 1), xe[r.TEXTURE_CUBE_MAP] = ae(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (xe[r.TEXTURE_2D_ARRAY] = ae(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), xe[r.TEXTURE_3D] = ae(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ce(r.DEPTH_TEST), l.setFunc(Go), Se(!1), $e(pc), Ce(r.CULL_FACE), ve(Jn);
  function Ce(D) {
    f[D] !== !0 && (r.enable(D), f[D] = !0);
  }
  function Me(D) {
    f[D] !== !1 && (r.disable(D), f[D] = !1);
  }
  function Ve(D, ce) {
    return d[D] !== ce ? (r.bindFramebuffer(D, ce), d[D] = ce, n && (D === r.DRAW_FRAMEBUFFER && (d[r.FRAMEBUFFER] = ce), D === r.FRAMEBUFFER && (d[r.DRAW_FRAMEBUFFER] = ce)), !0) : !1;
  }
  function At(D, ce) {
    let V = g, re = !1;
    if (D)
      if (V = _.get(ce), V === void 0 && (V = [], _.set(ce, V)), D.isWebGLMultipleRenderTargets) {
        const he = D.texture;
        if (V.length !== he.length || V[0] !== r.COLOR_ATTACHMENT0) {
          for (let We = 0, et = he.length; We < et; We++)
            V[We] = r.COLOR_ATTACHMENT0 + We;
          V.length = he.length, re = !0;
        }
      } else
        V[0] !== r.COLOR_ATTACHMENT0 && (V[0] = r.COLOR_ATTACHMENT0, re = !0);
    else
      V[0] !== r.BACK && (V[0] = r.BACK, re = !0);
    re && (t.isWebGL2 ? r.drawBuffers(V) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V));
  }
  function Ue(D) {
    return m !== D ? (r.useProgram(D), m = D, !0) : !1;
  }
  const N = {
    [vs]: r.FUNC_ADD,
    [Wd]: r.FUNC_SUBTRACT,
    [Xd]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    N[_c] = r.MIN, N[xc] = r.MAX;
  else {
    const D = e.get("EXT_blend_minmax");
    D !== null && (N[_c] = D.MIN_EXT, N[xc] = D.MAX_EXT);
  }
  const gt = {
    [qd]: r.ZERO,
    [Yd]: r.ONE,
    [jd]: r.SRC_COLOR,
    [Du]: r.SRC_ALPHA,
    [ep]: r.SRC_ALPHA_SATURATE,
    [$d]: r.DST_COLOR,
    [Zd]: r.DST_ALPHA,
    [Kd]: r.ONE_MINUS_SRC_COLOR,
    [Iu]: r.ONE_MINUS_SRC_ALPHA,
    [Qd]: r.ONE_MINUS_DST_COLOR,
    [Jd]: r.ONE_MINUS_DST_ALPHA
  };
  function ve(D, ce, V, re, he, We, et, xt) {
    if (D === Jn) {
      p === !0 && (Me(r.BLEND), p = !1);
      return;
    }
    if (p === !1 && (Ce(r.BLEND), p = !0), D !== Vd) {
      if (D !== y || xt !== M) {
        if ((x !== vs || T !== vs) && (r.blendEquation(r.FUNC_ADD), x = vs, T = vs), xt)
          switch (D) {
            case Es:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ho:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case mc:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case gc:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case Es:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Ho:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case mc:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case gc:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        v = null, S = null, E = null, C = null, y = D, M = xt;
      }
      return;
    }
    he = he || ce, We = We || V, et = et || re, (ce !== x || he !== T) && (r.blendEquationSeparate(N[ce], N[he]), x = ce, T = he), (V !== v || re !== S || We !== E || et !== C) && (r.blendFuncSeparate(gt[V], gt[re], gt[We], gt[et]), v = V, S = re, E = We, C = et), y = D, M = !1;
  }
  function we(D, ce) {
    D.side === An ? Me(r.CULL_FACE) : Ce(r.CULL_FACE);
    let V = D.side === Gt;
    ce && (V = !V), Se(V), D.blending === Es && D.transparent === !1 ? ve(Jn) : ve(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.premultipliedAlpha), l.setFunc(D.depthFunc), l.setTest(D.depthTest), l.setMask(D.depthWrite), o.setMask(D.colorWrite);
    const re = D.stencilWrite;
    c.setTest(re), re && (c.setMask(D.stencilWriteMask), c.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), c.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), Le(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? Ce(r.SAMPLE_ALPHA_TO_COVERAGE) : Me(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Se(D) {
    A !== D && (D ? r.frontFace(r.CW) : r.frontFace(r.CCW), A = D);
  }
  function $e(D) {
    D !== kd ? (Ce(r.CULL_FACE), D !== W && (D === pc ? r.cullFace(r.BACK) : D === Hd ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Me(r.CULL_FACE), W = D;
  }
  function Fe(D) {
    D !== X && (Z && r.lineWidth(D), X = D);
  }
  function Le(D, ce, V) {
    D ? (Ce(r.POLYGON_OFFSET_FILL), (I !== ce || F !== V) && (r.polygonOffset(ce, V), I = ce, F = V)) : Me(r.POLYGON_OFFSET_FILL);
  }
  function Xe(D) {
    D ? Ce(r.SCISSOR_TEST) : Me(r.SCISSOR_TEST);
  }
  function ft(D) {
    D === void 0 && (D = r.TEXTURE0 + z - 1), Q !== D && (r.activeTexture(D), Q = D);
  }
  function _t(D, ce, V) {
    V === void 0 && (Q === null ? V = r.TEXTURE0 + z - 1 : V = Q);
    let re = J[V];
    re === void 0 && (re = { type: void 0, texture: void 0 }, J[V] = re), (re.type !== D || re.texture !== ce) && (Q !== V && (r.activeTexture(V), Q = V), r.bindTexture(D, ce || xe[D]), re.type = D, re.texture = ce);
  }
  function R() {
    const D = J[Q];
    D !== void 0 && D.type !== void 0 && (r.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function b() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function q() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ne() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function te() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function P() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function $() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ee() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function H() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function de() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function _e() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ge(D) {
    le.equals(D) === !1 && (r.scissor(D.x, D.y, D.z, D.w), le.copy(D));
  }
  function me(D) {
    ie.equals(D) === !1 && (r.viewport(D.x, D.y, D.z, D.w), ie.copy(D));
  }
  function ue(D, ce) {
    let V = u.get(ce);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), u.set(ce, V));
    let re = V.get(D);
    re === void 0 && (re = r.getUniformBlockIndex(ce, D.name), V.set(D, re));
  }
  function be(D, ce) {
    const re = u.get(ce).get(D);
    h.get(ce) !== re && (r.uniformBlockBinding(ce, re, D.__bindingPointIndex), h.set(ce, re));
  }
  function ze() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), f = {}, Q = null, J = {}, d = {}, _ = /* @__PURE__ */ new WeakMap(), g = [], m = null, p = !1, y = null, x = null, v = null, S = null, T = null, E = null, C = null, M = !1, A = null, W = null, X = null, I = null, F = null, le.set(0, 0, r.canvas.width, r.canvas.height), ie.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    enable: Ce,
    disable: Me,
    bindFramebuffer: Ve,
    drawBuffers: At,
    useProgram: Ue,
    setBlending: ve,
    setMaterial: we,
    setFlipSided: Se,
    setCullFace: $e,
    setLineWidth: Fe,
    setPolygonOffset: Le,
    setScissorTest: Xe,
    activeTexture: ft,
    bindTexture: _t,
    unbindTexture: R,
    compressedTexImage2D: b,
    compressedTexImage3D: q,
    texImage2D: de,
    texImage3D: _e,
    updateUBOMapping: ue,
    uniformBlockBinding: be,
    texStorage2D: ee,
    texStorage3D: H,
    texSubImage2D: ne,
    texSubImage3D: te,
    compressedTexSubImage2D: P,
    compressedTexSubImage3D: $,
    scissor: ge,
    viewport: me,
    reset: ze
  };
}
function Yx(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, d = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), _ = /* @__PURE__ */ new WeakMap();
  let g;
  const m = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function y(R, b) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(R, b)
    ) : xr("canvas");
  }
  function x(R, b, q, ne) {
    let te = 1;
    if ((R.width > ne || R.height > ne) && (te = ne / Math.max(R.width, R.height)), te < 1 || b === !0)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap) {
        const P = b ? ya : Math.floor, $ = P(te * R.width), ee = P(te * R.height);
        g === void 0 && (g = y($, ee));
        const H = q ? y($, ee) : g;
        return H.width = $, H.height = ee, H.getContext("2d").drawImage(R, 0, 0, $, ee), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + R.width + "x" + R.height + ") to (" + $ + "x" + ee + ")."), H;
      } else
        return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + R.width + "x" + R.height + ")."), R;
    return R;
  }
  function v(R) {
    return Ko(R.width) && Ko(R.height);
  }
  function S(R) {
    return o ? !1 : R.wrapS !== on || R.wrapT !== on || R.minFilter !== Mt && R.minFilter !== Ht;
  }
  function T(R, b) {
    return R.generateMipmaps && b && R.minFilter !== Mt && R.minFilter !== Ht;
  }
  function E(R) {
    r.generateMipmap(R);
  }
  function C(R, b, q, ne, te = !1) {
    if (o === !1) return b;
    if (R !== null) {
      if (r[R] !== void 0) return r[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let P = b;
    return b === r.RED && (q === r.FLOAT && (P = r.R32F), q === r.HALF_FLOAT && (P = r.R16F), q === r.UNSIGNED_BYTE && (P = r.R8)), b === r.RG && (q === r.FLOAT && (P = r.RG32F), q === r.HALF_FLOAT && (P = r.RG16F), q === r.UNSIGNED_BYTE && (P = r.RG8)), b === r.RGBA && (q === r.FLOAT && (P = r.RGBA32F), q === r.HALF_FLOAT && (P = r.RGBA16F), q === r.UNSIGNED_BYTE && (P = ne === Te && te === !1 ? r.SRGB8_ALPHA8 : r.RGBA8), q === r.UNSIGNED_SHORT_4_4_4_4 && (P = r.RGBA4), q === r.UNSIGNED_SHORT_5_5_5_1 && (P = r.RGB5_A1)), (P === r.R16F || P === r.R32F || P === r.RG16F || P === r.RG32F || P === r.RGBA16F || P === r.RGBA32F) && e.get("EXT_color_buffer_float"), P;
  }
  function M(R, b, q) {
    return T(R, q) === !0 || R.isFramebufferTexture && R.minFilter !== Mt && R.minFilter !== Ht ? Math.log2(Math.max(b.width, b.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? b.mipmaps.length : 1;
  }
  function A(R) {
    return R === Mt || R === Xo || R === da ? r.NEAREST : r.LINEAR;
  }
  function W(R) {
    const b = R.target;
    b.removeEventListener("dispose", W), I(b), b.isVideoTexture && _.delete(b);
  }
  function X(R) {
    const b = R.target;
    b.removeEventListener("dispose", X), z(b);
  }
  function I(R) {
    const b = n.get(R);
    if (b.__webglInit === void 0) return;
    const q = R.source, ne = m.get(q);
    if (ne) {
      const te = ne[b.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && F(R), Object.keys(ne).length === 0 && m.delete(q);
    }
    n.remove(R);
  }
  function F(R) {
    const b = n.get(R);
    r.deleteTexture(b.__webglTexture);
    const q = R.source, ne = m.get(q);
    delete ne[b.__cacheKey], a.memory.textures--;
  }
  function z(R) {
    const b = R.texture, q = n.get(R), ne = n.get(b);
    if (ne.__webglTexture !== void 0 && (r.deleteTexture(ne.__webglTexture), a.memory.textures--), R.depthTexture && R.depthTexture.dispose(), R.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++)
        r.deleteFramebuffer(q.__webglFramebuffer[te]), q.__webglDepthbuffer && r.deleteRenderbuffer(q.__webglDepthbuffer[te]);
    else {
      if (r.deleteFramebuffer(q.__webglFramebuffer), q.__webglDepthbuffer && r.deleteRenderbuffer(q.__webglDepthbuffer), q.__webglMultisampledFramebuffer && r.deleteFramebuffer(q.__webglMultisampledFramebuffer), q.__webglColorRenderbuffer)
        for (let te = 0; te < q.__webglColorRenderbuffer.length; te++)
          q.__webglColorRenderbuffer[te] && r.deleteRenderbuffer(q.__webglColorRenderbuffer[te]);
      q.__webglDepthRenderbuffer && r.deleteRenderbuffer(q.__webglDepthRenderbuffer);
    }
    if (R.isWebGLMultipleRenderTargets)
      for (let te = 0, P = b.length; te < P; te++) {
        const $ = n.get(b[te]);
        $.__webglTexture && (r.deleteTexture($.__webglTexture), a.memory.textures--), n.remove(b[te]);
      }
    n.remove(b), n.remove(R);
  }
  let Z = 0;
  function k() {
    Z = 0;
  }
  function Y() {
    const R = Z;
    return R >= l && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + l), Z += 1, R;
  }
  function Q(R) {
    const b = [];
    return b.push(R.wrapS), b.push(R.wrapT), b.push(R.wrapR || 0), b.push(R.magFilter), b.push(R.minFilter), b.push(R.anisotropy), b.push(R.internalFormat), b.push(R.format), b.push(R.type), b.push(R.generateMipmaps), b.push(R.premultiplyAlpha), b.push(R.flipY), b.push(R.unpackAlignment), b.push(R.colorSpace), b.join();
  }
  function J(R, b) {
    const q = n.get(R);
    if (R.isVideoTexture && ft(R), R.isRenderTargetTexture === !1 && R.version > 0 && q.__version !== R.version) {
      const ne = R.image;
      if (ne === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ne.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ve(q, R, b);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, q.__webglTexture, r.TEXTURE0 + b);
  }
  function B(R, b) {
    const q = n.get(R);
    if (R.version > 0 && q.__version !== R.version) {
      Ve(q, R, b);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, q.__webglTexture, r.TEXTURE0 + b);
  }
  function G(R, b) {
    const q = n.get(R);
    if (R.version > 0 && q.__version !== R.version) {
      Ve(q, R, b);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, q.__webglTexture, r.TEXTURE0 + b);
  }
  function le(R, b) {
    const q = n.get(R);
    if (R.version > 0 && q.__version !== R.version) {
      At(q, R, b);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, q.__webglTexture, r.TEXTURE0 + b);
  }
  const ie = {
    [Ds]: r.REPEAT,
    [on]: r.CLAMP_TO_EDGE,
    [xa]: r.MIRRORED_REPEAT
  }, ae = {
    [Mt]: r.NEAREST,
    [Xo]: r.NEAREST_MIPMAP_NEAREST,
    [da]: r.NEAREST_MIPMAP_LINEAR,
    [Ht]: r.LINEAR,
    [Ou]: r.LINEAR_MIPMAP_NEAREST,
    [Xi]: r.LINEAR_MIPMAP_LINEAR
  }, xe = {
    [Pp]: r.NEVER,
    [Fp]: r.ALWAYS,
    [Lp]: r.LESS,
    [Ip]: r.LEQUAL,
    [Dp]: r.EQUAL,
    [Op]: r.GEQUAL,
    [Up]: r.GREATER,
    [Np]: r.NOTEQUAL
  };
  function Ce(R, b, q) {
    if (q ? (r.texParameteri(R, r.TEXTURE_WRAP_S, ie[b.wrapS]), r.texParameteri(R, r.TEXTURE_WRAP_T, ie[b.wrapT]), (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, ie[b.wrapR]), r.texParameteri(R, r.TEXTURE_MAG_FILTER, ae[b.magFilter]), r.texParameteri(R, r.TEXTURE_MIN_FILTER, ae[b.minFilter])) : (r.texParameteri(R, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(R, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (b.wrapS !== on || b.wrapT !== on) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(R, r.TEXTURE_MAG_FILTER, A(b.magFilter)), r.texParameteri(R, r.TEXTURE_MIN_FILTER, A(b.minFilter)), b.minFilter !== Mt && b.minFilter !== Ht && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), b.compareFunction && (r.texParameteri(R, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(R, r.TEXTURE_COMPARE_FUNC, xe[b.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const ne = e.get("EXT_texture_filter_anisotropic");
      if (b.magFilter === Mt || b.minFilter !== da && b.minFilter !== Xi || b.type === Yn && e.has("OES_texture_float_linear") === !1 || o === !1 && b.type === Qn && e.has("OES_texture_half_float_linear") === !1) return;
      (b.anisotropy > 1 || n.get(b).__currentAnisotropy) && (r.texParameterf(R, ne.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, i.getMaxAnisotropy())), n.get(b).__currentAnisotropy = b.anisotropy);
    }
  }
  function Me(R, b) {
    let q = !1;
    R.__webglInit === void 0 && (R.__webglInit = !0, b.addEventListener("dispose", W));
    const ne = b.source;
    let te = m.get(ne);
    te === void 0 && (te = {}, m.set(ne, te));
    const P = Q(b);
    if (P !== R.__cacheKey) {
      te[P] === void 0 && (te[P] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, q = !0), te[P].usedTimes++;
      const $ = te[R.__cacheKey];
      $ !== void 0 && (te[R.__cacheKey].usedTimes--, $.usedTimes === 0 && F(b)), R.__cacheKey = P, R.__webglTexture = te[P].texture;
    }
    return q;
  }
  function Ve(R, b, q) {
    let ne = r.TEXTURE_2D;
    (b.isDataArrayTexture || b.isCompressedArrayTexture) && (ne = r.TEXTURE_2D_ARRAY), b.isData3DTexture && (ne = r.TEXTURE_3D);
    const te = Me(R, b), P = b.source;
    t.bindTexture(ne, R.__webglTexture, r.TEXTURE0 + q);
    const $ = n.get(P);
    if (P.version !== $.__version || te === !0) {
      t.activeTexture(r.TEXTURE0 + q), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const ee = S(b) && v(b.image) === !1;
      let H = x(b.image, ee, !1, h);
      H = _t(b, H);
      const de = v(H) || o, _e = s.convert(b.format, b.colorSpace);
      let ge = s.convert(b.type), me = C(b.internalFormat, _e, ge, b.colorSpace);
      Ce(ne, b, de);
      let ue;
      const be = b.mipmaps, ze = o && b.isVideoTexture !== !0, D = $.__version === void 0 || te === !0, ce = M(b, H, de);
      if (b.isDepthTexture)
        me = r.DEPTH_COMPONENT, o ? b.type === Yn ? me = r.DEPTH_COMPONENT32F : b.type === fi ? me = r.DEPTH_COMPONENT24 : b.type === Fi ? me = r.DEPTH24_STENCIL8 : me = r.DEPTH_COMPONENT16 : b.type === Yn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), b.format === Bi && me === r.DEPTH_COMPONENT && b.type !== Tl && b.type !== fi && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), b.type = fi, ge = s.convert(b.type)), b.format === Is && me === r.DEPTH_COMPONENT && (me = r.DEPTH_STENCIL, b.type !== Fi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), b.type = Fi, ge = s.convert(b.type))), D && (ze ? t.texStorage2D(r.TEXTURE_2D, 1, me, H.width, H.height) : t.texImage2D(r.TEXTURE_2D, 0, me, H.width, H.height, 0, _e, ge, null));
      else if (b.isDataTexture)
        if (be.length > 0 && de) {
          ze && D && t.texStorage2D(r.TEXTURE_2D, ce, me, be[0].width, be[0].height);
          for (let V = 0, re = be.length; V < re; V++)
            ue = be[V], ze ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, ue.width, ue.height, _e, ge, ue.data) : t.texImage2D(r.TEXTURE_2D, V, me, ue.width, ue.height, 0, _e, ge, ue.data);
          b.generateMipmaps = !1;
        } else
          ze ? (D && t.texStorage2D(r.TEXTURE_2D, ce, me, H.width, H.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, H.width, H.height, _e, ge, H.data)) : t.texImage2D(r.TEXTURE_2D, 0, me, H.width, H.height, 0, _e, ge, H.data);
      else if (b.isCompressedTexture)
        if (b.isCompressedArrayTexture) {
          ze && D && t.texStorage3D(r.TEXTURE_2D_ARRAY, ce, me, be[0].width, be[0].height, H.depth);
          for (let V = 0, re = be.length; V < re; V++)
            ue = be[V], b.format !== ln ? _e !== null ? ze ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, ue.width, ue.height, H.depth, _e, ue.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, V, me, ue.width, ue.height, H.depth, 0, ue.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ze ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, V, 0, 0, 0, ue.width, ue.height, H.depth, _e, ge, ue.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, V, me, ue.width, ue.height, H.depth, 0, _e, ge, ue.data);
        } else {
          ze && D && t.texStorage2D(r.TEXTURE_2D, ce, me, be[0].width, be[0].height);
          for (let V = 0, re = be.length; V < re; V++)
            ue = be[V], b.format !== ln ? _e !== null ? ze ? t.compressedTexSubImage2D(r.TEXTURE_2D, V, 0, 0, ue.width, ue.height, _e, ue.data) : t.compressedTexImage2D(r.TEXTURE_2D, V, me, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ze ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, ue.width, ue.height, _e, ge, ue.data) : t.texImage2D(r.TEXTURE_2D, V, me, ue.width, ue.height, 0, _e, ge, ue.data);
        }
      else if (b.isDataArrayTexture)
        ze ? (D && t.texStorage3D(r.TEXTURE_2D_ARRAY, ce, me, H.width, H.height, H.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, H.width, H.height, H.depth, _e, ge, H.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, me, H.width, H.height, H.depth, 0, _e, ge, H.data);
      else if (b.isData3DTexture)
        ze ? (D && t.texStorage3D(r.TEXTURE_3D, ce, me, H.width, H.height, H.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, H.width, H.height, H.depth, _e, ge, H.data)) : t.texImage3D(r.TEXTURE_3D, 0, me, H.width, H.height, H.depth, 0, _e, ge, H.data);
      else if (b.isFramebufferTexture) {
        if (D)
          if (ze)
            t.texStorage2D(r.TEXTURE_2D, ce, me, H.width, H.height);
          else {
            let V = H.width, re = H.height;
            for (let he = 0; he < ce; he++)
              t.texImage2D(r.TEXTURE_2D, he, me, V, re, 0, _e, ge, null), V >>= 1, re >>= 1;
          }
      } else if (be.length > 0 && de) {
        ze && D && t.texStorage2D(r.TEXTURE_2D, ce, me, be[0].width, be[0].height);
        for (let V = 0, re = be.length; V < re; V++)
          ue = be[V], ze ? t.texSubImage2D(r.TEXTURE_2D, V, 0, 0, _e, ge, ue) : t.texImage2D(r.TEXTURE_2D, V, me, _e, ge, ue);
        b.generateMipmaps = !1;
      } else
        ze ? (D && t.texStorage2D(r.TEXTURE_2D, ce, me, H.width, H.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, _e, ge, H)) : t.texImage2D(r.TEXTURE_2D, 0, me, _e, ge, H);
      T(b, de) && E(ne), $.__version = P.version, b.onUpdate && b.onUpdate(b);
    }
    R.__version = b.version;
  }
  function At(R, b, q) {
    if (b.image.length !== 6) return;
    const ne = Me(R, b), te = b.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, R.__webglTexture, r.TEXTURE0 + q);
    const P = n.get(te);
    if (te.version !== P.__version || ne === !0) {
      t.activeTexture(r.TEXTURE0 + q), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, b.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, b.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.NONE);
      const $ = b.isCompressedTexture || b.image[0].isCompressedTexture, ee = b.image[0] && b.image[0].isDataTexture, H = [];
      for (let V = 0; V < 6; V++)
        !$ && !ee ? H[V] = x(b.image[V], !1, !0, c) : H[V] = ee ? b.image[V].image : b.image[V], H[V] = _t(b, H[V]);
      const de = H[0], _e = v(de) || o, ge = s.convert(b.format, b.colorSpace), me = s.convert(b.type), ue = C(b.internalFormat, ge, me, b.colorSpace), be = o && b.isVideoTexture !== !0, ze = P.__version === void 0 || ne === !0;
      let D = M(b, de, _e);
      Ce(r.TEXTURE_CUBE_MAP, b, _e);
      let ce;
      if ($) {
        be && ze && t.texStorage2D(r.TEXTURE_CUBE_MAP, D, ue, de.width, de.height);
        for (let V = 0; V < 6; V++) {
          ce = H[V].mipmaps;
          for (let re = 0; re < ce.length; re++) {
            const he = ce[re];
            b.format !== ln ? ge !== null ? be ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re, 0, 0, he.width, he.height, ge, he.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re, ue, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : be ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re, 0, 0, he.width, he.height, ge, me, he.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re, ue, he.width, he.height, 0, ge, me, he.data);
          }
        }
      } else {
        ce = b.mipmaps, be && ze && (ce.length > 0 && D++, t.texStorage2D(r.TEXTURE_CUBE_MAP, D, ue, H[0].width, H[0].height));
        for (let V = 0; V < 6; V++)
          if (ee) {
            be ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, H[V].width, H[V].height, ge, me, H[V].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, ue, H[V].width, H[V].height, 0, ge, me, H[V].data);
            for (let re = 0; re < ce.length; re++) {
              const We = ce[re].image[V].image;
              be ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re + 1, 0, 0, We.width, We.height, ge, me, We.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re + 1, ue, We.width, We.height, 0, ge, me, We.data);
            }
          } else {
            be ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, 0, 0, ge, me, H[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, 0, ue, ge, me, H[V]);
            for (let re = 0; re < ce.length; re++) {
              const he = ce[re];
              be ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re + 1, 0, 0, ge, me, he.image[V]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + V, re + 1, ue, ge, me, he.image[V]);
            }
          }
      }
      T(b, _e) && E(r.TEXTURE_CUBE_MAP), P.__version = te.version, b.onUpdate && b.onUpdate(b);
    }
    R.__version = b.version;
  }
  function Ue(R, b, q, ne, te) {
    const P = s.convert(q.format, q.colorSpace), $ = s.convert(q.type), ee = C(q.internalFormat, P, $, q.colorSpace);
    n.get(b).__hasExternalTextures || (te === r.TEXTURE_3D || te === r.TEXTURE_2D_ARRAY ? t.texImage3D(te, 0, ee, b.width, b.height, b.depth, 0, P, $, null) : t.texImage2D(te, 0, ee, b.width, b.height, 0, P, $, null)), t.bindFramebuffer(r.FRAMEBUFFER, R), Xe(b) ? f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, ne, te, n.get(q).__webglTexture, 0, Le(b)) : (te === r.TEXTURE_2D || te >= r.TEXTURE_CUBE_MAP_POSITIVE_X && te <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, ne, te, n.get(q).__webglTexture, 0), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function N(R, b, q) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, R), b.depthBuffer && !b.stencilBuffer) {
      let ne = r.DEPTH_COMPONENT16;
      if (q || Xe(b)) {
        const te = b.depthTexture;
        te && te.isDepthTexture && (te.type === Yn ? ne = r.DEPTH_COMPONENT32F : te.type === fi && (ne = r.DEPTH_COMPONENT24));
        const P = Le(b);
        Xe(b) ? f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, P, ne, b.width, b.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, P, ne, b.width, b.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, ne, b.width, b.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, R);
    } else if (b.depthBuffer && b.stencilBuffer) {
      const ne = Le(b);
      q && Xe(b) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ne, r.DEPTH24_STENCIL8, b.width, b.height) : Xe(b) ? f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ne, r.DEPTH24_STENCIL8, b.width, b.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, b.width, b.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, R);
    } else {
      const ne = b.isWebGLMultipleRenderTargets === !0 ? b.texture : [b.texture];
      for (let te = 0; te < ne.length; te++) {
        const P = ne[te], $ = s.convert(P.format, P.colorSpace), ee = s.convert(P.type), H = C(P.internalFormat, $, ee, P.colorSpace), de = Le(b);
        q && Xe(b) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, de, H, b.width, b.height) : Xe(b) ? f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, de, H, b.width, b.height) : r.renderbufferStorage(r.RENDERBUFFER, H, b.width, b.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function gt(R, b) {
    if (b && b.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, R), !(b.depthTexture && b.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(b.depthTexture).__webglTexture || b.depthTexture.image.width !== b.width || b.depthTexture.image.height !== b.height) && (b.depthTexture.image.width = b.width, b.depthTexture.image.height = b.height, b.depthTexture.needsUpdate = !0), J(b.depthTexture, 0);
    const ne = n.get(b.depthTexture).__webglTexture, te = Le(b);
    if (b.depthTexture.format === Bi)
      Xe(b) ? f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ne, 0, te) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, ne, 0);
    else if (b.depthTexture.format === Is)
      Xe(b) ? f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ne, 0, te) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, ne, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ve(R) {
    const b = n.get(R), q = R.isWebGLCubeRenderTarget === !0;
    if (R.depthTexture && !b.__autoAllocateDepthBuffer) {
      if (q) throw new Error("target.depthTexture not supported in Cube render targets");
      gt(b.__webglFramebuffer, R);
    } else if (q) {
      b.__webglDepthbuffer = [];
      for (let ne = 0; ne < 6; ne++)
        t.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer[ne]), b.__webglDepthbuffer[ne] = r.createRenderbuffer(), N(b.__webglDepthbuffer[ne], R, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer), b.__webglDepthbuffer = r.createRenderbuffer(), N(b.__webglDepthbuffer, R, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function we(R, b, q) {
    const ne = n.get(R);
    b !== void 0 && Ue(ne.__webglFramebuffer, R, R.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D), q !== void 0 && ve(R);
  }
  function Se(R) {
    const b = R.texture, q = n.get(R), ne = n.get(b);
    R.addEventListener("dispose", X), R.isWebGLMultipleRenderTargets !== !0 && (ne.__webglTexture === void 0 && (ne.__webglTexture = r.createTexture()), ne.__version = b.version, a.memory.textures++);
    const te = R.isWebGLCubeRenderTarget === !0, P = R.isWebGLMultipleRenderTargets === !0, $ = v(R) || o;
    if (te) {
      q.__webglFramebuffer = [];
      for (let ee = 0; ee < 6; ee++)
        q.__webglFramebuffer[ee] = r.createFramebuffer();
    } else {
      if (q.__webglFramebuffer = r.createFramebuffer(), P)
        if (i.drawBuffers) {
          const ee = R.texture;
          for (let H = 0, de = ee.length; H < de; H++) {
            const _e = n.get(ee[H]);
            _e.__webglTexture === void 0 && (_e.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && R.samples > 0 && Xe(R) === !1) {
        const ee = P ? b : [b];
        q.__webglMultisampledFramebuffer = r.createFramebuffer(), q.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, q.__webglMultisampledFramebuffer);
        for (let H = 0; H < ee.length; H++) {
          const de = ee[H];
          q.__webglColorRenderbuffer[H] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, q.__webglColorRenderbuffer[H]);
          const _e = s.convert(de.format, de.colorSpace), ge = s.convert(de.type), me = C(de.internalFormat, _e, ge, de.colorSpace, R.isXRRenderTarget === !0), ue = Le(R);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ue, me, R.width, R.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + H, r.RENDERBUFFER, q.__webglColorRenderbuffer[H]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), R.depthBuffer && (q.__webglDepthRenderbuffer = r.createRenderbuffer(), N(q.__webglDepthRenderbuffer, R, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (te) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, ne.__webglTexture), Ce(r.TEXTURE_CUBE_MAP, b, $);
      for (let ee = 0; ee < 6; ee++)
        Ue(q.__webglFramebuffer[ee], R, b, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ee);
      T(b, $) && E(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (P) {
      const ee = R.texture;
      for (let H = 0, de = ee.length; H < de; H++) {
        const _e = ee[H], ge = n.get(_e);
        t.bindTexture(r.TEXTURE_2D, ge.__webglTexture), Ce(r.TEXTURE_2D, _e, $), Ue(q.__webglFramebuffer, R, _e, r.COLOR_ATTACHMENT0 + H, r.TEXTURE_2D), T(_e, $) && E(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ee = r.TEXTURE_2D;
      (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (o ? ee = R.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ee, ne.__webglTexture), Ce(ee, b, $), Ue(q.__webglFramebuffer, R, b, r.COLOR_ATTACHMENT0, ee), T(b, $) && E(ee), t.unbindTexture();
    }
    R.depthBuffer && ve(R);
  }
  function $e(R) {
    const b = v(R) || o, q = R.isWebGLMultipleRenderTargets === !0 ? R.texture : [R.texture];
    for (let ne = 0, te = q.length; ne < te; ne++) {
      const P = q[ne];
      if (T(P, b)) {
        const $ = R.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, ee = n.get(P).__webglTexture;
        t.bindTexture($, ee), E($), t.unbindTexture();
      }
    }
  }
  function Fe(R) {
    if (o && R.samples > 0 && Xe(R) === !1) {
      const b = R.isWebGLMultipleRenderTargets ? R.texture : [R.texture], q = R.width, ne = R.height;
      let te = r.COLOR_BUFFER_BIT;
      const P = [], $ = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ee = n.get(R), H = R.isWebGLMultipleRenderTargets === !0;
      if (H)
        for (let de = 0; de < b.length; de++)
          t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + de, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + de, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, ee.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ee.__webglFramebuffer);
      for (let de = 0; de < b.length; de++) {
        P.push(r.COLOR_ATTACHMENT0 + de), R.depthBuffer && P.push($);
        const _e = ee.__ignoreDepthValues !== void 0 ? ee.__ignoreDepthValues : !1;
        if (_e === !1 && (R.depthBuffer && (te |= r.DEPTH_BUFFER_BIT), R.stencilBuffer && (te |= r.STENCIL_BUFFER_BIT)), H && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, ee.__webglColorRenderbuffer[de]), _e === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [$]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [$])), H) {
          const ge = n.get(b[de]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, ge, 0);
        }
        r.blitFramebuffer(0, 0, q, ne, 0, 0, q, ne, te, r.NEAREST), d && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, P);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), H)
        for (let de = 0; de < b.length; de++) {
          t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + de, r.RENDERBUFFER, ee.__webglColorRenderbuffer[de]);
          const _e = n.get(b[de]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, ee.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + de, r.TEXTURE_2D, _e, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ee.__webglMultisampledFramebuffer);
    }
  }
  function Le(R) {
    return Math.min(u, R.samples);
  }
  function Xe(R) {
    const b = n.get(R);
    return o && R.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && b.__useRenderToTexture !== !1;
  }
  function ft(R) {
    const b = a.render.frame;
    _.get(R) !== b && (_.set(R, b), R.update());
  }
  function _t(R, b) {
    const q = R.colorSpace, ne = R.format, te = R.type;
    return R.isCompressedTexture === !0 || R.format === jo || q !== Mn && q !== ki && (q === Te ? o === !1 ? e.has("EXT_sRGB") === !0 && ne === ln ? (R.format = jo, R.minFilter = Ht, R.generateMipmaps = !1) : b = Ku.sRGBToLinear(b) : (ne !== ln || te !== gi) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", q)), b;
  }
  this.allocateTextureUnit = Y, this.resetTextureUnits = k, this.setTexture2D = J, this.setTexture2DArray = B, this.setTexture3D = G, this.setTextureCube = le, this.rebindTextures = we, this.setupRenderTarget = Se, this.updateRenderTargetMipmap = $e, this.updateMultisampleRenderTarget = Fe, this.setupDepthRenderbuffer = ve, this.setupFrameBufferTexture = Ue, this.useMultisampledRTT = Xe;
}
function jx(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = ki) {
    let o;
    if (s === gi) return r.UNSIGNED_BYTE;
    if (s === Bu) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === zu) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === mp) return r.BYTE;
    if (s === gp) return r.SHORT;
    if (s === Tl) return r.UNSIGNED_SHORT;
    if (s === Fu) return r.INT;
    if (s === fi) return r.UNSIGNED_INT;
    if (s === Yn) return r.FLOAT;
    if (s === Qn)
      return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === _p) return r.ALPHA;
    if (s === ln) return r.RGBA;
    if (s === xp) return r.LUMINANCE;
    if (s === vp) return r.LUMINANCE_ALPHA;
    if (s === Bi) return r.DEPTH_COMPONENT;
    if (s === Is) return r.DEPTH_STENCIL;
    if (s === jo)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === yp) return r.RED;
    if (s === ku) return r.RED_INTEGER;
    if (s === Mp) return r.RG;
    if (s === Hu) return r.RG_INTEGER;
    if (s === Gu) return r.RGBA_INTEGER;
    if (s === Va || s === Wa || s === Xa || s === qa)
      if (a === Te)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === Va) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Wa) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Xa) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === qa) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Va) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Wa) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Xa) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === qa) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === vc || s === yc || s === Mc || s === Sc)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === vc) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === yc) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Mc) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Sc) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Sp)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Tc || s === Ec)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === Tc) return a === Te ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === Ec) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === bc || s === Ac || s === wc || s === Rc || s === Cc || s === Pc || s === Lc || s === Dc || s === Ic || s === Uc || s === Nc || s === Oc || s === Fc || s === Bc)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === bc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Ac) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === wc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Rc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Cc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Pc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Lc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Dc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Ic) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Uc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Nc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Oc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Fc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Bc) return a === Te ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Ya)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === Ya) return a === Te ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === Tp || s === zc || s === kc || s === Hc)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === Ya) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === zc) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === kc) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Hc) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Fi ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class Kx extends Bt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Zn extends Ze {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Zx = { type: "move" };
class _o {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Zn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Zn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Zn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
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
    let i = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n), p = this._getHandJoint(c, g);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
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
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Zx)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Zn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Jx extends wt {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    if (h = h !== void 0 ? h : Bi, h !== Bi && h !== Is)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Bi && (n = fi), n === void 0 && h === Is && (n = Fi), super(null, i, s, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Mt, this.minFilter = l !== void 0 ? l : Mt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class $x extends Zi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, f = null, d = null, _ = null;
    const g = t.getContextAttributes();
    let m = null, p = null;
    const y = [], x = [], v = new Bt();
    v.layers.enable(1), v.viewport = new Ke();
    const S = new Bt();
    S.layers.enable(2), S.viewport = new Ke();
    const T = [v, S], E = new Kx();
    E.layers.enable(1), E.layers.enable(2);
    let C = null, M = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(B) {
      let G = y[B];
      return G === void 0 && (G = new _o(), y[B] = G), G.getTargetRaySpace();
    }, this.getControllerGrip = function(B) {
      let G = y[B];
      return G === void 0 && (G = new _o(), y[B] = G), G.getGripSpace();
    }, this.getHand = function(B) {
      let G = y[B];
      return G === void 0 && (G = new _o(), y[B] = G), G.getHandSpace();
    };
    function A(B) {
      const G = x.indexOf(B.inputSource);
      if (G === -1)
        return;
      const le = y[G];
      le !== void 0 && (le.update(B.inputSource, B.frame, c || a), le.dispatchEvent({ type: B.type, data: B.inputSource }));
    }
    function W() {
      i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", W), i.removeEventListener("inputsourceschange", X);
      for (let B = 0; B < y.length; B++) {
        const G = x[B];
        G !== null && (x[B] = null, y[B].disconnect(G));
      }
      C = null, M = null, e.setRenderTarget(m), d = null, f = null, u = null, i = null, p = null, J.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(B) {
      s = B, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(B) {
      o = B, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(B) {
      c = B;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(B) {
      if (i = B, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", W), i.addEventListener("inputsourceschange", X), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const G = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: !0,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, G), i.updateRenderState({ baseLayer: d }), p = new yn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: ln,
              type: gi,
              colorSpace: e.outputColorSpace,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let G = null, le = null, ie = null;
          g.depth && (ie = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, G = g.stencil ? Is : Bi, le = g.stencil ? Fi : fi);
          const ae = {
            colorFormat: t.RGBA8,
            depthFormat: ie,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), f = u.createProjectionLayer(ae), i.updateRenderState({ layers: [f] }), p = new yn(
            f.textureWidth,
            f.textureHeight,
            {
              format: ln,
              type: gi,
              depthTexture: new Jx(f.textureWidth, f.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, G),
              stencilBuffer: g.stencil,
              colorSpace: e.outputColorSpace,
              samples: g.antialias ? 4 : 0
            }
          );
          const xe = e.properties.get(p);
          xe.__ignoreDepthValues = f.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), J.setContext(i), J.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function X(B) {
      for (let G = 0; G < B.removed.length; G++) {
        const le = B.removed[G], ie = x.indexOf(le);
        ie >= 0 && (x[ie] = null, y[ie].disconnect(le));
      }
      for (let G = 0; G < B.added.length; G++) {
        const le = B.added[G];
        let ie = x.indexOf(le);
        if (ie === -1) {
          for (let xe = 0; xe < y.length; xe++)
            if (xe >= x.length) {
              x.push(le), ie = xe;
              break;
            } else if (x[xe] === null) {
              x[xe] = le, ie = xe;
              break;
            }
          if (ie === -1) break;
        }
        const ae = y[ie];
        ae && ae.connect(le);
      }
    }
    const I = new L(), F = new L();
    function z(B, G, le) {
      I.setFromMatrixPosition(G.matrixWorld), F.setFromMatrixPosition(le.matrixWorld);
      const ie = I.distanceTo(F), ae = G.projectionMatrix.elements, xe = le.projectionMatrix.elements, Ce = ae[14] / (ae[10] - 1), Me = ae[14] / (ae[10] + 1), Ve = (ae[9] + 1) / ae[5], At = (ae[9] - 1) / ae[5], Ue = (ae[8] - 1) / ae[0], N = (xe[8] + 1) / xe[0], gt = Ce * Ue, ve = Ce * N, we = ie / (-Ue + N), Se = we * -Ue;
      G.matrixWorld.decompose(B.position, B.quaternion, B.scale), B.translateX(Se), B.translateZ(we), B.matrixWorld.compose(B.position, B.quaternion, B.scale), B.matrixWorldInverse.copy(B.matrixWorld).invert();
      const $e = Ce + we, Fe = Me + we, Le = gt - Se, Xe = ve + (ie - Se), ft = Ve * Me / Fe * $e, _t = At * Me / Fe * $e;
      B.projectionMatrix.makePerspective(Le, Xe, ft, _t, $e, Fe), B.projectionMatrixInverse.copy(B.projectionMatrix).invert();
    }
    function Z(B, G) {
      G === null ? B.matrixWorld.copy(B.matrix) : B.matrixWorld.multiplyMatrices(G.matrixWorld, B.matrix), B.matrixWorldInverse.copy(B.matrixWorld).invert();
    }
    this.updateCamera = function(B) {
      if (i === null) return;
      E.near = S.near = v.near = B.near, E.far = S.far = v.far = B.far, (C !== E.near || M !== E.far) && (i.updateRenderState({
        depthNear: E.near,
        depthFar: E.far
      }), C = E.near, M = E.far);
      const G = B.parent, le = E.cameras;
      Z(E, G);
      for (let ie = 0; ie < le.length; ie++)
        Z(le[ie], G);
      le.length === 2 ? z(E, v, S) : E.projectionMatrix.copy(v.projectionMatrix), k(B, E, G);
    };
    function k(B, G, le) {
      le === null ? B.matrix.copy(G.matrixWorld) : (B.matrix.copy(le.matrixWorld), B.matrix.invert(), B.matrix.multiply(G.matrixWorld)), B.matrix.decompose(B.position, B.quaternion, B.scale), B.updateMatrixWorld(!0);
      const ie = B.children;
      for (let ae = 0, xe = ie.length; ae < xe; ae++)
        ie[ae].updateMatrixWorld(!0);
      B.projectionMatrix.copy(G.projectionMatrix), B.projectionMatrixInverse.copy(G.projectionMatrixInverse), B.isPerspectiveCamera && (B.fov = Ns * 2 * Math.atan(1 / B.projectionMatrix.elements[5]), B.zoom = 1);
    }
    this.getCamera = function() {
      return E;
    }, this.getFoveation = function() {
      if (!(f === null && d === null))
        return l;
    }, this.setFoveation = function(B) {
      l = B, f !== null && (f.fixedFoveation = B), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = B);
    };
    let Y = null;
    function Q(B, G) {
      if (h = G.getViewerPose(c || a), _ = G, h !== null) {
        const le = h.views;
        d !== null && (e.setRenderTargetFramebuffer(p, d.framebuffer), e.setRenderTarget(p));
        let ie = !1;
        le.length !== E.cameras.length && (E.cameras.length = 0, ie = !0);
        for (let ae = 0; ae < le.length; ae++) {
          const xe = le[ae];
          let Ce = null;
          if (d !== null)
            Ce = d.getViewport(xe);
          else {
            const Ve = u.getViewSubImage(f, xe);
            Ce = Ve.viewport, ae === 0 && (e.setRenderTargetTextures(
              p,
              Ve.colorTexture,
              f.ignoreDepthValues ? void 0 : Ve.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let Me = T[ae];
          Me === void 0 && (Me = new Bt(), Me.layers.enable(ae), Me.viewport = new Ke(), T[ae] = Me), Me.matrix.fromArray(xe.transform.matrix), Me.matrix.decompose(Me.position, Me.quaternion, Me.scale), Me.projectionMatrix.fromArray(xe.projectionMatrix), Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(), Me.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height), ae === 0 && (E.matrix.copy(Me.matrix), E.matrix.decompose(E.position, E.quaternion, E.scale)), ie === !0 && E.cameras.push(Me);
        }
      }
      for (let le = 0; le < y.length; le++) {
        const ie = x[le], ae = y[le];
        ie !== null && ae !== void 0 && ae.update(ie, G, c || a);
      }
      Y && Y(B, G), G.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: G }), _ = null;
    }
    const J = new sf();
    J.setAnimationLoop(Q), this.setAnimationLoop = function(B) {
      Y = B;
    }, this.dispose = function() {
    };
  }
}
function Qx(r, e) {
  function t(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, tf(r)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, y, x, v) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(m, p) : p.isMeshToonMaterial ? (s(m, p), u(m, p)) : p.isMeshPhongMaterial ? (s(m, p), h(m, p)) : p.isMeshStandardMaterial ? (s(m, p), f(m, p), p.isMeshPhysicalMaterial && d(m, p, v)) : p.isMeshMatcapMaterial ? (s(m, p), _(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), g(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? l(m, p, y, x) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === Gt && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === Gt && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const y = e.get(p).envMap;
    if (y && (m.envMap.value = y, m.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap) {
      m.lightMap.value = p.lightMap;
      const x = r.useLegacyLights === !0 ? Math.PI : 1;
      m.lightMapIntensity.value = p.lightMapIntensity * x, t(p.lightMap, m.lightMapTransform);
    }
    p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, y, x) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * y, m.scale.value = x * 0.5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function f(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), e.get(p).envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function d(m, p, y) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Gt && m.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = y.texture, m.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function g(m, p) {
    const y = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(y.matrixWorld), m.nearDistance.value = y.shadow.camera.near, m.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function ev(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(y, x) {
    const v = x.program;
    n.uniformBlockBinding(y, v);
  }
  function c(y, x) {
    let v = i[y.id];
    v === void 0 && (_(y), v = h(y), i[y.id] = v, y.addEventListener("dispose", m));
    const S = x.program;
    n.updateUBOMapping(y, S);
    const T = e.render.frame;
    s[y.id] !== T && (f(y), s[y.id] = T);
  }
  function h(y) {
    const x = u();
    y.__bindingPointIndex = x;
    const v = r.createBuffer(), S = y.__size, T = y.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, v), r.bufferData(r.UNIFORM_BUFFER, S, T), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, x, v), v;
  }
  function u() {
    for (let y = 0; y < o; y++)
      if (a.indexOf(y) === -1)
        return a.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(y) {
    const x = i[y.id], v = y.uniforms, S = y.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, x);
    for (let T = 0, E = v.length; T < E; T++) {
      const C = v[T];
      if (d(C, T, S) === !0) {
        const M = C.__offset, A = Array.isArray(C.value) ? C.value : [C.value];
        let W = 0;
        for (let X = 0; X < A.length; X++) {
          const I = A[X], F = g(I);
          typeof I == "number" ? (C.__data[0] = I, r.bufferSubData(r.UNIFORM_BUFFER, M + W, C.__data)) : I.isMatrix3 ? (C.__data[0] = I.elements[0], C.__data[1] = I.elements[1], C.__data[2] = I.elements[2], C.__data[3] = I.elements[0], C.__data[4] = I.elements[3], C.__data[5] = I.elements[4], C.__data[6] = I.elements[5], C.__data[7] = I.elements[0], C.__data[8] = I.elements[6], C.__data[9] = I.elements[7], C.__data[10] = I.elements[8], C.__data[11] = I.elements[0]) : (I.toArray(C.__data, W), W += F.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(r.UNIFORM_BUFFER, M, C.__data);
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function d(y, x, v) {
    const S = y.value;
    if (v[x] === void 0) {
      if (typeof S == "number")
        v[x] = S;
      else {
        const T = Array.isArray(S) ? S : [S], E = [];
        for (let C = 0; C < T.length; C++)
          E.push(T[C].clone());
        v[x] = E;
      }
      return !0;
    } else if (typeof S == "number") {
      if (v[x] !== S)
        return v[x] = S, !0;
    } else {
      const T = Array.isArray(v[x]) ? v[x] : [v[x]], E = Array.isArray(S) ? S : [S];
      for (let C = 0; C < T.length; C++) {
        const M = T[C];
        if (M.equals(E[C]) === !1)
          return M.copy(E[C]), !0;
      }
    }
    return !1;
  }
  function _(y) {
    const x = y.uniforms;
    let v = 0;
    const S = 16;
    let T = 0;
    for (let E = 0, C = x.length; E < C; E++) {
      const M = x[E], A = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, W = Array.isArray(M.value) ? M.value : [M.value];
      for (let X = 0, I = W.length; X < I; X++) {
        const F = W[X], z = g(F);
        A.boundary += z.boundary, A.storage += z.storage;
      }
      if (M.__data = new Float32Array(A.storage / Float32Array.BYTES_PER_ELEMENT), M.__offset = v, E > 0) {
        T = v % S;
        const X = S - T;
        T !== 0 && X - A.boundary < 0 && (v += S - T, M.__offset = v);
      }
      v += A.storage;
    }
    return T = v % S, T > 0 && (v += S - T), y.__size = v, y.__cache = {}, this;
  }
  function g(y) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" ? (x.boundary = 4, x.storage = 4) : y.isVector2 ? (x.boundary = 8, x.storage = 8) : y.isVector3 || y.isColor ? (x.boundary = 16, x.storage = 12) : y.isVector4 ? (x.boundary = 16, x.storage = 16) : y.isMatrix3 ? (x.boundary = 48, x.storage = 48) : y.isMatrix4 ? (x.boundary = 64, x.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), x;
  }
  function m(y) {
    const x = y.target;
    x.removeEventListener("dispose", m);
    const v = a.indexOf(x.__bindingPointIndex);
    a.splice(v, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
  }
  function p() {
    for (const y in i)
      r.deleteBuffer(i[y]);
    a = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
function tv() {
  const r = xr("canvas");
  return r.style.display = "block", r;
}
class cf {
  constructor(e = {}) {
    const {
      canvas: t = tv(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? f = n.getContextAttributes().alpha : f = a;
    const d = new Uint32Array(4), _ = new Int32Array(4);
    let g = null, m = null;
    const p = [], y = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Te, this.useLegacyLights = !0, this.toneMapping = $n, this.toneMappingExposure = 1;
    const x = this;
    let v = !1, S = 0, T = 0, E = null, C = -1, M = null;
    const A = new Ke(), W = new Ke();
    let X = null;
    const I = new Ee(0);
    let F = 0, z = t.width, Z = t.height, k = 1, Y = null, Q = null;
    const J = new Ke(0, 0, z, Z), B = new Ke(0, 0, z, Z);
    let G = !1;
    const le = new Al();
    let ie = !1, ae = !1, xe = null;
    const Ce = new Ne(), Me = new se(), Ve = new L(), At = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ue() {
      return E === null ? k : 1;
    }
    let N = n;
    function gt(w, O) {
      for (let j = 0; j < w.length; j++) {
        const U = w[j], K = t.getContext(U, O);
        if (K !== null) return K;
      }
      return null;
    }
    try {
      const w = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Sl}`), t.addEventListener("webglcontextlost", ce, !1), t.addEventListener("webglcontextrestored", V, !1), t.addEventListener("webglcontextcreationerror", re, !1), N === null) {
        const O = ["webgl2", "webgl", "experimental-webgl"];
        if (x.isWebGL1Renderer === !0 && O.shift(), N = gt(O, w), N === null)
          throw gt(O) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && N instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), N.getShaderPrecisionFormat === void 0 && (N.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (w) {
      throw console.error("THREE.WebGLRenderer: " + w.message), w;
    }
    let ve, we, Se, $e, Fe, Le, Xe, ft, _t, R, b, q, ne, te, P, $, ee, H, de, _e, ge, me, ue, be;
    function ze() {
      ve = new u0(N), we = new r0(N, ve, e), ve.init(we), me = new jx(N, ve, we), Se = new qx(N, ve, we), $e = new p0(N), Fe = new Dx(), Le = new Yx(N, ve, Se, Fe, we, me, $e), Xe = new o0(x), ft = new h0(x), _t = new Em(N, we), ue = new i0(N, ve, _t, we), R = new f0(N, _t, $e, ue), b = new x0(N, R, _t, $e), de = new _0(N, we, Le), $ = new a0(Fe), q = new Lx(x, Xe, ft, ve, we, ue, $), ne = new Qx(x, Fe), te = new Ux(), P = new kx(ve, we), H = new n0(x, Xe, ft, Se, b, f, l), ee = new Xx(x, b, we), be = new ev(N, $e, we, Se), _e = new s0(N, ve, $e, we), ge = new d0(N, ve, $e, we), $e.programs = q.programs, x.capabilities = we, x.extensions = ve, x.properties = Fe, x.renderLists = te, x.shadowMap = ee, x.state = Se, x.info = $e;
    }
    ze();
    const D = new $x(x, N);
    this.xr = D, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const w = ve.get("WEBGL_lose_context");
      w && w.loseContext();
    }, this.forceContextRestore = function() {
      const w = ve.get("WEBGL_lose_context");
      w && w.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(w) {
      w !== void 0 && (k = w, this.setSize(z, Z, !1));
    }, this.getSize = function(w) {
      return w.set(z, Z);
    }, this.setSize = function(w, O, j = !0) {
      if (D.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      z = w, Z = O, t.width = Math.floor(w * k), t.height = Math.floor(O * k), j === !0 && (t.style.width = w + "px", t.style.height = O + "px"), this.setViewport(0, 0, w, O);
    }, this.getDrawingBufferSize = function(w) {
      return w.set(z * k, Z * k).floor();
    }, this.setDrawingBufferSize = function(w, O, j) {
      z = w, Z = O, k = j, t.width = Math.floor(w * j), t.height = Math.floor(O * j), this.setViewport(0, 0, w, O);
    }, this.getCurrentViewport = function(w) {
      return w.copy(A);
    }, this.getViewport = function(w) {
      return w.copy(J);
    }, this.setViewport = function(w, O, j, U) {
      w.isVector4 ? J.set(w.x, w.y, w.z, w.w) : J.set(w, O, j, U), Se.viewport(A.copy(J).multiplyScalar(k).floor());
    }, this.getScissor = function(w) {
      return w.copy(B);
    }, this.setScissor = function(w, O, j, U) {
      w.isVector4 ? B.set(w.x, w.y, w.z, w.w) : B.set(w, O, j, U), Se.scissor(W.copy(B).multiplyScalar(k).floor());
    }, this.getScissorTest = function() {
      return G;
    }, this.setScissorTest = function(w) {
      Se.setScissorTest(G = w);
    }, this.setOpaqueSort = function(w) {
      Y = w;
    }, this.setTransparentSort = function(w) {
      Q = w;
    }, this.getClearColor = function(w) {
      return w.copy(H.getClearColor());
    }, this.setClearColor = function() {
      H.setClearColor.apply(H, arguments);
    }, this.getClearAlpha = function() {
      return H.getClearAlpha();
    }, this.setClearAlpha = function() {
      H.setClearAlpha.apply(H, arguments);
    }, this.clear = function(w = !0, O = !0, j = !0) {
      let U = 0;
      if (w) {
        let K = !1;
        if (E !== null) {
          const fe = E.texture.format;
          K = fe === Gu || fe === Hu || fe === ku;
        }
        if (K) {
          const fe = E.texture.type, ye = fe === gi || fe === fi || fe === Tl || fe === Fi || fe === Bu || fe === zu, Ae = H.getClearColor(), Re = H.getClearAlpha(), Be = Ae.r, Pe = Ae.g, De = Ae.b;
          ye ? (d[0] = Be, d[1] = Pe, d[2] = De, d[3] = Re, N.clearBufferuiv(N.COLOR, 0, d)) : (_[0] = Be, _[1] = Pe, _[2] = De, _[3] = Re, N.clearBufferiv(N.COLOR, 0, _));
        } else
          U |= N.COLOR_BUFFER_BIT;
      }
      O && (U |= N.DEPTH_BUFFER_BIT), j && (U |= N.STENCIL_BUFFER_BIT), N.clear(U);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ce, !1), t.removeEventListener("webglcontextrestored", V, !1), t.removeEventListener("webglcontextcreationerror", re, !1), te.dispose(), P.dispose(), Fe.dispose(), Xe.dispose(), ft.dispose(), b.dispose(), ue.dispose(), be.dispose(), q.dispose(), D.dispose(), D.removeEventListener("sessionstart", st), D.removeEventListener("sessionend", Tn), xe && (xe.dispose(), xe = null), Ut.stop();
    };
    function ce(w) {
      w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0;
    }
    function V() {
      console.log("THREE.WebGLRenderer: Context Restored."), v = !1;
      const w = $e.autoReset, O = ee.enabled, j = ee.autoUpdate, U = ee.needsUpdate, K = ee.type;
      ze(), $e.autoReset = w, ee.enabled = O, ee.autoUpdate = j, ee.needsUpdate = U, ee.type = K;
    }
    function re(w) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage);
    }
    function he(w) {
      const O = w.target;
      O.removeEventListener("dispose", he), We(O);
    }
    function We(w) {
      et(w), Fe.remove(w);
    }
    function et(w) {
      const O = Fe.get(w).programs;
      O !== void 0 && (O.forEach(function(j) {
        q.releaseProgram(j);
      }), w.isShaderMaterial && q.releaseShaderCache(w));
    }
    this.renderBufferDirect = function(w, O, j, U, K, fe) {
      O === null && (O = At);
      const ye = K.isMesh && K.matrixWorld.determinant() < 0, Ae = Ud(w, O, j, U, K);
      Se.setMaterial(U, ye);
      let Re = j.index, Be = 1;
      U.wireframe === !0 && (Re = R.getWireframeAttribute(j), Be = 2);
      const Pe = j.drawRange, De = j.attributes.position;
      let rt = Pe.start * Be, ot = (Pe.start + Pe.count) * Be;
      fe !== null && (rt = Math.max(rt, fe.start * Be), ot = Math.min(ot, (fe.start + fe.count) * Be)), Re !== null ? (rt = Math.max(rt, 0), ot = Math.min(ot, Re.count)) : De != null && (rt = Math.max(rt, 0), ot = Math.min(ot, De.count));
      const pn = ot - rt;
      if (pn < 0 || pn === 1 / 0) return;
      ue.setup(K, U, Ae, j, Re);
      let On, ct = _e;
      if (Re !== null && (On = _t.get(Re), ct = ge, ct.setIndex(On)), K.isMesh)
        U.wireframe === !0 ? (Se.setLineWidth(U.wireframeLinewidth * Ue()), ct.setMode(N.LINES)) : ct.setMode(N.TRIANGLES);
      else if (K.isLine) {
        let Ge = U.linewidth;
        Ge === void 0 && (Ge = 1), Se.setLineWidth(Ge * Ue()), K.isLineSegments ? ct.setMode(N.LINES) : K.isLineLoop ? ct.setMode(N.LINE_LOOP) : ct.setMode(N.LINE_STRIP);
      } else K.isPoints ? ct.setMode(N.POINTS) : K.isSprite && ct.setMode(N.TRIANGLES);
      if (K.isInstancedMesh)
        ct.renderInstances(rt, pn, K.count);
      else if (j.isInstancedBufferGeometry) {
        const Ge = j._maxInstanceCount !== void 0 ? j._maxInstanceCount : 1 / 0, za = Math.min(j.instanceCount, Ge);
        ct.renderInstances(rt, pn, za);
      } else
        ct.render(rt, pn);
    }, this.compile = function(w, O) {
      function j(U, K, fe) {
        U.transparent === !0 && U.side === An && U.forceSinglePass === !1 ? (U.side = Gt, U.needsUpdate = !0, Fr(U, K, fe), U.side = ei, U.needsUpdate = !0, Fr(U, K, fe), U.side = An) : Fr(U, K, fe);
      }
      m = P.get(w), m.init(), y.push(m), w.traverseVisible(function(U) {
        U.isLight && U.layers.test(O.layers) && (m.pushLight(U), U.castShadow && m.pushShadow(U));
      }), m.setupLights(x.useLegacyLights), w.traverse(function(U) {
        const K = U.material;
        if (K)
          if (Array.isArray(K))
            for (let fe = 0; fe < K.length; fe++) {
              const ye = K[fe];
              j(ye, w, U);
            }
          else
            j(K, w, U);
      }), y.pop(), m = null;
    };
    let xt = null;
    function Sn(w) {
      xt && xt(w);
    }
    function st() {
      Ut.stop();
    }
    function Tn() {
      Ut.start();
    }
    const Ut = new sf();
    Ut.setAnimationLoop(Sn), typeof self < "u" && Ut.setContext(self), this.setAnimationLoop = function(w) {
      xt = w, D.setAnimationLoop(w), w === null ? Ut.stop() : Ut.start();
    }, D.addEventListener("sessionstart", st), D.addEventListener("sessionend", Tn), this.render = function(w, O) {
      if (O !== void 0 && O.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (v === !0) return;
      w.matrixWorldAutoUpdate === !0 && w.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), D.enabled === !0 && D.isPresenting === !0 && (D.cameraAutoUpdate === !0 && D.updateCamera(O), O = D.getCamera()), w.isScene === !0 && w.onBeforeRender(x, w, O, E), m = P.get(w, y.length), m.init(), y.push(m), Ce.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), le.setFromProjectionMatrix(Ce), ae = this.localClippingEnabled, ie = $.init(this.clippingPlanes, ae), g = te.get(w, p.length), g.init(), p.push(g), lc(w, O, 0, x.sortObjects), g.finish(), x.sortObjects === !0 && g.sort(Y, Q), this.info.render.frame++, ie === !0 && $.beginShadows();
      const j = m.state.shadowsArray;
      if (ee.render(j, w, O), ie === !0 && $.endShadows(), this.info.autoReset === !0 && this.info.reset(), H.render(g, w), m.setupLights(x.useLegacyLights), O.isArrayCamera) {
        const U = O.cameras;
        for (let K = 0, fe = U.length; K < fe; K++) {
          const ye = U[K];
          cc(g, w, ye, ye.viewport);
        }
      } else
        cc(g, w, O);
      E !== null && (Le.updateMultisampleRenderTarget(E), Le.updateRenderTargetMipmap(E)), w.isScene === !0 && w.onAfterRender(x, w, O), ue.resetDefaultState(), C = -1, M = null, y.pop(), y.length > 0 ? m = y[y.length - 1] : m = null, p.pop(), p.length > 0 ? g = p[p.length - 1] : g = null;
    };
    function lc(w, O, j, U) {
      if (w.visible === !1) return;
      if (w.layers.test(O.layers)) {
        if (w.isGroup)
          j = w.renderOrder;
        else if (w.isLOD)
          w.autoUpdate === !0 && w.update(O);
        else if (w.isLight)
          m.pushLight(w), w.castShadow && m.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || le.intersectsSprite(w)) {
            U && Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);
            const ye = b.update(w), Ae = w.material;
            Ae.visible && g.push(w, ye, Ae, j, Ve.z, null);
          }
        } else if ((w.isMesh || w.isLine || w.isPoints) && (!w.frustumCulled || le.intersectsObject(w))) {
          const ye = b.update(w), Ae = w.material;
          if (U && (w.boundingSphere !== void 0 ? (w.boundingSphere === null && w.computeBoundingSphere(), Ve.copy(w.boundingSphere.center)) : (ye.boundingSphere === null && ye.computeBoundingSphere(), Ve.copy(ye.boundingSphere.center)), Ve.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)), Array.isArray(Ae)) {
            const Re = ye.groups;
            for (let Be = 0, Pe = Re.length; Be < Pe; Be++) {
              const De = Re[Be], rt = Ae[De.materialIndex];
              rt && rt.visible && g.push(w, ye, rt, j, Ve.z, De);
            }
          } else Ae.visible && g.push(w, ye, Ae, j, Ve.z, null);
        }
      }
      const fe = w.children;
      for (let ye = 0, Ae = fe.length; ye < Ae; ye++)
        lc(fe[ye], O, j, U);
    }
    function cc(w, O, j, U) {
      const K = w.opaque, fe = w.transmissive, ye = w.transparent;
      m.setupLightsView(j), ie === !0 && $.setGlobalState(x.clippingPlanes, j), fe.length > 0 && Id(K, fe, O, j), U && Se.viewport(A.copy(U)), K.length > 0 && Or(K, O, j), fe.length > 0 && Or(fe, O, j), ye.length > 0 && Or(ye, O, j), Se.buffers.depth.setTest(!0), Se.buffers.depth.setMask(!0), Se.buffers.color.setMask(!0), Se.setPolygonOffset(!1);
    }
    function Id(w, O, j, U) {
      const K = we.isWebGL2;
      xe === null && (xe = new yn(1, 1, {
        generateMipmaps: !0,
        type: ve.has("EXT_color_buffer_half_float") ? Qn : gi,
        minFilter: Xi,
        samples: K ? 4 : 0
      })), x.getDrawingBufferSize(Me), K ? xe.setSize(Me.x, Me.y) : xe.setSize(ya(Me.x), ya(Me.y));
      const fe = x.getRenderTarget();
      x.setRenderTarget(xe), x.getClearColor(I), F = x.getClearAlpha(), F < 1 && x.setClearColor(16777215, 0.5), x.clear();
      const ye = x.toneMapping;
      x.toneMapping = $n, Or(w, j, U), Le.updateMultisampleRenderTarget(xe), Le.updateRenderTargetMipmap(xe);
      let Ae = !1;
      for (let Re = 0, Be = O.length; Re < Be; Re++) {
        const Pe = O[Re], De = Pe.object, rt = Pe.geometry, ot = Pe.material, pn = Pe.group;
        if (ot.side === An && De.layers.test(U.layers)) {
          const On = ot.side;
          ot.side = Gt, ot.needsUpdate = !0, hc(De, j, U, rt, ot, pn), ot.side = On, ot.needsUpdate = !0, Ae = !0;
        }
      }
      Ae === !0 && (Le.updateMultisampleRenderTarget(xe), Le.updateRenderTargetMipmap(xe)), x.setRenderTarget(fe), x.setClearColor(I, F), x.toneMapping = ye;
    }
    function Or(w, O, j) {
      const U = O.isScene === !0 ? O.overrideMaterial : null;
      for (let K = 0, fe = w.length; K < fe; K++) {
        const ye = w[K], Ae = ye.object, Re = ye.geometry, Be = U === null ? ye.material : U, Pe = ye.group;
        Ae.layers.test(j.layers) && hc(Ae, O, j, Re, Be, Pe);
      }
    }
    function hc(w, O, j, U, K, fe) {
      w.onBeforeRender(x, O, j, U, K, fe), w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), K.onBeforeRender(x, O, j, U, w, fe), K.transparent === !0 && K.side === An && K.forceSinglePass === !1 ? (K.side = Gt, K.needsUpdate = !0, x.renderBufferDirect(j, O, U, K, w, fe), K.side = ei, K.needsUpdate = !0, x.renderBufferDirect(j, O, U, K, w, fe), K.side = An) : x.renderBufferDirect(j, O, U, K, w, fe), w.onAfterRender(x, O, j, U, K, fe);
    }
    function Fr(w, O, j) {
      O.isScene !== !0 && (O = At);
      const U = Fe.get(w), K = m.state.lights, fe = m.state.shadowsArray, ye = K.state.version, Ae = q.getParameters(w, K.state, fe, O, j), Re = q.getProgramCacheKey(Ae);
      let Be = U.programs;
      U.environment = w.isMeshStandardMaterial ? O.environment : null, U.fog = O.fog, U.envMap = (w.isMeshStandardMaterial ? ft : Xe).get(w.envMap || U.environment), Be === void 0 && (w.addEventListener("dispose", he), Be = /* @__PURE__ */ new Map(), U.programs = Be);
      let Pe = Be.get(Re);
      if (Pe !== void 0) {
        if (U.currentProgram === Pe && U.lightsStateVersion === ye)
          return uc(w, Ae), Pe;
      } else
        Ae.uniforms = q.getUniforms(w), w.onBuild(j, Ae, x), w.onBeforeCompile(Ae, x), Pe = q.acquireProgram(Ae, Re), Be.set(Re, Pe), U.uniforms = Ae.uniforms;
      const De = U.uniforms;
      (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (De.clippingPlanes = $.uniform), uc(w, Ae), U.needsLights = Od(w), U.lightsStateVersion = ye, U.needsLights && (De.ambientLightColor.value = K.state.ambient, De.lightProbe.value = K.state.probe, De.directionalLights.value = K.state.directional, De.directionalLightShadows.value = K.state.directionalShadow, De.spotLights.value = K.state.spot, De.spotLightShadows.value = K.state.spotShadow, De.rectAreaLights.value = K.state.rectArea, De.ltc_1.value = K.state.rectAreaLTC1, De.ltc_2.value = K.state.rectAreaLTC2, De.pointLights.value = K.state.point, De.pointLightShadows.value = K.state.pointShadow, De.hemisphereLights.value = K.state.hemi, De.directionalShadowMap.value = K.state.directionalShadowMap, De.directionalShadowMatrix.value = K.state.directionalShadowMatrix, De.spotShadowMap.value = K.state.spotShadowMap, De.spotLightMatrix.value = K.state.spotLightMatrix, De.spotLightMap.value = K.state.spotLightMap, De.pointShadowMap.value = K.state.pointShadowMap, De.pointShadowMatrix.value = K.state.pointShadowMatrix);
      const rt = Pe.getUniforms(), ot = pa.seqWithValue(rt.seq, De);
      return U.currentProgram = Pe, U.uniformsList = ot, Pe;
    }
    function uc(w, O) {
      const j = Fe.get(w);
      j.outputColorSpace = O.outputColorSpace, j.instancing = O.instancing, j.skinning = O.skinning, j.morphTargets = O.morphTargets, j.morphNormals = O.morphNormals, j.morphColors = O.morphColors, j.morphTargetsCount = O.morphTargetsCount, j.numClippingPlanes = O.numClippingPlanes, j.numIntersection = O.numClipIntersection, j.vertexAlphas = O.vertexAlphas, j.vertexTangents = O.vertexTangents, j.toneMapping = O.toneMapping;
    }
    function Ud(w, O, j, U, K) {
      O.isScene !== !0 && (O = At), Le.resetTextureUnits();
      const fe = O.fog, ye = U.isMeshStandardMaterial ? O.environment : null, Ae = E === null ? x.outputColorSpace : E.isXRRenderTarget === !0 ? E.texture.colorSpace : Mn, Re = (U.isMeshStandardMaterial ? ft : Xe).get(U.envMap || ye), Be = U.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4, Pe = !!j.attributes.tangent && (!!U.normalMap || U.anisotropy > 0), De = !!j.morphAttributes.position, rt = !!j.morphAttributes.normal, ot = !!j.morphAttributes.color, pn = U.toneMapped ? x.toneMapping : $n, On = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, ct = On !== void 0 ? On.length : 0, Ge = Fe.get(U), za = m.state.lights;
      if (ie === !0 && (ae === !0 || w !== M)) {
        const jt = w === M && U.id === C;
        $.setState(U, w, jt);
      }
      let vt = !1;
      U.version === Ge.__version ? (Ge.needsLights && Ge.lightsStateVersion !== za.state.version || Ge.outputColorSpace !== Ae || K.isInstancedMesh && Ge.instancing === !1 || !K.isInstancedMesh && Ge.instancing === !0 || K.isSkinnedMesh && Ge.skinning === !1 || !K.isSkinnedMesh && Ge.skinning === !0 || Ge.envMap !== Re || U.fog === !0 && Ge.fog !== fe || Ge.numClippingPlanes !== void 0 && (Ge.numClippingPlanes !== $.numPlanes || Ge.numIntersection !== $.numIntersection) || Ge.vertexAlphas !== Be || Ge.vertexTangents !== Pe || Ge.morphTargets !== De || Ge.morphNormals !== rt || Ge.morphColors !== ot || Ge.toneMapping !== pn || we.isWebGL2 === !0 && Ge.morphTargetsCount !== ct) && (vt = !0) : (vt = !0, Ge.__version = U.version);
      let Ti = Ge.currentProgram;
      vt === !0 && (Ti = Fr(U, O, K));
      let fc = !1, Zs = !1, ka = !1;
      const Nt = Ti.getUniforms(), Ei = Ge.uniforms;
      if (Se.useProgram(Ti.program) && (fc = !0, Zs = !0, ka = !0), U.id !== C && (C = U.id, Zs = !0), fc || M !== w) {
        if (Nt.setValue(N, "projectionMatrix", w.projectionMatrix), we.logarithmicDepthBuffer && Nt.setValue(
          N,
          "logDepthBufFC",
          2 / (Math.log(w.far + 1) / Math.LN2)
        ), M !== w && (M = w, Zs = !0, ka = !0), U.isShaderMaterial || U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshStandardMaterial || U.envMap) {
          const jt = Nt.map.cameraPosition;
          jt !== void 0 && jt.setValue(
            N,
            Ve.setFromMatrixPosition(w.matrixWorld)
          );
        }
        (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial) && Nt.setValue(N, "isOrthographic", w.isOrthographicCamera === !0), (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial || U.isShadowMaterial || K.isSkinnedMesh) && Nt.setValue(N, "viewMatrix", w.matrixWorldInverse);
      }
      if (K.isSkinnedMesh) {
        Nt.setOptional(N, K, "bindMatrix"), Nt.setOptional(N, K, "bindMatrixInverse");
        const jt = K.skeleton;
        jt && (we.floatVertexTextures ? (jt.boneTexture === null && jt.computeBoneTexture(), Nt.setValue(N, "boneTexture", jt.boneTexture, Le), Nt.setValue(N, "boneTextureSize", jt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const Ha = j.morphAttributes;
      if ((Ha.position !== void 0 || Ha.normal !== void 0 || Ha.color !== void 0 && we.isWebGL2 === !0) && de.update(K, j, Ti), (Zs || Ge.receiveShadow !== K.receiveShadow) && (Ge.receiveShadow = K.receiveShadow, Nt.setValue(N, "receiveShadow", K.receiveShadow)), U.isMeshGouraudMaterial && U.envMap !== null && (Ei.envMap.value = Re, Ei.flipEnvMap.value = Re.isCubeTexture && Re.isRenderTargetTexture === !1 ? -1 : 1), Zs && (Nt.setValue(N, "toneMappingExposure", x.toneMappingExposure), Ge.needsLights && Nd(Ei, ka), fe && U.fog === !0 && ne.refreshFogUniforms(Ei, fe), ne.refreshMaterialUniforms(Ei, U, k, Z, xe), pa.upload(N, Ge.uniformsList, Ei, Le)), U.isShaderMaterial && U.uniformsNeedUpdate === !0 && (pa.upload(N, Ge.uniformsList, Ei, Le), U.uniformsNeedUpdate = !1), U.isSpriteMaterial && Nt.setValue(N, "center", K.center), Nt.setValue(N, "modelViewMatrix", K.modelViewMatrix), Nt.setValue(N, "normalMatrix", K.normalMatrix), Nt.setValue(N, "modelMatrix", K.matrixWorld), U.isShaderMaterial || U.isRawShaderMaterial) {
        const jt = U.uniformsGroups;
        for (let Ga = 0, Fd = jt.length; Ga < Fd; Ga++)
          if (we.isWebGL2) {
            const dc = jt[Ga];
            be.update(dc, Ti), be.bind(dc, Ti);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Ti;
    }
    function Nd(w, O) {
      w.ambientLightColor.needsUpdate = O, w.lightProbe.needsUpdate = O, w.directionalLights.needsUpdate = O, w.directionalLightShadows.needsUpdate = O, w.pointLights.needsUpdate = O, w.pointLightShadows.needsUpdate = O, w.spotLights.needsUpdate = O, w.spotLightShadows.needsUpdate = O, w.rectAreaLights.needsUpdate = O, w.hemisphereLights.needsUpdate = O;
    }
    function Od(w) {
      return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return S;
    }, this.getActiveMipmapLevel = function() {
      return T;
    }, this.getRenderTarget = function() {
      return E;
    }, this.setRenderTargetTextures = function(w, O, j) {
      Fe.get(w.texture).__webglTexture = O, Fe.get(w.depthTexture).__webglTexture = j;
      const U = Fe.get(w);
      U.__hasExternalTextures = !0, U.__hasExternalTextures && (U.__autoAllocateDepthBuffer = j === void 0, U.__autoAllocateDepthBuffer || ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), U.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(w, O) {
      const j = Fe.get(w);
      j.__webglFramebuffer = O, j.__useDefaultFramebuffer = O === void 0;
    }, this.setRenderTarget = function(w, O = 0, j = 0) {
      E = w, S = O, T = j;
      let U = !0, K = null, fe = !1, ye = !1;
      if (w) {
        const Re = Fe.get(w);
        Re.__useDefaultFramebuffer !== void 0 ? (Se.bindFramebuffer(N.FRAMEBUFFER, null), U = !1) : Re.__webglFramebuffer === void 0 ? Le.setupRenderTarget(w) : Re.__hasExternalTextures && Le.rebindTextures(w, Fe.get(w.texture).__webglTexture, Fe.get(w.depthTexture).__webglTexture);
        const Be = w.texture;
        (Be.isData3DTexture || Be.isDataArrayTexture || Be.isCompressedArrayTexture) && (ye = !0);
        const Pe = Fe.get(w).__webglFramebuffer;
        w.isWebGLCubeRenderTarget ? (K = Pe[O], fe = !0) : we.isWebGL2 && w.samples > 0 && Le.useMultisampledRTT(w) === !1 ? K = Fe.get(w).__webglMultisampledFramebuffer : K = Pe, A.copy(w.viewport), W.copy(w.scissor), X = w.scissorTest;
      } else
        A.copy(J).multiplyScalar(k).floor(), W.copy(B).multiplyScalar(k).floor(), X = G;
      if (Se.bindFramebuffer(N.FRAMEBUFFER, K) && we.drawBuffers && U && Se.drawBuffers(w, K), Se.viewport(A), Se.scissor(W), Se.setScissorTest(X), fe) {
        const Re = Fe.get(w.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + O, Re.__webglTexture, j);
      } else if (ye) {
        const Re = Fe.get(w.texture), Be = O || 0;
        N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, Re.__webglTexture, j || 0, Be);
      }
      C = -1;
    }, this.readRenderTargetPixels = function(w, O, j, U, K, fe, ye) {
      if (!(w && w.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ae = Fe.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && ye !== void 0 && (Ae = Ae[ye]), Ae) {
        Se.bindFramebuffer(N.FRAMEBUFFER, Ae);
        try {
          const Re = w.texture, Be = Re.format, Pe = Re.type;
          if (Be !== ln && me.convert(Be) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const De = Pe === Qn && (ve.has("EXT_color_buffer_half_float") || we.isWebGL2 && ve.has("EXT_color_buffer_float"));
          if (Pe !== gi && me.convert(Pe) !== N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Pe === Yn && (we.isWebGL2 || ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !De) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          O >= 0 && O <= w.width - U && j >= 0 && j <= w.height - K && N.readPixels(O, j, U, K, me.convert(Be), me.convert(Pe), fe);
        } finally {
          const Re = E !== null ? Fe.get(E).__webglFramebuffer : null;
          Se.bindFramebuffer(N.FRAMEBUFFER, Re);
        }
      }
    }, this.copyFramebufferToTexture = function(w, O, j = 0) {
      const U = Math.pow(2, -j), K = Math.floor(O.image.width * U), fe = Math.floor(O.image.height * U);
      Le.setTexture2D(O, 0), N.copyTexSubImage2D(N.TEXTURE_2D, j, 0, 0, w.x, w.y, K, fe), Se.unbindTexture();
    }, this.copyTextureToTexture = function(w, O, j, U = 0) {
      const K = O.image.width, fe = O.image.height, ye = me.convert(j.format), Ae = me.convert(j.type);
      Le.setTexture2D(j, 0), N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, j.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, j.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, j.unpackAlignment), O.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, U, w.x, w.y, K, fe, ye, Ae, O.image.data) : O.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, U, w.x, w.y, O.mipmaps[0].width, O.mipmaps[0].height, ye, O.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, U, w.x, w.y, ye, Ae, O.image), U === 0 && j.generateMipmaps && N.generateMipmap(N.TEXTURE_2D), Se.unbindTexture();
    }, this.copyTextureToTexture3D = function(w, O, j, U, K = 0) {
      if (x.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const fe = w.max.x - w.min.x + 1, ye = w.max.y - w.min.y + 1, Ae = w.max.z - w.min.z + 1, Re = me.convert(U.format), Be = me.convert(U.type);
      let Pe;
      if (U.isData3DTexture)
        Le.setTexture3D(U, 0), Pe = N.TEXTURE_3D;
      else if (U.isDataArrayTexture)
        Le.setTexture2DArray(U, 0), Pe = N.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, U.flipY), N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), N.pixelStorei(N.UNPACK_ALIGNMENT, U.unpackAlignment);
      const De = N.getParameter(N.UNPACK_ROW_LENGTH), rt = N.getParameter(N.UNPACK_IMAGE_HEIGHT), ot = N.getParameter(N.UNPACK_SKIP_PIXELS), pn = N.getParameter(N.UNPACK_SKIP_ROWS), On = N.getParameter(N.UNPACK_SKIP_IMAGES), ct = j.isCompressedTexture ? j.mipmaps[0] : j.image;
      N.pixelStorei(N.UNPACK_ROW_LENGTH, ct.width), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, ct.height), N.pixelStorei(N.UNPACK_SKIP_PIXELS, w.min.x), N.pixelStorei(N.UNPACK_SKIP_ROWS, w.min.y), N.pixelStorei(N.UNPACK_SKIP_IMAGES, w.min.z), j.isDataTexture || j.isData3DTexture ? N.texSubImage3D(Pe, K, O.x, O.y, O.z, fe, ye, Ae, Re, Be, ct.data) : j.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), N.compressedTexSubImage3D(Pe, K, O.x, O.y, O.z, fe, ye, Ae, Re, ct.data)) : N.texSubImage3D(Pe, K, O.x, O.y, O.z, fe, ye, Ae, Re, Be, ct), N.pixelStorei(N.UNPACK_ROW_LENGTH, De), N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, rt), N.pixelStorei(N.UNPACK_SKIP_PIXELS, ot), N.pixelStorei(N.UNPACK_SKIP_ROWS, pn), N.pixelStorei(N.UNPACK_SKIP_IMAGES, On), K === 0 && U.generateMipmaps && N.generateMipmap(Pe), Se.unbindTexture();
    }, this.initTexture = function(w) {
      w.isCubeTexture ? Le.setTextureCube(w, 0) : w.isData3DTexture ? Le.setTexture3D(w, 0) : w.isDataArrayTexture || w.isCompressedArrayTexture ? Le.setTexture2DArray(w, 0) : Le.setTexture2D(w, 0), Se.unbindTexture();
    }, this.resetState = function() {
      S = 0, T = 0, E = null, Se.reset(), ue.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return jn;
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Te ? zi : Wu;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === zi ? Te : Mn;
  }
}
class nv extends cf {
}
nv.prototype.isWebGL1Renderer = !0;
class iv extends Ze {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class sv {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Yo, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = fn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = fn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = fn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Ot = /* @__PURE__ */ new L();
class Cl {
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
      Ot.fromBufferAttribute(this, t), Ot.applyMatrix4(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ot.fromBufferAttribute(this, t), Ot.applyNormalMatrix(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ot.fromBufferAttribute(this, t), Ot.transformDirection(e), this.setXYZ(t, Ot.x, Ot.y, Ot.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Kn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = je(t, this.array), n = je(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = je(t, this.array), n = je(n, this.array), i = je(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = je(t, this.array), n = je(n, this.array), i = je(i, this.array), s = je(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
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
      return new Tt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Cl(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const Ph = /* @__PURE__ */ new L(), Lh = /* @__PURE__ */ new Ke(), Dh = /* @__PURE__ */ new Ke(), rv = /* @__PURE__ */ new L(), Ih = /* @__PURE__ */ new Ne(), gs = /* @__PURE__ */ new L(), xo = /* @__PURE__ */ new In(), Uh = /* @__PURE__ */ new Ne(), vo = /* @__PURE__ */ new Lr();
class av extends Lt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ne(), this.bindMatrixInverse = new Ne(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new ii()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      gs.fromBufferAttribute(t, n), this.applyBoneTransform(n, gs), this.boundingBox.expandByPoint(gs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new In()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      gs.fromBufferAttribute(t, n), this.applyBoneTransform(n, gs), this.boundingSphere.expandByPoint(gs);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), xo.copy(this.boundingSphere), xo.applyMatrix4(i), e.ray.intersectsSphere(xo) !== !1 && (Uh.copy(i).invert(), vo.copy(e.ray).applyMatrix4(Uh), !(this.boundingBox !== null && vo.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, vo)));
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
    const e = new Ke(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Lh.fromBufferAttribute(i.attributes.skinIndex, e), Dh.fromBufferAttribute(i.attributes.skinWeight, e), Ph.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Dh.getComponent(s);
      if (a !== 0) {
        const o = Lh.getComponent(s);
        Ih.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(rv.copy(Ph).applyMatrix4(Ih), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class hf extends Ze {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class ov extends wt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = Mt, h = Mt, u, f) {
    super(null, a, o, l, c, h, i, s, u, f), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Nh = /* @__PURE__ */ new Ne(), lv = /* @__PURE__ */ new Ne();
class Pl {
  constructor(e = [], t = []) {
    this.uuid = fn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ne());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ne();
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
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : lv;
      Nh.multiplyMatrices(o, t[s]), Nh.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Pl(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Yu(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new ov(t, e, e, ln, Yn);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
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
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new hf()), this.bones.push(a), this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]));
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
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Oh extends Tt {
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
const _s = /* @__PURE__ */ new Ne(), Fh = /* @__PURE__ */ new Ne(), sa = [], Bh = /* @__PURE__ */ new ii(), cv = /* @__PURE__ */ new Ne(), tr = /* @__PURE__ */ new Lt(), nr = /* @__PURE__ */ new In();
class hv extends Lt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Oh(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, cv);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new ii()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, _s), Bh.copy(e.boundingBox).applyMatrix4(_s), this.boundingBox.union(Bh);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new In()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, _s), nr.copy(e.boundingSphere).applyMatrix4(_s), this.boundingSphere.union(nr);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (tr.geometry = this.geometry, tr.material = this.material, tr.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), nr.copy(this.boundingSphere), nr.applyMatrix4(n), e.ray.intersectsSphere(nr) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, _s), Fh.multiplyMatrices(n, _s), tr.matrixWorld = Fh, tr.raycast(e, sa);
        for (let a = 0, o = sa.length; a < o; a++) {
          const l = sa[a];
          l.instanceId = s, l.object = this, t.push(l);
        }
        sa.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Oh(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ll extends Cn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ee(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const zh = /* @__PURE__ */ new L(), kh = /* @__PURE__ */ new L(), Hh = /* @__PURE__ */ new Ne(), yo = /* @__PURE__ */ new Lr(), ra = /* @__PURE__ */ new In();
class Dl extends Ze {
  constructor(e = new kt(), t = new Ll()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        zh.fromBufferAttribute(t, i - 1), kh.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += zh.distanceTo(kh);
      e.setAttribute("lineDistance", new Et(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ra.copy(n.boundingSphere), ra.applyMatrix4(i), ra.radius += s, e.ray.intersectsSphere(ra) === !1) return;
    Hh.copy(i).invert(), yo.copy(e.ray).applyMatrix4(Hh);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new L(), h = new L(), u = new L(), f = new L(), d = this.isLineSegments ? 2 : 1, _ = n.index, m = n.attributes.position;
    if (_ !== null) {
      const p = Math.max(0, a.start), y = Math.min(_.count, a.start + a.count);
      for (let x = p, v = y - 1; x < v; x += d) {
        const S = _.getX(x), T = _.getX(x + 1);
        if (c.fromBufferAttribute(m, S), h.fromBufferAttribute(m, T), yo.distanceSqToSegment(c, h, f, u) > l) continue;
        f.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(f);
        C < e.near || C > e.far || t.push({
          distance: C,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const p = Math.max(0, a.start), y = Math.min(m.count, a.start + a.count);
      for (let x = p, v = y - 1; x < v; x += d) {
        if (c.fromBufferAttribute(m, x), h.fromBufferAttribute(m, x + 1), yo.distanceSqToSegment(c, h, f, u) > l) continue;
        f.applyMatrix4(this.matrixWorld);
        const T = e.ray.origin.distanceTo(f);
        T < e.near || T > e.far || t.push({
          distance: T,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const Gh = /* @__PURE__ */ new L(), Vh = /* @__PURE__ */ new L();
class uf extends Dl {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Gh.fromBufferAttribute(t, i), Vh.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Gh.distanceTo(Vh);
      e.setAttribute("lineDistance", new Et(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class uv extends Dl {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class ff extends Cn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Wh = /* @__PURE__ */ new Ne(), Jo = /* @__PURE__ */ new Lr(), aa = /* @__PURE__ */ new In(), oa = /* @__PURE__ */ new L();
class fv extends Ze {
  constructor(e = new kt(), t = new ff()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), aa.copy(n.boundingSphere), aa.applyMatrix4(i), aa.radius += s, e.ray.intersectsSphere(aa) === !1) return;
    Wh.copy(i).invert(), Jo.copy(e.ray).applyMatrix4(Wh);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start), d = Math.min(c.count, a.start + a.count);
      for (let _ = f, g = d; _ < g; _++) {
        const m = c.getX(_);
        oa.fromBufferAttribute(u, m), Xh(oa, m, l, i, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start), d = Math.min(u.count, a.start + a.count);
      for (let _ = f, g = d; _ < g; _++)
        oa.fromBufferAttribute(u, _), Xh(oa, _, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Xh(r, e, t, n, i, s, a) {
  const o = Jo.distanceSqToPoint(r);
  if (o < t) {
    const l = new L();
    Jo.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: a
    });
  }
}
class Un {
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
    for (let a = 1; a <= e; a++)
      n = this.getPoint(a / e), s += n.distanceTo(i), t.push(s), i = n;
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
    let a;
    t ? a = t : a = e * n[s - 1];
    let o = 0, l = s - 1, c;
    for (; o <= l; )
      if (i = Math.floor(o + (l - o) / 2), c = n[i] - a, c < 0)
        o = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === a)
      return i / (s - 1);
    const h = n[i], f = n[i + 1] - h, d = (a - h) / f;
    return (i + d) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let i = e - 1e-4, s = e + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i), o = this.getPoint(s), l = t || (a.isVector2 ? new se() : new L());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new L(), i = [], s = [], a = [], o = new L(), l = new Ne();
    for (let d = 0; d <= e; d++) {
      const _ = d / e;
      i[d] = this.getTangentAt(_, new L());
    }
    s[0] = new L(), a[0] = new L();
    let c = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), f = Math.abs(i[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let d = 1; d <= e; d++) {
      if (s[d] = s[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(i[d - 1], i[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const _ = Math.acos(dt(i[d - 1].dot(i[d]), -1, 1));
        s[d].applyMatrix4(l.makeRotationAxis(o, _));
      }
      a[d].crossVectors(i[d], s[d]);
    }
    if (t === !0) {
      let d = Math.acos(dt(s[0].dot(s[e]), -1, 1));
      d /= e, i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
      for (let _ = 1; _ <= e; _++)
        s[_].applyMatrix4(l.makeRotationAxis(i[_], d * _)), a[_].crossVectors(i[_], s[_]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: a
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
class Il extends Un {
  constructor(e = 0, t = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(e, t) {
    const n = t || new se(), i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === !0 && !a && (s === i ? s = -i : s = s - i);
    const o = this.aStartAngle + e * s;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
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
class dv extends Il {
  constructor(e, t, n, i, s, a) {
    super(e, t, n, n, i, s, a), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Ul() {
  let r = 0, e = 0, t = 0, n = 0;
  function i(s, a, o, l) {
    r = s, e = o, t = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l;
  }
  return {
    initCatmullRom: function(s, a, o, l, c) {
      i(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function(s, a, o, l, c, h, u) {
      let f = (a - s) / c - (o - s) / (c + h) + (o - a) / h, d = (o - a) / h - (l - a) / (h + u) + (l - o) / u;
      f *= h, d *= h, i(a, o, f, d);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return r + e * s + t * a + n * o;
    }
  };
}
const la = /* @__PURE__ */ new L(), Mo = /* @__PURE__ */ new Ul(), So = /* @__PURE__ */ new Ul(), To = /* @__PURE__ */ new Ul();
class pv extends Un {
  constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.points, s = i.length, a = (s - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = i[(o - 1) % s] : (la.subVectors(i[0], i[1]).add(i[0]), c = la);
    const u = i[o % s], f = i[(o + 1) % s];
    if (this.closed || o + 2 < s ? h = i[(o + 2) % s] : (la.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), h = la), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(c.distanceToSquared(u), d), g = Math.pow(u.distanceToSquared(f), d), m = Math.pow(f.distanceToSquared(h), d);
      g < 1e-4 && (g = 1), _ < 1e-4 && (_ = g), m < 1e-4 && (m = g), Mo.initNonuniformCatmullRom(c.x, u.x, f.x, h.x, _, g, m), So.initNonuniformCatmullRom(c.y, u.y, f.y, h.y, _, g, m), To.initNonuniformCatmullRom(c.z, u.z, f.z, h.z, _, g, m);
    } else this.curveType === "catmullrom" && (Mo.initCatmullRom(c.x, u.x, f.x, h.x, this.tension), So.initCatmullRom(c.y, u.y, f.y, h.y, this.tension), To.initCatmullRom(c.z, u.z, f.z, h.z, this.tension));
    return n.set(
      Mo.calc(l),
      So.calc(l),
      To.calc(l)
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
function qh(r, e, t, n, i) {
  const s = (n - e) * 0.5, a = (i - t) * 0.5, o = r * r, l = r * o;
  return (2 * t - 2 * n + s + a) * l + (-3 * t + 3 * n - 2 * s - a) * o + s * r + t;
}
function mv(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function gv(r, e) {
  return 2 * (1 - r) * r * e;
}
function _v(r, e) {
  return r * r * e;
}
function fr(r, e, t, n) {
  return mv(r, e) + gv(r, t) + _v(r, n);
}
function xv(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function vv(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function yv(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function Mv(r, e) {
  return r * r * r * e;
}
function dr(r, e, t, n, i) {
  return xv(r, e) + vv(r, t) + yv(r, n) + Mv(r, i);
}
class df extends Un {
  constructor(e = new se(), t = new se(), n = new se(), i = new se()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new se()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      dr(e, i.x, s.x, a.x, o.x),
      dr(e, i.y, s.y, a.y, o.y)
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
class Sv extends Un {
  constructor(e = new L(), t = new L(), n = new L(), i = new L()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      dr(e, i.x, s.x, a.x, o.x),
      dr(e, i.y, s.y, a.y, o.y),
      dr(e, i.z, s.z, a.z, o.z)
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
class Nl extends Un {
  constructor(e = new se(), t = new se()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new se()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new se()) {
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
class Tv extends Un {
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
class pf extends Un {
  constructor(e = new se(), t = new se(), n = new se()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new se()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      fr(e, i.x, s.x, a.x),
      fr(e, i.y, s.y, a.y)
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
class Ev extends Un {
  constructor(e = new L(), t = new L(), n = new L()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new L()) {
    const n = t, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      fr(e, i.x, s.x, a.x),
      fr(e, i.y, s.y, a.y),
      fr(e, i.z, s.z, a.z)
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
class mf extends Un {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new se()) {
    const n = t, i = this.points, s = (i.length - 1) * e, a = Math.floor(s), o = s - a, l = i[a === 0 ? a : a - 1], c = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], u = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(
      qh(o, l.x, c.x, h.x, u.x),
      qh(o, l.y, c.y, h.y, u.y)
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
      this.points.push(new se().fromArray(i));
    }
    return this;
  }
}
var bv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: dv,
  CatmullRomCurve3: pv,
  CubicBezierCurve: df,
  CubicBezierCurve3: Sv,
  EllipseCurve: Il,
  LineCurve: Nl,
  LineCurve3: Tv,
  QuadraticBezierCurve: pf,
  QuadraticBezierCurve3: Ev,
  SplineCurve: mf
});
class Av extends Un {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Nl(t, e));
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
        const a = i[s] - n, o = this.curves[s], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, t);
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
      const a = s[i], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, l = a.getPoints(o);
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
      this.curves.push(new bv[i.type]().fromJSON(i));
    }
    return this;
  }
}
class $o extends Av {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new se(), e && this.setFromPoints(e);
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
    const n = new Nl(this.currentPoint.clone(), new se(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    const s = new pf(
      this.currentPoint.clone(),
      new se(e, t),
      new se(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    const o = new df(
      this.currentPoint.clone(),
      new se(e, t),
      new se(n, i),
      new se(s, a)
    );
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new mf(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, s, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      e + o,
      t + l,
      n,
      i,
      s,
      a
    ), this;
  }
  absarc(e, t, n, i, s, a) {
    return this.absellipse(e, t, n, n, i, s, a), this;
  }
  ellipse(e, t, n, i, s, a, o, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, n, i, s, a, o, l), this;
  }
  absellipse(e, t, n, i, s, a, o, l) {
    const c = new Il(e, t, n, i, s, a, o, l);
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
class Ol extends kt {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: e,
      indices: t,
      radius: n,
      detail: i
    };
    const s = [], a = [];
    o(i), c(n), h(), this.setAttribute("position", new Et(s, 3)), this.setAttribute("normal", new Et(s.slice(), 3)), this.setAttribute("uv", new Et(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(y) {
      const x = new L(), v = new L(), S = new L();
      for (let T = 0; T < t.length; T += 3)
        d(t[T + 0], x), d(t[T + 1], v), d(t[T + 2], S), l(x, v, S, y);
    }
    function l(y, x, v, S) {
      const T = S + 1, E = [];
      for (let C = 0; C <= T; C++) {
        E[C] = [];
        const M = y.clone().lerp(v, C / T), A = x.clone().lerp(v, C / T), W = T - C;
        for (let X = 0; X <= W; X++)
          X === 0 && C === T ? E[C][X] = M : E[C][X] = M.clone().lerp(A, X / W);
      }
      for (let C = 0; C < T; C++)
        for (let M = 0; M < 2 * (T - C) - 1; M++) {
          const A = Math.floor(M / 2);
          M % 2 === 0 ? (f(E[C][A + 1]), f(E[C + 1][A]), f(E[C][A])) : (f(E[C][A + 1]), f(E[C + 1][A + 1]), f(E[C + 1][A]));
        }
    }
    function c(y) {
      const x = new L();
      for (let v = 0; v < s.length; v += 3)
        x.x = s[v + 0], x.y = s[v + 1], x.z = s[v + 2], x.normalize().multiplyScalar(y), s[v + 0] = x.x, s[v + 1] = x.y, s[v + 2] = x.z;
    }
    function h() {
      const y = new L();
      for (let x = 0; x < s.length; x += 3) {
        y.x = s[x + 0], y.y = s[x + 1], y.z = s[x + 2];
        const v = m(y) / 2 / Math.PI + 0.5, S = p(y) / Math.PI + 0.5;
        a.push(v, 1 - S);
      }
      _(), u();
    }
    function u() {
      for (let y = 0; y < a.length; y += 6) {
        const x = a[y + 0], v = a[y + 2], S = a[y + 4], T = Math.max(x, v, S), E = Math.min(x, v, S);
        T > 0.9 && E < 0.1 && (x < 0.2 && (a[y + 0] += 1), v < 0.2 && (a[y + 2] += 1), S < 0.2 && (a[y + 4] += 1));
      }
    }
    function f(y) {
      s.push(y.x, y.y, y.z);
    }
    function d(y, x) {
      const v = y * 3;
      x.x = e[v + 0], x.y = e[v + 1], x.z = e[v + 2];
    }
    function _() {
      const y = new L(), x = new L(), v = new L(), S = new L(), T = new se(), E = new se(), C = new se();
      for (let M = 0, A = 0; M < s.length; M += 9, A += 6) {
        y.set(s[M + 0], s[M + 1], s[M + 2]), x.set(s[M + 3], s[M + 4], s[M + 5]), v.set(s[M + 6], s[M + 7], s[M + 8]), T.set(a[A + 0], a[A + 1]), E.set(a[A + 2], a[A + 3]), C.set(a[A + 4], a[A + 5]), S.copy(y).add(x).add(v).divideScalar(3);
        const W = m(S);
        g(T, A + 0, y, W), g(E, A + 2, x, W), g(C, A + 4, v, W);
      }
    }
    function g(y, x, v, S) {
      S < 0 && y.x === 1 && (a[x] = y.x - 1), v.x === 0 && v.z === 0 && (a[x] = S / 2 / Math.PI + 0.5);
    }
    function m(y) {
      return Math.atan2(y.z, -y.x);
    }
    function p(y) {
      return Math.atan2(-y.y, Math.sqrt(y.x * y.x + y.z * y.z));
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ol(e.vertices, e.indices, e.radius, e.details);
  }
}
class Eo extends $o {
  constructor(e) {
    super(e), this.uuid = fn(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new $o().fromJSON(i));
    }
    return this;
  }
}
const wv = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, i = n ? e[0] * t : r.length;
    let s = gf(r, 0, i, t, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, h, u, f, d;
    if (n && (s = Dv(r, e, s, t)), r.length > 80 * t) {
      o = c = r[0], l = h = r[1];
      for (let _ = t; _ < i; _ += t)
        u = r[_], f = r[_ + 1], u < o && (o = u), f < l && (l = f), u > c && (c = u), f > h && (h = f);
      d = Math.max(c - o, h - l), d = d !== 0 ? 32767 / d : 0;
    }
    return vr(s, a, t, o, l, d, 0), a;
  }
};
function gf(r, e, t, n, i) {
  let s, a;
  if (i === Vv(r, e, t, n) > 0)
    for (s = e; s < t; s += n) a = Yh(s, r[s], r[s + 1], a);
  else
    for (s = t - n; s >= e; s -= n) a = Yh(s, r[s], r[s + 1], a);
  return a && Ua(a, a.next) && (Mr(a), a = a.next), a;
}
function qi(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Ua(t, t.next) || nt(t.prev, t, t.next) === 0)) {
      if (Mr(t), t = e = t.prev, t === t.next) break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function vr(r, e, t, n, i, s, a) {
  if (!r) return;
  !a && s && Fv(r, n, i, s);
  let o = r, l, c;
  for (; r.prev !== r.next; ) {
    if (l = r.prev, c = r.next, s ? Cv(r, n, i, s) : Rv(r)) {
      e.push(l.i / t | 0), e.push(r.i / t | 0), e.push(c.i / t | 0), Mr(r), r = c.next, o = c.next;
      continue;
    }
    if (r = c, r === o) {
      a ? a === 1 ? (r = Pv(qi(r), e, t), vr(r, e, t, n, i, s, 2)) : a === 2 && Lv(r, e, t, n, i, s) : vr(qi(r), e, t, n, i, s, 1);
      break;
    }
  }
}
function Rv(r) {
  const e = r.prev, t = r, n = r.next;
  if (nt(e, t, n) >= 0) return !1;
  const i = e.x, s = t.x, a = n.x, o = e.y, l = t.y, c = n.y, h = i < s ? i < a ? i : a : s < a ? s : a, u = o < l ? o < c ? o : c : l < c ? l : c, f = i > s ? i > a ? i : a : s > a ? s : a, d = o > l ? o > c ? o : c : l > c ? l : c;
  let _ = n.next;
  for (; _ !== e; ) {
    if (_.x >= h && _.x <= f && _.y >= u && _.y <= d && Ms(i, o, s, l, a, c, _.x, _.y) && nt(_.prev, _, _.next) >= 0) return !1;
    _ = _.next;
  }
  return !0;
}
function Cv(r, e, t, n) {
  const i = r.prev, s = r, a = r.next;
  if (nt(i, s, a) >= 0) return !1;
  const o = i.x, l = s.x, c = a.x, h = i.y, u = s.y, f = a.y, d = o < l ? o < c ? o : c : l < c ? l : c, _ = h < u ? h < f ? h : f : u < f ? u : f, g = o > l ? o > c ? o : c : l > c ? l : c, m = h > u ? h > f ? h : f : u > f ? u : f, p = Qo(d, _, e, t, n), y = Qo(g, m, e, t, n);
  let x = r.prevZ, v = r.nextZ;
  for (; x && x.z >= p && v && v.z <= y; ) {
    if (x.x >= d && x.x <= g && x.y >= _ && x.y <= m && x !== i && x !== a && Ms(o, h, l, u, c, f, x.x, x.y) && nt(x.prev, x, x.next) >= 0 || (x = x.prevZ, v.x >= d && v.x <= g && v.y >= _ && v.y <= m && v !== i && v !== a && Ms(o, h, l, u, c, f, v.x, v.y) && nt(v.prev, v, v.next) >= 0)) return !1;
    v = v.nextZ;
  }
  for (; x && x.z >= p; ) {
    if (x.x >= d && x.x <= g && x.y >= _ && x.y <= m && x !== i && x !== a && Ms(o, h, l, u, c, f, x.x, x.y) && nt(x.prev, x, x.next) >= 0) return !1;
    x = x.prevZ;
  }
  for (; v && v.z <= y; ) {
    if (v.x >= d && v.x <= g && v.y >= _ && v.y <= m && v !== i && v !== a && Ms(o, h, l, u, c, f, v.x, v.y) && nt(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function Pv(r, e, t) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Ua(i, s) && _f(i, n, n.next, s) && yr(i, s) && yr(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), Mr(n), Mr(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return qi(n);
}
function Lv(r, e, t, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && kv(a, o)) {
        let l = xf(a, o);
        a = qi(a, a.next), l = qi(l, l.next), vr(a, e, t, n, i, s, 0), vr(l, e, t, n, i, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function Dv(r, e, t, n) {
  const i = [];
  let s, a, o, l, c;
  for (s = 0, a = e.length; s < a; s++)
    o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : r.length, c = gf(r, o, l, n, !1), c === c.next && (c.steiner = !0), i.push(zv(c));
  for (i.sort(Iv), s = 0; s < i.length; s++)
    t = Uv(i[s], t);
  return t;
}
function Iv(r, e) {
  return r.x - e.x;
}
function Uv(r, e) {
  const t = Nv(r, e);
  if (!t)
    return e;
  const n = xf(t, r);
  return qi(n, n.next), qi(t, t.next);
}
function Nv(r, e) {
  let t = e, n = -1 / 0, i;
  const s = r.x, a = r.y;
  do {
    if (a <= t.y && a >= t.next.y && t.next.y !== t.y) {
      const f = t.x + (a - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (f <= s && f > n && (n = f, i = t.x < t.next.x ? t : t.next, f === s))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i) return null;
  const o = i, l = i.x, c = i.y;
  let h = 1 / 0, u;
  t = i;
  do
    s >= t.x && t.x >= l && s !== t.x && Ms(a < c ? s : n, a, l, c, a < c ? n : s, a, t.x, t.y) && (u = Math.abs(a - t.y) / (s - t.x), yr(t, r) && (u < h || u === h && (t.x > i.x || t.x === i.x && Ov(i, t))) && (i = t, h = u)), t = t.next;
  while (t !== o);
  return i;
}
function Ov(r, e) {
  return nt(r.prev, r, e.prev) < 0 && nt(e.next, r, r.next) < 0;
}
function Fv(r, e, t, n) {
  let i = r;
  do
    i.z === 0 && (i.z = Qo(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, Bv(i);
}
function Bv(r) {
  let e, t, n, i, s, a, o, l, c = 1;
  do {
    for (t = r, r = null, s = null, a = 0; t; ) {
      for (a++, n = t, o = 0, e = 0; e < c && (o++, n = n.nextZ, !!n); e++)
        ;
      for (l = c; o > 0 || l > 0 && n; )
        o !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, o--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, c *= 2;
  } while (a > 1);
  return r;
}
function Qo(r, e, t, n, i) {
  return r = (r - t) * i | 0, e = (e - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function zv(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function Ms(r, e, t, n, i, s, a, o) {
  return (i - a) * (e - o) >= (r - a) * (s - o) && (r - a) * (n - o) >= (t - a) * (e - o) && (t - a) * (s - o) >= (i - a) * (n - o);
}
function kv(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Hv(r, e) && // dones't intersect other edges
  (yr(r, e) && yr(e, r) && Gv(r, e) && // locally visible
  (nt(r.prev, r, e.prev) || nt(r, e.prev, e)) || // does not create opposite-facing sectors
  Ua(r, e) && nt(r.prev, r, r.next) > 0 && nt(e.prev, e, e.next) > 0);
}
function nt(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Ua(r, e) {
  return r.x === e.x && r.y === e.y;
}
function _f(r, e, t, n) {
  const i = ha(nt(r, e, t)), s = ha(nt(r, e, n)), a = ha(nt(t, n, r)), o = ha(nt(t, n, e));
  return !!(i !== s && a !== o || i === 0 && ca(r, t, e) || s === 0 && ca(r, n, e) || a === 0 && ca(t, r, n) || o === 0 && ca(t, e, n));
}
function ca(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function ha(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Hv(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && _f(t, t.next, r, e)) return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function yr(r, e) {
  return nt(r.prev, r, r.next) < 0 ? nt(r, e, r.next) >= 0 && nt(r, r.prev, e) >= 0 : nt(r, e, r.prev) < 0 || nt(r, r.next, e) < 0;
}
function Gv(r, e) {
  let t = r, n = !1;
  const i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function xf(r, e) {
  const t = new el(r.i, r.x, r.y), n = new el(e.i, e.x, e.y), i = r.next, s = e.prev;
  return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function Yh(r, e, t, n) {
  const i = new el(r, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Mr(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function el(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Vv(r, e, t, n) {
  let i = 0;
  for (let s = e, a = t - n; s < t; s += n)
    i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class Fl {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let i = t - 1, s = 0; s < t; i = s++)
      n += e[i].x * e[s].y - e[s].x * e[i].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Fl.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], i = [], s = [];
    jh(e), Kh(n, e);
    let a = e.length;
    t.forEach(jh);
    for (let l = 0; l < t.length; l++)
      i.push(a), a += t[l].length, Kh(n, t[l]);
    const o = wv.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3)
      s.push(o.slice(l, l + 3));
    return s;
  }
}
function jh(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function Kh(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class Bl extends Ol {
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
    return new Bl(e.radius, e.detail);
  }
}
class zl extends kt {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], u = new L(), f = new L(), d = [], _ = [], g = [], m = [];
    for (let p = 0; p <= n; p++) {
      const y = [], x = p / n;
      let v = 0;
      p === 0 && a === 0 ? v = 0.5 / t : p === n && l === Math.PI && (v = -0.5 / t);
      for (let S = 0; S <= t; S++) {
        const T = S / t;
        u.x = -e * Math.cos(i + T * s) * Math.sin(a + x * o), u.y = e * Math.cos(a + x * o), u.z = e * Math.sin(i + T * s) * Math.sin(a + x * o), _.push(u.x, u.y, u.z), f.copy(u).normalize(), g.push(f.x, f.y, f.z), m.push(T + v, 1 - x), y.push(c++);
      }
      h.push(y);
    }
    for (let p = 0; p < n; p++)
      for (let y = 0; y < t; y++) {
        const x = h[p][y + 1], v = h[p][y], S = h[p + 1][y], T = h[p + 1][y + 1];
        (p !== 0 || a > 0) && d.push(x, v, T), (p !== n - 1 || l < Math.PI) && d.push(v, S, T);
      }
    this.setIndex(d), this.setAttribute("position", new Et(_, 3)), this.setAttribute("normal", new Et(g, 3)), this.setAttribute("uv", new Et(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new zl(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class kl extends Cn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Xu, this.normalScale = new se(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Mi extends kl {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new se(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return dt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ee(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ee(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ee(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function ci(r, e, t) {
  return vf(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t);
}
function ua(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function vf(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function Wv(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Zh(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l)
      i[a++] = r[o + l];
  }
  return i;
}
function yf(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
      while (s !== void 0);
}
class Dr {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
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
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Xv extends Dr {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Gc,
      endingEnd: Gc
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Vc:
          s = e, o = 2 * t - n;
          break;
        case Wc:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case Vc:
          a = e, l = 2 * n - t;
          break;
        case Wc:
          a = 1, l = n + i[1] - i[0];
          break;
        default:
          a = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, f = this._weightPrev, d = this._weightNext, _ = (n - t) / (i - t), g = _ * _, m = g * _, p = -f * m + 2 * f * g - f * _, y = (1 + f) * m + (-1.5 - 2 * f) * g + (-0.5 + f) * _ + 1, x = (-1 - d) * m + (1.5 + d) * g + 0.5 * _, v = d * m - d * g;
    for (let S = 0; S !== o; ++S)
      s[S] = p * a[h + S] + y * a[c + S] + x * a[l + S] + v * a[u + S];
    return s;
  }
}
class qv extends Dr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let f = 0; f !== o; ++f)
      s[f] = a[c + f] * u + a[l + f] * h;
    return s;
  }
}
class Yv extends Dr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Nn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ua(t, this.TimeBufferType), this.values = ua(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
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
        times: ua(e.times, Array),
        values: ua(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Yv(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new qv(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Xv(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case _r:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Us:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ja:
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
        return _r;
      case this.InterpolantFactoryMethodLinear:
        return Us;
      case this.InterpolantFactoryMethodSmooth:
        return ja;
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
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = ci(n, s, a), this.values = ci(this.values, s * o, a * o);
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
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1;
        break;
      }
      a = l;
    }
    if (i !== void 0 && vf(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = ci(this.times), t = ci(this.values), n = this.getValueSize(), i = this.getInterpolation() === ja, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const u = o * n, f = u - n, d = u + n;
          for (let _ = 0; _ !== n; ++_) {
            const g = t[u + _];
            if (g !== t[f + _] || g !== t[d + _]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, f = a * n;
          for (let d = 0; d !== n; ++d)
            t[f + d] = t[u + d];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = ci(e, 0, a), this.values = ci(t, 0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = ci(this.times, 0), t = ci(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Nn.prototype.TimeBufferType = Float32Array;
Nn.prototype.ValueBufferType = Float32Array;
Nn.prototype.DefaultInterpolation = Us;
class Ys extends Nn {
}
Ys.prototype.ValueTypeName = "bool";
Ys.prototype.ValueBufferType = Array;
Ys.prototype.DefaultInterpolation = _r;
Ys.prototype.InterpolantFactoryMethodLinear = void 0;
Ys.prototype.InterpolantFactoryMethodSmooth = void 0;
class Mf extends Nn {
}
Mf.prototype.ValueTypeName = "color";
class Fs extends Nn {
}
Fs.prototype.ValueTypeName = "number";
class jv extends Dr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4)
      Ln.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class Yi extends Nn {
  InterpolantFactoryMethodLinear(e) {
    return new jv(this.times, this.values, this.getValueSize(), e);
  }
}
Yi.prototype.ValueTypeName = "quaternion";
Yi.prototype.DefaultInterpolation = Us;
Yi.prototype.InterpolantFactoryMethodSmooth = void 0;
class js extends Nn {
}
js.prototype.ValueTypeName = "string";
js.prototype.ValueBufferType = Array;
js.prototype.DefaultInterpolation = _r;
js.prototype.InterpolantFactoryMethodLinear = void 0;
js.prototype.InterpolantFactoryMethodSmooth = void 0;
class Sr extends Nn {
}
Sr.prototype.ValueTypeName = "vector";
class Kv {
  constructor(e, t = -1, n, i = Ep) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = fn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(Jv(n[a]).scale(i));
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
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(Nn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const h = Wv(l);
      l = Zh(l, 1, h), c = Zh(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(
        new Fs(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
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
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let f = i[u];
        f || (i[u] = f = []), f.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, f, d, _, g) {
      if (d.length !== 0) {
        const m = [], p = [];
        yf(d, m, p, _), m.length !== 0 && g.push(new u(f, m, p));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
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
            const m = [], p = [];
            for (let y = 0; y !== f[_].morphTargets.length; ++y) {
              const x = f[_];
              m.push(x.time), p.push(x.morphTarget === g ? 1 : 0);
            }
            i.push(new Fs(".morphTargetInfluence[" + g + "]", m, p));
          }
          l = d.length * a;
        } else {
          const d = ".bones[" + t[u].name + "]";
          n(
            Sr,
            d + ".position",
            f,
            "pos",
            i
          ), n(
            Yi,
            d + ".quaternion",
            f,
            "rot",
            i
          ), n(
            Sr,
            d + ".scale",
            f,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
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
function Zv(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Fs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Sr;
    case "color":
      return Mf;
    case "quaternion":
      return Yi;
    case "bool":
    case "boolean":
      return Ys;
    case "string":
      return js;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Jv(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Zv(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    yf(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const Bs = {
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
let Sf = class {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
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
const $v = /* @__PURE__ */ new Sf();
class si {
  constructor(e) {
    this.manager = e !== void 0 ? e : $v, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
si.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Vn = {};
class Qv extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Tr extends si {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Bs.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Vn[e] !== void 0) {
      Vn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Vn[e] = [], Vn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const h = Vn[e], u = c.body.getReader(), f = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), d = f ? parseInt(f) : 0, _ = d !== 0;
        let g = 0;
        const m = new ReadableStream({
          start(p) {
            y();
            function y() {
              u.read().then(({ done: x, value: v }) => {
                if (x)
                  p.close();
                else {
                  g += v.byteLength;
                  const S = new ProgressEvent("progress", { lengthComputable: _, loaded: g, total: d });
                  for (let T = 0, E = h.length; T < E; T++) {
                    const C = h[T];
                    C.onProgress && C.onProgress(S);
                  }
                  p.enqueue(v), y();
                }
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new Qv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), f = u && u[1] ? u[1].toLowerCase() : void 0, d = new TextDecoder(f);
            return c.arrayBuffer().then((_) => d.decode(_));
          }
      }
    }).then((c) => {
      Bs.add(e, c);
      const h = Vn[e];
      delete Vn[e];
      for (let u = 0, f = h.length; u < f; u++) {
        const d = h[u];
        d.onLoad && d.onLoad(c);
      }
    }).catch((c) => {
      const h = Vn[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete Vn[e];
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
class Tf extends si {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Bs.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = xr("img");
    function l() {
      h(), Bs.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class ey extends si {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new bl();
    s.colorSpace = Te;
    const a = new Tf(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function l(c) {
      a.load(e[c], function(h) {
        s.images[c] = h, o++, o === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let c = 0; c < e.length; ++c)
      l(c);
    return s;
  }
}
class Ef extends si {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new wt(), a = new Tf(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
let Ir = class extends Ze {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ee(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
};
class ty extends Ir {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Ze.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ee(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const bo = /* @__PURE__ */ new Ne(), Jh = /* @__PURE__ */ new L(), $h = /* @__PURE__ */ new L();
class Hl {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new se(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ne(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Al(), this._frameExtents = new se(1, 1), this._viewportCount = 1, this._viewports = [
      new Ke(0, 0, 1, 1)
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
    Jh.setFromMatrixPosition(e.matrixWorld), t.position.copy(Jh), $h.setFromMatrixPosition(e.target.matrixWorld), t.lookAt($h), t.updateMatrixWorld(), bo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(bo), n.set(
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
    ), n.multiply(bo);
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
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class ny extends Hl {
  constructor() {
    super(new Bt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Ns * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class bf extends Ir {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Ze.DEFAULT_UP), this.updateMatrix(), this.target = new Ze(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new ny();
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
const Qh = /* @__PURE__ */ new Ne(), ir = /* @__PURE__ */ new L(), Ao = /* @__PURE__ */ new L();
class iy extends Hl {
  constructor() {
    super(new Bt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new se(4, 2), this._viewportCount = 6, this._viewports = [
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
      new Ke(2, 1, 1, 1),
      // negative X
      new Ke(0, 1, 1, 1),
      // positive Z
      new Ke(3, 1, 1, 1),
      // negative Z
      new Ke(1, 1, 1, 1),
      // positive Y
      new Ke(3, 0, 1, 1),
      // negative Y
      new Ke(1, 0, 1, 1)
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
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), ir.setFromMatrixPosition(e.matrixWorld), n.position.copy(ir), Ao.copy(n.position), Ao.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Ao), n.updateMatrixWorld(), i.makeTranslation(-ir.x, -ir.y, -ir.z), Qh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Qh);
  }
}
class Af extends Ir {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new iy();
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
class sy extends Hl {
  constructor() {
    super(new Da(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ry extends Ir {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ze.DEFAULT_UP), this.updateMatrix(), this.target = new Ze(), this.shadow = new sy();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class ay extends Ir {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class tl {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
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
class oy extends si {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = Bs.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      Bs.add(e, l), t && t(l), s.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
class wf {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = eu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = eu();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function eu() {
  return (typeof performance > "u" ? Date : performance).now();
}
const Gl = "\\[\\]\\.:\\/", ly = new RegExp("[" + Gl + "]", "g"), Vl = "[^" + Gl + "]", cy = "[^" + Gl.replace("\\.", "") + "]", hy = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Vl), uy = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", cy), fy = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Vl), dy = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Vl), py = new RegExp(
  "^" + hy + uy + fy + dy + "$"
), my = ["material", "materials", "bones", "map"];
class gy {
  constructor(e, t, n) {
    const i = n || qe.parseTrackName(t);
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
class qe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || qe.parseTrackName(t), this.node = qe.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new qe.Composite(e, t, n) : new qe(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(ly, "");
  }
  static parseTrackName(e) {
    const t = py.exec(e);
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
      my.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
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
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
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
    if (e || (e = qe.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
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
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
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
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
qe.Composite = gy;
qe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
qe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
qe.prototype.GetterByBindingType = [
  qe.prototype._getValue_direct,
  qe.prototype._getValue_array,
  qe.prototype._getValue_arrayElement,
  qe.prototype._getValue_toArray
];
qe.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    qe.prototype._setValue_direct,
    qe.prototype._setValue_direct_setNeedsUpdate,
    qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    qe.prototype._setValue_array,
    qe.prototype._setValue_array_setNeedsUpdate,
    qe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    qe.prototype._setValue_arrayElement,
    qe.prototype._setValue_arrayElement_setNeedsUpdate,
    qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    qe.prototype._setValue_fromArray,
    qe.prototype._setValue_fromArray_setNeedsUpdate,
    qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
let _y = class {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Lr(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new La(), this.params = {
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
  intersectObject(e, t = !0, n = []) {
    return nl(e, this, n, t), n.sort(tu), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      nl(e[i], this, n, t);
    return n.sort(tu), n;
  }
};
function tu(r, e) {
  return r.distance - e.distance;
}
function nl(r, e, t, n) {
  if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
    const i = r.children;
    for (let s = 0, a = i.length; s < a; s++)
      nl(i[s], e, t, !0);
  }
}
class nu {
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
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(dt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const iu = /* @__PURE__ */ new L();
class xy extends Ze {
  constructor(e, t) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t, this.type = "SpotLightHelper";
    const n = new kt(), i = [
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
    for (let a = 0, o = 1, l = 32; a < l; a++, o++) {
      const c = a / l * Math.PI * 2, h = o / l * Math.PI * 2;
      i.push(
        Math.cos(c),
        Math.sin(c),
        1,
        Math.cos(h),
        Math.sin(h),
        1
      );
    }
    n.setAttribute("position", new Et(i, 3));
    const s = new Ll({ fog: !1, toneMapped: !1 });
    this.cone = new uf(n, s), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1);
    const e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e), iu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(iu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
class vy extends Lt {
  constructor(e, t, n) {
    const i = new zl(t, 4, 2), s = new cn({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, s), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const yy = /* @__PURE__ */ new L(), su = /* @__PURE__ */ new Ee(), ru = /* @__PURE__ */ new Ee();
class My extends Ze {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new Bl(t);
    i.rotateY(Math.PI * 0.5), this.material = new cn({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const s = i.getAttribute("position"), a = new Float32Array(s.count * 3);
    i.setAttribute("color", new Tt(a, 3)), this.add(new Lt(i, this.material)), this.update();
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
      su.copy(this.light.color), ru.copy(this.light.groundColor);
      for (let n = 0, i = t.count; n < i; n++) {
        const s = n < i / 2 ? su : ru;
        t.setXYZ(n, s.r, s.g, s.b);
      }
      t.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), e.lookAt(yy.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class Sy {
  constructor() {
    this.type = "ShapePath", this.color = new Ee(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new $o(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    return this.currentPath.quadraticCurveTo(e, t, n, i), this;
  }
  bezierCurveTo(e, t, n, i, s, a) {
    return this.currentPath.bezierCurveTo(e, t, n, i, s, a), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(p) {
      const y = [];
      for (let x = 0, v = p.length; x < v; x++) {
        const S = p[x], T = new Eo();
        T.curves = S.curves, y.push(T);
      }
      return y;
    }
    function n(p, y) {
      const x = y.length;
      let v = !1;
      for (let S = x - 1, T = 0; T < x; S = T++) {
        let E = y[S], C = y[T], M = C.x - E.x, A = C.y - E.y;
        if (Math.abs(A) > Number.EPSILON) {
          if (A < 0 && (E = y[T], M = -M, C = y[S], A = -A), p.y < E.y || p.y > C.y) continue;
          if (p.y === E.y) {
            if (p.x === E.x) return !0;
          } else {
            const W = A * (p.x - E.x) - M * (p.y - E.y);
            if (W === 0) return !0;
            if (W < 0) continue;
            v = !v;
          }
        } else {
          if (p.y !== E.y) continue;
          if (C.x <= p.x && p.x <= E.x || E.x <= p.x && p.x <= C.x) return !0;
        }
      }
      return v;
    }
    const i = Fl.isClockWise, s = this.subPaths;
    if (s.length === 0) return [];
    let a, o, l;
    const c = [];
    if (s.length === 1)
      return o = s[0], l = new Eo(), l.curves = o.curves, c.push(l), c;
    let h = !i(s[0].getPoints());
    h = e ? !h : h;
    const u = [], f = [];
    let d = [], _ = 0, g;
    f[_] = void 0, d[_] = [];
    for (let p = 0, y = s.length; p < y; p++)
      o = s[p], g = o.getPoints(), a = i(g), a = e ? !a : a, a ? (!h && f[_] && _++, f[_] = { s: new Eo(), p: g }, f[_].s.curves = o.curves, h && _++, d[_] = []) : d[_].push({ h: o, p: g[0] });
    if (!f[0]) return t(s);
    if (f.length > 1) {
      let p = !1, y = 0;
      for (let x = 0, v = f.length; x < v; x++)
        u[x] = [];
      for (let x = 0, v = f.length; x < v; x++) {
        const S = d[x];
        for (let T = 0; T < S.length; T++) {
          const E = S[T];
          let C = !0;
          for (let M = 0; M < f.length; M++)
            n(E.p, f[M].p) && (x !== M && y++, C ? (C = !1, u[M].push(E)) : p = !0);
          C && u[x].push(E);
        }
      }
      y > 0 && p === !1 && (d = u);
    }
    let m;
    for (let p = 0, y = f.length; p < y; p++) {
      l = f[p].s, c.push(l), m = d[p];
      for (let x = 0, v = m.length; x < v; x++)
        l.holes.push(m[x].h);
    }
    return c;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Sl
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Sl);
const Ty = {
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
class Na {
  constructor() {
    pe(this, "callbacks");
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
    const s = t instanceof Array ? t : [], a = this.resolveNames(e), o = this.resolveName(a[0]);
    if (o.namespace === "base")
      for (const l in this.callbacks)
        this.callbacks[l] instanceof Object && this.callbacks[l][o.value] instanceof Array && this.callbacks[l][o.value].forEach(function(c) {
          c.apply(n, s);
        });
    else if (this.callbacks[o.namespace] instanceof Object) {
      if (o.value === "")
        return console.warn("wrong name"), this;
      this.callbacks[o.namespace][o.value].forEach(function(l) {
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
class Ey extends Na {
  constructor(t) {
    super();
    pe(this, "canvas");
    pe(this, "eventOffset");
    pe(this, "mouse");
    pe(this, "mouseMoveHandler");
    this.canvas = t, this.eventOffset = {
      x: 0,
      y: 0
    }, this.mouse = new se(), this.mouseMoveHandler = (n) => {
      var h;
      let {
        top: i = 0,
        left: s = 0,
        width: a = 0,
        height: o = 0
      } = (h = this.canvas) == null ? void 0 : h.getBoundingClientRect(), l = n.clientX - s, c = n.clientY - i;
      this.mouse.x = l / a * 2 - 1, this.mouse.y = -(c / o) * 2 + 1, this.eventOffset.x = l, this.eventOffset.y = c, this.trigger("mousemove", null);
    }, this.canvas && window.addEventListener("mousemove", this.mouseMoveHandler, !1);
  }
  release() {
    window.removeEventListener("mousemove", this.mouseMoveHandler, !1);
  }
}
class by extends Na {
  constructor() {
    super();
    pe(this, "clock");
    pe(this, "start");
    pe(this, "current");
    pe(this, "elapsed");
    pe(this, "delta");
    pe(this, "timer");
    pe(this, "index");
    pe(this, "elapsedTime");
    pe(this, "animationTick");
    this.clock = new wf(), this.start = Date.now(), this.current = this.start, this.elapsed = 0, this.delta = 16, this.timer = 0, this.index = 0, this.elapsedTime = 0, this.animationTick = null, this.tick();
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
class Ay extends Na {
  constructor(t) {
    super();
    pe(this, "width");
    pe(this, "height");
    pe(this, "pixelRatio");
    pe(this, "resizeHandler");
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
function au(r, e) {
  if (e === bp)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === qo || e === Vu) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++)
          a.push(l);
        r.setIndex(a), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === qo)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class wy extends si {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Dy(t);
    }), this.register(function(t) {
      return new ky(t);
    }), this.register(function(t) {
      return new Hy(t);
    }), this.register(function(t) {
      return new Gy(t);
    }), this.register(function(t) {
      return new Uy(t);
    }), this.register(function(t) {
      return new Ny(t);
    }), this.register(function(t) {
      return new Oy(t);
    }), this.register(function(t) {
      return new Fy(t);
    }), this.register(function(t) {
      return new Ly(t);
    }), this.register(function(t) {
      return new By(t);
    }), this.register(function(t) {
      return new Iy(t);
    }), this.register(function(t) {
      return new zy(t);
    }), this.register(function(t) {
      return new Cy(t);
    }), this.register(function(t) {
      return new Vy(t);
    }), this.register(function(t) {
      return new Wy(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = tl.extractUrlBase(e), this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new Tr(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, a, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
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
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === Rf) {
        try {
          a[ke.KHR_BINARY_GLTF] = new Xy(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(a[ke.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(l.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new sM(s, {
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
      o[u.name] = u, a[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const u = s.extensionsUsed[h], f = s.extensionsRequired || [];
        switch (u) {
          case ke.KHR_MATERIALS_UNLIT:
            a[u] = new Py();
            break;
          case ke.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new qy(s, this.dracoLoader);
            break;
          case ke.KHR_TEXTURE_TRANSFORM:
            a[u] = new Yy();
            break;
          case ke.KHR_MESH_QUANTIZATION:
            a[u] = new jy();
            break;
          default:
            f.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function Ry() {
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
const ke = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
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
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Cy {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const h = new Ee(16777215);
    l.color !== void 0 && h.fromArray(l.color);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new ry(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Af(h), c.distance = u;
        break;
      case "spot":
        c = new bf(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, ui(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class Py {
  constructor() {
    this.name = ke.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return cn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ee(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.fromArray(a), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Te));
    }
    return Promise.all(i);
  }
}
class Ly {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class Dy {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new se(o, o);
    }
    return Promise.all(s);
  }
}
class Iy {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class Uy {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new Ee(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    return a.sheenColorFactor !== void 0 && t.sheenColor.fromArray(a.sheenColorFactor), a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, Te)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class Ny {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class Oy {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ee(o[0], o[1], o[2]), Promise.all(s);
  }
}
class Fy {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class By {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ee(o[0], o[1], o[2]), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, Te)), Promise.all(s);
  }
}
class zy {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Mi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class ky {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class Hy {
  constructor(e) {
    this.parser = e, this.name = ke.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
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
class Gy {
  constructor(e) {
    this.parser = e, this.name = ke.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
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
class Vy {
  constructor(e) {
    this.name = ke.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, f = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, f, i.mode, i.filter).then(function(d) {
          return d.buffer;
        }) : a.ready.then(function() {
          const d = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(d), h, u, f, i.mode, i.filter), d;
        });
      });
    } else
      return null;
  }
}
class Wy {
  constructor(e) {
    this.name = ke.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== an.TRIANGLES && c.mode !== an.TRIANGLE_STRIP && c.mode !== an.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a)
      o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], f = c[0].count, d = [];
      for (const _ of u) {
        const g = new Ne(), m = new L(), p = new Ln(), y = new L(1, 1, 1), x = new hv(_.geometry, _.material, f);
        for (let v = 0; v < f; v++)
          l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, v), l.ROTATION && p.fromBufferAttribute(l.ROTATION, v), l.SCALE && y.fromBufferAttribute(l.SCALE, v), x.setMatrixAt(v, g.compose(m, p, y));
        for (const v in l)
          v !== "TRANSLATION" && v !== "ROTATION" && v !== "SCALE" && _.geometry.setAttribute(v, l[v]);
        Ze.prototype.copy.call(x, _), this.parser.assignFinalMaterial(x), d.push(x);
      }
      return h.isGroup ? (h.clear(), h.add(...d), h) : d[0];
    }));
  }
}
const Rf = "glTF", sr = 12, ou = { JSON: 1313821514, BIN: 5130562 };
class Xy {
  constructor(e) {
    this.name = ke.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, sr), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Rf)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - sr, s = new DataView(e, sr);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const l = s.getUint32(a, !0);
      if (a += 4, l === ou.JSON) {
        const c = new Uint8Array(e, sr + a, o);
        this.content = n.decode(c);
      } else if (l === ou.BIN) {
        const c = sr + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class qy {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ke.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const u = il[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = il[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const f = n.accessors[e.attributes[h]], d = As[f.componentType];
        c[u] = d.name, l[u] = f.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u) {
        i.decodeDracoFile(h, function(f) {
          for (const d in f.attributes) {
            const _ = f.attributes[d], g = l[d];
            g !== void 0 && (_.normalized = g);
          }
          u(f);
        }, o, c);
      });
    });
  }
}
class Yy {
  constructor() {
    this.name = ke.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class jy {
  constructor() {
    this.name = ke.KHR_MESH_QUANTIZATION;
  }
}
class Cf extends Dr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, f = u * u, d = f * u, _ = e * c, g = _ - c, m = -2 * d + 3 * f, p = d - f, y = 1 - m, x = p - f + u;
    for (let v = 0; v !== o; v++) {
      const S = a[g + v + o], T = a[g + v + l] * h, E = a[_ + v + o], C = a[_ + v] * h;
      s[v] = y * S + x * T + m * E + p * C;
    }
    return s;
  }
}
const Ky = new Ln();
class Zy extends Cf {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return Ky.fromArray(s).normalize().toArray(s), s;
  }
}
const an = {
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
}, As = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, lu = {
  9728: Mt,
  9729: Ht,
  9984: Xo,
  9985: Ou,
  9986: da,
  9987: Xi
}, cu = {
  33071: on,
  33648: xa,
  10497: Ds
}, wo = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, il = {
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
}, hi = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Jy = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Us,
  STEP: _r
}, Ro = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function $y(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new kl({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: ei
  })), r.DefaultMaterial;
}
function Ci(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function ui(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Qy(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const f = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      a.push(f);
    }
    if (i) {
      const f = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      o.push(f);
    }
    if (s) {
      const f = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], u = c[1], f = c[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = f), r.morphTargetsRelative = !0, r;
  });
}
function eM(r, e) {
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
function tM(r) {
  let e;
  const t = r.extensions && r.extensions[ke.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Co(t.attributes) : e = r.indices + ":" + Co(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + Co(r.targets[n]);
  return e;
}
function Co(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function sl(r) {
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
function nM(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const iM = new Ne();
class sM {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Ry(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Ef(this.options.manager) : this.textureLoader = new oy(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Tr(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      Ci(s, o, i), ui(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
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
    const i = n.clone(), s = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, h] of a.children.entries())
        s(h, o.children[c]);
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
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
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
      return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(tl.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
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
      const a = wo[i.type], o = As[i.componentType], l = i.normalized === !0, c = new o(i.count * a);
      return Promise.resolve(new Tt(c, a, l));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], l = wo[i.type], c = As[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, f = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === !0;
      let g, m;
      if (d && d !== u) {
        const p = Math.floor(f / d), y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let x = t.cache.get(y);
        x || (g = new c(o, p * d, i.count * d / h), x = new sv(g, d / h), t.cache.add(y, x)), m = new Cl(x, l, f % d / h, _);
      } else
        o === null ? g = new c(i.count * l) : g = new c(o, f, i.count * l), m = new Tt(g, l, _);
      if (i.sparse !== void 0) {
        const p = wo.SCALAR, y = As[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, v = i.sparse.values.byteOffset || 0, S = new y(a[1], x, i.sparse.count * p), T = new c(a[2], v, i.sparse.count * l);
        o !== null && (m = new Tt(m.array.slice(), m.itemSize, m.normalized));
        for (let E = 0, C = S.length; E < C; E++) {
          const M = S[E];
          if (m.setX(M, T[E * l]), l >= 2 && m.setY(M, T[E * l + 1]), l >= 3 && m.setZ(M, T[E * l + 2]), l >= 4 && m.setW(M, T[E * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const f = (s.samplers || {})[a.sampler] || {};
      return h.magFilter = lu[f.magFilter] || Ht, h.minFilter = lu[f.minFilter] || Xi, h.wrapS = cu[f.wrapS] || Ds, h.wrapT = cu[f.wrapT] || Ds, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function(u) {
        c = !0;
        const f = new Blob([u], { type: a.mimeType });
        return l = o.createObjectURL(f), l;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(f, d) {
        let _ = f;
        t.isImageBitmapLoader === !0 && (_ = function(g) {
          const m = new wt(g);
          m.needsUpdate = !0, f(m);
        }), t.load(tl.resolveURL(u, s.path), _, void 0, d);
      });
    }).then(function(u) {
      return c === !0 && o.revokeObjectURL(l), u.userData.mimeType = a.mimeType || nM(a.uri), u;
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
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[ke.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[ke.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = s.associations.get(a);
          a = s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
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
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new ff(), Cn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new Ll(), Cn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), s && (l.vertexColors = !0), a && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return kl;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, l = s.extensions || {}, c = [];
    if (l[ke.KHR_MATERIALS_UNLIT]) {
      const u = i[ke.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), c.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new Ee(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const f = u.baseColorFactor;
        o.color.fromArray(f), o.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, Te)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = An);
    const h = s.alphaMode || Ro.OPAQUE;
    if (h === Ro.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Ro.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== cn && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new se(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    return s.occlusionTexture !== void 0 && a !== cn && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== cn && (o.emissive = new Ee().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && a !== cn && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, Te)), Promise.all(c).then(function() {
      const u = new a(o);
      return s.name && (u.name = s.name), ui(u, s), t.associations.set(u, { materials: e }), s.extensions && Ci(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = qe.sanitizeNodeName(e || "");
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
    function s(o) {
      return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return hu(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = tM(c), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let f;
        c.extensions && c.extensions[ke.KHR_DRACO_MESH_COMPRESSION] ? f = s(c) : f = hu(new kt(), c, t), i[h] = { primitive: c, promise: f }, a.push(f);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h = a[l].material === void 0 ? $y(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let d = 0, _ = h.length; d < _; d++) {
        const g = h[d], m = a[d];
        let p;
        const y = c[d];
        if (m.mode === an.TRIANGLES || m.mode === an.TRIANGLE_STRIP || m.mode === an.TRIANGLE_FAN || m.mode === void 0)
          p = s.isSkinnedMesh === !0 ? new av(g, y) : new Lt(g, y), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), m.mode === an.TRIANGLE_STRIP ? p.geometry = au(p.geometry, Vu) : m.mode === an.TRIANGLE_FAN && (p.geometry = au(p.geometry, qo));
        else if (m.mode === an.LINES)
          p = new uf(g, y);
        else if (m.mode === an.LINE_STRIP)
          p = new Dl(g, y);
        else if (m.mode === an.LINE_LOOP)
          p = new uv(g, y);
        else if (m.mode === an.POINTS)
          p = new fv(g, y);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && eM(p, s), p.name = t.createUniqueName(s.name || "mesh_" + e), ui(p, s), m.extensions && Ci(i, p, m), t.assignFinalMaterial(p), u.push(p);
      }
      for (let d = 0, _ = u.length; d < _; d++)
        t.associations.set(u[d], {
          meshes: e,
          primitives: d
        });
      if (u.length === 1)
        return s.extensions && Ci(i, u[0], s), u[0];
      const f = new Zn();
      s.extensions && Ci(i, f, s), t.associations.set(f, { meshes: e });
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
    return n.type === "perspective" ? t = new Bt(Jp.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Da(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ui(t, n), Promise.resolve(t);
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
      const s = i.pop(), a = i, o = [], l = [];
      for (let c = 0, h = a.length; c < h; c++) {
        const u = a[c];
        if (u) {
          o.push(u);
          const f = new Ne();
          s !== null && f.fromArray(s.array, c * 16), l.push(f);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Pl(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let u = 0, f = i.channels.length; u < f; u++) {
      const d = i.channels[u], _ = i.samplers[d.sampler], g = d.target, m = g.node, p = i.parameters !== void 0 ? i.parameters[_.input] : _.input, y = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
      g.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", y)), c.push(_), h.push(g));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h)
    ]).then(function(u) {
      const f = u[0], d = u[1], _ = u[2], g = u[3], m = u[4], p = [];
      for (let y = 0, x = f.length; y < x; y++) {
        const v = f[y], S = d[y], T = _[y], E = g[y], C = m[y];
        if (v === void 0) continue;
        v.updateMatrix && (v.updateMatrix(), v.matrixAutoUpdate = !0);
        const M = n._createAnimationTracks(v, S, T, E, C);
        if (M)
          for (let A = 0; A < M.length; A++)
            p.push(M[A]);
      }
      return new Kv(s, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++)
      a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      l
    ]).then(function(c) {
      const h = c[0], u = c[1], f = c[2];
      f !== null && h.traverse(function(d) {
        d.isSkinnedMesh && d.bind(f, iM);
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
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, s.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let h;
      if (s.isBone === !0 ? h = new hf() : c.length > 1 ? h = new Zn() : c.length === 1 ? h = c[0] : h = new Ze(), h !== c[0])
        for (let u = 0, f = c.length; u < f; u++)
          h.add(c[u]);
      if (s.name && (h.userData.name = s.name, h.name = a), ui(h, s), s.extensions && Ci(n, h, s), s.matrix !== void 0) {
        const u = new Ne();
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
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Zn();
    n.name && (s.name = i.createUniqueName(n.name)), ui(s, n), n.extensions && Ci(t, s, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++)
        s.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [f, d] of i.associations)
          (f instanceof Cn || f instanceof wt) && u.set(f, d);
        return h.traverse((f) => {
          const d = i.associations.get(f);
          d != null && u.set(f, d);
        }), u;
      };
      return i.associations = c(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    hi[s.path] === hi.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid);
    }) : l.push(o);
    let c;
    switch (hi[s.path]) {
      case hi.weights:
        c = Fs;
        break;
      case hi.rotation:
        c = Yi;
        break;
      case hi.position:
      case hi.scale:
      default:
        switch (n.itemSize) {
          case 1:
            c = Fs;
            break;
          case 2:
          case 3:
            c = Sr;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? Jy[i.interpolation] : Us, u = this._getArrayFromAccessor(n);
    for (let f = 0, d = l.length; f < d; f++) {
      const _ = new c(
        l[f] + "." + hi[s.path],
        t.array,
        u,
        h
      );
      h === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), a.push(_);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = sl(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Yi ? Zy : Cf;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function rM(r, e, t) {
  const n = e.attributes, i = new ii();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new L(l[0], l[1], l[2]),
        new L(c[0], c[1], c[2])
      ), o.normalized) {
        const h = sl(As[o.componentType]);
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
    const o = new L(), l = new L();
    for (let c = 0, h = s.length; c < h; c++) {
      const u = s[c];
      if (u.POSITION !== void 0) {
        const f = t.json.accessors[u.POSITION], d = f.min, _ = f.max;
        if (d !== void 0 && _ !== void 0) {
          if (l.setX(Math.max(Math.abs(d[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(_[2]))), f.normalized) {
            const g = sl(As[f.componentType]);
            l.multiplyScalar(g);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new In();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function hu(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      r.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = il[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return ui(r, e), rM(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Qy(r, e.targets, t) : r;
  });
}
class aM extends si {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new Tr(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(o) {
      const l = s.parse(JSON.parse(o));
      t && t(l);
    }, n, i);
  }
  parse(e) {
    return new oM(e);
  }
}
class oM {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], i = lM(e, t, this.data);
    for (let s = 0, a = i.length; s < a; s++)
      n.push(...i[s].toShapes());
    return n;
  }
}
function lM(r, e, t) {
  const n = Array.from(r), i = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i, a = [];
  let o = 0, l = 0;
  for (let c = 0; c < n.length; c++) {
    const h = n[c];
    if (h === `
`)
      o = 0, l -= s;
    else {
      const u = cM(h, i, o, l, t);
      o += u.offsetX, a.push(u.path);
    }
  }
  return a;
}
function cM(r, e, t, n, i) {
  const s = i.glyphs[r] || i.glyphs["?"];
  if (!s) {
    console.error('THREE.Font: character "' + r + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  const a = new Sy();
  let o, l, c, h, u, f, d, _;
  if (s.o) {
    const g = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
    for (let m = 0, p = g.length; m < p; )
      switch (g[m++]) {
        case "m":
          o = g[m++] * e + t, l = g[m++] * e + n, a.moveTo(o, l);
          break;
        case "l":
          o = g[m++] * e + t, l = g[m++] * e + n, a.lineTo(o, l);
          break;
        case "q":
          c = g[m++] * e + t, h = g[m++] * e + n, u = g[m++] * e + t, f = g[m++] * e + n, a.quadraticCurveTo(u, f, c, h);
          break;
        case "b":
          c = g[m++] * e + t, h = g[m++] * e + n, u = g[m++] * e + t, f = g[m++] * e + n, d = g[m++] * e + t, _ = g[m++] * e + n, a.bezierCurveTo(u, f, d, _, c, h);
          break;
      }
  }
  return { offsetX: s.ha * e, path: a };
}
const Po = /* @__PURE__ */ new WeakMap();
class hM extends si {
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
    const s = new Tr(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (a) => {
      this.parse(a, t, i);
    }, n, i);
  }
  parse(e, t, n) {
    this.decodeDracoFile(e, t, null, null, Te).catch(n);
  }
  decodeDracoFile(e, t, n, i, s = Mn) {
    const a = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: s
    };
    return this.decodeGeometry(e, a).then(t);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (Po.has(e)) {
      const l = Po.get(e);
      if (l.key === n)
        return l.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let i;
    const s = this.workerNextTaskID++, a = e.byteLength, o = this._getWorker(s, a).then((l) => (i = l, new Promise((c, h) => {
      i._callbacks[s] = { resolve: c, reject: h }, i.postMessage({ type: "decode", id: s, taskConfig: t, buffer: e }, [e]);
    }))).then((l) => this._createGeometry(l.geometry));
    return o.catch(() => !0).then(() => {
      i && s && this._releaseTask(i, s);
    }), Po.set(e, {
      key: n,
      promise: o
    }), o;
  }
  _createGeometry(e) {
    const t = new kt();
    e.index && t.setIndex(new Tt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n], s = i.name, a = i.array, o = i.itemSize, l = new Tt(a, o);
      s === "color" && (this._assignVertexColorSpace(l, i.vertexColorSpace), l.normalized = !(a instanceof Float32Array)), t.setAttribute(s, l);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== Te) return;
    const n = new Ee();
    for (let i = 0, s = e.count; i < s; i++)
      n.fromBufferAttribute(e, i).convertSRGBToLinear(), e.setXYZ(i, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new Tr(this.manager);
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
      const s = uM.toString(), a = [
        "/* draco decoder */",
        i,
        "",
        "/* worker */",
        s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([a]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function(s) {
          const a = s.data;
          switch (a.type) {
            case "decode":
              i._callbacks[a.id].resolve(a);
              break;
            case "error":
              i._callbacks[a.id].reject(a);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + a.type + '"');
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
function uM() {
  let r, e;
  onmessage = function(a) {
    const o = a.data;
    switch (o.type) {
      case "init":
        r = o.decoderConfig, e = new Promise(function(h) {
          r.onModuleLoaded = function(u) {
            h({ draco: u });
          }, DracoDecoderModule(r);
        });
        break;
      case "decode":
        const l = o.buffer, c = o.taskConfig;
        e.then((h) => {
          const u = h.draco, f = new u.Decoder();
          try {
            const d = t(u, f, new Int8Array(l), c), _ = d.attributes.map((g) => g.array.buffer);
            d.index && _.push(d.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: d }, _);
          } catch (d) {
            console.error(d), self.postMessage({ type: "error", id: o.id, error: d.message });
          } finally {
            u.destroy(f);
          }
        });
        break;
    }
  };
  function t(a, o, l, c) {
    const h = c.attributeIDs, u = c.attributeTypes;
    let f, d;
    const _ = o.GetEncodedGeometryType(l);
    if (_ === a.TRIANGULAR_MESH)
      f = new a.Mesh(), d = o.DecodeArrayToMesh(l, l.byteLength, f);
    else if (_ === a.POINT_CLOUD)
      f = new a.PointCloud(), d = o.DecodeArrayToPointCloud(l, l.byteLength, f);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!d.ok() || f.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
    const g = { index: null, attributes: [] };
    for (const m in h) {
      const p = self[u[m]];
      let y, x;
      if (c.useUniqueIDs)
        x = h[m], y = o.GetAttributeByUniqueId(f, x);
      else {
        if (x = o.GetAttributeId(f, a[h[m]]), x === -1) continue;
        y = o.GetAttribute(f, x);
      }
      const v = i(a, o, f, m, p, y);
      m === "color" && (v.vertexColorSpace = c.vertexColorSpace), g.attributes.push(v);
    }
    return _ === a.TRIANGULAR_MESH && (g.index = n(a, o, f)), a.destroy(f), g;
  }
  function n(a, o, l) {
    const h = l.num_faces() * 3, u = h * 4, f = a._malloc(u);
    o.GetTrianglesUInt32Array(l, u, f);
    const d = new Uint32Array(a.HEAPF32.buffer, f, h).slice();
    return a._free(f), { array: d, itemSize: 1 };
  }
  function i(a, o, l, c, h, u) {
    const f = u.num_components(), _ = l.num_points() * f, g = _ * h.BYTES_PER_ELEMENT, m = s(a, h), p = a._malloc(g);
    o.GetAttributeDataArrayForAllPoints(l, u, m, g, p);
    const y = new h(a.HEAPF32.buffer, p, _).slice();
    return a._free(p), {
      name: c,
      array: y,
      itemSize: f
    };
  }
  function s(a, o) {
    switch (o) {
      case Float32Array:
        return a.DT_FLOAT32;
      case Int8Array:
        return a.DT_INT8;
      case Int16Array:
        return a.DT_INT16;
      case Int32Array:
        return a.DT_INT32;
      case Uint8Array:
        return a.DT_UINT8;
      case Uint16Array:
        return a.DT_UINT16;
      case Uint32Array:
        return a.DT_UINT32;
    }
  }
}
class fM extends Na {
  constructor(t, n) {
    super();
    pe(this, "sources");
    pe(this, "items");
    pe(this, "toLoad");
    pe(this, "loaded");
    pe(this, "loaders");
    this.sources = t;
    const i = new hM();
    i.setDecoderPath("draco/"), this.items = {}, this.toLoad = this.sources.length, this.loaded = 0, this.loaders = {
      gltfLoader: new wy(n),
      textureLoader: new Ef(n),
      cubeTextureLoader: new ey(n),
      fontLoader: new aM(n)
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
function Xn(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Pf(r, e) {
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
var tn = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, zs = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Wl, Dt, Qe, hn = 1e8, Je = 1 / hn, rl = Math.PI * 2, dM = rl / 4, pM = 0, Lf = Math.sqrt, mM = Math.cos, gM = Math.sin, bt = function(e) {
  return typeof e == "string";
}, at = function(e) {
  return typeof e == "function";
}, ti = function(e) {
  return typeof e == "number";
}, Xl = function(e) {
  return typeof e > "u";
}, Dn = function(e) {
  return typeof e == "object";
}, Vt = function(e) {
  return e !== !1;
}, ql = function() {
  return typeof window < "u";
}, fa = function(e) {
  return at(e) || bt(e);
}, Df = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, It = Array.isArray, al = /(?:-?\.?\d|\.)+/gi, If = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ss = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Lo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Uf = /[+-]=-?[.\d]+/, Nf = /[^,'"\[\]\s]+/gi, _M = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, tt, En, ol, Yl, nn = {}, Sa = {}, Of, Ff = function(e) {
  return (Sa = ji(e, nn)) && Yt;
}, jl = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Er = function(e, t) {
  return !t && console.warn(e);
}, Bf = function(e, t) {
  return e && (nn[e] = t) && Sa && (Sa[e] = t) || nn;
}, br = function() {
  return 0;
}, xM = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ma = {
  suppressEvents: !0,
  kill: !1
}, vM = {
  suppressEvents: !0
}, Kl = {}, _i = [], ll = {}, zf, Jt = {}, Do = {}, uu = 30, ga = [], Zl = "", Jl = function(e) {
  var t = e[0], n, i;
  if (Dn(t) || at(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
    for (i = ga.length; i-- && !ga[i].targetTest(t); )
      ;
    n = ga[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new cd(e[i], n))) || e.splice(i, 1);
  return e;
}, Hi = function(e) {
  return e._gsap || Jl(un(e))[0]._gsap;
}, kf = function(e, t, n) {
  return (n = e[t]) && at(n) ? e[t]() : Xl(n) && e.getAttribute && e.getAttribute(t) || n;
}, Wt = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, lt = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, St = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ws = function(e, t) {
  var n = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
}, yM = function(e, t) {
  for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, Ta = function() {
  var e = _i.length, t = _i.slice(0), n, i;
  for (ll = {}, _i.length = 0, n = 0; n < e; n++)
    i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Hf = function(e, t, n, i) {
  _i.length && !Dt && Ta(), e.render(t, n, Dt && t < 0 && (e._initted || e._startAt)), _i.length && !Dt && Ta();
}, Gf = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Nf).length < 2 ? t : bt(e) ? e.trim() : e;
}, Vf = function(e) {
  return e;
}, dn = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, MM = function(e) {
  return function(t, n) {
    for (var i in n)
      i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
  };
}, ji = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, fu = function r(e, t) {
  for (var n in t)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = Dn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
  return e;
}, Ea = function(e, t) {
  var n = {}, i;
  for (i in e)
    i in t || (n[i] = e[i]);
  return n;
}, pr = function(e) {
  var t = e.parent || tt, n = e.keyframes ? MM(It(e.keyframes)) : dn;
  if (Vt(e.inherit))
    for (; t; )
      n(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, SM = function(e, t) {
  for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; )
    ;
  return n < 0;
}, Wf = function(e, t, n, i, s) {
  var a = e[i], o;
  if (s)
    for (o = t[s]; a && a[s] > o; )
      a = a._prev;
  return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = a, t.parent = t._dp = e, t;
}, Oa = function(e, t, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var s = t._prev, a = t._next;
  s ? s._next = a : e[n] === t && (e[n] = a), a ? a._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null;
}, vi = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Gi = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var n = e; n; )
      n._dirty = 1, n = n.parent;
  return e;
}, TM = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, cl = function(e, t, n, i) {
  return e._startAt && (Dt ? e._startAt.revert(ma) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, EM = function r(e) {
  return !e || e._ts && r(e.parent);
}, du = function(e) {
  return e._repeat ? ks(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, ks = function(e, t) {
  var n = Math.floor(e /= t);
  return e && n === e ? n - 1 : n;
}, ba = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Fa = function(e) {
  return e._end = St(e._start + (e._tDur / Math.abs(e._ts || e._rts || Je) || 0));
}, Ba = function(e, t) {
  var n = e._dp;
  return n && n.smoothChildTiming && e._ts && (e._start = St(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Fa(e), n._dirty || Gi(n, e)), e;
}, Xf = function(e, t) {
  var n;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = ba(e.rawTime(), t), (!t._dur || Ur(0, t.totalDuration(), n) - t._tTime > Je) && t.render(n, !0)), Gi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (n = e; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    e._zTime = -Je;
  }
}, wn = function(e, t, n, i) {
  return t.parent && vi(t), t._start = St((ti(n) ? n : n || e !== tt ? rn(e, n, t) : e._time) + t._delay), t._end = St(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Wf(e, t, "_first", "_last", e._sort ? "_start" : 0), hl(t) || (e._recent = t), i || Xf(e, t), e._ts < 0 && Ba(e, e._tTime), e;
}, qf = function(e, t) {
  return (nn.ScrollTrigger || jl("scrollTrigger", t)) && nn.ScrollTrigger.create(t, e);
}, Yf = function(e, t, n, i, s) {
  if (Ql(e, t, s), !e._initted)
    return 1;
  if (!n && e._pt && !Dt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && zf !== $t.frame)
    return _i.push(e), e._lazy = [s, i], 1;
}, bM = function r(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
}, hl = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, AM = function(e, t, n, i) {
  var s = e.ratio, a = t < 0 || !t && (!e._start && bM(e) && !(!e._initted && hl(e)) || (e._ts < 0 || e._dp._ts < 0) && !hl(e)) ? 0 : 1, o = e._rDelay, l = 0, c, h, u;
  if (o && e._repeat && (l = Ur(0, e._tDur, t), h = ks(l, o), e._yoyo && h & 1 && (a = 1 - a), h !== ks(e._tTime, o) && (s = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== s || Dt || i || e._zTime === Je || !t && e._zTime) {
    if (!e._initted && Yf(e, t, i, n, l))
      return;
    for (u = e._zTime, e._zTime = t || (n ? Je : 0), n || (n = t && !u), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(a, c.d), c = c._next;
    t < 0 && cl(e, t, n, !0), e._onUpdate && !n && en(e, "onUpdate"), l && e._repeat && !n && e.parent && en(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && vi(e, 1), !n && !Dt && (en(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, wM = function(e, t, n) {
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
}, Hs = function(e, t, n, i) {
  var s = e._repeat, a = St(t) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= a / e._dur), e._dur = a, e._tDur = s ? s < 0 ? 1e10 : St(a * (s + 1) + e._rDelay * s) : a, o > 0 && !i && Ba(e, e._tTime = e._tDur * o), e.parent && Fa(e), n || Gi(e.parent, e), e;
}, pu = function(e) {
  return e instanceof zt ? Gi(e) : Hs(e, e._dur);
}, RM = {
  _start: 0,
  endTime: br,
  totalDuration: br
}, rn = function r(e, t, n) {
  var i = e.labels, s = e._recent || RM, a = e.duration() >= hn ? s.endTime(!1) : e._dur, o, l, c;
  return bt(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", o = t.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (o < 0 ? s : n).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = a), i[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), c && n && (l = l / 100 * (It(n) ? n[0] : n).totalDuration()), o > 1 ? r(e, t.substr(0, o - 1), n) + l : a + l)) : t == null ? a : +t;
}, mr = function(e, t, n) {
  var i = ti(t[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), a = t[s], o, l;
  if (i && (a.duration = t[1]), a.parent = n, e) {
    for (o = a, l = n; l && !("immediateRender" in o); )
      o = l.vars.defaults || {}, l = Vt(l.vars.inherit) && l.parent;
    a.immediateRender = Vt(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1];
  }
  return new ut(t[0], a, t[s + 1]);
}, Si = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Ur = function(e, t, n) {
  return n < e ? e : n > t ? t : n;
}, Pt = function(e, t) {
  return !bt(e) || !(t = _M.exec(e)) ? "" : t[1];
}, CM = function(e, t, n) {
  return Si(n, function(i) {
    return Ur(e, t, i);
  });
}, ul = [].slice, jf = function(e, t) {
  return e && Dn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Dn(e[0])) && !e.nodeType && e !== En;
}, PM = function(e, t, n) {
  return n === void 0 && (n = []), e.forEach(function(i) {
    var s;
    return bt(i) && !t || jf(i, 1) ? (s = n).push.apply(s, un(i)) : n.push(i);
  }) || n;
}, un = function(e, t, n) {
  return Qe && !t && Qe.selector ? Qe.selector(e) : bt(e) && !n && (ol || !Gs()) ? ul.call((t || Yl).querySelectorAll(e), 0) : It(e) ? PM(e, n) : jf(e) ? ul.call(e, 0) : e ? [e] : [];
}, fl = function(e) {
  return e = un(e)[0] || Er("Invalid scope") || {}, function(t) {
    var n = e.current || e.nativeElement || e;
    return un(t, n.querySelectorAll ? n : n === e ? Er("Invalid scope") || Yl.createElement("div") : e);
  };
}, Kf = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Zf = function(e) {
  if (at(e))
    return e;
  var t = Dn(e) ? e : {
    each: e
  }, n = Vi(t.ease), i = t.from || 0, s = parseFloat(t.base) || 0, a = {}, o = i > 0 && i < 1, l = isNaN(i) || o, c = t.axis, h = i, u = i;
  return bt(i) ? h = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && l && (h = i[0], u = i[1]), function(f, d, _) {
    var g = (_ || t).length, m = a[g], p, y, x, v, S, T, E, C, M;
    if (!m) {
      if (M = t.grid === "auto" ? 0 : (t.grid || [1, hn])[1], !M) {
        for (E = -hn; E < (E = _[M++].getBoundingClientRect().left) && M < g; )
          ;
        M < g && M--;
      }
      for (m = a[g] = [], p = l ? Math.min(M, g) * h - 0.5 : i % M, y = M === hn ? 0 : l ? g * u / M - 0.5 : i / M | 0, E = 0, C = hn, T = 0; T < g; T++)
        x = T % M - p, v = y - (T / M | 0), m[T] = S = c ? Math.abs(c === "y" ? v : x) : Lf(x * x + v * v), S > E && (E = S), S < C && (C = S);
      i === "random" && Kf(m), m.max = E - C, m.min = C, m.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (M > g ? g - 1 : c ? c === "y" ? g / M : M : Math.max(M, g / M)) || 0) * (i === "edges" ? -1 : 1), m.b = g < 0 ? s - g : s, m.u = Pt(t.amount || t.each) || 0, n = n && g < 0 ? ad(n) : n;
    }
    return g = (m[f] - m.min) / m.max || 0, St(m.b + (n ? n(g) : g) * m.v) + m.u;
  };
}, dl = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(n) {
    var i = St(Math.round(parseFloat(n) / e) * e * t);
    return (i - i % 1) / t + (ti(n) ? 0 : Pt(n));
  };
}, Jf = function(e, t) {
  var n = It(e), i, s;
  return !n && Dn(e) && (i = n = e.radius || hn, e.values ? (e = un(e.values), (s = !ti(e[0])) && (i *= i)) : e = dl(e.increment)), Si(t, n ? at(e) ? function(a) {
    return s = e(a), Math.abs(s - a) <= i ? s : a;
  } : function(a) {
    for (var o = parseFloat(s ? a.x : a), l = parseFloat(s ? a.y : 0), c = hn, h = 0, u = e.length, f, d; u--; )
      s ? (f = e[u].x - o, d = e[u].y - l, f = f * f + d * d) : f = Math.abs(e[u] - o), f < c && (c = f, h = u);
    return h = !i || c <= i ? e[h] : a, s || h === a || ti(a) ? h : h + Pt(a);
  } : dl(e));
}, $f = function(e, t, n, i) {
  return Si(It(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
    return It(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
  });
}, LM = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    return t.reduce(function(s, a) {
      return a(s);
    }, i);
  };
}, DM = function(e, t) {
  return function(n) {
    return e(parseFloat(n)) + (t || Pt(n));
  };
}, IM = function(e, t, n) {
  return ed(e, t, 0, 1, n);
}, Qf = function(e, t, n) {
  return Si(n, function(i) {
    return e[~~t(i)];
  });
}, UM = function r(e, t, n) {
  var i = t - e;
  return It(e) ? Qf(e, r(0, e.length), t) : Si(n, function(s) {
    return (i + (s - e) % i) % i + e;
  });
}, NM = function r(e, t, n) {
  var i = t - e, s = i * 2;
  return It(e) ? Qf(e, r(0, e.length - 1), t) : Si(n, function(a) {
    return a = (s + (a - e) % s) % s || 0, e + (a > i ? s - a : a);
  });
}, Ar = function(e) {
  for (var t = 0, n = "", i, s, a, o; ~(i = e.indexOf("random(", t)); )
    a = e.indexOf(")", i), o = e.charAt(i + 7) === "[", s = e.substr(i + 7, a - i - 7).match(o ? Nf : al), n += e.substr(t, i - t) + $f(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5), t = a + 1;
  return n + e.substr(t, e.length - t);
}, ed = function(e, t, n, i, s) {
  var a = t - e, o = i - n;
  return Si(s, function(l) {
    return n + ((l - e) / a * o || 0);
  });
}, OM = function r(e, t, n, i) {
  var s = isNaN(e + t) ? 0 : function(d) {
    return (1 - d) * e + d * t;
  };
  if (!s) {
    var a = bt(e), o = {}, l, c, h, u, f;
    if (n === !0 && (i = 1) && (n = null), a)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (It(e) && !It(t)) {
      for (h = [], u = e.length, f = u - 2, c = 1; c < u; c++)
        h.push(r(e[c - 1], e[c]));
      u--, s = function(_) {
        _ *= u;
        var g = Math.min(f, ~~_);
        return h[g](_ - g);
      }, n = t;
    } else i || (e = ji(It(e) ? [] : {}, e));
    if (!h) {
      for (l in t)
        $l.call(o, e, l, "get", t[l]);
      s = function(_) {
        return nc(_, o) || (a ? e.p : e);
      };
    }
  }
  return Si(n, s);
}, mu = function(e, t, n) {
  var i = e.labels, s = hn, a, o, l;
  for (a in i)
    o = i[a] - t, o < 0 == !!n && o && s > (o = Math.abs(o)) && (l = a, s = o);
  return l;
}, en = function(e, t, n) {
  var i = e.vars, s = i[t], a = Qe, o = e._ctx, l, c, h;
  if (s)
    return l = i[t + "Params"], c = i.callbackScope || e, n && _i.length && Ta(), o && (Qe = o), h = l ? s.apply(c, l) : s.call(c), Qe = a, h;
}, or = function(e) {
  return vi(e), e.scrollTrigger && e.scrollTrigger.kill(!!Dt), e.progress() < 1 && en(e, "onInterrupt"), e;
}, Ts, td = [], nd = function(e) {
  if (e)
    if (e = !e.name && e.default || e, ql() || e.headless) {
      var t = e.name, n = at(e), i = t && !n && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: br,
        render: nc,
        add: $l,
        kill: $M,
        modifier: JM,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: tc,
        aliases: {},
        register: 0
      };
      if (Gs(), e !== i) {
        if (Jt[t])
          return;
        dn(i, dn(Ea(e, s), a)), ji(i.prototype, ji(s, Ea(e, a))), Jt[i.prop = t] = i, e.targetTest && (ga.push(i), Kl[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Bf(t, i), e.register && e.register(Yt, i, Xt);
    } else
      td.push(e);
}, Ye = 255, lr = {
  aqua: [0, Ye, Ye],
  lime: [0, Ye, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Ye],
  navy: [0, 0, 128],
  white: [Ye, Ye, Ye],
  olive: [128, 128, 0],
  yellow: [Ye, Ye, 0],
  orange: [Ye, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Ye, 0, 0],
  pink: [Ye, 192, 203],
  cyan: [0, Ye, Ye],
  transparent: [Ye, Ye, Ye, 0]
}, Io = function(e, t, n) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Ye + 0.5 | 0;
}, id = function(e, t, n) {
  var i = e ? ti(e) ? [e >> 16, e >> 8 & Ye, e & Ye] : 0 : lr.black, s, a, o, l, c, h, u, f, d, _;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), lr[e])
      i = lr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + s + s + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Ye, i & Ye, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Ye, e & Ye];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = _ = e.match(al), !t)
        l = +i[0] % 360 / 360, c = +i[1] / 100, h = +i[2] / 100, a = h <= 0.5 ? h * (c + 1) : h + c - h * c, s = h * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = Io(l + 1 / 3, s, a), i[1] = Io(l, s, a), i[2] = Io(l - 1 / 3, s, a);
      else if (~e.indexOf("="))
        return i = e.match(If), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(al) || lr.transparent;
    i = i.map(Number);
  }
  return t && !_ && (s = i[0] / Ye, a = i[1] / Ye, o = i[2] / Ye, u = Math.max(s, a, o), f = Math.min(s, a, o), h = (u + f) / 2, u === f ? l = c = 0 : (d = u - f, c = h > 0.5 ? d / (2 - u - f) : d / (u + f), l = u === s ? (a - o) / d + (a < o ? 6 : 0) : u === a ? (o - s) / d + 2 : (s - a) / d + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(h * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, sd = function(e) {
  var t = [], n = [], i = -1;
  return e.split(xi).forEach(function(s) {
    var a = s.match(Ss) || [];
    t.push.apply(t, a), n.push(i += a.length + 1);
  }), t.c = n, t;
}, gu = function(e, t, n) {
  var i = "", s = (e + i).match(xi), a = t ? "hsla(" : "rgba(", o = 0, l, c, h, u;
  if (!s)
    return e;
  if (s = s.map(function(f) {
    return (f = id(f, t, 1)) && a + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), n && (h = sd(e), l = n.c, l.join(i) !== h.c.join(i)))
    for (c = e.replace(xi, "1").split(Ss), u = c.length - 1; o < u; o++)
      i += c[o] + (~l.indexOf(o) ? s.shift() || a + "0,0,0,0)" : (h.length ? h : s.length ? s : n).shift());
  if (!c)
    for (c = e.split(xi), u = c.length - 1; o < u; o++)
      i += c[o] + s[o];
  return i + c[u];
}, xi = function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in lr)
    r += "|" + e + "\\b";
  return new RegExp(r + ")", "gi");
}(), FM = /hsl[a]?\(/, rd = function(e) {
  var t = e.join(" "), n;
  if (xi.lastIndex = 0, xi.test(t))
    return n = FM.test(t), e[1] = gu(e[1], n), e[0] = gu(e[0], n, sd(e[1])), !0;
}, wr, $t = function() {
  var r = Date.now, e = 500, t = 33, n = r(), i = n, s = 1e3 / 240, a = s, o = [], l, c, h, u, f, d, _ = function g(m) {
    var p = r() - i, y = m === !0, x, v, S, T;
    if ((p > e || p < 0) && (n += p - t), i += p, S = i - n, x = S - a, (x > 0 || y) && (T = ++u.frame, f = S - u.time * 1e3, u.time = S = S / 1e3, a += x + (x >= s ? 4 : s - x), v = 1), y || (l = c(g)), v)
      for (d = 0; d < o.length; d++)
        o[d](S, f, T, m);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(m) {
      return f / (1e3 / (m || 60));
    },
    wake: function() {
      Of && (!ol && ql() && (En = ol = window, Yl = En.document || {}, nn.gsap = Yt, (En.gsapVersions || (En.gsapVersions = [])).push(Yt.version), Ff(Sa || En.GreenSockGlobals || !En.gsap && En || {}), td.forEach(nd)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), c = h || function(m) {
        return setTimeout(m, a - u.time * 1e3 + 1 | 0);
      }, wr = 1, _(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(l), wr = 0, c = br;
    },
    lagSmoothing: function(m, p) {
      e = m || 1 / 0, t = Math.min(p || 33, e);
    },
    fps: function(m) {
      s = 1e3 / (m || 240), a = u.time * 1e3 + s;
    },
    add: function(m, p, y) {
      var x = p ? function(v, S, T, E) {
        m(v, S, T, E), u.remove(x);
      } : m;
      return u.remove(m), o[y ? "unshift" : "push"](x), Gs(), x;
    },
    remove: function(m, p) {
      ~(p = o.indexOf(m)) && o.splice(p, 1) && d >= p && d--;
    },
    _listeners: o
  }, u;
}(), Gs = function() {
  return !wr && $t.wake();
}, He = {}, BM = /^[\d.\-M][\d.\-,\s]/, zM = /["']/g, kM = function(e) {
  for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, a = n.length, o, l, c; s < a; s++)
    l = n[s], o = s !== a - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, o), t[i] = isNaN(c) ? c.replace(zM, "").trim() : +c, i = l.substr(o + 1).trim();
  return t;
}, HM = function(e) {
  var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
}, GM = function(e) {
  var t = (e + "").split("("), n = He[t[0]];
  return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [kM(t[1])] : HM(e).split(",").map(Gf)) : He._CE && BM.test(e) ? He._CE("", e) : n;
}, ad = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, od = function r(e, t) {
  for (var n = e._first, i; n; )
    n instanceof zt ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
}, Vi = function(e, t) {
  return e && (at(e) ? e : He[e] || GM(e)) || t;
}, Ji = function(e, t, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: n,
    easeInOut: i
  }, a;
  return Wt(e, function(o) {
    He[o] = nn[o] = s, He[a = o.toLowerCase()] = n;
    for (var l in s)
      He[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = He[o + "." + l] = s[l];
  }), s;
}, ld = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Uo = function r(e, t, n) {
  var i = t >= 1 ? t : 1, s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), a = s / rl * (Math.asin(1 / i) || 0), o = function(h) {
    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * gM((h - a) * s) + 1;
  }, l = e === "out" ? o : e === "in" ? function(c) {
    return 1 - o(1 - c);
  } : ld(o);
  return s = rl / s, l.config = function(c, h) {
    return r(e, c, h);
  }, l;
}, No = function r(e, t) {
  t === void 0 && (t = 1.70158);
  var n = function(a) {
    return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
  }, i = e === "out" ? n : e === "in" ? function(s) {
    return 1 - n(1 - s);
  } : ld(n);
  return i.config = function(s) {
    return r(e, s);
  }, i;
};
Wt("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  Ji(r + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, t);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
  });
});
He.Linear.easeNone = He.none = He.Linear.easeIn;
Ji("Elastic", Uo("in"), Uo("out"), Uo());
(function(r, e) {
  var t = 1 / e, n = 2 * t, i = 2.5 * t, s = function(o) {
    return o < t ? r * o * o : o < n ? r * Math.pow(o - 1.5 / e, 2) + 0.75 : o < i ? r * (o -= 2.25 / e) * o + 0.9375 : r * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  Ji("Bounce", function(a) {
    return 1 - s(1 - a);
  }, s);
})(7.5625, 2.75);
Ji("Expo", function(r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
Ji("Circ", function(r) {
  return -(Lf(1 - r * r) - 1);
});
Ji("Sine", function(r) {
  return r === 1 ? 1 : -mM(r * dM) + 1;
});
Ji("Back", No("in"), No("out"), No());
He.SteppedEase = He.steps = nn.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e, i = e + (t ? 0 : 1), s = t ? 1 : 0, a = 1 - Je;
    return function(o) {
      return ((i * Ur(0, a, o) | 0) + s) * n;
    };
  }
};
zs.ease = He["quad.out"];
Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return Zl += r + "," + r + "Params,";
});
var cd = function(e, t) {
  this.id = pM++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : kf, this.set = t ? t.getSetter : tc;
}, Rr = /* @__PURE__ */ function() {
  function r(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Hs(this, +t.duration, 1, 1), this.data = t.data, Qe && (this._ctx = Qe, Qe.data.push(this)), wr || $t.wake();
  }
  var e = r.prototype;
  return e.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, e.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Hs(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(n, i) {
    if (Gs(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Ba(this, n), !s._dp || s.parent || Xf(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && wn(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Je || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Hf(this, n, i)), this;
  }, e.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + du(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, e.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + du(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(n, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? ks(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(n, i) {
    if (!arguments.length)
      return this._rts === -Je ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var s = this.parent && this._ts ? ba(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -Je ? 0 : this._rts, this.totalTime(Ur(-Math.abs(this._delay), this._tDur, s), i !== !1), Fa(this), TM(this);
  }, e.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Gs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Je && (this._tTime -= Je)))), this) : this._ps;
  }, e.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && wn(i, this, n - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(n) {
    return this._start + (Vt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ba(i.rawTime(n), this) : this._tTime : this._tTime;
  }, e.revert = function(n) {
    n === void 0 && (n = vM);
    var i = Dt;
    return Dt = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), Dt = i, this;
  }, e.globalTime = function(n) {
    for (var i = this, s = arguments.length ? n : i.rawTime(); i; )
      s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : s;
  }, e.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, pu(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, pu(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, e.seek = function(n, i) {
    return this.totalTime(rn(this, n), Vt(i));
  }, e.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, Vt(i));
  }, e.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Je : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Je, this;
  }, e.isActive = function() {
    var n = this.parent || this._dp, i = this._start, s;
    return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - Je);
  }, e.eventCallback = function(n, i, s) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[n] = i, s && (a[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete a[n], this) : a[n];
  }, e.then = function(n) {
    var i = this;
    return new Promise(function(s) {
      var a = at(n) ? n : Vf, o = function() {
        var c = i.then;
        i.then = null, at(a) && (a = a(i)) && (a.then || a === i) && (i.then = c), s(a), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, e.kill = function() {
    or(this);
  }, r;
}();
dn(Rr.prototype, {
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
  _zTime: -Je,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var zt = /* @__PURE__ */ function(r) {
  Pf(e, r);
  function e(n, i) {
    var s;
    return n === void 0 && (n = {}), s = r.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = Vt(n.sortChildren), tt && wn(n.parent || tt, Xn(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), n.scrollTrigger && qf(Xn(s), n.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(i, s, a) {
    return mr(0, arguments, this), this;
  }, t.from = function(i, s, a) {
    return mr(1, arguments, this), this;
  }, t.fromTo = function(i, s, a, o) {
    return mr(2, arguments, this), this;
  }, t.set = function(i, s, a) {
    return s.duration = 0, s.parent = this, pr(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new ut(i, s, rn(this, a), 1), this;
  }, t.call = function(i, s, a) {
    return wn(this, ut.delayedCall(0, i, s), a);
  }, t.staggerTo = function(i, s, a, o, l, c, h) {
    return a.duration = s, a.stagger = a.stagger || o, a.onComplete = c, a.onCompleteParams = h, a.parent = this, new ut(i, a, rn(this, l)), this;
  }, t.staggerFrom = function(i, s, a, o, l, c, h) {
    return a.runBackwards = 1, pr(a).immediateRender = Vt(a.immediateRender), this.staggerTo(i, s, a, o, l, c, h);
  }, t.staggerFromTo = function(i, s, a, o, l, c, h, u) {
    return o.startAt = a, pr(o).immediateRender = Vt(o.immediateRender), this.staggerTo(i, s, o, l, c, h, u);
  }, t.render = function(i, s, a) {
    var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, h = i <= 0 ? 0 : St(i), u = this._zTime < 0 != i < 0 && (this._initted || !c), f, d, _, g, m, p, y, x, v, S, T, E;
    if (this !== tt && h > l && i >= 0 && (h = l), h !== this._tTime || a || u) {
      if (o !== this._time && c && (h += this._time - o, i += this._time - o), f = h, v = this._start, x = this._ts, p = !x, u && (c || (o = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, m = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, s, a);
        if (f = St(h % m), h === l ? (g = this._repeat, f = c) : (g = ~~(h / m), g && g === h / m && (f = c, g--), f > c && (f = c)), S = ks(this._tTime, m), !o && this._tTime && S !== g && this._tTime - S * m - this._dur <= 0 && (S = g), T && g & 1 && (f = c - f, E = 1), g !== S && !this._lock) {
          var C = T && S & 1, M = C === (T && g & 1);
          if (g < S && (C = !C), o = C ? 0 : h % c ? c : h, this._lock = 1, this.render(o || (E ? 0 : St(g * m)), s, !c)._lock = 0, this._tTime = h, !s && this.parent && en(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1), o && o !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, M && (this._lock = 2, o = C ? c : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !p)
            return this;
          od(this, E);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = wM(this, St(o), St(f)), y && (h -= f - (f = y._start))), this._tTime = h, this._time = f, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && f && !s && !g && (en(this, "onStart"), this._tTime !== h))
        return this;
      if (f >= o && i >= 0)
        for (d = this._first; d; ) {
          if (_ = d._next, (d._act || f >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, s, a);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, a), f !== this._time || !this._ts && !p) {
              y = 0, _ && (h += this._zTime = -Je);
              break;
            }
          }
          d = _;
        }
      else {
        d = this._last;
        for (var A = i < 0 ? i : f; d; ) {
          if (_ = d._prev, (d._act || A <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, s, a);
            if (d.render(d._ts > 0 ? (A - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (A - d._start) * d._ts, s, a || Dt && (d._initted || d._startAt)), f !== this._time || !this._ts && !p) {
              y = 0, _ && (h += this._zTime = A ? -Je : Je);
              break;
            }
          }
          d = _;
        }
      }
      if (y && !s && (this.pause(), y.render(f >= o ? 0 : -Je)._zTime = f >= o ? 1 : -1, this._ts))
        return this._start = v, Fa(this), this.render(i, s, a);
      this._onUpdate && !s && en(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && o) && (v === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (h === l && this._ts > 0 || !h && this._ts < 0) && vi(this, 1), !s && !(i < 0 && !o) && (h || o || !l) && (en(this, h === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, s) {
    var a = this;
    if (ti(s) || (s = rn(this, s, i)), !(i instanceof Rr)) {
      if (It(i))
        return i.forEach(function(o) {
          return a.add(o, s);
        }), this;
      if (bt(i))
        return this.addLabel(i, s);
      if (at(i))
        i = ut.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? wn(this, i, s) : this;
  }, t.getChildren = function(i, s, a, o) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), a === void 0 && (a = !0), o === void 0 && (o = -hn);
    for (var l = [], c = this._first; c; )
      c._start >= o && (c instanceof ut ? s && l.push(c) : (a && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, a)))), c = c._next;
    return l;
  }, t.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
      if (s[a].vars.id === i)
        return s[a];
  }, t.remove = function(i) {
    return bt(i) ? this.removeLabel(i) : at(i) ? this.killTweensOf(i) : (Oa(this, i), i === this._recent && (this._recent = this._last), Gi(this));
  }, t.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = St($t.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, s) {
    return this.labels[i] = rn(this, s), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, s, a) {
    var o = ut.delayedCall(0, s || br, a);
    return o.data = "isPause", this._hasPause = 1, wn(this, o, rn(this, i));
  }, t.removePause = function(i) {
    var s = this._first;
    for (i = rn(this, i); s; )
      s._start === i && s.data === "isPause" && vi(s), s = s._next;
  }, t.killTweensOf = function(i, s, a) {
    for (var o = this.getTweensOf(i, a), l = o.length; l--; )
      di !== o[l] && o[l].kill(i, s);
    return this;
  }, t.getTweensOf = function(i, s) {
    for (var a = [], o = un(i), l = this._first, c = ti(s), h; l; )
      l instanceof ut ? yM(l._targets, o) && (c ? (!di || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && a.push(l) : (h = l.getTweensOf(o, s)).length && a.push.apply(a, h), l = l._next;
    return a;
  }, t.tweenTo = function(i, s) {
    s = s || {};
    var a = this, o = rn(a, i), l = s, c = l.startAt, h = l.onStart, u = l.onStartParams, f = l.immediateRender, d, _ = ut.to(a, dn({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: s.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale()) || Je,
      onStart: function() {
        if (a.pause(), !d) {
          var m = s.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale());
          _._dur !== m && Hs(_, m, 0, 1).render(_._time, !0, !0), d = 1;
        }
        h && h.apply(_, u || []);
      }
    }, s));
    return f ? _.render(0) : _;
  }, t.tweenFromTo = function(i, s, a) {
    return this.tweenTo(s, dn({
      startAt: {
        time: rn(this, i)
      }
    }, a));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), mu(this, rn(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), mu(this, rn(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Je);
  }, t.shiftChildren = function(i, s, a) {
    a === void 0 && (a = 0);
    for (var o = this._first, l = this.labels, c; o; )
      o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (s)
      for (c in l)
        l[c] >= a && (l[c] += i);
    return Gi(this);
  }, t.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(i), s = s._next;
    return r.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, a; s; )
      a = s._next, this.remove(s), s = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Gi(this);
  }, t.totalDuration = function(i) {
    var s = 0, a = this, o = a._last, l = hn, c, h, u;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (u = a.parent; o; )
        c = o._prev, o._dirty && o.totalDuration(), h = o._start, h > l && a._sort && o._ts && !a._lock ? (a._lock = 1, wn(a, o, h - o._delay, 1)._lock = 0) : l = h, h < 0 && o._ts && (s -= h, (!u && !a._dp || u && u.smoothChildTiming) && (a._start += h / a._ts, a._time -= h, a._tTime -= h), a.shiftChildren(-h, !1, -1 / 0), l = 0), o._end > s && o._ts && (s = o._end), o = c;
      Hs(a, a === tt && a._time > s ? a._time : s, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, e.updateRoot = function(i) {
    if (tt._ts && (Hf(tt, ba(i, tt)), zf = $t.frame), $t.frame >= uu) {
      uu += tn.autoSleep || 120;
      var s = tt._first;
      if ((!s || !s._ts) && tn.autoSleep && $t._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || $t.sleep();
      }
    }
  }, e;
}(Rr);
dn(zt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var VM = function(e, t, n, i, s, a, o) {
  var l = new Xt(this._pt, e, t, 0, 1, md, null, s), c = 0, h = 0, u, f, d, _, g, m, p, y;
  for (l.b = n, l.e = i, n += "", i += "", (p = ~i.indexOf("random(")) && (i = Ar(i)), a && (y = [n, i], a(y, e, t), n = y[0], i = y[1]), f = n.match(Lo) || []; u = Lo.exec(i); )
    _ = u[0], g = i.substring(c, u.index), d ? d = (d + 1) % 5 : g.substr(-5) === "rgba(" && (d = 1), _ !== f[h++] && (m = parseFloat(f[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: g || h === 1 ? g : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: _.charAt(1) === "=" ? ws(m, _) - m : parseFloat(_) - m,
      m: d && d < 4 ? Math.round : 0
    }, c = Lo.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = o, (Uf.test(i) || p) && (l.e = 0), this._pt = l, l;
}, $l = function(e, t, n, i, s, a, o, l, c, h) {
  at(i) && (i = i(s || 0, e, a));
  var u = e[t], f = n !== "get" ? n : at(u) ? c ? e[t.indexOf("set") || !at(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : u, d = at(u) ? c ? jM : dd : ec, _;
  if (bt(i) && (~i.indexOf("random(") && (i = Ar(i)), i.charAt(1) === "=" && (_ = ws(f, i) + (Pt(f) || 0), (_ || _ === 0) && (i = _))), !h || f !== i || pl)
    return !isNaN(f * i) && i !== "" ? (_ = new Xt(this._pt, e, t, +f || 0, i - (f || 0), typeof u == "boolean" ? ZM : pd, 0, d), c && (_.fp = c), o && _.modifier(o, this, e), this._pt = _) : (!u && !(t in e) && jl(t, i), VM.call(this, e, t, f, i, d, l || tn.stringFilter, c));
}, WM = function(e, t, n, i, s) {
  if (at(e) && (e = gr(e, s, t, n, i)), !Dn(e) || e.style && e.nodeType || It(e) || Df(e))
    return bt(e) ? gr(e, s, t, n, i) : e;
  var a = {}, o;
  for (o in e)
    a[o] = gr(e[o], s, t, n, i);
  return a;
}, hd = function(e, t, n, i, s, a) {
  var o, l, c, h;
  if (Jt[e] && (o = new Jt[e]()).init(s, o.rawVars ? t[e] : WM(t[e], i, s, a, n), n, i, a) !== !1 && (n._pt = l = new Xt(n._pt, s, e, 0, 1, o.render, o, 0, o.priority), n !== Ts))
    for (c = n._ptLookup[n._targets.indexOf(s)], h = o._props.length; h--; )
      c[o._props[h]] = l;
  return o;
}, di, pl, Ql = function r(e, t, n) {
  var i = e.vars, s = i.ease, a = i.startAt, o = i.immediateRender, l = i.lazy, c = i.onUpdate, h = i.runBackwards, u = i.yoyoEase, f = i.keyframes, d = i.autoRevert, _ = e._dur, g = e._startAt, m = e._targets, p = e.parent, y = p && p.data === "nested" ? p.vars.targets : m, x = e._overwrite === "auto" && !Wl, v = e.timeline, S, T, E, C, M, A, W, X, I, F, z, Z, k;
  if (v && (!f || !s) && (s = "none"), e._ease = Vi(s, zs.ease), e._yEase = u ? ad(Vi(u === !0 ? s : u, zs.ease)) : 0, u && e._yoyo && !e._repeat && (u = e._yEase, e._yEase = e._ease, e._ease = u), e._from = !v && !!i.runBackwards, !v || f && !i.stagger) {
    if (X = m[0] ? Hi(m[0]).harness : 0, Z = X && i[X.prop], S = Ea(i, Kl), g && (g._zTime < 0 && g.progress(1), t < 0 && h && o && !d ? g.render(-1, !0) : g.revert(h && _ ? ma : xM), g._lazy = 0), a) {
      if (vi(e._startAt = ut.set(m, dn({
        data: "isStart",
        overwrite: !1,
        parent: p,
        immediateRender: !0,
        lazy: !g && Vt(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return en(e, "onUpdate");
        },
        stagger: 0
      }, a))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Dt || !o && !d) && e._startAt.revert(ma), o && _ && t <= 0 && n <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (h && _ && !g) {
      if (t && (o = !1), E = dn({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !g && Vt(l),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: p
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, S), Z && (E[X.prop] = Z), vi(e._startAt = ut.set(m, E)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Dt ? e._startAt.revert(ma) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        r(e._startAt, Je, Je);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = _ && Vt(l) || l && !_, T = 0; T < m.length; T++) {
      if (M = m[T], W = M._gsap || Jl(m)[T]._gsap, e._ptLookup[T] = F = {}, ll[W.id] && _i.length && Ta(), z = y === m ? T : y.indexOf(M), X && (I = new X()).init(M, Z || S, e, z, y) !== !1 && (e._pt = C = new Xt(e._pt, M, I.name, 0, 1, I.render, I, 0, I.priority), I._props.forEach(function(Y) {
        F[Y] = C;
      }), I.priority && (A = 1)), !X || Z)
        for (E in S)
          Jt[E] && (I = hd(E, S, e, z, M, y)) ? I.priority && (A = 1) : F[E] = C = $l.call(e, M, E, "get", S[E], z, y, 0, i.stringFilter);
      e._op && e._op[T] && e.kill(M, e._op[T]), x && e._pt && (di = e, tt.killTweensOf(M, F, e.globalTime(t)), k = !e.parent, di = 0), e._pt && l && (ll[W.id] = 1);
    }
    A && gd(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !k, f && t <= 0 && v.render(hn, !0, !0);
}, XM = function(e, t, n, i, s, a, o, l) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], h, u, f, d;
  if (!c)
    for (c = e._ptCache[t] = [], f = e._ptLookup, d = e._targets.length; d--; ) {
      if (h = f[d][t], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== t && h.fp !== t; )
          h = h._next;
      if (!h)
        return pl = 1, e.vars[t] = "+=0", Ql(e, o), pl = 0, l ? Er(t + " not eligible for reset") : 1;
      c.push(h);
    }
  for (d = c.length; d--; )
    u = c[d], h = u._pt || u, h.s = (i || i === 0) && !s ? i : h.s + (i || 0) + a * h.c, h.c = n - h.s, u.e && (u.e = lt(n) + Pt(u.e)), u.b && (u.b = h.s + Pt(u.b));
}, qM = function(e, t) {
  var n = e[0] ? Hi(e[0]).harness : 0, i = n && n.aliases, s, a, o, l;
  if (!i)
    return t;
  s = ji({}, t);
  for (a in i)
    if (a in s)
      for (l = i[a].split(","), o = l.length; o--; )
        s[l[o]] = s[a];
  return s;
}, YM = function(e, t, n, i) {
  var s = t.ease || i || "power1.inOut", a, o;
  if (It(t))
    o = n[e] || (n[e] = []), t.forEach(function(l, c) {
      return o.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (a in t)
      o = n[a] || (n[a] = []), a === "ease" || o.push({
        t: parseFloat(e),
        v: t[a],
        e: s
      });
}, gr = function(e, t, n, i, s) {
  return at(e) ? e.call(t, n, i, s) : bt(e) && ~e.indexOf("random(") ? Ar(e) : e;
}, ud = Zl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", fd = {};
Wt(ud + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return fd[r] = 1;
});
var ut = /* @__PURE__ */ function(r) {
  Pf(e, r);
  function e(n, i, s, a) {
    var o;
    typeof i == "number" && (s.duration = i, i = s, s = null), o = r.call(this, a ? i : pr(i)) || this;
    var l = o.vars, c = l.duration, h = l.delay, u = l.immediateRender, f = l.stagger, d = l.overwrite, _ = l.keyframes, g = l.defaults, m = l.scrollTrigger, p = l.yoyoEase, y = i.parent || tt, x = (It(n) || Df(n) ? ti(n[0]) : "length" in i) ? [n] : un(n), v, S, T, E, C, M, A, W;
    if (o._targets = x.length ? Jl(x) : Er("GSAP target " + n + " not found. https://gsap.com", !tn.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, _ || f || fa(c) || fa(h)) {
      if (i = o.vars, v = o.timeline = new zt({
        data: "nested",
        defaults: g || {},
        targets: y && y.data === "nested" ? y.vars.targets : x
      }), v.kill(), v.parent = v._dp = Xn(o), v._start = 0, f || fa(c) || fa(h)) {
        if (E = x.length, A = f && Zf(f), Dn(f))
          for (C in f)
            ~ud.indexOf(C) && (W || (W = {}), W[C] = f[C]);
        for (S = 0; S < E; S++)
          T = Ea(i, fd), T.stagger = 0, p && (T.yoyoEase = p), W && ji(T, W), M = x[S], T.duration = +gr(c, Xn(o), S, M, x), T.delay = (+gr(h, Xn(o), S, M, x) || 0) - o._delay, !f && E === 1 && T.delay && (o._delay = h = T.delay, o._start += h, T.delay = 0), v.to(M, T, A ? A(S, M, x) : 0), v._ease = He.none;
        v.duration() ? c = h = 0 : o.timeline = 0;
      } else if (_) {
        pr(dn(v.vars.defaults, {
          ease: "none"
        })), v._ease = Vi(_.ease || i.ease || "none");
        var X = 0, I, F, z;
        if (It(_))
          _.forEach(function(Z) {
            return v.to(x, Z, ">");
          }), v.duration();
        else {
          T = {};
          for (C in _)
            C === "ease" || C === "easeEach" || YM(C, _[C], T, _.easeEach);
          for (C in T)
            for (I = T[C].sort(function(Z, k) {
              return Z.t - k.t;
            }), X = 0, S = 0; S < I.length; S++)
              F = I[S], z = {
                ease: F.e,
                duration: (F.t - (S ? I[S - 1].t : 0)) / 100 * c
              }, z[C] = F.v, v.to(x, z, X), X += z.duration;
          v.duration() < c && v.to({}, {
            duration: c - v.duration()
          });
        }
      }
      c || o.duration(c = v.duration());
    } else
      o.timeline = 0;
    return d === !0 && !Wl && (di = Xn(o), tt.killTweensOf(x), di = 0), wn(y, Xn(o), s), i.reversed && o.reverse(), i.paused && o.paused(!0), (u || !c && !_ && o._start === St(y._time) && Vt(u) && EM(Xn(o)) && y.data !== "nested") && (o._tTime = -Je, o.render(Math.max(0, -h) || 0)), m && qf(Xn(o), m), o;
  }
  var t = e.prototype;
  return t.render = function(i, s, a) {
    var o = this._time, l = this._tDur, c = this._dur, h = i < 0, u = i > l - Je && !h ? l : i < Je ? 0 : i, f, d, _, g, m, p, y, x, v;
    if (!c)
      AM(this, i, s, a);
    else if (u !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
      if (f = u, x = this.timeline, this._repeat) {
        if (g = c + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(g * 100 + i, s, a);
        if (f = St(u % g), u === l ? (_ = this._repeat, f = c) : (_ = ~~(u / g), _ && _ === St(u / g) && (f = c, _--), f > c && (f = c)), p = this._yoyo && _ & 1, p && (v = this._yEase, f = c - f), m = ks(this._tTime, g), f === o && !a && this._initted && _ === m)
          return this._tTime = u, this;
        _ !== m && (x && this._yEase && od(x, p), this.vars.repeatRefresh && !p && !this._lock && this._time !== g && this._initted && (this._lock = a = 1, this.render(St(g * _), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Yf(this, h ? i : f, a, s, u))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && _ !== m))
          return this;
        if (c !== this._dur)
          return this.render(i, s, a);
      }
      if (this._tTime = u, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (v || this._ease)(f / c), this._from && (this.ratio = y = 1 - y), f && !o && !s && !_ && (en(this, "onStart"), this._tTime !== u))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      x && x.render(i < 0 ? i : x._dur * x._ease(f / this._dur), s, a) || this._startAt && (this._zTime = i), this._onUpdate && !s && (h && cl(this, i, s, a), en(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !s && this.parent && en(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (h && !this._onUpdate && cl(this, i, !0, !0), (i || !c) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && vi(this, 1), !s && !(h && !o) && (u || o || p) && (en(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, s, a, o, l) {
    wr || $t.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || Ql(this, c), h = this._ease(c / this._dur), XM(this, i, s, a, o, h, c, l) ? this.resetTo(i, s, a, o, 1) : (Ba(this, 0), this.parent || Wf(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? or(this) : this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, di && di.vars.overwrite !== !0)._first || or(this), this.parent && a !== this.timeline.totalDuration() && Hs(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, l = i ? un(i) : o, c = this._ptLookup, h = this._pt, u, f, d, _, g, m, p;
    if ((!s || s === "all") && SM(o, l))
      return s === "all" && (this._pt = 0), or(this);
    for (u = this._op = this._op || [], s !== "all" && (bt(s) && (g = {}, Wt(s, function(y) {
      return g[y] = 1;
    }), s = g), s = qM(o, s)), p = o.length; p--; )
      if (~l.indexOf(o[p])) {
        f = c[p], s === "all" ? (u[p] = s, _ = f, d = {}) : (d = u[p] = u[p] || {}, _ = s);
        for (g in _)
          m = f && f[g], m && ((!("kill" in m.d) || m.d.kill(g) === !0) && Oa(this, m, "_pt"), delete f[g]), d !== "all" && (d[g] = 1);
      }
    return this._initted && !this._pt && h && or(this), this;
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2]);
  }, e.from = function(i, s) {
    return mr(1, arguments);
  }, e.delayedCall = function(i, s, a, o) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, e.fromTo = function(i, s, a) {
    return mr(2, arguments);
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s);
  }, e.killTweensOf = function(i, s, a) {
    return tt.killTweensOf(i, s, a);
  }, e;
}(Rr);
dn(ut.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Wt("staggerTo,staggerFrom,staggerFromTo", function(r) {
  ut[r] = function() {
    var e = new zt(), t = ul.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var ec = function(e, t, n) {
  return e[t] = n;
}, dd = function(e, t, n) {
  return e[t](n);
}, jM = function(e, t, n, i) {
  return e[t](i.fp, n);
}, KM = function(e, t, n) {
  return e.setAttribute(t, n);
}, tc = function(e, t) {
  return at(e[t]) ? dd : Xl(e[t]) && e.setAttribute ? KM : ec;
}, pd = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, ZM = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, md = function(e, t) {
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
}, nc = function(e, t) {
  for (var n = t._pt; n; )
    n.r(e, n.d), n = n._next;
}, JM = function(e, t, n, i) {
  for (var s = this._pt, a; s; )
    a = s._next, s.p === i && s.modifier(e, t, n), s = a;
}, $M = function(e) {
  for (var t = this._pt, n, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Oa(this, t, "_pt") : t.dep || (n = 1), t = i;
  return !n;
}, QM = function(e, t, n, i) {
  i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
}, gd = function(e) {
  for (var t = e._pt, n, i, s, a; t; ) {
    for (n = t._next, i = s; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : a) ? t._prev._next = t : s = t, (t._next = i) ? i._prev = t : a = t, t = n;
  }
  e._pt = s;
}, Xt = /* @__PURE__ */ function() {
  function r(t, n, i, s, a, o, l, c, h) {
    this.t = n, this.s = s, this.c = a, this.p = i, this.r = o || pd, this.d = l || this, this.set = c || ec, this.pr = h || 0, this._next = t, t && (t._prev = this);
  }
  var e = r.prototype;
  return e.modifier = function(n, i, s) {
    this.mSet = this.mSet || this.set, this.set = QM, this.m = n, this.mt = s, this.tween = i;
  }, r;
}();
Wt(Zl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return Kl[r] = 1;
});
nn.TweenMax = nn.TweenLite = ut;
nn.TimelineLite = nn.TimelineMax = zt;
tt = new zt({
  sortChildren: !1,
  defaults: zs,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
tn.stringFilter = rd;
var Wi = [], _a = {}, eS = [], _u = 0, tS = 0, Oo = function(e) {
  return (_a[e] || eS).map(function(t) {
    return t();
  });
}, ml = function() {
  var e = Date.now(), t = [];
  e - _u > 2 && (Oo("matchMediaInit"), Wi.forEach(function(n) {
    var i = n.queries, s = n.conditions, a, o, l, c;
    for (o in i)
      a = En.matchMedia(i[o]).matches, a && (l = 1), a !== s[o] && (s[o] = a, c = 1);
    c && (n.revert(), l && t.push(n));
  }), Oo("matchMediaRevert"), t.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), _u = e, Oo("matchMedia"));
}, _d = /* @__PURE__ */ function() {
  function r(t, n) {
    this.selector = n && fl(n), this.data = [], this._r = [], this.isReverted = !1, this.id = tS++, t && this.add(t);
  }
  var e = r.prototype;
  return e.add = function(n, i, s) {
    at(n) && (s = i, i = n, n = at);
    var a = this, o = function() {
      var c = Qe, h = a.selector, u;
      return c && c !== a && c.data.push(a), s && (a.selector = fl(s)), Qe = a, u = i.apply(a, arguments), at(u) && a._r.push(u), Qe = c, a.selector = h, a.isReverted = !1, u;
    };
    return a.last = o, n === at ? o(a, function(l) {
      return a.add(null, l);
    }) : n ? a[n] = o : o;
  }, e.ignore = function(n) {
    var i = Qe;
    Qe = null, n(this), Qe = i;
  }, e.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof ut && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(n, i) {
    var s = this;
    if (n ? function() {
      for (var o = s.getTweens(), l = s.data.length, c; l--; )
        c = s.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(h) {
          return o.splice(o.indexOf(h), 1);
        }));
      for (o.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, u) {
        return u.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(n);
      }), l = s.data.length; l--; )
        c = s.data[l], c instanceof zt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof ut) && c.revert && c.revert(n);
      s._r.forEach(function(h) {
        return h(n, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var a = Wi.length; a--; )
        Wi[a].id === this.id && Wi.splice(a, 1);
  }, e.revert = function(n) {
    this.kill(n || {});
  }, r;
}(), nS = /* @__PURE__ */ function() {
  function r(t) {
    this.contexts = [], this.scope = t, Qe && Qe.data.push(this);
  }
  var e = r.prototype;
  return e.add = function(n, i, s) {
    Dn(n) || (n = {
      matches: n
    });
    var a = new _d(0, s || this.scope), o = a.conditions = {}, l, c, h;
    Qe && !a.selector && (a.selector = Qe.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = n;
    for (c in n)
      c === "all" ? h = 1 : (l = En.matchMedia(n[c]), l && (Wi.indexOf(a) < 0 && Wi.push(a), (o[c] = l.matches) && (h = 1), l.addListener ? l.addListener(ml) : l.addEventListener("change", ml)));
    return h && i(a, function(u) {
      return a.add(null, u);
    }), this;
  }, e.revert = function(n) {
    this.kill(n || {});
  }, e.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, r;
}(), Aa = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t.forEach(function(i) {
      return nd(i);
    });
  },
  timeline: function(e) {
    return new zt(e);
  },
  getTweensOf: function(e, t) {
    return tt.getTweensOf(e, t);
  },
  getProperty: function(e, t, n, i) {
    bt(e) && (e = un(e)[0]);
    var s = Hi(e || {}).get, a = n ? Vf : Gf;
    return n === "native" && (n = ""), e && (t ? a((Jt[t] && Jt[t].get || s)(e, t, n, i)) : function(o, l, c) {
      return a((Jt[o] && Jt[o].get || s)(e, o, l, c));
    });
  },
  quickSetter: function(e, t, n) {
    if (e = un(e), e.length > 1) {
      var i = e.map(function(h) {
        return Yt.quickSetter(h, t, n);
      }), s = i.length;
      return function(h) {
        for (var u = s; u--; )
          i[u](h);
      };
    }
    e = e[0] || {};
    var a = Jt[t], o = Hi(e), l = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(h) {
      var u = new a();
      Ts._pt = 0, u.init(e, n ? h + n : h, Ts, 0, [e]), u.render(1, u), Ts._pt && nc(1, Ts);
    } : o.set(e, l);
    return a ? c : function(h) {
      return c(e, l, n ? h + n : h, o, 1);
    };
  },
  quickTo: function(e, t, n) {
    var i, s = Yt.to(e, ji((i = {}, i[t] = "+=0.1", i.paused = !0, i), n || {})), a = function(l, c, h) {
      return s.resetTo(t, l, c, h);
    };
    return a.tween = s, a;
  },
  isTweening: function(e) {
    return tt.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Vi(e.ease, zs.ease)), fu(zs, e || {});
  },
  config: function(e) {
    return fu(tn, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, n = e.effect, i = e.plugins, s = e.defaults, a = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !Jt[o] && !nn[o] && Er(t + " effect requires " + o + " plugin.");
    }), Do[t] = function(o, l, c) {
      return n(un(o), dn(l || {}, s), c);
    }, a && (zt.prototype[t] = function(o, l, c) {
      return this.add(Do[t](o, Dn(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    He[e] = Vi(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Vi(e, t) : He;
  },
  getById: function(e) {
    return tt.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var n = new zt(e), i, s;
    for (n.smoothChildTiming = Vt(e.smoothChildTiming), tt.remove(n), n._dp = 0, n._time = n._tTime = tt._time, i = tt._first; i; )
      s = i._next, (t || !(!i._dur && i instanceof ut && i.vars.onComplete === i._targets[0])) && wn(n, i, i._start - i._delay), i = s;
    return wn(tt, n, 0), n;
  },
  context: function(e, t) {
    return e ? new _d(e, t) : Qe;
  },
  matchMedia: function(e) {
    return new nS(e);
  },
  matchMediaRefresh: function() {
    return Wi.forEach(function(e) {
      var t = e.conditions, n, i;
      for (i in t)
        t[i] && (t[i] = !1, n = 1);
      n && e.revert();
    }) || ml();
  },
  addEventListener: function(e, t) {
    var n = _a[e] || (_a[e] = []);
    ~n.indexOf(t) || n.push(t);
  },
  removeEventListener: function(e, t) {
    var n = _a[e], i = n && n.indexOf(t);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: UM,
    wrapYoyo: NM,
    distribute: Zf,
    random: $f,
    snap: Jf,
    normalize: IM,
    getUnit: Pt,
    clamp: CM,
    splitColor: id,
    toArray: un,
    selector: fl,
    mapRange: ed,
    pipe: LM,
    unitize: DM,
    interpolate: OM,
    shuffle: Kf
  },
  install: Ff,
  effects: Do,
  ticker: $t,
  updateRoot: zt.updateRoot,
  plugins: Jt,
  globalTimeline: tt,
  core: {
    PropTween: Xt,
    globals: Bf,
    Tween: ut,
    Timeline: zt,
    Animation: Rr,
    getCache: Hi,
    _removeLinkedListItem: Oa,
    reverting: function() {
      return Dt;
    },
    context: function(e) {
      return e && Qe && (Qe.data.push(e), e._ctx = Qe), Qe;
    },
    suppressOverwrites: function(e) {
      return Wl = e;
    }
  }
};
Wt("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return Aa[r] = ut[r];
});
$t.add(zt.updateRoot);
Ts = Aa.to({}, {
  duration: 0
});
var iS = function(e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
    n = n._next;
  return n;
}, sS = function(e, t) {
  var n = e._targets, i, s, a;
  for (i in t)
    for (s = n.length; s--; )
      a = e._ptLookup[s][i], a && (a = a.d) && (a._pt && (a = iS(a, i)), a && a.modifier && a.modifier(t[i], e, n[s], i));
}, Fo = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, a) {
      a._onInit = function(o) {
        var l, c;
        if (bt(s) && (l = {}, Wt(s, function(h) {
          return l[h] = 1;
        }), s = l), t) {
          l = {};
          for (c in s)
            l[c] = t(s[c]);
          s = l;
        }
        sS(o, s);
      };
    }
  };
}, Yt = Aa.registerPlugin({
  name: "attr",
  init: function(e, t, n, i, s) {
    var a, o, l;
    this.tween = n;
    for (a in t)
      l = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (l || 0) + "", t[a], i, s, 0, 0, a), o.op = a, o.b = l, this._props.push(a);
  },
  render: function(e, t) {
    for (var n = t._pt; n; )
      Dt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var n = t.length; n--; )
      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
  }
}, Fo("roundProps", dl), Fo("modifiers"), Fo("snap", Jf)) || Aa;
ut.version = zt.version = Yt.version = "3.12.5";
Of = 1;
ql() && Gs();
He.Power0;
He.Power1;
He.Power2;
He.Power3;
He.Power4;
He.Linear;
He.Quad;
He.Cubic;
He.Quart;
He.Quint;
He.Strong;
He.Elastic;
He.Back;
He.SteppedEase;
He.Bounce;
He.Sine;
He.Expo;
He.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var xu, pi, Rs, ic, Oi, vu, sc, rS = function() {
  return typeof window < "u";
}, ni = {}, Ui = 180 / Math.PI, Cs = Math.PI / 180, xs = Math.atan2, yu = 1e8, rc = /([A-Z])/g, aS = /(left|right|width|margin|padding|x)/i, oS = /[\s,\(]\S/, Rn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, gl = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, lS = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, cS = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, hS = function(e, t) {
  var n = t.s + t.c * e;
  t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
}, xd = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, vd = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, uS = function(e, t, n) {
  return e.style[t] = n;
}, fS = function(e, t, n) {
  return e.style.setProperty(t, n);
}, dS = function(e, t, n) {
  return e._gsap[t] = n;
}, pS = function(e, t, n) {
  return e._gsap.scaleX = e._gsap.scaleY = n;
}, mS = function(e, t, n, i, s) {
  var a = e._gsap;
  a.scaleX = a.scaleY = n, a.renderTransform(s, a);
}, gS = function(e, t, n, i, s) {
  var a = e._gsap;
  a[t] = n, a.renderTransform(s, a);
}, it = "transform", qt = it + "Origin", _S = function r(e, t) {
  var n = this, i = this.target, s = i.style, a = i._gsap;
  if (e in ni && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Rn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return n.tfm[o] = qn(i, o);
      }) : this.tfm[e] = a.x ? a[e] : qn(i, e), e === qt && (this.tfm.zOrigin = a.zOrigin);
    else
      return Rn.transform.split(",").forEach(function(o) {
        return r.call(n, o, t);
      });
    if (this.props.indexOf(it) >= 0)
      return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(qt, t, "")), e = it;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, yd = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, xS = function() {
  var e = this.props, t = this.target, n = t.style, i = t._gsap, s, a;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? t[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(rc, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = sc(), (!s || !s.isStart) && !n[it] && (yd(n), i.zOrigin && n[qt] && (n[qt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Md = function(e, t) {
  var n = {
    target: e,
    props: [],
    revert: xS,
    save: _S
  };
  return e._gsap || Yt.core.getCache(e), t && t.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, Sd, _l = function(e, t) {
  var n = pi.createElementNS ? pi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : pi.createElement(e);
  return n && n.style ? n : pi.createElement(e);
}, Pn = function r(e, t, n) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(rc, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, Vs(t) || t, 1) || "";
}, Mu = "O,Moz,ms,Ms,Webkit".split(","), Vs = function(e, t, n) {
  var i = t || Oi, s = i.style, a = 5;
  if (e in s && !n)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(Mu[a] + e in s); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Mu[a] : "") + e;
}, xl = function() {
  rS() && window.document && (xu = window, pi = xu.document, Rs = pi.documentElement, Oi = _l("div") || {
    style: {}
  }, _l("div"), it = Vs(it), qt = it + "Origin", Oi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Sd = !!Vs("perspective"), sc = Yt.core.reverting, ic = 1);
}, Bo = function r(e) {
  var t = _l("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, s = this.style.cssText, a;
  if (Rs.appendChild(t), t.appendChild(this), this.style.display = "block", e)
    try {
      a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r;
    } catch {
    }
  else this._gsapBBox && (a = this._gsapBBox());
  return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), Rs.removeChild(t), this.style.cssText = s, a;
}, Su = function(e, t) {
  for (var n = t.length; n--; )
    if (e.hasAttribute(t[n]))
      return e.getAttribute(t[n]);
}, Td = function(e) {
  var t;
  try {
    t = e.getBBox();
  } catch {
    t = Bo.call(e, !0);
  }
  return t && (t.width || t.height) || e.getBBox === Bo || (t = Bo.call(e, !0)), t && !t.width && !t.x && !t.y ? {
    x: +Su(e, ["x", "cx", "x1"]) || 0,
    y: +Su(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Ed = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Td(e));
}, Ki = function(e, t) {
  if (t) {
    var n = e.style, i;
    t in ni && t !== qt && (t = it), n.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(i === "--" ? t : t.replace(rc, "-$1").toLowerCase())) : n.removeAttribute(t);
  }
}, mi = function(e, t, n, i, s, a) {
  var o = new Xt(e._pt, t, n, 0, 1, a ? vd : xd);
  return e._pt = o, o.b = i, o.e = s, e._props.push(n), o;
}, Tu = {
  deg: 1,
  rad: 1,
  turn: 1
}, vS = {
  grid: 1,
  flex: 1
}, yi = function r(e, t, n, i) {
  var s = parseFloat(n) || 0, a = (n + "").trim().substr((s + "").length) || "px", o = Oi.style, l = aS.test(t), c = e.tagName.toLowerCase() === "svg", h = (c ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, f = i === "px", d = i === "%", _, g, m, p;
  if (i === a || !s || Tu[i] || Tu[a])
    return s;
  if (a !== "px" && !f && (s = r(e, t, n, "px")), p = e.getCTM && Ed(e), (d || a === "%") && (ni[t] || ~t.indexOf("adius")))
    return _ = p ? e.getBBox()[l ? "width" : "height"] : e[h], lt(d ? s / _ * u : s / 100 * _);
  if (o[l ? "width" : "height"] = u + (f ? a : i), g = ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, p && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === pi || !g.appendChild) && (g = pi.body), m = g._gsap, m && d && m.width && l && m.time === $t.time && !m.uncache)
    return lt(s / m.width * u);
  if (d && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = u + i, _ = e[h], y ? e.style[t] = y : Ki(e, t);
  } else
    (d || a === "%") && !vS[Pn(g, "display")] && (o.position = Pn(e, "position")), g === e && (o.position = "static"), g.appendChild(Oi), _ = Oi[h], g.removeChild(Oi), o.position = "absolute";
  return l && d && (m = Hi(g), m.time = $t.time, m.width = g[h]), lt(f ? _ * s / u : _ && s ? u / _ * s : 0);
}, qn = function(e, t, n, i) {
  var s;
  return ic || xl(), t in Rn && t !== "transform" && (t = Rn[t], ~t.indexOf(",") && (t = t.split(",")[0])), ni[t] && t !== "transform" ? (s = Pr(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Ra(Pn(e, qt)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = wa[t] && wa[t](e, t, n) || Pn(e, t) || kf(e, t) || (t === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? yi(e, t, s, n) + n : s;
}, yS = function(e, t, n, i) {
  if (!n || n === "none") {
    var s = Vs(t, e, 1), a = s && Pn(e, s, 1);
    a && a !== n ? (t = s, n = a) : t === "borderColor" && (n = Pn(e, "borderTopColor"));
  }
  var o = new Xt(this._pt, e.style, t, 0, 1, md), l = 0, c = 0, h, u, f, d, _, g, m, p, y, x, v, S;
  if (o.b = n, o.e = i, n += "", i += "", i === "auto" && (g = e.style[t], e.style[t] = i, i = Pn(e, t) || i, g ? e.style[t] = g : Ki(e, t)), h = [n, i], rd(h), n = h[0], i = h[1], f = n.match(Ss) || [], S = i.match(Ss) || [], S.length) {
    for (; u = Ss.exec(i); )
      m = u[0], y = i.substring(l, u.index), _ ? _ = (_ + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1), m !== (g = f[c++] || "") && (d = parseFloat(g) || 0, v = g.substr((d + "").length), m.charAt(1) === "=" && (m = ws(d, m) + v), p = parseFloat(m), x = m.substr((p + "").length), l = Ss.lastIndex - x.length, x || (x = x || tn.units[t] || v, l === i.length && (i += x, o.e += x)), v !== x && (d = yi(e, t, g, x) || 0), o._pt = {
        _next: o._pt,
        p: y || c === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: p - d,
        m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    o.r = t === "display" && i === "none" ? vd : xd;
  return Uf.test(i) && (o.e = 0), this._pt = o, o;
}, Eu = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, MS = function(e) {
  var t = e.split(" "), n = t[0], i = t[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = Eu[n] || n, t[1] = Eu[i] || i, t.join(" ");
}, SS = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var n = t.t, i = n.style, s = t.u, a = n._gsap, o, l, c;
    if (s === "all" || s === !0)
      i.cssText = "", l = 1;
    else
      for (s = s.split(","), c = s.length; --c > -1; )
        o = s[c], ni[o] && (l = 1, o = o === "transformOrigin" ? qt : it), Ki(n, o);
    l && (Ki(n, it), a && (a.svg && n.removeAttribute("transform"), Pr(n, 1), a.uncache = 1, yd(i)));
  }
}, wa = {
  clearProps: function(e, t, n, i, s) {
    if (s.data !== "isFromStart") {
      var a = e._pt = new Xt(e._pt, t, n, 0, 0, SS);
      return a.u = i, a.pr = -10, a.tween = s, e._props.push(n), 1;
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
}, Cr = [1, 0, 0, 1, 0, 0], bd = {}, Ad = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, bu = function(e) {
  var t = Pn(e, it);
  return Ad(t) ? Cr : t.substr(7).match(If).map(lt);
}, ac = function(e, t) {
  var n = e._gsap || Hi(e), i = e.style, s = bu(e), a, o, l, c;
  return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Cr : s) : (s === Cr && !e.offsetParent && e !== Rs && !n.svg && (l = i.display, i.display = "block", a = e.parentNode, (!a || !e.offsetParent) && (c = 1, o = e.nextElementSibling, Rs.appendChild(e)), s = bu(e), l ? i.display = l : Ki(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Rs.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, vl = function(e, t, n, i, s, a) {
  var o = e._gsap, l = s || ac(e, !0), c = o.xOrigin || 0, h = o.yOrigin || 0, u = o.xOffset || 0, f = o.yOffset || 0, d = l[0], _ = l[1], g = l[2], m = l[3], p = l[4], y = l[5], x = t.split(" "), v = parseFloat(x[0]) || 0, S = parseFloat(x[1]) || 0, T, E, C, M;
  n ? l !== Cr && (E = d * m - _ * g) && (C = v * (m / E) + S * (-g / E) + (g * y - m * p) / E, M = v * (-_ / E) + S * (d / E) - (d * y - _ * p) / E, v = C, S = M) : (T = Td(e), v = T.x + (~x[0].indexOf("%") ? v / 100 * T.width : v), S = T.y + (~(x[1] || x[0]).indexOf("%") ? S / 100 * T.height : S)), i || i !== !1 && o.smooth ? (p = v - c, y = S - h, o.xOffset = u + (p * d + y * g) - p, o.yOffset = f + (p * _ + y * m) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = S, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!n, e.style[qt] = "0px 0px", a && (mi(a, o, "xOrigin", c, v), mi(a, o, "yOrigin", h, S), mi(a, o, "xOffset", u, o.xOffset), mi(a, o, "yOffset", f, o.yOffset)), e.setAttribute("data-svg-origin", v + " " + S);
}, Pr = function(e, t) {
  var n = e._gsap || new cd(e);
  if ("x" in n && !t && !n.uncache)
    return n;
  var i = e.style, s = n.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(e), c = Pn(e, qt) || "0", h, u, f, d, _, g, m, p, y, x, v, S, T, E, C, M, A, W, X, I, F, z, Z, k, Y, Q, J, B, G, le, ie, ae;
  return h = u = f = g = m = p = y = x = v = 0, d = _ = 1, n.svg = !!(e.getCTM && Ed(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[it] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[it] !== "none" ? l[it] : "")), i.scale = i.rotate = i.translate = "none"), E = ac(e, n.svg), n.svg && (n.uncache ? (Y = e.getBBox(), c = n.xOrigin - Y.x + "px " + (n.yOrigin - Y.y) + "px", k = "") : k = !t && e.getAttribute("data-svg-origin"), vl(e, k || c, !!k || n.originIsAbsolute, n.smooth !== !1, E)), S = n.xOrigin || 0, T = n.yOrigin || 0, E !== Cr && (W = E[0], X = E[1], I = E[2], F = E[3], h = z = E[4], u = Z = E[5], E.length === 6 ? (d = Math.sqrt(W * W + X * X), _ = Math.sqrt(F * F + I * I), g = W || X ? xs(X, W) * Ui : 0, y = I || F ? xs(I, F) * Ui + g : 0, y && (_ *= Math.abs(Math.cos(y * Cs))), n.svg && (h -= S - (S * W + T * I), u -= T - (S * X + T * F))) : (ae = E[6], le = E[7], J = E[8], B = E[9], G = E[10], ie = E[11], h = E[12], u = E[13], f = E[14], C = xs(ae, G), m = C * Ui, C && (M = Math.cos(-C), A = Math.sin(-C), k = z * M + J * A, Y = Z * M + B * A, Q = ae * M + G * A, J = z * -A + J * M, B = Z * -A + B * M, G = ae * -A + G * M, ie = le * -A + ie * M, z = k, Z = Y, ae = Q), C = xs(-I, G), p = C * Ui, C && (M = Math.cos(-C), A = Math.sin(-C), k = W * M - J * A, Y = X * M - B * A, Q = I * M - G * A, ie = F * A + ie * M, W = k, X = Y, I = Q), C = xs(X, W), g = C * Ui, C && (M = Math.cos(C), A = Math.sin(C), k = W * M + X * A, Y = z * M + Z * A, X = X * M - W * A, Z = Z * M - z * A, W = k, z = Y), m && Math.abs(m) + Math.abs(g) > 359.9 && (m = g = 0, p = 180 - p), d = lt(Math.sqrt(W * W + X * X + I * I)), _ = lt(Math.sqrt(Z * Z + ae * ae)), C = xs(z, Z), y = Math.abs(C) > 2e-4 ? C * Ui : 0, v = ie ? 1 / (ie < 0 ? -ie : ie) : 0), n.svg && (k = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Ad(Pn(e, it)), k && e.setAttribute("transform", k))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (d *= -1, y += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (_ *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = h - ((n.xPercent = h && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a, n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a, n.z = f + a, n.scaleX = lt(d), n.scaleY = lt(_), n.rotation = lt(g) + o, n.rotationX = lt(m) + o, n.rotationY = lt(p) + o, n.skewX = y + o, n.skewY = x + o, n.transformPerspective = v + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (i[qt] = Ra(c)), n.xOffset = n.yOffset = 0, n.force3D = tn.force3D, n.renderTransform = n.svg ? ES : Sd ? wd : TS, n.uncache = 0, n;
}, Ra = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, zo = function(e, t, n) {
  var i = Pt(t);
  return lt(parseFloat(t) + parseFloat(yi(e, "x", n + "px", i))) + i;
}, TS = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, wd(e, t);
}, Pi = "0deg", rr = "0px", Li = ") ", wd = function(e, t) {
  var n = t || this, i = n.xPercent, s = n.yPercent, a = n.x, o = n.y, l = n.z, c = n.rotation, h = n.rotationY, u = n.rotationX, f = n.skewX, d = n.skewY, _ = n.scaleX, g = n.scaleY, m = n.transformPerspective, p = n.force3D, y = n.target, x = n.zOrigin, v = "", S = p === "auto" && e && e !== 1 || p === !0;
  if (x && (u !== Pi || h !== Pi)) {
    var T = parseFloat(h) * Cs, E = Math.sin(T), C = Math.cos(T), M;
    T = parseFloat(u) * Cs, M = Math.cos(T), a = zo(y, a, E * M * -x), o = zo(y, o, -Math.sin(T) * -x), l = zo(y, l, C * M * -x + x);
  }
  m !== rr && (v += "perspective(" + m + Li), (i || s) && (v += "translate(" + i + "%, " + s + "%) "), (S || a !== rr || o !== rr || l !== rr) && (v += l !== rr || S ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + Li), c !== Pi && (v += "rotate(" + c + Li), h !== Pi && (v += "rotateY(" + h + Li), u !== Pi && (v += "rotateX(" + u + Li), (f !== Pi || d !== Pi) && (v += "skew(" + f + ", " + d + Li), (_ !== 1 || g !== 1) && (v += "scale(" + _ + ", " + g + Li), y.style[it] = v || "translate(0, 0)";
}, ES = function(e, t) {
  var n = t || this, i = n.xPercent, s = n.yPercent, a = n.x, o = n.y, l = n.rotation, c = n.skewX, h = n.skewY, u = n.scaleX, f = n.scaleY, d = n.target, _ = n.xOrigin, g = n.yOrigin, m = n.xOffset, p = n.yOffset, y = n.forceCSS, x = parseFloat(a), v = parseFloat(o), S, T, E, C, M;
  l = parseFloat(l), c = parseFloat(c), h = parseFloat(h), h && (h = parseFloat(h), c += h, l += h), l || c ? (l *= Cs, c *= Cs, S = Math.cos(l) * u, T = Math.sin(l) * u, E = Math.sin(l - c) * -f, C = Math.cos(l - c) * f, c && (h *= Cs, M = Math.tan(c - h), M = Math.sqrt(1 + M * M), E *= M, C *= M, h && (M = Math.tan(h), M = Math.sqrt(1 + M * M), S *= M, T *= M)), S = lt(S), T = lt(T), E = lt(E), C = lt(C)) : (S = u, C = f, T = E = 0), (x && !~(a + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (x = yi(d, "x", a, "px"), v = yi(d, "y", o, "px")), (_ || g || m || p) && (x = lt(x + _ - (_ * S + g * E) + m), v = lt(v + g - (_ * T + g * C) + p)), (i || s) && (M = d.getBBox(), x = lt(x + i / 100 * M.width), v = lt(v + s / 100 * M.height)), M = "matrix(" + S + "," + T + "," + E + "," + C + "," + x + "," + v + ")", d.setAttribute("transform", M), y && (d.style[it] = M);
}, bS = function(e, t, n, i, s) {
  var a = 360, o = bt(s), l = parseFloat(s) * (o && ~s.indexOf("rad") ? Ui : 1), c = l - i, h = i + c + "deg", u, f;
  return o && (u = s.split("_")[1], u === "short" && (c %= a, c !== c % (a / 2) && (c += c < 0 ? a : -a)), u === "cw" && c < 0 ? c = (c + a * yu) % a - ~~(c / a) * a : u === "ccw" && c > 0 && (c = (c - a * yu) % a - ~~(c / a) * a)), e._pt = f = new Xt(e._pt, t, n, i, c, lS), f.e = h, f.u = "deg", e._props.push(n), f;
}, Au = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, AS = function(e, t, n) {
  var i = Au({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, l, c, h, u, f, d, _;
  i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[it] = t, o = Pr(n, 1), Ki(n, it), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[it], a[it] = t, o = Pr(n, 1), a[it] = c);
  for (l in ni)
    c = i[l], h = o[l], c !== h && s.indexOf(l) < 0 && (d = Pt(c), _ = Pt(h), u = d !== _ ? yi(n, l, c, _) : parseFloat(c), f = parseFloat(h), e._pt = new Xt(e._pt, o, l, u, f - u, gl), e._pt.u = _ || 0, e._props.push(l));
  Au(o, i);
};
Wt("padding,margin,Width,Radius", function(r, e) {
  var t = "Top", n = "Right", i = "Bottom", s = "Left", a = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function(o) {
    return e < 2 ? r + o : "border" + o + r;
  });
  wa[e > 1 ? "border" + r : r] = function(o, l, c, h, u) {
    var f, d;
    if (arguments.length < 4)
      return f = a.map(function(_) {
        return qn(o, _, c);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
    f = (h + "").split(" "), d = {}, a.forEach(function(_, g) {
      return d[_] = f[g] = f[g] || f[(g - 1) / 2 | 0];
    }), o.init(l, d, u);
  };
});
var Rd = {
  name: "css",
  register: xl,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, n, i, s) {
    var a = this._props, o = e.style, l = n.vars.startAt, c, h, u, f, d, _, g, m, p, y, x, v, S, T, E, C;
    ic || xl(), this.styles = this.styles || Md(e), C = this.styles.props, this.tween = n;
    for (g in t)
      if (g !== "autoRound" && (h = t[g], !(Jt[g] && hd(g, t, n, i, e, s)))) {
        if (d = typeof h, _ = wa[g], d === "function" && (h = h.call(n, i, e, s), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = Ar(h)), _)
          _(this, e, g, h, n) && (E = 1);
        else if (g.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(g) + "").trim(), h += "", xi.lastIndex = 0, xi.test(c) || (m = Pt(c), p = Pt(h)), p ? m !== p && (c = yi(e, g, c, p) + p) : m && (h += m), this.add(o, "setProperty", c, h, i, s, 0, 0, g), a.push(g), C.push(g, 0, o[g]);
        else if (d !== "undefined") {
          if (l && g in l ? (c = typeof l[g] == "function" ? l[g].call(n, i, e, s) : l[g], bt(c) && ~c.indexOf("random(") && (c = Ar(c)), Pt(c + "") || c === "auto" || (c += tn.units[g] || Pt(qn(e, g)) || ""), (c + "").charAt(1) === "=" && (c = qn(e, g))) : c = qn(e, g), f = parseFloat(c), y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), u = parseFloat(h), g in Rn && (g === "autoAlpha" && (f === 1 && qn(e, "visibility") === "hidden" && u && (f = 0), C.push("visibility", 0, o.visibility), mi(this, o, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), g !== "scale" && g !== "transform" && (g = Rn[g], ~g.indexOf(",") && (g = g.split(",")[0]))), x = g in ni, x) {
            if (this.styles.save(g), v || (S = e._gsap, S.renderTransform && !t.parseTransform || Pr(e, t.parseTransform), T = t.smoothOrigin !== !1 && S.smooth, v = this._pt = new Xt(this._pt, o, it, 0, 1, S.renderTransform, S, 0, -1), v.dep = 1), g === "scale")
              this._pt = new Xt(this._pt, S, "scaleY", S.scaleY, (y ? ws(S.scaleY, y + u) : u) - S.scaleY || 0, gl), this._pt.u = 0, a.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              C.push(qt, 0, o[qt]), h = MS(h), S.svg ? vl(e, h, 0, T, 0, this) : (p = parseFloat(h.split(" ")[2]) || 0, p !== S.zOrigin && mi(this, S, "zOrigin", S.zOrigin, p), mi(this, o, g, Ra(c), Ra(h)));
              continue;
            } else if (g === "svgOrigin") {
              vl(e, h, 1, T, 0, this);
              continue;
            } else if (g in bd) {
              bS(this, S, g, f, y ? ws(f, y + h) : h);
              continue;
            } else if (g === "smoothOrigin") {
              mi(this, S, "smooth", S.smooth, h);
              continue;
            } else if (g === "force3D") {
              S[g] = h;
              continue;
            } else if (g === "transform") {
              AS(this, h, e);
              continue;
            }
          } else g in o || (g = Vs(g) || g);
          if (x || (u || u === 0) && (f || f === 0) && !oS.test(h) && g in o)
            m = (c + "").substr((f + "").length), u || (u = 0), p = Pt(h) || (g in tn.units ? tn.units[g] : m), m !== p && (f = yi(e, g, c, p)), this._pt = new Xt(this._pt, x ? S : o, g, f, (y ? ws(f, y + u) : u) - f, !x && (p === "px" || g === "zIndex") && t.autoRound !== !1 ? hS : gl), this._pt.u = p || 0, m !== p && p !== "%" && (this._pt.b = c, this._pt.r = cS);
          else if (g in o)
            yS.call(this, e, g, c, y ? y + h : h);
          else if (g in e)
            this.add(e, g, c || e[g], y ? y + h : h, i, s);
          else if (g !== "parseTransform") {
            jl(g, h);
            continue;
          }
          x || (g in o ? C.push(g, 0, o[g]) : C.push(g, 1, c || e[g])), a.push(g);
        }
      }
    E && gd(this);
  },
  render: function(e, t) {
    if (t.tween._time || !sc())
      for (var n = t._pt; n; )
        n.r(e, n.d), n = n._next;
    else
      t.styles.revert();
  },
  get: qn,
  aliases: Rn,
  getSetter: function(e, t, n) {
    var i = Rn[t];
    return i && i.indexOf(",") < 0 && (t = i), t in ni && t !== qt && (e._gsap.x || qn(e, "x")) ? n && vu === n ? t === "scale" ? pS : dS : (vu = n || {}) && (t === "scale" ? mS : gS) : e.style && !Xl(e.style[t]) ? uS : ~t.indexOf("-") ? fS : tc(e, t);
  },
  core: {
    _removeProperty: Ki,
    _getMatrix: ac
  }
};
Yt.utils.checkPrefix = Vs;
Yt.core.getStyleSaver = Md;
(function(r, e, t, n) {
  var i = Wt(r + "," + e + "," + t, function(s) {
    ni[s] = 1;
  });
  Wt(e, function(s) {
    tn.units[s] = "deg", bd[s] = 1;
  }), Rn[i[13]] = r + "," + e, Wt(n, function(s) {
    var a = s.split(":");
    Rn[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  tn.units[r] = "px";
});
Yt.registerPlugin(Rd);
var yl = Yt.registerPlugin(Rd) || Yt;
yl.core.Tween;
class Ks {
  constructor(e) {
    pe(this, "sizes");
    pe(this, "scene");
    pe(this, "canvas");
    pe(this, "camera");
    pe(this, "_camera");
    pe(this, "resources");
    pe(this, "time");
    pe(this, "mouse");
    pe(this, "eventOffset");
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
class wS extends Ks {
  constructor(t) {
    super(t);
    pe(this, "loadingManager");
    this.createLoading(!!t._config.sources.length), this.loadingManager = new Sf(
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
    n && (yl.set(n.style, { opacity: 1 }), yl.to(n.style, {
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
const wu = { type: "change" }, ko = { type: "start" }, Ru = { type: "end" };
class RS extends Zi {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: $i.ROTATE, MIDDLE: $i.DOLLY, RIGHT: $i.PAN }, this.touches = { ONE: Qi.ROTATE, TWO: Qi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(P) {
      P.addEventListener("keydown", Xe), this._domElementKeyEvents = P;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Xe), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(wu), n.update(), s = i.NONE;
    }, this.update = function() {
      const P = new L(), $ = new Ln().setFromUnitVectors(e.up, new L(0, 1, 0)), ee = $.clone().invert(), H = new L(), de = new Ln(), _e = new L(), ge = 2 * Math.PI;
      return function() {
        const ue = n.object.position;
        P.copy(ue).sub(n.target), P.applyQuaternion($), o.setFromVector3(P), n.autoRotate && s === i.NONE && M(E()), n.enableDamping ? (o.theta += l.theta * n.dampingFactor, o.phi += l.phi * n.dampingFactor) : (o.theta += l.theta, o.phi += l.phi);
        let be = n.minAzimuthAngle, ze = n.maxAzimuthAngle;
        return isFinite(be) && isFinite(ze) && (be < -Math.PI ? be += ge : be > Math.PI && (be -= ge), ze < -Math.PI ? ze += ge : ze > Math.PI && (ze -= ge), be <= ze ? o.theta = Math.max(be, Math.min(ze, o.theta)) : o.theta = o.theta > (be + ze) / 2 ? Math.max(be, o.theta) : Math.min(ze, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), o.radius *= c, o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), P.setFromSpherical(o), P.applyQuaternion(ee), ue.copy(n.target).add(P), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), h.set(0, 0, 0)), c = 1, u || H.distanceToSquared(n.object.position) > a || 8 * (1 - de.dot(n.object.quaternion)) > a || _e.distanceToSquared(n.target) > 0 ? (n.dispatchEvent(wu), H.copy(n.object.position), de.copy(n.object.quaternion), _e.copy(n.target), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", R), n.domElement.removeEventListener("pointerdown", ve), n.domElement.removeEventListener("pointercancel", Se), n.domElement.removeEventListener("wheel", Le), n.domElement.removeEventListener("pointermove", we), n.domElement.removeEventListener("pointerup", Se), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Xe), n._domElementKeyEvents = null);
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
    const a = 1e-6, o = new nu(), l = new nu();
    let c = 1;
    const h = new L();
    let u = !1;
    const f = new se(), d = new se(), _ = new se(), g = new se(), m = new se(), p = new se(), y = new se(), x = new se(), v = new se(), S = [], T = {};
    function E() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function C() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function M(P) {
      l.theta -= P;
    }
    function A(P) {
      l.phi -= P;
    }
    const W = function() {
      const P = new L();
      return function(ee, H) {
        P.setFromMatrixColumn(H, 0), P.multiplyScalar(-ee), h.add(P);
      };
    }(), X = function() {
      const P = new L();
      return function(ee, H) {
        n.screenSpacePanning === !0 ? P.setFromMatrixColumn(H, 1) : (P.setFromMatrixColumn(H, 0), P.crossVectors(n.object.up, P)), P.multiplyScalar(ee), h.add(P);
      };
    }(), I = function() {
      const P = new L();
      return function(ee, H) {
        const de = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const _e = n.object.position;
          P.copy(_e).sub(n.target);
          let ge = P.length();
          ge *= Math.tan(n.object.fov / 2 * Math.PI / 180), W(2 * ee * ge / de.clientHeight, n.object.matrix), X(2 * H * ge / de.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (W(ee * (n.object.right - n.object.left) / n.object.zoom / de.clientWidth, n.object.matrix), X(H * (n.object.top - n.object.bottom) / n.object.zoom / de.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function F(P) {
      n.object.isPerspectiveCamera ? c /= P : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * P)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function z(P) {
      n.object.isPerspectiveCamera ? c *= P : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / P)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function Z(P) {
      f.set(P.clientX, P.clientY);
    }
    function k(P) {
      y.set(P.clientX, P.clientY);
    }
    function Y(P) {
      g.set(P.clientX, P.clientY);
    }
    function Q(P) {
      d.set(P.clientX, P.clientY), _.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const $ = n.domElement;
      M(2 * Math.PI * _.x / $.clientHeight), A(2 * Math.PI * _.y / $.clientHeight), f.copy(d), n.update();
    }
    function J(P) {
      x.set(P.clientX, P.clientY), v.subVectors(x, y), v.y > 0 ? F(C()) : v.y < 0 && z(C()), y.copy(x), n.update();
    }
    function B(P) {
      m.set(P.clientX, P.clientY), p.subVectors(m, g).multiplyScalar(n.panSpeed), I(p.x, p.y), g.copy(m), n.update();
    }
    function G(P) {
      P.deltaY < 0 ? z(C()) : P.deltaY > 0 && F(C()), n.update();
    }
    function le(P) {
      let $ = !1;
      switch (P.code) {
        case n.keys.UP:
          P.ctrlKey || P.metaKey || P.shiftKey ? A(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(0, n.keyPanSpeed), $ = !0;
          break;
        case n.keys.BOTTOM:
          P.ctrlKey || P.metaKey || P.shiftKey ? A(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(0, -n.keyPanSpeed), $ = !0;
          break;
        case n.keys.LEFT:
          P.ctrlKey || P.metaKey || P.shiftKey ? M(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(n.keyPanSpeed, 0), $ = !0;
          break;
        case n.keys.RIGHT:
          P.ctrlKey || P.metaKey || P.shiftKey ? M(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : I(-n.keyPanSpeed, 0), $ = !0;
          break;
      }
      $ && (P.preventDefault(), n.update());
    }
    function ie() {
      if (S.length === 1)
        f.set(S[0].pageX, S[0].pageY);
      else {
        const P = 0.5 * (S[0].pageX + S[1].pageX), $ = 0.5 * (S[0].pageY + S[1].pageY);
        f.set(P, $);
      }
    }
    function ae() {
      if (S.length === 1)
        g.set(S[0].pageX, S[0].pageY);
      else {
        const P = 0.5 * (S[0].pageX + S[1].pageX), $ = 0.5 * (S[0].pageY + S[1].pageY);
        g.set(P, $);
      }
    }
    function xe() {
      const P = S[0].pageX - S[1].pageX, $ = S[0].pageY - S[1].pageY, ee = Math.sqrt(P * P + $ * $);
      y.set(0, ee);
    }
    function Ce() {
      n.enableZoom && xe(), n.enablePan && ae();
    }
    function Me() {
      n.enableZoom && xe(), n.enableRotate && ie();
    }
    function Ve(P) {
      if (S.length == 1)
        d.set(P.pageX, P.pageY);
      else {
        const ee = te(P), H = 0.5 * (P.pageX + ee.x), de = 0.5 * (P.pageY + ee.y);
        d.set(H, de);
      }
      _.subVectors(d, f).multiplyScalar(n.rotateSpeed);
      const $ = n.domElement;
      M(2 * Math.PI * _.x / $.clientHeight), A(2 * Math.PI * _.y / $.clientHeight), f.copy(d);
    }
    function At(P) {
      if (S.length === 1)
        m.set(P.pageX, P.pageY);
      else {
        const $ = te(P), ee = 0.5 * (P.pageX + $.x), H = 0.5 * (P.pageY + $.y);
        m.set(ee, H);
      }
      p.subVectors(m, g).multiplyScalar(n.panSpeed), I(p.x, p.y), g.copy(m);
    }
    function Ue(P) {
      const $ = te(P), ee = P.pageX - $.x, H = P.pageY - $.y, de = Math.sqrt(ee * ee + H * H);
      x.set(0, de), v.set(0, Math.pow(x.y / y.y, n.zoomSpeed)), F(v.y), y.copy(x);
    }
    function N(P) {
      n.enableZoom && Ue(P), n.enablePan && At(P);
    }
    function gt(P) {
      n.enableZoom && Ue(P), n.enableRotate && Ve(P);
    }
    function ve(P) {
      n.enabled !== !1 && (S.length === 0 && (n.domElement.setPointerCapture(P.pointerId), n.domElement.addEventListener("pointermove", we), n.domElement.addEventListener("pointerup", Se)), b(P), P.pointerType === "touch" ? ft(P) : $e(P));
    }
    function we(P) {
      n.enabled !== !1 && (P.pointerType === "touch" ? _t(P) : Fe(P));
    }
    function Se(P) {
      q(P), S.length === 0 && (n.domElement.releasePointerCapture(P.pointerId), n.domElement.removeEventListener("pointermove", we), n.domElement.removeEventListener("pointerup", Se)), n.dispatchEvent(Ru), s = i.NONE;
    }
    function $e(P) {
      let $;
      switch (P.button) {
        case 0:
          $ = n.mouseButtons.LEFT;
          break;
        case 1:
          $ = n.mouseButtons.MIDDLE;
          break;
        case 2:
          $ = n.mouseButtons.RIGHT;
          break;
        default:
          $ = -1;
      }
      switch ($) {
        case $i.DOLLY:
          if (n.enableZoom === !1) return;
          k(P), s = i.DOLLY;
          break;
        case $i.ROTATE:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enablePan === !1) return;
            Y(P), s = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            Z(P), s = i.ROTATE;
          }
          break;
        case $i.PAN:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enableRotate === !1) return;
            Z(P), s = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            Y(P), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ko);
    }
    function Fe(P) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          Q(P);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          J(P);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          B(P);
          break;
      }
    }
    function Le(P) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (P.preventDefault(), n.dispatchEvent(ko), G(P), n.dispatchEvent(Ru));
    }
    function Xe(P) {
      n.enabled === !1 || n.enablePan === !1 || le(P);
    }
    function ft(P) {
      switch (ne(P), S.length) {
        case 1:
          switch (n.touches.ONE) {
            case Qi.ROTATE:
              if (n.enableRotate === !1) return;
              ie(), s = i.TOUCH_ROTATE;
              break;
            case Qi.PAN:
              if (n.enablePan === !1) return;
              ae(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Qi.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ce(), s = i.TOUCH_DOLLY_PAN;
              break;
            case Qi.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              Me(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ko);
    }
    function _t(P) {
      switch (ne(P), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          Ve(P), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          At(P), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          N(P), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          gt(P), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function R(P) {
      n.enabled !== !1 && P.preventDefault();
    }
    function b(P) {
      S.push(P);
    }
    function q(P) {
      delete T[P.pointerId];
      for (let $ = 0; $ < S.length; $++)
        if (S[$].pointerId == P.pointerId) {
          S.splice($, 1);
          return;
        }
    }
    function ne(P) {
      let $ = T[P.pointerId];
      $ === void 0 && ($ = new se(), T[P.pointerId] = $), $.set(P.pageX, P.pageY);
    }
    function te(P) {
      const $ = P.pointerId === S[0].pointerId ? S[1] : S[0];
      return T[$.pointerId];
    }
    n.domElement.addEventListener("contextmenu", R), n.domElement.addEventListener("pointerdown", ve), n.domElement.addEventListener("pointercancel", Se), n.domElement.addEventListener("wheel", Le, { passive: !1 }), this.update();
  }
}
class CS extends Ks {
  constructor(t, n) {
    var i, s;
    super(n);
    pe(this, "cameraConfig");
    pe(this, "controls");
    pe(this, "instance");
    this.cameraConfig = t, this.instance = new Bt(
      this.cameraConfig.fov,
      ((i = this.sizes) == null ? void 0 : i.width) / ((s = this.sizes) == null ? void 0 : s.height),
      this.cameraConfig.near,
      this.cameraConfig.far
    ), this.controls = new RS(this.instance, this.canvas), this.setInstance(), this.setControls();
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
class PS extends Ks {
  constructor(t, n) {
    super(n);
    pe(this, "instance");
    this.instance = new cf({
      canvas: this.canvas,
      antialias: t.antialias,
      alpha: t.alpha
    }), this.setRenderer(t);
  }
  setRenderer(t) {
    this.instance.outputColorSpace = Te, t.clearAlpha ? this.instance.setClearAlpha(t.clearAlpha) : this.instance.setClearAlpha(0), t.clearColor && this.instance.setClearColor(t.clearColor), this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
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
const Cd = {
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
class Nr {
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
const LS = new Da(-1, 1, 1, -1, 0, 1), oc = new kt();
oc.setAttribute("position", new Et([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
oc.setAttribute("uv", new Et([0, 2, 0, 0, 2, 0], 2));
class Pd {
  constructor(e) {
    this._mesh = new Lt(oc, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, LS);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class DS extends Nr {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof Qt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Ma.clone(e.uniforms), this.material = new Qt({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Pd(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Cu extends Nr {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const i = e.getContext(), s = e.state;
    s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0);
    let a, o;
    this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), s.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295), s.buffers.stencil.setClear(o), s.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), s.buffers.stencil.setLocked(!0);
  }
}
class IS extends Nr {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Pu {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new se());
      this._width = n.width, this._height = n.height, t = new yn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: Qn }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new DS(Cd), this.copyPass.material.blending = Jn, this.clock = new wf();
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
      const a = this.passes[i];
      if (a.enabled !== !1) {
        if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), a.needsSwap) {
          if (n) {
            const o = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Cu !== void 0 && (a instanceof Cu ? n = !0 : a instanceof IS && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new se());
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
class US extends Nr {
  constructor(e, t, n, i, s) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s !== void 0 ? s : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new Ee();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let s, a;
    this.overrideMaterial !== void 0 && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (e.getClearColor(this._oldClearColor), s = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(this._oldClearColor, s), this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = a), e.autoClear = i;
  }
}
const NS = {
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new Ee(0) },
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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  )
};
class Ws extends Nr {
  constructor(e, t, n, i) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new se(e.x, e.y) : new se(256, 256), this.clearColor = new Ee(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let s = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new yn(s, a, { type: Qn }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let u = 0; u < this.nMips; u++) {
      const f = new yn(s, a, { type: Qn });
      f.texture.name = "UnrealBloomPass.h" + u, f.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(f);
      const d = new yn(s, a, { type: Qn });
      d.texture.name = "UnrealBloomPass.v" + u, d.texture.generateMipmaps = !1, this.renderTargetsVertical.push(d), s = Math.round(s / 2), a = Math.round(a / 2);
    }
    const o = NS;
    this.highPassUniforms = Ma.clone(o.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new Qt({
      uniforms: this.highPassUniforms,
      vertexShader: o.vertexShader,
      fragmentShader: o.fragmentShader
    }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
    for (let u = 0; u < this.nMips; u++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])), this.separableBlurMaterials[u].uniforms.texSize.value = new se(s, a), s = Math.round(s / 2), a = Math.round(a / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1), new L(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const h = Cd;
    this.copyUniforms = Ma.clone(h.uniforms), this.blendMaterial = new Qt({
      uniforms: this.copyUniforms,
      vertexShader: h.vertexShader,
      fragmentShader: h.fragmentShader,
      blending: Ho,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new Ee(), this.oldClearAlpha = 1, this.basic = new cn(), this.fsQuad = new Pd(null);
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
      this.renderTargetsHorizontal[s].setSize(n, i), this.renderTargetsVertical[s].setSize(n, i), this.separableBlurMaterials[s].uniforms.texSize.value = new se(n, i), n = Math.round(n / 2), i = Math.round(i / 2);
  }
  render(e, t, n, i, s) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const a = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let o = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = o.texture, this.separableBlurMaterials[l].uniforms.direction.value = Ws.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = Ws.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), o = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = a;
  }
  getSeperableBlurMaterial(e) {
    return new Qt({
      defines: {
        KERNEL_RADIUS: e,
        SIGMA: e
      },
      uniforms: {
        colorTexture: { value: null },
        texSize: { value: new se(0.5, 0.5) },
        direction: { value: new se(0.5, 0.5) }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(e) {
    return new Qt({
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
Ws.BlurDirectionX = new se(1, 0);
Ws.BlurDirectionY = new se(0, 1);
class OS extends Ks {
  constructor(t, n) {
    super(n);
    pe(this, "renderer");
    pe(this, "bloomLayer");
    pe(this, "materials");
    pe(this, "darkMaterial");
    pe(this, "bloomComposer");
    pe(this, "finalComposer");
    pe(this, "darkenNonBloomed", (t) => {
      t.isMesh && this.bloomLayer.test(t.layers) === !1 && (this.materials[t.uuid] = t.material, t.material = this.darkMaterial);
    });
    pe(this, "restoreMaterial", (t) => {
      this.materials[t.uuid] && (t.material = this.materials[t.uuid], delete this.materials[t.uuid]);
    });
    this.renderer = n.renderer.instance, this.bloomLayer = new La(), this.materials = {}, this.darkMaterial = new cn({ color: "black" }), this.bloomComposer = new Pu(this.renderer), this.finalComposer = new Pu(this.renderer), this.setBloomPass(t);
  }
  setBloomPass(t) {
    this.bloomLayer.set(1);
    const i = new US(this.scene, this._camera);
    this.bloomComposer.renderToScreen = !1, this.bloomComposer.addPass(i), this.finalComposer.addPass(i);
    const s = new Ws(
      new se(
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
class FS extends Ks {
  constructor(t, n) {
    super(n);
    pe(this, "light");
    this.light = new Zn(), this.light.name = "light-group", this.setLight(t);
  }
  // 设置灯光
  setLight(t) {
    if (Array.isArray(t) && !t.length)
      return console.error("please add light configuration");
    let n, i;
    t.forEach(
      ({
        color: s,
        groundColor: a,
        type: o,
        intensity: l,
        distance: c,
        angle: h,
        penumbra: u,
        position: f,
        decay: d,
        helper: _
      }) => {
        switch (o) {
          case "point":
            n = new Af(s, l, c), _ && (i = new vy(n, 0.5));
            break;
          case "ambient":
            n = new ay(s, l);
            break;
          case "hemisphere":
            n = new ty(s, a, l), _ && (i = new My(n, 0.5));
            break;
          case "spot":
            n = new bf(
              s,
              l,
              c,
              h,
              u,
              d
            ), _ && (i = new xy(n, 0.5));
            break;
        }
        n.position.set(f == null ? void 0 : f.x, f == null ? void 0 : f.y, f == null ? void 0 : f.z), n.isSpotLight && this.light.add(n.target), n && this.light.add(n), i && this.light.add(i);
      }
    ), this.scene.add(this.light);
  }
}
class BS extends Ks {
  constructor(t) {
    super(t);
    pe(this, "raycaster");
    this.raycaster = new _y();
  }
  update() {
    this.raycaster.setFromCamera(this.mouse, this._camera);
  }
}
class Ld {
  constructor(e, t = Ty) {
    pe(this, "_canvas");
    pe(this, "scene");
    pe(this, "mousemove");
    pe(this, "resources");
    pe(this, "sizes");
    pe(this, "camera");
    pe(this, "renderer");
    pe(this, "_config");
    pe(this, "light");
    pe(this, "time");
    pe(this, "raycaster");
    pe(this, "loading");
    pe(this, "bloomPass");
    const n = document.getElementById(t.id);
    if (!n && !e)
      throw new Error("canvas has already been initialized.");
    switch (this._canvas = e || n, this._config = t, this.mousemove = new Ey(this._canvas), this.sizes = new Ay(this._config.size), this.scene = new iv(), this.time = new by(), this.camera = new CS(this._config.camera, this), this.light = new FS(this._config.light, this), this.raycaster = new BS(this), this.renderer = new PS(this._config.renderer, this), this._config.rendererPass.type) {
      case "OUTLINE":
        break;
      case "BLOOM":
        this.bloomPass = new OS(
          this._config.rendererPass.bloomConfig,
          this
        );
        break;
    }
    this.loading = new wS(this), this.resources = new fM(
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
      let s = i.children.filter((a) => a);
      s.forEach((a) => {
        a.children.length ? n(a) : (t(a), a.clear());
      }), i.clear(), s = null;
    };
    n(e);
  }
  dispose() {
    this.sizes.off("resize"), this.sizes.release(), this.time.off("tick"), this.time.release(), this.mousemove.off("mousemove"), this.mousemove.release(), this.scene.traverse((e) => {
      var t;
      (t = e == null ? void 0 : e.geometry) == null || t.dispose(), (e instanceof Zn || e instanceof Ze) && this.clearGroup(e);
    }), this.scene.clear(), this.renderer.dispose(), this.camera.dispose();
  }
}
pe(Ld, "__ins");
const Ml = new Ld(), zS = new Xs(400, 400, 400), kS = new cn({
  color: "#E89ABE",
  transparent: !0
}), Dd = new Lt(zS, kS);
Ml.scene.add(Dd);
Ml.time.on("tick", () => {
  Dd.rotation.y = Ml.time.elapsedTime;
});
