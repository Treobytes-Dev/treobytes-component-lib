import React from "react";

import { Footer } from "../../components/base/Footer";

/**
 * Storybook Footer story.
 * @template
 * Footer - Renders the footer component via stories.
 */

const Footers = {
  title: "Treobytes Branded/Components/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: "Footer",
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

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {
  target: "_blank",
  href: "https://github.com/",
  children: "Footer",
};
footer.storyName = "Default";

export default Footers;
