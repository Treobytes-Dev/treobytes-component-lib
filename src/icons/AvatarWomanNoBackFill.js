import React from "react";
import { string } from "prop-types";

export const AvatarWomanNoBackFill = ({
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
  fill6,
  fill7,
  fill8,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    height={height}
    width={width}
    viewBox={viewBox}
  >
    <path
      d="M6.063 14c1.464.614 3.568 1 5.937 1s4.473-.386 5.938-1H6.062zM7 5h10l1 9H6z"
      fill={fill1}
    />
    <path
      d="M8 16c-2.285 1.1-4.573 2.2-6.856 3.4C.249 19.9-.086 21 0 22c.042.6-.181 1.4.44 1.8.592.3 1.285.1 1.926.2h20.736c.77-.1.973-.9.898-1.5.014-1 .068-2-.658-2.7-.59-.6-1.435-.9-2.157-1.3-1.728-.8-3.457-1.7-5.185-2.5H8z"
      fill={fill2}
    />
    <path fill={fill3} d="M9 13h6v5H9z" />
    <path
      d="M12 0C9.037 0 6.582 2.7 6.094 6.2c-.114 0-.24-.1-.344-.1-.525.2-.654 1.2-.313 2.3.201.6.535 1.1.875 1.3C7.09 12.8 9.328 15 12 15c2.672 0 4.911-2.2 5.688-5.3.34-.2.674-.7.874-1.3.342-1.1.213-2.1-.312-2.3-.104 0-.23.1-.344.1C17.418 2.7 14.963 0 12 0z"
      fill={fill4}
    />
    <path
      d="M8 16c0 1.628 1.052 6.018 2.531 8h2.938C14.948 22.018 16 17.628 16 16H8z"
      fill={fill5}
    />
    <path
      d="M12 0C8.413 0 4.873 3.6 5 7c-.051 2.2 1 4.6 1.038 6.8 1.047-1.3 1.01-2.9.967-4.5.213-1.1.01-2.7.995-3.3 2.374-1.2 3.819-3.5 4.594-6H12z"
      fill={fill6}
    />
    <path d="M8 16c0 1.4 1.79 6 4 6 2.209 0 4-4.6 4-6z" fill={fill7} />
    <path
      d="M12 0c3.587 0 7.127 3.6 7 7 .051 2.2-.999 4.6-1.038 6.8-1.047-1.3-1.01-2.9-.968-4.5-.212-1.1-.01-2.7-.994-3.3-2.374-1.2-3.819-3.5-4.594-6H12z"
      fill={fill8}
    />
  </svg>
);

AvatarWomanNoBackFill.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Define icon height
   */
  height: string,

  /**
   * Define icon width
   */
  width: string,

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

  /**
   * Define icon fill6 color
   */
  fill6: string,

  /**
   * Define icon fill5 color
   */
  fill7: string,

  /**
   * Define icon fill6 color
   */
  fill8: string,
};

AvatarWomanNoBackFill.defaultProps = {
  componentName: "avatar-woman-no-backfill",
};
