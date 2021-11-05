import React from "react";
import {string} from "prop-types";

export const HeartFilled = ({
  componentName,
  additionalClassName,
  fill,
  stroke,
  height,
  width,
  viewBox,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      height={height}
      width={width}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
    >
      <path
        className="path"
        d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
      />
    </svg>
  );
};

HeartFilled.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Fill color
   */
  fill: string,

  /**
   * Stroke color
   */
  stroke: string,

  /**
   * Height dimensions
   */
  height: string,

  /**
   * Width dimensions
   */
  width: string,

  /**
   * Viewbox dimensions
   */
  viewBox: string,
};

HeartFilled.defaultProps = {
  componentName: "heart-filled",
};
