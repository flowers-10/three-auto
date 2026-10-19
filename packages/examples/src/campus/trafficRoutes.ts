import * as THREE from 'three';

export type TrafficRoute = {
  id: string;
  entry: string;
  curve: THREE.Curve<THREE.Vector3>;
  length: number;
};

function route(id: string, entry: string, curve: THREE.Curve<THREE.Vector3>): TrafficRoute {
  curve.arcLengthDivisions = 1200;
  curve.updateArcLengths();
  return { id, entry, curve, length: curve.getLength() };
}

function street(points: number[][], lane: number, reverse: boolean) {
  const world = points.map(([x, y]) => new THREE.Vector3(x / 1254 * 500 - 250 + lane, 0.08, y / 1254 * 460 - 230));
  if (reverse) world.reverse();
  return new THREE.CatmullRomCurve3(world, false, 'catmullrom', 0.5);
}

function turningStreet(points: Array<[number, number]>) {
  const vertices = points.map(([x, z]) => new THREE.Vector3(x, 0.08, z));
  const curve = new THREE.CurvePath<THREE.Vector3>();
  let current = vertices[0];
  for (let i = 1; i < vertices.length - 1; i++) {
    const corner = vertices[i];
    const incoming = corner.clone().sub(vertices[i - 1]).normalize();
    const outgoing = vertices[i + 1].clone().sub(corner).normalize();
    if (incoming.dot(outgoing) > 0.999) {
      curve.add(new THREE.LineCurve3(current, corner));
      current = corner;
      continue;
    }
    const radius = Math.min(10, corner.distanceTo(vertices[i - 1]) * 0.3, corner.distanceTo(vertices[i + 1]) * 0.3);
    const begin = corner.clone().addScaledVector(incoming, -radius);
    const end = corner.clone().addScaledVector(outgoing, radius);
    curve.add(new THREE.LineCurve3(current, begin));
    curve.add(new THREE.QuadraticBezierCurve3(begin, corner, end));
    current = end;
  }
  curve.add(new THREE.LineCurve3(current, vertices[vertices.length - 1]));
  return curve;
}

export function createTrafficRoutes() {
  // These coordinates follow the authored road texture, including its slight bends.
  const west = [[443.7, 87.24], [443, 307], [445, 602], [449, 847], [456.3, 1185.9]];
  const east = [[812.3, 87.24], [813, 293], [815, 603], [819, 877], [831.7, 1185.9]];
  return {
    westSouthbound: route('west-southbound', 'west-north', street(west, -3.3, false)),
    eastNorthbound: route('east-northbound', 'east-south', street(east, 3.3, true)),
    westNorthbound: route('west-northbound', 'west-south', street(west, 3.3, true)),
    eastSouthbound: route('east-southbound', 'east-north', street(east, -3.3, false)),
    westAcross: route('west-across', 'west-north', turningStreet([
      [-76.4, -198], [-76.6, -117.4], [-75.9, -6.2], [71.7, -6.2], [73.3, 91.7], [78.3, 205],
    ])),
    eastAcross: route('east-across', 'east-south', turningStreet([
      [84.9, 205], [79.9, 91.7], [78.3, -12.8], [-69.3, -12.8], [-70, -117.4], [-69.8, -198],
    ])),
  };
}

export function sampleTrafficRoute(route: TrafficRoute, distance: number, position: THREE.Vector3, tangent: THREE.Vector3) {
  const progress = THREE.MathUtils.clamp(distance / route.length, 0, 1);
  route.curve.getPointAt(progress, position);
  route.curve.getTangentAt(progress, tangent);
  return Math.atan2(tangent.x, tangent.z);
}
