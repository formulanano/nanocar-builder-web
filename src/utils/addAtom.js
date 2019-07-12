import * as THREE from "three";

const addAtom = (scene, coor, atomRadius, atomColor) => {
  const atomGeo = new THREE.SphereGeometry(atomRadius, 8, 8);
  const rgbColor = new THREE.Color();
  rgbColor.setRGB(atomColor[0] / 255, atomColor[1] / 255, atomColor[2] / 255);
  const atomMat = new THREE.MeshLambertMaterial({ color: rgbColor });
  const newAtom = new THREE.Mesh(atomGeo, atomMat);
  newAtom.position.set(coor[0], coor[1], coor[2]);
  scene.add(newAtom);
};

export default addAtom;
