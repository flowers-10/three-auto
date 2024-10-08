import * as THREE from "three";
import { EventEmitter } from "./EventEmitter";

export class MouseMoveTracker extends EventEmitter {
  private canvas: HTMLCanvasElement;
  public mouse: THREE.Vector2;
  public eventOffset: THREE.Vector2;
  public clientOffset: THREE.Vector2;
  private mouseMoveHandler: ((event: MouseEvent) => void) | null;

  constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.mouse = new THREE.Vector2(1,1);
    this.eventOffset = new THREE.Vector2();
    this.clientOffset = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      const { left, top, width, height } = this.canvas.getBoundingClientRect();
      
      const clientX = event.clientX - left;
      const clientY = event.clientY - top;
      
      this.mouse.set((clientX / width) * 2 - 1, -(clientY / height) * 2 + 1);
      this.eventOffset.set(clientX, clientY);
      this.clientOffset.set(event.clientX, event.clientY);
      
      this.trigger("mousemove", this.eventOffset);
    };
    this.mouseMoveHandler = handleMouseMove;
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler);
  }

  dispose() {
    if (this.mouseMoveHandler) {
      this.canvas.removeEventListener("mousemove", this.mouseMoveHandler);
      this.mouseMoveHandler = null;
    }
  }
}
