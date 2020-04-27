/**
 * ControlButton.styles.js
 *
 * @description ControlButton component styles
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * @type {Function} generates CSS styles using material-ui's makeStyles function
 */
export default makeStyles((theme) => ({
  button: {
    height: "100%",
    margin: theme.spacing(0.5),
  },
}));
