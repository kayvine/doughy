<template>
  <div id="menu">
    <DoughyHeader />

    <main id="content" class="container pt-10 pb-20">
      <div class="px-2">
        <h1 class="text-3xl font-bold">Menu</h1>

        <div
          v-for="(products, category) in productsByCategory"
          :key="category.name"
          class="mt-4"
        >
          <h2 class="text-xl font-semibold leading-snug pb-4">
            {{ category | capitalize }}
          </h2>
          <hr class="pb-6 border-gray-300" />
          <div class="flex flex-wrap">
            <div
              v-for="product in products"
              :key="product.title"
              class="mb-6 px-1 w-full md:w-1/2"
            >
              <router-link
                :to="{
                  name: 'product-details',
                  params: { category: category, name: product.name },
                }"
              >
                <DoughyItem :product="product" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <ShoppingCart />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';
import DoughyHeader from '@/components/DoughyHeader.vue';
import DoughyItem from '@/components/shared/DoughyItem.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  name: 'MenuPage',
  components: {
    DoughyHeader,
    DoughyItem,
    ShoppingCart,
  },
  data: () => ({
    allProducts: store.state.products,
  }),
  computed: {
    productsByCategory() {
      return this.allProducts.reduce((acc, product) => {
        (acc[product.category] = acc[product.category] || []).push(product);
        return acc;
      }, {});
    },
  },
};
</script>
