import React from "react";
import { shallow } from "enzyme";
import AddButton from "./AddButton";

it("renders without crashing", () => {
  shallow(<AddButton />);
});
