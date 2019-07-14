import React from "react";
import { shallow } from "enzyme";
import Viewport from "./Viewport";

it("renders without crashing", () => {
  shallow(<Viewport />);
});
