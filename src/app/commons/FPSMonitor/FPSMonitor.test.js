import React from "react";
import { shallow } from "enzyme";
import FPSMonitor from "./FPSMonitor";

it("renders without crashing", () => {
  shallow(<FPSMonitor />);
});
