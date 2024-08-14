import { default as ThreeInstance } from '../../base/ThreeInstance';
import { default as BaseThree } from '../../base/BaseThree';
import * as THREE from "three";
export default class Sprite extends BaseThree {
    spriteGroup: THREE.Group;
    constructor(instance: ThreeInstance);
    createSprite(data: any): void;
}
