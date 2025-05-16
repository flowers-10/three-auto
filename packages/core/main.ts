import * as AUTO from "./src/index";


const instance = new AUTO.ThreeAuto(undefined, {
  camera: {
    type: 'PerspectiveCamera',
    fov: 60,
    near: 1,
    far: 1000,
    position: {
      x: 20,
      y: 20,
      z: 0,
    },
    lookAt: true,
    controls: {
      enable: false,
      enableDamping: false,
      enablePan: false,
    },
  },
  series: [
    {
      type: 'pie',
      name: 'three-auto-pie',
      shadow: false,
      data: [
        { name: '报修', value: 40, color: '#52E4AC' },
        { name: '安全', value: 20, color: '#1561EC' },
        { name: '环境', value: 25, color: '#FED859' },
        { name: '服务', value: 15, color: '#22B6E7' },
      ],
      transparent: true,
      opacity: 0.5,
      selectedMode: '',
      selectedOffset: 1,
      height: 1,
      heightMode: 'flat',
      radius: [8, 10],
      gap: 0.1,
      eventName: 'click',
      label: {
        show: true,
        distance: 0,
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
  
});


instance.camera.instance.updateProjectionMatrix()
instance._renderer.setClearColor("#DDEAFB");
instance.onTick(() => {
});


