<template>
  <div class="flex items-center">
    <img
      class="h-20 w-20 rounded-full object-cover lg:w-32 lg:h-32"
      :src="product.imageUrl"
      :alt="product.title"
    />
    <div class="pl-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800 leading-tight">
        {{ product.title }}
        <span v-if="product.quantity > 1">({{ product.quantity }})</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoughyItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
