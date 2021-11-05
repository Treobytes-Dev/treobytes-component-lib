import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { Button } from "../../components/Button";

/**
 * Factory function to create a ShallowWrapper for Button component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (label = "test") => {
  return shallow(<Button label={label} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "button");
    expect(component.length).toBe(1);
  });
});
