<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="mt-24 py-24 flex flex-col justify-center items-center text-white bg-blue-600"
  >
    <p class="mb-10 text-lg font-medium">35,000+ ALREADY JOINED</p>
    <h1 class="mb-8 text-3xl font-bold md:text-4xl w-sm md:w-lg text-center">
      Stay up-to-date with what we're doing
    </h1>
    <input
      type="email"
      placeholder="Enter your email address"
      class="mb-6 outline-none bg-white px-6 py-4 font-medium rounded-xl text-zinc-500"
    />
    <RouterLink
      to="/"
      class="py-3 px-6 bg-orange-600 font-bold active:border-b-2 active:border-orange-700 rounded-xl"
      >Contact us</RouterLink
    >
  </div>
</template>
