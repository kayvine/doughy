<template>
  <div class="container py-12">
    <h2 class="text-xl text-gray-900">Popular destinations</h2>
    <p class="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
    <p>soup: size .5 liter / 1 liter</p>
    <p>sandwich / salade</p>
    <p>hot: croque: regular/veggie/with salade/ uit 't vuistje', quiche, scones</p>
    <p>slice of pie: apple, carrot, sweet scones</p>
    <p>whole pies</p>
    <p>Specials: afternoon tea, description, price</p>
    <p>Gift: €25 / €50</p>

    <div class="flex flex-wrap -mx-4">
      <div class="mt-6 lg:mt-10 w-full px-4 lg:w-1/2 xl:w-1/3" v-for="item in popularItems" :key="item.city">
        <DoughyItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DoughyItem from '@/components/shared/DoughyItem.vue';

export default {
  name: 'Order',
  components: {
    DoughyItem
  },
  data: () => ({
    popularItems: [
      {
        city: 'Toronto',
        averagePrice: 120,
        propertyCount: 76,
        imageUrl: '../images/cappucino.jpg',
        imageAlt: 'Toronto skyline'
      },
      {
        city: 'Malibu',
        averagePrice: 215,
        propertyCount: 43,
        imageUrl: '/images/latte.jpg',
        imageAlt: 'Cliff in Malibu'
      },
      {
        city: 'Chicago',
        averagePrice: 130,
        propertyCount: 115,
        imageUrl: '/images/coffee_black.jpg',
        imageAlt: 'Chicago skyline'
      },
      {
        city: 'Seattle',
        averagePrice: 135,
        propertyCount: 63,
        imageUrl: '../images/jasmine_tea.jpg',
        imageAlt: 'Seattle skyline'
      },
      {
        city: 'Colorado',
        averagePrice: 85,
        propertyCount: 47,
        imageUrl: '../images/black_tea.jpg',
        imageAlt: 'Lake in Colorado'
      }
    ]
  })
};
</script>
