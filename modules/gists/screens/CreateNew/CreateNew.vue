<script setup lang="ts">
import HeadlineEdit from '@/modules/gists/components/HeadlineEdit/HeadlineEdit.vue'
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself'
import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types'

const { user, loading } = inject(myselfKey) as MyselfContextProvider

</script>

<template>
  <WidgetDefault title="Qual gist você quer criar?" class="my-5">
    <HeadlineEdit />
  </WidgetDefault>
</template>