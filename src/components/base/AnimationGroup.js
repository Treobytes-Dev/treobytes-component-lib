import React, { useState } from "react";
import { string } from "prop-types";
import "../../styles/_animation.scss";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

export const AnimationGroup = ({
  componentName,
  additionalClassName = "",
  addItem,
  children,
}) => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Buy eggs" },
    { id: uuidv4(), text: "Pay bills" },
    { id: uuidv4(), text: "Invite friends over" },
    { id: uuidv4(), text: "Fix the TV" },
  ]);

  return (
    <div
      className={`${componentName}-wrapper ${additionalClassName}`}
      data-test-id={componentName}
      style={{ marginTop: "2rem" }}
    >
      <ul className="unordered-list" style={{ marginBottom: "1rem" }}>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition key={id} timeout={500} classNames="item">
              <li className="list-item">
                <button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setItems((items) => items.filter((item) => item.id !== id))
                  }
                >
                  &times;
                </button>
                {text}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <button
        onClick={() => {
          const text = prompt("Enter some text");
          if (text) {
            setItems((items) => [...items, { id: uuidv4(), text }]);
          }
        }}
      >
        {addItem}
      </button>
    </div>
  );
};

AnimationGroup.propTypes = {
  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Add AnimationGroup contents to button
   */
  addItem: string,
};

AnimationGroup.defaultProps = {
  componentName: "animation-group",
};
