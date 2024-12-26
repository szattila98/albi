import type { Meta, StoryObj } from '@storybook/vue3';

import { AppList, AppListItem } from '../src/lib';
import { defineComponent } from 'vue';

const meta: Meta<typeof AppList> = {
	title: 'Components/AppList',
	component: AppList,
	argTypes: {
		ordered: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' }
			},
			description: 'list has ordering'
		},
		type: {
			control: 'radio',
			options: ['1', 'i', 'I', 'a', 'A'],
			if: {
				arg: 'ordered'
			},
			description: 'native ordered list type attribute'
		}
	},
	render(args) {
		return defineComponent({
			components: { AppList },
			setup: () => ({ args }),
			render: () => (
				<AppList {...args}>
					<AppListItem>
						Velit id aliqua consectetur dolore sint sunt adipisicing culpa aliqua culpa fugiat.
					</AppListItem>
					<AppListItem>
						Nisi voluptate cillum nulla quis ut magna irure voluptate voluptate non duis.
					</AppListItem>
					<AppList {...args}>
						<AppListItem>
							Fugiat non veniam nulla fugiat laborum duis velit amet nostrud excepteur nisi.
						</AppListItem>
						<AppListItem>Ea laboris dolore amet ea sunt ea culpa occaecat cillum esse.</AppListItem>
						<AppList {...args}>
							<AppListItem>Deserunt culpa dolore labore occaecat.</AppListItem>
							<AppListItem>
								Eiusmod culpa dolor anim amet fugiat excepteur consequat eiusmod aliquip.
							</AppListItem>
						</AppList>
					</AppList>
					<AppListItem>
						Tempor aliqua sunt exercitation duis irure sint do ad velit consequat nulla mollit enim.
					</AppListItem>
				</AppList>
			)
		});
	}
};

export default meta;
type Story = StoryObj<typeof AppList>;

export const Unordered: Story = {
	args: {
		ordered: false
	}
};

export const Ordered: Story = {
	args: {
		ordered: true,
		type: '1'
	}
};
