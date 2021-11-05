import React from "react";
import { string, number } from "prop-types";

export const Pencil = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill1,
  stroke,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path
      fill={fill1}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 21.5l-6.5 2 2-6.5L15.33 4.169l4.5 4.5L7 21.5z"
    />
    <path
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.33 4.169l3.086-3.086a2.007 2.007 0 0 1 2.828 0l1.672 1.672a2 2 0 0 1 0 2.828L19.83 8.669M17.58 6.419L6 18M2.5 17l1 1H6v2.5l1 1M1.5 20.5l2 2M16.83 2.669l4.5 4.5"
    />
  </svg>
);

Pencil.propTypes = {
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
   * Define icon fill1 color
   */
  fill1: string,
};

Pencil.defaultProps = {
  componentName: "pencil",
};
