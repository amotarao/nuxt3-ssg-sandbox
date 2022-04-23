<script lang="ts" setup>
const count = ref<number>(0);

const increment = (value: number = 1): void => {
  count.value += value;
};

const decrement = (value: number = 1): void => {
  count.value -= value;
};
</script>

<template>
  <h1 class="text-2xl">Hello World!</h1>
  <p class="mt-2">Count: {{ count }}</p>
  <div class="flex gap-2 mt-2">
    <button class="px-2 py-1 bg-slate-900 text-white font-mono" @click="decrement(10)">--</button>
    <button class="px-2 py-1 bg-slate-900 text-white font-mono" @click="decrement()">-</button>
    <button class="px-2 py-1 bg-slate-900 text-white font-mono" @click="increment()">+</button>
    <button class="px-2 py-1 bg-slate-900 text-white font-mono" @click="increment(10)">++</button>
  </div>
</template>
