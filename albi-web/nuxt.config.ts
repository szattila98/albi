export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devServer: {
		port: 4567
	},
	devtools: { enabled: true },
	components: {
		dirs: []
	},
	modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/eslint', 'nuxt-typed-router'],
	pinia: {
		storesDirs: ['./stores/**']
	},
	eslint: {
		checker: true
	}
});
