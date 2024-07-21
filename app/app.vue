<template>
  <NuxtLayout name="main">
    <Head>
      <Link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org//face/metropolis"
        type="text/css"
      />
    </Head>
    <NuxtPage />
  </NuxtLayout>
</template>

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
