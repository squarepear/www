<template lang="pug">
Header
main
  #content
    router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style>
:root {
  --background-color: #111118;
  --background-accent-color: #0a090f;
  /* --background-accent-color: #09090F; */
  --text-color: #e0f3f8;
  --text-accent-color: #e94444;
}

html, body {
  margin: 0;
  height: 100%;
  background-color: var(--background-color);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--text-color);
}

main {
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
