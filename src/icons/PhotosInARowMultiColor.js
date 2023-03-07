import React from "react";
import { string, number } from "prop-types";

export const PhotosInARowMultiColor = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  stroke,
  strokeWidth,
  fill1,
  fill2,
  fill3,
  fill4,
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
      <path fill={fill1} d="M82 22H2v70h80z" />
      <path
        fill={fill2}
        d="M38.03 91.486l-24.454-25.52 38.667-34.48L82 62.542v28.944z"
      />
      <path fill={fill2} d="M38.455 91.908L2 53.886v38.022z" />
      <path d="M19 45a6 6 0 1 1 0-12 6 6 0 0 1 0 12h0z" fill={fill3} />
      <path fill={fill4} d="M92 17v-5H12v10h70v60h10z" />
      <path fill={fill4} d="M102 7V2H22v10h70v60h10z" />
    </g>
  </svg>
);

PhotosInARowMultiColor.propTypes = {
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

  /**
   * Define icon fill1 color
   */
  fill1: string,

  /**
   * Define icon fill2 color
   */
  fill2: string,

  /**
   * Define icon fill3 color
   */
  fill3: string,

  /**
   * Define icon fill4 color
   */
  fill4: string,
};

PhotosInARowMultiColor.defaultProps = {
  componentName: "photos-in-a-row-multi-color",
};
