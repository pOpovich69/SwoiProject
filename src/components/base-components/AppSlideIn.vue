<template>
  <div class="slide-in">
    <div class="slide-in__wrapper">
      <div class="slide-in__overlay" @click="emit('toggleSlideIn')"></div>
      <div class="slide-in__content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleSlideIn'): void
}>()

onMounted(() => {
  if(props.isOpen) {
    toggleSlideInMenu()
  }
})

watch(() => props.isOpen, () => {
  toggleSlideInMenu()
})

function toggleSlideInMenu() {
  document.documentElement.classList.toggle('lock');

  const slideInBlock = document.getElementsByClassName('slide-in')
  const slideInContent = document.getElementsByClassName('slide-in__content')
  const slideInOverlay = document.getElementsByClassName('slide-in__overlay')

  if(props.isOpen) {

    (slideInBlock[0] as HTMLElement).style.display  = 'block';
    
    setTimeout(() => {
      (slideInContent[0] as HTMLElement).style.transform = 'translateX(0)';
      (slideInOverlay[0] as HTMLElement).style.opacity = '0.8';
    }, 0)
  }
  else {

    setTimeout(() => {
      (slideInBlock[0] as HTMLElement).style.display  = 'none';
    }, 300);

    (slideInContent[0] as HTMLElement).style.transform = 'translateX(100%)';

    (slideInOverlay[0] as HTMLElement).style.opacity = '0';

  }
}
</script>

<style scoped lang="scss">

$slideInWidth: 250px;

.slide-in {
  display: none;
}

@media (max-width: 851px) {
  .slide-in {
    position: fixed;
    z-index: 999;
    height: 100vh;
    width: 100%;
    display: none;

    &__wrapper {
      height: 100%;
      width: 100%;
      display: flex;
    }

    &__content {
      max-width: $slideInWidth;
      min-width: $slideInWidth;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      z-index: 1000;
      background-color: $headerSlideInColor;
      transform: translateX(100%);
      transition: all 300ms;
    }

    &__overlay {
      width: 100%;
      height: calc(100% + $slideInWidth);
      position: relative;
      z-index: 999;
      opacity: 0;
      background-color: #272727;
      transition: all 300ms;
    }
  }
}
</style>