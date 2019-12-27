import { atomVisData } from "../data";
import addAtom from "./addAtom";

/**
 * addMolecule
 *
 * @type {Function} uses addAtom function to generate molecules
 *
 * @param {Object} scene
 * @param {Array} moleculeName
 *
 */

const addMolecule = (scene, moleculeName) => {
  let atomRadius;
  let atomColor;
  let atomCoor;
  for (let atomIndex = 0; atomIndex < moleculeName.length; atomIndex += 1) {
    for (let visIndex = 0; visIndex < atomVisData.name.length; visIndex += 1) {
      if (moleculeName[atomIndex][3] === atomVisData.name[visIndex]) {
        atomRadius = atomVisData.radius[visIndex] / 100;
        atomColor = atomVisData.color[visIndex];
        atomCoor = [moleculeName[atomIndex][0], moleculeName[atomIndex][1], moleculeName[atomIndex][2]];
        addAtom(scene, atomCoor, atomRadius, atomColor);
      }
    }
  }
};

export default addMolecule;
