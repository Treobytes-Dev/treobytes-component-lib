import React from "react";
import { string } from "prop-types";

export const Book = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill1,
  fill2,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path
      fill={fill1}
      d="M112.39 15.749a3.651 3.651 0 0 0-3.652 3.652l.033 91.073a6.964 6.964 0 0 1-6.957 6.96H25.861a6.614 6.614 0 0 1-1.771-12.99 6.753 6.753 0 0 1 1.905-.271h67.803a9.293 9.293 0 0 0 9.294-9.29l.01-84.492a7.094 7.094 0 0 0-7.095-7.098h-76.7a7.096 7.096 0 0 0-7.095 7.098v97.79a13.765 13.765 0 0 0 0 5.254 13.921 13.921 0 0 0 13.649 11.272h75.953a14.245 14.245 0 0 0 14.099-12.328 13.719 13.719 0 0 0 .128-1.905V19.4a3.651 3.651 0 0 0-3.652-3.651zM32.402 37.282a2.075 2.075 0 0 1 2.074-2.074H80.09a2.075 2.075 0 0 1 2.074 2.074v33.174a2.073 2.073 0 0 1-2.074 2.074H34.477a2.073 2.073 0 0 1-2.074-2.074z"
    />
    <path
      className="cls-2"
      fill={fill2}
      d="M46.917 51.046h12.44a1.324 1.324 0 0 0 0-2.648h-12.44a1.324 1.324 0 0 0 0 2.648zM46.917 59.34H67.65a1.324 1.324 0 0 0 0-2.648H46.917a1.324 1.324 0 0 0 0 2.648z"
    />
  </svg>
);

Book.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Define icon height
   */
  height: string,

  /**
   * Define icon width
   */
  width: string,

  /**
   * Define icon viewBox
   */
  viewBox: string,

  /**
   * Define icon fill1 color
   */
  fill1: string,

  /**
   * Define icon fill2 color
   */
  fill2: string,
};

Book.defaultProps = {
  componentName: "book",
};
