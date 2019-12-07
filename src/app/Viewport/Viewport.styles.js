/**
 * Viewport.styles.js
 *
 * @description Viewport component styles
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * @type {Function} generates CSS styles using material-ui's makeStyles function
 */
export default makeStyles(() => ({
  viewport: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "absolute",
  },
}));
