import * as THREE from "three";
import CameraControls from "camera-controls";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

import BaseThree from "./BaseThree";
import { ThreeInstance } from "./ThreeInstance";

CameraControls.install({ THREE });

type HandleKind = "translate" | "rotate" | "scale";
type HandleAxis = "x" | "y" | "z";

type DragState = {
  kind: HandleKind;
  axis?: HandleAxis;
  axisSign?: number;
  plane: THREE.Plane;
  startPoint: THREE.Vector3;
  startPositionWorld: THREE.Vector3;
  startQuaternionWorld: THREE.Quaternion;
  startScale: THREE.Vector3;
  axisWorld: THREE.Vector3;
  startVector?: THREE.Vector3;
  startDistance?: number;
  startAxisDistance?: number;
};

type BoundsOverlay = {
  group: THREE.Group;
  line: LineSegments2;
  lineGeometry: LineSegmentsGeometry;
  lineMaterial: LineMaterial;
  positions: Float32Array;
  cornerDots: THREE.Mesh[];
  faceDots: THREE.Mesh[];
};

export type DesignControllerOptions = {
  enable?: boolean;
  hoverColor?: THREE.ColorRepresentation;
  selectColor?: THREE.ColorRepresentation;
  minDistance?: number;
  maxDistance?: number;
};

const CAMERA_MIN_DISTANCE = 2.5;
const CAMERA_MAX_DISTANCE = 22;
const GIZMO_RADIUS_FACTOR = 0.42;
const GIZMO_MIN_SCALE = 0.9;
const GIZMO_MAX_SCALE = 2.85;
const DOT_MIN_SCALE = 0.11;
const DOT_MAX_SCALE = 0.34;
const FACE_DOT_MIN_SCALE = 0.1;
const FACE_DOT_MAX_SCALE = 0.28;
const FACE_DOT_OFFSET_FACTOR = 0.12;
const FACE_DOT_ARROW_CLEARANCE = 0.18;
const SELECT_LINE_WIDTH = 2.2;
const HOVER_LINE_WIDTH = 3.4;
const DISTANCE_SCALE_FACTOR = 0.1;
const DISTANCE_SCALE_MIN = 0.72;
const DISTANCE_SCALE_MAX = 2.4;

