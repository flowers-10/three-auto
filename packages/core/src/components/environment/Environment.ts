import * as THREE from "three";

import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";

export class Environment extends BaseThree {
    cubeCamera: THREE.CubeCamera;
    constructor(config: any, instance: ThreeInstance) {
        super(instance)
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(
            256,
            {
                type: THREE.FloatType
            }
        )
        this.scene.environment = cubeRenderTarget.texture
        this.cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget)
        // this.update()
    }
    update() {
        this._instance.onTick(() => {
            this.cubeCamera.update(this._instance._renderer, this.scene)
        })
    }
}