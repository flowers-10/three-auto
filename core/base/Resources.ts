import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import EventEmitter from "./EventEmitter.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { ThreeInstance } from "./ThreeInstance.js";

type SourcesType = "TEXTURE" | "CUBE_TEXTURE" | "GLTF" | "MP3" | "FONT";

type SourcesItems = {
  name: string;
  type: SourcesType;
  path: string;
  show: boolean;
};

type Loaders = {
  gltfLoader: GLTFLoader;
  textureLoader: THREE.TextureLoader;
  cubeTextureLoader: THREE.CubeTextureLoader;
  fontLoader: FontLoader;
  audioLoader: THREE.AudioLoader;
};

export default class Resources extends EventEmitter {
  private sources: SourcesItems[];
  public items: { [key: string]: any };
  public toLoad: number;
  public loaded: number;
  private loaders: Loaders;
  constructor(sources: SourcesItems[], instance: ThreeInstance) {
    super();
    // Options
    this.sources = sources;
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("draco/");
    // Setup
    this.items = {};
    this.toLoad = this.sources.length || 0;
    this.loaded = 0;
    const loadingManager = instance.loading.loadingManager
    this.loaders = {
      gltfLoader: new GLTFLoader(loadingManager),
      textureLoader: new THREE.TextureLoader(loadingManager),
      cubeTextureLoader: new THREE.CubeTextureLoader(loadingManager),
      fontLoader: new FontLoader(loadingManager),
      audioLoader: new THREE.AudioLoader(loadingManager),
    };
    this.loaders.gltfLoader.setDRACOLoader(dracoLoader);

    this.startLoading();
  }

  startLoading() {
    // Load each source
    for (const source of this.sources) {
      if (source.type === "GLTF") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "TEXTURE") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "FONT") {
        this.loaders.fontLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "MP3") {
        this.loaders.audioLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }

  sourceLoaded(source: SourcesItems, file: any) {
    this.items[source.name] = file;

    this.loaded++;
    if (this.loaded === this.toLoad) {
      this.trigger("ready", null);
    }
  }

  get isLoaded() {
    return this.loaded === this.toLoad
  }
  get progress() {
    return this.loaded / this.toLoad
  }
}
