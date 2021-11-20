import React from "react";
import { string, node } from "prop-types";
import "../styles/_test.scss";

export const Test = ({
    letter
}) => {
  return (
    <ul className="unordered-list">
        <li className="list-item">A</li>
        <li>B</li>
        <li>{letter}</li>
    </ul>
  );
};

Test.propTypes = {
  /**
   * Define the value for the letter proptype
   */
  letter: string,

 
};

Test.defaultProps = {
  componentName: "Test",
};
