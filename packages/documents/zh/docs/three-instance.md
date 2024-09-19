# 常用属性
ThreeAuto 应用实例[ThreeInstance](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/ThreeInstance.ts),不能在单个容器上初始化多个 ThreeAuto 实例。

## instance

`ThreeAuto`的构造函数可以接受两个参数

`constructor`

```typescript
constructor(canvas?: HTMLCanvasElement, config)
```

- `canvas`

实例容器，是一个具有高宽的 canvas 元素。可以不传入这时候会根据第二个参数中`config.id`来自动识别当前页面中的 dom 元素。
:::danger 错误
如果都没有，就会抛出错误 `canvas has already been initialized.`
:::

- `config`

配置项参数。具体请见[配置项手册](/config/defaultConfig)。

```typescript
import * as AUTO from "./src/index";
const instance = new AUTO.ThreeAuto();
```

实例上还有许多 three.js 需要的属性和方法，我们可以通过实例直接访问它们。


## instance.scene

`THREE.Scene`

Three.js 的[Scene](https://threejs.org/docs/index.html?q=Sce#api/en/scenes/Scene)类。

Scene 允许您设置 three.js 要渲染的内容和位置。这是您放置对象、灯光和相机的地方。

## instance.\_canvas

`HTMLCanvasElement`

实例容器，是一个具有高宽的 canvas 元素，用户内部检查。

## instance.\_camera

`THREE.Camera`

`ThreeAuto`内部封装`Camera`类生成的实例属性，用来生成 Three.js 的相机。

现在支持两种相机[PerspectiveCamera](https://threejs.org/docs/index.html?q=camera#api/en/cameras/PerspectiveCamera)和[OrthographicCamera](https://threejs.org/docs/index.html?q=camera#api/en/cameras/OrthographicCamera)，后续会开放更多相机类型。

可以通过配置项直接更改`Camera`生成后的属性。

具体请见配置项手册：[camera](/config/defaultConfig)。

使用方法和 three.js 的 `camera` 属性一样：

```typescript
instance._camera.position.x = 6;
```

## instance.\_renderer

`THREE.Renderer`

`ThreeAuto`内部封装`Renderer`类生成的实例属性，用来生成 Three.js 的渲染器。

现在只支持一种渲染器[WebGLRenderer](https://threejs.org/docs/index.html?q=render#api/en/renderers/WebGLRenderer)，后续会开放更多渲染器类型。

可以通过配置项直接更改`WebGLRenderer`生成后的属性。

具体请见配置项手册：[renderer](/config/defaultConfig)。

使用方法和`three.js`的`renderer`属性一样：

```typescript
instance._renderer.setClearColor("#ffffff", 0.1);
```

## instance.time

`Time`

由`ThreeAuto`内部封装`Time`类生成的实例属性，用来控住整个循环`loop`，核心是`requestAnimationFrame`的递归调用，来保证渲染器每一帧都能触发。

具体请见通用类：[Time](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/Time.ts)。


## instance.delta

`Number`

每一帧触发时的间隔时间（毫秒）。

```typescript
instance.onTick(() => {
  console.log("每一帧触发时的间隔时间:", instance.delta, "毫秒"); // [!code ++]
});
```

## instance.elapsedTime

`Number`

已经用了的时间（秒）

```typescript
instance.time.on("tick", () => {
  console.log("已经用了的时间", instance.elapsedTime, "（秒）"); // [!code ++]
});
```

## instance.lerpValue

`Number`

实验功能未更新...

## instance.sizes

`Sizes`

由`ThreeAuto`内部封装`Sizes`类生成的实例属性，用来监听容器尺寸变化，来实时改变渲染器的尺寸大小。

它可以通过全局配置项来选定监听的容器尺寸，默认监听 window 尺寸变化。

具体请见通用类：[Sizes](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/Sizes.ts)。

:::tip 注意
可以更改配置项来选择监听父容器尺寸变化的模式具体见配置项手册[size](/config/defaultConfig)。
:::

## instance.width

`Number`

获得当前的容器宽度。

## instance.height

`Number`

获得当前的容器高度。

## instance.pixelRatio

`Number`

获得当前的屏幕像素比。

```typescript
instance.onResize(() => {
  console.log(instance.pixelRatio); // [!code ++]
});
```

## instance.mousemove

`MouseMoveTracker`

`ThreeAuto`内部封装`MouseMoveTracker`类生成的实例属性，用来监听鼠标移动生成鼠标当前的屏幕坐标`（x,y）`，主要为射线检测服务。

具体请见通用类：[MouseMoveTracker](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/Mousemove.ts)。


## instance.eventOffset

`THREE.Vector2`

返回当前的屏幕坐标（像素 px）

```typescript
instance.onMousemove(() => {
  console.log(instance.eventOffset); // [!code ++]
});
```

## instance.mouse

`THREE.Vector2`

返回当前的归一化坐标（范围 0.0~1.0）

```typescript
instance.onMousemove(() => {
  console.log(instance.mouse); // [!code ++]
});
```
