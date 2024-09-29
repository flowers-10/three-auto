import * as THREE from "three";
import BaseThree from "../../../base/BaseThree";
import { ThreeInstance } from "../../../base/ThreeInstance";
import { htmlRender } from "../../web";
import { LabelStyle, SeriesConfig } from "../../../types";

export class Pie extends BaseThree {
    group: THREE.Group;
    previous: THREE.Object3D | null = null;
    constructor(option: Partial<SeriesConfig>, instance: ThreeInstance) {
        super(instance);
        this.group = new THREE.Group();
        this.scene.add(this.group);
        this.createPie(option);
        this.dispatchEvent()
    }

    createPie(option: any) {
        const { data, height, radius, gap } = option;
        let sum = 0;
        let min = Number.MAX_SAFE_INTEGER;
        let max = 0;
        data.forEach((item: any) => {
            sum += item.value;
            if (min > item.value) {
                min = item.value;
            }
            if (max < item.value) {
                max = item.value;
            }
        });

        const valLen = max - min;
        let startAngle = 0;

        data.forEach((item: any) => {
            const pieSlice = new THREE.Group()
            pieSlice.name = item.name;
            this.group.add(pieSlice)

            const angle = (item.value / sum) * Math.PI * 2;
            const h = height + ((item.value - min) / valLen) * height;
            const material = new THREE.MeshBasicMaterial({ color: item.color, side: THREE.DoubleSide, transparent: true, opacity: .5 });
            const geometry = new THREE.CylinderGeometry(
                radius,
                radius,
                h,
                24,
                24,
                false,
                startAngle,
                angle
            );
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.y = h * 0.5;

            // 计算方向向量
            const centerAngle = startAngle + angle / 2;
            const direction = new THREE.Vector3(Math.sin(centerAngle), 0, Math.cos(centerAngle));
            direction.normalize();
            pieSlice.userData.dir = direction
            pieSlice.userData.reverseDir = direction.clone().negate();
            pieSlice.position.addScaledVector(direction, gap)
            pieSlice.add(mesh);

            const planeGeometry = new THREE.PlaneGeometry(radius, h);

            const plane1 = new THREE.Mesh(planeGeometry, material);
            plane1.position.y = h * 0.5;
            plane1.position.x = 0;
            plane1.position.z = 0;
            plane1.rotation.y = startAngle + Math.PI * 0.5;
            plane1.translateOnAxis(new THREE.Vector3(1, 0, 0), -radius * 0.5);
            pieSlice.add(plane1);

            const plane2 = new THREE.Mesh(planeGeometry, material);
            plane2.position.y = h * 0.5;
            plane2.position.x = 0;
            plane2.position.z = 0;
            plane2.rotation.y = startAngle + angle + Math.PI * 0.5;
            plane2.translateOnAxis(new THREE.Vector3(1, 0, 0), -radius * 0.5);
            pieSlice.add(plane2);

            if (option.label.show) {
                this.createLabel(item.name, h, direction, option.label)
            }

            startAngle += angle;
        });
    }
    createLabel(label: string, height: number, direction: THREE.Vector3, option: LabelStyle) {
        const { distance = 0, rotation = {
            x: 0,
            y: 0,
            z: 0,
        }, textStyle ,scale = 1} = option

        const labelElement = htmlRender({
            tag: 'div', children: label, style: textStyle,
        })
        const tips = this._instance.createTips(labelElement)
        tips.position.y = height + (distance || 0);
        tips.scale.set(scale,scale,scale)
        tips.rotation.set(rotation.x, rotation.y, rotation.z)
        tips.position.addScaledVector(direction, 30 / 2)
    }
    dispatchEvent(eventName: string = 'click') {
        this._canvas.addEventListener(eventName, () => {
            const intersects = this._raycaster.onRaycasting();
            if (this.previous) {
                const dir = this.previous.userData.dir
                this.previous.position.addScaledVector(dir, -2)
                this.previous = null
            }
            this.group.children.forEach(item => {
                item.children.forEach(itemX => {
                    if (intersects && intersects[0].object.uuid === itemX.uuid) {
                        this.previous = item
                        const dir = item.userData.dir
                        item.position.addScaledVector(dir, 2)
                    }
                })
            })
        })
    }
    update() {
    }
}