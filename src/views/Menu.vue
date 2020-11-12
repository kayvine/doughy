<template>
  <div id="menu">
    <DoughyHeader />

    <main id="content" class="container py-10">
      <h1 class="text-3xl font-bold">Order</h1>

      <!-- <p>soup: size .5 liter / 1 liter</p>
    <p>sandwich / salade</p>
    <p>hot: croque: regular/veggie/with salade/ uit 't vuistje', quiche, scones</p>
    <p>slice of pie: apple, carrot, sweet scones</p>
    <p>whole pies</p>
    <p>Specials: afternoon tea, description, price</p>
    <p>Gift: €25 / €50</p> -->

      <div class="mt-4" v-for="(products, category) in byCategory" :key="category.name">
        <h3 class="text-xl font-semibold leading-snug pb-4">{{ category | capitalize }}</h3>
        <hr class="pb-6 border-gray-300" />
        <div class="flex flex-wrap">
          <div class="mb-6 px-1 w-full lg:w-1/2 xl:w-1/3" v-for="product in products" :key="product.title">
            <router-link
              :to="{
                name: 'product-details',
                params: { category: category, name: product.name }
              }"
            >
              <DoughyItem :product="product" />
            </router-link>
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
  name: 'Order',
  components: {
    DoughyHeader,
    DoughyItem,
    ShoppingCart
  },
  data: () => ({
    products: store.state.products
  }),
  computed: {
    byCategory() {
      return this.products.reduce((acc, product) => {
        (acc[product.category] = acc[product.category] || []).push(product);
        return acc;
      }, {});
    }
  }
};
</script>
