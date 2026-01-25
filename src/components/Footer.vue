<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-center items-center py-20 space-y-12 md:space-y-0 md:justify-evenly bg-black"
  >
    <img src="../../public/images/logo-bookmark-footer.svg" alt="logo" />
    <RouterLink
      to="/"
      class="text-lg font-medium text-zinc-300 hover:text-orange-600"
      >FEATURES</RouterLink
    >
    <RouterLink
      to="/"
      class="text-lg font-medium text-zinc-300 hover:text-orange-600"
      >Download</RouterLink
    >
    <RouterLink
      to="/"
      class="text-lg font-medium text-zinc-300 hover:text-orange-600"
      >FAQ</RouterLink
    >
    <div class="flex space-x-10">
      <img
        src="../../public/images/icon-facebook.svg"
        alt=""
        class="hover:text-orange-600"
      />
      <img
        src="../../public/images/icon-twitter.svg"
        alt=""
        class="hover:text-orange-600"
      />
    </div>
  </div>
</template>
