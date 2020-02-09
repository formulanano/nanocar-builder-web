import React from "react";
import { shallow } from "enzyme";
import SettingsButton from "./SettingsButton";

it("renders without crashing", () => {
  shallow(<SettingsButton />);
});
