import { default as EventEmitter } from './EventEmitter';
import { SizeConfigType } from '../types/ConfigType';
export default class Sizes extends EventEmitter {
    width: number;
    height: number;
    pixelRatio: number;
    private resizeHandler;
    constructor(config: SizeConfigType);
    info(message?: string): void;
    release(): void;
}
