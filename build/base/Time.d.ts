import { default as EventEmitter } from './EventEmitter';
export default class Time extends EventEmitter {
    private clock;
    start: number;
    private current;
    elapsed: number;
    delta: number;
    private timer;
    private index;
    elapsedTime: number;
    private animationTick;
    constructor();
    tick(): void;
    release(): void;
    tickS(interval: number | undefined, fn: (e: number) => void): void;
}
