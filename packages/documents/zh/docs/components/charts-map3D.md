---
outline: deep
---
# 地图（Map3D）

### 构造函数（Constructor）
此构造函数创建一个新的Map3D。

[![地图](https://img.picgo.net/2024/11/01/tutieshi_640x409_8s6694fd00449ce88b.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/pie.ts)

:::tip 注意
点击图片跳转案例！ ⬆️

配置项详情请见配置项手册。

:::

```typescript
Map3D(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。


### 属性（attribute）

#### .group: THREE.Group;
地图的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。
#### .config: SeriesConfig;
访问地图配置项。
