---
outline: deep
---
#  Tips

The `Tips` class is a utility class for adding CSS2D or CSS3D tip information to Three.js scenes. It inherits from `BaseThree` and depends on `ThreeInstance` and other related dependencies. `Tips` is used to display HTML elements as tip information in Three.js scenes.

[![Tips]()](https://github.com/flowers-10/three-auto/blob/main/packages/examples/src/tip.ts)


## Constructor

```typescript
Tips(instance: ThreeInstance, type: TipsType = 'css2')
```

This constructor creates a new Environment.

### Parameters
- **instance** (`ThreeInstance`): A `ThreeInstance` object containing basic Three.js renderer, scene, and other settings.
- **type** (`TipsType`, optional, default: `'css2'`): Type of tip information, can be `'css2'` or `'css3'`.

## Methods

### createTips(root: HTMLElement): objectMap[ TipsType ]
Creates a new tip information object and adds it to the tips group. Returns the created CSS2DObject or CSS3DObject instance.

#### Parameters
- **root** (`HTMLElement`): HTML element used to create tip information.

### resize(): void
Adjusts the size of the tip information renderer to match the scene size.

### update(): void
Renders tip information.

### dispose(): void

Removes the tip information renderer's DOM element.

## Usage Example
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