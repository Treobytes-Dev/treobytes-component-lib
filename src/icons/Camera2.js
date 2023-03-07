import React from "react";
import {string} from "prop-types";

export const Camera2 = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill,
  strokePath,
  circleFill,
  pathFill,
  strokeLine,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      height={`${height}`}
      width={`${width}`}
      viewBox={`${viewBox}`}
      fill={`${fill}`}
    >
      <path
        className="path"
        stroke={`${strokePath}`}
        fill={`${pathFill}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        d="M20,5H17L16,2H8L7,5H4A3,3,0,0,0,1,8V19a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Z"
      />
      <circle fill={circleFill} className="circle" cx="12" cy="14" r="4" />
      <line
        stroke={strokeLine}
        className="line"
        x1="11"
        y1="6"
        x2="13"
        y2="6"
      />
    </svg>
  );
};

Camera2.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * SVG fill color
   */
  fill: string,

   /**
   * Path stroke color
   */
  strokePath: string,

  /**
   * Circle fill color
   */
  circleFill: string,

  /**
   * Path fill color
   */
  pathFill: string,

  /**
   * Stroke line color
   */
  strokeLine: string,
};

Camera2.defaultProps = {
  componentName: "camera-2",
};
