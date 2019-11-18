import React from "react";
import { shallow } from "enzyme";
import ControlBar from "./ControlBar";

it("renders without crashing", () => {
  shallow(<ControlBar />);
});
