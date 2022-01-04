import React from "react";
import { string } from "prop-types";

import "../../styles/logo.scss";

/**
 * React Logo component.
 * @function
 * Logo - Renders a branded Treobytes logo component.
 */

export const Logo = ({ path, href }) => (
  <div className="logo" data-test-id="logo">
  <a className="anchor" href={href} target="_self">
    Logo
    {/* <img altTag="Treobytes logo" src={path} /> */}
  </a>
</div>
);

Logo.propTypes = {
  /**
   * Define image path
   */
  path: string,

  /**
   * Define href attribute
   */
  href: string,
};

Logo.defaultProps = {
  path: "",
};
