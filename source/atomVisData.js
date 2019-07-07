// Visualization Functions -------------------------------------------------------------------------
var black = 0x000000;
var blue = 0x0055ff;
var red = 0xcc0000;
var green = 0x009933;
var purple = 0x990099;

var addAtom = function(coor, atomRadius, atomColor){
	var atomGeo = new THREE.SphereGeometry(atomRadius, 8, 8);
	var rgbColor = new THREE.Color();
	rgbColor.setRGB(atomColor[0]/255, atomColor[1]/255, atomColor[2]/255);
	var atomMat = new THREE.MeshLambertMaterial( { color: rgbColor } );
	newAtom = new THREE.Mesh(atomGeo, atomMat);
	newAtom.position.set( coor[0], coor[1], coor[2] );
	scene.add( newAtom );
};

var addLine = function(coor1, coor2, lineColor){
  var lineMat = new THREE.LineBasicMaterial({color: lineColor, linewidth: 10});
  var lineGeo = new THREE.Geometry();
  lineGeo.vertices.push(
  new THREE.Vector3(coor1[0], coor1[1], coor1[2]),
  new THREE.Vector3(coor2[0], coor2[1], coor2[2])
  );
  var line = new THREE.Line( lineGeo, lineMat );
  scene.add( line );
};

var addBond = function( pointX, pointY ){
    // edge from X to Y
    var direction = new THREE.Vector3().subVectors( pointY, pointX );
    var arrow = new THREE.ArrowHelper( direction, pointX );

    // cylinder: radiusAtTop, radiusAtBottom,
    //     height, radiusSegments, heightSegments
    var edgeGeometry = new THREE.CylinderGeometry( 0.1, 0.1, direction.length(), 6, 4 );

    var edge = new THREE.Mesh( edgeGeometry,
        new THREE.MeshBasicMaterial( { color: 0x000000 } ) );
    edge.rotation = arrow.rotation.clone();
    edge.position = new THREE.Vector3().addVectors( pointX, direction.multiplyScalar(0.5) );
    return(edge);
};

var addMolecule = function(moleculeName){
	var atomRadius, atomColor, atomCooor;
	for(var atomIndex = 0; atomIndex < moleculeName.length; atomIndex++){
		for(var visIndex = 0; visIndex < atomVisData.name.length; visIndex++){
			if(moleculeName[atomIndex][3] == atomVisData.name[visIndex]){
				atomRadius = atomVisData.radius[visIndex]/100;
				atomColor = atomVisData.color[visIndex];
				atomCoor = [moleculeName[atomIndex][0], moleculeName[atomIndex][1], moleculeName[atomIndex][2]];
				addAtom(atomCoor, atomRadius, atomColor);
			};
		};
	};
};

var showBonds = function(moleculeName, bondDistance){
	var x1, y1, z1, x2, y2, z2, dist, p1, p2, bond;
	for(var atomIndex = 0; atomIndex < moleculeName.length; atomIndex++){
		for(var atomIndex2 = atomIndex+1; atomIndex2 < moleculeName.length; atomIndex2++){
			x1 = moleculeName[atomIndex][0];
			y1 = moleculeName[atomIndex][1];
			z1 = moleculeName[atomIndex][2];

			x2 = moleculeName[atomIndex2][0];
			y2 = moleculeName[atomIndex2][1];
			z2 = moleculeName[atomIndex2][2];

			dist = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2) + Math.pow(z2-z1,2));
			if(dist < bondDistance){
				addLine([x1, y1, z1], [x2, y2, z2], black);
			};
		};
	};
};

var drawUnitCell = function(edgePoints){
	addLine(edgePoints[0], edgePoints[1], red);
	addLine(edgePoints[0], edgePoints[2], green);
	addLine(edgePoints[0], edgePoints[3], blue);
	addLine(edgePoints[1], edgePoints[4], black);
	addLine(edgePoints[1], edgePoints[6], black);
	addLine(edgePoints[2], edgePoints[4], black);
	addLine(edgePoints[2], edgePoints[5], black);
	addLine(edgePoints[3], edgePoints[5], black);
	addLine(edgePoints[3], edgePoints[6], black);
	addLine(edgePoints[4], edgePoints[7], black);
	addLine(edgePoints[5], edgePoints[7], black);
	addLine(edgePoints[6], edgePoints[7], black);
};

