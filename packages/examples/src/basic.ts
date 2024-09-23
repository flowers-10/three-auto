import * as AUTO from "three-auto";

const instance = new AUTO.ThreeAuto(undefined, {
  id: "_scene",
  name: "hello world",
  camera: {
    type: "PerspectiveCamera",
    fov: 60,
    near: 1,
    far: 10000,
    position: {
      x: 2,
      y: 2,
      z: 2,
    },
    lookAt: true,
    controls: {
      show: true,
      enableDamping: true,
      enablePan: true,
    },
  },
  size: {
    type: "window",
    id: "",
  },
  renderer: {
    antialias: true,
    alpha: true,
    clearAlpha: 1,
    clearColor: "#fff",
  },
  resource: [
    {
      name: "crane",
      type: "GLTF",
      path: "./models/crane_ori.glb",
      show: true,
    },
  ],
  light: [
    {
      type: "ambient",
      color: "#fff",
      intensity: 1,
      helper: false,
      lightName: "ambient-light",
    },
  ],
  postprocess: {
    type: 'moebius',
  }
});

instance.resource?.on('ready',() => {
  const crane = instance.resource?.items.get('crane')
  instance.scene.add(crane.scene)
  const animation = new AUTO.Animation(instance,crane.animations,crane.scene)
  animation.actions[animation.names[0]].play()
  instance.time.on("tick", () => {
    animation.update()
  });
})

