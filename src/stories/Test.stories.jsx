import React from 'react';

import { Test } from './Test';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Test',
	component: Test,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Test {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Test',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Test',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Test',
};
