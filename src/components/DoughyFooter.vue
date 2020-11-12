<template>
  <footer id="page-footer" class="pb-32">
    <div class="bg-gray-100">
      <div class="px-6 py-8 max-w-md mx-auto sm:max-w-xl lg:max-w-6xl sm:py-16 lg:px-12">
        <h3 class="text-xl font-bold text-gray-900 leading-tight sm:text-3xl">
          Need to talk to someone?
          <br class="hidden lg:inline" />
          <span class="text-indigo-500">
            <a class="underline" href="#">Email us</a> or <a class="underline" href="#">message us</a>.
          </span>
        </h3>
      </div>
    </div>

    <div class="flex flex-wrap px-6 py-8 max-w-md mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
      <ul class="d-footer-nav w-full md:w-1/3 md:mt-4 md:text-xl">
        <li>Workcation</li>
        <li>Rentals</li>
        <li>Beautiful</li>
        <li>Nice weather</li>
        <li>Work-friendly</li>
      </ul>

      <div class="hidden mt-12 md:block md:w-1/3">
        <img class="h-10 mx-auto" src="/images/hot-coffee.png" alt="Hot-coffee" />
      </div>

      <div class="w-full mt-6 md:w-1/3">
        <div class="flex justify-start md:justify-end">
          <a href="#" class="mr-3"><img class="h-8" src="/images/instagram.svg" alt="Instagram"/></a>
          <a href="#" class="mr-3"><img class="h-8" src="/images/facebook.svg" alt="Facebook"/></a>
          <a href="#" class=""><img class="h-8" src="/images/twitter.svg" alt="Twitter"/></a>
        </div>
      </div>

      <div class="mt-6 text-gray-600 md:text-center">Build by effort with coffee.</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'DoughyFooter'
};
</script>

<style lang="postcss">
.d-footer-nav {
  @apply text-gray-900;
}
.d-footer-nav li {
  @apply block mt-1;
}
</style>
