import React from "react";
import { string, number } from "prop-types";

export const ChevronLeft = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill,
  opacity,
  strokeWidth
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    width={width}
    height={height}
    strokeWidth={strokeWidth}
  >
    <g fill="none" fillRule="evenodd">
      <path opacity={opacity} d="M-6-2h24v24H-6z" />
      <path
        d="M10.62.99a1.25 1.25 0 0 0-1.77 0L.54 9.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L3.38 10l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
        fill={fill}
      />
    </g>
  </svg>
);

ChevronLeft.propTypes = {
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
   * Define icon fill color
   */
  fill: string,

  /**
   * Define icon opacity
   */
  opacity: number,


  /**
   * Define icon stroke width
   */
   strokeWidth: string,
};

ChevronLeft.defaultProps = {
  componentName: "chevron-left",
};
