import assert from 'node:assert/strict';
import test from 'node:test';
import { CatmullRomCurve3, Object3D, Vector3 } from 'three';
import { createTrafficRoutes, sampleTrafficRoute } from '../src/campus/trafficRoutes.ts';
import { createTrafficSimulation } from '../src/campus/trafficSimulation.ts';

test('all six trips enter and leave at different map edges without looping', () => {
  const routes = Object.values(createTrafficRoutes());
  assert.equal(routes.length, 6);
  for (const route of routes) {
    const start = route.curve.getPointAt(0);
    const end = route.curve.getPointAt(1);
    assert.ok(start.distanceTo(end) > 300);
    assert.ok(Math.abs(start.z) > 195 && Math.abs(end.z) > 195);
    const terminal = new Vector3();
    sampleTrafficRoute(route, route.length + 20, terminal, new Vector3());
    assert.ok(terminal.distanceTo(end) < 1e-6, 'Trip endpoints must not wrap to their start');
  }
});

test('a 4.9m by 2.15m car stays on the authored asphalt on every route', () => {
  const roads = [
    { points: [[444, 0], [443, 307], [445, 602], [449, 847], [458, 1254]], width: 37 / 1254 * 500 / 2 },
    { points: [[812, 0], [813, 293], [815, 603], [819, 877], [834, 1254]], width: 42 / 1254 * 500 / 2 },
    { points: [[120, 601], [350, 602], [638, 601], [910, 603], [1254, 610]], width: 42 / 1254 * 460 / 2 },
  ].map(({ points, width }) => {
    const curve = new CatmullRomCurve3(points.map(([x, y]) => new Vector3(x / 1254 * 500 - 250, 0.08, y / 1254 * 460 - 230)), false, 'catmullrom', 0.5);
    return { points: curve.getPoints(240), width };
  });
  const onAsphalt = ({ x, z }) => roads.some((road) => {
    for (let i = 1; i < road.points.length; i++) {
      const a = road.points[i - 1], b = road.points[i];
      const dx = b.x - a.x, dz = b.z - a.z;
      const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / (dx * dx + dz * dz)));
      if ((x - a.x - dx * t) ** 2 + (z - a.z - dz * t) ** 2 <= (road.width + 0.1) ** 2) return true;
    }
    return false;
  });
  for (const route of Object.values(createTrafficRoutes())) {
    const position = new Vector3();
    const forward = new Vector3();
    for (let i = 0; i <= 900; i++) {
      sampleTrafficRoute(route, route.length * i / 900, position, forward);
      const side = new Vector3(forward.z, 0, -forward.x);
      for (const longitudinal of [-2.45, 0, 2.45]) for (const lateral of [-1.075, 0, 1.075]) {
        const point = position.clone().addScaledVector(forward, longitudinal).addScaledVector(side, lateral);
        assert.ok(onAsphalt(point), `${route.id} leaves asphalt at ${point.x.toFixed(2)}, ${point.z.toFixed(2)}`);
      }
    }
  }
});

const advance = (simulation, seconds) => {
  for (let time = 0; time < seconds - 1e-8; time += 0.05) simulation.update(0.05);
};
const makeSimulation = () => {
  const roots = [new Object3D(), new Object3D(), new Object3D()];
  return { roots, simulation: createTrafficSimulation(roots, Object.values(createTrafficRoutes()), () => 0.5) };
};

test('vehicles arrive at staggered times and travel at different speeds', () => {
  const { roots, simulation } = makeSimulation();
  assert.deepEqual(roots.map((root) => root.visible), [true, false, false]);
  advance(simulation, 5);
  assert.deepEqual(roots.map((root) => root.visible), [true, true, false]);
  advance(simulation, 8.5);
  assert.equal(simulation.activeCount, 3);
  const before = roots.map((root) => root.position.clone());
  advance(simulation, 0.5);
  const distances = roots.map((root, index) => root.position.distanceTo(before[index]));
  assert.ok(distances[1] > distances[0] * 1.1);
  assert.ok(distances[2] > distances[1] * 1.1);
});

test('a car exits, stays absent, and returns through a different entry', () => {
  const { roots, simulation } = makeSimulation();
  const originalEntry = roots[0].position.clone();
  for (let i = 0; i < 3600 && roots[0].visible; i++) simulation.update(0.05);
  assert.equal(roots[0].visible, false);
  assert.ok(roots[0].position.z > 195);
  advance(simulation, 5);
  assert.equal(roots[0].visible, false, 'Car must remain absent after exiting');
  for (let i = 0; i < 800 && !roots[0].visible; i++) simulation.update(0.05);
  assert.equal(roots[0].visible, true);
  assert.ok(roots[0].position.distanceTo(originalEntry) > 100, 'Next appearance uses a different map entry');
});

test('repeated arrivals remain staggered over five simulated minutes', () => {
  const { roots, simulation } = makeSimulation();
  let lastArrival = 0;
  const appearances = [1, 0, 0];
  for (let step = 1; step <= 6000; step++) {
    const before = roots.map((root) => root.visible);
    simulation.update(0.05);
    roots.forEach((root, index) => {
      if (before[index] || !root.visible) return;
      const time = step * 0.05;
      assert.ok(time - lastArrival >= 2.45, 'Vehicles must not arrive together');
      lastArrival = time;
      appearances[index]++;
    });
  }
  assert.ok(appearances.every((count) => count >= 3), 'Every car should leave and return several times');
});
