<script setup lang="ts">
import Browsers from "./components/Browsers.vue";
import Contactus from "./components/Contactus.vue";
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
    <Contactus />
  </div>
</template>

<style scoped></style>
