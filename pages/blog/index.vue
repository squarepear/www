<template>
  <div class="posts">
    <ContentList v-slot="{ list }" path="/blog" :query="{ sort: { date: -1 } }">
      <SiteLink
        v-for="post in list"
        :key="post._slug"
        :to="post._path"
        class="post"
      >
        <p class="date">{{ post.date }}</p>
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </SiteLink>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Blog',
})
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
}

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
