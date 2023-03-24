import React from 'react';

import { Card } from '../components/Card';
import '../styles/card.scss';
/**
 * Storybook Card story.
 * @template
 * Card - Renders the card component via stories.
 */

const Cards = {
	title: 'HTML Elements/Card',
	component: Card,
	parameters: {
		docs: {
			description: {
				component: 'Card element',
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

const Template = (args) => <Card {...args} />;

export const cardDefault = Template.bind({});
cardDefault.args = {
	children: 'Card',
};
cardDefault.storyName = 'default';

export default Cards;
