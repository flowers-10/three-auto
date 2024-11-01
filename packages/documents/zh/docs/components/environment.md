# 环境贴图 (Environment)

ThreeAuto 环境贴图组件，创建一个CubeCamera并且调用它。

:::tip 注意
环境贴图的图像可以用作背景，并且直接在对象上用作反射和照明。以非常逼真的方式照亮整个场景。
:::

[![环境贴图](https://private-user-images.githubusercontent.com/94791181/379655321-ef7799e3-d8c8-4c84-96ad-b5984a0efa71.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA0MjM0MzIsIm5iZiI6MTczMDQyMzEzMiwicGF0aCI6Ii85NDc5MTE4MS8zNzk2NTUzMjEtZWY3Nzk5ZTMtZDhjOC00Yzg0LTk2YWQtYjU5ODRhMGVmYTcxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTAxVDAxMDUzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRmODk5MTQyODFlNmNkYjc0OTM0OTYwMGU4YWU1MDkyNDIxNjI0MzQ3NmFmNWIzNDUyMmEyZjE3ZDE4MjkzZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.49Tet4Jc4at-IE9SjuK9Hfa5d_--PflYLP1u4ji7uJo)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/environment.ts)

:::tip 注意
点击图片跳转案例！ ⬆️
:::

## 构造函数（Constructor）

```typescript
Environment(instance: ThreeInstance)
```

此构造函数创建一个新的Environment。

## 方法（Methods）

### .update() :void
更新CubeCamera状态。
```typescript
instance.time.on("tick", () => {
    animation.update()
});
```
## 属性（attribute）

### .cubeCamera
访问当前的cubeCamera相机。

```typescript
const env = new AUTO.Environment(instance)
console.log(env.cubeCamera);
```


