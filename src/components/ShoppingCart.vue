<template>
  <div id="cart" class="fixed bottom-0 right-0 left-0 z-10">
    <transition name="slide">
      <div
        v-if="slideActive"
        tabindex="-1"
        role="alert"
        class="w-full bg-gray-700 text-white flex items-center justify-between p-3 pr-5 lg:p-4 focus:outline-none"
      >
        <button
          @click="$emit('dismiss', false)"
          aria-label="Dismiss this notification"
          class="z-1 absolute top-0 right-0 focus:outline-none"
          style="min-width: 44px; min-height: 44px;"
        >
          <svg
            viewBox="0 0 24 24"
            class="fill-current text-white absoluteCenter"
            aria-hidden="true"
            focusable="false"
            style="width: 24px; height: 24px; overflow: visible;"
          >
            <path
              d="M13.06 12l5.72-5.72c.292-.292.292-.767 0-1.06-.294-.293-.768-.293-1.06 0L12 10.94 6.28 5.22c-.293-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06L10.94 12l-5.72 5.72c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.074.53-.22L12 13.06l5.72 5.72c.145.146.337.22.53.22.19 0 .383-.074.53-.22.292-.293.292-.768 0-1.06L13.06 12z"
            ></path>
            <circle
              class="rounded-full d-icon-hover sm:fill-current"
              fill="transparent"
              cx="50%"
              cy="50%"
              r="75%"
            ></circle>
          </svg>
        </button>
        <div>Item added.</div>
      </div>
    </transition>

    <div class="relative w-full bg-gray-800 text-white flex items-center justify-between px-4 z-20">
      <div class="">Checkout your order</div>
      <span class="pt-3 pb-2 pl-6">
        <button type="button" class="relative flex justify-center focus:outline-none">
          <span class="inline-block pb-2">
            <svg
              class="w-8 h-8 fill-current text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 512 512"
            >
              <path
                d="M194 3.9c-4.7 1.5-9.5 4.4-12.6 7.7-1.8 2.1-14.3 26.7-31.4 62.3l-28.4 59-47.1.3c-46.9.3-47 .3-53 2.7-8.3 3.3-16.4 11.5-19.4 19.6C.2 160.4-.1 163 .2 170c.4 9.6 2.5 15 8.5 22l3.6 4.2 24.3 147.2C63 503.3 61.4 495.8 69.4 502.6c7.9 6.8-4.1 6.4 186.6 6.4s178.7.4 186.6-6.4c8-6.8 6.4.7 32.8-159.2l24.3-147.2 3.6-4.3c6.1-7.1 8.1-12.3 8.5-21.9.3-6.9 0-9.6-1.9-14.5-3-8.1-11.1-16.3-19.4-19.6-6-2.4-6.1-2.4-53-2.7l-47.1-.3L362.1 74c-17.4-36.1-29.6-60.2-31.5-62.3-9.4-10.3-25.8-11.2-36.4-2.1-6.6 5.6-8.6 10.4-8.7 19.9v8l22.8 47.1c12.5 25.9 22.7 47.3 22.7 47.7 0 .4-33.7.7-75 .7-41.2 0-75-.3-75-.6 0-.4 10.2-21.9 22.7-47.8 21.5-44.5 22.8-47.5 23.1-53.7.3-5.2-.1-7.7-1.8-11.8C220 7.6 205.5.4 194 3.9z"
              />
            </svg>
          </span>
          <span class="text-sm font-bold absoluteCenter">{{ length }}</span>
          <span class="hiddenVisually">Open the cart. There are {{ length }} items in cart.</span>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShoppingCart',
  props: {
    slideActive: Boolean
  },
  computed: {
    ...mapGetters({
      length: 'cart/numberOfProducts'
    })
  }
};
</script>

<style lang="postcss" scoped>
.slide-enter-active,
.slide-leave-active {
  @apply transition duration-300;
}
.slide-enter,
.slide-leave-to {
  @apply transform opacity-0 translate-y-12;
}

.d-icon-hover {
  opacity: 0.15;
  transition: all 0.2s ease-out;
  transform-origin: center;
}
</style>
