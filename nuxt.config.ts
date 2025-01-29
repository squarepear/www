// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ['@nuxtjs/seo', '@nuxt/content'],
  typescript: { strict: true },
  devtools: { enabled: true },
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
