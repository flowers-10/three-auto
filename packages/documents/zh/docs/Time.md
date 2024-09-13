# Time

用来控住整个循环`loop`，核心是`requestAnimationFrame`的递归调用，来保证渲染器每一帧都能触发。
## time.on
`Function`

`on`方法会在每一帧开始时触发。

```typescript
on("tick", callback:Function):void
```

- 第一个参数名`tick`是固定的。

- 第二个`callback`参数中，一般我们拿来更新材质的`uniforms`和播放动画。

```typescript {1,3}
instance.time.on("tick", () => {
    console.log("1") 
});
```

## time.delayInterval
`Function`

延迟方法，当我们需要`loop`中每隔`interval`毫秒触发时使用。

```typescript
(cb: (e: number) => void, interval:number = 1000)
```
- 第一个`callback`参数中，一般我们拿来更新材质的`uniforms`和动画。

- 第二个`interval`参数，来设定延迟时间

```typescript {1,3}
instance.time.delayInterval(() => {
    console.log("1") // 每隔2秒触发
},2000);
```

## time.clock
`THREE.Clock`

Three.js的[Clock](https://threejs.org/docs/index.html?q=Clock#api/en/core/Clock)方法。

## time.delta
`Number`

每一帧触发时的间隔时间（毫秒）。

```typescript
instance.time.on("tick", () => {
   console.log(instance.time.delta); // [!code ++]
});
```

## time.elapsedTime
`Number`

已经用了的时间（秒）

```typescript 
instance.time.on("tick", () => {
   console.log(instance.time.elapsedTime); // [!code ++]
});
```

## time.lerpValue
`Number`

实验功能未更新...

