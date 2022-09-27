<template lang="pug">
.project(v-if="info != undefined")
  .top
    .left
      img.icon(:src="info.icon" :alt="info.name")
    .right
      h1 {{ info.name }}
      .links
        a.link(v-for="link in info.links" :href="link[1]") {{ link[0] }}
  .bottom
    p {{ info.description }}
  //- .images
    img.image(v-for="image in info.images" :src="image[1]" :alt="image[0]")
</template>

<script lang="ts">
import projects from '@/assets/projects/projects'

export default {
  setup() {
    useHead({
      title: `Jeffrey Harmon - Project`
    })
  },

  data() {
    return {
      info: projects.find(el => el.id == this.$route.params.id)
    }
  },

  beforeMount() {
    if (this.info == undefined)
      this.$router.push('/')
  }
}
</script>

<style scoped>
.project {
  width: min(40em, 80vw);
}

.top {
  display: flex;
  flex-direction: row;
}

.left {
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5em;
}

.icon {
  width: 8em;
  height: 8em;
}

.right {
  flex-grow: 1;
}

.link {
  display: inline-block;

  margin-right: 1em;
  padding: 0.5em 0.25em;

  color: var(--text-accent-color);
  text-decoration: none;
}

.bottom {
  text-align: left;
}

.image {
  width: min(20em, 40vw);
}

@media only screen and (max-width: 30em) {
  .left {
    display: none;
  }
}
</style>
