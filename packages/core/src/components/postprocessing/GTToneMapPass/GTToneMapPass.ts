import { ThreeInstance } from "../../../base";
import { CustomPass } from "../CustomPass";
import { GTToneMapEffect } from "./GTToneMapEffect";
import { EffectPass } from "postprocessing";


export class GTToneMapPass extends CustomPass {
    effect: GTToneMapEffect;
    constructor(config: GTToneMapEffect, instance: ThreeInstance) {
        super(instance);
        const newConfig = {
            MaxLuminanice: 1.0,
            Contrast: 1.0,
            LinearSectionStart: 0.22,
            LinearSectionLength: 0.4,
            BlackTightnessC: 1.33,
            BlackTightnessB: 0.0,
            Enabled: true,
            ...config
        }
        const { MaxLuminanice, Contrast, LinearSectionStart, LinearSectionLength, BlackTightnessC, BlackTightnessB, Enabled } = newConfig;
        this.effect = new GTToneMapEffect({
            MaxLuminanice, Contrast, LinearSectionStart, LinearSectionLength, BlackTightnessC, BlackTightnessB, Enabled
        });
        this.composer.addPass(new EffectPass(this._camera, this.effect));
    }
    render() {
        this.composer.render();
    }
}
