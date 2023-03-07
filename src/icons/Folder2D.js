import React from "react";
import { string, number } from "prop-types";

export const Folder2D = ({
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
      d="M2 5C.895 5 0 5.9 0 7v14c0 1.1.895 2 2 2h20c1.105 0 2-.9 2-2V7c0-1.1-.895-2-2-2H2z"
      fill={fill1}
    />
    <path
      d="M3 1c-1.105 0-2 .9-2 2v14c0 1.1.895 2 2 2h18c1.105 0 2-.9 2-2V5c0-1.1-.895-2-2-2h-8l-3-2H3z"
      fill={fill2}
    />
    <path
      d="M23 14V6c0-1.1-.895-2-2-2H3c-1.105 0-2 .9-2 2v8h22z"
      fill={fill3}
    />
    <path
      d="M2 5C.895 5 0 5.9 0 7v13c0 1.1.895 2 2 2h20c1.105 0 2-.9 2-2V7c0-1.1-.895-2-2-2H2z"
      fill={fill4}
    />
    <path
      fill={fill5}
      d="M5.25 8c-.344 0-.63.1-.875.3-.245.3-.375.6-.375.9v9.5c0 .4.13.6.375.9.245.2.531.4.875.4h13.5c.344 0 .63-.2.875-.4.245-.3.375-.5.375-.9V9.2c0-.3-.13-.6-.375-.9a1.33 1.33 0 0 0-.875-.3H5.25zm0 1h13.688c.052.1.062.1.062.2v9.5c0 .1-.01.1-.062.2-.047 0-.12.1-.188.1H5.25c-.068 0-.135-.1-.188-.1-.046-.1-.062-.1-.062-.2V9.2c0-.1.016-.1.063-.2h.187zm2.25 1c-.417 0-.77.1-1.063.4S6 11 6 11.5c0 .4.146.7.438 1s.645.5 1.062.5.77-.2 1.063-.5.437-.6.437-1c0-.5-.146-.8-.438-1.1S7.918 10 7.5 10zm6.25 1.2l-4 4L8.5 14 6 16.5V18h12v-2l-4.25-4.8z"
    />
  </svg>
);

Folder2D.propTypes = {
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

Folder2D.defaultProps = {
  componentName: "folder-2d",
};