var rotateUnitCell = function(edgePoints, xAngle, yAngle, zAngle, translationVector){
	var rotatedEdgePoints = [];
	for(var p = 0; p < edgePoints.length; p++){
		newCoor = edgePoints[p];
		q = q.rotation(newCoor, [0,0,0], [1,0,0], xAngle);
		newCoor = [q.x, q.y, q.z];
		q = q.rotation(newCoor, [0,0,0], [0,1,0], yAngle);
		newCoor = [q.x, q.y, q.z];
		q = q.rotation(newCoor, [0,0,0], [0,0,1], zAngle);
		newCoor = [q.x, q.y, q.z];
		newCoor = coorAdd(newCoor, translationVector);
		rotatedEdgePoints.push(newCoor);
	};
	return rotatedEdgePoints;
};
// Visualization Library ---------------------------------------------------------------------------
var getAtomVisData = function(atomList){
  console.log('Initializing visualization data...');
  atomVis = { name: [], color: [], radius:[] };
  for(var visIndex = 0; visIndex < atomVisData.name.length; visIndex++){
    for(var atomIndex = 0; atomIndex < atomList.length; atomIndex++){
      if(atomList[atomIndex] === atomVisData.name[visIndex]){
        atomVis.name.push(atomList[atomIndex]);
        atomVis.color.push(atomVisData.color[visIndex]);
        atomVis.radius.push(atomVisData.radius[visIndex]/100);
      };
    };
  };
  return atomVis;
};

var getVisIndex = function(atomName, atomVisData){
  for(var visIndex = 0; visIndex < atomVisData.name.length; visIndex++){
    if(atomVisData.name[visIndex] === atomName){
      return visIndex;
    };
  };
};

