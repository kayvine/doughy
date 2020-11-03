<template>
  <div class="login">
    <h1>Login</h1>
    <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-gray-800 py-2">
        <label for="username"></label>
        <input v-model="username" type="email" name="username" id="username" />
      </div>
      <div class="flex items-center border-b border-gray-800 py-2">
        <label for="password"></label>
        <input v-model="password" type="password" name="password" id="password" />
      </div>
      <button class="btn" type="button" aria-label="login" @click="login"></button>
    </form>
  </div>
</template>

<script>
import store from '@/store';
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {
      // Authenticate against API
      store.user = this.username;
    }
  }
};
</script>

<style></style>
