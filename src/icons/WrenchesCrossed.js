import React from "react";
import { string, number } from "prop-types";

export const WrenchesCrossed = ({
  componentName,
  additionalClassName,
  width,
  height,
  fill,
  stroke1,
  stroke2,
  stroke3,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox="0 0 64 64"
    width={width}
    height={height}
    fill={fill}
  >
    <path
      stroke={stroke1}
      d="M60.78 53.31c1.66-7.05-5.56-13.47-12.36-11.1L21.79 15.58c2.35-6.79-3.95-13.91-11-12.4a1 1 0 0 0-.79.88 1 1 0 0 0 .28.81l4 4-1.18 4.23-4.27 1.14-4-4a1.1 1.1 0 0 0-.77-.24 1 1 0 0 0-.88.79c-1.55 7 5.7 13.41 12.42 11l26.61 26.63c-2.36 6.79 4 13.91 11 12.4a1 1 0 0 0 .79-.88 1 1 0 0 0-.28-.81l-4-4 1.18-4.23 4.27-1.14 4 4a1.29 1.29 0 0 0 .71.3 1 1 0 0 0 .9-.75zm-5.57-5.63l-5.38 1.44a1 1 0 0 0-.71.71l-1.44 5.38a1 1 0 0 0 .26 1L50.73 59a7.68 7.68 0 0 1-6.46-10.44.89.89 0 0 0 0-.58.78.78 0 0 0-.25-.51L16.57 20a.89.89 0 0 0-.53-.26.9.9 0 0 0-.56 0A7.67 7.67 0 0 1 5 13.27l2.78 2.79a1 1 0 0 0 .71.29 1.15 1.15 0 0 0 .26 0l5.38-1.44a1 1 0 0 0 .71-.71l1.44-5.38a1 1 0 0 0-.26-1L13.27 5a7.68 7.68 0 0 1 6.46 10.44.89.89 0 0 0 0 .58.78.78 0 0 0 .25.51l27.45 27.52a.83.83 0 0 0 .51.25.89.89 0 0 0 .58 0A7.67 7.67 0 0 1 59 50.73l-2.78-2.79a1 1 0 0 0-1.01-.26z"
    />
    <path
      stroke={stroke2}
      d="M35.18 25a1 1 0 0 0 .71-.3l7.86-7.86a1.08 1.08 0 0 0 .25-1.06c-2.6-7.1 6.33-12.84 11.71-7.5s-.4 14.31-7.5 11.71a1.1 1.1 0 0 0-1.08.25l-7.86 7.86a1 1 0 0 0 1.41 1.41l7.46-7.45c9 2.57 15.59-8.52 9-15.21s-17.75 0-15.19 9l-7.47 7.47a1 1 0 0 0 .7 1.68zm-7.07 14.28l-7.86 7.86a1.08 1.08 0 0 0-.25 1.08c2.6 7.1-6.33 12.84-11.71 7.5s.4-14.31 7.5-11.71a1.08 1.08 0 0 0 1.07-.25l7.86-7.86a1 1 0 0 0-1.41-1.41L15.84 42c-9-2.56-15.56 8.5-9 15.19s17.79 0 15.19-9l7.47-7.47a1 1 0 0 0-1.39-1.44z"
    />
    <path
      stroke={stroke3}
      d="M13.92 46.51l-3.21.86a1 1 0 0 0-.71.71l-.86 3.21a1 1 0 0 0 .26 1l2.35 2.35a1 1 0 0 0 1 .26l3.17-.9a1 1 0 0 0 .71-.71l.86-3.21a1 1 0 0 0-.26-1l-2.35-2.35a1 1 0 0 0-.96-.22zm.93 5.71l-2.1.56-1.53-1.53.56-2.1 2.1-.56 1.53 1.53zm34.8-34.03a1.07 1.07 0 0 0 .25 0l3.88-1a1 1 0 0 0 .71-.71l1-3.88a1 1 0 0 0-.26-1l-2.8-2.87a1 1 0 0 0-1-.26l-3.88 1a1 1 0 0 0-.71.71l-1 3.88a1 1 0 0 0 .26 1l2.84 2.84a1 1 0 0 0 .71.29zm-1-6.9l2.77-.74 2 2-.74 2.77-2.77.74-2-2z"
    />
  </svg>
);

WrenchesCrossed.propTypes = {
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
   * Fill color
   */
  fill: string,

  /**
   * strokePath1 color
   */
  stroke1: string,

  /**
   * stroke2 color
   */
  stroke2: string,

  /**
   * stroke3 color
   */
  stroke3: string,

  /**
   * strokePolygon1 color
   */
  strokePolygon1: string,
};

WrenchesCrossed.defaultProps = {
  componentName: "wrenches-crossed",
};
