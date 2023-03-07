import React, { useState } from "react";
import { string, bool, any } from "prop-types";
import "../../styles/animation.scss";

import { CSSTransition, SwitchTransition } from "react-transition-group";

const modes = ["out-in", "in-out"];

export const AnimationSwitch = ({
  componentName,
  additionalClassName = "",
  childOne,
  childTwo,
  animationType,
  withOptions = false,
}) => {
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);

  return (
    <div
      className={`${componentName}-wrapper ${additionalClassName}`}
      data-test-id={componentName}
    >
      {withOptions === true && (
        <div className="modes">
          {modes.map((m) => (
            <input
              key={m}
              custom
              inline
              label={m}
              id={`mode=msContentScript${m}`}
              type="radio"
              name="mode"
              checked={mode === m}
              value={m}
              onChange={(event) => {
                setMode(event.target.value);
              }}
            />
          ))}
        </div>
      )}

      {/* add stories for TopToBottom, BottomToTop, TopToTop, and BottomToBottom */}

      <SwitchTransition mode={animationType || mode}>
        <CSSTransition
          key={state}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fadeLeftToRight"
        >
          <div className="toggle-container">
            <div className="btn" onClick={() => setState((state) => !state)}>
              {state ? childOne : childTwo}
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

AnimationSwitch.propTypes = {
  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Add AnimationSwitch contents
   */
  childOne: any,

  /**
   * Add AnimationSwitch contents
   */
  childTwo: any,

  /**
   * Choose AnimationSwitch type
   */
  animationType: string,

  /**
   * Choose AnimationSwitch type with options
   */
  withOptions: bool,
};

AnimationSwitch.defaultProps = {
  componentName: "animation-switch",
};
