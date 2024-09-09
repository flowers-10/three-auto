import * as AUTO from "three-auto";
const instance = new AUTO.ThreeAuto();
const resources = new AUTO.Resources([
  {
    name: "crane",
    type: "GLTF",
    path: "./models/crane_ori.glb",
    show: true,
  },
]);
new AUTO.Light(
  [
    {
      type: "ambient",
      color: "#fff",
      intensity: 1,
      helper: false,
      lightName: "ambient-light",
    },
  ],
  instance
);
resources.on("ready", () => {
  console.log(resources.items.get("crane"));
  const crane = resources.items.get("crane");
  instance.scene.add(crane.scene);
  instance._camera.position.x = 6
  const animation = new AUTO.Animation(instance,crane.animations,crane.scene)
  AUTO.action(crane.scene.rotation,{x:Math.PI})
  AUTO.action(crane.scene.rotation,{y:Math.PI})
  AUTO.action(crane.scene.rotation,{z:Math.PI})
  AUTO.action(crane.scene.position,{x:1})
  AUTO.action(crane.scene.position,{y:1})
  AUTO.action(crane.scene.position,{z:1})
  animation.openSkeletonHelper()
  console.log(animation.names,animation.actions);
  animation.actions[animation.names[0]].play()
  instance.time.on("tick", () => {
    animation.update()
  });
});