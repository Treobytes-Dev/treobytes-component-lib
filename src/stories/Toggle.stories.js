import React from 'react';

import { Toggle } from '../components/Toggle';
import '../styles/toggle.scss';
/**
 * Storybook Toggle story.
 * @template
 * Toggle - Renders the toggle component via stories.
 */

const Toggles = {
	title: 'Modules/Toggle',
	component: Toggle,

	parameters: {
		docs: {
			description: {
				component: 'Toggle functionality',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
};

const Template = (args) => <Toggle {...args} />;

export const toggle = Template.bind({});
toggle.args = {
	isOpenChildren: <>OPEN</>,
	isClosedChildren: <>Closed</>,
};
toggle.storyName = 'Default';

export default Toggles;
