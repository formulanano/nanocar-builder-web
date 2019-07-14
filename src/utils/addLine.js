import * as THREE from "three";

/**
 * addLine
 *
 * @type {Function} Draws line on the scene.
 *
 * @param {Object} scene
 * @param {Array} coor1
 * @param {Array} coor2
 * @param {Number} lineColor
 *
 */

const addLine = (scene, coor1, coor2, lineColor) => {
  const lineMat = new THREE.LineBasicMaterial({
    color: lineColor,
    linewidth: 10
  });
  const geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(coor1[0], coor1[1], coor1[2]),
    new THREE.Vector3(coor2[0], coor2[1], coor2[2])
  );
  const line = new THREE.Line(geometry, lineMat);
  scene.add(line);
};

export default addLine;
