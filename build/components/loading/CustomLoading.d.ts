import * as THREE from "three";
export declare class CustomLoading {
    loadingManager: THREE.LoadingManager;
    constructor(type: string);
    createLoading(): void;
    autoEndLoading(): void;
    endLoading(): void;
    endLoadingBar(loaded: number, total: number): void;
    dispose(): void;
}
