<template lang="pug">
.project(v-if="info != undefined")
  h1 {{ info.name }}
  p {{ info.description }}
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import projects from '../projects/projects'

export default defineComponent({
    name: "Project",
    data() {
      return {
        info: projects.find(el => el.id == this.$route.params.id)
      }
    },
    beforeMount() {
      if (this.info == undefined)
        this.$router.push('/')
    }
})
</script>

<style>

</style>