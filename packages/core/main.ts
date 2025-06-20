import * as AUTO from "./src/index";
import * as THREE from 'three'
const gsap = AUTO.ThreeAuto.gsap

const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a', '10a', '11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p'];
// prettier-ignore
const days = ['Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
const instance = new AUTO.ThreeAuto(undefined, {
  camera: {
    type: 'PerspectiveCamera',
    fov: 70,
    near: 1,
    far: 1000,
    position: {
      x: -20,
      y: 10,
      z: 40,
    },
    lookAt: false,
    controls: {
      enable: true,
      enableDamping: true,
      enablePan: true,
    },
  },
  renderer: {
    logarithmicDepthBuffer: true,
    alpha: true,
    clearColor: '#fff',
  },
  series: [
    {
      type: 'bar',
      show: true,
      data: Array.from({ length: 168 }, (item, index) => ({
        value: Math.floor(Math.random() * 16),
        name: '问题',
        xName: days[index % 7],
        yName: hours[Math.floor(index / 7)],
        x: index % 7,
        y: Math.floor(index / 7)
      })),
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
      },
    }
  ]
});

const axisHelper = new THREE.AxesHelper(30)
instance.scene.add(axisHelper)
instance.scene.position.set(-10, 0, -10)
instance.time.on("tick", () => {
  // box.rotation.y = instance.time.elapsedTime;
});


