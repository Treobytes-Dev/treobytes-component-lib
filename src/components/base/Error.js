import React from "react";
import { string } from "prop-types";

export const Error = ({ children, additionalClassName, componentName }) => {
  return (
    <p
      className={`${componentName} ${additionalClassName}`}
      data-test-id={componentName}
    >
      {children}
    </p>
  );
};

Error.propTypes = {
  /**
   * Customize error text
   */
  children: string,
};

Error.defaultProps = {
  componentName: "error",
  additionalClassName: "paragraph",
};
