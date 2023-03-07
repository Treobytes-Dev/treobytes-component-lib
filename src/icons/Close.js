import React from "react";
import { string, number } from "prop-types";

export const Close = ({
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
      d="M14.8 12l3.6-3.6c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L12 9.2 8.4 5.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8L9.2 12l-3.6 3.6c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l3.6-3.6 3.6 3.6c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8L14.8 12z"
    />
  </svg>
);

Close.propTypes = {
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

Close.defaultProps = {
  componentName: "close",
};
