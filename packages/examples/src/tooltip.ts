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

instance.time.on("tick", () => {
    instance.scene.add(group)
});