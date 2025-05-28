import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto(undefined, {camera: {
  fov: 75,
  near: 0.1,
  far: 1000,
  position: {
    x: 5, y: 5, z: 5
  },
  controls: {
    enable: true,
    enableDamping: true,
    enablePan: true
  }
}});
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);

const div1 = AUTO.htmlRender({tag:'div',children: 'Hello World',style:{'font-size':'40px',background:'rgba(1,1,1,0.1)',padding: '20px','border-radius': '8px'}})
const div2 = AUTO.htmlRender({tag:'div',children: 'Tips',style:{'font-size':'20px',background:'#ccc',padding: '20px','border-radius': '8px'}})

// CSS2DRenderer

// const css2 = new AUTO.Tips(instance,'css2')
// const tipsMesh1 = css2.createTips(div1)
// const tipsMesh2 = css2.createTips(div2)

// tipsMesh1.position.set(1,1,1)
// tipsMesh2.position.set(0,1,0)

// CSS3DRenderer

const css3 = new AUTO.Tips(instance)
const tipsMesh1 = css3.createTips(div1)
const tipsMesh2 = css3.createTips(div2)

tipsMesh1.position.set(1,1,1)
tipsMesh1.scale.set(0.005,0.005,1)
tipsMesh2.position.set(0,1,0)
tipsMesh2.scale.set(0.005,0.005,1)
box.position.set(1,1,1)

instance.sizes.on('resize',() => {
  // css2.resize()
  css3.resize()
})
instance.time.on("tick", () => {
  // css2.update()
  css3.update()
  box.rotation.y -= Math.PI / 180;
});