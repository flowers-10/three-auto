---
outline: deep
---
# 饼图（Pie）

### 构造函数（Constructor）
此构造函数创建一个新的Pie。

[![饼图](https://img.picgo.net/2024/11/01/372012510-cf097a5f-8f7e-4861-8152-0e18bb88d03995837a94f48e408e.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/pie.ts)

:::tip 注意
点击图片跳转案例！ ⬆️

配置项详情请见配置项手册。

:::

```typescript
Pie(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。

### 属性（attribute）

#### .group: THREE.Group;
饼图的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。
#### .config: SeriesConfig;
访问饼图配置项。

