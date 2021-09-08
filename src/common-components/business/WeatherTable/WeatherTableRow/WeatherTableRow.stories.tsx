/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BaseStorybookDecorator } from '@base/features/base-decorator';
import { ComponentStory, Meta } from '@storybook/react';
import WeatherTableRow, { Props as WeatherTableRowProps } from './index';

export default {
	title: 'Design System/',
	component: WeatherTableRow,
	argTypes: {

	},
	decorators: [BaseStorybookDecorator],
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof WeatherTableRow> = (args) => <WeatherTableRow {...args} />;

export const Default = Template.bind({});
Default.args = {

} as WeatherTableRowProps;
