import React from "react";
import { shallow } from "enzyme";
import ControlButton from "./ControlButton";

it("renders without crashing", () => {
  const label = "test";

  shallow(
    <ControlButton label={label}>
      <div />
    </ControlButton>,
  );
});
