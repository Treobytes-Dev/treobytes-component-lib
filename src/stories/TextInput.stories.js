import React from 'react';

import { TextInput } from '../components/TextInput';

/**
 * Storybook TextInput story.
 * @template
 * TextInput - Renders the input component via stories.
 */

const TextInputs = {
	title: 'HTML Elements/TextInput',
	component: TextInput,
	parameters: {
		docs: {
			description: {
				component: 'Text input element',
			},
			source: {
				type: 'dynamic',
			},
		},
	},

	argTypes: {
		onChange: {
			action: 'input field focused',
			control: {
				disable: 'true',
			},
		},
		inputType: {
			control: {
				type: 'select',
				options: ['text', 'email', 'password', 'number', 'tel', 'url'],
			},
		},
	},
};

const Template = (args) => <TextInput {...args} setName={args.setName} />;

export const textInput = Template.bind({});
textInput.args = {
	label: 'Label',
	htmlFor: 'html-for',
	setName: 'setName',
	labelText: 'Just some label text',
	inputType: 'text',
};
textInput.storyName = 'Default';

export default TextInputs;
