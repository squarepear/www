<template lang="pug">
Header
main
  #content
    slot
</template>

<style>
main {
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>