import React from "react";
import { string } from "prop-types";

export const Camera1 = ({
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
      d="M44,35A11,11,0,1,1,33,24,11,11,0,0,1,44,35ZM62,18V52a6,6,0,0,1-6,6H8a6,6,0,0,1-6-6V18a6,6,0,0,1,6-6H56A6,6,0,0,1,62,18ZM16,22a4,4,0,1,0-4,4A4,4,0,0,0,16,22ZM48,35A15,15,0,1,0,33,50,15,15,0,0,0,48,35ZM43,8a2,2,0,0,0-2-2H23a2,2,0,0,0,0,4H41A2,2,0,0,0,43,8Z"
    />
  </svg>
);

Camera1.propTypes = {
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

Camera1.defaultProps = {
  componentName: "camera-1",
};
