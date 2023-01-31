// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  typescript: {
    strict: true
  },
  ignore: [
    '**/.direnv',
    '**/.devenv',
    '**/.git',
  ],
  content: {
    watch: false,
    documentDriven: true,
    highlight: {
      theme: {
        default: 'dark-plus',
      }
    }
  },
})
