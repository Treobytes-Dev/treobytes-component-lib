import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { Anchor } from "../../components/Anchor";

/**
 * Factory function to create a ShallowWrapper for Anchor component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (href = "https://github.com/", children = "test") => {
  return shallow(<Anchor href={href} >{children}</Anchor>);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("Anchor", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "anchor");
    expect(component.length).toBe(1);
  });
});
