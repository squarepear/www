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
html, body {
  margin: 0;
  height: 100%;
  background-color: #111118;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #e0f3f8;
}

main {
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
