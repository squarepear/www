<template>
  <header>
    <NuxtLink to="/">~/</NuxtLink>
    <NuxtLink to="/about">~/about</NuxtLink>
    <NuxtLink to="/projects">~/projects</NuxtLink>
    <NuxtLink to="/blog">~/blog</NuxtLink>
  </header>
</template>

<style scoped>
header {
  text-align: center;
}

header > * {
  margin: 0.5em 1.5em;
  padding: 0.5em;

  color: var(--text-color);
  font-weight: bolder;
  text-decoration: none;
  font-size: 1.2em;
}

@media only screen and (max-width: 50em) {
  header > * {
    margin: 0.5em;
    padding: 0;
  }
}
</style>
