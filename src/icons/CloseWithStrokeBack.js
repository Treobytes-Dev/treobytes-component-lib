import React from "react";
import { string, number } from "prop-types";

export const CloseWithStrokeBack = ({
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
      d="M55.182 24.972a3.116 3.116 0 0 0-4.408 0L39.335 36.411 27.9 24.972a3.116 3.116 0 1 0-4.408 4.408l11.436 11.439-11.436 11.434a3.117 3.117 0 0 0 4.408 4.408l11.435-11.435L50.766 56.66c.608.609 1.406.913 2.204.913s1.595-.304 2.203-.912a3.115 3.115 0 0 0 .001-4.407L43.742 40.819l11.44-11.44a3.116 3.116 0 0 0 0-4.407z"
    />
    <path
      fill={fill2}
      d="M39.34 0C17.648 0 0 17.648 0 39.34c0 21.687 17.648 39.33 39.34 39.33 21.685 0 39.327-17.644 39.327-39.331C78.667 17.648 61.025 0 39.34 0zm0 72.438c-18.255 0-33.106-14.848-33.106-33.098 0-18.255 14.852-33.106 33.106-33.106 18.249 0 33.094 14.852 33.094 33.106 0 18.25-14.846 33.098-33.094 33.098z"
    />
  </svg>
);

CloseWithStrokeBack.propTypes = {
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

CloseWithStrokeBack.defaultProps = {
  componentName: "close-with-stroke-back",
};
