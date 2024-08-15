import { ThreeInstance } from '../base/ThreeInstance';
import { default as BaseThree } from '../base/BaseThree';
import * as THREE from "three";
export default class Raycaster extends BaseThree {
    raycaster: THREE.Raycaster;
    constructor(instance: ThreeInstance);
    update(): void;
}
