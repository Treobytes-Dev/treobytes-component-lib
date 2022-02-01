import React from "react";
import { string, func } from "prop-types";
import "../../styles/_button.scss";

/**
 * React Button component.
 * @function
 * Button - Renders a branded Treobytes button element.
 */

export const Button = ({
  children,
  additionalClassName = "",
  componentName,
  disabled,
  variant,
  ...props
}) => {
  return (
    <button
      data-test-id={componentName}
      type={componentName}
      className={`${componentName} ${variant} ${additionalClassName}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  children: string.isRequired,

  /**
   * Button variant color
   */
  variant: string.isRequired,

  /**
   * Add an additional className
   */
  additionalClassName: string,
  /**
   * Optional click handler
   */
  onClick: func,
};

Button.defaultProps = {
  componentName: "button",
  onClick: undefined,
};
