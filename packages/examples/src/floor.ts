import * as AUTO from "three-auto";
import * as THREE from 'three'
const gsap = AUTO.ThreeAuto.gsap
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'


const instance = new AUTO.ThreeAuto(undefined, {
    id: "_scene",
    name: "Hello three auto",
    camera: {
        type: 'PerspectiveCamera',
        fov: 45,
        near: 1,
        far: 10000,
        position: {
            x: -13.767695123014105,
            y: 12.990152163077308,
            z: 39.28228164159694,
        },
        lookAt: true,
        controls: {
            enable: true,
            enableDamping: true,
            enablePan: true,
        },
    },
    size: {
        type: "window",
    },
    renderer: {
        antialias: true,
        alpha: false,
        clearAlpha: 1,
        clearColor: '#102736',
    },
    light: [
        {
            type: "ambient",
            color: "#fff",
            intensity: 5,
            lightName: "ambient-light",
        },
        {
            type: "directional",
            color: "#fff",
            intensity: 5,
            lightName: "directional-light",
            position: {
                x: -30,
                y: 6,
                z: -8
            }
        },
    ],
    resource: [
        {
            name: "ocean",
            type: "TEXTURE",
            path: "./floor/ocean-blue-bg.png",
            show: true,
        },
    ]
});

instance.scene.fog = new THREE.Fog(0x102736, 1, 50)

const opt = {
    gridSize: 50,
    gridDivision: 20,
    gridColor: 0x1b4b70, // 深蓝
    shapeSize: 0.5,
    shapeColor: 0x2a5f8a, // 深蓝
    // shapeColor: 0xf44336, // 红色
    pointSize: 0.1,
    pointColor: 0x154d7d, // 深蓝
    diffuse: true,
    diffuseSpeed: 10,
    diffuseWidth: 10,
    pointLayout: { row: 200, col: 200 },
    diffuseColor: 0x2e8bd9, // 蓝色
    pointBlending: THREE.NormalBlending,
    // diffuseDir: 1, // 扩散方向：0-圆形扩散，1-横向扩散
}

