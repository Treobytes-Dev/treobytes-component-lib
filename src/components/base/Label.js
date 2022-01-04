import React from "react";
import { string, bool, node } from "prop-types";
import "../../styles/_label.scss";

/**
 * React Label component.
 * @function
 * Label - Renders a branded Treobytes label element.
 */

export const Label = ({
  labelFor,
  required,
  children,
  labelText,
  additionalClassName = "",
  componentName,
  disabled,
  ...props
}) => {
  return (
    <label
      className={`${componentName} ${additionalClassName}`}
      data-test-id={componentName}
      htmlFor={labelFor}
      {...props}
    >
      <span className="label-text">{labelText}</span>
      {required === true && <span className="required">&#42;</span>}
      {children}
    </label>
  );
};

Label.propTypes = {
  /**
   * Define label's for attribute
   */
  labelFor: string,

  /**
   * Define label's text.
   */
  labelText: string,

  /**
   * Define if the input is required
   */
  required: bool,

  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Label contents
   */
  children: node.isRequired,
};

Label.defaultProps = {
  componentName: "label",
};
