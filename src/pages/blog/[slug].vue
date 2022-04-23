<script lang="ts" setup>
const route = useRoute();

const { data, pending } = useAsyncData(
  'blog',
  async () => {
    return {
      title: route.params.slug as string,
    };
  },
  {
    server: true,
  }
);
</script>

<template>
  <div class="p-4 flex flex-col gap-2">
    <p v-if="pending">読み込み中</p>
    <div v-else>
      <h1 class="text-2xl">{{ data.title }}</h1>
    </div>
  </div>
</template>
