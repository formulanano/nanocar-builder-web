import React from "react";
import { shallow } from "enzyme";
import ViewPort from "./ViewPort";

it("renders without crashing", () => {
  shallow(<ViewPort />);
});
