import { default as ThreeInstance } from '../../base/ThreeInstance';
import { default as BaseThree } from '../../base/BaseThree';
import { LightItems } from '../../types/ConfigType';
export default class Light extends BaseThree {
    private light;
    constructor(config: LightItems[], instance: ThreeInstance);
    setLight(config: LightItems[]): void;
}
