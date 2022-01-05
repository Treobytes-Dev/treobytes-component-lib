import React from "react";

import { Logo } from "../../components/base/Logo";

/**
 * Storybook Logo story.
 * @template
 * Logo - Renders the logo component via stories.
 */

 const Logos = {
    title: "Treobytes Branded/Components/Logo",
    component: Logo,
    parameters: {
      docs: {
        description: {
          component: "Logo",
        },
        source: {
          type: "dynamic",
        },
      },
    },
    argTypes: {
      path: {
        control: {
          disable: "true",
        },
      },
    },
  };
  
  const Template = (args) => <Logo {...args} />;
  
  export const logo = Template.bind({});
  logo.args = {
    href: '/'
  };
  logo.storyName = 'Default';
  export default Logos;
  