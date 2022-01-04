/*eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { string, bool, node } from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "../../styles/_select.scss";
import { Label } from "./Label";
import { Error } from "./Error";

/**
 * React Select component.
 * @function
 * Select - Renders a branded Treobytes select element.
 */

export const Select = ({
  children,
  noLabel = false,
  required,
  setName,
  defaultValue,
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
            <select
              key={uuidv4()}
              name={setName}
              className="select"
              data-test-id="select"
              value={inputValue}
              onChange={onChangeFunc}
              onFocus={focus}
              onBlur={blur}
              aria-label={setName}
              style={{ border: error && "1px solid red" }}
              disabled={disabled}
            >
              <option key={uuidv4()} className="option" value="" disabled>
                {defaultValue}
              </option>
              {children}
            </select>
          </Label>
          {error && <Error>{error}</Error>}
        </>
      ) : (
        <>
          <select
            key={uuidv4()}
            name={setName}
            className="select"
            data-test-id="select"
            value={inputValue}
            onChange={onChangeFunc}
            onFocus={focus}
            onBlur={blur}
            aria-label={setName}
            style={{ border: error && "1px solid red" }}
            disabled={disabled}
          >
            <option key={uuidv4()} className="option" value="" disabled>
              {defaultValue}
            </option>
            {children}
          </select>

          {error && <Error>{error}</Error>}
        </>
      )}
    </div>
  );
};

Select.propTypes = {
  /**
   * Tell the browser where to open link.
   */
  setName: string.isRequired,

  /**
   * Define a default value for the selects options
   */
  defaultValue: string,

  /**
   * Define a default value for the selects options
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

Select.defaultProps = {
  componentName: "select",
};
