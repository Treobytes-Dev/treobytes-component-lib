import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { Heading } from "../../components/Heading";

/**
 * Factory function to create a ShallowWrapper for Heading component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (variant = 1, children = "test") => {
  return shallow(<Heading variant={variant} >{children}</Heading>);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("Heading", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "heading");
    expect(component.length).toBe(1);
  });
});
