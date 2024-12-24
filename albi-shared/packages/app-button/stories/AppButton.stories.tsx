import type { Meta, StoryObj } from '@storybook/vue3';

import { AppButton, AppButtonTheme } from '../src/lib';
import { defineComponent } from 'vue';

const meta: Meta<typeof AppButton> = {
	title: 'Components/AppButton',
	component: AppButton,
	argTypes: {
		theme: {
			control: 'select',
			options: [AppButtonTheme.Primary, AppButtonTheme.Danger],
			table: {
				defaultValue: { summary: AppButtonTheme.Primary }
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
		theme: AppButtonTheme.Primary,
		disabled: false
	}
};

export const Danger: Story = {
	args: {
		theme: AppButtonTheme.Danger,
		disabled: false
	}
};
