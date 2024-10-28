import * as AUTO from "three-auto";
import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

const gui = new GUI();
const instance = new AUTO.ThreeAuto(undefined, {
    postprocess: {
        type: 'bloom',
        options: {
            luminanceThreshold: 0.1,
            mipmapBlur: false,
            intensity: 1,
            radius: 0.1,
        },
    }
});
instance._camera.position.set(0, 0, 300);
instance._renderer.setClearColor('#000');
/* models */
let Loewenfeld: any = null;
const source = new AUTO.Resources([{
    name: "Loewenfeld",
    type: "GLTF",
    path: "./models/sculpture_bust_of_roza_loewenfeld-v1.glb",
    show: true,
},]);

/* plane */
const geometry = new THREE.PlaneGeometry(300, 300);
const material = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
        iTime: { value: 0 },
    },
    vertexShader: `varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`,
    fragmentShader: `
     uniform vec2 iResolution; // 屏幕分辨率
uniform float iTime;      // 时间
varying vec2 vUv;

precision highp float;

float gTime = 0.;
const float REPEAT = 5.0;

// 回転行列
mat2 rot(float a) {
	float c = cos(a), s = sin(a);
	return mat2(c, s, -s, c);
}

float sdBox(vec3 p, vec3 b) {
	vec3 q = abs(p) - b;
	return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
}

float box(vec3 pos, float scale) {
	pos *= scale;
	float base = sdBox(pos, vec3(.4, .4, .1)) / 1.5;
	pos.xy *= 5.;
	pos.y -= 3.5;
	pos.xy *= rot(.75);
	float result = -base;
	return result;
}

float box_set(vec3 pos, float iTime) {
	vec3 pos_origin = pos;
	pos = pos_origin;
	pos.y += sin(gTime * 0.4) * 2.5;
	pos.xy *= rot(.8);
	float box1 = box(pos, 2. - abs(sin(gTime * 0.4)) * 1.5);
	pos = pos_origin;
	pos.y -= sin(gTime * 0.4) * 2.5;
	pos.xy *= rot(.8);
	float box2 = box(pos, 2. - abs(sin(gTime * 0.4)) * 1.5);
	pos = pos_origin;
	pos.x += sin(gTime * 0.4) * 2.5;
	pos.xy *= rot(.8);
	float box3 = box(pos, 2. - abs(sin(gTime * 0.4)) * 1.5);
	pos = pos_origin;
	pos.x -= sin(gTime * 0.4) * 2.5;
	pos.xy *= rot(.8);
	float box4 = box(pos, 2. - abs(sin(gTime * 0.4)) * 1.5);
	pos = pos_origin;
	pos.xy *= rot(.8);
	float box5 = box(pos, .5) * 6.;
	pos = pos_origin;
	float box6 = box(pos, .5) * 6.;
	float result = max(max(max(max(max(box1, box2), box3), box4), box5), box6);
	return result;
}

float map(vec3 pos, float iTime) {
	vec3 pos_origin = pos;
	float box_set1 = box_set(pos, iTime);

	return box_set1;
}

void main() {
	vec3 ro = vec3(0., -0.2, iTime * 4.);
	vec3 ray = normalize(vec3(vUv, 1.5));
	ray.xy = ray.xy * rot(sin(iTime * .03) * 5.);
	ray.yz = ray.yz * rot(sin(iTime * .05) * .2);
	float t = 0.1;
	vec3 col = vec3(0.);
	float ac = 0.0;

	for(int i = 0; i < 99; i++) {
		vec3 pos = ro + ray * t;
		pos = mod(pos - 2., 4.) - 2.;
		gTime = iTime - float(i) * 0.01;

		float d = map(pos, iTime);

		d = max(abs(d), 0.01);
		ac += exp(-d * 23.);

		t += d * 0.55;
	}

	col = vec3(ac * 0.02);

	col += vec3(0., 0.2 * abs(sin(iTime)), 0.5 + sin(iTime) * 0.2);

	gl_FragColor = vec4(col, 1.0 - t * (0.02 + 0.02 * sin(iTime)));
}

`
});
const plane = new THREE.Mesh(geometry, material);

/* holy torus */
const O3D = new THREE.Mesh(
    new THREE.TorusGeometry(40, 1, 64),
    new THREE.MeshBasicMaterial({ color: '#fff' })
);
O3D.position.set(0, 0, 50);

/* sphere */
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(20, 32, 16),
    new THREE.MeshStandardMaterial({ roughness: 0, metalness: 1, color: 0xaaaaaa })
);
sphere.position.set(0, 0, 50);

/* await */
source.on('ready', () => {
    Loewenfeld = source.items.get('Loewenfeld').scene;
    Loewenfeld.material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa })
    Loewenfeld.scale.set(0.2, 0.2, 0.2);
    Loewenfeld.position.set(0, 0, -60);
    Loewenfeld.rotateY(-Math.PI / 2);
    instance.scene.add(Loewenfeld);
    plane.position.set(0, 0, -300);
    instance.scene.add(plane);
    instance.scene.add(O3D);
    instance.scene.add(sphere);
});

const env = new AUTO.Environment(instance)
gui.add(plane.position, 'x').min(-1000).max(1000).step(10);

instance.time.on("tick", () => {
    material.uniforms.iTime.value = instance.elapsedTime;
    // O3D.rotation.x = Math.sin(instance.elapsedTime) * 2;
    sphere.visible = false;
    env.cubeCamera.position.copy(sphere.position);
    env.cubeCamera.update(instance._renderer, instance.scene);
    sphere.visible = true;
});