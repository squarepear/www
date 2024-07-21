<template>
  <div class="page">
    <Header />
    <main>
      <slot />
    </main>
  </div>
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
