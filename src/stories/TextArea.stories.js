import React from 'react';

import { TextArea } from '../components/TextArea';
import '../styles/text-area.scss';
/**
 * Storybook TextArea story.
 * @template
 * TextArea - Renders the text-area component via stories.
 */

const TextAreas = {
	title: 'HTML Elements/TextArea',
	component: TextArea,
	parameters: {
		docs: {
			description: {
				component: 'Text Area element',
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
	},
};

const Template = (args) => <TextArea {...args} setName={args.setName} />;

export const textArea = Template.bind({});
textArea.args = {
	label: 'Label',
	htmlFor: 'html-for',
	setName: 'setName',
	labelText: 'TextArea label text',
};
textArea.storyName = 'Default';

export default TextAreas;
