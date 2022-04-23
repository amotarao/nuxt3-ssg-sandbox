<script lang="ts" setup>
const count = ref<number>(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<template>
  <h1>Hello World!</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
