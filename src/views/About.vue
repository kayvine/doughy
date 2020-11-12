<template>
  <div id="about">
    <DoughyHeader />

    <main id="content">
      <div class="container py-10">
        <h1 class="text-3xl font-bold">About us</h1>
        <div class="mt-6 w-full lg:w-1/2 xl:w-1/3">This is an about page</div>
      </div>

      <DoughyFooter />
    </main>
  </div>
</template>

<script>
import DoughyHeader from '@/components/DoughyHeader.vue';
import DoughyFooter from '@/components/DoughyFooter.vue';

export default {
  name: 'About',
  components: {
    DoughyHeader,
    DoughyFooter
  }
};
</script>
