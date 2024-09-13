# MouseMoveTracker

`ThreeAuto`内部封装`MouseMoveTracker`类，用来监听鼠标移动生成鼠标当前的屏幕坐标`（x,y）`，主要为射线检测服务。

## mousemove.on
`Function`

`on`方法会在鼠标移动变化开始时触发。

```typescript
on("mousemove", callback:Function):void
```

- 第一个参数名`mousemove`是固定的。

- 第二个`callback`参数中，一般我们拿来监听鼠标变化。

```typescript {1,3}
instance.mousemove.on("mousemove", () => {
    console.log("鼠标开始移动") 
});
```


## mousemove.dispose
`Function`

`dispose`移除当前的鼠标移动变化监听，释放内存。

```typescript 
instance.mousemove.dispose() // [!code ++]
```

## mousemove.eventOffset
`THREE.Vector2`

当前的屏幕坐标（像素px）

```typescript
instance.mousemove.on("mousemove", () => {
    console.log(instance.mousemove.eventOffset) // [!code ++]
});
```


## mousemove.mouse
`THREE.Vector2`

当前的归一化坐标（范围0.0~1.0）

```typescript
instance.mousemove.on("mousemove", () => {
    console.log(instance.mousemove.mouse) // [!code ++]
});
```

