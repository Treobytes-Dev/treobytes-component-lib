import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { Checkbox } from "../../components/Checkbox";

/**
 * Factory function to create a ShallowWrapper for Checkbox component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (name = "name", children = <></>) => {
  return shallow(<Checkbox name={name}>{children}</Checkbox>);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("Checkbox", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "checkbox");
    expect(component.length).toBe(1);
  });
});
