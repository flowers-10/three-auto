import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import * as d3geo from "d3-geo";

import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { ChartType, SeriesConfig } from "../../types";

interface MapType extends THREE.Group {
  series: ChartType;
  properties: any;
}

export class Map extends BaseThree {
  public map: MapType;
  constructor(options: SeriesConfig, instance: ThreeInstance) {
    super(instance);
    this.map = new THREE.Group() as MapType;
    const { center, scale } = this.createCenter(options.json);
    const projection = this.getProjection(center, scale);
    this.createMap(options, projection);
  }
  getProjection(center: number[], scale: number) {
    return d3geo.geoMercator().center(center).scale(scale).translate([0, 0]);
  }
  createCenter(mapJson: any): { center: number[]; scale: number } {
    const path = d3geo.geoPath();
    const bounds = path.bounds(mapJson);
    const width = bounds[1][0] - bounds[0][0];
    const height = bounds[1][1] - bounds[0][1];
    const scaleX = this.sizes.width / width;
    const scaleY = this.sizes.height / height;
    const scale = Math.min(scaleX, scaleY);
    const center = [
      (bounds[1][0] + bounds[0][0]) / 2,
      (bounds[1][1] + bounds[0][1]) / 2,
    ];
    return { center, scale };
  }
  createMap(options: SeriesConfig, projection: any) {
    const {
      type,
      show,
      json,
      name,
      // shader,
      // castShadow,
      // receiveShadow,
      lineStyle,
      // label,
      extrudeFaces,
      crossSection,
    } = options;

    this.map.name = name || "Map";
    this.map.series = type || "map";

    const crossSectionMaterial = new THREE.MeshPhongMaterial({
      shininess: 200,
      color: crossSection?.color,
      transparent: crossSection?.transparent,
    });
    crossSectionMaterial.color.convertSRGBToLinear();
    const extrudeFacesMaterial = new THREE.MeshStandardMaterial({
      metalness: extrudeFaces?.metalness,
      roughness: extrudeFaces?.roughness,
      color: extrudeFaces?.color,
      transparent: extrudeFaces?.transparent,
    });
    const lineMaterial = new LineMaterial({
      color: lineStyle?.color,
      linewidth: lineStyle?.linewidth,
    });

    json.features.forEach((elem: any) => {
      const regionGroup = new THREE.Group();
      const region = new THREE.Group();
      const lineRegion = new THREE.Group();
      const { coordinates } = elem.geometry;
      coordinates.forEach((multiPolygon: any) => {
        multiPolygon.forEach((polygon: any) => {
          if (show) {
            const shape = new THREE.Shape();
            for (let i = 0; i < polygon.length; i++) {
              let [x, y] = projection(polygon[i]);
              if (i === 0) {
                shape.moveTo(x, -y);
              }
              shape.lineTo(x, -y);
            }
            const geometry = new THREE.ExtrudeGeometry(
              shape,
              extrudeFaces?.extrudeSettings
            );
            const mesh = new THREE.Mesh(geometry, [
              crossSectionMaterial,
              extrudeFacesMaterial,
            ]);
            mesh.name = elem.properties.name;
            region.add(mesh);
          }
          (region as MapType).properties = elem.properties;
          regionGroup.add(region);

          if (options.lineStyle?.show) {
            const lineGeometry = new LineGeometry();
            const pointArray = [];
            for (let i = 0; i < polygon.length; i++) {
              let [x, y] = projection(polygon[i]);
              pointArray.push(new THREE.Vector3(x, -y, lineStyle?.depth || 1));
            }
            lineGeometry.setPositions(
              pointArray.map(({ x, y, z }) => [x, y, z]).flat()
            );

            const line = new Line2(lineGeometry, lineMaterial);
            lineRegion.add(line);
          }
          (lineRegion as MapType).properties = elem.properties;

          regionGroup.add(lineRegion);
          this.map.add(regionGroup);
        });
      });
    });
  }
}
