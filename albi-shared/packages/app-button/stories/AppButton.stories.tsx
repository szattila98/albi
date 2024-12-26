import type { Meta, StoryObj } from '@storybook/vue3';

import { AppButton } from '../src/lib';
import { defineComponent } from 'vue';
import { fn } from '@storybook/test';

const meta: Meta<typeof AppButton> = {
	title: 'Components/AppButton',
	component: AppButton,
	args: { onClick: fn() },
	argTypes: {
		theme: {
			control: 'select',
			options: ['primary', 'danger'],
			table: {
				defaultValue: { summary: 'primary' }
			}
		},
		disabled: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' }
			}
		}
	},
	render(args) {
		return defineComponent({
			components: { AppButton },
			setup: () => ({ args }),
			render: () => <AppButton {...args}>Default slot content</AppButton>
		});
	}
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
	args: {
		theme: 'primary',
		disabled: false
	}
};

export const Danger: Story = {
	args: {
		theme: 'danger',
		disabled: false
	}
};
