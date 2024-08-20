import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { default as EventEmitter } from './EventEmitter.js';
import * as THREE from "three";
export type SourcesType = "TEXTURE" | "CUBE_TEXTURE" | "GLTF" | "MP3" | "FONT";
export type SourcesItems = {
    name: string;
    type: SourcesType;
    path: string;
    show: boolean;
};
export type Loaders = {
    gltfLoader: GLTFLoader;
    textureLoader: THREE.TextureLoader;
    cubeTextureLoader: THREE.CubeTextureLoader;
    fontLoader: FontLoader;
    audioLoader: THREE.AudioLoader;
};
export declare class Resources extends EventEmitter {
    private sources;
    items: {
        [key: string]: any;
    };
    toLoad: number;
    loaded: number;
    private loaders;
    constructor(sources: SourcesItems[], loadingManager?: string | THREE.LoadingManager);
    private createLoadingManager;
    private createLoaders;
    startLoading(): void;
    sourceLoaded(source: SourcesItems, file: any): void;
    get getLoaded(): boolean;
    get getProgress(): number;
}
