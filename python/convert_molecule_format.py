"""
Convert xyz formatted molecule file to javascript file.
>>> python convert_molecule.py molecule.xyz molecule.js
"""
import os, sys


def create_molecule_js(xyz_file, js_file):
    '''
    Converts molecule file in .xyz format to .js array format
    ex: MyMolecule[0] = [x, y, z, atomName]
    '''
    with open(xyz_file, 'r') as f:
        xyz_lines = f.readlines()
    molecule_name = os.path.splitext(os.path.basename(xyz_file))[0]
    js = 'var %s = [];\n' % molecule_name
    for atom_idx, line in enumerate(xyz_lines[2:]):
        atom = line.split()[0]
        x, y, z = line.split()[1:4]
        js += "%s[%i] = [%s, %s, %s, '%s']\n" % (molecule_name, atom_idx, x, y, z, atom)
    with open(js_file, 'w') as f:
        f.write(js)


if __name__ == "__main__":
    create_molecule_js(sys.argv[1], sys.argv[2])
    print('%s has been converted to %s' % (sys.argv[1], sys.argv[2]))
