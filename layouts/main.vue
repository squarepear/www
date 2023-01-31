<template lang="pug">
.page
  Header
  main
    slot
</template>

<style>
.page {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  display: flex;
  align-items: center;

  padding-top: 4em;
}
</style>
