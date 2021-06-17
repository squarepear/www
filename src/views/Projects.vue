<template lang="pug">
.projects
  ProjectCard(v-for="project in projects" :info="project")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../projects/projects'

export default defineComponent({
    name: "Projects",
    components: {
      ProjectCard
    },
    data() {
      return {
        projects
      }
    }
})
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
}
</style>