<template>
  <div class="flex items-center">
    <img class="h-20 w-20 rounded-full object-cover" :src="item.imageUrl" :alt="item.title" />
    <div class="pl-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800 leading-tight">{{ item.title }}</h3>
      <!-- <p class="text-gray-600">€{{ item.price }}</p> -->
      <!-- <div class="mt-4">
        <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
          Explore {{ item.propertyCount }} properties
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
};
</script>
