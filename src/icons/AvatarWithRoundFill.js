import React from "react";
import { string } from "prop-types";

export const AvatarWithRoundFill = ({
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
      d="M28 25c.9-1.2 1.6-2.5 2.1-3.9 0-.1.1-.2.1-.4.1-.2.1-.5.2-.7.1-.2.1-.4.2-.6 0-.2.1-.4.1-.6.1-.3.1-.6.1-.8 0-.2 0-.3.1-.5 0-.5.1-.9.1-1.4 0-8.3-6.7-15-15-15S1 7.7 1 16c0 .5 0 .9.1 1.4 0 .2 0 .3.1.5 0 .3.1.6.1.8 0 .2.1.4.1.6 0 .2.1.4.2.6.1.2.1.5.2.7 0 .1.1.2.1.4.5 1.5 1.2 2.8 2.1 4 2.7 3.6 7.1 6 12 6s9.2-2.4 12-6zm-12 4c-4.6 0-8.6-2.4-10.9-6 1.6-2.6 4.1-4.5 7.1-5.4-1.4-1.1-2.2-2.8-2.2-4.6 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.8-.8 3.5-2.1 4.6 2.9.9 5.4 2.9 7.1 5.4-2.4 3.6-6.4 6-11 6z"
    />
  </svg>
);

AvatarWithRoundFill.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Define icon viewBox
   */
  viewBox: string,

  /**
   * Define icon height
   */
  height: string,

  /**
   * Define icon width
   */
  width: string,

  /**
   * Define icon fill color
   */
  fill: string,
};

AvatarWithRoundFill.defaultProps = {
  componentName: "avatar-with-round-fill",
};
