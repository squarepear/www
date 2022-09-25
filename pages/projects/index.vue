<template lang="pug">
.projects
  ProjectCard(v-for="project in projects" :info="project")
</template>

<script lang="ts">
// TS doesn't like this line, but it works just fine -\_(o.o)_/-
// @ts-ignore
import projects from '/assets/projects/projects'

export default {
  setup() {
    useHead({
      title: 'Jeffrey Harmon - Projects'
    })
  },

  data() {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
}
</style>