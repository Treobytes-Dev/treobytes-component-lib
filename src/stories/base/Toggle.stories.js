import React from "react";

import { Toggle } from "../../components/base/Toggle";

const Toggles = {
  title: "Modules/Toggle",
  component: Toggle,

  parameters: {
    docs: {
      description: {
        component: "Toggle functionality",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template = (args) => <Toggle {...args} />;

export const toggle = Template.bind({});
toggle.args = {
    isOpenChildren:<>OPEN</>,
    isClosedChildren: <>Closed</>,
};
toggle.storyName = "Default";

export default Toggles;
