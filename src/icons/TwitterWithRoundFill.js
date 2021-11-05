import React from "react";
import { string, number } from "prop-types";

export const TwitterWithRoundFill = ({
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
    fill="none"
  >
    <path
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24z"
      fill={fill1}
    />
    <path
      d="M23.281 19.508l.05.83-.839-.102c-3.055-.39-5.724-1.712-7.99-3.932l-1.109-1.101-.285.813c-.604 1.814-.218 3.729 1.04 5.017.672.712.521.813-.637.39-.403-.136-.756-.238-.79-.187-.117.119.286 1.661.605 2.271.437.848 1.326 1.678 2.3 2.17l.823.39-.974.016c-.94 0-.974.017-.873.373.336 1.102 1.662 2.271 3.14 2.78l1.04.356-.906.542a9.45 9.45 0 0 1-4.5 1.254c-.755.017-1.376.085-1.376.136 0 .17 2.048 1.118 3.24 1.491 3.576 1.102 7.823.627 11.013-1.254 2.266-1.339 4.532-4 5.59-6.576.57-1.373 1.141-3.881 1.141-5.084 0-.78.05-.882.99-1.814.555-.542 1.075-1.135 1.176-1.305.168-.322.151-.322-.705-.034-1.427.509-1.629.441-.923-.322.52-.542 1.141-1.525 1.141-1.813 0-.05-.252.034-.537.186-.302.17-.974.424-1.477.577l-.907.288-.823-.56c-.453-.305-1.09-.644-1.426-.745-.857-.238-2.166-.204-2.938.068-2.099.762-3.425 2.728-3.274 4.88z"
      fill={fill2}
    />
  </svg>
);

TwitterWithRoundFill.propTypes = {
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

TwitterWithRoundFill.defaultProps = {
  componentName: "twitter-with-round-fill",
};
