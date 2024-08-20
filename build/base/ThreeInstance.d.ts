import { ConfigType } from '../types/ConfigType';
import { default as Mousemove } from '../base/Mousemove';
import { default as Time } from '../base/Time';
import { default as Sizes } from '../base/Sizes';
import { Resources } from './Resources';
import { default as Camera } from '../components/cameras/Camera';
import { default as Renderer } from '../components/renderers/Renderer';
import { default as Light } from '../components/lights/Light';
import { default as Raycaster } from '../components/Raycaster';
import * as THREE from "three";
export interface ThreeInstance {
    time: Time;
    light: Light;
    scene: THREE.Scene;
    sizes: Sizes;
    camera: Camera;
    config: any;
    _config: ConfigType;
    _canvas: HTMLCanvasElement;
    renderer: Renderer;
    mousemove: Mousemove;
    raycaster: Raycaster;
}
declare class ThreeAuto implements ThreeInstance {
    time: Time;
    light: Light;
    scene: THREE.Scene;
    sizes: Sizes;
    camera: Camera;
    config: any;
    _config: ConfigType;
    _canvas: HTMLCanvasElement;
    renderer: Renderer;
    mousemove: Mousemove;
    raycaster: Raycaster;
    Resources: typeof Resources;
    constructor(canvas?: HTMLCanvasElement, config?: ConfigType);
    resize(): void;
    update(): void;
    clearGroup(group: any): void;
    dispose(): void;
}
export { ThreeAuto };
