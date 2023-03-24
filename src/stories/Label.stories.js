import React from 'react';

import { Label } from '../components/Label';

/**
 * Storybook Label story.
 * @template
 * Label - Renders the label component via stories.
 */

const Labels = {
	title: 'HTML Elements/Label',
	component: Label,
	parameters: {
		docs: {
			description: {
				component: 'Label element',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
};

const Template = (args) => <Label {...args} />;

export const label = Template.bind({});
label.args = {
	htmlFor: 'email',
	children: 'Label',
};
label.storyName = 'Default';

export default Labels;