var atomVisData = { name: [], radius: [], color: [] };
atomVisData.name[0] = 'H';
atomVisData.radius[0] = 53.0;
atomVisData.color[0] = [255.0, 255.0, 255.0];
atomVisData.name[1] = 'He';
atomVisData.radius[1] = 31.0;
atomVisData.color[1] = [217.0, 255.0, 255.0];
atomVisData.name[2] = 'Li';
atomVisData.radius[2] = 167.0;
atomVisData.color[2] = [204.0, 128.0, 255.0];
atomVisData.name[3] = 'Be';
atomVisData.radius[3] = 112.0;
atomVisData.color[3] = [194.0, 255.0, 0.0];
atomVisData.name[4] = 'B';
atomVisData.radius[4] = 87.0;
atomVisData.color[4] = [255.0, 181.0, 181.0];
atomVisData.name[5] = 'C';
atomVisData.radius[5] = 67.0;
atomVisData.color[5] = [144.0, 144.0, 144.0];
atomVisData.name[6] = 'N';
atomVisData.radius[6] = 56.0;
atomVisData.color[6] = [48.0, 80.0, 248.0];
atomVisData.name[7] = 'O';
atomVisData.radius[7] = 48.0;
atomVisData.color[7] = [255.0, 13.0, 13.0];
atomVisData.name[8] = 'F';
atomVisData.radius[8] = 42.0;
atomVisData.color[8] = [144.0, 224.0, 80.0];
atomVisData.name[9] = 'Ne';
atomVisData.radius[9] = 38.0;
atomVisData.color[9] = [179.0, 227.0, 245.0];
atomVisData.name[10] = 'Na';
atomVisData.radius[10] = 190.0;
atomVisData.color[10] = [171.0, 92.0, 242.0];
atomVisData.name[11] = 'Mg';
atomVisData.radius[11] = 145.0;
atomVisData.color[11] = [138.0, 255.0, 0.0];
atomVisData.name[12] = 'Al';
atomVisData.radius[12] = 118.0;
atomVisData.color[12] = [191.0, 166.0, 166.0];
atomVisData.name[13] = 'Si';
atomVisData.radius[13] = 111.0;
atomVisData.color[13] = [240.0, 200.0, 160.0];
atomVisData.name[14] = 'P';
atomVisData.radius[14] = 98.0;
atomVisData.color[14] = [255.0, 128.0, 0.0];
atomVisData.name[15] = 'S';
atomVisData.radius[15] = 88.0;
atomVisData.color[15] = [255.0, 255.0, 48.0];
atomVisData.name[16] = 'Cl';
atomVisData.radius[16] = 79.0;
atomVisData.color[16] = [31.0, 240.0, 31.0];
atomVisData.name[17] = 'Ar';
atomVisData.radius[17] = 71.0;
atomVisData.color[17] = [128.0, 209.0, 227.0];
atomVisData.name[18] = 'K';
atomVisData.radius[18] = 243.0;
atomVisData.color[18] = [143.0, 64.0, 212.0];
atomVisData.name[19] = 'Ca';
atomVisData.radius[19] = 194.0;
atomVisData.color[19] = [61.0, 255.0, 0.0];
atomVisData.name[20] = 'Sc';
atomVisData.radius[20] = 184.0;
atomVisData.color[20] = [230.0, 230.0, 230.0];
atomVisData.name[21] = 'Ti';
atomVisData.radius[21] = 176.0;
atomVisData.color[21] = [191.0, 194.0, 199.0];
atomVisData.name[22] = 'V';
atomVisData.radius[22] = 171.0;
atomVisData.color[22] = [166.0, 166.0, 171.0];
atomVisData.name[23] = 'Cr';
atomVisData.radius[23] = 166.0;
atomVisData.color[23] = [138.0, 153.0, 199.0];
atomVisData.name[24] = 'Mn';
atomVisData.radius[24] = 161.0;
atomVisData.color[24] = [156.0, 122.0, 199.0];
atomVisData.name[25] = 'Fe';
atomVisData.radius[25] = 156.0;
atomVisData.color[25] = [224.0, 102.0, 51.0];
atomVisData.name[26] = 'Co';
atomVisData.radius[26] = 152.0;
atomVisData.color[26] = [240.0, 144.0, 160.0];
atomVisData.name[27] = 'Ni';
atomVisData.radius[27] = 149.0;
atomVisData.color[27] = [80.0, 208.0, 80.0];
atomVisData.name[28] = 'Cu';
atomVisData.radius[28] = 145.0;
atomVisData.color[28] = [200.0, 128.0, 51.0];
atomVisData.name[29] = 'Zn';
atomVisData.radius[29] = 142.0;
atomVisData.color[29] = [125.0, 128.0, 176.0];
atomVisData.name[30] = 'Ga';
atomVisData.radius[30] = 136.0;
atomVisData.color[30] = [194.0, 143.0, 143.0];
atomVisData.name[31] = 'Ge';
atomVisData.radius[31] = 125.0;
atomVisData.color[31] = [102.0, 143.0, 143.0];
atomVisData.name[32] = 'As';
atomVisData.radius[32] = 114.0;
atomVisData.color[32] = [189.0, 128.0, 227.0];
atomVisData.name[33] = 'Se';
atomVisData.radius[33] = 103.0;
atomVisData.color[33] = [255.0, 161.0, 0.0];
atomVisData.name[34] = 'Br';
atomVisData.radius[34] = 94.0;
atomVisData.color[34] = [166.0, 41.0, 41.0];
atomVisData.name[35] = 'Kr';
atomVisData.radius[35] = 88.0;
atomVisData.color[35] = [92.0, 184.0, 209.0];
atomVisData.name[36] = 'Rb';
atomVisData.radius[36] = 265.0;
atomVisData.color[36] = [112.0, 46.0, 176.0];
atomVisData.name[37] = 'Sr';
atomVisData.radius[37] = 219.0;
atomVisData.color[37] = [0.0, 255.0, 0.0];
atomVisData.name[38] = 'Y';
atomVisData.radius[38] = 212.0;
atomVisData.color[38] = [148.0, 255.0, 255.0];
atomVisData.name[39] = 'Zr';
atomVisData.radius[39] = 206.0;
atomVisData.color[39] = [148.0, 224.0, 224.0];
atomVisData.name[40] = 'Nb';
atomVisData.radius[40] = 198.0;
atomVisData.color[40] = [115.0, 194.0, 201.0];
atomVisData.name[41] = 'Mo';
atomVisData.radius[41] = 190.0;
atomVisData.color[41] = [84.0, 181.0, 181.0];
atomVisData.name[42] = 'Tc';
atomVisData.radius[42] = 183.0;
atomVisData.color[42] = [59.0, 158.0, 158.0];
atomVisData.name[43] = 'Ru';
atomVisData.radius[43] = 178.0;
atomVisData.color[43] = [36.0, 143.0, 143.0];
atomVisData.name[44] = 'Rh';
atomVisData.radius[44] = 173.0;
atomVisData.color[44] = [10.0, 125.0, 140.0];
atomVisData.name[45] = 'Pd';
atomVisData.radius[45] = 169.0;
atomVisData.color[45] = [0.0, 105.0, 133.0];
atomVisData.name[46] = 'Ag';
atomVisData.radius[46] = 165.0;
atomVisData.color[46] = [192.0, 192.0, 192.0];
atomVisData.name[47] = 'Cd';
atomVisData.radius[47] = 161.0;
atomVisData.color[47] = [255.0, 217.0, 143.0];
atomVisData.name[48] = 'In';
atomVisData.radius[48] = 156.0;
atomVisData.color[48] = [166.0, 117.0, 115.0];
atomVisData.name[49] = 'Sn';
atomVisData.radius[49] = 145.0;
atomVisData.color[49] = [102.0, 128.0, 128.0];
atomVisData.name[50] = 'Sb';
atomVisData.radius[50] = 133.0;
atomVisData.color[50] = [158.0, 99.0, 181.0];
atomVisData.name[51] = 'Te';
atomVisData.radius[51] = 123.0;
atomVisData.color[51] = [212.0, 122.0, 0.0];
atomVisData.name[52] = 'I';
atomVisData.radius[52] = 115.0;
atomVisData.color[52] = [148.0, 0.0, 148.0];
atomVisData.name[53] = 'Xe';
atomVisData.radius[53] = 108.0;
atomVisData.color[53] = [66.0, 158.0, 176.0];
atomVisData.name[54] = 'Cs';
atomVisData.radius[54] = 298.0;
atomVisData.color[54] = [87.0, 23.0, 143.0];
atomVisData.name[55] = 'Ba';
atomVisData.radius[55] = 253.0;
atomVisData.color[55] = [0.0, 201.0, 0.0];
atomVisData.name[56] = 'La';
atomVisData.radius[56] = 195.0;
atomVisData.color[56] = [112.0, 212.0, 255.0];
atomVisData.name[57] = 'Ce';
atomVisData.radius[57] = 185.0;
atomVisData.color[57] = [255.0, 255.0, 199.0];
atomVisData.name[58] = 'Pr';
atomVisData.radius[58] = 247.0;
atomVisData.color[58] = [217.0, 255.0, 199.0];
atomVisData.name[59] = 'Nd';
atomVisData.radius[59] = 206.0;
atomVisData.color[59] = [199.0, 255.0, 199.0];
atomVisData.name[60] = 'Pm';
atomVisData.radius[60] = 205.0;
atomVisData.color[60] = [163.0, 255.0, 199.0];
atomVisData.name[61] = 'Sm';
atomVisData.radius[61] = 238.0;
atomVisData.color[61] = [143.0, 255.0, 199.0];
atomVisData.name[62] = 'Eu';
atomVisData.radius[62] = 231.0;
atomVisData.color[62] = [97.0, 255.0, 199.0];
atomVisData.name[63] = 'Gd';
atomVisData.radius[63] = 233.0;
atomVisData.color[63] = [69.0, 255.0, 199.0];
atomVisData.name[64] = 'Tb';
atomVisData.radius[64] = 225.0;
atomVisData.color[64] = [48.0, 255.0, 199.0];
atomVisData.name[65] = 'Dy';
atomVisData.radius[65] = 228.0;
atomVisData.color[65] = [31.0, 255.0, 199.0];
atomVisData.name[66] = 'Ho';
atomVisData.radius[66] = 175.0;
atomVisData.color[66] = [0.0, 255.0, 156.0];
atomVisData.name[67] = 'Er';
atomVisData.radius[67] = 226.0;
atomVisData.color[67] = [0.0, 230.0, 117.0];
atomVisData.name[68] = 'Tm';
atomVisData.radius[68] = 222.0;
atomVisData.color[68] = [0.0, 212.0, 82.0];
atomVisData.name[69] = 'Yb';
atomVisData.radius[69] = 222.0;
atomVisData.color[69] = [0.0, 191.0, 56.0];
atomVisData.name[70] = 'Lu';
atomVisData.radius[70] = 217.0;
atomVisData.color[70] = [0.0, 171.0, 36.0];
atomVisData.name[71] = 'Hf';
atomVisData.radius[71] = 208.0;
atomVisData.color[71] = [77.0, 194.0, 255.0];
atomVisData.name[72] = 'Ta';
atomVisData.radius[72] = 200.0;
atomVisData.color[72] = [77.0, 166.0, 255.0];
atomVisData.name[73] = 'W';
atomVisData.radius[73] = 193.0;
atomVisData.color[73] = [33.0, 148.0, 214.0];
atomVisData.name[74] = 'Re';
atomVisData.radius[74] = 188.0;
atomVisData.color[74] = [38.0, 125.0, 171.0];
atomVisData.name[75] = 'Os';
atomVisData.radius[75] = 185.0;
atomVisData.color[75] = [38.0, 102.0, 150.0];
atomVisData.name[76] = 'Ir';
atomVisData.radius[76] = 180.0;
atomVisData.color[76] = [23.0, 84.0, 135.0];
atomVisData.name[77] = 'Pt';
atomVisData.radius[77] = 177.0;
atomVisData.color[77] = [208.0, 208.0, 224.0];
atomVisData.name[78] = 'Au';
atomVisData.radius[78] = 174.0;
atomVisData.color[78] = [255.0, 209.0, 35.0];
atomVisData.name[79] = 'Hg';
atomVisData.radius[79] = 171.0;
atomVisData.color[79] = [184.0, 184.0, 208.0];
atomVisData.name[80] = 'Tl';
atomVisData.radius[80] = 156.0;
atomVisData.color[80] = [166.0, 84.0, 77.0];
atomVisData.name[81] = 'Pb';
atomVisData.radius[81] = 154.0;
atomVisData.color[81] = [87.0, 89.0, 97.0];
atomVisData.name[82] = 'Bi';
atomVisData.radius[82] = 143.0;
atomVisData.color[82] = [158.0, 79.0, 181.0];
atomVisData.name[83] = 'Po';
atomVisData.radius[83] = 135.0;
atomVisData.color[83] = [171.0, 92.0, 0.0];
atomVisData.name[84] = 'Rn';
atomVisData.radius[84] = 120.0;
atomVisData.color[84] = [66.0, 130.0, 150.0];
atomVisData.name[85] = 'Ra';
atomVisData.radius[85] = 215.0;
atomVisData.color[85] = [0.0, 125.0, 0.0];
atomVisData.name[86] = 'Ac';
atomVisData.radius[86] = 195.0;
atomVisData.color[86] = [112.0, 171.0, 250.0];
atomVisData.name[87] = 'Th';
atomVisData.radius[87] = 180.0;
atomVisData.color[87] = [0.0, 186.0, 255.0];
atomVisData.name[88] = 'Pa';
atomVisData.radius[88] = 180.0;
atomVisData.color[88] = [0.0, 161.0, 255.0];
atomVisData.name[89] = 'U';
atomVisData.radius[89] = 175.0;
atomVisData.color[89] = [0.0, 143.0, 255.0];
atomVisData.name[90] = 'Np';
atomVisData.radius[90] = 175.0;
atomVisData.color[90] = [0.0, 128.0, 255.0];
atomVisData.name[91] = 'Pu';
atomVisData.radius[91] = 175.0;
atomVisData.color[91] = [0.0, 107.0, 255.0];
atomVisData.name[92] = 'Am';
atomVisData.radius[92] = 175.0;
atomVisData.color[92] = [84.0, 92.0, 242.0];
