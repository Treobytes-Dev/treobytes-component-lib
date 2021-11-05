import React, { useState } from "react";
import { string } from "prop-types";
import "../../styles/_animation.scss";

import { CSSTransition } from "react-transition-group";

export const AnimationToggle = ({
  componentName,
  additionalClassName = "",
  childOne,
  childTwo,
  animationType,
}) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className={`${componentName}-wrapper ${additionalClassName}`}
      data-test-id={componentName}
    >
      {showButton && <div onClick={() => setShowMessage(true)}>{childOne}</div>}

      {/* modifty to choose hover functionality */}

      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames={animationType}
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div onClose={() => setShowMessage(false)}>
          {childTwo}

          <button className="close" onClick={() => setShowMessage(false)}>
            Close
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

AnimationToggle.propTypes = {
  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Add AnimationToggle contents when closed
   */
  childOne: string,

  /**
   * Add AnimationToggle contents when open
   */
  childTwo: string,

  animationType: string,
};

AnimationToggle.defaultProps = {
  componentName: "animation-toggle",
};
