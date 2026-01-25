<template>
  <section class="mt-20">
    <div
      class="flex flex-col justify-center items-center lg:flex-row-reverse lg:space-x-20"
    >
      <img
        class="lg:w-1/2 w-96 md:w-112"
        src="../../public/images/illustration-hero.svg"
        alt=""
      />

      <!-- content  -->
      <div
        class="flex flex-col justify-center items-center space-y-10 lg:w-1/2"
      >
        <h1
          class="text-3xl lg:text-5xl font-bold text-center xl:text-start xl:text-6xl"
        >
          A Simple Bookmark Manager
        </h1>
        <p
          class="text-lg lg:text-2xl text-cyan-400 text-center xl:text-start xl:w-lg w-sm"
        >
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div class="flex space-x-6">
          <button
            class="p-4 border-2 border-blue-600 bg-blue-600 text-white rounded-sm shadow-lg hover:bg-white hover:text-black font-medium"
          >
            Get it on Chrome
          </button>
          <button
            class="p-4 border-2 border-zinc-300 bg-zinc-300 text-black rounded-sm shadow-lg hover:bg-white font-medium"
          >
            Get it on Firefox
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
