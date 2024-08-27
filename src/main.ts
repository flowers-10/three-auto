import * as AUTO from "../core";
import * as THREE from "three";
import { GlitchEffect, EffectPass, ShaderPass } from "postprocessing";

const instance = new AUTO.ThreeAuto();
const geometry = new THREE.BoxGeometry(400, 400, 400);
const material = new THREE.MeshBasicMaterial({
  color: "#E89ABE",
  transparent: true,
});
const box = new THREE.Mesh(geometry, material);

instance.scene.add(box);

const customPass = new AUTO.CustomPass(instance);
customPass.composer.addPass(
  new EffectPass(
    instance.camera.instance,
    new GlitchEffect()
  )
);

customPass.composer.addPass(
  new ShaderPass(
    new THREE.ShaderMaterial({
      uniforms: {
        inputBuffer: { value: null },
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
        uniform sampler2D inputBuffer;
        void main() {
          vec4 color = texture2D(inputBuffer, vUv);
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
