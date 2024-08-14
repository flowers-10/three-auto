import * as THREE from "three";
import ThreeInstance from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { ExtendType } from "../../types/ExtendType";

// import { eventBus } from '@BI/utils/eventBus'
export default class Sprite extends BaseThree {
    public spriteGroup: THREE.Group;
    constructor(instance: ThreeInstance) {
        super(instance);
        this.spriteGroup = new THREE.Group();
    }
    // 创建坐标精灵
    createSprite(data: any) {
        if (!data.length)
            return console.error(
                "tips: Please use the array type for the data configuration items in spriteConfig."
            );
        this.spriteGroup.name = "location-tips";
        //  wait
        this.resources.on("ready", async () => {
            // Setup
            data.forEach((item:any) => {
                const texture = this.resources.items[item.texture];
                texture.colorSpace = THREE.SRGBColorSpace;
                const spriteMaterial = new THREE.SpriteMaterial({
                    map: texture,
                });
                // GPU
                spriteMaterial.onBeforeCompile = (shader) => {
                    shader.fragmentShader = shader.fragmentShader.replace(
                        "#include <opaque_fragment>",
                        `
                    #include <opaque_fragment>
                    if(gl_FragColor.a <.8){discard;}
                    `
                    );
                };
               
                type NewSprite = ExtendType<THREE.Sprite,'properties',any>
                const sprite = new THREE.Sprite(spriteMaterial) as NewSprite
                sprite.scale.set(item.scaleX, item.scaleY, 1); 
                sprite.position.set(item.x, item.y, item.z);
                sprite.properties = item;
                this.spriteGroup.add(sprite);
            });
            this.scene.add(this.spriteGroup);
        });
    }
}