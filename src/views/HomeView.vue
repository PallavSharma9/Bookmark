<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Features from "@/components/Features.vue";
import Browsers from "@/components/Browsers.vue";
import Questions from "@/components/Questions.vue";
import Contactus from "@/components/Contactus.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="p-4">
    <Hero />
    <Features />
    <Browsers />
    <Questions />
  </div>
  <Contactus />
</template>
