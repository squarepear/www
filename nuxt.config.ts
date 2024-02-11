// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  typescript: { strict: true },
  devtools: { enabled: true },
  ignore: ['**/.direnv', '**/.devenv'],
  content: {
    highlight: {
      theme: {
        default: 'dark-plus',
      },
    },
  },
})
