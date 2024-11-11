---
outline: deep
---
# 提示框（Tooltip）
`Tooltip` 类是一个用于在 Three.js 场景中添加提示框的工具类。它继承自 `BaseThree`，并且依赖于 `ThreeInstance` 以及其他相关依赖。`Tooltip` 用于在 Three.js 场景中显示 HTML 元素作为提示信息。

## 构造函数（Constructor）

<!-- [[Tooltip]()]() -->

:::tip 注意
点击图片跳转案例！ ⬆️

配置项详情请见配置项手册。
:::

```typescript
Tooltip(instance: ThreeInstance, group: THREE.Group, options: any)
```

构造函数接收三个参数，instance、group 和 options。
### 参数
- **instance** (`ThreeInstance`):一个 `ThreeInstance` 对象，包含了 Three.js 渲染器、场景等基本设置。
- **group** (`THREE.Group`): 用于存放提示框的对象组。
- **options** (`any`): 配置对象，包含以下属性：

    **hideDelay** (`number`, 可选): 隐藏提示框的延迟时间（毫秒）。

    **className** (`string`, 可选, 默认值: `'three-auto-tooltip'`): 提示框的 CSS 类名。

    **background** (`string`, 可选, 默认值: `'rgba(255,255,255,1)'`): 提示框的背景颜色。

    **borderWidth** (`number`, 可选, 默认值: `1`): 提示框的边框宽度。

    **borderStyle** (`string`, 可选, 默认值: `'solid'`): 提示框的边框样式。

    **padding** (`string`, 可选, 默认值: `'6px 12px'`): 提示框的内边距。

    **textStyle** (`object`, 可选, 默认值: `{ 'font-size': '18px', color: "#000000", 'font-weight': 400, 'font-style': 'normal' }`): 提示框文本的样式。

## 方法（Methods）

### createTooltip(option: any, root: HTMLElement): void
创建一个新的提示框内容，并将其添加到指定的 HTML 元素中。

#### 参数
- **option** (`any`): 包含提示框内容的配置对象。
    **title** (`string`, 可选): 提示框的标题。
    **color** (`string`, 可选): 提示框的颜色标记。
    **name** (`string`, 可选): 提示框的名称。
    **value** (`string | number`, 可选): 提示框的值。
- **root** (`HTMLElement`): 用于创建提示框内容的 HTML 元素。


### update(): void
更新提示框的位置和内容。当鼠标悬停在场景中的对象上时，会显示提示框。

### dispose(): void
移除提示框的 DOM 元素。


## 使用示例
```typescript
import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

const div1 = AUTO.htmlRender({tag:'div',children: 'Hello World',style:{'font-size':'40px',background:'rgba(1,1,1,0.1)',padding: '20px','border-radius': '8px'}})

// CSS3DRenderer
group.add(box)
const tooltip = new AUTO.Tooltip(instance, group, {
  hideDelay: 100,
  className: 'custom-tooltip',
  background: 'rgba(255, 255, 255, 0.8)',
  borderWidth: 1,
  borderStyle: 'solid',
  padding: '6px 12px',
  textStyle: {
    'font-size': '16px',
    color: '#000000',
    'font-weight': 400,
    'font-style': 'normal'
  },
  offsetX: 20,
  offsetY: 20
});

Mesh.position.set(1,1,1)
Mesh.scale.set(0.005,0.005,1)

instance.time.on("tick", () => {
  css3.update()
  Mesh.rotation.y = instance.time.elapsedTime;
});
```