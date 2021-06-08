<template lang="pug">
.socials
  a(href="https://github.com/SquarePear") 
    img(src="../assets/github.svg")
  a(href="https://www.linkedin.com/in/-jeffreyharmon/")
    img(src="../assets/linkedin.svg")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Socials'
})
</script>

<style scoped>
.socials {
  text-align: center;
}

.socials > * {
  display: inline-block;
  margin: 0.25em 1.25em;
  padding: 0.5em;
  width: 3em;
  height: 3em;
}

.socials > * > * {
  width: 3em;
  height: 3em;

  filter: invert(100%) sepia(81%) saturate(1064%) hue-rotate(173deg) brightness(104%) contrast(95%);
}
</style>