import React from "react";
import { string, number } from "prop-types";

export const Twitter = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path
      fill={fill}
      d="M384 384H256c-35.296 0-64-28.704-64-64v-32h192c35.328 0 64-28.672 64-64s-28.672-64-64-64H192V64c0-35.328-28.672-64-64-64S64 28.672 64 64v256c0 105.888 86.112 192 192 192h128c35.328 0 64-28.672 64-64s-28.672-64-64-64z"
    />
  </svg>
);

Twitter.propTypes = {
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
};

Twitter.defaultProps = {
  componentName: "twitter",
};
