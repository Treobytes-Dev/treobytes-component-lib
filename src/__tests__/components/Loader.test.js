import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { Loader } from "../../components/Loader";

/**
 * Factory function to create a ShallowWrapper for Loader component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (fill = "") => {
  return shallow(<Loader fill={fill} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("Loader", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "loader");
    expect(component.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = {fill: '#000'};
    checkProps(Loader, expectedProps)
  })
});
