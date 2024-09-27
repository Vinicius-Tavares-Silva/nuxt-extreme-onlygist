<script setup lang="ts">

const props = defineProps<{
  value: number | string
  label: string
}>()
</script>

<template>
  <div class="flex flex-col flex-1 bg-white p-5 reounded-xl">
    <span class="font-[Inter] text-4xl text-primary-500 font-bold">{{ props.value }}</span>
    <p class="font-[Inter] text-lg text-gray-700">{{ props.label }}</p>
  </div>
</template>