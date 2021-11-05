import React from "react";

import { Paragraph } from "../../components/base/Paragraph";

const Paragraphs = {
  title: "HTML Elements/Paragraph",
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: "Paragraph Element",
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

const Template = (args) => <Paragraph {...args}>{args.children}</Paragraph>;

export const paragraph = Template.bind({});
paragraph.args = {
  children:
    "Hello from paragraph!",
};
paragraph.storyName = "Default";

export default Paragraphs;
