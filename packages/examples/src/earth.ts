import * as AUTO from "three-auto";
import ChinaJson from '../public/China.json'

const instance = new AUTO.ThreeAuto(undefined, {
  series: [
    {
      name: 'earth',
      type: 'earth',
      atmosphereDayColor: '#00aaff',
      atmosphereTwilightColor: '#ff6600',
      atmosphereThickness: 1.04,
      rotation: true,
      radius: 2,
      json: ChinaJson,
    },
  ],
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      z: 3
    }
  },
  renderer: {
    clearColor: '#000',
    clearAlpha: 1,
  }
});

instance.onTick(() => {
});

