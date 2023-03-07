import React from "react";
import { any, string } from "prop-types";
import "../../styles/_paragraph.scss";

export const Paragraph = ({ children, additionalClassName = "" }) => {
  return <p className={`paragraph ${additionalClassName}`}>{children}</p>;
};

Paragraph.propTypes = {
  /**
   * Define children
   */
  children: any,

  /**
   * Define an additional className
   */
  additionalClassName: string,
};
