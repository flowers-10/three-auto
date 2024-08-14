import { default as ThreeInstance } from '../../base/ThreeInstance';
import { default as BaseThree } from '../../base/BaseThree';
import { BloomConfigType } from '../../types/ConfigType';
export default class BloomPass extends BaseThree {
    private renderer;
    private bloomLayer;
    private materials;
    private darkMaterial;
    private bloomComposer;
    private finalComposer;
    constructor(config: BloomConfigType, instance: ThreeInstance);
    setBloomPass(config: BloomConfigType): void;
    darkenNonBloomed: (obj: any) => void;
    restoreMaterial: (obj: any) => void;
    update(): void;
}
