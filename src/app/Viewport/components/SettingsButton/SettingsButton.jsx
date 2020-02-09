/**
 * SettingsButton.jsx
 *
 * @description responsible for rendering settings button in ControlBar
 */
import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import useStyles from "./SettingsButton.styles";

/**
 * SettingsButton
 *
 * @type {Function} renders SettingsButton component
 */
const SettingsButton = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <Tooltip title="Settings" placement="top">
        <IconButton className={classes.button} aria-label="Settings">
          <SettingsIcon />
        </IconButton>
      </Tooltip>
    </section>
  );
};

export default SettingsButton;
