import React from "react";
import { string, number } from "prop-types";

export const CloseWithFill = ({
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
      d="M36.22 0C16.212 0 0 16.216 0 36.227c0 19.999 16.212 36.214 36.22 36.214 20.011 0 36.214-16.215 36.214-36.214C72.434 16.215 56.231 0 36.22 0zm15.838 46.82c1.379 1.424.953 4.078-.959 5.932-1.911 1.854-4.577 2.209-5.959.785l-9.027-9.295-9.298 9.027c-1.421 1.379-4.075.947-5.929-.961s-2.206-4.574-.785-5.956l9.298-9.027-9.027-9.298c-1.379-1.421-.946-4.078.962-5.932 1.905-1.851 4.577-2.204 5.953-.785l9.027 9.297 9.301-9.023c1.424-1.382 4.078-.95 5.929.958 1.857 1.908 2.206 4.577.785 5.959l-9.295 9.024 9.024 9.295z"
    />
  </svg>
);

CloseWithFill.propTypes = {
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

CloseWithFill.defaultProps = {
  componentName: "close-with-fill",
};
