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

![地球](https://private-user-images.githubusercontent.com/94791181/379655344-7aedc460-7e95-44a2-a954-a0fa6a9555d6.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAzNTc3NzUsIm5iZiI6MTczMDM1NzQ3NSwicGF0aCI6Ii85NDc5MTE4MS8zNzk2NTUzNDQtN2FlZGM0NjAtN2U5NS00NGEyLWE5NTQtYTBmYTZhOTU1NWQ2LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDMxVDA2NTExNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3OTM3YmJmMTk4ZmY0ZDJjZmEyMjc1Y2M0NDE5MzY3MDg2NDk5MTJlNjYyMDdkOTZjNTliOGZmYmVkMWYwNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.c91MJ7J_GDcbRwmEJPXRsiczlRnjYj8eR6EhUWobUSw)

```typescript
Earth(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。

:::tip 注意
配置项详情请见配置项手册。
:::

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

![饼图](https://private-user-images.githubusercontent.com/94791181/372012510-cf097a5f-8f7e-4861-8152-0e18bb88d039.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAzNjAwNzYsIm5iZiI6MTczMDM1OTc3NiwicGF0aCI6Ii85NDc5MTE4MS8zNzIwMTI1MTAtY2YwOTdhNWYtOGY3ZS00ODYxLTgxNTItMGUxOGJiODhkMDM5LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDMxVDA3MjkzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc2ODY4NTAyMDVkZDFmYTljZGI2MTMxZjExYWZkYTMyMzEzMjRhMDk0NjE3NDEzY2Y0MmQwYWI2NzczMmEwNzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.EzqopTdB3R5IzuPMvXm8sDtyi_8_UCCy96LQ5U4Zuec)

```typescript
Pie(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。

:::tip 注意
配置项详情请见配置项手册。
:::

### 属性（attribute）

#### .group: THREE.Group;
饼图的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。
#### .config: SeriesConfig;
访问饼图配置项。

## 地图（Map3D）

### 构造函数（Constructor）
此构造函数创建一个新的Map3D。

![地图](https://private-user-images.githubusercontent.com/94791181/381869862-b0dfceaa-2246-4c24-98ec-20bfc9ca21c1.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAzNjE1NzMsIm5iZiI6MTczMDM2MTI3MywicGF0aCI6Ii85NDc5MTE4MS8zODE4Njk4NjItYjBkZmNlYWEtMjI0Ni00YzI0LTk4ZWMtMjBiZmM5Y2EyMWMxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDMxVDA3NTQzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU5MWU2ODE2MDY2MzUyYjVmZDJmMzdmY2RiN2Y1ODcyNzJmZjFkZDk4ZmZhY2M3MDQ3OTQ3NTQ5MjRkNTgwNDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6eNJ0HctRAjfvmvZKYDBAD27GH_hBYjNsc0Y19t5BpA)

```typescript
Map3D(option: Partial<SeriesConfig>, instance: ThreeInstance)；
```
构造函数接收两个参数，`option`和`ThreeInstance`实例。

:::tip 注意
配置项详情请见配置项手册。
:::

### 属性（attribute）

#### .group: THREE.Group;
地图的模型、标注等网格对象，你可以访问它们对它们做一些其他处理。
#### .config: SeriesConfig;
访问地图配置项。

## 网格（Grid）

### 构造函数（Constructor）
此构造函数创建一个新的Grid。

![网格](https://private-user-images.githubusercontent.com/94791181/379655119-12715265-cc6b-4349-9d2b-29d9009fd840.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAzNjE2MTksIm5iZiI6MTczMDM2MTMxOSwicGF0aCI6Ii85NDc5MTE4MS8zNzk2NTUxMTktMTI3MTUyNjUtY2M2Yi00MzQ5LTlkMmItMjlkOTAwOWZkODQwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDMxVDA3NTUxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEwMTIxZDcwZjhjYzdjYWRkZTFjYmRlMjY4NTVjY2MzNGM3NDVkYTI5MzBmMTQxMDIxNTFjYzg1YTc1YTJiNzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.agaizdl4pwQpeVn02dyezM4m9wYxbx8kVbdsI7dqlBY)

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




