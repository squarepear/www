<template>
  <div class="projects">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :info="project"
    />
  </div>
</template>

<script lang="ts" setup>
import projects from '~/assets/projects/projects'

useHead({
  title: 'Jeffrey Harmon - Projects',
})
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
}
</style>
