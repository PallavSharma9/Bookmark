<script setup lang="ts">
import Browsers from "./components/Browsers.vue";
import Features from "./components/Features.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Questions from "./components/Questions.vue";
</script>

<template>
  <div class="p-4">
    <Navbar />
    <Hero />
    <Features />
    <Browsers />
    <Questions />
  </div>
</template>

<style scoped></style>
