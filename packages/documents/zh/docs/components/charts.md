---
outline: deep
---
# 图表

ThreeAuto 图表组件，你只需要通过配置项传入ThreeAuto，它会自动生成你想要的样子。
现在已经支持曲线、地球、网格、地图、饼图。

## 系列（Series）
### 构造函数（Constructor）
此构造函数创建一个新的系列（Series）。

```typescript
Series(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
:::tip 注意
ThreeAuto的构造函数已经内置了Series配置项。你不用主动声明它，只需要在ThreeAuto的配置项中传入即可。
:::

## 地球（Earth）

### 构造函数（Constructor）
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


### 属性（attribute）

####  .resources: Resources;
渲染地球所需要的静态资源，主要类型是TEXTURE（图片资源）。
####  .earth: THREE.Mesh | null;
地球的网格对象，你可以访问它对它做一些其他处理。
####  .group: THREE.Group;
地球的曲线、地图、标注等网格对象，你可以访问它们对它们做一些其他处理。
####  .option: EarthOptions;
访问地球配置项。


## 饼图（Pie）

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

## 地图（Map3D）

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

## 网格（Grid）

### 构造函数（Constructor）
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

### 属性（attribute）

#### .group: THREE.Group;
网格的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。




