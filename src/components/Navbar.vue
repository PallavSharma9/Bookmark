<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="flex justify-between items-center">
    <!-- Logo  -->
    <img src="../../public/images/logo-bookmark.svg" alt="logo" />

    <button class="text-2xl md:hidden z-50" @click="toggleMenu">
      <i v-if="!isOpen" class="fa-solid fa-bars"></i>
      <i v-else class="fa-solid fa-xmark"></i>
    </button>

    <!-- Desktop Menu  -->
    <div
      class="hidden md:flex space-x-10 uppercase text-grayishBlue text-lg tracking-widest"
    >
      <RouterLink to="/features" class="hover:text-orange-700 text-center"
        >Features</RouterLink
      >
      <RouterLink to="/features" class="hover:text-orange-700"
        >downloads</RouterLink
      >
      <RouterLink to="/features" class="hover:text-orange-700">faq</RouterLink>
      <RouterLink to="/features" class="hover:text-orange-700"
        >Login</RouterLink
      >
    </div>

    <!-- Mobile Menu Overlay  -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-white/80 flex flex-col items-center justify-center space-y-10 uppercase tracking-widest md:hidden text-xl"
    >
      <RouterLink
        class="hover:text-2xl hover:text-orange-600"
        @click="isOpen = false"
        to="/features"
        >Features</RouterLink
      >
      <RouterLink
        class="hover:text-2xl hover:text-orange-600"
        @click="isOpen = false"
        to="/downloads"
        >Downloads</RouterLink
      >
      <RouterLink
        class="hover:text-2xl hover:text-orange-600"
        @click="isOpen = false"
        to="/faq"
        >FAQ</RouterLink
      >
      <RouterLink
        class="border border-orange-600 text-orange-600 px-4 py-2 rounded-lg shadow-orange-900 shadow-xl hover:text-2xl hover:text-white hover:bg-orange-600"
        @click="isOpen = false"
        to="/login"
        >Login</RouterLink
      >
    </div>
  </div>
</template>
