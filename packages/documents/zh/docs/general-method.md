# 通用方法
ThreeAuto 应用实例[ThreeInstance](https://github.com/flowers-10/three-auto/blob/main/packages/core/src/base/ThreeInstance.ts),不能在单个容器上初始化多个 ThreeAuto 实例。

## instance.dispose {#instance.dispose}

`Function`

销毁实例，实例销毁后无法再被使用。

## instance.onTick

用来控住整个循环，核心是`requestAnimationFrame`的递归调用，来保证渲染器每一帧都能触发。

`Function`

`onTick`方法会在每一帧开始时触发。

```typescript
onTick(callback:Function):void
```

- `callback`参数中，一般我们拿来更新材质的`uniforms`和播放动画。

```typescript {1,3}
instance.onTick(() => {
  console.log("每一帧都会触发");
});
```


## instance.delayInterval

`Function`

延迟方法，当我们需要循环中每隔`interval`毫秒触发时使用，默认是 1000 毫秒。

```typescript
(cb: (e: number) => void, interval:number = 1000)
```

- 第一个`callback`参数中，一般我们拿来更新材质的`uniforms`和动画。

- 第二个`interval`参数，来设定延迟时间

```typescript {1,3}
instance.delayInterval(() => {
  console.log("每隔两秒触发一次");
}, 2000);
```

## instance.onResize

`Function`

`onResize`方法会在浏览器尺寸变化开始时触发。

```typescript
onResize(callback:Function):void
```

- 第一个参数名`resize`是固定的。

- 第二个`callback`参数中，一般我们拿来更新画布尺寸。

```typescript {1,3}
instance.sizes.on("resize", () => {
  console.log("浏览器尺寸发生了变化");
});
```

## instance.getSizeInfo

`Function`

`getSizeInfo`可以打印监听的容器尺寸。

```typescript
instance.getSizeInfo(message = "Now size"):void
```

- message: 打印辅助字符串，默认'Now size'。

```typescript
instance.onResize(() => {
  instance.getSizeInfo(); // [!code ++]
});
```

## instance.onMousemove

用来监听鼠标移动生成鼠标当前的屏幕坐标`（x,y）`，主要为射线检测服务。

`Function`

`onMousemove`方法会在鼠标移动变化开始时触发。

```typescript
onMousemove(callback:Function):void
```

- `callback`参数中，一般我们拿来监听鼠标变化。

```typescript {1,3}
instance.onMousemove(() => {
  console.log("鼠标开始移动");
});
```


## instance.onRaycasting

提供射线检测服务。

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
  const intersects = instance.onRaycasting(true);
  console.log("Monitor all raycast-detected objects:", intersects);
};
```

## instance.isTargetIntersected

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
  const obj = instance.isTargetIntersected(box);
  console.log("Check if the passed target is triggered:", obj);
  if (obj) {
    obj.object.position.x += 1;
  }
};
```
