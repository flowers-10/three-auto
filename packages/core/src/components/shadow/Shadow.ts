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
        const { width = 10, height = 10, color = '#000', opacity = 0.1, light,rotation } = config
        const { helper = false,
            color: lightColor = '#fff',
            intensity = 10,
            position,
            mapWidth = 1024,
            mapHeight = 1024,
            left = -100,
            top = 100,
            bottom = -100,
            right = 100,
            near = 0.1,
            far = 100,
            radius = 10,
            bias = 0.027,
            normalBias = -0.004 } = light
        const geometry = new THREE.PlaneGeometry(width, height);
        const shadowMaterial = new THREE.ShadowMaterial({
            color,
            opacity
        });
        this.environment = new THREE.Mesh(geometry, shadowMaterial);
        this.environment.name = 'environment';
        this.environment.rotation.set(rotation?.x || 0, rotation?.y || 0, rotation?.z || 0);
        this.environment.receiveShadow = true;
        this.group.add(this.environment);
        const directionalLight = new THREE.DirectionalLight(lightColor, intensity);
        directionalLight.position.set(position?.x || 1, position?.y || 1, position?.z || 1);
        directionalLight.shadow.mapSize.width = mapWidth;
        directionalLight.shadow.mapSize.height = mapHeight;
        directionalLight.shadow.camera.left = left;
        directionalLight.shadow.camera.right = right;
        directionalLight.shadow.camera.top = top;
        directionalLight.shadow.camera.bottom = bottom;
        directionalLight.shadow.camera.near = near;
        directionalLight.shadow.camera.far = far;
        directionalLight.shadow.radius = radius;
        directionalLight.shadow.normalBias = normalBias;
        directionalLight.shadow.bias = bias;
        directionalLight.castShadow = true;
        const lightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
        lightCameraHelper.visible = helper;
        this.group.add(lightCameraHelper);
        this.group.add(directionalLight);
        this._instance._renderer.shadowMap.enabled = true;
        this._instance._renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
}