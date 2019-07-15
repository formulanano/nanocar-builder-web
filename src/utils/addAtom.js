import * as THREE from "three";

/**
 * addAtom
 *
 * @type {Function} Adds new atom to the scene.
 *
 * @param {Object} scene
 * @param {Array} atomCoor
 * @param {Number} atomRadius
 * @param {Array} atomColor
 *
 */

const addAtom = (scene, atomCoor, atomRadius, atomColor) => {
  const atomGeo = new THREE.SphereGeometry(atomRadius, 8, 8);
  const rgbColor = new THREE.Color();
  rgbColor.setRGB(atomColor[0] / 255, atomColor[1] / 255, atomColor[2] / 255);
  const atomMat = new THREE.MeshLambertMaterial({ color: rgbColor });
  const newAtom = new THREE.Mesh(atomGeo, atomMat);
  newAtom.position.set(atomCoor[0], atomCoor[1], atomCoor[2]);
  scene.add(newAtom);
};

export default addAtom;
