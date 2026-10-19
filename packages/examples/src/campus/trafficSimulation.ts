import * as THREE from 'three';
import { sampleTrafficRoute, type TrafficRoute } from './trafficRoutes.ts';

export function createTrafficSimulation(roots: THREE.Object3D[], routes: TrafficRoute[], random = Math.random) {
  const cars = roots.map((root, index) => {
    root.visible = false;
    return {
      root, index, route: routes[index === 2 ? 4 : index],
      baseSpeed: [5.8, 7.1, 8.6][index], cruiseSpeed: 0, speed: 0,
      distance: 0, wait: [0, 4.8, 12.6][index], trips: 0,
      tangent: new THREE.Vector3(),
    };
  });
  const focusPosition = new THREE.Vector3();
  let focusedCar = cars[0];
  let elapsed = 0;
  let lastArrival = -Infinity;
  const ahead = new THREE.Vector3();
  const aheadTangent = new THREE.Vector3();
  const separation = new THREE.Vector3();

  const spawn = (car: typeof cars[number]) => {
    const entryClear = (candidate: TrafficRoute) => {
      const entry = candidate.curve.getPointAt(0);
      return !cars.some((other) => other.root.visible && other.root.position.distanceTo(entry) < 12);
    };
    if (car.trips > 0) {
      const candidates = routes.filter((candidate) => candidate.entry !== car.route.entry &&
        entryClear(candidate) && !cars.some((other) => other !== car && other.root.visible && other.route.id === candidate.id));
      const available = candidates.length ? candidates : routes.filter((candidate) => candidate.entry !== car.route.entry && entryClear(candidate));
      if (!available.length) { car.wait = 1; return; }
      car.route = available[Math.min(available.length - 1, Math.floor(random() * available.length))];
    } else if (!entryClear(car.route)) {
      car.wait = 1;
      return;
    }
    car.trips++;
    car.distance = 0;
    car.cruiseSpeed = car.baseSpeed * (0.9 + random() * 0.2);
    car.speed = car.cruiseSpeed * 0.8;
    car.root.visible = true;
    lastArrival = elapsed;
    car.root.rotation.y = sampleTrafficRoute(car.route, 0, car.root.position, car.tangent);
  };

  const update = (deltaSeconds: number) => {
    const step = Number.isFinite(deltaSeconds) ? THREE.MathUtils.clamp(deltaSeconds, 0, 0.1) : 0;
    elapsed += step;
    for (const car of cars) {
      if (!car.root.visible) {
        car.wait -= step;
        if (car.wait <= 0 && elapsed - lastArrival >= 2.5) spawn(car);
        continue;
      }
      sampleTrafficRoute(car.route, car.distance + 6, ahead, aheadTangent);
      const turn = Math.acos(THREE.MathUtils.clamp(car.tangent.dot(aheadTangent), -1, 1));
      let targetSpeed = car.cruiseSpeed * (1 - Math.min(0.45, turn * 0.6));
      for (const other of cars) {
        if (other === car || !other.root.visible || car.tangent.dot(other.tangent) < 0.85) continue;
        separation.subVectors(other.root.position, car.root.position);
        const gap = separation.dot(car.tangent);
        const lateral = Math.abs(separation.x * car.tangent.z - separation.z * car.tangent.x);
        if (gap > 0 && gap < 16 && lateral < 2.3) {
          targetSpeed = Math.min(targetSpeed, other.speed * THREE.MathUtils.clamp((gap - 6) / 8, 0, 1));
        }
      }
      car.speed = THREE.MathUtils.damp(car.speed, targetSpeed, 3, step);
      car.distance += car.speed * step;
      if (car.distance >= car.route.length) {
        car.root.visible = false;
        car.wait = 8 + car.index * 3 + random() * 11;
        car.speed = 0;
        continue;
      }
      car.root.rotation.y = sampleTrafficRoute(car.route, car.distance, car.root.position, car.tangent);
    }
    if (!focusedCar.root.visible) focusedCar = cars.find((car) => car.root.visible) || focusedCar;
    if (focusedCar.root.visible) focusPosition.copy(focusedCar.root.position);
  };
  update(0);
  return {
    count: cars.length,
    get activeCount() { return cars.filter((car) => car.root.visible).length; },
    focusPosition,
    update,
  };
}
