<template>
  <div class="flex items-center">
    <img
      class="h-20 w-20 rounded-full object-cover lg:w-24 lg:h-24"
      :src="product.imageUrl"
      :alt="product.title"
    />
    <div class="pl-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800 leading-tight">
        {{ product.title }}
        <span v-if="product.quantity > 1">({{ product.quantity }})</span>
      </h3>
      <!-- <p class="text-gray-600">€{{ product.price }}</p> -->
      <!-- <div class="mt-4">
        <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
          Explore {{ product.propertyCount }} properties
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
};
</script>
