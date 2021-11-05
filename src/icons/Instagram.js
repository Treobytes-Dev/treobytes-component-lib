import React from "react";
import {string} from "prop-types";

export const Instagram = ({
  componentName,
  additionalClassName,
  stroke,
  width,
  viewBox,
}) => {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke={stroke}
      width={width}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${componentName} ${additionalClassName}`}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
    </svg>
  );
};

Instagram.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Define a stroke color
   */
  stroke: string,

  /**
   * Define the width
   */
  width: string,
};

Instagram.defaultProps = {
  componentName: "instagram",
};
