import * as THREE from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { ThreeInstance } from "../../../base";
import BaseThree from "../../../base/BaseThree";
import { htmlRender } from "../../web";

export class Grid extends BaseThree {
    group: THREE.Group;
    constructor(length: number = 8, instance: ThreeInstance) {
        super(instance);
        const isNegative = length >= 0 ? false : true;
        length = Math.abs(length);
        const position = length / 2;
        const loop = Math.min(length, 6);
        const step = Math.round(length / loop);

        this.group = new THREE.Group;
        instance.scene.add(this.group);
        const gridXZ = new THREE.GridHelper(length, loop, 0xEED5B7, 0xEED5B7);
        gridXZ.position.set(position, 0, position);
        this.group.add(gridXZ);

        const gridXY = new THREE.GridHelper(length, loop, 0xEED5B7, 0xEED5B7);
        gridXY.position.set(position, position, 0);
        gridXY.rotation.x = Math.PI / 2;
        this.group.add(gridXY);

        const gridYZ = new THREE.GridHelper(length, loop, 0xEED5B7, 0xEED5B7);
        gridYZ.position.set(0, position, position);
        gridYZ.rotation.z = Math.PI / 2;
        this.group.add(gridYZ);

        for (let i = 0; i < loop; ++i) {
            const labelElement = htmlRender({ tag: 'div', children: isNegative ? -i * step : i * step })
            const tip = instance.createTips(labelElement)
            tip.position.set(length * 1.05, 0, i * step)
        }

        for (let i = 0; i < loop; ++i) {
            const labelElement = htmlRender({ tag: 'div', children: isNegative ? -i * step : i * step })
            const tip = instance.createTips(labelElement)
            tip.position.set(i * step, 0, length * 1.05)
        }

        for (let i = 0; i < loop; ++i) {
            const labelElement = htmlRender({ tag: 'div', children: isNegative ? -i * step : i * step })
            const tip = instance.createTips(labelElement)
            tip.position.set(0, i * step, length * 1.05)
        }

        const linematerial = new LineMaterial({ linewidth: Math.min(length * 0.2, 2), color: 0x000 });
        const p1 = new THREE.Vector3(0, 0, length);
        const p2 = new THREE.Vector3(length, 0, length);
        const p3 = new THREE.Vector3(length, 0, 0);
        const p4 = new THREE.Vector3(length, length, 0);
        const p5 = new THREE.Vector3(0, length, 0);
        const p6 = new THREE.Vector3(0, length, length);
        const p7 = new THREE.Vector3(0, 0, length);


        const geometry2 = new LineGeometry();
        const particlePositions: THREE.Vector3[] = [];
        particlePositions.push(p1);
        particlePositions.push(p2);
        particlePositions.push(p3);
        particlePositions.push(p4);
        particlePositions.push(p5);
        particlePositions.push(p6);
        particlePositions.push(p7);

        geometry2.setPositions(particlePositions.map(({ x, y, z }) => [x, y, z]).flat())

        var line = new Line2(geometry2, linematerial);

        this.group.add(line);
    }
}