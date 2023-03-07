import React from "react";
import { string } from "prop-types";

export const Check = ({
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
      d="M29.658 61.157a4.673 4.673 0 0 1-3.305-1.369L1.37 34.808a4.674 4.674 0 0 1 0-6.611 4.673 4.673 0 0 1 6.611 0l21.485 21.481 42.96-48.117a4.675 4.675 0 1 1 6.975 6.227L33.145 59.595a4.678 4.678 0 0 1-3.355 1.56l-.132.002z"
    />
  </svg>
);

Check.propTypes = {
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
   * Define icon fill color
   */
  fill: string,
};

Check.defaultProps = {
  componentName: "check",
};
