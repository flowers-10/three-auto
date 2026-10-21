import * as THREE from 'three';
import type { TrafficRoute } from '../campus/trafficRoutes';
import { pixelToWorld, type PixelPoint } from './layout';
import { measuredJunctions, measuredRoads } from './roadGeometry';

// Centrelines are measured on the approved image, not on the original regular grid.
export const expandedRoads = measuredRoads;

function roundedCentre(points: PixelPoint[]) {
  const vertices = points.map((point) => pixelToWorld(point, 0.09));
  const curve = new THREE.CurvePath<THREE.Vector3>();
  let current = vertices[0];
  for (let i = 1; i < vertices.length - 1; i += 1) {
    const corner = vertices[i];
    const incoming = corner.clone().sub(vertices[i - 1]).normalize();
    const outgoing = vertices[i + 1].clone().sub(corner).normalize();
    const radius = Math.min(10, corner.distanceTo(vertices[i - 1]) * 0.45, corner.distanceTo(vertices[i + 1]) * 0.45);
    const begin = corner.clone().addScaledVector(incoming, -radius);
    const end = corner.clone().addScaledVector(outgoing, radius);
    curve.add(new THREE.LineCurve3(current, begin));
    curve.add(new THREE.QuadraticBezierCurve3(begin, corner, end));
    current = end;
  }
  curve.add(new THREE.LineCurve3(current, vertices[vertices.length - 1]));
  curve.updateArcLengths();
  return curve;
}

function trip(id: string, entry: string, points: PixelPoint[], reverse = false): TrafficRoute {
  const centre = roundedCentre(reverse ? [...points].reverse() : points);
  const samples = Array.from({ length: 601 }, (_, index) => {
    const t = index / 600;
    const point = centre.getPointAt(t);
    const tangent = centre.getTangentAt(t).normalize();
    return point.add(new THREE.Vector3(-tangent.z, 0, tangent.x).multiplyScalar(3));
  });
  const curve = new THREE.CatmullRomCurve3(samples, false, 'centripetal');
  curve.arcLengthDivisions = 1600;
  curve.updateArcLengths();
  return { id, entry, curve, length: curve.getLength() };
}

export function createTrafficRoutes() {
  const { leftMiddle, leftShared, rightMiddle, rightShared } = measuredJunctions;
  // Leave room around junctions for the turning arc, including the lane offset.
  const clearance = 45;
  return {
    leftDown: trip('expanded-left-down', 'left-top', expandedRoads.left),
    rightUp: trip('expanded-right-up', 'right-bottom', expandedRoads.right, true),
    leftUp: trip('expanded-left-up', 'left-bottom', expandedRoads.left, true),
    rightDown: trip('expanded-right-down', 'right-top', expandedRoads.right),
    leftAcross: trip('expanded-left-across', 'left-top', [
      ...expandedRoads.left.filter((point) => point[1] < leftShared[1] - clearance),
      leftShared,
      ...expandedRoads.shared.filter((point) => point[0] > leftShared[0] + clearance && point[0] < rightShared[0] - clearance),
      rightShared,
      ...expandedRoads.right.filter((point) => point[1] > rightShared[1] + clearance),
    ]),
    rightAcross: trip('expanded-right-across', 'right-bottom', [
      ...expandedRoads.right.filter((point) => point[1] > rightMiddle[1] + clearance).reverse(),
      rightMiddle,
      ...expandedRoads.middle.filter((point) => point[0] > leftMiddle[0] + clearance && point[0] < rightMiddle[0] - clearance).reverse(),
      leftMiddle,
      ...expandedRoads.left.filter((point) => point[1] < leftMiddle[1] - clearance).reverse(),
    ]),
  };
}
