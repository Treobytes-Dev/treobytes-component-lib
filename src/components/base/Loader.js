import React from "react";
import {string} from "prop-types";
import "../../styles/_loader.scss";

/**
 * React Loader component.
 * @function
 * Loader - Renders a branded Treobytes loader component.
 */

export const Loader = ({ componentName, additionalClassName, fill }) => {
  return (
    <div className={`${componentName} ${additionalClassName}`} data-test-id={`${componentName}`}>
      <h2 className={`header-two`}>Loading...</h2>
      <svg
        className="svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
      >
        <path
          className="path"
          fill={fill}
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

Loader.propTypes = {
  /**
   * Optional additional className
   */
  additionalClassName: string,

  /**
   * fill color for svg
   */
  fill: string.isRequired,
};

Loader.defaultProps = {
  componentName: "loader",
};
