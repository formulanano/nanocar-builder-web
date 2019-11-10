/**
 * App.jsx
 *
 * @description root level application component
 */

import React from "react";
import "./App.scss";
import ThemeLayer from "./ThemeLayer";
import ReduxLayer from "./ReduxLayer";
import Viewport from "./app/Viewport";

/**
 * App
 *
 * @type {Function} renders the root level component
 */
function App() {
  return (
    <ReduxLayer>
      <ThemeLayer>
        <Viewport />
      </ThemeLayer>
    </ReduxLayer>
  );
}

export default App;
