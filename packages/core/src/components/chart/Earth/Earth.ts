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
import { Curve, flyArc } from "../Curve/Curve";

type EarthOptions = {
    atmosphereDayColor: string,
    atmosphereTwilightColor: string,
    rotation: boolean,
    atmosphereThickness: number,
    radius: number | [number, number],
    json: any,
    data: any[]
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
    pointGroup: THREE.Group;
    flyLineArcGroup: THREE.Group;
    uniforms: any;
    curveInstance: Curve;
    constructor(option: Partial<SeriesConfig>, instance: ThreeInstance) {
        super(instance);
        // "https://img.picgo.net/2024/10/16/earth376dcabe9e2b9138.jpg"
        // "https://img.picgo.net/2024/10/14/day899f5289e588690d.jpg"
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
            {
                name: "label",
                type: "TEXTURE",
                path: "https://img.picgo.net/2024/10/16/label67551425a8d52d32.png",
            },
            {
                name: "lightBar",
                type: "TEXTURE",
                path: "https://img.picgo.net/2024/10/16/light_column7f4475c95d20ad21.png",
            },
        ], 'circle');
        this.option = {
            atmosphereDayColor: '#00aaff',
            atmosphereTwilightColor: '#ff6600',
            atmosphereThickness: 1.04,
            rotation: true,
            radius: 2,
            json: null,
            data: [],
            ...option
        };

        this.group = new THREE.Group();
        this.lineGroup = new THREE.Group();
        this.pointGroup = new THREE.Group();
        this.flyLineArcGroup = new THREE.Group();
        this.flyLineArcGroup.userData['flyLineArray'] = []
        this.group.add(this.pointGroup);
        this.group.add(this.lineGroup);
        this.group.add(this.flyLineArcGroup);
        this.earth = null;
        this.atmosphere = null;
        const earthGeometry = new THREE.SphereGeometry(Array.isArray(this.option.radius) ? this.option.radius[0] : this.option.radius, 64, 64);
        this.sunDirection = new THREE.Vector3();
        this.sunSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0);
        this.scene.add(this.group);
        this.curveInstance = new Curve(instance)
        this.resources.on('ready', () => {
            this.createEarth(earthGeometry);
            this.createAtmosphere(earthGeometry);
            this.createSun();
            this.createMap();
            const maxValue = Math.max(...this.option.data.map((item: any) => item.value))
            this.option.data.forEach(item => {
                const l = (Math.random() * 360) - 180
                const t = (Math.random() * 180) - 90
                item.l = l
                item.t = t
                this.createMarkupPoint(item, maxValue);
                this.createFlyLine(item)
            })
        })
        this.update();
    }
    createEarth(earthGeometry: THREE.SphereGeometry) {
        const earthDayTexture = this.resources.items.get('day')
        const earthNightTexture = this.resources.items.get('night')
        const earthSpecularCloudsTexture = this.resources.items.get('specularClouds')
        earthDayTexture.colorSpace = THREE.SRGBColorSpace
        earthDayTexture.anisotropy = 8
        earthNightTexture.colorSpace = THREE.SRGBColorSpace
        earthNightTexture.anisotropy = 8
        earthSpecularCloudsTexture.anisotropy = 8
        this.uniforms = {
            uGlowColor: new THREE.Uniform(new THREE.Color(0x0cd1eb)),
            uRadius: new THREE.Uniform(this.option.radius),
            uTime: new THREE.Uniform(1),
            uDayTexture: new THREE.Uniform(earthDayTexture),
            uNightTexture: new THREE.Uniform(earthNightTexture),
            uSpecularCloudsTexture: new THREE.Uniform(earthSpecularCloudsTexture),
            uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
            uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(this.option.atmosphereDayColor)),
            uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(this.option.atmosphereTwilightColor)),
        }
        const earthMaterial = new THREE.ShaderMaterial({
            vertexShader: earthVertexShader,
            fragmentShader: earthFragmentShader,
            uniforms: this.uniforms,
        })
        this.earth = new THREE.Mesh(earthGeometry, earthMaterial)
        this.earth.name = 'earth';
        this.group.rotation.y = Math.PI * 0.9;
        this.group.rotation.x = Math.PI * 0.2;
        this.group.add(this.earth);
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
        if (!this.option.json) return
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
    createMarkupPoint(item: any, maxValue: number) {
        const { color } = item
        const coord = this.geoToSpherical(item.lng || item.l,
            item.lat || item.t,);
        const coordVec3 = new THREE.Vector3(coord.x, coord.y, coord.z).normalize();
        const meshNormal = new THREE.Vector3(0, 0, 1);
        const radius = (this.option.radius) as number

        /* ring */
        const material = new THREE.MeshBasicMaterial({
            color,
            map: this.resources.items.get('label'),
            transparent: true,
            depthWrite: false,
        });
        const geometry = new THREE.PlaneGeometry(1, 1);
        const mesh = new THREE.Mesh(geometry, material);
        const size = radius * 0.1;
        mesh.userData['size'] = size;
        mesh.userData['scale'] = Math.random() * 1.0;
        mesh.scale.set(size, size, 1);
        mesh.position.set(coord.x, coord.y, coord.z);
        mesh.quaternion.setFromUnitVectors(meshNormal, coordVec3);
        this.pointGroup.add(mesh);

        /* bar */
        const height = Math.max(radius * 0.5 * (item.value || 0) / maxValue, radius * 0.5 * 0.2);
        const barGeometry = new THREE.PlaneGeometry(radius * 0.05, height);
        barGeometry.rotateX(Math.PI / 2);
        barGeometry.translate(0, 0, height / 2);

        const barMaterial = new THREE.MeshBasicMaterial({
            map: this.resources.items.get('lightBar'),
            color,
            opacity: 0.6,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false,
        });
        const barMesh = new THREE.Mesh(barGeometry, barMaterial);
        const group = new THREE.Group();
        group.add(barMesh, barMesh.clone().rotateZ(Math.PI / 2))
        group.position.set(coord.x, coord.y, coord.z);
        group.quaternion.setFromUnitVectors(meshNormal, coordVec3);
        this.group.add(group);
    }
    createFlyLine(item: any) {
        const radius = (this.option.radius) as number
        const { color } = item
        const sl = 116
        const st = 40

        const arcline = flyArc(
            radius,
            sl,
            st,
            item.lng || item.l,
            item.lat || item.t,
            {
                color,
                flyLineColor: color,
            }
        );
        this.flyLineArcGroup.add(arcline);
        this.flyLineArcGroup.userData['flyLineArray'].push(arcline.userData['flyLine'])
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
        this.sunSpherical.set(1, Math.PI * 0.5, -1);
        this.sunDirection.setFromSpherical(this.sunSpherical);
        // Uniforms
        if (this.earth && this.lineGroup && this.pointGroup && this.flyLineArcGroup) {
            this.flyLineArcGroup.userData['flyLineArray'].forEach((fly: any) => {
                fly.rotation.z += this.time.delta * 0.0001;
                if (fly.rotation.z >= fly.flyEndAngle) fly.rotation.z = 0;
            })
            if (this.earth.material) {
                this.uniforms.uTime.value = this.uniforms.uTime.value < -this.option.radius ? this.option.radius : this.uniforms.uTime.value - (this.time.delta * (this.option.radius as number) * 0.001)
            }
            if (this.option.rotation) {
                this.group.rotation.y = -this.time.elapsedTime * 0.1;
            }
            this.pointGroup.children.forEach((mesh: any) => {
                mesh.userData['scale'] += 0.007;
                const scale = mesh.userData['size'] * mesh.userData['scale']
                mesh.scale.set(scale, scale, scale);
                if (mesh.userData['scale'] <= 1.5) {
                    mesh.material.opacity = (mesh.userData['scale'] - 1) * 2;
                } else if (mesh.userData['scale'] > 1.5 && mesh.userData['scale'] <= 2) {
                    mesh.material.opacity = 1 - (mesh.userData['scale'] - 1.5) * 2;
                } else {
                    mesh.userData['scale'] = 1;
                }
            });
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