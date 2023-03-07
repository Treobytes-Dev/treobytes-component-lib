import React from "react";
import { string } from "prop-types";

export const ArrowLeftWithOutline = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  stroke,
  strokeWidth,
}) => (
  <svg
    viewBox={viewBox}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${componentName} ${additionalClassName}`}
    height={height}
    width={width}
  >
    <circle cx={12} cy={12} r={10} />
    <polyline points="12 8 8 12 12 16" />
    <line x1={16} y1={12} x2={8} y2={12} />
  </svg>
);

ArrowLeftWithOutline.propTypes = {
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

ArrowLeftWithOutline.defaultProps = {
  componentName: "arrow-left-with-outline",
};
