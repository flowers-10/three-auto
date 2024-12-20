---
outline: deep
---

# 网格（Grid）

## 构造函数（Constructor）
此构造函数创建一个新的Grid。

<div @dblclick="navLink" style="width:100%;height:400px;position:relative;border-radius: 12px;overflow:hidden;">
    <canvas id="_scene" />
</div>

<script setup lang="ts">
import * as AUTO from "three-auto";
import * as THREE from "three";
import {ref,onMounted} from 'vue'

const navLink = () => {
  console.log(111)
}
onMounted(() => {
const instance = new AUTO.ThreeAuto(undefined, {
  size: {type: 'parent'},
  camera: {
    fov: 70,
    far: 1000,
    near: 0.1,
    position: {
      x: 25,
      y: 25,
      z: 25
    }
  }
});
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);
instance.scene.add(box);
new AUTO.Grid(15,instance)

})
</script>

:::tip 注意
双击跳转案例！ ⬆️
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




