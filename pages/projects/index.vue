<template>
  <div class="projects">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :info="project"
    />
  </div>
</template>

<script lang="ts">
import projects from '~/assets/projects/projects'

export default {
  setup() {
    useHead({
      title: 'Jeffrey Harmon - Projects',
    })
  },

  data() {
    return {
      projects,
    }
  },
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
}
</style>
