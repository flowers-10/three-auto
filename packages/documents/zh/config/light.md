---
outline: deep
---

# Light

灯光组件。定义了灯光对象的各种可配置选项，包括灯光类型、颜色、强度、阴影设置等。以下是每个属性的详细说明。

## light.castShadow

`boolean`

是否启用阴影投射。设置为 `true` 时，灯光会投射阴影。需要确保场景中的对象和接收阴影的表面都能支持阴影渲染。

## light.shadow

`object`

配置灯光的阴影属性。`shadow` 配置项是一个可选的部分配置，允许进一步调整阴影的细节，如阴影的大小、深度等。具体配置项见下文的 `LightShadowConfig`。

### light.shadow.mapSizeWidth

`number`
阴影贴图的宽度。影响阴影的分辨率，较大的值可以提高阴影的细节。

### light.shadow.mapSizeHeight

`number`
阴影贴图的高度，类似 mapSizeWidth，控制阴影的细节。

### light.shadow.cameraLeft

`number`
阴影摄像机的左边界，控制阴影摄像机的视锥范围。

### light.shadow.cameraLeft

`number`
阴影摄像机的左边界，控制阴影摄像机的视锥范围。

### light.shadow.cameraRight

`number`
阴影摄像机的右边界。

### light.shadow.cameraTop

`number`
阴影摄像机的上边界。

### light.shadow.cameraBottom

`number`
阴影摄像机的下边界。

### light.shadow.cameraNear

`number`
阴影摄像机的近裁剪面。

### light.shadow.cameraFar

`number`
阴影摄像机的远裁剪面。

### light.shadow.radius

`number`
阴影的衰减半径，影响阴影的柔和程度。

### light.shadow.normalBias

`number`
用于调整阴影偏移，避免接缝处的阴影出现不自然的现象。

### light.shadow.bias

`number`
阴影的偏移量，通常用于解决阴影贴图中可能出现的 "shadow acne" 问题。

## light.target

`THREE.Object3D`

灯光的目标对象，只有当灯光类型为聚光灯（`spot`）或方向光（`directional`）时，才需要设置目标对象。目标对象是灯光的照射方向，默认情况下，灯光会照射场景的原点。

## light.type

`string`

灯光的类型。可以是以下之一：

- `"point"`：点光源，光线从一个点向四面八方发散。
- `"ambient"`：环境光，均匀地照亮场景，不产生阴影。
- `"hemisphere"`：半球光，提供从上方和底部的两种不同的光源。
- `"spot"`：聚光灯，发出定向的光束，常用于聚焦某个区域。
- `"directional"`：方向光，光线从一个特定方向照射场景中的所有对象。

## light.color

`string`

灯光的颜色，可以使用标准的 `CSS` 颜色表示法，如 `HEX`、`RGB` 或 `RGBA` 值。

## light.intensity

`number`

灯光的强度，决定光源的亮度。值越大，光源越亮。

## light.distance

`number`

对于点光源或聚光灯，distance 表示光源的最大作用距离。超出该距离后，光源不再照亮对象。

## light.helper

`boolean`

是否启用灯光的调试助手。调试助手可以帮助在场景中可视化灯光的位置和范围。

## light.helperSize

`number`

调试助手的大小。对于启用了 helper 的灯光，设置该属性来调整调试助手的尺寸。

## light.lightName

`string`
为灯光指定一个名称，方便在调试或其他操作中引用。

## light.position

`object`
设置灯光的位置。是一个包含 `x`、`y` 和 `z` 坐标的类型，表示光源在场景中的位置。

### light.position.x

`number`

灯光水平偏移

### light.position.y

`number`

灯光垂直偏移

### light.position.z

`number`

灯光前后偏移

## light.groundColor

`string`
半球光源 (`hemisphere`) 使用此属性设置地面的颜色。它定义了场景下方的光线颜色。

## light.angle

`number`
对于聚光灯 (`spot`)，`angle` 定义光束的角度（以弧度为单位）。它控制聚光灯的光束范围。

## light.penumbra

`number`
对于聚光灯 (`spot`)`，penumbra` 控制光束的过渡区（阴影的边缘）。值为 `0` 时，光束边缘完全硬边，值为 `1` 时，边缘过渡平滑。

## light.angle

`number`
对于点光源或聚光灯，`decay` 控制光源衰减的速度。大于 `1` 时，光强随着距离的增加逐渐衰减。
