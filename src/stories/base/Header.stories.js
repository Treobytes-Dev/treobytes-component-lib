import React from "react";

import { Header } from "../../components/base/Header";

const Headers = {
  title: "Headers/Header",
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

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export default Headers;
