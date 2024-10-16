// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: {
    dirs: [],
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/i18n"],
});
