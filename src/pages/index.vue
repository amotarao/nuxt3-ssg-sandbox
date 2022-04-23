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
  <div class="p-4 flex flex-col items-center gap-2">
    <h1 class="text-2xl">Hello World!</h1>
    <p class="">Count: {{ count }}</p>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-slate-900 text-white font-mono" @click="decrement(10)">--</button>
      <button class="px-4 py-2 bg-slate-900 text-white font-mono" @click="decrement()">-</button>
      <button class="px-4 py-2 bg-slate-900 text-white font-mono" @click="increment()">+</button>
      <button class="px-4 py-2 bg-slate-900 text-white font-mono" @click="increment(10)">++</button>
    </div>
  </div>
</template>
