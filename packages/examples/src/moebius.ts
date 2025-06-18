import * as AUTO from "three-auto";
import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);

// 创建参数对象，用于GUI控制和MoebiusPass实例化
const params = {
  frequency: 0.04,
  amplitude: 2,
  mod: 10,
  thickness: 1.5
};

// 创建MoebiusPass实例
const customPass = new AUTO.MoebiusPass(params, instance);

// 创建GUI控制面板
const gui = new GUI();
const moebiusFolder = gui.addFolder('莫比乌斯效果');

// 添加控制参数

moebiusFolder.add(params, 'frequency', 0.01, 0.1, 0.01).name('频率').onChange(value => {
  // 使用非空断言确保TypeScript知道这个对象存在
  const uniform = customPass.effect.uniforms.get('uFrequency');
  if (uniform) uniform.value = value;
});
moebiusFolder.add(params, 'amplitude', 0.5, 5, 0.1).name('振幅').onChange(value => {
  const uniform = customPass.effect.uniforms.get('uAmplitude');
  if (uniform) uniform.value = value;
});
moebiusFolder.add(params, 'mod', 1, 20, 1).name('模数').onChange(value => {
  const uniform = customPass.effect.uniforms.get('uMod');
  if (uniform) uniform.value = value;
});
moebiusFolder.add(params, 'thickness', 0.5, 3, 0.1).name('厚度').onChange(value => {
  const uniform = customPass.effect.uniforms.get('uThickness');
  if (uniform) uniform.value = value;
});

// 展开文件夹
moebiusFolder.open();

instance.time.on("tick", () => {
  customPass.render();
  box.rotation.y = instance.time.elapsedTime;
});
