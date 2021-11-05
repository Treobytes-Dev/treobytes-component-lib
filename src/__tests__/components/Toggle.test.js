import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { Toggle } from "../../components/Toggle";

/**
 * Factory function to create a ShallowWrapper for Toggle component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (isOpenChildren = <></>, isClosedChildren = <></>) => {
  return shallow(
    <Toggle
      isOpenChildren={isOpenChildren}
      isClosedChildren={isClosedChildren}
    />
  );
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("Toggle", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "toggle");
    expect(component.length).toBe(1);
  });
});
