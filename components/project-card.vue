<template lang="pug">
NuxtLink.card(:to="'/projects/' + info.id")
  .left
    img(:src="info.icon" :alt="info.name")
  .right
    p {{ info.date.toLocaleDateString('en-US', {timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric'}) }}
    h2 {{ info.name }}
    p {{ info.shortDescription }}
</template>

<script>
export default {
  props: [
    'info'
  ]
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  margin: 0.5em;
  padding: 1em;

  border-radius: 12px;

  background: var(--background-accent-color);

  font-weight: bolder;
  font-size: 1.2em;
  
  color: var(--text-color);
  text-decoration: none;
}

.left {
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5em;
}

.right {
  flex-grow: 1;

  p {
    font-size: 0.8em;
  }
}
</style>