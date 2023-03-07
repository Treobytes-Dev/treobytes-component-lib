import React from "react";
import { string } from "prop-types";

export const AvatarMale = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fillPath1,
  fillPath2,
  fillPath3,
  fillPath4,
  fillPath5,
  fillRect1,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      height={height}
      width={width}
      viewBox={viewBox}
    >
      <g className="g" transform="translate(0 -1028.4)">
        <path
          className="path-1"
          d="m8 1044.4c-2.2849 1.1-4.5727 2.2-6.856 3.4-0.89518 0.5-1.2293 1.6-1.144 2.6 0.041664 0.6-0.18109 1.4 0.44089 1.8 0.59091 0.3 1.2837 0.1 1.9252 0.2h20.736c0.769-0.1 0.973-0.9 0.898-1.5 0.014-1 0.068-2-0.658-2.7-0.591-0.6-1.435-0.9-2.157-1.3-1.728-0.8-3.457-1.7-5.185-2.5h-8z"
          fill={fillPath1}
        />
        <path
          className="path-2"
          d="m8 1044.4c-0.3258 0.1-0.6428 0.3-0.9688 0.5 0.1969 1.9 2.3371 3.5 4.9688 3.5 2.646 0 4.792-1.6 4.969-3.6-0.322-0.1-0.648-0.3-0.969-0.4h-8z"
          fill={fillPath2}
        />
        <rect
          className="rect"
          height="5"
          width="6"
          y="1041.4"
          x="9"
          fill={fillRect1}
        />
        <path
          className="path-3"
          d="m12 0c-2.9626 0-5.418 2.6899-5.9062 6.2188-0.1135-0.031-0.2401-0.0651-0.3438-0.0313-0.5251 0.171-0.6545 1.1685-0.3125 2.2187 0.2007 0.6163 0.5346 1.1015 0.875 1.375 0.7763 3.0178 3.015 5.2188 5.6875 5.2188 2.672 0 4.911-2.201 5.688-5.2188 0.34-0.2736 0.674-0.7588 0.874-1.375 0.342-1.0502 0.213-2.0477-0.312-2.2187-0.104-0.0338-0.23 0.0003-0.344 0.0313-0.488-3.529-2.943-6.2188-5.906-6.2188z"
          transform="translate(0 1028.4)"
          fill={fillPath3}
        />
        <path
          className="path-4"
          d="m11.98 1028.4c-2.0428-0.1-3.9386 1.3-4.98 3.2-0.5302 0.9-0.8839 2-1.0398 3 0.3344-0.1 0.6002 0.1 0.903-0.3 0.629-0.6 0.9084-1.1 1.1368-1.9 0.3901-0.9 1.2432-2.3 2-2 0.693 0.2 1 0.6 2 0.6s1.307-0.4 2-0.6c0.757-0.3 1.61 1.1 2 2 0.228 0.8 0.468 1.3 1.097 1.9 0.303 0.4 0.569 0.2 0.903 0.3-0.156-1-0.51-2.1-1.04-3-1.041-1.9-2.937-3.3-4.98-3.2z"
          fill={fillPath4}
        />
        <path
          className="path-5"
          d="m8 16c0 1.657 1.7909 3 4 3 2.209 0 4-1.343 4-3h-8z"
          transform="translate(0 1028.4)"
          fill={fillPath5}
        />
      </g>
    </svg>
  );
};

AvatarMale.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * fillPath1 color
   */
  fillPath1: string,

  /**
   * fillPath2 color
   */
  fillPath2: string,

  /**
   * fillPath3 color
   */
  fillPath3: string,

  /**
   * fillPath4 color
   */
  fillPath4: string,

  /**
   * fillPath5 color
   */
  fillPath5: string,

  /**
   * fillPath6 color
   */
  fillRect1: string,
};

AvatarMale.defaultProps = {
  componentName: "heart-filled",
};
