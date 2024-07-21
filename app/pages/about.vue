<template>
  <div class="about">
    <h1>Who am I?</h1>
    <p>
      Hi! My name is Jeffrey Harmon. I am a software engineer who just recently
      graduated from Ball State University with a Bachelor of Science in
      Computer Science in May 2024. I am also an Eagle Scout!
    </p>
    <br />
    <h1>Where am I?</h1>
    <p>
      Starting August 2024, I will be working with the
      <a href="https://www.bsu.edu/academics/collegesanddepartments/cics"
        >Center for Information and Communication Sciences</a
      >
      (CICS) at Ball State University in Muncie, Indiana as a Graduate
      Assistant. I am pursuing a Master of Science in Information and
      Communication Sciences, with an anticipated graduation date of July 2025.
    </p>
    <br />
    <h1>What do I do?</h1>
    <p>
      I make stuff! I love learning new things, which has led me to develop
      skills in a variety of areas. Software development is my primary focus,
      but I also enjoy working with hardware and electronics. I have recently
      been working on my homelab, all running on NixOS for reproducibility and
      ease of management (configuration is all stored in
      <a href="https://github.com/squarepear/nixos-configs">a git repository</a
      >!).
    </p>
    <p>
      I have experience with web development, game development, and backend
      development. I would consider myself proficient in JavaScript, TypeScript,
      C++, Python, and GDScript (Godot Engine's scripting language). I am also
      familiar with Java, C#, and Rust.
    </p>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'About',
})
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
