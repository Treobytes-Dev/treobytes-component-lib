import React from "react";
import { string } from "prop-types";
import "../../styles/_image.scss";

export const Img = ({ altTag, src, additionalClassName = "" }) => {
  return (
    <img src={src} className={`img ${additionalClassName}`} alt={altTag} />
  );
};

Img.propTypes = {
  /**
   * Define Alt attribute
   */
  altTag: string,

  /**
   * Define src attribute
   */
  src: string,

  /**
   * Define an additional className
   */
  additionalClassName: string,
};
