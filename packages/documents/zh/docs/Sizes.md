# Sizes

`ThreeAuto`内部封装的`Sizes`类，用来监听容器尺寸变化，来实时改变渲染器的尺寸大小。

它可以通过全局配置项来选定监听的容器尺寸，默认监听window尺寸变化。

可以更改配置项来选择监听父容器尺寸模式，见[配置项](/config/defaultConfig)。

## sizes.on
`Function`

`on`方法会在浏览器尺寸变化开始时触发。

```typescript
on("resize", callback:Function):void
```

- 第一个参数名`resize`是固定的。

- 第二个`callback`参数中，一般我们拿来更新画布尺寸。

```typescript {1,3}
instance.sizes.on("resize", () => {
    console.log("浏览器尺寸发生了变化") 
});
```

## sizes.info
`Function`

`info`可以打印监听的容器尺寸。

```typescript
info(message = "Now size"):void
```

- message: 打印辅助字符串，默认'Now size'。

```typescript 
instance.sizes.on("resize", () => {
     instance.sizes.info() // [!code ++]
});
```

## sizes.release
`Function`

`release`移除当前的尺寸变化监听，释放内存。

```typescript 
instance.sizes.release() // [!code ++]
```


## sizes.width
`Number`

获得当前的容器宽度。

## sizes.height
`Number`

获得当前的容器高度。

## sizes.pixelRatio
`Number`

获得当前的屏幕像素比。

```typescript
instance.sizes.on("tick", () => {
   console.log(instance.sizes.pixelRatio); // [!code ++]
});
```
