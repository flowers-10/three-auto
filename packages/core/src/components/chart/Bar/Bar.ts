import * as THREE from "three";
import gsap from "gsap";

import { ThreeInstance } from "../../../base/ThreeInstance";
import BaseThree from "../../../base/BaseThree";
import { SeriesConfig } from "../../../types";
import {  Tips } from "../../web";
import { BAR_CONFIG } from "../../../config";
import { Tooltip } from "../../web/Tooltip";
import { advancedColorMap } from "../../../shared";

export class Bar extends BaseThree {
  public group: THREE.Group;
  public previous: THREE.Object3D | null = null;
  public projection: any;
  public cssRender: Tips;
  public config: SeriesConfig;
  constructor(config: Partial<SeriesConfig>, instance: ThreeInstance) {
    super(instance);
    this.group = new THREE.Group();
    this.group.name = "BarGroup";
    this.config = Object.assign(BAR_CONFIG, config);
    this.cssRender = new Tips(instance, this.config.label.type);
    this.createBar();
    if (this.config.animation) {
      this.dispatchEvent();
    }
    if (this.config.tooltip && this.config.tooltip.show) {
      new Tooltip(instance, this.group, this.config.tooltip);
    }

    instance.onResize(() => {
      this.cssRender.resize();
    });
    instance.onTick(() => {
      this.cssRender.update();
    });
  }
  createBar() {
    const { data = [] } = this.config;
    const max = Math.max(...data.map((item) => Number(item.value)));
    const min = Math.min(...data.map((item) => Number(item.value)));
    data.forEach((item) => {
      const { value = 0, name = "", x = 0, y = 0 } = item;
      const color = advancedColorMap(Number(value), min, max)
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(1, Number(value), 1),
        new THREE.MeshBasicMaterial({ color  })
      );
      bar.position.set(x * 1.5, Number(value) / 2, y * 1.5);
      bar.name = name;
      bar.userData = {
        value: Number(value) || 0,
        color,
        ...item
      }
      this.group.add(bar);
    });
  }
  dispatchEvent() {
    const {
      animationDuration = 1000,
      animationEasing = "power1.inOut",
      animationDelay = 0,
      selectedOffset = 4,
      eventName = "mousemove",
    } = this.config;
    this._canvas.addEventListener(eventName, () => {
      const intersects = this._raycaster.onRaycasting();
      if (this.previous) {
        gsap.killTweensOf(this.previous.position);
        gsap.to(this.previous.scale, {
          z: 1,
          duration: animationDuration / 1000,
          ease: animationEasing,
          delay: animationDelay / 1000,
        });

        this.previous = null;
      }
      this.group.children.forEach((item) => {
        item.children.forEach((itemX) => {
          if (intersects && intersects[0].object.uuid === itemX.uuid) {
            gsap.killTweensOf(item.position);
            gsap.to(item.scale, {
              z: selectedOffset,
              duration: animationDuration / 1000,
              ease: animationEasing,
              delay: animationDelay / 1000,
            });
            this.previous = item;
          }
        });
      });
    });
  }
  update() { }
  dispose(): void {
    this.cssRender.dispose();
  }
}
