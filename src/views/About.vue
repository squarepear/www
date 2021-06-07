<template lang="pug">
p Hi! I'm Jeffrey! I am a student and developer. I enjoy programming in many different languages. My current favorite language is TypeScript!
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'About'
})
</script>

<style scoped>
p {
  font-size: 1.5em;
  width: min(40em, 80vw);
}
</style>