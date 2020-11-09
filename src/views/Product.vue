<template>
  <div id="product-page">
    <div v-if="item" class="pb-32">
      <img class="w-full max-h-full object-cover object-center" :src="item.imageUrl" :alt="item.title" />

      <div class="container py-8">
        <div class="text-gray-600 text-sm tracking-wide pb-4">
          <router-link to="/menu">Menu</router-link>
          <span aria-hidden="true"> / </span>
          {{ item.category | capitalize }}
          <span aria-hidden="true"> / </span>
          {{ item.title }}
        </div>

        <h2 class="text-3xl font-semibold leading-snug pb-4">{{ item.title }}</h2>

        <div v-if="item.options" class="w-full md:w-1/3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-px" for="options">
            Size
          </label>
          <div class="relative mb-3">
            <select
              v-model="selected"
              @change="onChange($event)"
              id="options"
              class="block appearance-none w-full border-b border-gray-300 text-gray-700 py-2 px-px pr-8 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              :class="[optionError ? 'border-red-500' : 'border-gray-300']"
            >
              <option disabled value="">Please select one</option>
              <option v-for="option in item.options" :key="option.title" :value="option">
                {{ option.title }} &mdash; €{{ option.price }}
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <p v-if="optionError" class="text-red-500 text-xs italic">Please select an option</p>
        </div>
      </div>

      <div :class="{ hasCart: hasProducts }" class="fixed bottom-0 right-0 text-xl z-10 p-4">
        <a
          class="btn btn-indigo rounded-full mt-3"
          @click.stop="addProductToCart({ id: item.id, option: selected })"
        >
          Add to order
        </a>
      </div>
    </div>

    <div v-else>Product not found</div>

    <ShoppingCart v-show="hasProducts" :length="numberOfProducts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  name: 'Product',
  // props: ['item'],
  // beforeRouteUpdate(to, from, next) {
  // react to route changes...
  // don't forget to call next()
  // }
  components: {
    ShoppingCart
  },
  data: () => ({
    selected: '',
    optionError: false
  }),
  computed: {
    name() {
      return this.$route.params.name;
    },
    item() {
      return store.getters.productByName(this.name);
    },
    hasProducts() {
      return this.numberOfProducts !== 0;
    },
    ...mapGetters({
      numberOfProducts: 'cart/numberOfProducts'
    })
  },
  methods: {
    onChange(event) {
      if (event.target.value) this.optionError = false;
    },
    addProductToCart(item) {
      if (!item.option) {
        this.optionError = true;
      } else {
        this.optionError = false;
        store.dispatch('cart/addProductToCart', item);
      }
    }
    // mapActions('cart', ['addProductToCart'])
  },
  created() {
    // this.item = store.getters.productByName(this.name);
  }
};
</script>

<style lang="postcss">
.hasCart {
  bottom: 60px !important;
}
</style>
