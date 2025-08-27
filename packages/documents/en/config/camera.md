---
outline: deep
---

# Camera

`object`

Camera component. Manages `three.js` camera-related configurations.

## camera.type = "PerspectiveCamera"
`string`

Specifies the camera type.

Defaults to `PerspectiveCamera` perspective camera.

**Options:**

- `'PerspectiveCamera'` This camera uses [perspective projection](<https://en.wikipedia.org/wiki/Perspective_(graphical)>) for projection.
- `'OrthographicCamera'` This camera uses [orthographic projection](https://en.wikipedia.org/wiki/Orthographic_projection) for projection.

## camera.fov = 60
`number`

Camera frustum vertical field of view angle.

## camera.near = 1
`number`

Camera frustum near plane.

## camera.far = 10000
`number`

Camera frustum far plane.

## camera.position
`object`

Camera position

### camera.position.x
`number`

Horizontal offset

### camera.position.y
`number`

Vertical offset

### camera.position.z
`number`

Depth offset

## camera.lookAt = true
`boolean`

Whether to point to the current scene

## camera.controls
`object`

Orbit controls configuration, allows the camera to orbit around a target.

### camera.controls.show = true
`boolean`

Whether to enable controls, defaults to `true`

### camera.controls.enableDamping
`boolean`

Set to `true` to enable damping (inertia), which gives the controls a sense of weight. Default is `true`.
Note that if this is enabled, you must call `.update()` in your animation loop.

### camera.controls.minPolarAngle
`number`

The minimum angle you can vertically rotate, ranges from `0` to `Math.PI`, defaults to `0`.

### camera.controls.maxPolarAngle
`number`

The maximum angle you can vertically rotate, ranges from `0` to `Math.PI`, defaults to `Math.PI`.

### camera.controls.minAzimuthAngle
`number`

The minimum angle you can horizontally rotate. If set, the valid range is `[-2 * Math.PI, 2 * Math.PI]`, and the difference between upper and lower limits of rotation angle is less than `2 * Math.PI`. Default is infinity.

### camera.controls.maxAzimuthAngle
`number`

The maximum angle you can horizontally rotate. If set, the valid range is `[-2 * Math.PI, 2 * Math.PI]`, and the difference between upper and lower limits of rotation angle is less than `2 * Math.PI`. Default is infinity.

### camera.controls.enablePan = true
`boolean`

Enable or disable camera panning, defaults to `true`.