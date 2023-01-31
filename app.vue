<template lang="pug">
NuxtLayout(name="main")
  NuxtPage
</template>

<script lang="ts">
export default {
  setup() {
    useHead({
      title: 'Jeffrey Harmon',
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [
        { name: 'author', content: 'Jeffrey Harmon' },
        { name: 'description', content: 'Hi! My name is Jeffrey Harmon. I am an Eagle Scout, student, and developer who enjoys coding in multiple languages!' },
        { name: 'keywords', content: 'Jeffrey Harmon, Jeffrey, Harmon, Eagle Scout, developer, coding, node.js, deno, javascript, rpi, github, ios, macOS, backend' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fontlibrary.org//face/metropolis'
        }
      ]
    })
  }
}
</script>

<style lang="scss">
:root {
  --background-color: #111118;
  --background-accent-color: #0a090f;
  --text-color: #e0f3f8;
  --text-accent-color: #e94444;
  --text-accent-color-2: #9944e9;
}

html, body {
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
