import * as THREE from "three";
import BaseThree from "../../../base/BaseThree";
import { ThreeInstance } from "../../../base/ThreeInstance";

export class Pie extends BaseThree {
    group: THREE.Group;

    constructor(option: any = {}, instance: ThreeInstance) {
        super(instance);
        this.group = new THREE.Group();
        this.scene.add(this.group);
        this.createPie(option);
    }

    createPie(option: any) {
        const { data, baseHeight, radius, maxHeight } = option;
        let sum = 0;
        let min = Number.MAX_SAFE_INTEGER;
        let max = 0;

        // 计算总和、最小值和最大值
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
        const allHeight = maxHeight - baseHeight;

        let startAngle = 0;

        data.forEach((item: any) => {
            const pieSlice = new THREE.Group()
            pieSlice.name = item.name;
            this.group.add(pieSlice)
            const angle = (item.value / sum) * Math.PI * 2;
            const h = baseHeight + ((item.value - min) / valLen) * allHeight;
            const material = new THREE.MeshBasicMaterial({ color: item.color, side: THREE.DoubleSide,transparent: true, opacity: .5 });
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

            startAngle += angle;
        });
    }

    update() {
    }
}