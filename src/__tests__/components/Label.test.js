import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { Label } from "../../components/Label";

/**
 * Factory function to create a ShallowWrapper for Label component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (children = "Test") => {
  return shallow(<Label>{children}</Label>);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("Label", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "label");
    expect(component.length).toBe(1);
  });
});
