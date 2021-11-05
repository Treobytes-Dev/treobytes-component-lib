import React from "react";

import { Loader } from "../../components/base/Loader";

const Loaders = {
  title: "Loaders/Loader",
  component: Loader,
  parameters: {
    docs: {
      description: {
        component: "Loader",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template = (args) => <Loader {...args} />;

export const loader = Template.bind({});
loader.args = {
  fill: "#333",
};
loader.storyName = "Default";

export default Loaders;