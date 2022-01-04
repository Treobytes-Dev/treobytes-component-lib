import React from "react";

import { Select } from "../../components/base/Select";

/**
 * Storybook Select story.
 * @template
 * Select - Renders the select component via stories.
 */

const Selects = {
  title: "HTML Elements/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "Select element",
      },
      source: {
        type: "dynamic",
      },
    },
  },
  argTypes: {
    onChange: {
      action: "input filed focused",
      control: {
        disable: "true",
      },
    },
  },
};

const Template = (args) => (
  <Select {...args} setName={args.setName}>
    {args.children}
  </Select>
);

export const select = Template.bind({});
select.args = {
  label: "Label",
  labelFor: "html-for",
  setName: "setName",
  defaultValue: "Select one",
  children: (
    <>
      <option 
    //   key={uuidv4()} 
      className="option" 
      value="one"
      >
        One
      </option>
      <option 
    //   key={uuidv4()} 
      className="option" 
      value="two"
      >
        Two
      </option>
    </>
  ),
};
select.storyName = "Default";

export default Selects;
