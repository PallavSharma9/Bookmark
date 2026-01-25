<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="mt-24 flex flex-col justify-center items-center">
    <h1 class="text-3xl font-bold">Download the extension</h1>
    <p class="mt-8 mb-24 text-zinc-600 max-w-lg text-center">
      We've got more browsers in the pipeline. Please do let us know if you've
      got a favourite you'd like us to priortize.
    </p>
    
    <!-- browsers  -->
     <div class="px-10 lg:px-16 flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row justify-center items-center w-full">
      <div class="rounded-xl shadow-xl bg-white flex flex-col justify-center items-center w-full md:1/2 lg:w-1/3  space-y-4">
        <img class="w-20 mt-8 mb-8" src="../../public/images/logo-chrome.svg"" alt="">
        <h2 class="text-xl font-bold">Add to Chrome</h2>
        <p class="text-zinc-500">Minimum Version 62</p>
        
        <!-- dots  -->
         <div class="border-b w-full border-zinc-400"></div>
         <RouterLink to="#" 
          class="w-2/3 my-4 py-3 px-auto mx-4 rounded-xl bg-blue-600 text-white font-medium border-2 border-blue-600 hover:bg-white hover:text-blue-600 text-center"
         >Add & Install Extension</RouterLink>
      </div>

      <div class="rounded-xl shadow-2xl bg-white flex flex-col justify-center items-center w-full lg:w-1/3 md:1/2 space-y-4">
        <img class="w-20 mt-8 mb-8" src="../../public/images/logo-firefox.svg" alt="">
        <h2 class="text-xl font-bold">Add to Firefox</h2>
        <p class="text-zinc-500">Minimum Version 55</p>
        
        <!-- dots  -->
         <div class="border-b w-full border-zinc-400"></div>
         <RouterLink to="#" 
          class="w-2/3 my-4 py-3 px-auto mx-4 rounded-xl bg-blue-600 text-white font-medium border-2 border-blue-600 hover:bg-white hover:text-blue-600 text-center"
         >Add & Install Extension</RouterLink>
      </div>

      <div class="rounded-xl shadow-2xl bg-white flex flex-col justify-center items-center w-full lg:w-1/3 md:1/2 space-y-4">
        <img class="w-20 mt-8 mb-8" src="../../public/images/logo-opera.svg" alt="">
        <h2 class="text-xl font-bold">Add to Opera</h2>
        <p class="text-zinc-500">Minimum Version 46</p>
        
        <!-- dots  -->
         <div class="border-b w-full border-zinc-400"></div>
         <RouterLink to="#" 
          class="w-2/3 my-4 py-3 px-auto mx-4 rounded-xl bg-blue-600 text-white font-medium border-2 border-blue-600 hover:bg-white hover:text-blue-600 text-center"
         >Add & Install Extension</RouterLink>
      </div>
     </div>
  </section>
</template>
