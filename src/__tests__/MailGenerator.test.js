import React from "react";
import { shallow } from "enzyme";
import MailGenerator from "../containers/MailGenerator";

describe("<MailGenerator />", () => {
  it("renders without exploding", () => {
    const wrapper = shallow(<MailGenerator />);
    expect(wrapper).toHaveLength(1);
  });
});
