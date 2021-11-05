import React from "react";

import { Button } from "../../components/base/Button";

const Buttons = {
  title: "HTML Elements/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button element",
      },
      source: {
        type: "dynamic",
      },
    },
  },

  argTypes: {
    additionalClassName: {
      control: {
        disable: "true",
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  children: "Button",
};
button.storyName = "Default";

export default Buttons;
