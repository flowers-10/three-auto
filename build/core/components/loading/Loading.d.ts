import { default as ThreeInstance } from '../../base/ThreeInstance';
import { default as BaseThree } from '../../base/BaseThree';
import * as THREE from "three";
export default class LoadingManager extends BaseThree {
    loadingManager: THREE.LoadingManager;
    constructor(instance: ThreeInstance);
    createLoading(flag: boolean): void;
    endLoading(): void;
    endLoadingBar(loaded: number, total: number): void;
    resize(): void;
    update(): void;
    dispose(): void;
}
