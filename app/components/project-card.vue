<template>
  <SiteLink :to="info.path" class="card">
    <div class="left">
      <img class="image" :src="info.icon" :alt="`${info.name} icon`" />
    </div>
    <div class="right">
      <p>{{ start }} - {{ end }}</p>
      <h2>{{ info.name }}</h2>
      <p>{{ info.description }}</p>
    </div>
  </SiteLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  info: {
    path: string
    name: string
    icon: string
    description: string
    start: string
    end?: string
  }
}>()

const start = computed(() =>
  new Date(props.info.start).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
  })
)

const end = computed(() =>
  props.info?.end
    ? new Date(props.info.end).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
      })
    : 'Present'
)
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
