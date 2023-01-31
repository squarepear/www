<template lang="pug">
ContentList(v-slot="{ list }").blog
  NuxtLink.post(v-for="post in list" :key="post._path" :to="post._path")
    p.date {{ post.date }}
    h2 {{ post.title }}
    p {{ post.description }}
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

// Pagination
const page = useRoute().query.page ? parseInt(useRoute().query.page as string) : 1
const limit = ref(5)

const query: QueryBuilderParams = {
  limit: limit.value,
  offset: (page - 1) * limit.value,
  sort: {
    // @ts-ignore - This seems to be a bug in @nuxt/content
    date: -1
  }
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
