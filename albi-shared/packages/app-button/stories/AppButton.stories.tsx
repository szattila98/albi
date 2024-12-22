import type { Meta, StoryObj } from '@storybook/vue3';

import { AppButton } from '../src/lib';

const meta: Meta<typeof AppButton> = {
	render() {
		return <AppButton>Press me!</AppButton>;
	}
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
	args: {}
};
