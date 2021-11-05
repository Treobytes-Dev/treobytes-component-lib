import React from "react";
import { string, number } from "prop-types";

export const Refresh = ({
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
      d="M39.07 26.66l-3.82-1.15a2 2 0 0 0-2.43 1 13 13 0 1 1-6.13-17.03l-2.28 2.28a2 2 0 0 0 1.41 3.42H37a2 2 0 0 0 2-2V2A2 2 0 0 0 35.58.59l-3 3.05A21 21 0 1 0 21 42.17a20.95 20.95 0 0 0 19.35-12.85 2 2 0 0 0-1.28-2.66z"
    />
  </svg>
);

Refresh.propTypes = {
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

Refresh.defaultProps = {
  componentName: "refresh",
};
