<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const panel = ref("simple-bookmarking");
</script>

<template>
  <section>
    <h1 class="text-4xl text-center font-bold mb-8">Features</h1>
    <p class="font-medium text-zinc-400 w-sm text-center mx-auto mb-10">
      Our aim is to make it quick ad easy for you to access your favourite
      websites. Your bookmarks sync between your devices so you can access them
      on the go.
    </p>

    <div
      class="flex flex-col md:flex-row justify-center items-center font-medium"
    >
      <button
        @click="panel = 'simple-bookmarking'"
        class="group border-b w-full border-zinc-300"
      >
        <div
          :class="[
            'py-5 hover:text-orange-600 text-gray-700 inline-block',
            panel === 'simple-bookmarking'
              ? 'border-b-4 border-orange-700'
              : '',
          ]"
        >
          Simple Bookmarking
        </div>
      </button>
      <button
        @click="panel = 'speedy-searching'"
        class="group w-full border-b border-zinc-300"
      >
        <div
          :class="[
            'inline-block py-5 hover:text-orange-600 text-gray-700',
            panel === 'speedy-searching' ? 'border-b-4 border-orange-700' : '',
          ]"
        >
          Speedy Searching
        </div>
      </button>
      <button
        @click="panel = 'easy-sharing'"
        class="group w-full border-b border-zinc-300"
      >
        <div
          :class="[
            'py-5 hover:text-orange-600 inline-block text-gray-700',
            panel === 'easy-sharing' ? 'border-b-4 border-orange-700' : '',
          ]"
        >
          Easy Sharing
        </div>
      </button>
    </div>

    <!-- panel selection section  -->
    <div
      v-if="panel === 'simple-bookmarking'"
      class="mt-12 flex flex-col justify-center items-center space-y-18 lg:space-y-0 lg:space-x-8 lg:flex-row lg:items-start lg:justify-start"
    >
      <div class="lg:w-1/2">
        <img
          src="../../public/images/illustration-features-tab-1.svg"
          class="mx-auto lg:mr-0"
          alt=""
        />
      </div>

      <div
        class="flex flex-col justify-center items-center space-y-8 lg:w-1/2 lg:items-start lg:justify-start"
      >
        <h1 class="text-3xl lg:text-4xl font-bold">Bookmark in one click</h1>
        <p class="text-gray-500 w-sm">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <RouterLink
          to="/"
          class="px-6 py-2 rounded-lg shadow-lg border-2 border-blue-600 bg-blue-600 text-white font-bold hover:bg-white hover:text-blue-600 lg:mt-8"
          >More Info</RouterLink
        >
      </div>
    </div>

    <div
      v-if="panel === 'speedy-searching'"
      class="mt-12 flex flex-col justify-center items-center space-y-18 lg:space-y-0 lg:space-x-8 lg:flex-row lg:items-start lg:justify-start"
    >
      <div class="lg:w-1/2">
        <img
          src="../../public/images/illustration-features-tab-2.svg"
          class="mx-auto lg:mr-0"
          alt=""
        />
      </div>

      <div
        class="flex flex-col justify-center items-center space-y-8 lg:w-1/2 lg:items-start lg:justify-start"
      >
        <h1 class="text-3xl lg:text-4xl font-bold">Intelligent search</h1>
        <p class="text-gray-500 w-sm">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <RouterLink
          to="/"
          class="px-6 py-2 rounded-lg shadow-lg border-2 border-blue-600 bg-blue-600 text-white font-bold hover:bg-white hover:text-blue-600 lg:mt-8"
          >More Info</RouterLink
        >
      </div>
    </div>

    <div
      v-if="panel === 'easy-sharing'"
      class="mt-12 flex flex-col justify-center items-center space-y-18 lg:space-y-0 lg:space-x-8 lg:flex-row lg:items-start lg:justify-start"
    >
      <div class="lg:w-1/2">
        <img
          src="../../public/images/illustration-features-tab-3.svg"
          class="mx-auto lg:mr-0"
          alt=""
        />
      </div>

      <div
        class="flex flex-col justify-center items-center space-y-8 lg:w-1/2 lg:items-start lg:justify-start"
      >
        <h1 class="text-3xl lg:text-4xl font-bold">Share your bookmarks</h1>
        <p class="text-gray-500 w-sm">
          Easily share your bookmarks and collections with others. Create a
          shareable a link that you can send at the click of a button.
        </p>
        <RouterLink
          to="/"
          class="px-6 py-2 rounded-lg shadow-lg border-2 border-blue-600 bg-blue-600 text-white font-bold hover:bg-white hover:text-blue-600 lg:mt-8"
          >More Info</RouterLink
        >
      </div>
    </div>
  </section>
</template>
