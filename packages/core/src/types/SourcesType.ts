
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { EXRLoader, RGBELoader } from "three/examples/jsm/Addons.js";

export type SourcesType = "TEXTURE" | "CUBE_TEXTURE" | "GLTF" | "MP3" | "FONT" | "HDR";

export type SourcesItems = {
  name: string;
  type: SourcesType;
  path: string;
  show?: boolean;
};

export type Loaders = {
  gltfLoader: GLTFLoader;
  textureLoader: THREE.TextureLoader;
  cubeTextureLoader: THREE.CubeTextureLoader;
  fontLoader: FontLoader;
  audioLoader: THREE.AudioLoader;
  rgbELoader: RGBELoader;
  exrLoader: EXRLoader;
};

export type LoadingType = 'default' | 'circle' | 'fade' | null | undefined;