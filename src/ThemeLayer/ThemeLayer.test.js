import React from "react";
import { shallow } from "enzyme";
import ThemeLayer from "./ThemeLayer";

it("renders without crashing", () => {
  shallow(
    <ThemeLayer>
      <div />
    </ThemeLayer>
  );
});
