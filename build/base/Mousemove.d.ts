import { default as EventEmitter } from './EventEmitter';
import * as THREE from "three";
export default class Mousemove extends EventEmitter {
    private canvas;
    eventOffset: {
        x: number;
        y: number;
    };
    mouse: THREE.Vector2;
    private mouseMoveHandler;
    constructor(canvas: HTMLCanvasElement);
    release(): void;
}
