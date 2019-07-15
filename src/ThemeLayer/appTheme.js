import { createMuiTheme } from "@material-ui/core/styles";

/**
 * palette
 *
 * @type {Object} overrides material-ui palette
 */
const palette = {
  type: "dark",
  primary: { main: "#2962ff" },
  secondary: { main: "#ffc107" }
};

/**
 * typography
 *
 * @type {Object} overrides material-ui typography
 */
const typography = {
  htmlFontSize: 17
};

/**
 * themeName
 *
 * @type {String}
 */
const themeName = "Dark";

export default createMuiTheme({ palette, typography, themeName });
