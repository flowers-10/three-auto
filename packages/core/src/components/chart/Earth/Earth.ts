import * as THREE from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { Line2 } from "three/examples/jsm/lines/Line2.js";

import BaseThree from "../../../base/BaseThree";
import { ThreeInstance } from "../../../base/ThreeInstance";
import { Resources } from "../../../base";
import earthVertexShader from "./shaders/earth/vertex.glsl";
import earthFragmentShader from "./shaders/earth/fragment.glsl";
import atmosphereVertexShader from "./shaders/atmosphere/vertex.glsl";
import atmosphereFragmentShader from "./shaders/atmosphere/fragment.glsl";
import { SeriesConfig } from "../../../types";

type EarthOptions = {
    atmosphereDayColor: string,
    atmosphereTwilightColor: string,
    rotation: boolean,
    atmosphereThickness: number,
    radius: number | [number, number],
    json: any
}

export class Earth extends BaseThree {
    resources: Resources;
    earth: THREE.Mesh | null;
    group: THREE.Group;
    atmosphere: THREE.Mesh | null;
    sunDirection: THREE.Vector3;
    sunSpherical: THREE.Spherical;
    option: EarthOptions;
    lineGroup: THREE.Group;
    constructor(option: Partial<SeriesConfig>, instance: ThreeInstance) {
        super(instance);
        this.resources = new Resources([
            {
                name: "day",
                type: "TEXTURE",
                path: "https://img.picgo.net/2024/10/14/day899f5289e588690d.jpg",
            },
            {
                name: "night",
                type: "TEXTURE",
                path: "https://img.picgo.net/2024/10/14/night62454a45f4890e2e.jpg",
            },
            {
                name: "specularClouds",
                type: "TEXTURE",
                path: "https://img.picgo.net/2024/10/14/specularClouds19e5807325c90501.jpg",
            },

        ]);
        this.option = {
            atmosphereDayColor: '#00aaff',
            atmosphereTwilightColor: '#ff6600',
            atmosphereThickness: 1.04,
            rotation: true,
            radius: 2,
            json: null,
            ...option
        };
        
        this.group = new THREE.Group();
        this.lineGroup = new THREE.Group()
        this.earth = null;
        this.atmosphere = null;
        const earthGeometry = new THREE.SphereGeometry(Array.isArray(this.option.radius) ? this.option.radius[0] : this.option.radius, 64, 64);
        this.sunDirection = new THREE.Vector3();
        this.sunSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0);
        this.scene.add(this.group)
        this.createEarth(earthGeometry);
        this.createAtmosphere(earthGeometry);
        this.createSun();
        this.createMap();
        this.update()
    }
    createEarth(earthGeometry: THREE.SphereGeometry) {
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
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(this.option.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.option.atmosphereTwilightColor)),
                },
            })
            this.earth = new THREE.Mesh(earthGeometry, earthMaterial)
            this.earth.name = 'earth';
            this.group.add(this.earth);
        })
    }
    createAtmosphere(earthGeometry: THREE.SphereGeometry) {
        const atmosphereMaterial = new THREE.ShaderMaterial({
            side: THREE.BackSide,
            transparent: true,
            vertexShader: atmosphereVertexShader,
            fragmentShader: atmosphereFragmentShader,
            uniforms:
            {
                uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
                uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(this.option.atmosphereDayColor)),
                uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.option.atmosphereTwilightColor))
            },
        });
        this.atmosphere = new THREE.Mesh(earthGeometry, atmosphereMaterial);
        this.atmosphere.scale.set(this.option.atmosphereThickness, this.option.atmosphereThickness, this.option.atmosphereThickness);
        this.atmosphere.name = "atmosphere";
        this.group.add(this.atmosphere);
    }
    createSun() {
        const debugSun = new THREE.Mesh(
            new THREE.IcosahedronGeometry(0.1, Array.isArray(this.option.radius) ? this.option.radius[0] : this.option.radius),
            new THREE.MeshBasicMaterial()
        );
        debugSun.name = "debugSun";
        this.group.add(debugSun);
    }
    createMap() {
        if(!this.option.json) return
        this.group.add(this.lineGroup)
        this.lineGroup.name = "lineGroup";
        const lineMaterial = new LineMaterial({
            color: '#fff',
            linewidth: 1,
        });
        this.option.json.features.forEach((elem: any) => {
            const { coordinates } = elem.geometry;

            coordinates.forEach((multiPolygon: any) => {
                const lineGeometry = new LineGeometry();
                const line2 = new Line2(lineGeometry, lineMaterial);
                multiPolygon.forEach((polygon: any) => {
                    this.createLine(polygon, line2)
                })
                this.lineGroup.add(line2)
            })
        })
    }
    createLine(polygon: any, line: Line2) {
        const pointArray = [];
        for (let i = 0; i < polygon.length; i++) {
            const coordinates = this.geoToSpherical(polygon[i][0], polygon[i][1]);
            pointArray.push(coordinates);
            line.geometry.setPositions(
                pointArray.map(({ x, y, z }) => [x, y, z]).flat()
            );
        }
    }

    geoToSpherical(lng: number, lat: number) {
        // 以z轴正方向为起点的水平方向弧度值
        const theta = (90 + lng) * (Math.PI / 180)
        // 以y轴正方向为起点的垂直方向弧度值
        const phi = (90 - lat) * (Math.PI / 180)
        return new THREE.Vector3().setFromSpherical(new THREE.Spherical(Array.isArray(this.option.radius) ? this.option.radius[0] : this.option.radius, phi, theta))
    }
    updateUniforms() {
        // Sun direction
        this.sunSpherical.set(1, Math.PI * 0.5, 0.1);
        this.sunDirection.setFromSpherical(this.sunSpherical);
        // Uniforms
        if (this.earth && this.lineGroup) {
            if (this.option.rotation) {
                this.earth.rotation.y = -this.time.elapsedTime * 0.1;
                this.lineGroup.rotation.y = -this.time.elapsedTime * 0.1;
            }
            (this.earth.material as THREE.ShaderMaterial)?.uniforms.uSunDirection.value.copy(this.sunDirection);

        }

        (this.atmosphere?.material as THREE.ShaderMaterial)?.uniforms.uSunDirection.value.copy(this.sunDirection);

    }
    update() {
        this._instance.onTick(() => {
            this.updateUniforms();

        })
    }
}