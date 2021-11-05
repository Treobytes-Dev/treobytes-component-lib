import React from "react";
import { string, number } from "prop-types";

export const TumblrWithBackFill = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
  fill1,
  fill2,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <circle fill={fill1} cx={56.099} cy={56.098} r={56.098} />
    <path
      fill={fill2}
      d="M58.178 38.032V22.966h-9.725c-.219.55-.327 1.221-.327 1.891-.102.327-.222.564-.222.89-.997 5.587-3.899 9.484-8.814 11.613-1.459.673-2.798.775-4.242.673v12.146h7.146c.116 17.092.116 25.903.116 26.351v1.013c.897 7.457 4.796 11.926 11.717 13.606 2.785.772 5.794 1.116 8.814 1.116 3.9-.12 7.696-.789 11.493-2.007V75.964c-2.218.67-4.241 1.234-6.026 1.786-3.456 1.01-6.358.341-8.713-1.891-.222-.341-.551-.79-.667-1.237-.329-1.784-.538-3.678-.538-5.461V50.178h15.497V38.032H58.178z"
    />
  </svg>
);

TumblrWithBackFill.propTypes = {
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
};

TumblrWithBackFill.defaultProps = {
  componentName: "tumblr-with-back-fill",
};
