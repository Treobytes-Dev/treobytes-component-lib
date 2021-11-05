import React from "react";
import { string, number } from "prop-types";

export const PhotosInARow = ({
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
  >
    <g
      stroke={stroke}
      strokeWidth={strokeWidth}

      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M82 22H2v70h80z" />
      <path d="M38.03 91.486l-24.454-25.52 38.667-34.48L82 62.542v28.944z" />
      <path d="M38.455 91.908L2 53.886v38.022zM19 45a6 6 0 1 1 0-12 6 6 0 0 1 0 12h0zM92 17v-5H12v10h70v60h10z" />
      <path d="M102 7V2H22v10h70v60h10z" />
    </g>
  </svg>
);

PhotosInARow.propTypes = {
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

PhotosInARow.defaultProps = {
  componentName: "photos-in-a-row",
};
