<template>
  <NuxtLink :to="'/projects/' + info.id" class="card">
    <div class="left">
      <img class="image" :src="info.icon" :alt="`${info.name} icon`" />
    </div>
    <div class="right">
      <p>{{ startDate }} - {{ info.endDate == null ? 'Present' : endDate }}</p>
      <h2>{{ info.name }}</h2>
      <p>{{ info.shortDescription }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: [
    'info'
  ],
  computed: {
    startDate() {
      return this.info.startDate.toLocaleDateString('en-US', {timeZone: 'UTC', year: 'numeric', month: 'long'})
    },
    endDate() {
      return this.info.endDate.toLocaleDateString('en-US', {timeZone: 'UTC', year: 'numeric', month: 'long'})
    },
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  margin: 1em 2.5em;
  padding: 1em;

  border-radius: 12px;

  background: var(--background-accent-color);

  font-weight: bolder;
  font-size: 1.2em;
  
  color: var(--text-color);
  text-decoration: none;
}

.image {
  width: 128px;
  height: 128px;
}

.left {
  flex-shrink: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5em;
}

@media only screen and (max-width: 50em) {
  .left {
    margin-right: 0;
  }

  .card {
    flex-direction: column;
    text-align: center;
  }
}

.right {
  flex-grow: 1;

  p {
    font-size: 0.8em;
  }
}
</style>
