<template>
  <div class="container py-10">
    <h1 class="text-3xl font-bold">Order</h1>

    <!-- <p>soup: size .5 liter / 1 liter</p>
    <p>sandwich / salade</p>
    <p>hot: croque: regular/veggie/with salade/ uit 't vuistje', quiche, scones</p>
    <p>slice of pie: apple, carrot, sweet scones</p>
    <p>whole pies</p>
    <p>Specials: afternoon tea, description, price</p>
    <p>Gift: €25 / €50</p> -->

    <div class="mt-4" v-for="category in menu" :key="category.name">
      <h3 class="text-xl font-semibold leading-snug pb-4">{{ category.title }}</h3>
      <hr class="pb-6 border-gray-300" />
      <div class="flex flex-wrap">
        <div class="mb-6 px-1 w-full lg:w-1/2 xl:w-1/3" v-for="item in category.items" :key="item.title">
          <router-link
            :to="{
              name: 'product-details',
              params: { category: category.name, name: item.name }
            }"
          >
            <DoughyItem :item="item" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DoughyItem from '@/components/shared/DoughyItem.vue';
import store from '@/store';

export default {
  name: 'Order',
  components: {
    DoughyItem
  },
  data: () => ({
    menu: store.state.menu
  })
};
</script>
