import React from "react";
import { string } from "prop-types";

export const EnvelopeOpen = ({
  componentName,
  additionalClassName,
  width,
  height,
  viewBox,
  fill,
}) => {
  return (
    <svg
      className={`${componentName} ${additionalClassName}`}
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <g
        className="g-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g className="g-2" fill={fill}>
          <path
            className="path"
            d="M20.6381516,20 L18.4205694,21.9827889 L18.5199469,21.9822704 L18.5199469,21.9822704 L18.5,22.000001 L15.1214931,22.000001 L16.8181902,21.9911489 L16.8181902,21.9911489 L14.551004,21.9803099 L12.3066528,20 L20.6381516,20 L20.6381516,20 Z M21.7565673,19 L25,16.0999756 L25,8.00862577 C25,7.45157714 24.5452911,7 24.0000398,7 L8.9999602,7 C8.44769743,7 8,7.44373571 8,8.00207596 L8,16.2000122 L11.1733195,19 L21.7565673,19 L21.7565673,19 Z M13.0909091,6 L16.5,3 L19.9090909,6 L24.0025781,6 C25.1090746,6 26,6.89525812 26,7.99961498 L26,11.36 L29,14 L29,28.0059397 C29,29.1054862 28.10296,30 26.9964051,30 L6.00359486,30 C4.88976324,30 4,29.1072288 4,28.0059397 L4,14 L7,11.36 L7,7.99961498 C7,6.88743329 7.89427625,6 8.99742191,6 L13.0909091,6 L13.0909091,6 L13.0909091,6 Z M18.4278349,6 L16.5,4.30000019 L14.5721651,6 L18.4278349,6 L18.4278349,6 L18.4278349,6 Z M26,12.6772727 L27.5,14 L26,15.3333335 L26,12.6772727 L26,12.6772727 L26,12.6772727 Z M7,15.3333335 L5.5,14 L7,12.6772728 L7,15.3333335 L7,15.3333335 L7,15.3333335 Z M13.5,23 L6.5,29 L26.5,29 L19.5,23 L13.5,23 L13.5,23 Z M27.68514,28.7251701 L20,22.0170898 L28,15 L28,21.5000199 L28,28.0000398 C28,28.2831537 27.8789949,28.5418569 27.68514,28.7251701 L27.68514,28.7251701 L27.68514,28.7251701 Z M5.31486,28.7251701 L13,22.0170898 L5,15 L5,21.5000199 L5,28.0000398 C5,28.2831537 5.12100514,28.5418569 5.31486,28.7251701 L5.31486,28.7251701 L5.31486,28.7251701 Z M10,10 L10,11 L23,11 L23,10 L10,10 L10,10 Z M10,13 L10,14 L23,14 L23,13 L10,13 L10,13 Z M10,16 L10,17 L23,17 L23,16 L10,16 L10,16 Z"
            id="mail-envelope-open"
          />
        </g>
      </g>
    </svg>
  );
};

EnvelopeOpen.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * Width dimension
   */
  width: string,

  /**
   * Height dimension
   */
  height: string,

  /**
   * Viewbox dimension
   */
  viewBox: string,

  /**
   * Fill color
   */
  fill: string,
};

EnvelopeOpen.defaultProps = {
  componentName: "envelop-open",
};
