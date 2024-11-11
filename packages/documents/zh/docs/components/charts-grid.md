---
outline: deep
---

# 网格（Grid）

## 构造函数（Constructor）
此构造函数创建一个新的Grid。

[![网格](https://img.picgo.net/2024/11/01/379655119-12715265-cc6b-4349-9d2b-29d9009fd8401964a9cfe904a504.gif)](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/grid.ts)

:::tip 注意
点击图片跳转案例！ ⬆️
:::


```typescript
Grid(length: number, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。

:::tip 注意
配置项详情请见配置项手册。
:::

## 属性（attribute）

### .group: THREE.Group;
网格的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。




