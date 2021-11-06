import React from "react";
import {string} from "prop-types";

export const Medkit = ({
  componentName,
  additionalClassName,
  width,
  height,
  viewBox,
  fill,
  stroke,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
    >
      <path
        className="path-1"
        d="M18.842,128.478C6.28,141.041,0,156.078,0,173.586v237.54c0,17.512,6.28,32.549,18.842,45.111
			c12.563,12.562,27.6,18.843,45.111,18.843h9.136V109.632h-9.136C46.438,109.632,31.402,115.916,18.842,128.478z"
      />
      <path
        className="path-2"
        d="M365.446,63.953c0-7.614-2.663-14.084-7.994-19.414c-5.325-5.33-11.8-7.993-19.411-7.993H173.589
			c-7.612,0-14.083,2.663-19.414,7.993c-5.33,5.327-7.994,11.799-7.994,19.414v45.679H100.5V475.08h310.625V109.632h-45.679V63.953z
			 M182.725,73.089h146.179v36.543H182.725V73.089z M365.446,319.765c0,2.67-0.855,4.853-2.567,6.571
			c-1.711,1.707-3.9,2.566-6.563,2.566h-63.953v63.953c0,2.662-0.862,4.853-2.573,6.563c-1.704,1.711-3.895,2.567-6.561,2.567
			H228.41c-2.667,0-4.854-0.856-6.567-2.567c-1.711-1.711-2.568-3.901-2.568-6.563v-63.953h-63.953
			c-2.668,0-4.854-0.859-6.567-2.566c-1.714-1.719-2.57-3.901-2.57-6.571v-54.815c0-2.67,0.856-4.859,2.57-6.571
			c1.709-1.709,3.899-2.564,6.562-2.564h63.953V191.86c0-2.666,0.856-4.853,2.57-6.567c1.713-1.713,3.899-2.568,6.567-2.568h54.818
			c2.665,0,4.855,0.855,6.563,2.568c1.711,1.714,2.573,3.901,2.573,6.567v63.954h63.953c2.663,0,4.853,0.855,6.563,2.564
			c1.708,1.712,2.563,3.901,2.563,6.571v54.815H365.446z"
      />
      <path
        className="path-3"
        d="M492.785,128.478c-12.563-12.562-27.601-18.846-45.111-18.846h-9.137V475.08h9.137c17.511,0,32.548-6.28,45.111-18.843
			c12.559-12.562,18.842-27.6,18.842-45.111v-237.54C511.626,156.078,505.343,141.041,492.785,128.478z"
      />
    </svg>
  );
};

Medkit.propTypes = {
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
   * Stroke width
   */
  strokeWidth: string,

  /**
   * Width dimensions
   */
  width: string,

  /**
   * Height dimensions
   */
  height: string,

  /**
   * Viewbox dimensions
   */
  viewBox: string,
};

Medkit.defaultProps = {
  componentName: "med-kit",
};