import React from "react";
import {string} from "prop-types";

export const CircledCheck = ({
  componentName,
  additionalClassName,
  stroke,
  fill,
  strokeWidth,
  height,
  width,
  viewBox
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      fill={fill}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      height={height}
      width={width}
      viewBox={viewBox}
    >
      <circle className="cls-1" cx="12" cy="12" r="11" />
      <polyline className="cls-1" points="6 13 9 16 17 8" />
    </svg>
  );
};

CircledCheck.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Fill color
   */
  fill: string,

  /**
   * Stroke color
   */
  stroke: string,
};

CircledCheck.defaultProps = {
  componentName: "circled-check-outline",
};
