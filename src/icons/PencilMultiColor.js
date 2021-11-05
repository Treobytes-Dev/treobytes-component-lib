import React from "react";
import { string,number } from "prop-types";

export const PencilMultiColor = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill1,
  fill2,
  fill3,
  fill4,
  fill5,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path
      fill={fill1}
      d="M156.153 431.031L491.08 96.104l7.839-7.839c17.54-17.54 17.54-45.974 0-63.514l-11.74-11.741c-17.346-17.346-45.471-17.346-62.817 0l-8.192 8.192L81.251 356.129l74.902 74.902z"
    />
    <path
      fill={fill2}
      d="M455.771 131.413l-74.902-74.902 37.446-37.455 74.911 74.902z"
    />
    <path
      fill={fill3}
      d="M143.669 368.61l-37.455-37.455L355.902 81.476l37.446 37.455z"
    />
    <path fill={fill4} d="M56.28 381.095l74.902 74.902L.102 512.176z" />
    <path
      fill={fill5}
      d="M131.184 455.999l-74.902-74.902 24.964-24.973 74.903 74.911z"
    />
  </svg>
);

PencilMultiColor.propTypes = {
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

  /**
   * Define icon fill5 color
   */
  fill5: string,
};

PencilMultiColor.defaultProps = {
  componentName: "pencil-multi-color",
};
