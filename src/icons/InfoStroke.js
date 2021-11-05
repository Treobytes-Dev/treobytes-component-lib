import React from "react";
import { string, number } from "prop-types";

export const InfoStroke = ({
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
    strokeWidth={strokeWidth}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 16v-4m0-4h0" />
  </svg>
);

InfoStroke.propTypes = {
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
  stroke: string,

  /**
   * Define icon stroke width
   */
  strokeWidth: number,
};

InfoStroke.defaultProps = {
  componentName: "info-stroke",
};
