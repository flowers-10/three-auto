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