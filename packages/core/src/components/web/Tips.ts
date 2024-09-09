import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/Addons.js";
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";

type TipsType = 'css3' | 'css2'
const rendererMap = {
    css3: CSS3DRenderer,
    css2: CSS2DRenderer
}
const objectMap = {
    css3: CSS3DObject,
    css2: CSS2DObject
}

export class Tips extends BaseThree {
    public cssRenderer: CSS2DRenderer | CSS3DRenderer
    public domElement: HTMLElement
    public tips: THREE.Group
    public type: TipsType
    constructor(instance: ThreeInstance,type: TipsType = 'css3') {
        super(instance);
        this.type = type
        this.tips = new THREE.Group()
        this.scene.add(this.tips)
        this.cssRenderer = new rendererMap[type]()
        this.cssRenderer.setSize(this.sizes?.width, this.sizes.height);
        this.domElement = this.cssRenderer.domElement;
        this.domElement.style.position = 'absolute';
        this.domElement.style.top = '0px';
        this.domElement.style.pointerEvents = 'none';
        document.body.appendChild(this.cssRenderer.domElement);
    }
    createTips(root: HTMLElement) {
        const tag = new objectMap[this.type](root);
        root.style.pointerEvents = 'none';
        this.tips.add(tag)
        return tag
    }
    resize() {
        this.cssRenderer.setSize(this.sizes?.width, this.sizes.height);
    }
    update() {
        this.cssRenderer.render(this.scene, this._camera);

    }
}