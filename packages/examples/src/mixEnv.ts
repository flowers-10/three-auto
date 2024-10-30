import * as AUTO from "three-auto";
import * as THREE from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import dynamicEnvVertexShader from "../shader/DynamicEnv/vert.glsl";
import dynamicEnvFragmentShader from "../shader/DynamicEnv/frag.glsl";
import { FullScreenQuad } from "three/examples/jsm/Addons.js";
import { PMREMGenerator } from 'three';

const gui = new GUI();
const instance = new AUTO.ThreeAuto(undefined,
	// {
	// 	postprocess: {
	// 		type: 'bloom',
	// 		options: {
	// 			luminanceThreshold: 0.01,
	// 			mipmapBlur: true,
	// 			intensity: 0.5,
	// 			radius: 0.1,
	// 		},
	// 	}
	// }
);
instance._camera.position.set(0, 0, 600);
instance._renderer.setClearColor('#000');
/* models */
const source = new AUTO.Resources([{
	name: "envMapNight",
	type: "HDR",
	path: "/env/t_env_night.hdr",
	show: true,
}, {
	name: "envMapLight",
	type: "HDR",
	path: "/env/t_env_light.hdr",
	show: true,
}]);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
instance.scene.add(ambientLight);


/* sphere */
const sphere = new THREE.Mesh(
	new THREE.SphereGeometry(30, 32, 16),
	new THREE.MeshPhysicalMaterial({
		roughness:0,
	})
);
sphere.position.set(0, 0, 50);


const getEnv = (hdr: any) => {
	const pmremGenerator = new PMREMGenerator(instance._renderer);
	pmremGenerator.compileEquirectangularShader();
	const envMap = pmremGenerator.fromEquirectangular(hdr).texture;
	pmremGenerator.dispose();
	return envMap;
}

/* await */
let envMapLight: any;
let envMapNight: any;
let fbo: THREE.WebGLRenderTarget;
let envMaterial: THREE.ShaderMaterial;
let quad: FullScreenQuad;
source.on('ready', () => {
	instance.scene.add(sphere);
	envMapNight = getEnv(source.items.get('envMapNight'))
	envMapLight = getEnv(source.items.get('envMapLight'))

	fbo = new THREE.WebGLRenderTarget(envMapNight.source.data.width, envMapLight.source.data.height, {
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		type: THREE.HalfFloatType,
	});
	fbo.texture.mapping = THREE.CubeUVReflectionMapping
	envMaterial = new THREE.ShaderMaterial({
		vertexShader: dynamicEnvVertexShader,
		fragmentShader: dynamicEnvFragmentShader,
		uniforms: {
			uEnvmap1: {
				value: envMapNight,
			},
			uEnvmap2: {
				value: envMapLight,
			},
			uWeight: {
				value: 0,
			},
			uIntensity: {
				value: 1,
			},
		},
	});
	quad = new FullScreenQuad(envMaterial)

	AUTO.action(instance._camera.position, { x: 0, y: 0, z: 300 })
	gui.add(envMaterial.uniforms.uWeight, 'value').max(1).min(0).name('uWeight')
	gui.add(envMaterial.uniforms.uIntensity, 'value').max(1).min(0).name('uIntensity')

	instance.scene.environment = fbo.texture

});

// const env = new AUTO.Environment(instance)
instance.time.on("tick", () => {
	instance._renderer.setRenderTarget(fbo);
	quad?.render(instance._renderer);
	instance._renderer.setRenderTarget(null);
});