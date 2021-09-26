/**
 * ThemeLayer.jsx
 *
 * @description responsible for providing global app theme
 */

import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

// Import app-wide commons
import theme from "./appTheme";

/**
 * ThemeLayer
 *
 * @type {Function}
 */

const ThemeLayer = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

ThemeLayer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ThemeLayer;
