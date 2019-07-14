import React from "react";
import "./App.scss";
import ThemeLayer from "./ThemeLayer";
import ViewPort from "./app/ViewPort";

function App() {
  return (
    <ThemeLayer>
      <ViewPort />
    </ThemeLayer>
  );
}

export default App;
