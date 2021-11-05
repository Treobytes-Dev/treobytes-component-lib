import React from "react";
import { string, number } from "prop-types";

export const Image = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    width={width}
    height={height}
    viewBox={viewBox}
  >
    <path
      d="M12.083 4.667a2 2 0 1 1 3.999-.001 2 2 0 0 1-3.999.001zM18 12.086l-4.013-4.012-.016.015-.016-.015-1.43 1.43-4.629-4.628-.015.016-.016-.016L2 10.741V2h16v10.086zM0 16h20V0H0v16z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

Image.propTypes = {
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

Image.defaultProps = {
  componentName: "image",
};
