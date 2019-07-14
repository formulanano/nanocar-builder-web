import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  type: "dark",
  primary: { main: "#2962ff" },
  secondary: { main: "#ffc107" }
};

const typography = {
  htmlFontSize: 17
};

const themeName = "Dark";

export default createMuiTheme({ palette, typography, themeName });
