<template>
  <app-header/>
  <main class="main">
    <div class="main__content">
      <slot/>
    </div>
  </main>
  <app-footer/>
</template>

<script setup lang="ts">
import AppHeader from '@/components/base-components/AppHeader.vue'
import AppFooter from '@/components/base-components/AppFooter.vue'

</script>

<style scoped lang="scss">


</style>