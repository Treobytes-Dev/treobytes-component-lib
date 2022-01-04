import React from "react";

import { SideMenuX } from "../../components/base/SideMenuX";
import { SideMenuY } from "../../components/base/SideMenuY";

/**
 * Storybook Menu story.
 * @template
 * Menu - Renders the menu component via stories.
 */

const Menus = {
  title: "Menus/Menus",
  component: [SideMenuX, SideMenuY],
  parameters: {
    docs: {
      description: {
        component: "Menus",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template1 = (args) => <SideMenuX {...args} />;

export const sideMenuX = Template1.bind({});
sideMenuX.args = {
  trigger: "Click me",
  leftIconClose: "Left Close",
  rightIconClose: "Right Close",
  children: "Hello World",
};
sideMenuX.storyName = "Default";

const Template2 = (args) => <SideMenuY {...args} />;

export const topMenuY = Template2.bind({});
topMenuY.args = {
  trigger: "Click me",
  leftIconClose: "Left Close",
  rightIconClose: "Right Close",
  children: "Hello World",
};
topMenuY.storyName = "Default";

export default Menus;
