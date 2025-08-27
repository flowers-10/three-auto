---
outline: deep
---
# Tooltip
The `Tooltip` class is a utility class for adding tooltips to Three.js scenes. It inherits from `BaseThree` and depends on `ThreeInstance` and other related dependencies. `Tooltip` is used to display HTML elements as tooltip information in Three.js scenes.

## Constructor

<!-- [[Tooltip]()]() -->

:::tip Note
Click the image to jump to the example! ⬆️

For configuration details, please see the configuration manual.
:::

```typescript
Tooltip(instance: ThreeInstance, group: THREE.Group, options: any)
```

The constructor accepts three parameters: instance, group, and options.
### Parameters
- **instance** (`ThreeInstance`): A `ThreeInstance` object containing basic Three.js renderer, scene, and other settings.
- **group** (`THREE.Group`): Object group for storing tooltips.
- **options** (`any`): Configuration object containing the following properties:

    **hideDelay** (`number`, optional): Delay time for hiding tooltips (milliseconds).

    **className** (`string`, optional, default: `'three-auto-tooltip'`): CSS class name for the tooltip.

    **background** (`string`, optional, default: `'rgba(255,255,255,1)'`): Background color of the tooltip.

    **borderWidth** (`number`, optional, default: `1`): Border width of the tooltip.

    **borderStyle** (`string`, optional, default: `'solid'`): Border style of the tooltip.

    **padding** (`string`, optional, default: `'6px 12px'`): Padding of the tooltip.

    **textStyle** (`object`, optional, default: `{ 'font-size': '18px', color: "#000000", 'font-weight': 400, 'font-style': 'normal' }`): Text style of the tooltip.

## Methods

### createTooltip(option: any, root: HTMLElement): void
Creates new tooltip content and adds it to the specified HTML element.

#### Parameters
- **option** (`any`): Configuration object containing tooltip content.
    **title** (`string`, optional): Title of the tooltip.
    **color** (`string`, optional): Color marker of the tooltip.
    **name** (`string`, optional): Name of the tooltip.
    **value** (`string | number`, optional): Value of the tooltip.
- **root** (`HTMLElement`): HTML element used to create tooltip content.


### update(): void
Updates the position and content of the tooltip. The tooltip is displayed when the mouse hovers over objects in the scene.

### dispose(): void
Removes the tooltip's DOM element.


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