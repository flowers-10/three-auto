import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";
import { EventEmitter } from "./EventEmitter";
import { CustomLoading } from "../components";
import { SourcesItems, Loaders, LoadingType } from "../types";
import { OBJLoader } from "three/examples/jsm/Addons.js";

export class Resources extends EventEmitter {
  public sources: SourcesItems[];
  public items: Map<string, any>;
  public toLoad: number;
  public loaded: number;
  private loaders: Loaders;

  constructor(
    sources: SourcesItems[],
    loadingManager?: LoadingType | THREE.LoadingManager
  ) {
    super();
    if(!sources.length) {
      throw console.error('ThreeAuto.Resources:Sources items not provided;');
    }
    this.sources = sources;
    this.items = new Map();
    this.toLoad = this.sources.length || 0;
    this.loaded = 0;
    this.loaders = this.createLoaders(loadingManager ? this.createLoadingManager(loadingManager) : undefined);
    this.startLoading();
  }

  private createLoadingManager(
    loadingManager?: LoadingType | THREE.LoadingManager
  ): THREE.LoadingManager {
    return loadingManager instanceof THREE.LoadingManager
      ? loadingManager
      : new CustomLoading(
          typeof loadingManager === "string" ? loadingManager : "default"
        ).loadingManager;
  }

  private createLoaders(loadingManager?: THREE.LoadingManager | undefined): Loaders {
    const dracoLoader = new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
    return {
      objLoader: new OBJLoader(loadingManager),
      gltfLoader: new GLTFLoader(loadingManager).setDRACOLoader(dracoLoader),
      textureLoader: new THREE.TextureLoader(loadingManager),
      cubeTextureLoader: new THREE.CubeTextureLoader(loadingManager),
      fontLoader: new FontLoader(loadingManager),
      audioLoader: new THREE.AudioLoader(loadingManager),
      rgbeLoader: new RGBELoader(loadingManager),
      exrLoader: new EXRLoader(loadingManager),
    };
  }

  private loadSource(source: SourcesItems) {
    const loaderMap: {
      [key: string]: (path: string, callback: (file: any) => void) => void;
    } = {
      OBJ: this.loaders.gltfLoader.load.bind(this.loaders.objLoader),
      GLTF: this.loaders.gltfLoader.load.bind(this.loaders.gltfLoader),
      TEXTURE: this.loaders.textureLoader.load.bind(this.loaders.textureLoader),
      FONT: this.loaders.fontLoader.load.bind(this.loaders.fontLoader),
      MP3: this.loaders.audioLoader.load.bind(this.loaders.audioLoader),
      HDR: this.loaders.rgbeLoader.load.bind(this.loaders.rgbeLoader),
      EXR: this.loaders.exrLoader.load.bind(this.loaders.exrLoader),
    };

    if (loaderMap[source.type]) {
      loaderMap[source.type](source.path, (file) =>
        this.sourceLoaded(source, file)
      );
    }
  }

  startLoading() {
    this.sources.forEach((source) => this.loadSource(source));
  }

  sourceLoaded(source: SourcesItems, file: any) {
    this.items.set(source.name, file);
    this.loaded++;
    if (this.loaded === this.toLoad) {
      this.trigger("ready", null);
    }
  }

  get getLoaded() {
    return this.loaded === this.toLoad;
  }
  get getProgress() {
    return this.toLoad ? this.loaded / this.toLoad : 0;
  }
}
