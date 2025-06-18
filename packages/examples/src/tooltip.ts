import * as AUTO from "three-auto";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: "#E89ABE",
    transparent: true,
});
const box = new THREE.Mesh(geometry, material);
box.userData = {
    title: 'Hello!',
    name: 'box:',
    value: 'I am a box'
}

const group = new THREE.Group()
group.add(box)

new AUTO.Tooltip(instance, group, {
    className: 'three-auto-tooltip',
    background: 'rgba(255,255,255,1)',
    show: true,
    borderWidth: 1,
    padding: '15px 20px',
    hideDelay: 100,
    textStyle: {
        'font-size': '18px',
        color: "#000000",
        'font-weight': 400,
        'font-style': 'normal',
    },
});


const div1 = AUTO.htmlRender({ tag: 'div', children: 'Hover box 🤚' , style: { 'font-size': '40px', background: 'rgba(1,1,1,0.1)', padding: '20px', 'border-radius': '8px' } })
const css3 = new AUTO.Tips(instance)
const tipsMesh1 = css3.createTips(div1)
tipsMesh1.position.set(-5, 0, 0)
tipsMesh1.scale.set(0.005, 0.005, 1)

instance.time.on("tick", () => {
    css3.update()
    instance.scene.add(group)
});

instance.sizes.on('resize',() => {
    // css2.resize()
    css3.resize()
});