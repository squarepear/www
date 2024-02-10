<template>
  <ContentList v-slot="{ list }" :query="query" class="blog">
    <NuxtLink
      v-for="post in list"
      :key="post._slug"
      :to="post._path"
      class="post"
    >
      <p class="date">{{ post.date }}</p>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </NuxtLink>
  </ContentList>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const page = useRoute().query.page
  ? parseInt(useRoute().query.page as string)
  : 1
const limit = ref(5)

const query: QueryBuilderParams = {
  path: '/blog',
  limit: limit.value,
  offset: (page - 1) * limit.value,
  sort: {
    // @ts-expect-error - This seems to be a bug in @nuxt/content
    date: -1,
  },
}
</script>

<style lang="scss" scoped>
.post {
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
