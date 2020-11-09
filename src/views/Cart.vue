<template>
  <div id="cart">
    <div class="">back</div>
    <div class="">overview</div>
    <div class="">go pay</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cart/cartProducts', 'cartTotalPrice'])
};
</script>

<style></style>
