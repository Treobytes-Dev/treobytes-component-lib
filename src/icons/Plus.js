import React from "react";
import { string, number } from "prop-types";

export const Plus = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path d="M394 154.175c-5.331-5.33-11.806-7.994-19.417-7.994H255.811V27.406c0-7.611-2.666-14.084-7.994-19.414C242.488 2.666 236.02 0 228.398 0h-54.812c-7.612 0-14.084 2.663-19.414 7.993-5.33 5.33-7.994 11.803-7.994 19.414v118.775H27.407c-7.611 0-14.084 2.664-19.414 7.994S0 165.973 0 173.589v54.819c0 7.618 2.662 14.086 7.992 19.411 5.33 5.332 11.803 7.994 19.414 7.994h118.771V374.59c0 7.611 2.664 14.089 7.994 19.417 5.33 5.325 11.802 7.987 19.414 7.987h54.816c7.617 0 14.086-2.662 19.417-7.987 5.332-5.331 7.994-11.806 7.994-19.417V255.813h118.77c7.618 0 14.089-2.662 19.417-7.994 5.329-5.325 7.994-11.793 7.994-19.411v-54.819c-.002-7.616-2.661-14.087-7.993-19.414z" />
  </svg>
);

Plus.propTypes = {
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
};

Plus.defaultProps = {
  componentName: "plus",
};
