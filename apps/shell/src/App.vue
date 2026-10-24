<script setup lang="ts">
import CartRemote from './components/CartRemote.vue';
import { CART_EVENTS, type AddCartItemPayload } from '@pharmacy/contracts';

function addToCart() {
  const item: AddCartItemPayload = {
    id: 3,
    name: 'Ибупрофен',
    price: 180,
    quantity: 1,
  };
  window.dispatchEvent(
    new CustomEvent(CART_EVENTS.ADD_ITEM, {
      detail: item,
    }),
  );
}
</script>

<template>
  <main>
    <h1>Pharmacy — Vue Shell</h1>

    <button @click="addToCart">
      Добавить ибупрофен в корзину
    </button>

    <h2>Корзина из React:</h2>

    <CartRemote />
  </main>
</template>
