import React from "react";

import { Button } from "../components/Button";
import "../styles/button.scss";
/**
 * Storybook Button story.
 * @template
 * Button - Renders the button component via stories.
 */

const Buttons = {
  title: "HTML Elements/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button element",
      },
      source: {
        type: "dynamic",
      },
    },
  },

  argTypes: {
    componentName: {
      control: {
        disable: "true",
      },
    },
    additionalClassName: {
      control: {
        disable: "true",
      },
    },
    onClick: {
      control: {
        disable: "true",
      },
    },
    variant: {
 
      control: { type: 'text' },
    },
  },
  
};

const Template = (args) => <Button {...args} />;

export const buttonPrimary = Template.bind({});
buttonPrimary.args = {
  children: "Button",
  variant: "primary",
};
buttonPrimary.storyName = "Primary";

export const buttonSecondary = Template.bind({});
buttonSecondary.args = {
  children: "Button",
  variant: "secondary",
};
buttonSecondary.storyName = "Secondary";

export const buttonSubmit = Template.bind({});
buttonSubmit.args = {
  children: "Button",
  variant: "submit",
};
buttonSubmit.storyName = "Submit";

export const buttonEdit = Template.bind({});
buttonEdit.args = {
  children: "Button",
  variant: "edit",
};
buttonEdit.storyName = "Edit";

export const buttonDelete = Template.bind({});
buttonDelete.args = {
  children: "Button",
  variant: "delete",
};
buttonDelete.storyName = "Delete";

export const buttonWarning = Template.bind({});
buttonWarning.args = {
  children: "Button",
  variant: "warning",
};
buttonWarning.storyName = "Warning";

export const buttonRed = Template.bind({});
buttonRed.args = {
  children: "Button",
  variant: "red",
};
buttonRed.storyName = "Red";

export const buttonOrange = Template.bind({});
buttonOrange.args = {
  children: "Button",
  variant: "orange",
};
buttonOrange.storyName = "Orange";

export const buttonPale = Template.bind({});
buttonPale.args = {
  children: "Button",
  variant: "pale",
};
buttonPale.storyName = "Pale";

export const buttonPurple = Template.bind({});
buttonPurple.args = {
  children: "Button",
  variant: "purple",
};
buttonPurple.storyName = "Purple";

export const buttonBlue = Template.bind({});
buttonBlue.args = {
  children: "Button",
  variant: "blue",
};
buttonBlue.storyName = "Blue";

export const buttonLimeGreen = Template.bind({});
buttonLimeGreen.args = {
  children: "Button",
  variant: "lime-green",
};
buttonLimeGreen.storyName = "Lime Green";

export const buttonNeonOrange = Template.bind({});
buttonNeonOrange.args = {
  children: "Button",
  variant: "neon-orange",
};
buttonNeonOrange.storyName = "Neon Orange";

export const buttonSkyBlue = Template.bind({});
buttonSkyBlue.args = {
  children: "Button",
  variant: "sky-blue",
};
buttonSkyBlue.storyName = "Sky Blue";

export const buttonSlateGrey = Template.bind({});
buttonSlateGrey.args = {
  children: "Button",
  variant: "slate-grey",
};
buttonSlateGrey.storyName = "Slate Grey";

export const buttonGrassGreen = Template.bind({});
buttonGrassGreen.args = {
  children: "Button",
  variant: "grass-green",
};
buttonGrassGreen.storyName = "Grass Green";

export const buttonMustardYellow = Template.bind({});
buttonMustardYellow.args = {
  children: "Button",
  variant: "mustard-yellow",
};
buttonMustardYellow.storyName = "Mustard Yellow";

export const buttonCandyPurple = Template.bind({});
buttonCandyPurple.args = {
  children: "Button",
  variant: "candy-purple",
};
buttonCandyPurple.storyName = "Candy Purple";

export const buttonRoyalBlue = Template.bind({});
buttonRoyalBlue.args = {
  children: "Button",
  variant: "royal-blue",
};
buttonRoyalBlue.storyName = "Royal Blue";

export const buttonOffOrange = Template.bind({});
buttonOffOrange.args = {
  children: "Button",
  variant: "off-orange",
};
buttonOffOrange.storyName = "Off Orange";

export const buttonBeige = Template.bind({});
buttonBeige.args = {
  children: "Button",
  variant: "beige",
};
buttonBeige.storyName = "Beige";

export default Buttons;
