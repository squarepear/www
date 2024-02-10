<template>
  <div class="about">
    <h1>Who am I?</h1>
    <p>A {{ age }} year old developer with an AS degree in Computer Science.</p>
    <br>
    <h1>Where am I?</h1>
    <p>Currently, I am attending Ball State University in Muncie, Indiana.</p>
    <br>
    <h1>What do I do?</h1>
    <p>
      I am currently pursuing a BS degree in Computer Science with a concentration
      in Game Design & Development. My anticipated graduation date is May 2024.
      I enjoy working on projects that interest me. I have experience with a 
      large variety of different technologies and languages. I am currently
      working on a few projects, including this website.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    useHead({
      title: 'Jeffrey Harmon - About'
    })
  },

  data() {
    return {
      birthday: new Date(2003, 7, 5), // August 5, 2003 (0-indexed month)
    }
  },

  computed: {
    age() {
      let diffMs = Date.now() - this.birthday.getTime();

      return Math.abs((new Date(diffMs)).getUTCFullYear() - 1970);
    }
  }
}
</script>

<style lang="scss" scoped>
.desc {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1em;
}

h1 {
  font-size: 2.5em;
  border-bottom: 2px solid var(--text-accent-color);
}

@media only screen and (max-width: 50em) {
  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
  }
}

p {
  font-size: 1.5em;
}

.about {
  width: min(80em, 80vw);
}

.right {
  text-align: right;
}
</style>
