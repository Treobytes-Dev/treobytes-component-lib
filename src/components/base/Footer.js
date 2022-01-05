import React from "react";
import { string, node } from "prop-types";

import { SocialIcons } from "./SocialIcons";
import "../../styles/footer.scss";

/**
 * React Footer component.
 * @function
 * Footer - Renders a branded Treobytes footer element.
 */

export const Footer = () => {
  return (
    <footer className="footer" data-test-id="footer">
      <SocialIcons />
    </footer>
  );
};

Footer.propTypes = {
  /**
   * Tell the browser where to open link.
   */
  target: string,

  /**
   * Tell the browser where to open link.
   */
  href: string.isRequired,

  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Footer contents
   */
  children: node.isRequired,
};

Footer.defaultProps = {
  componentName: "footer",
};
