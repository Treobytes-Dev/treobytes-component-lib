import React from "react";
import { string, number } from "prop-types";

export const MedkitMultiColor = ({
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
  fill9,
  fill10,
}) => (
  <svg
    className={`${componentName} ${additionalClassName}`}
    viewBox={viewBox}
    height={height}
    width={width}
  >
    <path
      fill={fill1}
      d="M287 0h-62c-41.421 0-75 33.579-75 75v62c0 8.284 6.716 15 15 15h30c8.284 0 15-6.716 15-15V75c0-8.284 6.716-15 15-15h62c8.284 0 15 6.716 15 15v62c0 8.284 6.716 15 15 15h30c8.284 0 15-6.716 15-15V75c0-41.421-33.579-75-75-75z"
    />
    <path
      fill={fill2}
      d="M287 0h-31v60h31c8.284 0 15 6.716 15 15v62c0 8.284 6.716 15 15 15h30c8.284 0 15-6.716 15-15V75c0-41.4-33.6-75-75-75z"
    />
    <path
      fill={fill3}
      d="M452 123.5l-30 30.6-11.4 11.7L392 149l-30-27H150l-30 26.4-15.901 14.099L90 149.9l-30-26.4C25.8 130.401 0 160.7 0 197v240c0 41.4 33.6 75 75 75h15l13.801-25.499L120 512h272l14.7-24.6L422 512h15c41.4 0 75-33.6 75-75V197c0-36.301-25.8-66.599-60-73.5z"
    />
    <path
      fill={fill4}
      d="M512 197v240c0 41.4-33.6 75-75 75h-15l-15.3-24.6L392 512H256V122h106l30 27.001 18.6 16.8 11.4-11.7 30-30.601c34.2 6.901 60 37.199 60 73.5z"
    />
    <path fill={fill5} d="M104.099 162.499L120 148.4V512H90V149.9z" />
    <path fill={fill6} d="M410.6 165.801L422 154.1V512h-30V149.001z" />
    <path
      fill={fill7}
      d="M347 272h-45v-45c0-8.401-6.599-15-15-15h-62c-8.401 0-15 6.599-15 15v45h-45c-8.401 0-15 6.599-15 15v60c0 8.401 6.599 15 15 15h45v45c0 8.401 6.599 15 15 15h62c8.401 0 15-6.599 15-15v-45h45c8.401 0 15-6.599 15-15v-60c0-8.401-6.599-15-15-15z"
    />
    <path
      fill={fill8}
      d="M75 122c-5.099 0-10.201.601-15 1.5V167c0 24.901 20.099 45 45 45s45-20.099 45-45v-45H75z"
    />
    <path
      fill={fill9}
      d="M437 122h-75v45c0 24.901 20.099 45 45 45s45-20.099 45-45v-43.5c-4.799-.899-9.901-1.5-15-1.5z"
    />
    <path
      fill={fill10}
      d="M362 287v60c0 8.401-6.599 15-15 15h-45v45c0 8.401-6.599 15-15 15h-31V212h31c8.401 0 15 6.599 15 15v45h45c8.401 0 15 6.599 15 15z"
    />
  </svg>
);

MedkitMultiColor.propTypes = {
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
   * Define icon fill7 color
   */
  fill7: string,

  /**
   * Define icon fill8 color
   */
  fill8: string,

  /**
   * Define icon fill9 color
   */
  fill9: string,

  /**
   * Define icon fill10 color
   */
  fill10: string,
};

MedkitMultiColor.defaultProps = {
  componentName: "med-kit-multi-color",
};
