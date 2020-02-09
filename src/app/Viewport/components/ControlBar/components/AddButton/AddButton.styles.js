/**
 * AddButton.styles.js
 *
 * @description AddButton component styles
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * @type {Function} generates CSS styles using material-ui's makeStyles function
 */
export default makeStyles(() => ({
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
