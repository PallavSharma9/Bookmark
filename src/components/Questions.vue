<script setup lang="ts">
import { ref } from "vue";
import type { Questions } from "@/types";

const question = ref<Questions[]>([
  {
    title: "What is Bookmark?",
    current: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
  {
    title: "How can I request a new browser?",
    current: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
  {
    title: "Is ther a mobile app?",
    current: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
  {
    title: "What about other Chromium browsers",
    current: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
]);

const toggleQuestion = (index: number) => {
  question.value = question.value.map((q, i) => ({
    ...q,
    current: i === index ? !q.current : false,
  }));
};
</script>

<template>
  <div class="mt-24 flex flex-col justify-center items-center space-y-4">
    <h1 class="my-10 text-center text-3xl md:text-4xl lg:text-5xl font-bold">
      Frequently Asked Questions
    </h1>
    <p class="w-sm mb-8 text-center">
      Here are some of our FAQs. If you have any other questions you'd like
      answered please feel free to email us.
    </p>
    <div
      v-for="(ques, index) in question"
      :key="ques.title"
      class="w-full md:w-150 lg:w-200 flex flex-col py-3 border-b border-zinc-400 text-zinc-500"
    >
      <div
        @click="toggleQuestion(index)"
        class="flex justify-between w-full hover:text-orange-600"
      >
        <p class="font-medium">{{ ques.title }}</p>
        <i
          class="fa-solid fa-angle-down text-2xl transition transform duration-300"
          :class="{ 'rotate-180': ques.current }"
        ></i>
      </div>

      <div v-if="ques.current" class="mt-4">
        {{ ques.description }}
      </div>
    </div>
  </div>
</template>
