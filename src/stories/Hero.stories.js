import React from 'react';

import { Hero } from '../components/Hero';
import '../styles/hero.scss';
/**
 * Storybook Hero story.
 * @template
 * Hero - Renders the hero component via stories.
 */

const Heros = {
	title: 'Components/Hero',
	component: Hero,
	parameters: {
		docs: {
			description: {
				component: 'Hero',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
};

const Template = (args) => <Hero {...args} />;

export const hero = Template.bind({});
hero.args = {
	children: 'Hero',
	background:
		'https://s3-us-west-1.amazonaws.com/100beans.com/assets/images/hero.jpg',
};
hero.storyName = 'Default';

export default Heros;
