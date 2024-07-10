<template>
  <div class="projects">
    <ProjectCard
      v-for="project in projects"
      :key="project._slug"
      :to="project._path"
      :info="{
        path: project._path ?? '',
        name: project.title ?? '',
        icon: project.icon ?? '/icon.svg',
        description: project.description,
        start: project.start,
        end: project.end,
      }"
      class="project"
    >
      <p class="date">{{ project.start }}</p>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </ProjectCard>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Projects',
})

const projects = await queryContent('projects')
  .sort({
    end: -1,
    start: -1,
  })
  .find()
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
}

.project {
  width: min(60em, 80vw);
  position: relative;

  background-color: var(--background-accent-color);
  color: var(--text-color);
  border-radius: 0.5em;

  padding: 1em;
  margin: 1em 0;

  font-size: 1.2em;
  text-decoration: none;

  .date {
    position: absolute;
    top: 1em;
    right: 2em;

    font-size: 0.8em;
    color: var(--text-accent-color);
  }
}
</style>
