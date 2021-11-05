import React from "react";
import { string } from "prop-types";

export const ArrowDownCircle = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  stroke,
  strokeWidth,
}) => {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 12 16 16 12" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </svg>
  );
};

ArrowDownCircle.propTypes = {
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

ArrowDownCircle.defaultProps = {
  componentName: "arrow-down-circle",
};
