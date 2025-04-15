import * as AUTO from "three-auto";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

const gui = new GUI();
const instance = new AUTO.ThreeAuto(undefined,
  {
    camera: {
      type: "PerspectiveCamera",
      fov: 60,
      near: 0.1,
      far: 1000,
      position: {
        x: 0,
        y: 2,
        z: 10,
      },
      lookAt: true,
      controls: {
        enable: false,
        enableDamping: false,
        enablePan: false,
      },
    },
  }
);

// CSS3DRenderer

const css3 = new AUTO.Tips(instance)
const labels = ['商业', '居住', '写字楼', '产业园', '城镇', '教研', '公共', '医疗', '交通', '娱乐',];
const tipsMeshes: any = [];

// 创建所有卡片元素
labels.forEach((label, index) => {
  const div = AUTO.htmlRender({
    tag: 'div',
    children: [{
      tag: 'div',children: label ,style: {'margin-top': '10px'}
    },{
      tag: 'div',children: index + 1,style: {'margin-top': '4px'}
    }],
    style: { 'font-size': '10px','text-align':'center',color: '#fff', background: 'rgba(34,81,152,1)', width: '60px', height: '60px', 'border-radius': '100%' }
  });
  const mesh = css3.createTips(div);
  tipsMeshes.push(mesh);
});

// 动态计算角度范围
const radius = 3.6;
const len = labels.length;
const totalAngle = Math.PI * 2 * len / 10 ; // 根据数量调整总角度
const startAngle = Math.PI/2 - totalAngle/2; // 从正前方开始计算
const endAngle = Math.PI/2 + totalAngle/2;
const angleStep = len > 1 ? (endAngle - startAngle) / (len - 1) : 0;

// 排列所有卡片
tipsMeshes.forEach((mesh: any, index: number) => {
  const angle = len > 1 ? startAngle + angleStep * index : Math.PI/2;
  mesh.position.set(
    radius * Math.cos(angle),
    0,
    radius * Math.sin(angle)
  );
  mesh.userData.initialAngle = angle;
});

// const axesHelper = new THREE.AxesHelper(20);
// instance.scene.add(axesHelper);

gui.add(instance.camera.instance.position, 'z').min(-100).max(100).step(1);
gui.add(instance.camera.instance.position, 'y').min(-10).max(10).step(0.1);

instance.time.on("tick", () => {
  instance.scene.children[2].rotation.y += Math.PI / 300
  css3.update();
 
});

instance.sizes.on('resize', () => {
  css3.resize()
})
