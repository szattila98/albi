import type { UserConfig } from 'vite';
import { defineConfig, mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export const withSharedConfig = (customConfig: UserConfig = {}) => {
	const sharedConfig = defineConfig({
		plugins: [vue(), dts({ tsconfigPath: '../../tsconfig.app.json', rollupTypes: true })],
		build: {
			lib: {
				formats: ['es'],
				entry: `src/lib.ts`
			},
			sourcemap: true,
			rollupOptions: {
				external: ['vue']
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use '@albi-shared/style-utils/dist/variables' as *;
					`
				}
			}
		}
	});
	return mergeConfig(sharedConfig, customConfig);
};
