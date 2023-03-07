import React from "react";
import {string} from "prop-types";

export const CommentCheck = ({
  componentName,
  additionalClassName,
  width,
  height,
  fill,
  stroke,
  viewBox,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    fill={fill}
    stroke={stroke}
    viewBox={viewBox}
    width={width}
    height={height}
  >
    <path d="M15.29 8.85l-4.73 4.74-1.85-1.86a1 1 0 0 0-1.42 1.42l2.56 2.56a1 1 0 0 0 1.42 0l5.44-5.44a1 1 0 1 0-1.42-1.42zM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20z" />
  </svg>
);

CommentCheck.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Fill color
   */
  fill: string,

  /**
   * Define width
   */
  width: string,

  /**
   * Define width
   */
  height: string,

  /**
   * strokePath1 color
   */
  stroke: string,
};

CommentCheck.defaultProps = {
  componentName: "comment-check",
};
