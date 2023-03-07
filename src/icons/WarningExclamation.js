import React from "react";
import { string, number } from "prop-types";

export const WarningExclamation = ({
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
      d="M46.76 31.11L28 2.27a5 5 0 0 0-8.38 0L.82 31.11A5 5 0 0 0 5 38.84h37.57a5 5 0 0 0 4.19-7.73zm-23 .73a2 2 0 1 1 2-2 2 2 0 0 1-1.97 2zm2-9a2 2 0 0 1-4 0v-11a2 2 0 1 1 4 0z"
      fill={fill}
    />
  </svg>
);

WarningExclamation.propTypes = {
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
  fill: string,
};

WarningExclamation.defaultProps = {
  componentName: "warning-exclamation",
};
