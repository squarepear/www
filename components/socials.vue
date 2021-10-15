<template lang="pug">
.socials
  a(href="https://github.com/SquarePear" target="_blank" rel="noopener noreferrer") 
    img(src="/github.svg" alt="GitHub")
  a(href="https://www.linkedin.com/in/-jeffreyharmon/" target="_blank" rel="noopener noreferrer")
    img(src="/linkedin.svg" alt="Linkdin")
  a(href="https://pw.jeffreyharmon.dev/" target="_blank" rel="noopener noreferrer")
    img(src="/polywork.svg" alt="Polywork")
</template>

<style scoped>
.socials {
  text-align: center;
}

.socials > * {
  display: inline-block;
  margin: 0.25em 0.5em;
  padding: 0.5em;
  width: 3em;
  height: 3em;

  font-weight: bolder;
  text-decoration: none;
  font-size: 1.2em;
}

.socials > * > * {
  width: 2.5em;
  height: 2.5em;

  filter: invert(100%) sepia(81%) saturate(1064%) hue-rotate(173deg) brightness(104%) contrast(95%);
}
</style>
