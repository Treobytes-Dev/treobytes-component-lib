import React from "react";
import { shallow } from "enzyme";

import { findByAttr } from "../../utils/testUtils";

import { SideMenuY } from "../../components/SideMenuY";

/**
 * Factory function to create a ShallowWrapper for SideMenuX component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (
  additionalClassName = "",
  children = <div />,
  trigger = <div />
) => {
  const triggerClick = jest.fn();

  return shallow(
    <SideMenuY
      children={children}
      trigger={trigger}
      onClick={triggerClick}
      additionalClassName={additionalClassName}
    />
  );
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("SideMenuY", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "side-menu");
    expect(component.length).toBe(1);
  });

  it("should handle the overlay click event", () => {
    const component = shallow(
      <SideMenuY
        children={<div />}
        trigger={<div />}
        onClick={jest.fn()}
        additionalClassName={""}
      />
    );

    expect(component.find('[data-test-id="overlay"]').length).toEqual(1);
    component.find('[data-test-id="trigger"]').simulate("click");
    expect(component.find('[data-test-id="overlay active"]').length).toEqual(1);
    component
      .find('[data-test-id="icon-left"]' || '[data-test-id="icon-right"]')
      .simulate("click");
    expect(component.find('[data-test-id="overlay"]').length).toEqual(1);
  });

  it("should handle the menu click event", () => {
    const component = shallow(
      <SideMenuY
        children={<div />}
        trigger={<div />}
        onClick={jest.fn()}
        additionalClassName={""}
      />
    );

    expect(component.find('[data-test-id="menu menu-y"]').length).toEqual(1);
    component.find('[data-test-id="trigger"]').simulate("click");
    expect(
      component.find('[data-test-id="menu menu-y active"]').length
    ).toEqual(1);
    component
      .find('[data-test-id="icon-left"]' || '[data-test-id="icon-right"]')
      .simulate("click");
    expect(component.find('[data-test-id="menu menu-y"]').length).toEqual(1);
  });
});
