import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { CameraConfig } from "../../types";

export class Camera extends BaseThree {
  private cameraConfig: CameraConfig;
  public controls: OrbitControls;
  public instance: THREE.PerspectiveCamera | THREE.OrthographicCamera;

  constructor(config: CameraConfig, instance: ThreeInstance) {
    super(instance);
    this.cameraConfig = config;
    this.instance = this.switchCameraType()
    this.controls = new OrbitControls(this.instance, this.canvas);

    this.setInstance();
    this.setControls();
  }
  switchCameraType() {
    switch (this.cameraConfig.type) {
      case "OrthographicCamera":
       return new THREE.OrthographicCamera(
          this.sizes?.width / -2,
          this.sizes?.width / 2,
          this.sizes?.height / 2,
          this.sizes?.height / -2,
          this.cameraConfig.near,
          this.cameraConfig.far
        );
      case "PerspectiveCamera":
        return new THREE.PerspectiveCamera(
          this.cameraConfig.fov,
          this.sizes?.width / this.sizes?.height,
          this.cameraConfig.near,
          this.cameraConfig.far
        );
      default:
        throw new Error("Unknown camera")
    }
  }
  setInstance() {
    this.instance.position.set(
      this.cameraConfig.position.x,
      this.cameraConfig.position.y,
      this.cameraConfig.position.z
    );
    if (this.cameraConfig.lookAt) {
      this.instance.lookAt(this.scene.position);
    }
    this.instance.updateProjectionMatrix();
    this.scene.add(this.instance);
  }
  setControls() {
    const controls = this.cameraConfig.controls;
    this.controls.enableDamping = controls.enableDamping;
    this.controls.minPolarAngle = controls.minPolarAngle;
    this.controls.maxPolarAngle = controls.maxPolarAngle;
    this.controls.minAzimuthAngle = controls.minAzimuthAngle;
    this.controls.maxAzimuthAngle = controls.maxAzimuthAngle;
    this.controls.enablePan = controls.enablePan;
  }
  resize() {
    
    if (this.instance instanceof THREE.PerspectiveCamera) {
      this.instance.aspect = this.sizes?.width / this.sizes?.height;
    }else if( this.instance instanceof THREE.OrthographicCamera) {
      this.instance.left =  this.sizes?.width / -2
      this.instance.right =  this.sizes?.width / 2
      this.instance.top = this.sizes?.height / 2
      this.instance.bottom = this.sizes?.height / -2
    }
    this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls?.update();
  }
  dispose() {
    this.controls?.dispose();
  }
}
