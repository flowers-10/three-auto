import * as THREE from 'three';
import type { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createTrafficRoutes } from './trafficRoutes';
import { createTrafficSimulation } from './trafficSimulation';

export type CampusTraffic = {
  count: number;
  readonly activeCount: number;
  focusPosition: THREE.Vector3;
  update: (deltaSeconds: number) => void;
};

export async function createCampusTraffic(scene: THREE.Scene, loader: GLTFLoader, environment: THREE.Texture): Promise<CampusTraffic> {
  const models = await Promise.all([
    { file: 'golden-suv.glb', length: 4.9 },
    { file: 'midnight-car.glb', length: 4.65 },
  ].map(async ({ file, length }) => {
    const gltf = await loader.loadAsync(`/models/campus/${file}`);
    const template = new THREE.Group();
    const aligned = new THREE.Group();
    // Both source cars face -X; traffic groups use +Z as their forward axis.
    aligned.rotation.y = Math.PI / 2;
    aligned.add(gltf.scene);
    template.add(aligned);
    template.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(template);
    aligned.scale.setScalar(length / bounds.getSize(new THREE.Vector3()).z);
    template.updateMatrixWorld(true);
    bounds.setFromObject(template);
    const center = bounds.getCenter(new THREE.Vector3());
    aligned.position.set(-center.x, -bounds.min.y, -center.z);
    gltf.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.castShadow = true;
      object.receiveShadow = true;
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        if (material instanceof THREE.MeshStandardMaterial) {
          material.envMap = environment;
          material.envMapIntensity = 1.1;
        }
      }
    });
    return template;
  }));

  const cars = [0, 0, 1].map((model, index) => {
    const root = models[model].clone(true);
    root.name = `campus-vehicle-${index + 1}`;
    scene.add(root);
    return root;
  });
  return createTrafficSimulation(cars, Object.values(createTrafficRoutes()));
}
