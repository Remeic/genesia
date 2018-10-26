import React from "react";
import { shallow } from "enzyme";
import Mail from "../Mail";

describe("<Mail />", () => {
  it("renders without exploding", () => {
    const wrapper = shallow(<Mail />);
    expect(wrapper).toHaveLength(1);
  });
});
