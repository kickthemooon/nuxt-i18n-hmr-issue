import i18nConfig from "./i18n.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: i18nConfig,
  vite: {
    server: {
      watch: {
        usePolling: true,
      }
    },
  }
})
