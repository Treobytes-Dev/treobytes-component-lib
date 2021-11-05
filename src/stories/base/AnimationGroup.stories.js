import React from "react";

import { AnimationGroup } from "../../components/base/AnimationGroup";

const AnimationGroups = {
  title: "Animations/AnimationGroup",
  component: AnimationGroup,
  parameters: {
    docs: {
      description: {
        component: "Animation Group",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

const AnimationGroupTemplate = (args) => <AnimationGroup {...args} />;
export const animationGroup = AnimationGroupTemplate.bind({});
animationGroup.args = {
  addItem: "Add Item",
};
animationGroup.storyName = "Default";

export default AnimationGroups;
