import React from "react";

import { Header } from "../../components/base/Header";

/**
 * Storybook Header story.
 * @template
 * Header - Renders the header component via stories.
 */

const Headers = {
  title: "Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "Header element",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  linksTo: [
    { id: 1, href: "https://treobytes.org/", name: "Programs" },
    { id: 2, href: "https://treobytes.org/", name: "Parents" },
    { id: 3, href: "https://treobytes.org/", name: "Educators" },
    { id: 4, href: "https://treobytes.org/", name: "Facilitators" },
    { id: 5, href: "https://treobytes.org/", name: "About" },
    { id: 6, href: "https://treobytes.org/", name: "Careers" },
    { id: 7, href: "https://treobytes.org/", name: "Donate" },
  ],
};
header.storyName = "Default";

export default Headers;
