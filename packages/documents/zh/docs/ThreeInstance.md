# 核心 ThreeAuto
第一步,我们需要创建一个ThreeAuto应用实例，它返回一个ThreeInstance,不能在单个容器上初始化多个ThreeAuto实例。

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

实例容器，是一个具有高宽的 canvas 元素。可以不传入这时候会根据第二个参数中`config.id`来自动识别当前页面中的dom元素。
:::danger 错误
如果都没有，就会抛出错误 `canvas has already been initialized.`
:::

- `config`

配置项参数。具体请见配置项手册[id](/config/defaultConfig)。

实例上还有许多three.js需要的属性，我们可以通过实例直接使用它们。

## instance.dispose {#instance.dispose}
`Function`
销毁实例，实例销毁后无法再被使用。

## instance.scene
`THREE.Scene`

Three.js的[Scene](https://threejs.org/docs/index.html?q=Sce#api/en/scenes/Scene)类。

Scene允许您设置 three.js 要渲染的内容和位置。这是您放置对象、灯光和相机的地方。

## instance._canvas

实例容器，是一个具有高宽的 canvas 元素，用户内部检查。

## instance.time
`Object`

由`ThreeAuto`内部封装`Time`类生成的实例属性，，用来控住整个循环`loop`，核心是`requestAnimationFrame`的递归调用，来保证渲染器每一帧都能触发。

具体请见通用类：[Time](/docs/Time)。



## instance.sizes
`Object`

由`ThreeAuto`内部封装`Sizes`类生成的实例属性，用来监听容器尺寸变化，来实时改变渲染器的尺寸大小。

它可以通过全局配置项来选定监听的容器尺寸，默认监听window尺寸变化。

具体请见通用类：[Sizes](/docs/Sizes)。

:::tip 注意
可以更改配置项来选择监听父容器尺寸变化的模式具体见配置项手册[size](/config/defaultConfig)。
:::

## instance._camera

`ThreeAuto`内部封装`Camera`类生成的实例属性，用来生成Three.js的相机。

现在支持两种相机[PerspectiveCamera](https://threejs.org/docs/index.html?q=camera#api/en/cameras/PerspectiveCamera)和[OrthographicCamera](https://threejs.org/docs/index.html?q=camera#api/en/cameras/OrthographicCamera)，后续会开放更多相机类型。

可以通过配置项直接更改`Camera`生成后的属性。

具体请见配置项手册：[camera](/config/defaultConfig)。

使用方法和three.js的camera属性一样：
```typescript
instance._camera.position.x = 6
```

## instance._renderer
`ThreeAuto`内部封装`Renderer`类生成的实例属性，用来生成Three.js的渲染器。

现在只支持一种渲染器[WebGLRenderer](https://threejs.org/docs/index.html?q=render#api/en/renderers/WebGLRenderer)，后续会开放更多渲染器类型。

可以通过配置项直接更改`WebGLRenderer`生成后的属性。

具体请见配置项手册：[renderer](/config/defaultConfig)。

使用方法和`three.js`的`renderer`属性一样：
```typescript
instance._renderer.setClearColor('#ffffff',0.1)
```

## instance.mousemove
`ThreeAuto`内部封装`MouseMoveTracker`类生成的实例属性，用来监听鼠标移动生成鼠标当前的屏幕坐标`（x,y）`，主要为射线检测服务。

具体请见通用类：[MouseMoveTracker](/docs/MouseMoveTracker)。

## instance._config
实例生成后保存的内部配置项，更改此配置项无法更新`ThreeAuto`实例，只能用于内部检查。

具体配置项手册：[config](/config/defaultConfig)。









