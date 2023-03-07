import React from "react";
import { string, any } from "prop-types";
import "../../styles/animation.scss";

// https://animate.style/#utilities

/**
 * React Animation wrapper component.
 * @function
 * Parent component for rendering an animation for any element.
 */

export const Animation = ({
  children,
  additionalClassName = "",
  componentName,
  attentionSeekers,
  backEntrances,
  backExits,
  bouncingEntrances,
  bouncingExits,
  fadingEntrances,
  fadingExits,
  flippers,
  lightSpeed,
  rotatingEntrances,
  rotatingExits,
  specials,
  zoomingEntrances,
  zoomingExits,
  slidingEntrances,
  slidingExits,
  iteration,
  delay,
  duration,
}) => {
  return (
    <div
      data-test-id={componentName}
      className={`${componentName} animate__animated animate__${iteration} animate__${delay} animate__${duration} animate__${
        attentionSeekers ||
        backEntrances ||
        backExits ||
        bouncingEntrances ||
        bouncingExits ||
        fadingEntrances ||
        fadingExits ||
        flippers ||
        lightSpeed ||
        rotatingEntrances ||
        rotatingExits ||
        specials ||
        zoomingEntrances ||
        zoomingExits ||
        slidingEntrances ||
        slidingExits
      } ${additionalClassName}`}
    >
      {children}
    </div>
  );
};

Animation.propTypes = {
  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Animation contents
   */
  children: any.isRequired,

  /**
   * Choose type of iteration
   */
  iteration: string,

  /**
   * Choose type of delay
   */
  delay: string,

  /**
   * Choose type of duration
   */
  duration: string,

  /**
   * Choose type of animation
   */
  attentionSeekers: string,

  /**
   * Choose type of animation
   */
  backEntrances: string,

  /**
   * Choose type of animation
   */
  backExits: string,

  /**
   * Choose type of animation
   */
  bouncingEntrances: string,

  /**
   * Choose type of animation
   */
  bouncingExits: string,

  /**
   * Choose type of animation
   */
  fadingEntrances: string,

  /**
   * Choose type of animation
   */
  fadingExits: string,

  /**
   * Choose type of animation
   */
  flippers: string,

  /**
   * Choose type of animation
   */
  lightSpeed: string,

  /**
   * Choose type of animation
   */
  rotatingEntrances: string,

  /**
   * Choose type of animation
   */
  rotatingExits: string,

  /**
   * Choose type of animation
   */
  specials: string,

  /**
   * Choose type of animation
   */
  zoomingEntrances: string,

  /**
   * Choose type of animation
   */
  zoomingExits: string,

  /**
   * Choose type of animation
   */
  slidingEntrances: string,

  /**
   * Choose type of animation
   */
  slidingExits: string,
};

Animation.defaultProps = {
  componentName: "animation",
};
