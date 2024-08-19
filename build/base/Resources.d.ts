import { default as EventEmitter } from './EventEmitter.js';
import { SourcesItems } from '../types/ConfigType.js';
import * as THREE from "three";
export default class Resources extends EventEmitter {
    private sources;
    items: {
        [key: string]: any;
    };
    private toLoad;
    private loaded;
    private loaders;
    constructor(sources: SourcesItems[], loadingManager: THREE.LoadingManager);
    startLoading(): void;
    sourceLoaded(source: SourcesItems, file: any): void;
}
