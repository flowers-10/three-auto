import * as THREE from "three";

import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { ShadowConfig } from "../../types";
export class Shadow extends BaseThree {
    group: THREE.Group = new THREE.Group();
    environment: THREE.Mesh | null = null;
    constructor(config: ShadowConfig, instance: ThreeInstance) {
        super(instance);
        this.scene.add(this.group)
        this.group.name = "shadow";
        this.createShadow(config)
    }
    createShadow(config: ShadowConfig) {
        const { width = 10, height = 10, color = '#000', opacity = 0.1, rotation, position } = config
        const geometry = new THREE.PlaneGeometry(width, height);
        const shadowMaterial = new THREE.ShadowMaterial({
            color,
            opacity
        });
        this.environment = new THREE.Mesh(geometry, shadowMaterial);
        this.environment.name = 'environment';
        this.environment.rotation.set(rotation?.x || 0, rotation?.y || 0, rotation?.z || 0);
        this.environment.position.set(position?.x || 0, position?.y || 0, position?.z || 0);
        this.environment.receiveShadow = true;
        this.group.add(this.environment);
        const directionalLight = new THREE.DirectionalLight('#000', 0.1);
        directionalLight.position.set(50,100,0);
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 100;
        directionalLight.shadow.camera.bottom = -100;
        directionalLight.shadow.camera.near = 1;
        directionalLight.shadow.camera.far = 1000;
        directionalLight.shadow.radius = 100;
        directionalLight.shadow.normalBias = 0.027;
        directionalLight.shadow.bias = -0.004;
        directionalLight.castShadow = true;
        const lightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
        this.group.add(directionalLight);
        this.group.add(lightCameraHelper);
        this._instance._renderer.shadowMap.enabled = true;
        this._instance._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
}