<template>
  <div id="root">
    <div class="hero">
      <h1 class="title">{{ page.title }}</h1>
      <p class="desc">{{ page.description }}</p>
      <p class="date">{{ page.start }} - {{ page.end }}</p>
    </div>

    <article class="project">
      <ContentDoc />
    </article>
  </div>
</template>

<script lang="ts" setup>
const { page } = useContent()
</script>

<style lang="scss">
#root {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  width: 100%;
  padding: 2em;
  background-color: var(--background-accent-color);
  color: var(--text-color);
  font-size: 1.2em;

  text-align: center;

  h1 {
    font-size: 2em;
    margin: 0 1em;
  }

  .desc {
    margin: 0.5em 0;
    margin: 0 4em;
  }

  .date {
    font-size: 0.8em;
    color: var(--text-accent-color);
  }
}

.project {
  width: min(40em, 80vw);

  margin: 1em 0;
  padding: 1em;

  font-size: 1.2em;

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--text-accent-color);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  pre {
    background-color: var(--background-accent-color);
    border-radius: 0.5em;
    padding: 1em;
  }

  /* Code blocks not in a pre */
  :not(pre) > code {
    background-color: var(--background-accent-color);
    border-radius: 0.5em;
    padding: 0.2em;
  }
}
</style>
