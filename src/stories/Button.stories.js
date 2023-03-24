import React from 'react';

import { Button } from '../components/Button';
import '../styles/button.scss';
/**
 * Storybook Button story.
 * @template
 * Button - Renders the button component via stories.
 */

const Buttons = {
	title: 'HTML Elements/Button',
	component: Button,
	parameters: {
		docs: {
			description: {
				component: 'Button element',
			},
			source: {
				type: 'dynamic',
			},
		},
	},

	argTypes: {
		additionalClassName: {
			control: {
				disable: 'true',
			},
		},
	},
};

const Template = (args) => <Button {...args} />;

export const buttonPrimary = Template.bind({});
buttonPrimary.args = {
	children: 'Button',
	variant: 'primary',
};
buttonPrimary.storyName = 'Primary';

export const buttonSecondary = Template.bind({});
buttonSecondary.args = {
	children: 'Button',
	variant: 'secondary',
};
buttonSecondary.storyName = 'Secondary';

export const buttonWarning = Template.bind({});
buttonWarning.args = {
	children: 'Button',
	variant: 'warning',
};
buttonWarning.storyName = 'Warning';

export const buttonAlert = Template.bind({});
buttonAlert.args = {
	children: 'Button',
	variant: 'alert',
};
buttonAlert.storyName = 'Alert';

export default Buttons;
