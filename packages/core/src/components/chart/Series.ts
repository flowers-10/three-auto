import * as THREE from "three";

import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { SeriesConfig } from "../../types";
import { Map3D } from './Map3D/Map3D'
import { Earth } from "./Earth/Earth";
import { Pie } from "./Pie/Pie";
import { Bar } from "./Bar/Bar";

export class Series extends BaseThree {
  public seriesGroup: THREE.Group;
  public disposeGroup: Function[];
  constructor(series: Partial<SeriesConfig>[], instance: ThreeInstance) {
    super(instance);
    this.seriesGroup = new THREE.Group();
    this.seriesGroup.name = "series";
    this.disposeGroup = [];
    series.forEach((options: Partial<SeriesConfig>) => {
      this.seriesScheduler(options)
    });
    this.scene.add(this.seriesGroup)
  }
  seriesScheduler(options: Partial<SeriesConfig>) {
    switch (options.type) {
      case "map":
        const map = new Map3D(options, this._instance)
        const mapDispose = map.dispose
        const mapGroup = map.group
        this.seriesGroup.add(mapGroup)
        this.disposeGroup.push(mapDispose)
        break;
      case "earth":
        const earth = new Earth(options, this._instance).group
        this.seriesGroup.add(earth)
        break;
      case "line":
        break;
      case "bar":
        const bar = new Bar(options, this._instance).group
        this.seriesGroup.add(bar)
        break;
      case "pie":
        const pie = new Pie(options, this._instance).group
        this.seriesGroup.add(pie)
        break;
      default:
        console.warn('Please specify a series type');
        break;
    }
  }
  dispose(): void {
    this.disposeGroup.forEach((fn) => {
      fn()
    })
  }
}
