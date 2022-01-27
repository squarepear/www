<template lang="pug">
.page
  Header
  main
    #content
      slot
</template>

<style>
.page {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

main {
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>