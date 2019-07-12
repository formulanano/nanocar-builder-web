import * as THREE from "three";

const addLine = (scene, coor1, coor2, lineColor) => {
  const lineMat = new THREE.LineBasicMaterial({
    color: lineColor,
    linewidth: 10
  });
  const lineGeo = new THREE.Geometry();
  lineGeo.vertices.push(
    new THREE.Vector3(coor1[0], coor1[1], coor1[2]),
    new THREE.Vector3(coor2[0], coor2[1], coor2[2])
  );
  const line = new THREE.Line(lineGeo, lineMat);
  scene.add(line);
};

export default addLine;
