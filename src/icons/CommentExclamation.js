import React from "react";
import { string } from "prop-types";

export const CommentExclamation = ({
  componentName,
  additionalClassName,
  viewBox,
  width,
  stroke,
  fill,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      viewBox={viewBox}
      width={width}
      stroke={stroke}
      fill={fill}
    >
      <path
        className="path"
        d="M12,14a1,1,0,1,0,1,1A1,1,0,0,0,12,14ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20ZM12,8a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"
      />
    </svg>
  );
};

CommentExclamation.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Viewbox dimensions
   */
  viewBox: string,

  /**
   * Width dimensions
   */
  width: string,

  /**
   * Stroke color
   */
  stroke: string,

  /**
   * Fill color
   */
  fill: string,
};

CommentExclamation.defaultProps = {
  componentName: "icon-4",
};
