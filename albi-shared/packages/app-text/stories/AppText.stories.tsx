import type { Meta, StoryObj } from '@storybook/vue3';

import { AppText } from '../src/lib';
import { defineComponent } from 'vue';

const meta: Meta<typeof AppText> = {
	title: 'Components/AppText',
	component: AppText,
	argTypes: {
		small: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' }
			},
			description: 'smaller text'
		}
	},
	render(args) {
		return defineComponent({
			components: { AppText },
			setup: () => ({ args }),
			render: () => (
				<AppText {...args}>
					Officia est reprehenderit exercitation eiusmod culpa ut non officia voluptate ipsum magna laboris.
				</AppText>
			)
		});
	}
};

export default meta;
type Story = StoryObj<typeof AppText>;

export const Normal: Story = {
	args: {
		small: false
	}
};

export const Small: Story = {
	args: {
		small: true
	}
};
