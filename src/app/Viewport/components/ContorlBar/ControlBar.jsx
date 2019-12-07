/**
 * ControlBar.jsx
 *
 * @description responsible for rendering action buttons to control and modify nanocar
 */

import React from "react";
import { Toolbar, Paper } from "@material-ui/core";

// Control Button Icons
// Misc
import NanocarInfoIcon from "@material-ui/icons/Info";
// Camera
import ResetCameraIcon from "@material-ui/icons/SwitchVideo";
// File Management
import SaveIcon from "@material-ui/icons/Save";
import LoadIcon from "@material-ui/icons/SaveAlt";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
// Edit Tools
import TranslateIcon from "@material-ui/icons/ControlCamera";
import RotateIcon from "@material-ui/icons/Rotate90DegreesCcw";
import SymmetryToolIcon from "@material-ui/icons/Flip";
import SetNanocarOnGroundIcon from "@material-ui/icons/VerticalAlignBottom";
import EraseAtomsIcon from "@material-ui/icons/Clear";
import DestroyNanocarIcon from "@material-ui/icons/DeleteForever";

import { ControlButton, AddButton } from "./components";

// Import component styles
import useStyles from "./ControlBar.styles";

/**
 * ControlBar
 *
 * @type {Function} renders ControlBar component
 */
const ControlBar = () => {
  const classes = useStyles();

  // Misc control group
  const misc = (
    // Nanocar Info: Displays atom count, bond count and where the center of mass of your nanocar is.
    <ControlButton label="Nanocar Info">
      <NanocarInfoIcon />
    </ControlButton>
  );

  // Camera control group
  const camera = (
    // Reset Camera: Returns the camera to its default state.
    <ControlButton label="Reset Camera">
      <ResetCameraIcon />
    </ControlButton>
  );

  // File Management control group
  const fileManagement = (
    <>
      {/* Save: Save nanocar to a local file. */}
      <ControlButton label="Save">
        <SaveIcon />
      </ControlButton>

      {/* Load: Load nanocar from a local file. */}
      <ControlButton label="Load">
        <LoadIcon />
      </ControlButton>

      {/* Undo: Undo last step. */}
      <ControlButton label="Undo">
        <UndoIcon />
      </ControlButton>

      {/* Redo: Redo last step. */}
      <ControlButton label="Redo">
        <RedoIcon />
      </ControlButton>
    </>
  );

  // Edit Tools control group
  const editTools = (
    <>
      {/* Translate: Translates current selection. If it is empty translates the entire nanocar. */}
      <ControlButton label="Translate">
        <TranslateIcon />
      </ControlButton>

      {/* Rotate: Rotates current selection. If it is empty rotates the entire nanocar. */}
      <ControlButton label="Rotate">
        <RotateIcon />
      </ControlButton>

      {/* Symmetry Tool: Atoms or molecules you place are mirrored relative to selected planes. */}
      <ControlButton label="Symmetry Tool">
        <SymmetryToolIcon />
      </ControlButton>

      {/* Set Nanocar On Ground: Set the lowest part of your nanocar on the ground. */}
      <ControlButton label="Set Nanocar On Ground">
        <SetNanocarOnGroundIcon />
      </ControlButton>

      {/* Erase Atoms: Used to remove individual atoms. */}
      <ControlButton label="Erase Atoms">
        <EraseAtomsIcon />
      </ControlButton>

      {/* Destroy Nanocar: Destroys your entire nanocar. */}
      <ControlButton label="Destroy Nanocar">
        <DestroyNanocarIcon />
      </ControlButton>
    </>
  );

  return (
    <section className={classes.container}>
      <Paper className={classes.paper} elevation={1}>
        <Toolbar className={classes.toolbar}>
          {/* Left side of the ControlBar */}
          <section className={classes.controlGroup}>
            {misc}
            {camera}
            {fileManagement}
          </section>

          {/* Right side of the ControlBar */}
          <section className={classes.controlGroup}>{editTools}</section>
        </Toolbar>
      </Paper>

      {/* AddButton: Main action button to open a side sheet to select atoms, molecules and pre-defined parts. */}
      <AddButton />
    </section>
  );
};

export default ControlBar;
