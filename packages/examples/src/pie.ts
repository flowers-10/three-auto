import * as AUTO from "three-auto";

const canvas = document.getElementById('_canvas') as HTMLCanvasElement;

const instance = new AUTO.ThreeAuto(canvas, {
  size: {
    type: 'parent',
  },
  camera: {
    type: 'OrthographicCamera',
    fov: 60,
    near: 1,
    far: 1000,
    position: {
      x: 120,
      y: 60,
      z: 0,
    },
    lookAt: true,
    controls: {
      enable: false,
      enableDamping: false,
      enablePan: false,
    },
  },
  legend: {
    show: true,
    orient: 'vertical',
    align: 'left',
    top: '10%',
    left: '20%',
    itemGap: 10,
    itemWidth: 8,
    itemHeight: 10,
    icon: 'circle',
    textStyle:{
      'font-size': '12px',
      color: '#fff',
      'font-weight': 'normal'
    },
    formatter: (params: any) => {
      return `<div style="font-size: 14px;text-align:center;margin-left: 4px">${params.name}<span style="display:inline-block;vertical-align:middle;color:#6F96C7;margin:0 8px;border-bottom:2px dotted #6F96C7;width:30px;"></span><span style="color:#FDD050">${params.percent.toFixed(0)}%</span></div>`
    },
  },
  renderer: {
    antialias: true,
    alpha: true,
    clearAlpha: 1,
    clearColor: '#000',
  },
  series: [
    {
      type: 'pie',
      name: 'three-auto-pie',
      shadow: false,
      data: [
        { name: '安全', value: 40, color: '#1561EC' },
        { name: '服务', value: 30, color: '#22B6E7' },
        { name: '报修', value: 20, color: '#52E4AC' },
        { name: '环境', value: 10, color: '#FED859' },
      ],
      transparent: true,
      opacity: 0.9,
      height: 10,
      heightMode: 'height',
      radius: [44, 60],
      gap: 1,
      eventName: 'mousemove',
      animation: true,
      animationDurationUpdate: 1000,
      position: {
        x: 0,
        y: 0,
        z: 76,
      },
      emphasis: {
        selectedMode: 'height',
        disabled: false,
        scaleSize: 2,
        label: {
          show: true,
          distance: 8,
          scale: 1,
          position: 'center',
          formatter: (params: any) => {
            return `<div style="font-size: 14px;text-align:center">${params.value}</div><div style="font-size: 8px;text-align:center">${params.name}</div>`
          },
          rotation: {
            x: 0,
            y: 0,
            z: 0,
          },
          textStyle: {
            padding: '6px',
            color: "#fff",
            bold: true,
            'font-weight': 'bold',
            'font-style': 'normal',
          },
        }
      },
      label: {
        show: false,
        distance: 0,
        scale: 1,
        position: 'center',
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
        padding: '4px 8px',
        hideDelay: 100,
        textStyle: {
          'font-size': '10px',
          color: "#000000",
          'font-weight': 400,
          'font-style': 'normal',
        },
      }
    }
  ],

});


instance.camera.instance.updateProjectionMatrix()
// instance._renderer.setClearColor("#000");
instance.onTick(() => {
});
