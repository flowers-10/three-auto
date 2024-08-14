import { default as ThreeInstance } from './ThreeInstance';
import { default as Sizes } from './Sizes';
interface BaseThreeInterface {
    resize(): void;
    update(): void;
    dispose(): void;
}
export default class BaseThree implements BaseThreeInterface {
    protected _instance: ThreeInstance;
    protected sizes: Sizes;
    protected scene: import('three').Scene;
    protected canvas: HTMLCanvasElement;
    protected camera: import('../components/cameras/Camera').default;
    protected _camera: import('three').PerspectiveCamera;
    protected resources: import('./Resources').default;
    protected time: import('./Time').default;
    protected mouse: import('three').Vector2;
    protected eventOffset: {
        x: number;
        y: number;
    };
    constructor(_instance: ThreeInstance);
    resize(): void;
    update(): void;
    dispose(): void;
}
export {};
