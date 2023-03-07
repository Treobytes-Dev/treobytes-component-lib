import React from "react";
import { string, number } from "prop-types";

export const TwitterWithBackFillSquare = ({
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
    <g fill="none" fillRule="evenodd">
      <path
        d="M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8z"
        fill={fill1}
      />
      <path
        d="M55.087 25.715c.621 13.851-9.707 29.294-27.992 29.294A27.874 27.874 0 0 1 12 50.584a19.8 19.8 0 0 0 14.579-4.078 9.856 9.856 0 0 1-9.198-6.839 9.877 9.877 0 0 0 4.446-.167c-4.737-.953-8.005-5.219-7.899-9.781a9.798 9.798 0 0 0 4.462 1.23c-4.386-2.93-5.628-8.72-3.048-13.147 4.856 5.959 12.112 9.879 20.297 10.29C34.204 21.933 38.877 16 45.232 16a9.828 9.828 0 0 1 7.188 3.109 19.695 19.695 0 0 0 6.253-2.39 9.866 9.866 0 0 1-4.33 5.448A19.668 19.668 0 0 0 60 20.617a19.993 19.993 0 0 1-4.913 5.098"
        fill={fill2}
      />
    </g>
  </svg>
);

TwitterWithBackFillSquare.propTypes = {
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

TwitterWithBackFillSquare.defaultProps = {
  componentName: "twitter-with-back-fill-square",
};
