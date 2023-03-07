/*eslint-disable no-unused-vars*/
import React, { useState, useRef } from "react";
import { string, bool } from "prop-types";
import "../../styles/_text-input.scss";
import "../../styles/abstraks/text-input.scss";
import { Label } from "./Label";
import { Error } from "./Error";

export const TextInput = ({
  labelFor,
  labelText,
  noLabel = false,
  required,
  validateNotEmpty,
  validateEmail,
  validatePassword,
  setName,
  editError = false,
  errorText,
  additionalClassName = "",
  componentName,
  disabled,
  inputType,
  placeHolder
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const inputEl = useRef(null);

  const emailValidation = !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    inputValue
  );
  const notEmptyValidation = inputValue.length === 0;
  const passwordValidation = inputValue.length <= 1 && inputValue.length <= 5;

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

  const isEmail = () => {
    if (validateEmail === true) {
      validationCondition(emailValidation, `A valid ${setName} is required.`);
    }
  };

  const isPassword = () => {
    if (validatePassword === true) {
      validationCondition(
        passwordValidation,
        `${setName} must be at least 6 characters long.`
      );
    }
  };

  const focus = () => {
    setIsFocused(true);
  };

  const blur = () => {
    setIsFocused(false);

    isNotEmpty();
    isEmail();
    isPassword();
  };

  const onChangeFunc = (event) => {
    setError("");

    //option to have the validation message remain while the user is typing
    // isValid();

    setInputValue(event.target.value);
  };

  return (
    <div
      className={`${componentName}-wrapper ${additionalClassName}`}
      data-test-id={componentName}
    >
      {noLabel === false ? (
        <>
          <Label labelFor={setName} required={required} labelText={labelText}>
            <input
              name={setName}
              title={setName}
              className="input text-input"
              data-test-id="input"
              type={inputType}
              value={inputValue}
              onChange={onChangeFunc}
              onFocus={focus}
              onBlur={blur}
              ref={inputEl}
              aria-label={setName}
              style={{ border: error && "1px solid red" }}
              disabled={disabled}
              placeHolder={placeHolder}
            />
          </Label>
          {error && <Error>{error}</Error>}
        </>
      ) : (
        <>
          <input
            name={setName}
            title={setName}
            className="input"
            data-test-id="input"
            type={inputType}
            value={inputValue}
            onChange={onChangeFunc}
            onFocus={focus}
            onBlur={blur}
            ref={inputEl}
            aria-label={setName}
            style={{ border: error && "1px solid red" }}
            disabled={disabled}
            placeHolder={placeHolder}
          />

          {error && <Error>{error}</Error>}
        </>
      )}
    </div>
  );
};

TextInput.propTypes = {
  /**
   * Tell the browser where to open link.
   */
  setName: string.isRequired,

  /**
   * Define label's htmlFor
   */
  labelFor: string,

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
   * Choose to validate email
   */
  validateEmail: bool,

  /**
   * Choose to validate notEmpty
   */
  validateNotEmpty: bool,

  /**
   * Choose to validate password
   */
  validatePassword: bool,

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

  /**
   * Define input type
   */
  inputType: string,

  /**
   * Define copy for a placeholder
   */
  placeHolder: string,
};

TextInput.defaultProps = {
  componentName: "text-input",
};
