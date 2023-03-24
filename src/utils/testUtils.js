import checkPropTypes from "check-prop-types";
import { ShallowWrapper } from "enzyme";

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper.
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test-id="${val}"]`);
};

/**
 * Throw error if conformingProps do not pass propTypes validation
 * @param {React.Component} component - component to check props against.
 * @param {object} conformingProps - Props we expect to conform to defined propTypes.
 */

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
