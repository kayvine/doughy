<template>
  <div class="bg-white rounded overflow-hidden shadow-md">
    <img class="object-cover h-48 w-full" :src="img" :alt="imgAlt" />
    <div class="px-6 py-4">
      <!-- <div class="font-bold text-gray-700 leading-snug">
        <a :href="url" class="hover:underline">{{ title }}</a>
      </div> -->
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base h-20">{{ description }}</p>
      <div class="mt-4">
        <a :href="url" class="btn btn-gray rounded-full px-3 py-1 text-sm">See more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoughyCard',
  props: ['img', 'imgAlt', 'title', 'description', 'url']
};
</script>
