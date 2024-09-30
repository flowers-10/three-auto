import * as AUTO from "./src/index";
import * as THREE from "three";

const instance = new AUTO.ThreeAuto(undefined, {
  series: [
    {
      type: 'pie',
      name: 'three-auto-pie',
      data: [
        { name: '小学', value: 100, color: '#fcc02a' },
        { name: '中学', value: 200, color: '#f16b91' },
        { name: '大学', value: 300, color: '#187bac' },
        { name: '不学', value: 500, color: '#eeeeee' },
      ],
      opacity: 0.8,
      selectedOffset: 10,
      height: 20,
      heightMode: 'flat',
      radius: 30,
      gap: 0.5,
      eventName: 'click',
      label: {
        show: true,
        distance: 3,
        scale: 1,
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        textStyle: {
          padding: '6px',
          'font-size': '16px',
          color: "#000",
          bold: true,
          'font-weight': 400,
          'font-style': 'normal',
        },
      },
      tooltip: {
        className: 'three-auto-tooltip',
        background: 'rgba(255,255,255,1)',
        show: true,
        borderWidth: 1,
        padding: '15px 20px',
        hideDelay: 100,
        textStyle: {
          'font-size': '18px',
          color: "#000000",
          'font-weight': 400,
          'font-style': 'normal',
        },
      }
    }
  ],
  postprocess: {
    type: 'moebius'
  }
});

(instance.camera.instance as THREE.PerspectiveCamera).fov = 75;
instance.camera.instance.near = 0.1;
instance.camera.instance.far = 1000;
instance.camera.instance.position.set(100, 100, 100.0);
instance._renderer.setClearColor("#fff");
instance.onTick(() => {
});

