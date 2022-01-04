import React from "react";
import { node } from "prop-types";
import { Logo } from "./Logo";

import { Button } from "./Button";
import "../../styles/logo.scss";

/**
 * React Header component.
 * @function
 * Header - Renders a branded Treobytes header component.
 */

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className="header" data-test-id="header">
    <div className="container">
      <Logo />
      {navigation}
    </div>
  </header>
);

Header.propTypes = {
  /**
   * Include specific navigation component
   */
  navigation: node,
};
