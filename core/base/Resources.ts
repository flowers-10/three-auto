import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { EventEmitter } from "./EventEmitter";
import { CustomLoading } from "../components";
import { SourcesItems, Loaders, LoadingType } from "../types/index";

export class Resources extends EventEmitter {
  private sources: SourcesItems[];
  public items: { [key: string]: any };
  public toLoad: number;
  public loaded: number;
  private loaders: Loaders;

  constructor(
    sources: SourcesItems[],
    loadingManager?: LoadingType | THREE.LoadingManager
  ) {
    super();
    // Options
    this.sources = sources;
    // Setup
    this.items = {};
    this.toLoad = this.sources.length || 0;
    this.loaded = 0;
    // Create the loading manager based on the provided value or use a default one.
    const customLoadingManager = this.createLoadingManager(loadingManager);
    // Initialize the loaders with the custom loading manager.
    this.loaders = this.createLoaders(customLoadingManager);
    // Start the loading process.
    this.startLoading();
  }

  private createLoadingManager(
    loadingManager?: LoadingType | THREE.LoadingManager
  ): THREE.LoadingManager {
    if (loadingManager === undefined) {
      return new CustomLoading("default").loadingManager;
    } else if (typeof loadingManager === "string") {
      return new CustomLoading(loadingManager).loadingManager;
    } else {
      return loadingManager;
    }
  }

  private createLoaders(loadingManager: THREE.LoadingManager): Loaders {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("draco/");
    return {
      gltfLoader: new GLTFLoader(loadingManager).setDRACOLoader(dracoLoader),
      textureLoader: new THREE.TextureLoader(loadingManager),
      cubeTextureLoader: new THREE.CubeTextureLoader(loadingManager),
      fontLoader: new FontLoader(loadingManager),
      audioLoader: new THREE.AudioLoader(loadingManager),
    };
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

  get getLoaded() {
    return this.loaded === this.toLoad;
  }
  get getProgress() {
    return this.loaded / this.toLoad;
  }
}
