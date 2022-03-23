<template>
  <div class="login">
    <h1>Login</h1>
    <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-gray-800 py-2">
        <label for="username"></label>
        <input id="username" v-model="username" type="email" name="username" />
      </div>
      <div class="flex items-center border-b border-gray-800 py-2">
        <label for="password"></label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
        />
      </div>
      <button
        class="btn"
        type="button"
        aria-label="login"
        @click="login"
      ></button>
    </form>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'LoginPage',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      // Authenticate against API
      store.user = this.username;
    },
  },
};
</script>
