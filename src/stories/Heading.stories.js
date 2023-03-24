import React from 'react';

import { Heading } from '../components/Heading';
import '../styles/heading.scss';
/**
 * Storybook Heading story.
 * @template
 * Heading - Renders the heading component via stories.
 */

const Headings = {
	title: 'HTML Elements/Heading',
	component: Heading,
	parameters: {
		docs: {
			description: {
				component: 'This is a Heading component',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: [1, 2, 3, 4, 5, 6],
			},
		},
	},
	children: {
		control: {
			disable: 'true',
		},
	},
};

const Template = (args) => (
	<Heading {...args} variant={args.variant}>
		I'm a h{args.variant}
	</Heading>
);

export const heading = Template.bind({});
heading.args = {
	children: 'Heading',
	variant: 1,
};
heading.storyName = 'Default';

export default Headings;
