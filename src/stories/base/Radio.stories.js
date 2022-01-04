import React from "react";

import { Radio } from "../../components/base/Radio";

/**
 * Storybook Radio story.
 * @template
 * Radio - Renders the radio component via stories.
 */

const Radios = {
  title: "HTML Elements/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "Radio element",
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
  <Radio {...args} setName={args.setName}>
    {args.children}
  </Radio>
);

export const radio = Template.bind({});
radio.args = {
  label: "Label",
  labelFor: "html-for",
  setName: "setName",
  propertyValue: "test"
};
radio.storyName = "Default";

export default Radios;
