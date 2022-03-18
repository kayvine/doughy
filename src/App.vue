<template>
  <div id="app" class="antialiased">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Playfair+Display&display=swap');

@layer components {
  .btn {
    @apply inline-block px-5 py-3 rounded tracking-wider font-semibold;
  }

  .btn:focus {
    @apply outline-none;
  }

  .btn.small {
    @apply px-4 py-2 text-sm;
  }

  .btn-indigo {
    @apply bg-indigo-500 text-white;
  }
  .btn-indigo:hover {
    @apply bg-indigo-400;
  }
  .btn-indigo:active {
    @apply bg-indigo-600;
  }

  .btn-gray {
    @apply bg-gray-800 text-white border border-gray-800;
  }
  .btn-gray:hover {
    @apply bg-gray-700;
  }
  .btn-gray:active {
    @apply bg-gray-900;
  }

  .btn-outline {
    @apply bg-white border border-gray-900;
  }
  .btn-outline:hover {
    @apply bg-gray-200;
  }
  .btn-outline:active {
    @apply bg-gray-100;
  }

  .btn-green {
    @apply bg-green-500 text-white;
  }
  .btn-green:hover {
    @apply bg-green-400;
  }
  .btn-green:active {
    @apply bg-green-600;
  }
}

#app {
  @apply font-body text-gray-900;
}

#content {
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .d-c-header {
    width: 40vw;
  }

  .d-c-content {
    margin-left: 40vw;
  }
}

@media (min-width: 768px) {
  .d-c-content > .maxWidth {
    max-width: 600px;
  }
}

@layer utilities {
  .absoluteCenter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hiddenVisually {
    position: absolute !important;
    overflow: hidden !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
  }

  .z-1 {
    z-index: 1;
  }

  .filter-none {
    filter: none;
  }
  .filter-grayscale {
    filter: grayscale(100%);
  }
}
</style>
