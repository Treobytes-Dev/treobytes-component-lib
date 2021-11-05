import React from "react";
import { string, number } from "prop-types";

export const WrenchScrewCrossed = ({
  componentName,
  additionalClassName,
  viewBox,
  width,
  height,
  strokePath1,
  strokePath2,
  strokePath3,
  strokePolygon1,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      height={height}
      width={width}
      viewBox={viewBox}
    >
      <path
        className="path-1"
        fill="none"
        stroke={strokePath1}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M27.8,28.2L27.8,28.2c-1.3,1.3-3.3,1.3-4.6,0L17,22l4.6-4.6l6.2,6.2C29.1,24.8,29.1,26.9,27.8,28.2z"
      />
      <polygon
        className="polygon-1"
        fill="none"
        stroke={strokePolygon1}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="6.2,3.5 3.2,6.6 5.5,10.5 9.3,12.8 17.8,21.3 20.9,18.2 12.4,9.7 10.1,5.8 "
      />
      <path
        className="path-2"
        fill="none"
        stroke={strokePath2}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M18.9,16.1l2.7-2.7c1.9,0.7,4.2,0.4,5.7-1.2c1.5-1.5,1.9-3.8,1.2-5.7l-2.6,2.6l-2.4-0.6l-0.6-2.4l2.6-2.6
	c-1.9-0.7-4.2-0.4-5.7,1.2c-1.5,1.5-1.9,3.8-1.2,5.7l-2.7,2.7"
      />
      <path
        className="path-3"
        fill="none"
        stroke={strokePath3}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M12.7,16.3l-2.3,2.3c-1.9-0.7-4.2-0.4-5.7,1.2c-1.5,1.5-1.9,3.8-1.2,5.7l2.6-2.6l2.4,0.6l0.6,2.4l-2.6,2.6
	c1.9,0.7,4.2,0.4,5.7-1.2c1.5-1.5,1.9-3.8,1.2-5.7l2.4-2.4"
      />
    </svg>
  );
};

WrenchScrewCrossed.propTypes = {
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
   * strokePath1 color
   */
  strokePath1: string,

  /**
   * strokePath2 color
   */
  strokePath2: string,

  /**
   * strokePath3 color
   */
  strokePath3: string,

  /**
   * strokePolygon1 color
   */
  strokePolygon1: string,
};

WrenchScrewCrossed.defaultProps = {
  componentName: "wrench-screwed-crossed",
};
