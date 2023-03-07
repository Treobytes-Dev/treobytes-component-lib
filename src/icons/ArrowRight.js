import React from "react";
import { string } from "prop-types";

export const ArrowRight = (
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  stroke,
  strokeWidth
) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox={viewBox}
    height={height}
    width={width}
    fill="none"
    stroke={'#000'}
    strokeWidth={strokeWidth}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

ArrowRight.propTypes = {
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

ArrowRight.defaultProps = {
  componentName: "arrow-right",
};
