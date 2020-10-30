<template>
  <div class="flex items-center">
    <img class="h-24 w-24 rounded-full object-cover" :src="item.imageUrl" :alt="item.imageAlt" />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ item.city }}</h3>
      <p class="text-gray-600">${{ item.averagePrice }} / night average</p>
      <div class="mt-4">
        <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
          Explore {{ item.propertyCount }} properties
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
};
</script>
