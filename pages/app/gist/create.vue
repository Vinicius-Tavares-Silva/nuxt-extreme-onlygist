<script setup lang="ts">
import CreateNew from '@/modules/gists/screens/CreateNew/CreateNew.vue'

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})

</script>

<template>
  <CreateNew />
</template>