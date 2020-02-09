/**
 * SettingsButton.styles.js
 *
 * @description SettingsButton component styles
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * @type {Function} generates CSS styles using material-ui's makeStyles function
 */
export default makeStyles(theme => ({
  button: {
    height: "100%",
    margin: 0,
  },
  container: {
    right: 0,
    display: "flex",
    borderRadius: "4px",
    position: "absolute",
    justifyContent: "space-between",
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5),
  },
}));
