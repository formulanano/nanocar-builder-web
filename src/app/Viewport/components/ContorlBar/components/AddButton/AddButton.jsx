/**
 * AddButton.jsx
 *
 * @description responsible for rendering main action button
 *              to open a side sheet to select atoms, molecules
 *              and pre-defined parts.
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
  fabContainer: {
    width: "80px",
    height: "80px",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    marginTop: "-40px",
    background: "transparent",
  },
}));

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
