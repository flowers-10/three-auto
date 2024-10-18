import { Effect } from "postprocessing";
import * as THREE from "three";
import fragmentShader from "./GTToneMap.glsl";

export interface GTToneMapEffectProps {
    MaxLuminanice?: number;
    Contrast?: number;
    LinearSectionStart?: number;
    LinearSectionLength?: number;
    BlackTightnessC?: number;
    BlackTightnessB?: number;
    Enabled?: boolean;
}

export class GTToneMapEffect extends Effect {
    constructor(args: GTToneMapEffectProps) {
        super("GTToneMap", fragmentShader, {
            uniforms: new Map<string, any>([
                ["uMaxLuminanice", new THREE.Uniform(args.MaxLuminanice)],
                ["uContrast", new THREE.Uniform(args.Contrast)],
                ["uLinearSectionStart", new THREE.Uniform(args.LinearSectionStart)],
                ["uLinearSectionLength", new THREE.Uniform(args.LinearSectionLength)],
                ["uBlackTightnessC", new THREE.Uniform(args.BlackTightnessC)],
                ["uBlackTightnessB", new THREE.Uniform(args.BlackTightnessB)],
                ["uEnabled", new THREE.Uniform(args.Enabled ? 1 : 0)],
            ]),
        });
    }
   
}
