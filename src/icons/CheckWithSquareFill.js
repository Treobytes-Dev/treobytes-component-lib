import React from "react";
import { string, number } from "prop-types";

export const CheckWithSquareFill = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    width={width}
    height={height}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-3-3h24v24H-3z" />
      <path
        d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7.71 13.29a.996.996 0 0 1-1.41 0L2.71 9.7a.996.996 0 1 1 1.41-1.41L7 11.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.58 7.59z"
        fill={fill}
      />
    </g>
  </svg>
);

CheckWithSquareFill.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Define icon height
   */
  height: number,

  /**
   * Define icon width
   */
  width: number,

  /**
   * Define icon viewBox
   */
  viewBox: string,

  /**
   * Define icon stroke color
   */
  fill: string,

  /**
   * Define icon stroke width
   */
  strokeWidth: number,
};

CheckWithSquareFill.defaultProps = {
  componentName: "check-with-square-fill",
};
