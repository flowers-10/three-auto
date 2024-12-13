---
outline: deep
---

# renderer

用于配置 Three.js 渲染器的相关选项，控制渲染器的清除颜色、抗锯齿、透明度等属性。

## renderer.antialias = false

`boolean`

是否启用抗锯齿。

当设置为 `true` 时，渲染器会启用抗锯齿功能，平滑图像中的锯齿边缘。适用于大部分场景以提高画面质量，但会增加一定的性能开销。

## renderer.alpha = false

`boolean`

是否启用透明背景。

当设置为 `true` 时，渲染器的背景会设置为透明，适用于需要透明背景的场景或渲染到透明容器中的情况。

## renderer.logarithmicDepthBuffer = false

`boolean`

是否启用对数深度缓冲。


启用对数深度缓冲可以改善在深度范围较大的场景中出现的深度精度问题。对于有较远深度范围的场景，如大型户外场景，启用此选项可能会带来显著的改进。

## renderer.clearAlpha = 1
`number`

清除颜色的透明度值。
此选项控制渲染器每帧清除时的透明度，范围从 `0` 到 `1`。`0` 表示完全透明，`1` 表示完全不透明。

## renderer.clearColor = '#000000'
`string`

渲染器的清除背景颜色。
此选项设置渲染器在每帧渲染开始时清除画布的背景颜色。可以使用任何合法的 CSS 颜色表示方式，如十六进制颜色、RGB 或 RGBA。

