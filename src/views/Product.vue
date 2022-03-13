<template>
  <div id="product-page">
    <DoughyHeader />

    <main id="content">
      <div v-if="product" class="pb-32">
        <img
          class="w-full max-h-full object-cover object-center sm:hidden"
          :src="product.imageUrl"
          :alt="product.title"
        />

        <div class="px-6 py-8 grid sm:grid-cols-2 gap-6 lg:gap-12 mx-auto lg:max-w-5xl">
          <div class="hidden sm:block w-full md:max-w-md md:ml-auto">
            <img class="w-full rounded-full shadow-xl" :src="product.imageUrl" :alt="product.title" />
          </div>
          <div class="mt-4 md:mt-16">
            <div class="text-gray-600 text-sm tracking-wide pb-4">
              <router-link to="/menu">Menu</router-link>
              <span aria-hidden="true"> / </span>
              {{ product.category | capitalize }}
              <span aria-hidden="true"> / </span>
              {{ product.title }}
            </div>

            <h2 class="text-3xl font-semibold leading-snug pb-4">{{ product.title }}</h2>

            <div v-if="product.options" class="w-full mb-6">
              <label
                class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-px"
                for="options"
              >
                Size
              </label>
              <div class="relative mb-3">
                <select
                  v-model="selected"
                  @change="onChange($event)"
                  id="options"
                  class="block appearance-none bg-white w-full border-b border-gray-300 text-gray-700 py-2 px-px pr-8 focus:outline-none focus:border-indigo-500"
                  :class="[optionError ? 'border-red-500' : 'border-gray-300']"
                >
                  <option disabled value="">Please select one</option>
                  <option v-for="option in product.options" :key="option.title" :value="option">
                    {{ option.title | capitalize }} &mdash; €{{ option.price }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <p v-if="optionError" class="text-red-500 text-xs italic">Please select an option</p>
            </div>
          </div>
        </div>

        <div :class="{ hasCart: numberOfProducts }" class="fixed bottom-0 right-0 text-xl z-10 p-4 lg:p-8">
          <a
            class="btn btn-indigo rounded-full mt-3 cursor-pointer transition duration-300"
            :class="{ 'transform -translate-y-12': itemAdded }"
            @click.stop="addProductToCart({ id: product.id, option: selected })"
          >
            Add to order
          </a>
        </div>
      </div>

      <div v-else class="container py-8">
        <p class="text-lg">Product not found</p>
      </div>

      <ShoppingCart :slideActive="itemAdded" :item="selection" @dismiss="dismissAlert" />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import DoughyHeader from '@/components/DoughyHeader.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  name: 'Product',
  // props: ['item'],
  // beforeRouteUpdate(to, from, next) {
  // react to route changes...
  // don't forget to call next()
  // }
  components: {
    DoughyHeader,
    ShoppingCart
  },
  data: () => ({
    selected: '',
    itemAdded: false,
    selection: '',
    optionError: false
  }),
  computed: {
    name() {
      return this.$route.params.name;
    },
    product() {
      return store.getters.productByName(this.name);
    },
    ...mapGetters({
      numberOfProducts: 'cart/numberOfProducts'
    })
  },
  methods: {
    onChange(event) {
      if (event.target.value) this.optionError = false;
    },
    dismissAlert() {
      this.itemAdded = false;
    },
    addProductToCart(item) {
      if (this.product.options && !item.option) {
        this.optionError = true;
      } else {
        this.optionError = false;
        store.dispatch('cart/addProductToCart', item);
        this.selection = `${this.product.title} ${item.option ? ' ' + item.option.title : ''}`;
        this.itemAdded = true;
        setTimeout(() => (this.itemAdded = false), 3000);
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
