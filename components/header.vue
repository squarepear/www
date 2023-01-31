<template lang="pug">
header
  NuxtLink(to='/') ~/
  NuxtLink(to='/about') ~/about
  NuxtLink(to='/projects') ~/projects
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
