import React from "react";
import { string, number } from "prop-types";

export const HeartBroken = ({
  componentName,
  additionalClassName,
  height,
  width,
  viewBox,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path d="M4.719 25.915L25 46.422l20.281-20.507c4.949-5.004 4.949-13.146 0-18.15a12.642 12.642 0 0 0-12.419-3.283l-.434.122L27.406 15h2.976l-3 6h2.654L25 27.925V23h-2.674l2-7h-2.982l2.211-7.371-.855-.864A12.563 12.563 0 0 0 13.708 4a12.556 12.556 0 0 0-8.989 3.765c-4.948 5.003-4.948 13.146 0 18.15zM13.709 6c2.858 0 5.547 1.126 7.569 3.171l.021.021L18.656 18h3.018l-2 7H23v9.075L33.964 19h-3.346l3-6h-3.024l3.239-6.705a10.648 10.648 0 0 1 10.026 2.876c4.183 4.229 4.183 11.109 0 15.338L25 43.578 6.141 24.509c-4.182-4.229-4.182-11.11 0-15.338A10.573 10.573 0 0 1 13.709 6z" />
  </svg>
);

HeartBroken.propTypes = {
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
};

HeartBroken.defaultProps = {
  componentName: "heart-broken",
};
