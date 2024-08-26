import * as AUTO from "../core";
import * as THREE from "three";
import { Effect, EffectPass, ShaderPass } from "postprocessing";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(400, 400, 400);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);

const customPass = new AUTO.CustomPass(instance);
// customPass.composer.addPass(
//   new EffectPass(
//     instance.camera.instance,
//     new Effect(
//       "test",
//       `
// void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)  {
//     vec4 color = inputColor;
//     color.r -= 0.9;
//     outputColor = color;
//   }`
//     )
//   )
// );

customPass.composer.addPass(
  new ShaderPass(
    new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vUv = uv;
        }
  `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          color.gb += 0.3;
          gl_FragColor = color;
        }
  `,
    })
  )
);
instance.time.on("tick", () => {
  customPass.composer.render();
  box.rotation.y = instance.time.elapsedTime;
});
