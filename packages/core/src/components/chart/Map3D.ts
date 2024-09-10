import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import * as d3geo from "d3-geo";

import { ThreeInstance } from "../../base/ThreeInstance";
import BaseThree from "../../base/BaseThree";
import { ChartType, ItemStyle, SeriesConfig } from "../../types";

interface MapType extends THREE.Group {
  series: ChartType;
  properties: any;
}

export class Map3D extends BaseThree {
  public map: MapType;
  public projection: any;
  constructor(options: SeriesConfig, instance: ThreeInstance) {
    super(instance);
    this.map = new THREE.Group() as MapType;
    const { center, scale } = this.createCenter(options.json);
    this.projection = this.getProjection(center, scale);
    this.createMap(options);
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
  createMap(options: SeriesConfig) {
    let {
      type,
      show,
      json,
      name,
      // shader,
      // castShadow,
      // receiveShadow,
      itemStyle,
      // label,
    } = options;

    this.map.name = name || "Map";
    this.map.series = type || "map";

    const { crossSectionMaterial, extrudeFacesMaterial, lineMaterial } = this.createMaterial(itemStyle)


    json.features.forEach((elem: any) => {
      console.log(elem);
      
      const regionGroup = new THREE.Group();
      const { coordinates } = elem.geometry;
      coordinates.forEach((multiPolygon: any) => {
        multiPolygon.forEach((polygon: any) => {
          if (show) {
            const geometry = this.createShape(polygon, itemStyle)
            const mesh = new THREE.Mesh(geometry, [
              crossSectionMaterial,
              extrudeFacesMaterial,
            ]);
            mesh.name = elem.properties.name;
            regionGroup.add(mesh);
          }
          if (options?.itemStyle?.lineStyle?.show) {
            const geometry = this.createLine(polygon, itemStyle)
            const line = new Line2(geometry, lineMaterial);
            line.name = elem.properties.name;
            regionGroup.add(line);
          }
        });
      });
      this.map.add(regionGroup);
    });
    
  }
  createMaterial(itemStyle?: ItemStyle) {
    const { crossSection, extrudeFaces, lineStyle } = this.initStyle(itemStyle)
    const crossSectionMaterial = new THREE.MeshPhongMaterial({
      shininess: 200,
      color: crossSection?.color,
      transparent: true,
    });
    crossSectionMaterial.color.convertSRGBToLinear();
    const extrudeFacesMaterial = new THREE.MeshStandardMaterial({
      metalness: extrudeFaces?.metalness,
      roughness: extrudeFaces?.roughness,
      color: extrudeFaces?.color,
      transparent: true,
    });
    const lineMaterial = new LineMaterial({
      color: lineStyle.color,
      linewidth: lineStyle.width,
    });

    const material = {
      crossSectionMaterial: crossSectionMaterial,
      extrudeFacesMaterial: extrudeFacesMaterial,
      lineMaterial: lineMaterial
    }
    return material
  }
  createShape(polygon: any, itemStyle?: ItemStyle) {
    itemStyle = this.initStyle(itemStyle)
    const shape = new THREE.Shape();
    for (let i = 0; i < polygon.length; i++) {
      let [x, y] = this.projection(polygon[i]);
      if (i === 0) {
        shape.moveTo(x, -y);
      }
      shape.lineTo(x, -y);
    }
    const geometry = new THREE.ExtrudeGeometry(
      shape,
      {
        depth: itemStyle.depth,
        bevelEnabled: itemStyle.bevelEnabled,
        bevelSegments: itemStyle.bevelSegments,
        bevelSize: itemStyle.bevelSize,
        bevelThickness: itemStyle.bevelThickness,
      }
    );
    return geometry
  }
  createLine(polygon: any, itemStyle?: ItemStyle) {
    const lineGeometry = new LineGeometry();
    const pointArray = [];
    for (let i = 0; i < polygon.length; i++) {
      let [x, y] = this.projection(polygon[i]);
      pointArray.push(new THREE.Vector3(x, -y, itemStyle?.lineStyle?.depth || 1));
    }
    lineGeometry.setPositions(
      pointArray.map(({ x, y, z }) => [x, y, z]).flat()
    );

    return lineGeometry
  }
  initStyle(itemStyle?: ItemStyle) {
    if (!itemStyle) {
      itemStyle = {
        depth: 1,
        bevelEnabled: false,
        bevelSegments: 1,
        bevelSize: 0,
        bevelThickness: 0,
        extrudeFaces: {
          color: "#3EB8F3",
          opacity: 1,
          metalness: 1,
          roughness: 1,
        },
        crossSection: {
          opacity: 1,
          color: "#2B61A6",
        },
        lineStyle: {
          show: true,
          depth: 1.1,
          color: "#A0E5FF",
          width: .5,
        }
      }
    }
    return itemStyle
  }
}
