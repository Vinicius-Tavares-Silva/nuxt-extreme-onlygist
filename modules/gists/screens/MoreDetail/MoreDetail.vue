<script setup lang="ts">
import PublicHeadline from '@/modules/gists/components/PublicHeadline/PublicHeadline.vue'
import GistCodeSnippet from '@/modules/gists/components/CodeSnippet/CodeSnippet.vue'
import LazyDialogPaymentSuccess from '@/modules/payments/components/DialogPaymentSuccess/DialogPaymentSuccess.vue'
import LazyDialogPaymentError from '@/modules/payments/components/DialogPaymentError/DialogPaymentError.vue';

const route = useRoute()
const isPaymentSucecessfully = ref<boolean>(false)
const isPaymentFail = ref<boolean>(false)



onMounted(() => {
  const { success_payment, fail_payment } = route.query

  if (success_payment) {
    isPaymentSucecessfully.value = true
  }

  if (fail_payment) {
    isPaymentFail.value = true
  }
})
</script>

<template>
  <PublicHeadline />

  <GistCodeSnippet />
  <LazyDialogPaymentSuccess v-model:visible="isPaymentSucecessfully" />
  <LazyDialogPaymentError v-model:visible="isPaymentFail" />
</template>