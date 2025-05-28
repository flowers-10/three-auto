import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto(undefined,{
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      x: 2, y: 2, z: 2
    },
    controls: {
      enable: true,
      enableDamping: true,
      enablePan: true
    }
  },
});
const resource = new AUTO.Resources([{
  name: "texture",
  type: "TEXTURE",
  path: "./env/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg",
  show: false,
},], 'circle')

resource.on("ready", () => {
  const texture = resource.items.get('texture');
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // 创建材质数组，六个面都使用同一张图片
  const materials = [
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
  ];

  // 使用材质数组创建网格
  const box = new THREE.Mesh(geometry, materials);

  instance.scene.add(box);
  instance.time.on("tick", () => {
    box.rotation.y = instance.time.elapsedTime;
  });
})


