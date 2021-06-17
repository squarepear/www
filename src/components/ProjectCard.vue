<template lang="pug">

router-link.card(:to="'/projects/' + info.id")
  .left
    img(:src="info.icon" :alt="info.name")
  .right
    h6 {{ info.date.toLocaleDateString('en-US', {timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric'}) }}
    h2 {{ info.name }}
    h5 {{ info.shortDescription }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ProjectCard",
    props: [
      'info'
    ]
})
</script>

<style scoped>
.card {
  display: flex;
  margin: 0.5em;
  padding: 1em;

  border-radius: 12px;

  background: #0003;

  font-weight: bolder;
  font-size: 1.2em;
  
  color: #e0f3f8;
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
}
</style>