import React from "react";
import { string } from "prop-types";

export const ArrowLeft = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  stroke,
  strokeWidth,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5m7 7l-7-7 7-7" />
  </svg>
);

ArrowLeft.propTypes = {
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
   * Define icon stroke color
   */
  stroke: string,

  /**
   * Define icon stroke width
   */
  strokeWidth: string,
};

ArrowLeft.defaultProps = {
  componentName: "arrow-left",
};