const SELECTION_EDGES = [
  [0, 1], [1, 3], [3, 2], [2, 0],
  [4, 5], [5, 7], [7, 6], [6, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
] as const;

export class DesignController extends BaseThree {
  public controls: CameraControls;
  public enabled: boolean;

  private pointer = new THREE.Vector2();
  private pickRaycaster = new THREE.Raycaster();
  private cameraDirection = new THREE.Vector3();
  private tempBox = new THREE.Box3();
  private tempMatrix = new THREE.Matrix4();
  private tempSphere = new THREE.Sphere();

  private hoverOverlay: BoundsOverlay;
  private selectOverlay: BoundsOverlay;
  private gizmo: THREE.Group;

  private selectedObj: THREE.Object3D | null = null;
  private hoveredObj: THREE.Object3D | null = null;
  private dragState: DragState | null = null;

  private onCanvasMouseDown: (event: MouseEvent) => void;
  private onWindowMouseMove: (event: MouseEvent) => void;
  private onWindowMouseUp: () => void;
  private onWindowKeyDown: (event: KeyboardEvent) => void;
  private onWindowKeyUp: (event: KeyboardEvent) => void;
  private onWindowBlur: () => void;
  private eventsBound = false;
  private cameraControlsEnabledBeforeDesign = false;

  constructor(options: DesignControllerOptions = {}, instance: ThreeInstance) {
    super(instance);

    this.enabled = options.enable ?? true;
    this.cameraControlsEnabledBeforeDesign = this._instance.camera?.controls?.enabled ?? false;
    this.controls = new CameraControls(this._camera);
    this.configureCameraControls(options);

    this.hoverOverlay = this.createBoundsOverlay(options.hoverColor ?? 0x009dff, false);
    this.selectOverlay = this.createBoundsOverlay(options.selectColor ?? 0x8c8c8c, true);
    this.gizmo = this.createGizmo();

    this.onCanvasMouseDown = (event) => {
      this.setCameraInputMode(event);

      if (!this.enabled || event.button !== 0) {
        return;
      }

      const handleObjects = [
        ...this.gizmo.children,
        ...this.selectOverlay.cornerDots,
        ...this.selectOverlay.faceDots,
      ];
      const handleHit = this.pickObjects(event, handleObjects)
        .map((hit) => this.getHandleRoot(hit.object))
        .find(Boolean) || null;

      if (handleHit && this.selectedObj && this.startHandleDrag(event, handleHit)) {
        event.preventDefault();
        return;
      }

      const objectHit = this.pickSelectableObject(event);
      if (objectHit) {
        this.select(objectHit);
        this._canvas.style.cursor = "grab";
        return;
      }

      this.select(null);
      this._canvas.style.cursor = "default";
    };

    this.onWindowMouseMove = (event) => {
      if (!this.enabled) {
        return;
      }

      if (this.dragState) {
        this.updateDraggedObject(event);
        return;
      }

      this.updateHoverState(event);
    };

    this.onWindowMouseUp = () => {
      if (this.dragState) {
        this.dragState = null;
        this.controls.enabled = true;
        this._canvas.style.cursor = this.selectedObj ? "grab" : "default";
      }
    };

    this.onWindowKeyDown = (event) => {
      this.setCameraInputMode(event);
    };

    this.onWindowKeyUp = (event) => {
      this.setCameraInputMode(event);
    };

    this.onWindowBlur = () => {
      this.controls.mouseButtons.middle = CameraControls.ACTION.TRUCK;
    };

    this.setEnabled(this.enabled);
  }

  public update() {
    if (!this.enabled) {
      return;
    }

    this.controls.update(this.time.deltaTime || 0);
    this.updateGizmo();
    this.updateBoundsOverlay(this.selectOverlay, this.selectedObj);
    this.updateBoundsOverlay(
      this.hoverOverlay,
      this.hoveredObj && this.hoveredObj !== this.selectedObj ? this.hoveredObj : null,
    );
  }

  public select(object: THREE.Object3D | null) {
    this.selectedObj = object;
    this.hoveredObj = object ? null : this.hoveredObj;
    this.syncVisibility();
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    this.controls.enabled = enabled;

    const orbitControls = this._instance.camera?.controls;

    if (enabled) {
      this.cameraControlsEnabledBeforeDesign = orbitControls?.enabled ?? false;
      if (orbitControls) {
        orbitControls.enabled = false;
      }
    } else if (orbitControls) {
      orbitControls.enabled = this.cameraControlsEnabledBeforeDesign;
    }

    if (enabled) {
      this.controls.connect(this._canvas);
      this.bindEvents();
    } else {
      this.controls.disconnect();
      this.unbindEvents();
    }

    if (!enabled) {
      this.selectedObj = null;
      this.hoveredObj = null;
      this.dragState = null;
      this._canvas.style.cursor = "default";
    }
    this.syncVisibility();
  }

  public get selectedObject() {
    return this.selectedObj;
  }

  public dispose() {
    this.unbindEvents();

    this.controls.disconnect();
    this.controls.dispose();
    this.hoverOverlay.lineGeometry.dispose();
    this.hoverOverlay.lineMaterial.dispose();
    this.selectOverlay.lineGeometry.dispose();
    this.selectOverlay.lineMaterial.dispose();

    this.scene.remove(this.hoverOverlay.group);
    this.scene.remove(this.selectOverlay.group);
    this.scene.remove(this.gizmo);
  }

  private bindEvents() {
    if (this.eventsBound) {
      return;
    }
    this._canvas.addEventListener("mousedown", this.onCanvasMouseDown);
    window.addEventListener("mousemove", this.onWindowMouseMove);
    window.addEventListener("mouseup", this.onWindowMouseUp);
    window.addEventListener("keydown", this.onWindowKeyDown);
    window.addEventListener("keyup", this.onWindowKeyUp);
    window.addEventListener("blur", this.onWindowBlur);
    this.eventsBound = true;
  }

  private unbindEvents() {
    if (!this.eventsBound) {
      return;
    }
    this._canvas.removeEventListener("mousedown", this.onCanvasMouseDown);
    window.removeEventListener("mousemove", this.onWindowMouseMove);
    window.removeEventListener("mouseup", this.onWindowMouseUp);
    window.removeEventListener("keydown", this.onWindowKeyDown);
    window.removeEventListener("keyup", this.onWindowKeyUp);
    window.removeEventListener("blur", this.onWindowBlur);
    this.eventsBound = false;
  }

  private configureCameraControls(options: DesignControllerOptions) {
    this.controls.smoothTime = 0.12;
    this.controls.draggingSmoothTime = 0.08;
    this.controls.dollySpeed = 0.45;
    this.controls.truckSpeed = 1.6;
    this.controls.minDistance = options.minDistance ?? CAMERA_MIN_DISTANCE;
    this.controls.maxDistance = options.maxDistance ?? CAMERA_MAX_DISTANCE;
    this.controls.infinityDolly = false;
    this.controls.dollyToCursor = true;
    this.controls.mouseButtons.left = CameraControls.ACTION.NONE;
    this.controls.mouseButtons.right = CameraControls.ACTION.NONE;
    this.controls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;
    this.controls.mouseButtons.middle = CameraControls.ACTION.TRUCK;
    this.controls.touches.one = CameraControls.ACTION.NONE;
    this.controls.touches.two = CameraControls.ACTION.TOUCH_DOLLY_TRUCK;
  }

  private setCameraInputMode(event?: KeyboardEvent | MouseEvent) {
    const rotateModifier = Boolean(event?.ctrlKey || event?.metaKey);
    this.controls.mouseButtons.middle = rotateModifier
      ? CameraControls.ACTION.ROTATE
      : CameraControls.ACTION.TRUCK;
  }

  private markInternal<T extends THREE.Object3D>(object: T) {
    object.userData.__designInternal = true;
    object.traverse((child) => {
      child.userData.__designInternal = true;
    });
    return object;
  }

  private createBoundsOverlay(color: THREE.ColorRepresentation, withDots: boolean): BoundsOverlay {
    const group = this.markInternal(new THREE.Group());
    group.visible = false;
    this.scene.add(group);

    const positions = new Float32Array(SELECTION_EDGES.length * 2 * 3);
    const lineGeometry = new LineSegmentsGeometry();
    lineGeometry.setPositions(positions);

    const lineMaterial = new LineMaterial({
      color,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      opacity: withDots ? 0.82 : 0.9,
      linewidth: withDots ? SELECT_LINE_WIDTH : HOVER_LINE_WIDTH,
      toneMapped: false,
    });
    const line = this.markInternal(new LineSegments2(lineGeometry, lineMaterial));
    line.renderOrder = 1000;
    group.add(line);

    const cornerDots: THREE.Mesh[] = [];
    const faceDots: THREE.Mesh[] = [];

    if (withDots) {
      const dotGeometry = new THREE.BoxGeometry(1, 1, 1);
      const dotMaterial = new THREE.MeshBasicMaterial({
        color: 0x585858,
        depthTest: false,
        depthWrite: false,
        transparent: true,
        opacity: 0.88,
      });

      for (let i = 0; i < 8; i += 1) {
        const dot = this.markInternal(new THREE.Mesh(dotGeometry, dotMaterial));
        dot.renderOrder = 1001;
        dot.userData.handleKind = "scale";
        dot.userData.cornerIndex = i;
        cornerDots.push(dot);
        group.add(dot);
      }

      const faceDotGeometry = new THREE.BoxGeometry(1, 1, 1);
      const faceDotMaterial = new THREE.MeshBasicMaterial({
        color: 0x3f3f3f,
        depthTest: false,
        depthWrite: false,
        transparent: true,
        opacity: 0.92,
      });
      const faceDotConfigs: Array<{ axis: HandleAxis; sign: number }> = [
        { axis: "x", sign: 1 },
        { axis: "x", sign: -1 },
        { axis: "y", sign: 1 },
        { axis: "y", sign: -1 },
        { axis: "z", sign: 1 },
        { axis: "z", sign: -1 },
      ];

      faceDotConfigs.forEach(({ axis, sign }) => {
        const dot = this.markInternal(new THREE.Mesh(faceDotGeometry, faceDotMaterial));
        dot.renderOrder = 1002;
        dot.userData.handleKind = "scale";
        dot.userData.axis = axis;
        dot.userData.axisSign = sign;
        faceDots.push(dot);
        group.add(dot);
      });
    }

    return { group, line, lineGeometry, lineMaterial, positions, cornerDots, faceDots };
  }

  private getDistanceScale(worldPosition: THREE.Vector3) {
    const distance = worldPosition.distanceTo(this._camera.position);
    return THREE.MathUtils.clamp(distance * DISTANCE_SCALE_FACTOR, DISTANCE_SCALE_MIN, DISTANCE_SCALE_MAX);
  }

  private createGizmo() {
    const gizmo = this.markInternal(new THREE.Group());
    gizmo.visible = false;
    this.scene.add(gizmo);

    const makeBasicMaterial = (color: number, opacity = 1) => new THREE.MeshBasicMaterial({
      color,
      opacity,
      transparent: opacity < 1,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });

    const markHandle = <T extends THREE.Object3D>(object: T, kind: HandleKind, axis?: HandleAxis) => {
      object.userData.handleKind = kind;
      object.userData.axis = axis;
      return object;
    };

    const addAxisHandle = (axis: HandleAxis, color: number, rotation: THREE.Euler, position: THREE.Vector3) => {
      const group = this.markInternal(markHandle(new THREE.Group(), "translate", axis));
      const shaft = this.markInternal(new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.9, 10),
        makeBasicMaterial(color, 0.95),
      ));
      shaft.position.copy(position.clone().multiplyScalar(0.5));
      shaft.rotation.copy(rotation);

      const tip = this.markInternal(new THREE.Mesh(
        new THREE.ConeGeometry(0.045, 0.14, 10),
        makeBasicMaterial(color, 0.95),
      ));
      tip.position.copy(position);
      tip.rotation.copy(rotation);

      const picker = this.markInternal(new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.05, 8),
        makeBasicMaterial(color, 0.001),
      ));
      picker.userData.handleInvisible = true;
      picker.position.copy(position.clone().multiplyScalar(0.52));
      picker.rotation.copy(rotation);

      markHandle(shaft, "translate", axis);
      markHandle(tip, "translate", axis);
      markHandle(picker, "translate", axis);

      group.add(shaft, tip, picker);
      gizmo.add(group);
    };

    const addRotateHandle = (
      axis: HandleAxis,
      color: number,
      points: [THREE.Vector3, THREE.Vector3, THREE.Vector3],
    ) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const visibleArc = this.markInternal(markHandle(
        new THREE.Mesh(
          new THREE.TubeGeometry(curve, 28, 0.01, 8, false),
          makeBasicMaterial(color, 0.9),
        ),
        "rotate",
        axis,
      ));
      visibleArc.renderOrder = 1001;

      const pickerArc = this.markInternal(markHandle(
        new THREE.Mesh(
          new THREE.TubeGeometry(curve, 20, 0.06, 8, false),
          makeBasicMaterial(color, 0.001),
        ),
        "rotate",
        axis,
      ));
      pickerArc.userData.handleInvisible = true;

      const tipPosition = points[2].clone();
      const tipTangent = curve.getTangent(0.99).normalize();
      const tip = this.markInternal(markHandle(
        new THREE.Mesh(
          new THREE.ConeGeometry(0.03, 0.09, 10),
          makeBasicMaterial(color, 0.92),
        ),
        "rotate",
        axis,
      ));
      tip.position.copy(tipPosition);
      tip.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tipTangent);
      tip.renderOrder = 1002;

      gizmo.add(visibleArc, pickerArc, tip);
    };

    addAxisHandle("x", 0xff5a5a, new THREE.Euler(0, 0, -Math.PI / 2), new THREE.Vector3(0.92, 0, 0));
    addAxisHandle("y", 0x32d96b, new THREE.Euler(0, 0, 0), new THREE.Vector3(0, 0.92, 0));
    addAxisHandle("z", 0x2999ff, new THREE.Euler(Math.PI / 2, 0, 0), new THREE.Vector3(0, 0, 0.92));
    addRotateHandle("x", 0xff5a5a, [
      new THREE.Vector3(0, 0.72, 0.02),
      new THREE.Vector3(0, 0.5, 0.42),
      new THREE.Vector3(0, 0.08, 0.66),
    ]);
    addRotateHandle("y", 0x22d1a8, [
      new THREE.Vector3(0.66, 0.02, 0),
      new THREE.Vector3(0.48, 0, 0.3),
      new THREE.Vector3(0.08, 0, 0.54),
    ]);
    addRotateHandle("z", 0x2999ff, [
      new THREE.Vector3(0.02, 0.72, 0),
      new THREE.Vector3(0.42, 0.5, 0),
      new THREE.Vector3(0.66, 0.08, 0),
    ]);

    const pivotHandle = this.markInternal(markHandle(
      new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.08), makeBasicMaterial(0x7a4a4a, 0.95)),
      "translate",
    ));
    pivotHandle.renderOrder = 1002;
    gizmo.add(pivotHandle);

    return gizmo;
  }

  private setPointerFromEvent(event: MouseEvent) {
    const rect = this._canvas.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.pickRaycaster.setFromCamera(this.pointer, this._camera);
  }

  private pickObjects(event: MouseEvent, objects: THREE.Object3D[]) {
    this.setPointerFromEvent(event);
    return this.pickRaycaster.intersectObjects(objects, true);
  }

  private pickSelectableObject(event: MouseEvent) {
    const meshes = this.getSelectableMeshes();
    if (!meshes.length) {
      return null;
    }

    const hits = this.pickObjects(event, meshes);
    for (const hit of hits) {
      const resolved = this.resolveSelectableRoot(hit.object);
      if (resolved) {
        return resolved;
      }
    }
    return null;
  }

  private getSelectableMeshes() {
    const meshes: THREE.Object3D[] = [];
    this.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) {
        return;
      }

      if (!object.visible || object.userData.__designInternal || object.userData.designSelectable === false) {
        return;
      }

      meshes.push(object);
    });
    return meshes;
  }

  private resolveSelectableRoot(object: THREE.Object3D | null) {
    let current = object;
    while (current) {
      if (current.userData.__designInternal || current.userData.designSelectable === false) {
        return null;
      }

      if (current.userData.designRoot === true) {
        return current;
      }

      const parent = current.parent;
      if (!parent || parent === this.scene || parent.name === "series") {
        return current;
      }

      current = parent;
    }

    return null;
  }

  private getHandleRoot(object: THREE.Object3D | null) {
    let current: THREE.Object3D | null = object;
    while (current) {
      if (current.userData.handleKind) {
        return current;
      }
      current = current.parent;
    }
    return null;
  }

  private getLocalBounds(object: THREE.Object3D) {
    if (object instanceof THREE.Mesh) {
      const meshGeometry = object.geometry as THREE.BufferGeometry;
      if (!meshGeometry.boundingBox) {
        meshGeometry.computeBoundingBox();
      }
      if (meshGeometry.boundingBox) {
        return meshGeometry.boundingBox.clone();
      }
    }

    this.tempBox.setFromObject(object);
    object.updateWorldMatrix(true, false);
    this.tempMatrix.copy(object.matrixWorld).invert();
    return this.tempBox.clone().applyMatrix4(this.tempMatrix);
  }

  private getWorldCorners(object: THREE.Object3D) {
    const bounds = this.getLocalBounds(object);
    const { min, max } = bounds;
    const localCorners = [
      new THREE.Vector3(min.x, min.y, min.z),
      new THREE.Vector3(max.x, min.y, min.z),
      new THREE.Vector3(min.x, max.y, min.z),
      new THREE.Vector3(max.x, max.y, min.z),
      new THREE.Vector3(min.x, min.y, max.z),
      new THREE.Vector3(max.x, min.y, max.z),
      new THREE.Vector3(min.x, max.y, max.z),
      new THREE.Vector3(max.x, max.y, max.z),
    ];

    object.updateWorldMatrix(true, false);
    return localCorners.map((corner) => corner.applyMatrix4(object.matrixWorld));
  }

  private getWorldFaceCenters(object: THREE.Object3D) {
    const bounds = this.getLocalBounds(object);
    const center = bounds.getCenter(new THREE.Vector3());
    const { min, max } = bounds;
    const localCenters = [
      { axis: "x" as HandleAxis, sign: 1, position: new THREE.Vector3(max.x, center.y, center.z) },
      { axis: "x" as HandleAxis, sign: -1, position: new THREE.Vector3(min.x, center.y, center.z) },
      { axis: "y" as HandleAxis, sign: 1, position: new THREE.Vector3(center.x, max.y, center.z) },
      { axis: "y" as HandleAxis, sign: -1, position: new THREE.Vector3(center.x, min.y, center.z) },
      { axis: "z" as HandleAxis, sign: 1, position: new THREE.Vector3(center.x, center.y, max.z) },
      { axis: "z" as HandleAxis, sign: -1, position: new THREE.Vector3(center.x, center.y, min.z) },
    ];

    object.updateWorldMatrix(true, false);
    return localCenters.map((item) => ({
      axis: item.axis,
      sign: item.sign,
      position: item.position.applyMatrix4(object.matrixWorld),
    }));
  }

  private getObjectWorldRadius(object: THREE.Object3D) {
    this.tempBox.setFromObject(object);
    this.tempBox.getBoundingSphere(this.tempSphere);
    return Math.max(this.tempSphere.radius, 0.0001);
  }

  private updateBoundsOverlay(overlay: BoundsOverlay, object: THREE.Object3D | null) {
    if (!this.enabled || !object) {
      overlay.group.visible = false;
      return;
    }

    const rect = this._canvas.getBoundingClientRect();
    overlay.lineMaterial.resolution.set(rect.width || 1, rect.height || 1);

    const corners = this.getWorldCorners(object);
    const radius = this.getObjectWorldRadius(object);
    const objectPosition = object.getWorldPosition(new THREE.Vector3());
    const distanceScale = this.getDistanceScale(objectPosition);
    let index = 0;

    SELECTION_EDGES.forEach(([a, b]) => {
      const start = corners[a];
      const end = corners[b];
      overlay.positions[index++] = start.x;
      overlay.positions[index++] = start.y;
      overlay.positions[index++] = start.z;
      overlay.positions[index++] = end.x;
      overlay.positions[index++] = end.y;
      overlay.positions[index++] = end.z;
    });

    overlay.lineGeometry.setPositions(overlay.positions);
    overlay.group.visible = true;

    overlay.cornerDots.forEach((dot, dotIndex) => {
      const corner = corners[dotIndex];
      dot.position.copy(corner);
      const size = THREE.MathUtils.clamp(radius * 0.12 * distanceScale, DOT_MIN_SCALE, DOT_MAX_SCALE);
      dot.scale.setScalar(size);
    });

    const faceCenters = this.getWorldFaceCenters(object);
    overlay.faceDots.forEach((dot, dotIndex) => {
      const faceCenter = faceCenters[dotIndex];
      if (!faceCenter) {
        return;
      }
      const axisWorld = this.getAxisWorld(object, faceCenter.axis);
      const offsetDistance = radius * FACE_DOT_OFFSET_FACTOR
        + (faceCenter.sign > 0 ? FACE_DOT_ARROW_CLEARANCE : 0);
      dot.position.copy(
        faceCenter.position.clone().add(axisWorld.multiplyScalar(faceCenter.sign * offsetDistance)),
      );
      dot.userData.axis = faceCenter.axis;
      dot.userData.axisSign = faceCenter.sign;
      const size = THREE.MathUtils.clamp(radius * 0.075 * distanceScale, FACE_DOT_MIN_SCALE, FACE_DOT_MAX_SCALE);
      dot.scale.setScalar(size);
    });
  }

  private getAxisWorld(object: THREE.Object3D, axis?: HandleAxis) {
    if (!axis) {
      return this._camera.getWorldDirection(new THREE.Vector3()).negate().normalize();
    }

    const base = axis === "x"
      ? new THREE.Vector3(1, 0, 0)
      : axis === "y"
        ? new THREE.Vector3(0, 1, 0)
        : new THREE.Vector3(0, 0, 1);

    return base.applyQuaternion(object.getWorldQuaternion(new THREE.Quaternion())).normalize();
  }

  private intersectDragPlane(event: MouseEvent, plane: THREE.Plane) {
    this.setPointerFromEvent(event);
    return this.pickRaycaster.ray.intersectPlane(plane, new THREE.Vector3());
  }

  private startHandleDrag(event: MouseEvent, handle: THREE.Object3D) {
    if (!this.selectedObj) {
      return false;
    }

    const handleKind = handle.userData.handleKind as HandleKind;
    const handleAxis = handle.userData.axis as HandleAxis | undefined;
    const handleAxisSign = handle.userData.axisSign as number | undefined;
    const gizmoOrigin = this.selectedObj.getWorldPosition(new THREE.Vector3());
    const axisWorld = this.getAxisWorld(this.selectedObj, handleAxis);
    const cameraWorldDirection = this._camera.getWorldDirection(this.cameraDirection).normalize();

    let planeNormal = new THREE.Vector3();
    if (handleKind === "translate" && handleAxis) {
      planeNormal = axisWorld.clone().cross(cameraWorldDirection).cross(axisWorld).normalize();
      if (planeNormal.lengthSq() < 1e-6) {
        planeNormal = new THREE.Vector3(0, 1, 0).cross(axisWorld).cross(axisWorld).normalize();
      }
    } else if (handleKind === "rotate") {
      planeNormal = axisWorld.clone();
    } else {
      planeNormal = cameraWorldDirection.clone();
    }

    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(planeNormal, gizmoOrigin);
    const startPoint = this.intersectDragPlane(event, plane);
    if (!startPoint) {
      return false;
    }

    this.dragState = {
      kind: handleKind,
      axis: handleAxis,
      plane,
      startPoint,
      startPositionWorld: this.selectedObj.getWorldPosition(new THREE.Vector3()),
      startQuaternionWorld: this.selectedObj.getWorldQuaternion(new THREE.Quaternion()),
      startScale: this.selectedObj.scale.clone(),
      axisWorld,
      axisSign: handleAxisSign,
      startVector: startPoint.clone().sub(gizmoOrigin).normalize(),
      startDistance: startPoint.distanceTo(gizmoOrigin),
      startAxisDistance: handleAxis && handleAxisSign
        ? Math.max(startPoint.clone().sub(gizmoOrigin).dot(axisWorld) * handleAxisSign, 0.001)
        : undefined,
    };

    this.controls.enabled = false;
    this._canvas.style.cursor = handleKind === "scale" ? "nwse-resize" : "grabbing";
    return true;
  }

  private updateDraggedObject(event: MouseEvent) {
    if (!this.dragState || !this.selectedObj) {
      return;
    }

    const currentPoint = this.intersectDragPlane(event, this.dragState.plane);
    if (!currentPoint) {
      return;
    }

    const center = this.dragState.startPositionWorld.clone();

    if (this.dragState.kind === "translate") {
      if (this.dragState.axis) {
        const delta = currentPoint.clone().sub(this.dragState.startPoint).dot(this.dragState.axisWorld);
        const nextWorldPosition = this.dragState.startPositionWorld.clone()
          .add(this.dragState.axisWorld.clone().multiplyScalar(delta));
        this.setWorldPosition(this.selectedObj, nextWorldPosition);
      } else {
        const delta = currentPoint.clone().sub(this.dragState.startPoint);
        const nextWorldPosition = this.dragState.startPositionWorld.clone().add(delta);
        this.setWorldPosition(this.selectedObj, nextWorldPosition);
      }
    } else if (this.dragState.kind === "rotate" && this.dragState.startVector) {
      const currentVector = currentPoint.clone().sub(center).normalize();
      const angle = this.signedAngle(this.dragState.startVector, currentVector, this.dragState.axisWorld);
      const deltaQuaternion = new THREE.Quaternion().setFromAxisAngle(this.dragState.axisWorld, angle);
      const nextWorldQuaternion = deltaQuaternion.multiply(this.dragState.startQuaternionWorld.clone());
      this.setWorldQuaternion(this.selectedObj, nextWorldQuaternion);
    } else if (this.dragState.kind === "scale") {
      if (this.dragState.axis && this.dragState.axisSign && this.dragState.startAxisDistance) {
        const currentAxisDistance = Math.max(
          currentPoint.clone().sub(center).dot(this.dragState.axisWorld) * this.dragState.axisSign,
          0.001,
        );
        const scaleFactor = THREE.MathUtils.clamp(
          currentAxisDistance / this.dragState.startAxisDistance,
          0.2,
          8,
        );
        this.selectedObj.scale.copy(this.dragState.startScale);
        this.selectedObj.scale[this.dragState.axis] = this.dragState.startScale[this.dragState.axis] * scaleFactor;
      } else if (this.dragState.startDistance) {
        const currentDistance = Math.max(currentPoint.distanceTo(center), 0.001);
        const scaleFactor = THREE.MathUtils.clamp(currentDistance / this.dragState.startDistance, 0.2, 8);
        this.selectedObj.scale.copy(this.dragState.startScale).multiplyScalar(scaleFactor);
      }
    }

    this.selectedObj.updateWorldMatrix(true, false);
    this.updateBoundsOverlay(this.selectOverlay, this.selectedObj);
  }

  private signedAngle(from: THREE.Vector3, to: THREE.Vector3, normal: THREE.Vector3) {
    const cross = new THREE.Vector3().crossVectors(from, to);
    return Math.atan2(cross.dot(normal), from.dot(to));
  }

  private updateHoverState(event: MouseEvent) {
    if (!this.enabled || this.dragState || this.selectedObj) {
      return;
    }

    this.hoveredObj = this.pickSelectableObject(event);
    this.updateBoundsOverlay(this.hoverOverlay, this.hoveredObj);
    this._canvas.style.cursor = this.hoveredObj ? "pointer" : "default";
  }

  private updateGizmo() {
    if (!this.enabled || !this.selectedObj) {
      this.gizmo.visible = false;
      return;
    }

    const position = this.selectedObj.getWorldPosition(new THREE.Vector3());
    const quaternion = this.selectedObj.getWorldQuaternion(new THREE.Quaternion());
    const radius = this.getObjectWorldRadius(this.selectedObj);
    const distanceScale = this.getDistanceScale(position);
    const scale = THREE.MathUtils.clamp(
      radius * GIZMO_RADIUS_FACTOR * distanceScale,
      GIZMO_MIN_SCALE,
      GIZMO_MAX_SCALE,
    );

    this.gizmo.visible = true;
    this.gizmo.position.copy(position);
    this.gizmo.quaternion.copy(quaternion);
    this.gizmo.scale.setScalar(scale);

    const cameraDirection = this._camera.getWorldDirection(new THREE.Vector3()).normalize();
    this.gizmo.traverse((child) => {
      if (child.userData.handleInvisible || !child.userData.axis || !(child instanceof THREE.Mesh)) {
        return;
      }
      const axisWorld = this.getAxisWorld(this.selectedObj!, child.userData.axis as HandleAxis);
      const facing = Math.abs(axisWorld.dot(cameraDirection));
      const material = child.material;
      if (Array.isArray(material)) {
        material.forEach((item) => {
          item.opacity = THREE.MathUtils.lerp(0.95, 0.28, facing);
          item.transparent = true;
        });
      } else if (material && "opacity" in material) {
        material.opacity = THREE.MathUtils.lerp(0.95, 0.28, facing);
        material.transparent = true;
      }
    });
  }

  private syncVisibility() {
    if (!this.enabled) {
      this.hoverOverlay.group.visible = false;
      this.selectOverlay.group.visible = false;
      this.gizmo.visible = false;
      return;
    }

    this.updateBoundsOverlay(this.selectOverlay, this.selectedObj);
    this.updateBoundsOverlay(
      this.hoverOverlay,
      this.hoveredObj && this.hoveredObj !== this.selectedObj ? this.hoveredObj : null,
    );
    this.updateGizmo();
  }

  private setWorldPosition(object: THREE.Object3D, worldPosition: THREE.Vector3) {
    if (!object.parent) {
      object.position.copy(worldPosition);
      return;
    }

    object.parent.updateWorldMatrix(true, false);
    object.position.copy(object.parent.worldToLocal(worldPosition.clone()));
  }

  private setWorldQuaternion(object: THREE.Object3D, worldQuaternion: THREE.Quaternion) {
    if (!object.parent) {
      object.quaternion.copy(worldQuaternion);
      return;
    }

    object.parent.updateWorldMatrix(true, false);
    const parentWorldQuaternion = object.parent.getWorldQuaternion(new THREE.Quaternion());
    object.quaternion.copy(parentWorldQuaternion.invert().multiply(worldQuaternion.clone()));
  }
}
