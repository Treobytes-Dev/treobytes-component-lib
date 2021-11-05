import React from "react";

import { Anchor } from "../../components/base/Anchor";

const Anchors = {
  title: "HTML Elements/Anchor",
  component: Anchor,
  parameters: {
    docs: {
      description: {
        component: "Anchor",
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

const Template = (args) => <Anchor {...args} />;

export const anchor = Template.bind({});
anchor.args = {
  target: "_blank",
  href: "https://github.com/",
  children: "Anchor",
};
anchor.storyName = "Default";

export default Anchors;
