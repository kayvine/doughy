<template>
  <div v-if="item">
    <img class="w-full max-h-full object-cover object-center" :src="item.imageUrl" :alt="item.title" />

    <div class="container py-8">
      <div class="text-gray-600 text-sm tracking-wide pb-4">
        <router-link to="/menu">Menu</router-link>
        <span aria-hidden="true"> / </span>
        {{ category | capitalize }}
        <span aria-hidden="true"> / </span>
        {{ item.title }}
      </div>

      <h2 class="text-3xl font-semibold leading-snug pb-4">{{ item.title }}</h2>

      <div v-if="item.options" class="mb-4">
        <label class="block tracking-wide text-gray-600 text-sm mb-px" for="options">Choose</label>
        <select class="w-full border-b border-gray-300 py-2" id="options">
          <option v-for="(option, index) in item.options" :key="option.title" :value="index">
            <span>{{ option.title }}</span>
            <span> &mdash; €{{ option.price }}</span>
          </option>
        </select>
      </div>

      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Size
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value="1">Choose …</option>
            <option value="2">Missouri</option>
            <option value="3">Texas</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 right-0 text-xl z-10 p-4">
      <a class="btn btn-indigo rounded-full mt-3" @click.stop="addToOrder()">Add to order</a>
    </div>
  </div>

  <div v-else>Product not found</div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Product',
  // props: ['category', 'name'],
  // beforeRouteUpdate(to, from, next) {
  // react to route changes...
  // don't forget to call next()
  // }
  computed: {
    category() {
      return this.$route.params.category;
    },
    name() {
      return this.$route.params.name;
    }
  },
  methods: {
    addToOrder() {}
  },
  created() {
    this.item = store.getters.productByName(this.category, this.name);
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
