import type { Meta, StoryObj } from '@storybook/vue3';

import { AppHeading } from '../src/lib';
import { defineComponent } from 'vue';

const meta: Meta<typeof AppHeading> = {
	title: 'Components/AppHeading',
	component: AppHeading,
	argTypes: {
		level: {
			control: { type: 'number', min: 1, max: 4 },
			table: {
				defaultValue: { summary: '1' }
			},
			description: 'level of the heading'
		}
	},
	render(args) {
		return defineComponent({
			components: { AppHeading },
			setup: () => ({ args }),
			render: () => (
				<AppHeading {...args}>
					Cillum dolore est cupidatat ullamco pariatur exercitation do nulla veniam deserunt.
				</AppHeading>
			)
		});
	}
};

export default meta;
type Story = StoryObj<typeof AppHeading>;

export const LevelOne: Story = {
	args: {
		level: 1
	}
};

export const LevelTwo: Story = {
	args: {
		level: 2
	}
};

export const LevelThree: Story = {
	args: {
		level: 3
	}
};

export const LevelFour: Story = {
	args: {
		level: 4
	}
};
