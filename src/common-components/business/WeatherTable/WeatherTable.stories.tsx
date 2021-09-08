/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BaseStorybookDecorator } from '@base/features/base-decorator';
import { ComponentStory, Meta } from '@storybook/react';
import WeatherTable, { Props as WeatherTableProps } from './index';

export default {
	title: 'Design System/',
	component: WeatherTable,
	argTypes: {

	},
	decorators: [BaseStorybookDecorator],
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof WeatherTable> = (args) => <WeatherTable {...args} />;

export const Default = Template.bind({});
Default.args = {

} as WeatherTableProps;
