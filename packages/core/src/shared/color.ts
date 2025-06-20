type RGB = [number, number, number];
type HSL = [number, number | string, number | string];
type ColorInput = string | RGB | HSL;

/**
 * 多段颜色映射算法（TypeScript 版）
 * @param value - 当前值
 * @param min - 最小值
 * @param max - 最大值
 * @param colors - 颜色分段（支持 HEX/RGB/HSL）
 * @param useBezier - 是否使用贝塞尔曲线平滑过渡（默认线性）
 * @returns 返回 HEX 颜色字符串
 */
export function advancedColorMap(
  value: number,
  min: number,
  max: number,
  colors: ColorInput[] = ['#313694','#C0DFE9','#d88273','#f6efa6','#bf444c' ],
  useBezier: boolean = false
): string {
  // 规范化数值到 [0, 1] 区间
  const normalized = Math.min(1, Math.max(0, (value - min) / (max - min || 1)));

  // 颜色格式转换器
  const colorToRgb = (color: ColorInput): RGB => {
    if (Array.isArray(color)) {
      // 处理 HSL 转换（如果数组长度为3且第二个值是百分比）
      if (color.length === 3 && color.some(c => typeof c === 'string' && c.includes('%'))) {
        return hslToRgb(color as HSL);
      }
      return color as RGB; // 直接返回 RGB 数组
    }
    
    // 处理 HEX 格式
    if (typeof color === 'string' && color.startsWith('#')) {
      const hex = color.slice(1);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return [r, g, b];
    }
    
    throw new Error(`Unsupported color format: ${color}`);
  };

  // HSL 转 RGB 的辅助函数
  const hslToRgb = ([h, s, l]: HSL): RGB => {
    let _h = parseFloat(h as any) / 360;
    let _s = parseFloat(s as any) / 100;
    let _l = parseFloat(l as any) / 100;

    let r, g, b;
    if (_s === 0) {
      r = g = b = _l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = _l < 0.5 ? _l * (1 + _s) : _l + _s - _l * _s;
      const p = 2 * _l - q;
      r = hue2rgb(p, q, _h + 1/3);
      g = hue2rgb(p, q, _h);
      b = hue2rgb(p, q, _h - 1/3);
    }
    return [
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255)
    ];
  };

  // 插值计算（线性或贝塞尔）
  const interpolate = (start: number, end: number, t: number): number => {
    if (useBezier) {
      t = t * t * (3 - 2 * t); // 三次贝塞尔缓动
    }
    return start + (end - start) * t;
  };

  // 分段颜色处理
  const segmentLength = 1 / (colors.length - 1);
  const segmentIndex = Math.min(
    colors.length - 2,
    Math.floor(normalized / segmentLength)
  );
  const segmentT = (normalized - segmentIndex * segmentLength) / segmentLength;

  // 获取当前分段的起始和结束颜色
  const startRgb = colorToRgb(colors[segmentIndex]);
  const endRgb = colorToRgb(colors[segmentIndex + 1]);

  // RGB 插值
  const r = Math.round(interpolate(startRgb[0], endRgb[0], segmentT));
  const g = Math.round(interpolate(startRgb[1], endRgb[1], segmentT));
  const b = Math.round(interpolate(startRgb[2], endRgb[2], segmentT));

  // 转回 HEX
  const toHex = (x: number): string => x.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}