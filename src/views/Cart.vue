<template>
  <div id="cart">
    <main id="content" class="md:bg-gray-100 h-screen">
      <div class="d-c-header flex flex-col bg-gray-800 text-white lg:fixed lg:inset-y-0 lg:left-0">
        <div class="w-full flex items-center px-2 pt-4 pb-2">
          <router-link to="/menu" class="text-md text-bold no-underline">
            <svg
              viewBox="0 0 24 24"
              class="inline-block align-middle fill-current text-white pr-1"
              aria-hidden="true"
              focusable="false"
              style="width: 24px; height: 24px; overflow: visible;"
            >
              <path
                d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z"
              ></path>
            </svg>
            <span class="hidden lg:inline-block">Back to menu</span>
          </router-link>
        </div>

        <div class="my-auto p-4 lg:px-16 lg">
          <h1 class="text-2xl font-semibold">Review Order ({{ numberOfProducts }})</h1>
          <p class="text-md text-indigo-200 mb-1">Small explanation here</p>
        </div>
      </div>

      <div class="d-c-content py-4 lg:p-4">
        <div v-if="numberOfProducts">
          <h2 class="hidden" tabindex="-1">Items</h2>
          <div class="mx-auto pb-48">
            <div
              v-for="(item, index) in cartProducts"
              :key="index"
              class="w-full flex flex-col bg-white p-4 border-b border-gray-300 md:border-none md:mb-5 md:shadow md:rounded"
            >
              <DoughyItem :product="item" />
              <p v-if="item.option" class="pl-6 pb-3 ml-20">{{ item.option }}</p>
              <span class="text-indigo-500 ml-auto pr-2 pb-3">
                <a @click="removeItem(item)" class="underline">remove</a>
              </span>
              <!-- <span>maybe add function to increase/decrease quantity</span> -->
            </div>
          </div>

          <span>
            <div class="fixed bottom-0 right-0 text-xl z-10 p-4">
              <a class="btn btn-indigo rounded-full mt-3 cursor-pointer">Continue</a>
            </div>
          </span>
        </div>

        <div v-else class="flex flex-col px-12 mt-6">
          <div class="text-2xl">Start your next order</div>
          <div class="mt-4">
            As you add menu items, they'll appear here. You'll have a chance to review before placing your
            order.
          </div>
          <div class="mb-10">
            <router-link
              to="/menu"
              class="btn small rounded-full text-indigo-500 bg-transparent border border-indigo-600 mt-6"
            >
              Add items
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import DoughyItem from '@/components/shared/DoughyItem.vue';

export default {
  name: 'Cart',
  components: {
    DoughyItem
  },
  computed: mapGetters('cart', ['cartProducts', 'numberOfProducts', 'cartTotalPrice']),
  methods: {
    productById(id) {
      console.log(id);
      console.log(store.getters.productById(id));
      return store.getters.productById(id);
    },
    removeItem(item) {
      store.dispatch('cart/removeFromCart', item);
      console.log(`${JSON.stringify(item)} removed`);
    }
  }
};
</script>

<style lang="postcss" scoped>
@media (min-width: 1024px) {
  .d-c-header {
    width: 40vw;
  }

  .d-c-content {
    margin-left: 40vw;
  }
}

@media (min-width: 768px) {
  .d-c-content > div {
    max-width: 600px;
  }
}
</style>
