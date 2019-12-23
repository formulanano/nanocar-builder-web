import React from "react";
import { shallow } from "enzyme";
import ReduxLayer from "./ReduxLayer";

it("renders without crashing", () => {
  shallow(
    <ReduxLayer>
      <div />
    </ReduxLayer>,
  );
});
