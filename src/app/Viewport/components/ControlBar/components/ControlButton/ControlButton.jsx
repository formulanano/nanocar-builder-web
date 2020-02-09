/**
 * ControlButton.jsx
 *
 * @description responsible for rendering an icon button to be used in ControlBar
 */
import React from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip } from "@material-ui/core";
import useStyles from "./ControlButton.styles";

/**
 * ControlButton
 *
 * @type {Function} renders ControlButton component
 */
const ControlButton = props => {
  const classes = useStyles();
  const { label, children } = props;
  return (
    <Tooltip title={label} placement="top">
      <IconButton className={classes.button} aria-label={label}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

ControlButton.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ControlButton;
