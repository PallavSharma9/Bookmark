<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <div class="px-4">
    <Navbar />
  </div>
  <RouterView />
  <Footer />
</template>

<style scoped></style>
