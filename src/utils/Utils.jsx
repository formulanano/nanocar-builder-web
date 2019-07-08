import * as THREE from "three";
import atomVisData from "../data/atomVisData.json";

export default class Utils {
    static addAtom = (scene, coor, atomRadius, atomColor) => {
        const atomGeo = new THREE.SphereGeometry(atomRadius, 8, 8);
        const rgbColor = new THREE.Color();
        rgbColor.setRGB(atomColor[0] / 255, atomColor[1] / 255, atomColor[2] / 255);
        const atomMat = new THREE.MeshLambertMaterial({color: rgbColor});
        const newAtom = new THREE.Mesh(atomGeo, atomMat);
        newAtom.position.set(coor[0], coor[1], coor[2]);
        scene.add(newAtom);
    };

    static addMolecule = (scene, moleculeName) => {
        let atomRadius, atomColor, atomCoor;
        for (var atomIndex = 0; atomIndex < moleculeName.length; atomIndex++) {
            for (var visIndex = 0; visIndex < atomVisData.name.length; visIndex++) {
                if (moleculeName[atomIndex][3] === atomVisData.name[visIndex]) {
                    atomRadius = atomVisData.radius[visIndex] / 100;
                    atomColor = atomVisData.color[visIndex];
                    atomCoor = [moleculeName[atomIndex][0], moleculeName[atomIndex][1], moleculeName[atomIndex][2]];
                    Utils.addAtom(scene, atomCoor, atomRadius, atomColor);
                }
            }
        }
    };

    static addLine = (scene, coor1, coor2, lineColor) => {
        const lineMat = new THREE.LineBasicMaterial({color: lineColor, linewidth: 10});
        const lineGeo = new THREE.Geometry();
        lineGeo.vertices.push(
            new THREE.Vector3(coor1[0], coor1[1], coor1[2]),
            new THREE.Vector3(coor2[0], coor2[1], coor2[2])
        );
        const line = new THREE.Line(lineGeo, lineMat);
        scene.add(line);
    }
}

