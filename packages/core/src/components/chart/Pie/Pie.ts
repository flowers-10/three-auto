import * as THREE from "three";
import BaseThree from "../../../base/BaseThree";
import { ThreeInstance } from "../../../base/ThreeInstance";
import { htmlRender } from "../../web";
import { SeriesConfig } from "../../../types";
import { Tooltip } from "../../web/Tooltip";
import gsap from "gsap";
import { mergeConfig } from "../../../shared";
import { PIE_CONFIG } from "../../../config";

export class Pie extends BaseThree {
    group: THREE.Group;
    previous: THREE.Object3D | null = null;
    config: SeriesConfig;
    constructor(option: Partial<SeriesConfig>, instance: ThreeInstance) {
        super(instance);
        this.group = new THREE.Group();
        this.scene.add(this.group);
        this.config = mergeConfig(PIE_CONFIG, option)
        if (option.data && option.data.length) {
            this.createPie();
            this.dispatchEvent(option.eventName);
        } else {
            throw new Error("ThreeAuto.Pie:Data must be provided")
        }
        console.log(this.config);
        
        if (this.config.tooltip.show) {
            new Tooltip(instance, this.group, this.config.tooltip)
        }
    }
    createPie() {
        const { data, height, radius, gap, opacity, selectedOffset = 5, heightMode = 'auto', name, label } = this.config;
        let sum = 0;
        let h = 0;
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
            pieSlice.userData = { ...pieSlice.userData, ...item };
            pieSlice.userData.title = name;
            this.group.add(pieSlice)

            const angle = (item.value / sum) * Math.PI * 2;
            if (heightMode === 'auto') {
                h = height + ((item.value - min) / valLen) * height;
            } else {
                h = height
            }
            const material = new THREE.MeshBasicMaterial({ color: item.color, side: THREE.DoubleSide, transparent: true, opacity, depthWrite: false });
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
            pieSlice.position.addScaledVector(direction, gap)
            pieSlice.userData.toTarget = pieSlice.position.clone().addScaledVector(direction, selectedOffset);
            pieSlice.userData.backTarget = pieSlice.userData.toTarget.clone().addScaledVector(direction, -selectedOffset);
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

            if (label && label.show) {
                this.createLabel(item.name, h, direction)
            }

            startAngle += angle;
        });
    }
    createLabel(name: string, height: number, direction: THREE.Vector3) {
        const { radius, label } = this.config;
        const { distance = 0, rotation = {
            x: 0,
            y: 0,
            z: 0,
        }, textStyle, scale = 1, } = label

        const labelElement = htmlRender({
            tag: 'div', children: name, style: textStyle,
        })
        const tips = this._instance.createTips(labelElement)
        tips.position.y = height + distance;
        tips.scale.set(scale, scale, scale)
        tips.rotation.set(rotation.x, rotation.y, rotation.z)
        tips.position.addScaledVector(direction, radius * 0.65)
    }
    dispatchEvent(eventName: string = 'click') {
        this._canvas.addEventListener(eventName, () => {
            const intersects = this._raycaster.onRaycasting();
            if (this.previous) {

                const target = this.previous.userData.backTarget
                gsap.killTweensOf(this.previous.position);
                gsap.to(this.previous.position, {
                    x: target.x,
                    y: target.y,
                    z: target.z,
                    duration: 0.35,
                    ease: 'power1.inOut'
                })

                this.previous = null
            }
            this.group.children.forEach(item => {
                item.children.forEach(itemX => {
                    if (intersects && intersects[0].object.uuid === itemX.uuid) {

                        const target = item.userData.toTarget
                        gsap.killTweensOf(item.position);
                        gsap.to(item.position, {
                            x: target.x,
                            y: target.y,
                            z: target.z,
                            duration: 0.35,
                            ease: 'power1.inOut'
                        })
                        this.previous = item

                    }
                })
            })
        })
    }
    update() {
        this._instance.onTick(() => {
            document.body.style.cursor = 'auto';
            const intersects = this._raycaster.onRaycasting();
            if (intersects) {
                document.body.style.cursor = 'pointer';
            }
        })
    }
}