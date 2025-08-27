---
outline: deep
---

# Renderer

Used to configure Three.js renderer-related options, controlling renderer clear color, antialiasing, transparency, and other properties.

## renderer.antialias = false

`boolean`

Whether to enable antialiasing.

When set to `true`, the renderer will enable antialiasing to smooth jagged edges in images. Suitable for most scenes to improve visual quality, but will add some performance overhead.

## renderer.alpha = false

`boolean`

Whether to enable transparent background.

When set to `true`, the renderer's background will be set to transparent, suitable for scenes requiring transparent backgrounds or rendering into transparent containers.

## renderer.logarithmicDepthBuffer = false

`boolean`

Whether to enable logarithmic depth buffer.

Enabling logarithmic depth buffer can improve depth precision issues that occur in scenes with large depth ranges. For scenes with far depth ranges, such as large outdoor scenes, enabling this option may bring significant improvements.

## renderer.clearAlpha = 1
`number`

The transparency value of the clear color.
This option controls the transparency when the renderer clears each frame, ranging from `0` to `1`. `0` means completely transparent, `1` means completely opaque.

## renderer.clearColor = '#000000'
`string`

The renderer's clear background color.
This option sets the background color that the renderer clears the canvas with at the start of each frame rendering. Any valid CSS color representation can be used, such as hexadecimal colors, RGB, or RGBA.