import React from "react";
import { string, number } from "prop-types";

export const FacebookWithSquareBackFill = ({
  componentName,
  additionalClassName,
  height,
  width,
  heightRect,
  widthRect,
  viewBox,
  fill1,
  fill2,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <g fill="none" fillRule="evenodd">
      <rect fill={fill1} 
      width={widthRect} 
      height={heightRect}
       rx={8} />
      <path
        d="M60.464 13.417v9.31l-5.526.015c-4.331 0-5.166 2.058-5.166 5.066v6.662H60.09L58.752 44.89h-8.98V72H39.01V44.889H30V34.47h9.01v-7.684C39.01 17.864 44.448 13 52.42 13c3.8 0 7.08.288 8.044.417z"
        fill={fill2}
      />
    </g>
  </svg>
);

FacebookWithSquareBackFill.propTypes = {
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
   * Define icon height
   */
  heightRect: number,

  /**
   * Define icon width
   */
  widthRect: number,

  /**
   * Define icon viewBox
   */
  viewBox: string,

  /**
   * Define icon fill1 color
   */
  fill1: string,

  /**
   * Define icon fill2 color
   */
  fill2: string,
};

FacebookWithSquareBackFill.defaultProps = {
  componentName: "facebook-with-square-back-fill",
};
