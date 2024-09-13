# 核心 ThreeAuto

第一步,我们需要创建一个 ThreeAuto 应用实例，它返回一个 ThreeInstance,不能在单个容器上初始化多个 ThreeAuto 实例。

```typescript
import * as AUTO from "./src/index";
const instance = new AUTO.ThreeAuto();
```

## ThreeAuto

它的构造函数可以接受两个参数

`constructor`

```typescript
constructor(canvas?: HTMLCanvasElement, config: Partial<ConfigType> = {})
```

- `canvas`

实例容器，是一个具有高宽的 canvas 元素。可以不传入这时候会根据第二个参数中`config.id`来自动识别当前页面中的 dom 元素。
:::danger 错误
如果都没有，就会抛出错误 `canvas has already been initialized.`
:::

- `config`

配置项参数。具体请见配置项手册[id](/config/defaultConfig)。

实例上还有许多 three.js 需要的属性，我们可以通过实例直接使用它们。

## instance.dispose {#instance.dispose}

`Function`

销毁实例，实例销毁后无法再被使用。

## instance.scene

`THREE.Scene`

Three.js 的[Scene](https://threejs.org/docs/index.html?q=Sce#api/en/scenes/Scene)类。

Scene 允许您设置 three.js 要渲染的内容和位置。这是您放置对象、灯光和相机的地方。

## instance.\_canvas

实例容器，是一个具有高宽的 canvas 元素，用户内部检查。

## instance.\_camera

`ThreeAuto`内部封装`Camera`类生成的实例属性，用来生成 Three.js 的相机。

现在支持两种相机[PerspectiveCamera](https://threejs.org/docs/index.html?q=camera#api/en/cameras/PerspectiveCamera)和[OrthographicCamera](https://threejs.org/docs/index.html?q=camera#api/en/cameras/OrthographicCamera)，后续会开放更多相机类型。

可以通过配置项直接更改`Camera`生成后的属性。

具体请见配置项手册：[camera](/config/defaultConfig)。

使用方法和 three.js 的 camera 属性一样：

```typescript
instance._camera.position.x = 6;
```

## instance.\_renderer

`ThreeAuto`内部封装`Renderer`类生成的实例属性，用来生成 Three.js 的渲染器。

现在只支持一种渲染器[WebGLRenderer](https://threejs.org/docs/index.html?q=render#api/en/renderers/WebGLRenderer)，后续会开放更多渲染器类型。

可以通过配置项直接更改`WebGLRenderer`生成后的属性。

具体请见配置项手册：[renderer](/config/defaultConfig)。

使用方法和`three.js`的`renderer`属性一样：

```typescript
instance._renderer.setClearColor("#ffffff", 0.1);
```

## instance.\_config

实例生成后保存的内部配置项，更改此配置项无法更新`ThreeAuto`实例，只能用于内部检查。

具体配置项手册：[config](/config/defaultConfig)。

## instance.time

`Object`

由`ThreeAuto`内部封装`Time`类生成的实例属性，，用来控住整个循环`loop`，核心是`requestAnimationFrame`的递归调用，来保证渲染器每一帧都能触发。

具体请见通用类：[Time](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/Time.ts)。

## instance.time.on

`Function`

`on`方法会在每一帧开始时触发。

```typescript
on("tick", callback:Function):void
```

- 第一个参数名`tick`是固定的。

- 第二个`callback`参数中，一般我们拿来更新材质的`uniforms`和播放动画。

```typescript {1,3}
instance.time.on("tick", () => {
  console.log("每一帧都会触发");
});
```

## instance.time.delayInterval

`Function`

延迟方法，当我们需要`loop`中每隔`interval`毫秒触发时使用，默认是 1000 毫秒。

```typescript
(cb: (e: number) => void, interval:number = 1000)
```

- 第一个`callback`参数中，一般我们拿来更新材质的`uniforms`和动画。

- 第二个`interval`参数，来设定延迟时间

```typescript {1,3}
instance.time.delayInterval(() => {
  console.log("每隔两秒触发一次");
}, 2000);
```

## instance.time.clock

`THREE.Clock`

Three.js 的[Clock](https://threejs.org/docs/index.html?q=Clock#api/en/core/Clock)类。

## instance.time.delta

`Number`

每一帧触发时的间隔时间（毫秒）。

```typescript
instance.time.on("tick", () => {
  console.log("每一帧触发时的间隔时间:", instance.time.delta, "毫秒"); // [!code ++]
});
```

## instance.time.elapsedTime

`Number`

已经用了的时间（秒）

```typescript
instance.time.on("tick", () => {
  console.log("已经用了的时间", instance.time.elapsedTime, "（秒）"); // [!code ++]
});
```

## instance.time.lerpValue

`Number`

实验功能未更新...

## instance.sizes

`Object`

由`ThreeAuto`内部封装`Sizes`类生成的实例属性，用来监听容器尺寸变化，来实时改变渲染器的尺寸大小。

它可以通过全局配置项来选定监听的容器尺寸，默认监听 window 尺寸变化。

具体请见通用类：[Sizes](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/Sizes.ts)。

:::tip 注意
可以更改配置项来选择监听父容器尺寸变化的模式具体见配置项手册[size](/config/defaultConfig)。
:::

## instance.sizes.on

`Function`

`on`方法会在浏览器尺寸变化开始时触发。

```typescript
on("resize", callback:Function):void
```

- 第一个参数名`resize`是固定的。

- 第二个`callback`参数中，一般我们拿来更新画布尺寸。

```typescript {1,3}
instance.sizes.on("resize", () => {
  console.log("浏览器尺寸发生了变化");
});
```

## instance.sizes.info

`Function`

`info`可以打印监听的容器尺寸。

```typescript
instance.sizes.info(message = "Now size"):void
```

- message: 打印辅助字符串，默认'Now size'。

```typescript
instance.sizes.on("resize", () => {
  instance.sizes.info(); // [!code ++]
});
```

## instance.sizes.release

`Function`

`release`移除当前的尺寸变化监听，释放内存。

```typescript
instance.sizes.release(); // [!code ++]
```

## instance.sizes.width

`Number`

获得当前的容器宽度。

## instance.sizes.height

`Number`

获得当前的容器高度。

## instance.sizes.pixelRatio

`Number`

获得当前的屏幕像素比。

```typescript
instance.sizes.on("tick", () => {
  console.log(instance.sizes.pixelRatio); // [!code ++]
});
```

## instance.mousemove

`ThreeAuto`内部封装`MouseMoveTracker`类生成的实例属性，用来监听鼠标移动生成鼠标当前的屏幕坐标`（x,y）`，主要为射线检测服务。

具体请见通用类：[MouseMoveTracker](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/Mousemove.ts)。

## instance.mousemove.on

`Function`

`on`方法会在鼠标移动变化开始时触发。

```typescript
on("mousemove", callback:Function):void
```

- 第一个参数名`mousemove`是固定的。

- 第二个`callback`参数中，一般我们拿来监听鼠标变化。

```typescript {1,3}
instance.mousemove.on("mousemove", () => {
  console.log("鼠标开始移动");
});
```

## instance.mousemove.dispose

`Function`

`dispose`移除当前的鼠标移动变化监听，释放内存。

```typescript
instance.mousemove.dispose(); // [!code ++]
```

## instance.mousemove.eventOffset

`THREE.Vector2`

当前的屏幕坐标（像素 px）

```typescript
instance.mousemove.on("mousemove", () => {
  console.log(instance.mousemove.eventOffset); // [!code ++]
});
```

## instance.mousemove.mouse

`THREE.Vector2`

当前的归一化坐标（范围 0.0~1.0）

```typescript
instance.mousemove.on("mousemove", () => {
  console.log(instance.mousemove.mouse); // [!code ++]
});
```

## instance.raycaster

`THREE.Raycaster`

`ThreeAuto`内部封装`Raycaster`类生成的实例属性。
核心根据`Three.js`的`Raycaster`类拓展了几个方法和属性，提供射线检测服务。

具体请见通用类：[Raycaster](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/Raycaster.ts)。

## instance.raycaster.onRaycasting

`Function`

`onRaycasting`方法会对提供的对象进行射线检测

```typescript
onRaycasting(isLog:boolean = false, targets:THREE.Object3D = this.scene.children)
```

- `isLog`：是否打印当前射线检测到的对象，默认`false`。
- `targets`：提供检测对象组合，默认检测所有对象。

使用方法：

```typescript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
const sceneDom = document.getElementById("_scene") as HTMLCanvasElement;

sceneDom.onclick = function () {
  const intersects = instance.raycaster.onRaycasting(true);
  console.log("Monitor all raycast-detected objects:", intersects);
};
```

## instance.raycaster.isTargetIntersected

`Function`

`isTargetIntersected`方法只检测传入的当前对象是否被射线选中。

```typescript
isTargetIntersected(target:THREE.Mesh)
```

- `target`：提供的检测对象。

使用方法：

```typescript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
const sceneDom = document.getElementById("_scene") as HTMLCanvasElement;

sceneDom.onclick = function () {
  const obj = instance.raycaster.isTargetIntersected(box);
  console.log("Check if the passed target is triggered:", obj);
  if (obj) {
    obj.object.position.x += 1;
  }
};
```
