# 灯光和阴影

ThreeAuto 灯光组件和阴影组件，灯光和阴影是相辅相成的，所以我们一起介绍它们。

## 灯光（Light）
ThreeAuto灯光组件，你可以通过配置项中的type属性快速生成不同的灯光。
不同灯光的属性可见Three.js文档。

### 构造函数（Constructor）
```typescript
Light(config: LightItems[], instance: ThreeInstance);
```
此构造函数创建一个新的Light。

### config:LightItems
```typescript
type LightItems = {
  castShadow: boolean;
  target?: THREE.Object3D;
  type: LightType;
  color: string;
  intensity: number;
  distance?: number;
  helper?: boolean;
  helperSize?: number;
  lightName?: string;
  position?: PositionType;
  groundColor?: string;
  angle?: number;
  penumbra?: number;
  decay?: number;
};
```

### 属性（attribute）

### .light
获取当前的灯光组。



