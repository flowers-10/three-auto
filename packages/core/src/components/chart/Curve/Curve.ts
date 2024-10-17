import * as THREE from "three";
import BaseThree from "../../../base/BaseThree";
import { ThreeInstance } from "../../../base";

export interface CurveConfig {
    color: string;
    curve: THREE.CatmullRomCurve3;
    width: number;
    length: number;
    speed: number;
    repeat: number;
    texture: any;
    callback: Function;
}

export class Curve extends BaseThree {
    constructor(instance: ThreeInstance) {
        super(instance)
    }

}

function createFlyLine(radius: number, startAngle: number, endAngle: number, color: any) {
    const geometry = new THREE.BufferGeometry();
    const arc = new THREE.ArcCurve(0, 0, radius, startAngle, endAngle, false);
    const pointsArr = arc.getSpacedPoints(100);
    geometry.setFromPoints(pointsArr);
    const percentArr = [];
    for (let i = 0; i < pointsArr.length; i++) {
        percentArr.push(i / pointsArr.length);
    }
    const percentAttribue = new THREE.BufferAttribute(
        new Float32Array(percentArr),
        1
    );
    geometry.attributes.percent = percentAttribue;
    const colorArr = [];
    for (let i = 0; i < pointsArr.length; i++) {
        const color1 = new THREE.Color(0xec8f43);
        const color2 = new THREE.Color(0xf3ae76);
        const color = color1.lerp(color2, i / pointsArr.length);
        colorArr.push(color.r, color.g, color.b);
    }

    geometry.attributes.color = new THREE.BufferAttribute(
        new Float32Array(colorArr),
        3
    );
    const size = radius * 0.02;

    const material = new THREE.PointsMaterial({
        size,
        transparent: true,
        depthWrite: false,
    });
    material.onBeforeCompile = function (shader) {
        shader.vertexShader = shader.vertexShader.replace(
            "void main() {",
            [
                "attribute float percent;",
                "void main() {",
            ].join("\n")
        );
        shader.vertexShader = shader.vertexShader.replace(
            "gl_PointSize = size;",
            ["gl_PointSize = percent * size;"].join("\n")
        );
    };
    const FlyLine = new THREE.Points(geometry, material);
    material.color = new THREE.Color(color)
    FlyLine.name = "flyLine";

    return FlyLine;
}

function geoToSpherical(radius: number, lng: number, lat: number) {
    const theta = (90 + lng) * (Math.PI / 180)
    const phi = (90 - lat) * (Math.PI / 180)
    return new THREE.Vector3().setFromSpherical(new THREE.Spherical(radius, phi, theta))
}

function flyArc(radius: number, lon1: number, lat1: number, lon2: number, lat2: number, options: any) {
    const sphereCoord1 = geoToSpherical(radius, lon1, lat1);
    const startSphereCoord = new THREE.Vector3(sphereCoord1.x, sphereCoord1.y, sphereCoord1.z);
    const sphereCoord2 = geoToSpherical(radius, lon2, lat2);
    const endSphereCoord = new THREE.Vector3(sphereCoord2.x, sphereCoord2.y, sphereCoord2.z);

    const startEndQua = _3Dto2D(startSphereCoord, endSphereCoord)
    const arcline = arcXOY(radius, startEndQua.startPoint, startEndQua.endPoint, options);
    arcline.quaternion.multiply(startEndQua.quaternion)
    return arcline;
}

