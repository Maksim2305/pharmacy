<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const container = ref<HTMLElement | null>(null);

let unmountReact: (() => void) | undefined;

onMounted(async () => {
  if (!container.value) return;

  const { mount } = await import('cart/Cart');

  unmountReact = mount(container.value);
});

onUnmounted(() => {
  unmountReact?.();
});
</script>

<template>
  <div ref="container" />
</template>
