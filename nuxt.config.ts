// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/seo'],
  typescript: { strict: true },
  devtools: { enabled: true },
  ignore: ['**/.direnv', '**/.devenv'],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'dark-plus',
      },
    },
  },
  site: {
    url: 'https://jeffreyharmon.dev',
    name: 'Jeffrey Harmon',
    author: 'Jeffrey Harmon',
    description: 'Software Engineer | Eagle Scout',
    defaultLocale: 'en',
  },
  compatibilityDate: '2024-07-10',
})
