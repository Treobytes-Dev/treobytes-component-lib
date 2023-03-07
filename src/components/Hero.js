import React from "react";
import { string } from "prop-types";
import "../../styles/_hero.scss";

export const Hero = ({
  componentName,
  additionalClassName = "",
  children,
  background,
}) => {
  return (
    <div
      className={`${componentName}-wrapper ${additionalClassName}`}
      data-test-id={componentName}
      style={{backgroundImage: `url(${background})`}}
    >
      <div className={componentName}>{children}</div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Add Hero contents
   */
  children: string,

  /**
   * Add Hero image
   */
   background: string,
};

Hero.defaultProps = {
  componentName: "hero",
};
