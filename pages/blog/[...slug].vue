<template lang="pug">
.hero
  h1.title {{ page.title }}
  p.desc {{ page.description }}
  p.date Posted on {{ page.date }}
ContentDoc.post
</template>

<script lang="ts" setup>
const { page } = useContent()
</script>

<style lang="scss">
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

.post {
  width: min(40em, 80vw);

  margin: 1em 0;
  padding: 1em;
  
  font-size: 1.2em;

  h2 {
    font-size: 1.5em;
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
    margin: 0 0.5em;
    padding: 0.2em;
  }
}
</style>
