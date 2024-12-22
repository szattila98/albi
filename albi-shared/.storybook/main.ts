import { join, dirname } from 'path';
import type { StorybookConfig } from '@storybook/vue3-vite';
import { defineConfig, mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
		'../packages/*/stories/**/*.mdx',
		'../packages/*/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
	],
	addons: [
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@chromatic-com/storybook'),
		getAbsolutePath('@storybook/addon-interactions')
	],
	framework: {
		name: getAbsolutePath('@storybook/vue3-vite'),
		options: {}
	},
	viteFinal(config) {
		return mergeConfig(
			config,
			defineConfig({
				plugins: [vue(), vueJsx()]
			})
		);
	}
};
export default config;
