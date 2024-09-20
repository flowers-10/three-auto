import * as THREE from "three";

import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { SeriesConfig } from "../../types";
import { Map3D } from './Map3D/Map3D'

export class Series extends BaseThree {
  public seriesGroup: THREE.Group;
  constructor(series: Partial<SeriesConfig>[], instance: ThreeInstance) {
    super(instance);
    this.seriesGroup = new THREE.Group();
    this.seriesGroup.name = "series";
    series.forEach((options: Partial<SeriesConfig>) => {
      this.seriesScheduler(options)
    });
    this.scene.add(this.seriesGroup)
  }
  seriesScheduler(options: Partial<SeriesConfig>) {
    switch (options.type) {
      case "map":
        const map = new Map3D(options, this._instance).map
        this.seriesGroup.add(map)
        break;
      case "line":
        break;
      case "bar":
        break;
      case "pie":
        break;
      default:
        console.warn('Please specify a series type');
        break;
    }
  }
}
