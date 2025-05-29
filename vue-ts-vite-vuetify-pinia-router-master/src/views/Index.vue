<template>
  <MessageDisplay :message="message" />
  <TabMenu v-model="tab" />
  <component :is="currentTabComponent" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import api from '../api'
import MessageDisplay from '@/components/MessageDisplay.vue'
import TabMenu from '@/components/TabMenu.vue'

import ReleaseTab from '@/components/tabs/ReleaseTab.vue'
import ReworkTab from '@/components/tabs/ReworkTab.vue'
import Contents1Tab from '@/components/tabs/Contents1Tab.vue'
import Contents2Tab from '@/components/tabs/Contents2Tab.vue'
import EquipTab from '@/components/tabs/EquipTab.vue'

const message = ref('안녕하세요?')
const tab = ref('ReleaseTab')


const currentTabComponent = computed(() => {
  switch (tab.value) {
    case 'ReleaseTab': return ReleaseTab
    case 'ReworkTab': return ReworkTab
    case 'Contents1Tab': return Contents1Tab
    case 'Contents2Tab': return Contents2Tab
    case 'EquipTab': return EquipTab
    default: return ReleaseTab
  }
})

onMounted(async () => {
  try {
    const response = await api.get<any>('/hello')
    message.value = response.data.message
  } catch (error) {
    console.error('API 호출 에러:', error)
  }
})
</script>
