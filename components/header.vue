<template>
  <header>
    <SiteLink to="/">~/</SiteLink>
    <SiteLink to="/about">~/about</SiteLink>
    <SiteLink to="/projects">~/projects</SiteLink>
    <SiteLink to="/blog">~/blog</SiteLink>
  </header>
</template>

<style scoped>
header {
  text-align: center;
}

header > * {
  margin: 0.5em 1.5em;
  padding: 0.5em;

  color: var(--text-color);
  font-weight: bolder;
  text-decoration: none;
  font-size: 1.2em;
}

@media only screen and (max-width: 50em) {
  header > * {
    margin: 0.5em;
    padding: 0;
  }
}
</style>
