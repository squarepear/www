<template lang="pug">
.projects
  ProjectCard(v-for="project in projects" :info="project")
</template>

<script>
import projects from '/assets/projects/projects'

export default {
  layout: 'main',

  setup() {
    useMeta({
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