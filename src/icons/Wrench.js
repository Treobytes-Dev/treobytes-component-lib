import React from "react";
import {string} from "prop-types";

export const Wrench = ({
  componentName,
  additionalClassName,
  width,
  height,
  viewBox,
  path1Fill,
  path1Stroke,
  path2Fill,
  path2Stroke,
  strokeWidth1,
  strokeWidth2,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <path
        className="path-1"
        fill={path1Fill}
        stroke={path1Stroke}
        strokeWidth={strokeWidth1}
        d="M205.566,181.586L11.138,376.013c-7.232,7.231-10.85,15.893-10.85,25.981c0,10.28,3.617,18.842,10.85,25.7L41.4,458.529
			c7.426,7.043,16.086,10.561,25.981,10.561c10.089,0,18.654-3.518,25.697-10.561l194.709-194.715
			c-18.647-7.426-35.156-18.322-49.532-32.691C223.887,216.751,212.992,200.239,205.566,181.586z M98.504,396.57
			c-3.621,3.614-7.903,5.425-12.85,5.425c-4.949,0-9.231-1.811-12.847-5.425c-3.617-3.617-5.426-7.898-5.426-12.847
			c0-4.944,1.809-9.232,5.426-12.854c3.616-3.61,7.895-5.421,12.847-5.421c4.95,0,9.233,1.811,12.85,5.421
			c3.615,3.621,5.424,7.909,5.424,12.854C103.928,388.671,102.119,392.953,98.504,396.57z"
      />
      <path
        className="path-2"
        fill={path2Fill}
        stroke={path2Stroke}
        strokeWidth={strokeWidth2}
        d="M466.379,132.477c-1.618-1.906-3.856-2.856-6.707-2.856c-1.711,0-8.419,3.381-20.129,10.138
			c-11.704,6.755-24.603,14.462-38.685,23.124c-14.089,8.663-21.607,13.278-22.556,13.85l-55.106-30.55V82.229l83.651-48.254
			c3.045-2.093,4.568-4.758,4.568-7.994c0-3.234-1.523-5.898-4.568-7.992c-8.378-5.712-18.61-10.138-30.69-13.278
			C364.07,1.571,352.504,0,341.467,0c-35.211,0-65.332,12.518-90.358,37.546c-25.035,25.026-37.544,55.149-37.544,90.36
			c0,35.212,12.516,65.334,37.544,90.362c25.026,25.026,55.147,37.544,90.358,37.544c26.84,0,51.442-7.953,73.806-23.842
			c22.36-15.893,38.021-36.592,46.966-62.097c4.374-12.751,6.563-22.841,6.563-30.262
			C468.809,136.763,467.994,134.383,466.379,132.477z"
      />
    </svg>
  );
};

Wrench.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Path1 fill color
   */
  path1Fill: string,

  /**
   * Path1 stroke color
   */
  path1Stroke: string,

  /**
   * Path2 fill color
   */
  path2Fill: string,

  /**
   * Path2 stroke color
   */
  path2Stroke: string,

  /**
   * strokeWidth1 thickness
   */
  strokeWidth1: string,

  /**
   * strokeWidth2 thickness
   */
  strokeWidth2: string,
};

Wrench.defaultProps = {
  componentName: "wrench",
};
