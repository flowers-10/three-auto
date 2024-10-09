import * as THREE from "three";

import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";

export class Shadow extends BaseThree {
    group: THREE.Group = new THREE.Group();
    environment: THREE.Mesh | null = null;
    constructor(config: any, instance: ThreeInstance) {
        super(instance);
        this.scene.add(this.group)
        this.group.name = "shadow";
        this.createShadow(config)
    }
    createShadow(config:any) {
        console.log(config,111);
        const geometry = new THREE.PlaneGeometry(400, 400);
        const shadowMaterial = new THREE.ShadowMaterial({
            color: 0x000000,
            opacity: 0.1,
        });
        this.environment = new THREE.Mesh(geometry, shadowMaterial);
        this.environment.name = 'environment';
        this.environment.rotation.x = -Math.PI / 2;
        this.environment.receiveShadow = true;
        this.group.add(this.environment);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
        directionalLight.position.set(30, 100, 100);
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 100;
        directionalLight.shadow.camera.bottom = -100;
        directionalLight.shadow.camera.near = 0.1;
        directionalLight.shadow.camera.far = 1000;
        directionalLight.shadow.radius = 10;
        directionalLight.shadow.normalBias = 0.027;
        directionalLight.shadow.bias = -0.004;
        directionalLight.castShadow = true;
        const helper = new THREE.CameraHelper(directionalLight.shadow.camera)
        helper.visible = false;
        this.group.add(helper);
        this.group.add(directionalLight);
        this._instance._renderer.shadowMap.enabled = true;
        this._instance._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
}