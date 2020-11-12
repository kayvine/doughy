<template>
  <div id="gift">
    <DoughyHeader />

    <main id="content">
      <div class="container py-10">
        <h1 class="text-3xl font-bold">Gift cards</h1>
        <div class="mt-6 w-full lg:w-1/2 xl:w-1/3">Buy gift cards here</div>
      </div>
    </main>
  </div>
</template>

<script>
import DoughyHeader from '@/components/DoughyHeader.vue';
export default {
  name: 'Gift',
  components: {
    DoughyHeader
  }
};
</script>
