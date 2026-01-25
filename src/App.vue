<script setup lang="ts">
import Browsers from "./components/Browsers.vue";
import Features from "./components/Features.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="p-4">
    <Navbar />
    <Hero />
    <Features />
    <Browsers />
  </div>
</template>

<style scoped></style>
