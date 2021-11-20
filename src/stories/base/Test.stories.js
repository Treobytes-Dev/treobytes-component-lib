import React from "react";

import { Test } from "../../components/Test";

const Tests = {
  title: "HTML Elements/Test",
  component: Test,
  parameters: {
    docs: {
      description: {
        component: "Test",
      },
      source: {
        type: "dynamic",
      },
    },
  },
  argTypes: {
    target: {
      control: {
        type: "select",
        options: ["_blank", "_self"],
      },
    },
  },
};

const Template = (args) => <Test {...args} />;

export const test = Template.bind({});
test.args = {
    letter: "hello world",
};
test.storyName = "Default";

export default Tests;
