---
outline: deep
---
# 地球（Earth）

## 构造函数（Constructor）
此构造函数创建一个新的Earth。

[![地球](https://img.picgo.net/2024/11/01/379655344-7aedc460-7e95-44a2-a954-a0fa6a9555d6e0b291fee4c42a4c.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/earth.ts)

:::tip 注意
点击图片跳转案例！ ⬆️

配置项详情请见配置项手册。
:::

```typescript
Earth(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。


## 属性（attribute）

###  .resources: Resources;
渲染地球所需要的静态资源，主要类型是TEXTURE（图片资源）。
###  .earth: THREE.Mesh | null;
地球的网格对象，你可以访问它对它做一些其他处理。
###  .group: THREE.Group;
地球的曲线、地图、标注等网格对象，你可以访问它们对它们做一些其他处理。
###  .option: EarthOptions;
访问地球配置项。

