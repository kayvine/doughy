<template>
  <div class="home">
    <div class="flex">
      <div class="px-6 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
        <div class="xl:max-w-lg xl:ml-auto">
          <div class="flex items-center">
            <img class="h-10 mr-4" src="/img/hot-coffee.png" alt="Hot-coffee" />
            <span class="text-3xl text-indigo-500 leading-tight font-bold mt-3">Pastry Love!</span>
          </div>
          <img
            class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="/img/sandwich.jpg"
            alt="Woman workcationing on the beach"
          />
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere.
            <br class="hidden lg:inline" /><span class="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice
            weather even when you're not on vacation.
          </p>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 lg:relative">
        <img
          class="absolute inset-0 h-full w-full object-cover object-center"
          src="/img/sandwich.jpg"
          alt="Woman workcationing on the beach"
        />
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 class="text-xl text-gray-900">Popular destinations</h2>
        <p class="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div class="flex flex-wrap -mx-4">
          <div
            class="mt-6 lg:mt-10 w-full px-2 lg:px-4 lg:w-1/2 xl:w-1/3"
            v-for="item in popularItems"
            :key="item.city"
          >
            <DoughyCard :item="item" />
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 right-0 text-xl z-10 p-4">
      <router-link to="/order" class="btn btn-indigo rounded-full mt-3">Start an order</router-link>
    </div>
  </div>
</template>

<script>
import DoughyCard from '@/components/shared/DoughyCard.vue';

import store from '@/store';

export default {
  name: 'Home',
  components: {
    DoughyCard
  },
  data: () => ({
    popularItems: store.popularItems
  })
};
</script>
