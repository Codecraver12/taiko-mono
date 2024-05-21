import type { Meta, StoryObj } from '@storybook/svelte';
import { ResponsiveController } from '../../lib/components/ResponsiveController/index.js';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories
const meta: Meta<typeof ResponsiveController> = {
	title: 'Example/ResponsiveController',
	component: ResponsiveController
	//tags: ['autodocs'],
	/*
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
	*/
} satisfies Meta<typeof ResponsiveController>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		label: 'ResponsiveController Primary',
		// Add other props as needed
	}
};

export const Secondary: Story = {
	args: {
		label: 'ResponsiveController Secondary',
		// Add other props as needed
	}
};