if (instance.resource) {
    instance.resource.on('ready', () => {
        // floor
        const oceanTexture = instance.resource!.items.get("ocean");
        const floorGeometry = new THREE.PlaneGeometry(20, 20)
        oceanTexture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间
        oceanTexture.wrapS = THREE.RepeatWrapping // 水平方向重复纹理
        oceanTexture.wrapT = THREE.RepeatWrapping // 垂直方向重复纹理
        oceanTexture.repeat.set(1, 1) // 设置纹理重复次数
        const floorMaterial = new THREE.MeshBasicMaterial({
            map: oceanTexture,
            opacity: 1,
        })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotateX(-Math.PI / 2)
        floor.position.set(0, -0.7, 0)
        instance.scene.add(floor)
        // grid
        const gridGroup = new THREE.Group()
        gridGroup.name = 'Grid'

        const gridHelper = new THREE.GridHelper(opt.gridSize, opt.gridDivision, opt.gridColor, opt.gridColor)

        const cellSize = opt.gridSize / opt.gridDivision // 每个网格的大小
        const halfGridSize = opt.gridSize / 2 // 网格的一半大小
        const shapeMaterial = new THREE.MeshBasicMaterial({
            color: opt.shapeColor,
            side: THREE.DoubleSide,
        })
        // 创建加号几何体数组
        const geometries = []

        for (let row = 0; row < opt.gridDivision + 1; row++) {
            for (let col = 0; col < opt.gridDivision + 1; col++) {
                const lineWidth = opt.shapeSize / 6 / 3 // 宽
                const armLength = opt.shapeSize / 3 // 长

                // 加号形状的顶点
                const vertices = [
                    new THREE.Vector2(-armLength, -lineWidth), // 外左下
                    new THREE.Vector2(-lineWidth, -lineWidth), // 内左下
                    new THREE.Vector2(-lineWidth, -armLength),
                    new THREE.Vector2(lineWidth, -armLength),
                    new THREE.Vector2(lineWidth, -lineWidth),
                    new THREE.Vector2(armLength, -lineWidth),
                    new THREE.Vector2(armLength, lineWidth),
                    new THREE.Vector2(lineWidth, lineWidth),
                    new THREE.Vector2(lineWidth, armLength),
                    new THREE.Vector2(-lineWidth, armLength),
                    new THREE.Vector2(-lineWidth, lineWidth),
                    new THREE.Vector2(-armLength, lineWidth),
                ]
                const shape = new THREE.Shape(vertices)
                const plusGeometry = new THREE.ShapeGeometry(shape, 24)
                plusGeometry.translate(
                    -halfGridSize + row * cellSize,
                    -halfGridSize + col * cellSize,
                    0,
                )
                geometries.push(plusGeometry)
            }
        }
        const mergedGeometry = mergeGeometries(geometries)
        const shapeMesh = new THREE.Mesh(mergedGeometry, shapeMaterial)

        shapeMesh.renderOrder = -1
        shapeMesh.rotateX(-Math.PI / 2)
        shapeMesh.position.y += 0.01

        // 创建散点几何体和材质
        const rows = opt.pointLayout.row // 点阵行数
        const cols = opt.pointLayout.col // 点阵列数
        const pointVertices = new Float32Array(rows * cols * 3) // 顶点数组

        // 生成点阵
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = (row / (rows - 1)) * opt.gridSize - opt.gridSize / 2
                const y = 0
                const z = (col / (cols - 1)) * opt.gridSize - opt.gridSize / 2

                const index = (row * cols + col) * 3
                pointVertices[index] = x
                pointVertices[index + 1] = y
                pointVertices[index + 2] = z
            }
        }
        const pointGeometry = new THREE.BufferGeometry()
        pointGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(pointVertices, 3),
        )

        const pointMaterial = new THREE.PointsMaterial({
            color: opt.pointColor,
            size: opt.pointSize,
            blending: opt.pointBlending,
        })

        const points = new THREE.Points(pointGeometry, pointMaterial)

        if (opt.diffuse) {
            let shaderProgram: THREE.WebGLProgramParametersWithUniforms | null = null
            // 给材质添加着色器
            pointMaterial.onBeforeCompile = shader => {
                shaderProgram = shader
                // 添加自定义 uniform 变量
                shader.uniforms = {
                    ...shader.uniforms,
                    uTime: { value: 0 },
                    uSpeed: { value: opt.diffuseSpeed },
                    uWidth: { value: opt.diffuseWidth },
                    uColor: { value: new THREE.Color(opt.diffuseColor) },
                    uDir: { value: 0 }, // 扩散方向：0-圆形扩散，1-横向扩散
                }

                // 修改顶点着色器，添加变量传递
                shader.vertexShader = shader.vertexShader.replace(
                    'void main() {',
                    `
          varying vec3 vPosition;
          void main() {
            vPosition = position;
          `,
                )

                // 修改片元着色器，添加变量声明
                shader.fragmentShader = shader.fragmentShader.replace(
                    'void main() {',
                    `
          uniform float uTime;
          uniform float uSpeed;
          uniform float uWidth;
          uniform vec3 uColor;
          uniform float uDir;
          varying vec3 vPosition;
  
          void main() {
          `,
                )

                // 实现扩散效果的着色器代码
                shader.fragmentShader = shader.fragmentShader.replace(
                    '#include <opaque_fragment>',
                    `
          #ifdef OPAQUE
          diffuseColor.a = 1.0;
          #endif
  
          #ifdef USE_TRANSMISSION
          diffuseColor.a *= material.transmissionAlpha;
          #endif
  
          // 计算扩散半径
          float radius = uTime * uSpeed;
  
          // 光环宽度
          float width = min(uWidth, uTime * 5.0);
  
          // 几何中心点
          vec2 center = vec2(0.0, 0.0);
  
          // 距离圆心的距离
          float distanceFromCenter = 0.0;
  
          // 根据扩散方向决定使用的坐标和计算方式
          if(uDir == 1.0) {
            // 横向扩散 - 只考虑x轴方向
            distanceFromCenter = abs(vPosition.x);
          } else {
            // 圆形扩散 - 考虑xz平面
            distanceFromCenter = distance(vPosition.xz, center);
          }
  
          // 光环扩散效果实现
          if(distanceFromCenter > radius && distanceFromCenter < radius + 2.0 * width) {
            float percentage = 0.0;
  
            if(distanceFromCenter < radius + width) {
              // 内圈渐变
              percentage = (distanceFromCenter - radius) / width;
              outgoingLight = mix(outgoingLight, uColor, percentage);
            } else {
              // 外圈渐变
              percentage = (distanceFromCenter - radius - width) / width;
              outgoingLight = mix(uColor, outgoingLight, percentage);
            }
  
            gl_FragColor = vec4(outgoingLight, diffuseColor.a);
          } else {
            gl_FragColor = vec4(outgoingLight, diffuseColor.a);
          }
          `,
                )
            }

            // 添加时间更新
            const resetTime = opt.gridSize / opt.diffuseSpeed
            instance.time.on('tick', () => {
                if (shaderProgram) {
                    shaderProgram.uniforms.uTime.value += instance.time.deltaTime
                    // 当时间超过一定值时重置，形成循环动画
                    if (shaderProgram.uniforms.uTime.value > resetTime) {
                        shaderProgram.uniforms.uTime.value = 0
                    }
                }
            })
        }
        gridGroup.add(gridHelper, shapeMesh, points)
        instance.scene.add(gridGroup)

        // animation
        const timeLine = gsap.timeline()
        timeLine.add(
            gsap.to(instance.camera.instance!.position, {
                duration: 2.5,
                x: -20.460391656828197,
                y: 19.30487264306655,
                z: 58.37802626943616,
                ease: 'circ.out',
            }),
        )

        timeLine.add(
            gsap.to(instance.camera.instance!.position, {
                duration: 2.5,
                x: -0.2515849818960619,
                y: 12.397744557047988,
                z: 14.647659671139275,
                ease: 'circ.out',
            }),
        )
    })
}
