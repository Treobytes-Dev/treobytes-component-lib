/*eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { string, bool, node, any } from "prop-types";
import "../../styles/_select.scss";
import { Label } from "./Label";
import { Error } from "./Error";

/**
 * React Radio component.
 * @function
 * Radio - Renders a branded Treobytes radio element.
 */

export const Radio = ({
  noLabel = false,
  required,
  setName,
  propertyValue,
  validateNotEmpty,
  editError = false,
  errorText,
  additionalClassName = "",
  componentName,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [data] = useState({ property: propertyValue });

  const notEmptyValidation = inputValue.length === 0;

  const validationCondition = (condition, text) => {
    if (condition) {
      if (editError === true) {
        setError([`${errorText}`]);
      } else {
        setError([text]);
      }
    }
  };

  const isNotEmpty = () => {
    if (validateNotEmpty === true) {
      validationCondition(notEmptyValidation, `${setName} is required.`);
    }
  };

  const focus = () => {
    setIsFocused(true);
  };

  const blur = () => {
    setIsFocused(false);
    isNotEmpty();
  };

  const onChangeFunc = (event) => {
    setError("");

    //option to have the validation message remain while the user is typing
    // isNotEmpty();

    setInputValue(event.target.value);
  };

  return (
    <div
      className={`${componentName}-wrapper ${additionalClassName}`}
      data-test-id={componentName}
    >
      {noLabel === false ? (
        <>
          <Label labelFor={setName} required={required} labelText={setName}>
            <input
              name={setName}
              type="radio"
              className="radio"
              data-test-id="radio"
              value={data.property}
              checked={data.property === inputValue}
              onChange={onChangeFunc}
              onFocus={focus}
              onBlur={blur}
              aria-label={setName}
              style={{ border: error && "1px solid red" }}
              disabled={disabled}
            />
          </Label>
          {error && <Error>{error}</Error>}
        </>
      ) : (
        <>
          <input
            name={setName}
            type="radio"
            className="radio"
            data-test-id="radio"
            value={inputValue}
            checked={data.property === inputValue}
            onChange={onChangeFunc}
            onFocus={focus}
            onBlur={blur}
            aria-label={setName}
            style={{ border: error && "1px solid red" }}
            disabled={disabled}
          />
          {error && <Error>{error}</Error>}
        </>
      )}
    </div>
  );
};

Radio.propTypes = {
  /**
   * Tell the browser where to open link.
   */
  setName: string.isRequired,

  /**
   * Define a default value for the radio's options
   */
  propertyValue: any,

  /**
   * Define a default value for the radio's options
   */
  children: node.isRequired,

  /**
   * Define label's text.
   */
  labelText: string,

  /**
   * Define label's htmlFor
   */
  noLabel: bool,

  /**
   * Define if the input is required
   */
  required: bool,

  /**
   * Choose a type of validation
   */
  validateNotEmpty: bool,

  /**
   * Choose to customize a error message
   */
  editError: bool,

  /**
   * Customize error text
   */
  errorText: string,

  /**
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Define if disabled
   */
  disabled: bool,
};

Radio.defaultProps = {
  componentName: "radio",
};
