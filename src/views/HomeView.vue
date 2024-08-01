<template>
  <base-layout>
    <app-full-screen/>
    <app-info-screen id="aboutus"/>
    <app-form id="contact"/>
  </base-layout>
</template> 

<script lang="ts" setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import AppFullScreen from '@/components/home-page/AppFullScreen.vue';
import AppInfoScreen from '@/components/home-page/AppInfoScreen.vue'
import AppForm from '../components/base-components/AppForm.vue';

</script>

<style scoped lang="scss">

</style>