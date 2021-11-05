/*eslint-disable no-unused-vars*/
import React, { useState } from "react";
import { string, func, bool, node } from "prop-types";
import "../../styles/_checkbox.scss";
import { Label } from "./Label";

export const Checkbox = ({
  labelText,
  noLabel = false,
  required,
  setName,
  children,
  additionalClassName = "",
  componentName,
  disabled,
  ...props
}) => {
  const [checked, setChecked] = useState(false);
  const [field, setField] = useState("");

  const handleChecked = (value) => {
    setChecked(value);
    setField(setName, value);
  };

  return (
    <div
      className={`${componentName}-wrapper ${additionalClassName}`}
      data-test-id={componentName}
    >
      {noLabel === false ? (
        <Label labelFor={setName} required={required} labelText={labelText}>
          <input
            className={componentName}
            name={setName}
            type="checkbox"
            checked={checked}
            onChange={() => handleChecked(!checked)}
            disabled={disabled}
            {...props}
          />
        </Label>
      ) : (
        <input
          className={componentName}
          name={setName}
          type="checkbox"
          checked={checked}
          onChange={() => handleChecked(!checked)}
          disabled={disabled}
          {...props}
        />
      )}
    </div>
  );
};

Checkbox.propTypes = {
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
   * Add an additional className
   */
  additionalClassName: string,

  /**
   * Define checkbox name
   */
  name: string.isRequired,

  /**
   * Define checkbox name
   */
  setField: func,

  /**
   * Checkbox contents
   */
  children: node.isRequired,

  /**
   * Define if disabled
   */
  disabled: bool,
};

Checkbox.defaultProps = {
  componentName: "checkbox",
};
