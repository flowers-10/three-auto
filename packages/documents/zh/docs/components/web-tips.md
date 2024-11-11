---
outline: deep
---
#  提示信息（Tips）

`Tips` 类是一个用于在 Three.js 场景中添加 CSS2D 或 CSS3D 提示信息的工具类。它继承自 `BaseThree`，并且依赖于 `ThreeInstance` 以及其他相关依赖。`Tips` 用于在 Three.js 场景中显示 HTML 元素作为提示信息。

[![Tips]()](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/tip.ts)


## 构造函数（Constructor）

```typescript
Tips(instance: ThreeInstance, type: TipsType = 'css2')
```

此构造函数创建一个新的Environment。

### 参数
- **instance** (`ThreeInstance`):一个 `ThreeInstance` 对象，包含了 Three.js 渲染器、场景等基本设置。
- **type** (`TipsType`, 可选, 默认值: `'css2'`): 提示信息的类型，可以是 `'css2'` 或 `'css3'`。

## 方法（Methods）

### createTips(root: HTMLElement): objectMap[ TipsType ]
创建一个新的提示信息对象，并将其添加到 tips 组中。返回创建的 CSS2DObject 或 CSS3DObject 实例。

#### 参数
- **root** (`HTMLElement`): 用于创建提示信息的 HTML 元素。

### resize(): void
调整提示信息渲染器的大小，使其与场景大小一致。

### update(): void
渲染提示信息。

### dispose(): void

移除提示信息渲染器的 DOM 元素。

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

instance.scene.add(box);

const div1 = AUTO.htmlRender({tag:'div',children: 'Hello World',style:{'font-size':'40px',background:'rgba(1,1,1,0.1)',padding: '20px','border-radius': '8px'}})
const div2 = AUTO.htmlRender({tag:'div',children: 'Tips',style:{'font-size':'20px',background:'#ccc',padding: '20px','border-radius': '8px'}})
// CSS3DRenderer

const css3 = new AUTO.Tips(instance)
const tipsMesh1 = css3.createTips(div1)
const tipsMesh2 = css3.createTips(div2)

tipsMesh1.position.set(1,1,1)
tipsMesh1.scale.set(0.005,0.005,1)
tipsMesh2.position.set(0,1,0)
tipsMesh2.scale.set(0.005,0.005,1)


instance.sizes.on('resize',() => {
  css3.resize()
})
instance.time.on("tick", () => {
  css3.update()
  box.rotation.y = instance.time.elapsedTime;
});
```