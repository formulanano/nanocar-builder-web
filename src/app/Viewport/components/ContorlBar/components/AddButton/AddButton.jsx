/**
 * AddButton.jsx
 *
 * @description responsible for rendering main action button
 *              to open a side sheet to select atoms, molecules
 *              and pre-defined parts.
 */

import React from "react";
import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./AddButton.styles";

/**
 * AddButton
 *
 * @type {Function} renders AddButton component
 */
const AddButton = () => {
  const classes = useStyles();
  return (
    <section className={classes.fabContainer}>
      <Tooltip title="Add" placement="top">
        <Fab aria-label="add" color="secondary">
          <AddIcon />
        </Fab>
      </Tooltip>
    </section>
  );
};

export default AddButton;
