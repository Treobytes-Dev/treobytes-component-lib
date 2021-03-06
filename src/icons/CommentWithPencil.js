import React from "react";
import { string, number } from "prop-types";

export const CommentWithPencil = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path fill={fill} d="M21.71 4.72l-2.43-2.43a1 1 0 0 0-1.41 0l-5.58 5.58a1 1 0 0 0-.29.71V11a1 1 0 0 0 1 1h2.42a1 1 0 0 0 .71-.29l5.58-5.58a1 1 0 0 0 0-1.41zM15 10h-1V9l4.58-4.58 1 1zm4 2a1 1 0 0 0-1 1 7 7 0 0 1-7 7H5.41l.64-.63a1 1 0 0 0 0-1.42A7 7 0 0 1 11 6a1 1 0 0 0 0-2 9 9 0 0 0-7 14.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h8a9 9 0 0 0 9-9 1 1 0 0 0-1-1z" />
  </svg>
);

CommentWithPencil.propTypes = {
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
   * Define icon stroke color
   */
   stroke: string,

};

CommentWithPencil.defaultProps = {
  componentName: "comment-with-pencil",
};
