<template>
  <div id="app" class="antialiased">
    <DoughyHeader />

    <main id="content">
      <router-view />
    </main>

    <footer id="page-footer">
      <div class="bg-gray-100">
        <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 py-12 sm:py-16 lg:px-12">
          <h3 class="text-xl font-bold text-gray-900 leading-tight sm:text-3xl">
            Need to talk to someone?
            <br class="hidden lg:inline" />
            <span class="text-indigo-500">
              <a class="d-link" href="#">Email us</a> or <a class="d-link" href="#">Message us</a>.
            </span>
          </h3>
        </div>
      </div>

      <div class="flex">
        <div class="container py-6">
          <img class="h-10 mx-auto" src="/img/hot-coffee.png" alt="Hot-coffee" />

          <ul class="d-footer-nav sm:mt-4 sm:text-xl">
            <li>Workcation</li>
            <li>Rentals</li>
            <li>Beautiful</li>
            <li>Nice weather</li>
            <li>Vacation</li>
            <li>Work-friendly</li>
          </ul>
          <div class="flex w-full sm:w-1/3 mt-4 sm:mt-6">
            <div class="mx-auto sm:mx-px">
              <a href="#" class="mx-2">Instant</a>
              <a href="#" class="mx-2">Grandma</a>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-sm text-center">Build by effort with coffee.</div>
    </footer>
  </div>
</template>

<script>
import DoughyHeader from '@/components/DoughyHeader.vue';

export default {
  name: 'App',
  components: {
    DoughyHeader
  },
  data: () => ({
    ordering: false
  }),
  methods: {
    startOrder() {
      this.ordering = true;
    }
  }
};
</script>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer base {
  /* @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Playfair+Display&display=swap');
}

@layer components {
  .btn {
    @apply inline-block px-5 py-3 rounded tracking-wider font-semibold;
  }

  .btn:focus {
    @apply outline-none shadow-outline;
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

  .d-link {
    @apply underline;
  }
}

#app {
  @apply font-body text-gray-900 max-w-full;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content {
  position: relative;
  z-index: 1;
}

@layer utilities {
  @variants hover, focus {
    .filter-none {
      filter: none;
    }
    .filter-grayscale {
      filter: grayscale(100%);
    }
  }
}

.d-footer-nav {
  @apply flex flex-wrap mt-2 text-gray-900;
}
.d-footer-nav li {
  @apply inline-block mr-2;
}
</style>
