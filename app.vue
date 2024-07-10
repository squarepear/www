<template>
  <NuxtLayout name="main">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'en-US',
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fontlibrary.org/face/metropolis',
    },
  ],
})

const title = 'Jeffrey Harmon'
const author = 'Jeffrey Harmon'
const description =
  'Hi! My name is Jeffrey Harmon. I am a software engineer who just recently graduated from Ball State University with a Bachelor of Science in Computer Science in May 2024. I am also an Eagle Scout!'

useSeoMeta({
  titleTemplate: '%s - Jeffrey Harmon',
  title,
  author,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: 'https://jeffreyharmon.dev/icon.svg',
})
</script>

<style lang="scss">
:root {
  --background-color: #111118;
  --background-accent-color: #0a090f;
  --text-color: #e0f3f8;
  --text-accent-color: #e94444;
  --text-accent-color-2: #9944e9;
}

html,
body {
  margin: 0;
  height: 100%;
  background-color: var(--background-color);

  overflow-x: hidden;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'MetropolisRegular', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--text-color);
}

a {
  color: var(--text-accent-color-2);
  text-decoration: none;

  &:hover {
    filter: brightness(75%);
    text-decoration: underline;
  }
}
</style>
