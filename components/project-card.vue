<template lang="pug">
NuxtLink.card(:to="'/projects/' + info.id")
  .left
    img.image(:src="info.icon" :alt="`${info.name} icon`")
  .right
    p {{ info.date.toLocaleDateString('en-US', {timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric'}) }}
    h2 {{ info.name }}
    p {{ info.shortDescription }}
</template>

<script lang="ts">
export default {
  props: [
    'info'
  ]
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  margin: 1em 2.5em;
  padding: 1em;

  border-radius: 12px;

  background: var(--background-accent-color);

  font-weight: bolder;
  font-size: 1.2em;
  
  color: var(--text-color);
  text-decoration: none;
}

.image {
  width: 128px;
  height: 128px;
}

.left {
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5em;
}

@media only screen and (max-width: 50em) {
  .left {
    margin-right: 0;
  }

  .card {
    flex-direction: column;
    text-align: center;
  }
}

.right {
  flex-grow: 1;

  p {
    font-size: 0.8em;
  }
}
</style>