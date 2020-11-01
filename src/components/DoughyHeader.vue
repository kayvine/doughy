<template>
  <header class="relative shadow z-20" :class="{ 'pb-16': drawer }">
    <nav id="nav">
      <div class="md:container flex items-center w-screen h-16 bg-white p-2" :class="{ fixed: drawer }">
        <a @click.stop="goToPage('/')" class="text-lg font-bold uppercase text-gray-900 pl-2 mr-2">
          <span>Doughy</span><span class="text-indigo-500">PWA</span>
        </a>
        <div class="flex flex-grow items-baseline">
          <div class="hidden md:inline-block flex-shrink-0">
            <ul class="dt">
              <li
                class="inline-block text-sm font-bold uppercase tracking-wider px-4 py-2"
                v-for="item in navItems"
                :key="item.title"
              >
                <router-link :to="item.link">{{ item.title }}</router-link>
              </li>
            </ul>
          </div>
          <div class="ml-auto hidden md:inline-block flex-shrink-0">
            <a href="" class="btn small btn-outline rounded-full mr-2">Sign in</a>
            <a href="" class="btn small btn-gray rounded-full mr-2">Join now</a>
          </div>
        </div>
        <div class="ml-auto md:hidden">
          <button
            class="d-nav-burger relative inline-block p-2"
            :class="{ 'is-active': drawer }"
            type="button"
            @click.stop="drawer = !drawer"
          >
            <span class="d-nav-burger-bar"></span>
            <span class="d-nav-burger-bar"></span>
            <span class="d-nav-burger-bar"></span>
          </button>
        </div>
      </div>

      <span>
        <div
          v-if="drawer"
          @click="drawer = false"
          class="d-mask fixed inset-0 pointer-events-auto bg-black bg-opacity-25"
        ></div>
      </span>

      <div class="d-nav-drawer" :class="drawer ? 'open' : 'closed'">
        <div class="flex flex-col mt-4">
          <ul>
            <li class="text-lg px-8 py-4" v-for="item in navItems" :key="item.title">
              <a @click.stop="goToPage(item.link)">{{ item.title }}</a>
            </li>
          </ul>
          <hr class="m-4" />
          <div class="block px-4">
            <a href="" class="btn small btn-outline rounded-full mr-2">Sign in</a>
            <a href="" class="btn small btn-gray rounded-full mr-2">Join now</a>
          </div>
        </div>
        <div class="block p-4 text-sm">
          <span>Privacy Statement</span><span class="ml-2 pl-2 border-l">Terms of Use</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DoughyHeader',
  data: () => ({
    drawer: false,
    navItems: [
      { title: 'Order', link: '/order' },
      { title: 'Menu', link: '/menu' },
      { title: 'Gift', link: '/gift' }
    ]
  }),
  methods: {
    goToPage(path) {
      if (this.drawer) this.drawer = false;
      if (this.$route.path !== path) {
        this.$router.push({ path });
      }
    }
  }
};
</script>

<style lang="postcss">
#nav .dt a.router-link-exact-active {
  @apply text-indigo-500;
}

.d-nav-burger {
  width: 34px;
  height: 34px;
  text-align: initial;
  background-color: transparent;
}
.d-nav-burger:focus {
  outline: none;
}

.d-nav-burger-bar {
  @apply absolute bg-gray-900;
  width: 18px;
  height: 2px;
  transition-property: transform;
}

.d-nav-burger.is-active .d-nav-burger-bar {
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.d-nav-burger-bar:nth-of-type(1) {
  top: 11px;
  transition: top 75ms ease 0.12s, opacity 75ms ease;
}
.d-nav-burger.is-active .d-nav-burger-bar:nth-of-type(1) {
  top: 16px;
  transition: top 75ms ease, transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
}

.d-nav-burger-bar:nth-of-type(2) {
  top: 16px;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 75ms;
}
.d-nav-burger.is-active .d-nav-burger-bar:nth-of-type(2) {
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 0;
}

.d-nav-burger-bar:nth-of-type(3) {
  top: 21px;
  transition: top 75ms ease 0.12s, transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.d-nav-burger.is-active .d-nav-burger-bar:nth-of-type(3) {
  top: 16px;
  transition: top 75ms ease, transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  transform: rotate(-45deg);
}

.show {
  @apply opacity-100;
}
.hide {
  @apply opacity-0 hidden;
}

.d-mask,
.d-nav-drawer {
  top: 64px !important;
  height: calc(100% - 64px);
}

.d-nav-drawer {
  @apply transition-all duration-300 ease-out transform fixed inset-y-0 right-0 flex flex-col justify-between bg-white;
  width: 265px;
  height: calc(100vh - 64px);
}

.d-nav-drawer.closed {
  @apply opacity-75 shadow-none;
  transform: translateX(100%);
}

.d-nav-drawer.open {
  @apply opacity-100 shadow-lg;
  transform: translateX(0);
}
</style>
