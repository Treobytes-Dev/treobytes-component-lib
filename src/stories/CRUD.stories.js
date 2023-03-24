import React from 'react';

import { CRUD } from '../components/CRUD';
import '../styles/crud.scss';

const CRUDs = {
	title: 'Components/CRUD',
	component: CRUD,
	parameters: {
		docs: {
			description: {
				component: 'CRUD',
			},
			source: {
				type: 'dynamic',
			},
		},
	},
	argTypes: {
		target: {
			control: {
				type: 'select',
				options: ['_blank', '_self'],
			},
		},
	},
};

const Template = (args) => <CRUD {...args} />;

export const anchor = Template.bind({});
anchor.args = {
	target: '_blank',
	href: 'https://github.com/',
	children: 'CRUD',
};
anchor.storyName = 'Default';

export default CRUDs;
