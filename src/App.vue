<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { PROJECT_NAME } from '@/constants/constants'

document.title = PROJECT_NAME
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
