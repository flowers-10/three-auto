import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ThreeInstance } from '../../base/ThreeInstance';
import { default as BaseThree } from '../../base/BaseThree';
import { CameraConfig } from '../../types/ConfigType';
import * as THREE from "three";
export default class Camera extends BaseThree {
    private cameraConfig;
    controls: OrbitControls;
    instance: THREE.PerspectiveCamera;
    constructor(config: CameraConfig, instance: ThreeInstance);
    setInstance(): void;
    setControls(): void;
    resize(): void;
    update(): void;
    dispose(): void;
}
