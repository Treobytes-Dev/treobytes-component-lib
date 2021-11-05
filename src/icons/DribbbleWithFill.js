import React from "react";
import { string, number } from "prop-types";

export const DribbbleWithFill = ({
  componentName,
  additionalClassName,
  height,
  width,
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
    <path
      fill={fill1}
      d="M20.5 39.3c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19z"
    />
    <path
      fill={fill2}
      d="M20.5 8.2c-6.7 0-12.1 5.4-12.1 12.1 0 6.7 5.4 12.1 12.1 12.1 6.7 0 12.1-5.4 12.1-12.1 0-6.7-5.4-12.1-12.1-12.1zm0 2.1c2.3 0 4.4.8 6.1 2.1-1.2 1.6-2.9 2.8-5 3.7-1-1.9-2.2-3.7-3.5-5.5.7-.2 1.5-.3 2.4-.3zM16 11.4c1.3 1.8 2.5 3.6 3.6 5.4-2.5.7-5.4 1.1-8.8 1.1.7-2.8 2.6-5.2 5.2-6.5zm-5.5 8.9V20c3.9 0 7.2-.5 10.1-1.3.2.5.5 1 .7 1.4-3.4 1.1-6.2 3.3-8.4 6.6-1.6-1.7-2.4-4-2.4-6.4zm10 10c-2.3 0-4.4-.8-6.1-2.1 2-3.1 4.5-5.2 7.7-6.1.9 2.4 1.6 5 2.1 7.5-1.2.5-2.4.7-3.7.7zm5.6-1.7c-.4-2.4-1.1-4.7-1.9-7 1.9-.3 4-.2 6.3.2-.6 2.9-2.2 5.3-4.4 6.8zm-2.8-8.9c-.2-.6-.5-1.1-.8-1.7 2.3-1 4.2-2.4 5.6-4.1 1.4 1.6 2.2 3.7 2.3 5.9-2.5-.5-4.9-.5-7.1-.1z"
    />
  </svg>
);

DribbbleWithFill.propTypes = {
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
   * Define icon fill1 color
   */
  fill1: string,

  /**
   * Define icon fill2 color
   */
  fill2: string,
};

DribbbleWithFill.defaultProps = {
  componentName: "dribbble-with-fill",
};
