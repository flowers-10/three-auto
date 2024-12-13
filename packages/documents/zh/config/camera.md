---
outline: deep
---

# Camera

相机组件。管理`three.js`相机相关配置。

## camera.type = "PerspectiveCamera"
`string`

指定相机类型。

默认为`PerspectiveCamera`透视相机。

**可选：**

- `'PerspectiveCamera'` 这一摄像机使用 [perspective projection](<https://en.wikipedia.org/wiki/Perspective_(graphical)>)（透视投影）来进行投影。
- `'OrthographicCamera'` 这一摄像机使用 [orthographic projection](https://en.wikipedia.org/wiki/Orthographic_projection)（正交投影）来进行投影。

## camera.fov = 60
`number`

摄像机视锥体垂直视野角度。

## camera.near = 1
`number`

摄像机视锥体近端面。

## camera.far = 10000
`number`

摄像机视锥体远端面。

## camera.position
`object`

相机位置

### camera.position.x
`number`

水平偏移

### camera.position.y
`number`

垂直偏移

### camera.position.z
`number`

高度偏移

## camera.lookAt = true
`boolean`

是否指向当前场景

## camera.controls
`object`

轨道控制器配置，可以使得相机围绕目标进行轨道运动。

## camera.controls.show = true
`boolean`

是否启用控制器，默认为 `true`

## camera.controls.enableDamping
`boolean`

将其设置为`true`以启用阻尼（惯性），这将给控制器带来重量感。默认值为`true`。
请注意，如果该值被启用，你将必须在你的动画循环里调用`.update()`。

## camera.controls.minPolarAngle
`number`

你能够垂直旋转的角度的下限，范围是 `0` 到 `Math.PI`，其默认值为 `0`。

## camera.controls.maxPolarAngle
`number`

你能够垂直旋转的角度的上限，范围是 `0` 到 `Math.PI`，其默认值为 `Math.PI`。

## camera.controls.minAzimuthAngle
`number`

你能够水平旋转的角度下限。如果设置，其有效值范围为`[-2 * Math.PI，2 * Math.PI]`，且旋转角度的上限和下限差值小于 `2 \* Math.PI`。默认值为无穷大。

## camera.controls.maxAzimuthAngle
`number`

你能够水平旋转的角度上限。如果设置，其有效值范围为`[-2 * Math.PI，2 * Math.PI]`，且旋转角度的上限和下限差值小于 `2 \* Math.PI`。默认值为无穷大。

## camera.controls.enablePan = true
`boolean`
启用或禁用摄像机平移，默认为`true`。
