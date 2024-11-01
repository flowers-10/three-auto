# 动画

ThreeAuto 动画组件，帮你快速识别模型动画。

[![动画](https://private-user-images.githubusercontent.com/94791181/364215207-c9f12725-7a32-490a-b5c7-d23fa67f08fe.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAzNjAwNzYsIm5iZiI6MTczMDM1OTc3NiwicGF0aCI6Ii85NDc5MTE4MS8zNjQyMTUyMDctYzlmMTI3MjUtN2EzMi00OTBhLWI1YzctZDIzZmE2N2YwOGZlLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDMxVDA3MjkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZlNmU3OTZkM2Y1MzdhZjE5YWNiNjQ4ZjEwMmY5NzBjNzZjZDY5NDViYWUxNjVjYzQxYzU5MDJjYTc1ZmY5NWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.lZjnKKFMLTUp3pLQQgw6Jz_-tiYEsLdmn7-TJrUEqS4)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/animation.ts)

:::tip 注意
点击图片跳转案例！ ⬆️
:::

## 构造函数（Constructor）

```typescript
Animation(instance: ThreeInstance,
    clips: THREE.AnimationClip[],
    root: THREE.Object3D)
```

此构造函数创建一个新的Animation。

## 方法（Methods）

### .openSkeletonHelper() :void
显示当前动画骨骼。

### .update() :void
更新动画。
```typescript
instance.time.on("tick", () => {
    animation.update()
});
```
## 属性（attribute）

### .names
获取当前模型的所有动画的名字。

```typescript
const animation = new AUTO.Animation(instance,models.animations,models.scene)
console.log(animation.names)
```

### .actions
获取当前模型的所有动画。

```typescript
const animation = new AUTO.Animation(instance,models.animations,models.scene)
animation.actions[animation.names[0]].play()
```

