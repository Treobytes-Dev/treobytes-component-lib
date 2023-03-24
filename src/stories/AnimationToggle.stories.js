import React from 'react';

import { AnimationToggle } from '../components/AnimationToggle';
import '../styles/animation.scss';
/**
 * Storybook AnimationToggle story.
 * @template
 * AnimationToggle - Renders animation-toggle via stories.
 */

const AnimationToggles = {
	title: 'Animations/AnimationToggle',
	component: AnimationToggle,
	parameters: {
		docs: {
			description: {
				component: 'Animation Toggles',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
	argTypes: {
		animationType: {
			control: {
				type: 'select',
				options: [
					'bounce',
					'bounceDown',
					'bounceUp',
					'fade',
					'flip',
					'lightSpeedRight',
					'lightSpeedLeft',
					'lightSpeedLeftToRight',
					'rotate',
					'roll',
					'zoom',
					'slideDown',
					'slideUp',
					'slideDownToSlideUp',
					'slideUpToSlideDown',
					'slideLeft',
					'slideRight',
				],
			},
		},
	},
};

const AnimationToggleTemplate = (args) => <AnimationToggle {...args} />;
export const animationToggle = AnimationToggleTemplate.bind({});
animationToggle.args = {
	children: 'AnimationToggle',
	animationType: '',
	childOne: 'Show Message',
	childTwo: 'Close Message',
};
animationToggle.storyName = 'Default';

export default AnimationToggles;
