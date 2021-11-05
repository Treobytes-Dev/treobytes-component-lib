import React from "react";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "../../utils/testUtils";

import { TextInput } from "../../components/TextInput";

/**
 * Factory function to create a ShallowWrapper for TextInput component
 * @function setup
 * @returns {ShallowWrapper} - An Enzyme class
 */

const setup = (setName = 'setName') => {
  return shallow(
    <TextInput setName={setName}/>
  );
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} - Enzyme shallow wrapper to search within.
 * @param {string} - val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe("TextInput", () => {
  let wrapper;
  const event = jest.fn();
  const setName='setName'

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders component", () => {
    const component = findByAttr(wrapper, "text-input");
    expect(component.length).toBe(1);
  });

  test("the change event", () => {
    const component = shallow(<TextInput setName={setName} onFuncChange={event} />);

    const mockEvent = { target: { value: "test" } };

    expect(component.find('[data-test-id="input"]').prop("value")).toEqual("");
    component.find('[data-test-id="input"]').simulate("change", mockEvent);
    expect(component.find('[data-test-id="input"]').prop("value")).toEqual(
      "test"
    );
  });
});
