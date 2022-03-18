<template>
  <div id="home">
    <DoughyHeader />

    <main id="content">
      <div class="flex">
        <div class="px-6 py-8 max-w-md mx-auto sm:max-w-2xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div class="xl:max-w-lg xl:ml-auto">
            <div class="flex items-center">
              <img class="h-10 mr-4" src="/images/hot-coffee.png" alt="Hot-coffee" />
              <span class="text-3xl text-indigo-500 leading-tight font-bold mt-3">Pastry Love!</span>
            </div>
            <img
              class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="/images/carrot-cake.jpg"
              alt="Lovely Carrot Cake"
            />
            <h1
              class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl sm:leading-tight lg:text-3xl lg:leading-tight"
            >
              You can work from anywhere.
              <br class="hidden lg:inline" /><span class="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p class="mt-2 text-gray-500 sm:mt-4 sm:text-xl sm:leading-normal">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
              nice weather even when you're not on vacation.
            </p>
          </div>
        </div>
        <div class="hidden lg:block lg:w-1/2 lg:relative">
          <img
            class="absolute inset-0 h-full w-full object-cover object-center"
            src="/images/carrot-cake.jpg"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="px-6 py-8 max-w-md mx-auto sm:max-w-2xl lg:max-w-6xl lg:px-12">
          <h2 class="text-xl leading-normal text-gray-900">Popular destinations</h2>
          <p class="text-gray-500">A selection of great work-friendly cities with lots to see and explore.</p>
          <div class="grid-cols-none sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="mt-8" v-for="item in popularItems" :key="item.name">
              <DoughyCard
                :img="item.imageUrl"
                :imgAlt="item.imageAlt"
                :title="item.name"
                :description="item.description"
                :url="item.url"
              />
            </div>
          </div>
        </div>
      </div>

      <DoughyFooter />

      <div class="fixed bottom-0 right-0 text-xl z-10 p-4">
        <router-link to="/menu" class="btn btn-indigo rounded-full mt-3">Start an order</router-link>
      </div>
    </main>
  </div>
</template>

<script>
import DoughyHeader from '@/components/DoughyHeader.vue';
import DoughyFooter from '@/components/DoughyFooter.vue';
import DoughyCard from '@/components/shared/DoughyCard.vue';
import store from '@/store';

export default {
  name: 'Home',
  components: {
    DoughyHeader,
    DoughyFooter,
    DoughyCard,
  },
  data: () => ({
    popularItems: store.state.popularItems,
  }),
};
</script>
