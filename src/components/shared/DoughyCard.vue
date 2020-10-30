<template>
  <div class="rounded p-2">
    <img class="object-cover h-48 w-full rounded" :src="img" :alt="imgAlt" />
    <div class="mt-2">
      <div>
        <div class="text-xs text-gray-600 uppercase font-bold">{{ eyebrow }}</div>
        <div class="font-bold text-gray-700 leading-snug">
          <a :href="url" class="hover:underline">{{ title }}</a>
        </div>
        <div class="mt-2 text-sm text-gray-600">{{ pricing }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoughyCard',
  props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url']
};
</script>
