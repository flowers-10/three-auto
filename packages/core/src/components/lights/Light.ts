import * as THREE from "three";
import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { LightItems } from "../../types/ConfigType";

export class Light extends BaseThree {
  public group;
  constructor(config: LightItems[], instance: ThreeInstance) {
    super(instance);
    this.group = new THREE.Group();
    this.group.name = "light-group";
    this.setLight(config);
  }
  setLight(config: LightItems[]) {
    if (Array.isArray(config) && !config.length)
      return console.error("ThreeAuto.Lights:Please add light configuration");
    let light: any;
    let lightHelper: any;
    let lightCameraHelper: any;
    config.forEach(
      ({
        color,
        groundColor,
        type,
        intensity,
        distance,
        angle,
        penumbra,
        position,
        decay,
        target,
        helper = false,
        shadow,
        castShadow = false,
        helperSize = 0.5,
      }) => {
        switch (type) {
          case "point":
            light = new THREE.PointLight(color, intensity, distance);
            if (helper) {
              lightHelper = new THREE.PointLightHelper(light, helperSize);
            }
            break;
          case "ambient":
            light = new THREE.AmbientLight(color, intensity); 
            break;
          case "hemisphere":
            light = new THREE.HemisphereLight(color, groundColor, intensity);
            if (helper) {
              lightHelper = new THREE.HemisphereLightHelper(light, helperSize);
            }
            break;
          case "directional":
            light = new THREE.DirectionalLight(color, intensity);
            break;
          case "spot":
            light = new THREE.SpotLight(
              color,
              intensity,
              distance,
              angle,
              penumbra,
              decay
            );
            if (helper) {
              lightHelper = new THREE.SpotLightHelper(light, helperSize);
              lightCameraHelper = new THREE.CameraHelper(light.shadow.camera);
            }
            this.scene.add(light.target);
            break;
          default:
            break;
        }

        if (shadow) {
          light.shadow.mapSize.width = shadow.mapSizeWidth;
          light.shadow.mapSize.height = shadow.mapSizeHeight;
          light.shadow.camera.left = shadow.cameraLeft;
          light.shadow.camera.right = shadow.cameraRight;
          light.shadow.camera.top = shadow.cameraTop;
          light.shadow.camera.bottom = shadow.cameraBottom;
          light.shadow.camera.near = shadow.cameraNear;
          light.shadow.camera.far = shadow.cameraFar;
          light.shadow.radius = shadow.radius;
          light.shadow.normalBias = shadow.normalBias;
          light.shadow.bias = shadow.bias;
          if (helper) {
            lightHelper = new THREE.DirectionalLightHelper(light, helperSize);
            lightCameraHelper = new THREE.CameraHelper(light.shadow.camera);
          }
        }
        light.position?.set(position?.x, position?.y, position?.z);
        target ? light.add(light.target) : null;
        castShadow ? light.castShadow = castShadow : null;
        light ? this.group.add(light) : null;
        lightHelper ? this.group.add(lightHelper) : null;
        lightCameraHelper ? this.group.add(lightCameraHelper) : null;
        light = null;
        lightHelper = null;
        lightCameraHelper = null;
      }
    );
    this.scene.add(this.group);
  }
}
