<template>
  <Suspense>
    <v-app>
      <router-view></router-view>
    </v-app>
  </Suspense>
   <GlobalLoading />
</template>
<script setup lang="ts">
import GlobalLoading from '@/components/GlobalLoading.vue'
</script>
<!-- 사용법
import { useLoadingStore } from '@/stores/loading'

const loading = useLoadingStore()

loading.show()

try {
  const res = await api.get('/data')
  // 처리...
} finally {
  loading.hide()
} -->