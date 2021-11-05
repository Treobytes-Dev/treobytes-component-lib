import React from "react";
import { string, number } from "prop-types";

export const HeartBrokenMultiColor = ({
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
      d="M235.924 429.879c-33.729.003-90.087-34.676-132.28-70.184-26.695-22.467-49.909-46.896-67.133-70.648C15.897 260.619 3.907 233.506.877 208.464c-3.811-31.481 4.867-62.563 24.434-87.518s47.68-40.796 79.162-44.606c22.515-2.727 45.178 1 65.54 10.772a119.013 119.013 0 0 1 48.471 42.67 15 15 0 0 1 2.133 10.983c-1.82 9.449-7.766 32.475-11.099 44.875L257 248.855a15 15 0 0 1 1.171 16.197l-39.435 72.223 33.232 71.162a15 15 0 0 1-12.357 21.296 45.173 45.173 0 0 1-3.687.146z"
      fill={fill1}
    />
    <path
      d="M290.357 437.219c-1.237 0-2.445-.05-3.627-.151a15.003 15.003 0 0 1-13.179-10.96l-22.883-83.032a15.006 15.006 0 0 1 1.489-11.518l50.677-87.273-45.47-55.963a15.001 15.001 0 0 1 .298-19.274l41.946-48.479c23.722-30.42 60.813-47.481 99.316-45.647 31.675 1.507 60.868 15.259 82.201 38.722 21.332 23.463 32.25 53.83 30.743 85.505-3.7 77.782-74.602 147.87-104.913 174.393-34.141 29.876-84.339 63.675-116.598 63.677z"
      fill={fill2}
    />
  </svg>
);

HeartBrokenMultiColor.propTypes = {
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

HeartBrokenMultiColor.defaultProps = {
  componentName: "heart-broken-multi-color",
};
