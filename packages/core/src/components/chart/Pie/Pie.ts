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
    public group: THREE.Group;
    public previous: THREE.Object3D | null = null;
    public config: SeriesConfig;
    constructor(option: Partial<SeriesConfig>, instance: ThreeInstance) {
        super(instance);
        this.group = new THREE.Group();
        this.scene.add(this.group);
        this.config = mergeConfig(PIE_CONFIG, option)
        if (option.data && option.data.length) {
            this.createPie();
        } else {
            throw new Error("ThreeAuto.Pie:Data must be provided")
        }
        if (this.config.animation) {
            this.dispatchEvent();
        }
        if (this.config.tooltip.show) {
            new Tooltip(instance, this.group, this.config.tooltip)
        }
    }
    createPie() {
        const { data, height, radius, gap,transparent, opacity, selectedOffset = 5, heightMode = 'auto', name, label } = this.config;

        let sum = 0;
        let min = Number.MAX_SAFE_INTEGER;
        let max = 0;
        data.forEach((item: any) => {
            sum += item.value;
            min = Math.min(min, item.value);
            max = Math.max(max, item.value);
        });
        const valLen = max - min;

        let innerRadius = 0;
        let outerRadius = 0;
        let startAngle = 0;
        let isRing = false;
        if (Array.isArray(radius)) {
            if (radius.length === 2) {
                [innerRadius, outerRadius] = radius;
                isRing = innerRadius !== undefined && innerRadius !== null && innerRadius !== 0;
            } else {
                outerRadius = radius[0];
            }
        } else {
            outerRadius = radius;
        }
        const axis = new THREE.Vector3(1, 0, 0);
      

        data.forEach((item: any) => {
            const pieSlice = new THREE.Group()
            pieSlice.name = item.name;
            pieSlice.userData = { ...pieSlice.userData, ...item };
            pieSlice.userData.title = name;
            this.group.add(pieSlice)

            const angle = (item.value / sum) * Math.PI * 2;
            const h = heightMode === 'auto' ? height + ((item.value - min) / valLen) * height : height;
            const material = new THREE.MeshBasicMaterial({ color: item.color, side: THREE.DoubleSide, transparent, opacity });

            const outerGeometry = new THREE.CylinderGeometry(
                outerRadius,
                outerRadius,
                h,
                24,
                24,
                isRing,
                startAngle,
                angle
            );
            const outerMesh = new THREE.Mesh(outerGeometry, material);
            outerMesh.position.y = h * 0.5;
            pieSlice.add(outerMesh);

            if (isRing) {
                const innerGeometry = new THREE.CylinderGeometry(
                    innerRadius,
                    innerRadius,
                    h,
                    24,
                    24,
                    isRing,
                    startAngle,
                    angle
                );
                const innerMesh = new THREE.Mesh(innerGeometry, material);
                innerMesh.position.y = h * 0.5;
                pieSlice.add(innerMesh);

                const ringGeometry = new THREE.RingGeometry(
                    innerRadius,
                    outerRadius,
                    32,
                    1,
                    startAngle,
                    angle
                );
                const upperRing = new THREE.Mesh(ringGeometry, material);
                upperRing.rotateX(-0.5 * Math.PI);
                upperRing.rotateZ(-0.5 * Math.PI);
                upperRing.position.y = h;
                pieSlice.add(upperRing)
                const belowRing = new THREE.Mesh(ringGeometry, material);
                belowRing.rotateX(-0.5 * Math.PI);
                belowRing.rotateZ(-0.5 * Math.PI);
                belowRing.position.y = 0;
                pieSlice.add(belowRing)

                const plane = new THREE.Mesh(new THREE.PlaneGeometry(outerRadius - innerRadius, h), material);
                plane.position.y = h * 0.5;
                plane.position.x = 0;
                plane.position.z = 0;
                plane.rotation.y = startAngle + Math.PI * 0.5;
                plane.translateOnAxis(axis, -(innerRadius + 0.5 * (outerRadius - innerRadius)));
                pieSlice.add(plane);
                const plane1 = new THREE.Mesh(new THREE.PlaneGeometry(outerRadius - innerRadius, h), material);
                plane1.position.y = h * 0.5;
                plane1.position.x = 0;
                plane1.position.z = 0;
                plane1.rotation.y = startAngle + angle + Math.PI * 0.5;
                plane1.translateOnAxis(axis, -(innerRadius + 0.5 * (outerRadius - innerRadius)));
                pieSlice.add(plane1);

            } else {
                const planeGeometry = new THREE.PlaneGeometry(outerRadius, h);
                const plane1 = new THREE.Mesh(planeGeometry, material);
                plane1.position.y = h * 0.5;
                plane1.position.x = 0;
                plane1.position.z = 0;
                plane1.rotation.y = startAngle + Math.PI * 0.5;
                plane1.translateOnAxis(axis, -outerRadius * 0.5);
                pieSlice.add(plane1);
                const plane2 = new THREE.Mesh(planeGeometry, material);
                plane2.position.y = h * 0.5;
                plane2.position.x = 0;
                plane2.position.z = 0;
                plane2.rotation.y = startAngle + angle + Math.PI * 0.5;
                plane2.translateOnAxis(axis, -outerRadius * 0.5);
                pieSlice.add(plane2);
            }


            // 计算方向向量
            const centerAngle = startAngle + angle / 2;
            const direction = new THREE.Vector3(Math.sin(centerAngle), 0, Math.cos(centerAngle));
            direction.normalize();
            pieSlice.position.addScaledVector(direction, gap)
            pieSlice.userData.toTarget = pieSlice.position.clone().addScaledVector(direction, selectedOffset);
            pieSlice.userData.backTarget = pieSlice.userData.toTarget.clone().addScaledVector(direction, -selectedOffset);
            
            if (label && label.show) {
                this.createLabel(item.name, h, innerRadius + (outerRadius - innerRadius) * 0.5, direction, pieSlice)
            }

            startAngle += angle;
        });
    }

    createLabel(name: string, height: number, radius: number, direction: THREE.Vector3, pieSlice: THREE.Group) {
        const { label } = this.config;
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
        tips.position.addScaledVector(direction, radius)
        pieSlice.add(tips)
    }
    dispatchEvent() {
        const {
            animationDuration = 1000,
            animationEasing = 'power1.inOut',
            animationDelay = 0,
            eventName = 'click' } = this.config

        this._canvas.addEventListener(eventName, () => {
            const intersects = this._raycaster.onRaycasting();
            if (this.previous) {
                const target = this.previous.userData.backTarget
                gsap.killTweensOf(this.previous.position);
                gsap.to(this.previous.position, {
                    x: target.x,
                    y: target.y,
                    z: target.z,
                    duration: animationDuration / 1000,
                    ease: animationEasing,
                    delay: animationDelay / 1000
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
                            duration: animationDuration / 1000,
                            ease: animationEasing,
                            delay: animationDelay / 1000
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