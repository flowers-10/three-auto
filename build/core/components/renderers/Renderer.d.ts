import { default as ThreeInstance } from '../../base/ThreeInstance';
import { default as BaseThree } from '../../base/BaseThree';
import { RendererConfig } from '../../types/ConfigType';
import * as THREE from "three";
export default class Renderer extends BaseThree {
    instance: THREE.WebGLRenderer;
    constructor(config: RendererConfig, instance: ThreeInstance);
    setRenderer(config: RendererConfig): void;
    info(message?: string): void;
    resize(): void;
    update(): void;
    dispose(): void;
}
