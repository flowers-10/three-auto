import * as AUTO from "three-auto";

const instance = new AUTO.ThreeAuto(undefined, {
  series: [
    {
      name: 'earth',
      type: 'earth',
    },
  ],
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: {
      z: 3
    }
  }
});

instance.onTick(() => {
});

