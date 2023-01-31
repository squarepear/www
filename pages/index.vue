<template lang="pug">
.index
  .home
    #icon
      img(src="/icon.svg", alt="icon")
    #info
      p#intro Hi! I'm
      h1#name Jeffrey Harmon
      p#desc  Eagle Scout, Student, & Developer
  Socials
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  margin-bottom: 2em;
}

.home {
  display: flex;
  flex-direction: row;

  margin-bottom: 1em;
}

#icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.5em;
}

@media only screen and (max-width: 50em) {
  #icon {
    display: none;
  }

  #info {
    display: inline-block;
    text-align: center;
    flex-shrink: 1;
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
  color: var(--text-accent-color);
}

#name {
  font-size: 3em;
}

#desc {
  font-size: 2em;
}
</style>
