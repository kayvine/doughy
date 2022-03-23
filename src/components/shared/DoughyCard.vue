<template>
  <div class="bg-white rounded overflow-hidden shadow-md">
    <img class="object-cover h-48 w-full" :src="img" :alt="imgAlt" />
    <div
      class="flex flex-col justify-between px-6 py-4"
      style="min-height: 12rem"
    >
      <!-- <div class="font-bold text-gray-700 leading-snug">
        <a :href="url" class="hover:underline">{{ title }}</a>
      </div> -->
      <h3 class="font-bold text-xl leading-tight mb-2">{{ title }}</h3>
      <p class="text-gray-700">{{ description }}</p>
      <div class="mt-4">
        <a :href="url" class="btn btn-gray rounded-full px-3 py-1 text-sm"
          >See more</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoughyCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
  },
};
</script>
