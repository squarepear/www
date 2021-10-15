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

  color: #e0f3f8;
  font-weight: bolder;
  text-decoration: none;
  font-size: 1.2em;
}
</style>
