<template>
  <div ref="popupBlock" class="popup-menu">
    <div class="popup-menu__wrapper">
      <div ref="popupBlockOverlay" class="popup-menu__overlay" @click="emit('togglePopup')"></div>
      <div ref="popupBlockContent" class="popup-menu__content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, onMounted, ref, watch } from 'vue'

const popupBlock = ref<HTMLElement | null>();
const popupBlockOverlay = ref<HTMLElement | null>();
const popupBlockContent = ref<HTMLElement | null>();

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'togglePopup'): void
}>()

onMounted(() => {

  if(props.isOpen) {
    togglePopupMenu()
  }
})

watch(() => props.isOpen, () => {
  togglePopupMenu()
})

async function togglePopupMenu() {
  if(props.isOpen) {
    document.documentElement.classList.toggle('lock');
    (popupBlock.value as HTMLElement).style.display  = 'block';
    setTimeout(() => {
      (popupBlockOverlay.value as HTMLElement).style.opacity = '1';
      (popupBlockContent.value as HTMLElement).style.transform = `scale(1)`;
    }, 0)
  }
  else {
    document.documentElement.classList.toggle('lock');
    (popupBlockOverlay.value as HTMLElement).style.opacity = '0';
    (popupBlockContent.value as HTMLElement).style.transform = `scale(0)`;
    setTimeout(() => {
      (popupBlock.value as HTMLElement).style.display  = 'none';
    }, 300)
  }

}

</script>

<style scoped lang="scss">
.popup-menu {
  display: none;
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100%;
  top: 0;
  padding: 10px;
  &__wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center
  }

  &__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 300ms;
  }
  &__content {
    width: auto;
    height: auto;
    position: relative;
    z-index: 1001;
    background-color: $headerColor;
    border-radius: 10px;
    transition: all 300ms;
    transform: scale(0);
  }
}

</style>