import React from "react";
import { string, number } from "prop-types";

export const TrashMultiColor = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill1,
  fill2,
  fill3,
  fill4,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path
      fill={fill1}
      d="M32 0c17.7 0 32 14.3 32 32S49.7 64 32 64 0 49.7 0 32 14.3 0 32 0z"
    />
    <path
      fill={fill2}
      d="M19.6 48.5L17 18h30l-2.6 30.5c-.2 2-1.9 3.5-4 3.5H23.6c-2.1 0-3.8-1.5-4-3.5zM39 16h-2.9v-4.3c0-.3-.2-.5-.5-.5h-7.2c-.3 0-.5.2-.5.5V16H25v-4.3c0-2 1.5-3.7 3.4-3.7h7.2c1.9 0 3.4 1.7 3.4 3.7V16z"
    />
    <path
      fill={fill3}
      d="M49 20H15v-2.7c0-1.8 1.5-3.3 3.3-3.3h27.4c1.8 0 3.3 1.5 3.3 3.3V20z"
    />
    <path
      fill={fill4}
      d="M24.9 45c-.8 0-1.4-.6-1.5-1.4l-1.3-17c-.1-.9.6-1.6 1.5-1.6.8 0 1.4.6 1.5 1.4l1.3 17c0 .9-.6 1.6-1.5 1.6zM32 45c-.8 0-1.5-.7-1.5-1.5v-17c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5zM39.2 45c-.9 0-1.6-.7-1.5-1.6l1.3-17c.1-.8.7-1.4 1.5-1.4.9 0 1.6.7 1.5 1.6l-1.3 17c0 .8-.7 1.4-1.5 1.4z"
    />
  </svg>
);

TrashMultiColor.propTypes = {
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

  /**
   * Define icon fill3 color
   */
  fill3: string,

  /**
   * Define icon fill4 color
   */
  fill4: string,
};

TrashMultiColor.defaultProps = {
  componentName: "trash-multi-color",
};
