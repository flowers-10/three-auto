import * as THREE from 'three';
import { expandedGround, pixelToWorld } from './layout';

export async function createExpandedGround(maxAnisotropy: number) {
  const { widthPixels, heightPixels } = expandedGround;
  const corners = [[0, 0], [widthPixels, 0], [widthPixels, heightPixels], [0, heightPixels]] as const;
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(corners.flatMap((point) => pixelToWorld(point, 0.06).toArray()), 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute([0, 1, 1, 1, 1, 0, 0, 0], 2));
  geometry.setIndex([0, 2, 1, 0, 3, 2]);
  const texture = await new THREE.TextureLoader().loadAsync('/models/campus-expanded/ground-landscaped.png');
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, maxAnisotropy);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    map: texture, roughness: 1, metalness: 0, alphaTest: 0.65, side: THREE.DoubleSide,
  }));
  mesh.name = '九地块不规则底板-绿化铺装';
  mesh.receiveShadow = true;
  return mesh;
}
