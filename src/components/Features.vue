<script setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import type { PanelId, FeaturePanel } from "@/types";

const panel = ref<PanelId>("simple-bookmarking");

const panels: FeaturePanel[] = [
  {
    id: "simple-bookmarking",
    label: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/images/illustration-features-tab-1.svg",
  },
  {
    id: "speedy-searching",
    label: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/images/illustration-features-tab-2.svg",
  },
  {
    id: "easy-sharing",
    label: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/images/illustration-features-tab-3.svg",
  },
];

const selectedPanel = computed<FeaturePanel>(() => {
  return panels.find((p) => p.id === panel.value)!;
});
</script>

<template>
  <section>
    <h1 class="mt-10 text-4xl text-center font-bold mb-8">Features</h1>
    <p class="font-medium text-zinc-400 w-sm text-center mx-auto mb-10">
      Our aim is to make it quick ad easy for you to access your favourite
      websites. Your bookmarks sync between your devices so you can access them
      on the go.
    </p>

    <div
      role="tablist"
      class="flex flex-col md:flex-row justify-center items-center font-medium"
    >
      <button
        role="tab"
        v-for="tab in panels"
        :key="tab.id"
        :aria-selected="panel === tab.id"
        @click="panel = tab.id"
        class="group border-b w-full border-zinc-300"
      >
        <div
          :class="[
            'py-5 hover:text-orange-600 text-gray-700 inline-block',
            panel === tab.id ? 'border-b-4 border-orange-700' : '',
          ]"
        >
          {{ tab.label }}
        </div>
      </button>
    </div>

    <!-- Active Panel  -->
    <div
      class="mt-12 flex flex-col justify-center items-center space-y-18 lg:space-y-0 lg:space-x-8 lg:flex-row lg:items-start lg:justify-start"
    >
      <div class="lg:w-1/2">
        <img :src="selectedPanel.image" class="mx-auto lg:mr-0" alt="" />
      </div>

      <div
        class="flex flex-col justify-center items-center space-y-8 lg:w-1/2 lg:items-start lg:justify-start"
      >
        <h1 class="text-3xl lg:text-4xl font-bold">
          {{ selectedPanel.title }}
        </h1>
        <p class="text-gray-500 w-sm">
          {{ selectedPanel.description }}
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
