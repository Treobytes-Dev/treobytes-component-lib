import React from "react";

import { ScrollTo } from "../../components/base/ScrollTo";

const ScrollTos = {
  title: "Components/ScrollTo",
  component: ScrollTo,

  parameters: {
    docs: {
      description: {
        component: "Scroll-To",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template = (args) => <ScrollTo {...args} />;

export const scrollTo = Template.bind({});
scrollTo.args = {
  positions: [1, 2, 3, 4, 5],
};
scrollTo.storyName = "Default";

export default ScrollTos;
