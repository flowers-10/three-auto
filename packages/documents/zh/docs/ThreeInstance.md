# 核心 ThreeAuto
第一步,我们需要创建一个ThreeAuto应用实例，它返回一个ThreeInstance,不能在单个容器上初始化多个ThreeAuto实例。

```typescript
import * as AUTO from "./src/index";
const instance = new AUTO.ThreeAuto();
```

## 构造函数
它的构造函数可以接受两个参数

`constructor`
```typescript
constructor(canvas?: HTMLCanvasElement, config: Partial<ConfigType> = {}) 
```

- `canvas` 

实例容器，是一个具有高宽的 canvas 元素。可以不传入这时候会根据第二个参数中`config.id`来自动识别当前页面中的dom元素。
:::danger
如果都没有，就会抛出错误 `canvas has already been initialized.`
:::

- `config`

配置项参数。具体请见[配置项手册](/config/defaultConfig)。

## 所有属性
实例上还有许多three.js需要的属性，我们可以通过实例直接使用它们。

### instance.dispose {#instance.dispose}
`Function`
销毁实例，实例销毁后无法再被使用。

### time
`Object`

通过`Time`类生成的实例属性，由`ThreeAuto`内部封装，用来控住整个循环`loop`，核心是`requestAnimationFrame`的递归调用，来保证渲染器每一帧都能触发。

具体请见通用属性:[Time](/docs/Time)

