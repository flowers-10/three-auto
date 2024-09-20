import * as THREE from "three";
import BaseThree from "../../../base/BaseThree";
import { ThreeInstance } from "../../../base/ThreeInstance";
import { Resources } from "../../../base";
import earthVertexShader from "./shaders/earth/vertex.glsl";
import earthFragmentShader from "./shaders/earth/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphere/vertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphere/fragment.glsl";

export class Earth extends BaseThree {
    resources: Resources;
    earth: THREE.Mesh | null;
    atmosphere: THREE.Mesh | null;
    sunDirection: THREE.Vector3;
    sunSpherical: THREE.Spherical;
    constructor(option: any, instance: ThreeInstance) {
        super(instance);
        this.resources = new Resources([
            {
                name: "day",
                type: "TEXTURE",
                path: "./earth/day.jpg",
            },
            {
                name: "night",
                type: "TEXTURE",
                path: "./earth/night.jpg",
            },
            {
                name: "specularClouds",
                type: "TEXTURE",
                path: "./earth/specularClouds.jpg",
            },

        ]);
        const earthGeometry = new THREE.SphereGeometry(2, 64, 64)
        this.sunDirection = new THREE.Vector3();
        this.sunSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5);
        option = {
            atmosphereDayColor: '#00aaff',
            atmosphereTwilightColor: '#ff6600'
        }
        this.createEarth(earthGeometry, option)
        this.createAtmosphere(earthGeometry, option)
        this.createSun()
        this.earth = null;
        this.atmosphere = null;
    }
    createEarth(earthGeometry: any, option: any) {
        this.resources.on('ready', () => {
            const earthDayTexture = this.resources.items.get('day')
            const earthNightTexture = this.resources.items.get('night')
            const earthSpecularCloudsTexture = this.resources.items.get('specularClouds')
            earthDayTexture.colorSpace = THREE.SRGBColorSpace
            earthDayTexture.anisotropy = 8
            earthNightTexture.colorSpace = THREE.SRGBColorSpace
            earthNightTexture.anisotropy = 8
            earthSpecularCloudsTexture.anisotropy = 8
            const earthMaterial = new THREE.ShaderMaterial({
                vertexShader: earthVertexShader,
                fragmentShader: earthFragmentShader,
                uniforms: {
                    uDayTexture: new THREE.Uniform(earthDayTexture),
                    uNightTexture: new THREE.Uniform(earthNightTexture),
                    uSpecularCloudsTexture: new THREE.Uniform(earthSpecularCloudsTexture),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(option.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(option.atmosphereTwilightColor)),
                },
            })
            this.earth = new THREE.Mesh(earthGeometry, earthMaterial)
            this.scene.add(this.earth)
        })
    }
    createAtmosphere(earthGeometry: any, option: any) {
        const atmosphereMaterial = new THREE.ShaderMaterial({
            side: THREE.BackSide,
            transparent: true,
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
            uniforms:
            {
                uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
                uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(option.atmosphereDayColor)),
                uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(option.atmosphereTwilightColor))
            },
        });
        this.atmosphere = new THREE.Mesh(earthGeometry, atmosphereMaterial);
        this.atmosphere.scale.set(1.06, 1.06, 1.06);
        this.scene.add(this.atmosphere);
    }
    createSun() {
        const debugSun = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.1, 2),
            new THREE.MeshBasicMaterial()
        );
        this.scene.add(debugSun);
    }

    updateUniforms() {
        // Sun direction
        this.sunDirection.setFromSpherical(this.sunSpherical);
        // Uniforms
        if (this.earth && this.earth.rotation) {
            this.earth.rotation.y = this.time.elapsedTime * 0.1;
            (this.earth.material as THREE.ShaderMaterial)?.uniforms.uSunDirection.value.copy(this.sunDirection);
        }

        (this.atmosphere?.material as THREE.ShaderMaterial)?.uniforms.uSunDirection.value.copy(this.sunDirection)

    }
    update() {
        this.updateUniforms()

    }
}