import React from "react";
import { string, number } from "prop-types";

export const Search = ({
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
    width={width}
    height={height}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-3-3h24v24H-3z" />
      <path
        d="M12.5 11h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34A6.505 6.505 0 0 0 .05 7.32c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L12.5 11zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"
        fill={fill}
      />
    </g>
  </svg>
);

Search.propTypes = {
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

Search.defaultProps = {
  componentName: "search",
};
