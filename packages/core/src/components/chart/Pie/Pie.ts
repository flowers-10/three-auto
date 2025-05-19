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
    public animationId: number | null = null;
    private currentIndex: number = 0; // 添加当前索引追踪
    constructor(option: Partial<SeriesConfig>, instance: ThreeInstance) {
        super(instance);
        this.group = new THREE.Group();
        this.scene.add(this.group);
        this.config = mergeConfig(PIE_CONFIG, option);
        if (option.data && option.data.length) {
            this.createPie();
        } else {
            throw new Error("ThreeAuto.Pie:Data must be provided");
        }
        this.dispatchEvent();

        if (this.config.animation) {
            this.dispatchAnimation();
            // 添加鼠标移入移出事件监听
            this._canvas.addEventListener("mouseenter", () => {
                this.stopAnimation();
            });

            this._canvas.addEventListener("mouseleave", () => {
                if (this.config.animation) {
                    this.dispatchAnimation();
                }
            });
        }

        if (this.config.tooltip.show) {
            new Tooltip(instance, this.group, this.config.tooltip);
        }
    }
    createPie() {
        const {
            data,
            height,
            radius,
            gap,
            transparent,
            opacity,
            emphasis,
            heightMode = "auto",
            name,
            label,
            shadow = false,
        } = this.config;
        const { scaleSize } = emphasis;
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
                isRing =
                    innerRadius !== undefined &&
                    innerRadius !== null &&
                    innerRadius !== 0;
            } else {
                outerRadius = radius[0];
            }
        } else {
            outerRadius = radius;
        }
        const axis = new THREE.Vector3(1, 0, 0);

        data.forEach((item: any) => {
            const pieSlice = new THREE.Group();
            pieSlice.name = item.name;
            item.percent = (item.value / sum) * 100;
            pieSlice.userData = { ...pieSlice.userData, ...item };
            pieSlice.userData.title = name;
            this.group.add(pieSlice);

            const angle = (item.value / sum) * Math.PI * 2;
            const h =
                heightMode === "auto"
                    ? height + ((item.value - min) / valLen) * height
                    : height;
            const material = new THREE[
                shadow ? "MeshStandardMaterial" : "MeshBasicMaterial"
            ]({
                color: item.color,
                side: THREE.DoubleSide,
                transparent,
                opacity,
                roughness: 0.7,
            });
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
            outerMesh.castShadow = shadow;
            outerMesh.receiveShadow = shadow;
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
                innerMesh.castShadow = shadow;
                innerMesh.receiveShadow = shadow;
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
                pieSlice.add(upperRing);
                const belowRing = new THREE.Mesh(ringGeometry, material);
                belowRing.rotateX(-0.5 * Math.PI);
                belowRing.rotateZ(-0.5 * Math.PI);
                belowRing.position.y = 0;
                belowRing.castShadow = shadow;
                belowRing.receiveShadow = shadow;
                pieSlice.add(belowRing);

                const plane = new THREE.Mesh(
                    new THREE.PlaneGeometry(outerRadius - innerRadius, h),
                    material
                );
                plane.position.y = h * 0.5;
                plane.position.x = 0;
                plane.position.z = 0;
                plane.rotation.y = startAngle + Math.PI * 0.5;
                plane.translateOnAxis(
                    axis,
                    -(innerRadius + 0.5 * (outerRadius - innerRadius))
                );
                plane.castShadow = shadow;
                plane.receiveShadow = shadow;
                pieSlice.add(plane);
                const plane1 = new THREE.Mesh(
                    new THREE.PlaneGeometry(outerRadius - innerRadius, h),
                    material
                );
                plane1.position.y = h * 0.5;
                plane1.position.x = 0;
                plane1.position.z = 0;
                plane1.rotation.y = startAngle + angle + Math.PI * 0.5;
                plane1.translateOnAxis(
                    axis,
                    -(innerRadius + 0.5 * (outerRadius - innerRadius))
                );
                plane1.castShadow = shadow;
                plane1.receiveShadow = shadow;
                pieSlice.add(plane1);
            } else {
                const planeGeometry = new THREE.PlaneGeometry(outerRadius, h);
                const plane1 = new THREE.Mesh(planeGeometry, material);
                plane1.position.y = h * 0.5;
                plane1.position.x = 0;
                plane1.position.z = 0;
                plane1.rotation.y = startAngle + Math.PI * 0.5;
                plane1.translateOnAxis(axis, -outerRadius * 0.5);
                plane1.castShadow = shadow;
                plane1.receiveShadow = shadow;
                pieSlice.add(plane1);
                const plane2 = new THREE.Mesh(planeGeometry, material);
                plane2.position.y = h * 0.5;
                plane2.position.x = 0;
                plane2.position.z = 0;
                plane2.rotation.y = startAngle + angle + Math.PI * 0.5;
                plane2.translateOnAxis(axis, -outerRadius * 0.5);
                plane2.castShadow = shadow;
                plane2.receiveShadow = shadow;
                pieSlice.add(plane2);
            }

            // 计算方向向量
            const centerAngle = startAngle + angle / 2;
            const direction = new THREE.Vector3(
                Math.sin(centerAngle),
                0,
                Math.cos(centerAngle)
            );
            direction.normalize();
            pieSlice.position.addScaledVector(direction, gap);
            pieSlice.userData.toTarget = pieSlice.position
                .clone()
                .addScaledVector(direction, scaleSize);
            pieSlice.userData.backTarget = pieSlice.userData.toTarget
                .clone()
                .addScaledVector(direction, -scaleSize);

            if (!!label) {
                this.createLabel(
                    item,
                    data,
                    h,
                    innerRadius + (outerRadius - innerRadius) * 0.5,
                    direction,
                    'label',
                    pieSlice
                );
            }

            if (!!emphasis.label) {
                this.createLabel(
                    item,
                    data,
                    h,
                    innerRadius + (outerRadius - innerRadius) * 0.5,
                    direction,
                    'emphasis',
                    pieSlice
                );
            }
            startAngle += angle;
        });
    }

    createLabel(
        item: any,
        data: any[],
        height: number,
        radius: number,
        direction: THREE.Vector3,
        type: string,
        pieSlice: THREE.Group
    ) {
        const { label } = type === 'label' ? this.config : this.config.emphasis;
        const {
            distance = 0,
            position = "inside",
            show = true,
            rotation = {
                x: 0,
                y: 0,
                z: 0,
            },
            textStyle,
            scale = 1,
            formatter,
        } = label;

        let children = item.name
        if (formatter) {
            children = formatter({ data, value: item.value, name: item.name, seriesName: this.config.name, color: item.color, percent: item.percent });
        }
        const labelElement = htmlRender({
            tag: "div",
            children,
            style: textStyle,
        });
        const tips = this._instance.createTips(labelElement);
        tips.name = type;
        tips.scale.set(scale, scale, scale);
        tips.rotation.set(rotation.x, rotation.y, rotation.z);
        pieSlice.add(tips);
        tips.visible = type === 'label' ? show : false;
        switch (position) {
            case "inside":
                tips.position.y = height + distance;
                tips.position.addScaledVector(direction, radius);
                break;
            case "center":
                tips.position.copy(this.group.position);
                break;
        }
    }
    handleAnimation(currentItem: THREE.Object3D, isPrevious: boolean = false) {
        const {
            animationDuration = 1000,
            animationEasing = "power1.inOut",
            animationDelay = 0,
            emphasis
        } = this.config;
        const { selectedMode = 'offset', scaleSize = 4 } = emphasis;
        if (selectedMode === "offset") {
            // 偏移模式
            const target = isPrevious
                ? currentItem.userData.backTarget :
                currentItem.userData.toTarget;
            gsap.killTweensOf(currentItem.position);
            gsap.to(currentItem.position, {
                x: target.x,
                y: target.y,
                z: target.z,
                duration: animationDuration / 1000,
                ease: animationEasing,
                delay: animationDelay / 1000,
            });
        } else if (selectedMode === "height") {
            // 高度模式
            gsap.killTweensOf(currentItem.scale);
            gsap.to(currentItem.scale, {
                y: isPrevious ? 1 : scaleSize,
                duration: animationDuration / 1000,
                ease: animationEasing,
                delay: animationDelay / 1000,
            });
        }
        if (isPrevious) {
            currentItem.children.forEach((item) => {
                if (item.name === 'emphasis') {
                    item.visible = false;
                }
            });
        } else {
            currentItem.children.forEach((item) => {
                if (item.name === 'emphasis') {
                    item.visible = true;
                }
            });
        }
    }
    dispatchEvent() {
        this._canvas.addEventListener(this.config.eventName, () => {
            const intersects = this._raycaster.onRaycasting();
            if (this.previous) {
                this.handleAnimation(this.previous, true);
                this.previous = null;
            }

            this.group.children.forEach((item) => {
                item.children.forEach((itemX) => {
                    if (intersects && intersects[0].object.uuid === itemX.uuid) {
                        this.handleAnimation(item, false);
                        this.previous = item;
                    }
                });
            });
        });
    }
    dispatchAnimation() {
        if (this.animationId !== null) return;
        const { animationDurationUpdate = 3000 } = this.config;

        this.animationId = setInterval(() => {
            // 重置前一个选中状态
            if (this.previous) {
                this.handleAnimation(this.previous, true);
            }

            // 获取当前要激活的项
            const currentItem = this.group.children[this.currentIndex];

            this.handleAnimation(currentItem, false);
            this.previous = currentItem;

            // 更新索引，循环
            this.currentIndex = (this.currentIndex + 1) % this.group.children.length;
        }, animationDurationUpdate);
    }
    stopAnimation() {
        if (this.animationId !== null) {
            clearInterval(this.animationId);
            this.animationId = null; // 重置 animationId
        }
    }
    update() {
        this._instance.onTick(() => {
            document.body.style.cursor = "auto";
            const intersects = this._raycaster.onRaycasting();
            if (intersects) {
                document.body.style.cursor = "pointer";
            }
        });
    }
}
