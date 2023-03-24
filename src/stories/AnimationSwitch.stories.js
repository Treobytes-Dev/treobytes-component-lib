import React from 'react';

import { AnimationSwitch } from '../components/AnimationSwitch';
import '../styles/animation.scss';
/**
 * Storybook AnimationSwitch story.
 * @template
 * AnimationSwitch - Renders animation-switch via stories.
 */

const AnimationSwitchs = {
	title: 'Animations/AnimationSwitch',
	component: AnimationSwitch,
	parameters: {
		docs: {
			description: {
				component: 'Animation Switches',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
};

const AnimationSwitchTemplate = (args) => <AnimationSwitch {...args} />;
export const animationSwitch = AnimationSwitchTemplate.bind({});
animationSwitch.args = {
	withOptions: true,
	childOne: 'Hello!',
	childTwo: 'Goodbye!',
};
animationSwitch.storyName = 'Switch';

const AnimationOutInTemplate = (args) => <AnimationSwitch {...args} />;
export const animationOutIn = AnimationOutInTemplate.bind({});
animationOutIn.args = {
	withOptions: false,
	animationType: 'out-in',
	childOne: 'Hello!',
	childTwo: 'Goodbye!',
};
animationOutIn.storyName = 'Out-In';

const AnimationInOutTemplate = (args) => <AnimationSwitch {...args} />;
export const animationInOut = AnimationInOutTemplate.bind({});
animationInOut.args = {
	withOptions: false,
	animationType: 'in-out',
	childOne: 'Hello!',
	childTwo: 'Goodbye!',
};
animationInOut.storyName = 'In-Out';

export default AnimationSwitchs;
