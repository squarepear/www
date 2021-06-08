<template lang="pug">
.home
  #icon
    img(src="../assets/icon.svg")
  #info
    p#intro Hi! I'm
    h1#name Jeffrey Harmon
    p#desc Student & Developer
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
}

#icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.5em;
}

@media only screen and (max-width: 40em) {
  #icon {
    display: none;
  }
}

img {
  width: 9em;
  height: 9em;
}

#info > * {
  margin:0;
}

#intro {
  font-size: 2.5em;
  color: #e94444;
}

#name {
  font-size: 3em;
}

#desc {
  font-size: 2em;
}
</style>