import React from "react";
import { string } from "prop-types";

export const ArrowRightCircle = ({
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
    height={height}
    width={width}
    viewBox={viewBox}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 16l4-4-4-4M8 12h8" />
  </svg>
);

ArrowRightCircle.propTypes = {
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

ArrowRightCircle.defaultProps = {
  componentName: "arrow-right-circle",
};
