import React from "react";
import { string } from "prop-types";

export const Avatar = ({
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
    fill={fill}
  >
    <path d="M12 9H4a4 4 0 0 0-4 4v3h16v-3a4 4 0 0 0-4-4z" />
    <path d="M12 5V4a4 4 0 0 0-8 0v1a4 4 0 0 0 8 0z" />
  </svg>
);

Avatar.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Define icon height
   */
  height: string,

  /**
   * Define icon width
   */
  width: string,

  /**
   * Define icon viewBox
   */
  viewBox: string,

  /**
   * Define icon fill width
   */
  fill: string,
};

Avatar.defaultProps = {
  componentName: "arrow-left",
};
