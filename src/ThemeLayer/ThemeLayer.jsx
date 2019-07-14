import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

// Import app-wide commons
import lightTheme from "./appTheme";

const ThemeLayer = ({ children }) => {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

ThemeLayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ThemeLayer;
