import React from "react";
import { string } from "prop-types";

export const ChevronRight = ({
  componentName,
  additionalClassName,
  width,
  height,
  viewBox,
  fill,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <g
        className="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g className="Rounded" transform="translate(-619.000000, -3438.000000)">
          <g
            className="Navigation"
            transform="translate(100.000000, 3378.000000)"
          >
            <g
              className="-Round-/-Navigation-/-chevron_right"
              transform="translate(510.000000, 54.000000)"
            >
              <g>
                <polygon className="Path" points="0 0 24 0 24 24 0 24" />
                <path
                  d="M9.29,6.71 C8.9,7.1 8.9,7.73 9.29,8.12 L13.17,12 L9.29,15.88 C8.9,16.27 8.9,16.9 9.29,17.29 C9.68,17.68 10.31,17.68 10.7,17.29 L15.29,12.7 C15.68,12.31 15.68,11.68 15.29,11.29 L10.7,6.7 C10.32,6.32 9.68,6.32 9.29,6.71 Z"
                  className="🔹-Icon-Color"
                  fill={fill}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

ChevronRight.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,
};

ChevronRight.defaultProps = {
  componentName: "chevron-right",
};