function _3Dto2D(startSphere: any, endSphere: any) {
    const origin = new THREE.Vector3(0, 0, 0); 
    const startDir = startSphere.clone().sub(origin); 
    const endDir = endSphere.clone().sub(origin); 
    const normal = startDir.clone().cross(endDir).normalize();
    const xoyNormal = new THREE.Vector3(0, 0, 1); 
    const quaternion3D_XOY = new THREE.Quaternion().setFromUnitVectors(normal, xoyNormal);
    const startSphereXOY = startSphere.clone().applyQuaternion(quaternion3D_XOY);
    const endSphereXOY = endSphere.clone().applyQuaternion(quaternion3D_XOY);

    const middleV3 = startSphereXOY.clone().add(endSphereXOY).multiplyScalar(0.5);
    const midDir = middleV3.clone().sub(origin).normalize();
    const yDir = new THREE.Vector3(0, 1, 0); 
    const quaternionXOY_Y = new THREE.Quaternion().setFromUnitVectors(midDir, yDir);

    const startSpherXOY_Y = startSphereXOY.clone().applyQuaternion(quaternionXOY_Y);
    const endSphereXOY_Y = endSphereXOY.clone().applyQuaternion(quaternionXOY_Y);

    const quaternionInverse = quaternion3D_XOY.clone().invert().multiply(quaternionXOY_Y.clone().invert())
    return {
        quaternion: quaternionInverse,
        startPoint: startSpherXOY_Y,
        endPoint: endSphereXOY_Y,
    }
}

function arcXOY(radius: number, startPoint: THREE.Vector3, endPoint: THREE.Vector3, options: any) {
    const middleV3 = new THREE.Vector3().addVectors(startPoint, endPoint).multiplyScalar(0.5);
    const dir = middleV3.clone().normalize()
    const earthRadianAngle = radianAOB(startPoint, endPoint, new THREE.Vector3(0, 0, 0))

    const arcTopCoord = dir.multiplyScalar(radius + earthRadianAngle * radius * 0.2) // 
    const flyArcCenter = threePointCenter(startPoint, endPoint, arcTopCoord)
    const flyArcR = Math.abs(flyArcCenter.y - arcTopCoord.y);
    const flyRadianAngle = radianAOB(startPoint, new THREE.Vector3(0, -1, 0), flyArcCenter);
    const startAngle = -Math.PI / 2 + flyRadianAngle;
    const endAngle = Math.PI - startAngle;
    const arcline: any = circleLine(flyArcCenter.x, flyArcCenter.y, flyArcR, startAngle, endAngle, options.color)
    arcline.center = flyArcCenter;
    arcline.topCoord = arcTopCoord;

    const flyAngle = (endAngle - startAngle) / 7;
    const flyLine: any = createFlyLine(flyArcR, startAngle, startAngle + flyAngle, options.flyLineColor);
    flyLine.position.y = flyArcCenter.y;
    arcline.add(flyLine);
    flyLine.flyEndAngle = endAngle - startAngle - flyAngle;
    flyLine.startAngle = startAngle;
    flyLine.AngleZ = arcline.flyEndAngle * Math.random();
    arcline.userData['flyLine'] = flyLine;

    return arcline
}

function radianAOB(A: any, B: any, O: any) {
    const dir1 = A.clone().sub(O).normalize();
    const dir2 = B.clone().sub(O).normalize();
    const cosAngle = dir1.clone().dot(dir2);
    const radianAngle = Math.acos(cosAngle);
    return radianAngle
}

function circleLine(x: number, y: number, r: number, startAngle: number, endAngle: number, color: any) {
    const geometry = new THREE.BufferGeometry();
    const arc = new THREE.ArcCurve(x, y, r, startAngle, endAngle, false);
    const points = arc.getSpacedPoints(80);
    geometry.setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: color || 0xd18547,
    });
    const line = new THREE.Line(geometry, material);
    return line;
}
function threePointCenter(p1: any, p2: any, p3: any) {
    const L1 = p1.lengthSq();
    const L2 = p2.lengthSq();
    const L3 = p3.lengthSq();
    const x1 = p1.x,
        y1 = p1.y,
        x2 = p2.x,
        y2 = p2.y,
        x3 = p3.x,
        y3 = p3.y;
    const S = x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2;
    const x = (L2 * y3 + L1 * y2 + L3 * y1 - L2 * y1 - L3 * y2 - L1 * y3) / S / 2;
    const y = (L3 * x2 + L2 * x1 + L1 * x3 - L1 * x2 - L2 * x3 - L3 * x1) / S / 2;
    // 三点外接圆圆心坐标
    const center = new THREE.Vector3(x, y, 0);
    return center
}


export {
    arcXOY,
    flyArc
}
