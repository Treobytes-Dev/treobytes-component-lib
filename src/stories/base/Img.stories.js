import React from "react";

import { Img } from "../../components/base/Img";

const Images = {
  title: "HTML Elements/Image",
  component: Img,
  parameters: {
    docs: {
      description: {
        component: "Abstraks Image",
      },
      source: {
        type: "dynamic",
      },
    },
  },

  argTypes: {
    altTag: {
      control: {
        disable: false,
      },
    },
    src: {
      control: {
        disable: false,
      },
    },
    additionalClassName: {
      control: {
        disable: "true",
      },
    },
  },
};

const Template = (args) => <Img {...args} />;

export const image = Template.bind({});
image.args = {
  src:
    "https://d173eg0xl75rn9.cloudfront.net/publication/issue29/issue29_1.jpg",
  altTag: "Issue 29 Cover",
};
image.storyName = "Default";

export default Images;
