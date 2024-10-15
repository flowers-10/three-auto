import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import * as d3geo from "d3-geo";
import gsap from "gsap";

import { ThreeInstance } from "../../../base/ThreeInstance";
import BaseThree from "../../../base/BaseThree";
import { SeriesConfig, MaterialTypeOfTHREE, ItemStyle, LabelStyle } from "../../../types";
import { htmlRender, Tips } from "../../web";
import { ITEM_STYLE_CONFIG, MAP_CONFIG } from "../../../config";
import { Tooltip } from "../../web/Tooltip";


type MaterialGroup = {
  crossSectionMaterial: MaterialTypeOfTHREE,
  extrudeFacesMaterial: MaterialTypeOfTHREE,
  lineMaterial: LineMaterial
}

export class Map3D extends BaseThree {
  public group: THREE.Group;
  public previous: THREE.Object3D | null = null;
  public projection: any;
  public cssRender: Tips;
  public config: SeriesConfig;
  constructor(config: Partial<SeriesConfig>, instance: ThreeInstance) {
    super(instance);
    this.group = new THREE.Group();
    const { center, scale } = this.createCenter(config.json);
    this.projection = this.getProjection(center, scale);
    this.config = {
      ...MAP_CONFIG,
      ...config
    }
    this.cssRender = new Tips(instance, this.config.label.type)
    this.createMap();
    if (this.config.animation) {
      this.dispatchEvent();
    }
    if (this.config.tooltip.show) {
      new Tooltip(instance, this.group, this.config.tooltip)
    }
    instance.onResize(() => {
      this.cssRender.resize()
    })
    instance.onTick(() => {
      this.cssRender.update()
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
      json,
      name,
      label,
      // shader,
      itemStyle
    } = this.config;
    this.group.name = name || "Map";
    const style = { ...ITEM_STYLE_CONFIG, ...itemStyle }
    const material = this.createMaterial(style)

    json.features.forEach((elem: any) => {
      const regionGroup = new THREE.Group();
      regionGroup.userData = elem.properties;
      const { coordinates } = elem.geometry;
      this.createLabel(elem, label || style.label, regionGroup)
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
      this.group.add(regionGroup);
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
    mesh.castShadow = this.config.shadow || false;
    mesh.receiveShadow = this.config.shadow || false;
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
  createLabel(elem: any, label: LabelStyle, regionGroup: THREE.Group) {
    const { show = false, distance = 1, rotation = {
      x: 0,
      y: 0,
      z: 0,
    }, textStyle } = label
    if (!show) return
    const labelElement = htmlRender({ tag: 'div', children: elem.properties.name, style: textStyle })
    const tip = this.cssRender.createTips(labelElement)
    tip.scale.set(0.02, 0.02, 1)
    const { center } = this.createCenter(elem)
    let [x, y] = this.projection(center)
    tip.position.set(x, -y, distance)
    tip.rotation.set(rotation.x, rotation.y, rotation.z)
    regionGroup.add(tip)
  }
  dispatchEvent() {
    const {
      animationDuration = 1000,
      animationEasing = 'power1.inOut',
      animationDelay = 0,
      selectedOffset = 4,
      eventName = 'click' } = this.config
    this._canvas.addEventListener(eventName, () => {
      const intersects = this._raycaster.onRaycasting();
      if (this.previous) {
        gsap.killTweensOf(this.previous.position);
        gsap.to(this.previous.scale, {
          z: 1,
          duration: animationDuration / 1000,
          ease: animationEasing,
          delay: animationDelay / 1000
        })

        this.previous = null
      }
      this.group.children.forEach(item => {
        item.children.forEach(itemX => {
          if (intersects && intersects[0].object.uuid === itemX.uuid) {
            gsap.killTweensOf(item.position);
            gsap.to(item.scale, {
              z: selectedOffset,
              duration: animationDuration / 1000,
              ease: animationEasing,
              delay: animationDelay / 1000
            })
            this.previous = item

          }
        })
      })
    })
  }
  update() { }
}
