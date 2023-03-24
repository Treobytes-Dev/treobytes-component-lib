import React from 'react';

import { Checkbox } from '../components/Checkbox';
import '../styles/checkbox.scss';
/**
 * Storybook Checkbox story.
 * @template
 * Checkbox - Renders the checkbox component via stories.
 */

const Checkboxs = {
	title: 'HTML Elements/Checkbox',
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component: 'This is a checkbox',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
	argTypes: {
		children: {
			control: {
				disable: 'true',
			},
		},
	},
	color: {
		disabled: false,
	},
	setField: { action: 'clicked' },
};

const Template = (args) => <Checkbox {...args}>{args.text}</Checkbox>;

export const checkbox = Template.bind({});
checkbox.args = {
	setName: 'setName',
	text: 'Checkbox text',
	label: 'Label',
	htmlFor: 'html-for',
	labelText: 'TextArea label text',
};
checkbox.storyName = 'Default';

export default Checkboxs;
