<template>
  <div v-if="info != undefined" class="project">
    <div class="top">
      <div class="left">
        <img class="icon" :src="info.icon" :alt="info.name" />
      </div>
      <div class="right">
        <h1>{{ info.name }}</h1>
        <div class="links">
          <a
            v-for="link in info.links"
            :key="link[0]"
            class="link"
            :href="link[1]"
          >
            {{ link[0] }}
          </a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>{{ info.description }}</p>
    </div>
    <!-- <div class="images">
      <img class="image" v-for="image in info.images" :src="image[1]" :alt="image[0]">
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import projects from '~/assets/projects/projects'

useHead({
  title: `Jeffrey Harmon - Project`,
})

const info = ref(projects.find((el) => el.id == useRoute().params.id))

onBeforeMount(() => {
  if (info.value == undefined) useRouter().push('/')
})
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
