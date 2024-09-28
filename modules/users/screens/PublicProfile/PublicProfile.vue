<script setup lang="ts">
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'

const route = useRoute()
const router = useRouter()

const handleNavigateToDetail = (id: string) => {
  const { username } = route.params
  router.push(`/${username}/gist/${id}`)
}
</script>

<template>
  <PublicHeadline />

  <WidgetGroup>
    <WidgetGroupLoader :loading="false" :amount="3">
      <WidgetCondensed :value="10" label="Gists do total" />
      <WidgetCondensed :value="5" label="Gists gratuitos" />
      <WidgetCondensed :value="5" label="Gists pagos" />
    </WidgetGroupLoader>
  </WidgetGroup>

  <WidgetDefault title="Todos os gists">
    <GistCardGroupLoader :loading="false">
      <GistCardGroup>
        <GistCardItem
          id="1"
          title="useCurrentUser.ts"
          description="Hook para controlar o **user** logado"
          lang="typescript"
          :price="10"
          @tap="handleNavigateToDetail"
        />
        <GistCardItem />
        <GistCardItem />
        <GistCardItem />
      </GistCardGroup>
    </GistCardGroupLoader>
  </WidgetDefault>
</template>