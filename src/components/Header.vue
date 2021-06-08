<template lang="pug">
header
  router-link(to='/') ~/
  router-link(to='/about') ~/about
  router-link(to='/projects') ~/projects
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header'
})
</script>

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