<script setup lang="ts">
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself';
import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types';

const { user } = inject(myselfKey) as MyselfContextProvider

</script>

<template>
  <div>
    <h1>Panel</h1>
  </div>
</template>