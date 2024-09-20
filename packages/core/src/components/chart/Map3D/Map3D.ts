import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import * as d3geo from "d3-geo";

import { ThreeInstance } from "../../../base/ThreeInstance";
import BaseThree from "../../../base/BaseThree";
import { ChartType, SeriesConfig, MaterialTypeOfTHREE, ItemStyle } from "../../../types";
import { mergeConfig } from "../../../shared";
import { htmlRender, Tips } from "../../web";
import { ITEM_STYLE_CONFIG, MAP_CONFIG } from "../../../config";


type MaterialGroup = {
  crossSectionMaterial: MaterialTypeOfTHREE,
  extrudeFacesMaterial: MaterialTypeOfTHREE,
  lineMaterial: LineMaterial
}
interface MapType extends THREE.Group {
  series: ChartType;
  properties: any;
}

export class Map3D extends BaseThree {
  public map: MapType;
  public projection: any;
  public css2Render: Tips;
  public config: SeriesConfig;
  constructor(config: Partial<SeriesConfig>, instance: ThreeInstance) {
    super(instance);
    this.map = new THREE.Group() as MapType;
    const { center, scale } = this.createCenter(config.json);
    this.projection = this.getProjection(center, scale);
    this.css2Render = new Tips(instance, 'css3')
    this.config = mergeConfig(MAP_CONFIG, config)
    this.createMap();
    instance.onResize(() => {
      this.css2Render.resize()
    })
    instance.onTick(() => {
      this.css2Render.update()
    });
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
  createMap() {
    let {
      type,
      json,
      name,
      // shader,
      // castShadow,
      // receiveShadow,
      itemStyle
    } = this.config;
    this.map.name = name || "Map";
    this.map.series = type || "map";
    const style = mergeConfig(ITEM_STYLE_CONFIG, itemStyle)
    const material = this.createMaterial(style)

    json.features.forEach((elem: any) => {
      const regionGroup = new THREE.Group();
      const { coordinates } = elem.geometry;
      this.createLabel(elem, style)
      coordinates.forEach((multiPolygon: any) => {
        const lineGeometry = new LineGeometry();
        const line2 = new Line2(lineGeometry, material.lineMaterial);
        line2.name = elem.properties.name;

        multiPolygon.forEach((polygon: any) => {
          this.createShape(elem, polygon, material, regionGroup)
          this.createLine(polygon, line2, style.depth)
        });
        regionGroup.add(line2)
      });
      this.map.add(regionGroup);
    });
  }
  createMaterial(style: ItemStyle): MaterialGroup {
    const { crossSection, extrudeFaces, lineStyle } = style
    crossSection.material = crossSection.material || 'MeshBasicMaterial';
    extrudeFaces.material = extrudeFaces.material || 'MeshBasicMaterial';

    const crossSectionMaterial = new THREE[crossSection.material]({
      color: crossSection?.color,
      transparent: true,
      opacity: crossSection?.opacity,
      metalness: crossSection?.metalness,
      roughness: crossSection?.roughness,
    });
    const extrudeFacesMaterial = new THREE[extrudeFaces.material]({
      color: extrudeFaces?.color,
      transparent: true,
      opacity: extrudeFaces?.opacity,
      metalness: crossSection?.metalness,
      roughness: crossSection?.roughness,
    });
    const lineMaterial = new LineMaterial({
      color: lineStyle.color,
      linewidth: lineStyle.width,
    });

    return {
      crossSectionMaterial,
      extrudeFacesMaterial,
      lineMaterial
    }
  }
  createShape(elem: any, polygon: any[], material: MaterialGroup, regionGroup: THREE.Group) {
    const { depth, bevelEnabled, bevelSegments, bevelSize, bevelThickness } = this.config.itemStyle
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
        depth: depth,
        bevelEnabled: bevelEnabled,
        bevelSegments: bevelSegments,
        bevelSize: bevelSize,
        bevelThickness: bevelThickness,
      }
    );
    const mesh = new THREE.Mesh(geometry, [
      material.crossSectionMaterial,
      material.extrudeFacesMaterial,
    ]);
    mesh.name = elem.properties.name;
    regionGroup.add(mesh);
  }
  createLine(polygon: any, line: Line2, depth: number) {
    const pointArray = [];
    for (let i = 0; i < polygon.length; i++) {
      let [x, y] = this.projection(polygon[i]);
      pointArray.push(new THREE.Vector3(x, -y, depth * 1.1 || 1));
    }
    line.geometry.setPositions(
      pointArray.map(({ x, y, z }) => [x, y, z]).flat()
    );
  }
  createLabel(elem: any, style: ItemStyle) {
    const { label } = style
    const { show = false, distance = 1, rotation = {
      x: 0,
      y: 0,
      z: 0,
    }, textStyle } = label
    show // todo: check
    const labelElement = htmlRender({ tag: 'div', children: elem.properties.name, style: textStyle })
    const tip = this.css2Render.createTips(labelElement)
    tip.scale.set(0.02, 0.02, 1)
    const { center } = this.createCenter(elem)
    let [x, y] = this.projection(center)
    tip.position.set(x, -y, distance)
    tip.rotation.set(rotation.x, rotation.y, rotation.z)
  }
}
