<template>
  <button 
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false"
    :style="(isHovered ? computedHoverStyles : computedBaseStyles)"  
    class="button">
    <slot/></button>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const isHovered = ref<boolean>(false)

const props = defineProps<{
  color?: string,
  backgroundColor?: string,
  hoverColor?: string,
  hoverBackgroundColor?: string,
  paddingX?: string
}>();


const computedBaseStyles = computed(() => ({
  paddingLeft: props.paddingX || '20px',
  paddingRight: props.paddingX || '20px',

  color: props.color || '#06266F',
  backgroundColor: props.backgroundColor || '#F1B939'
}))

const computedHoverStyles = computed(() => ({
  paddingLeft: props.paddingX || '20px',
  paddingRight: props.paddingX || '20px',

  color: props.hoverColor ? props.hoverColor : computedBaseStyles.value.backgroundColor,
  backgroundColor: props.hoverBackgroundColor ? props.hoverBackgroundColor : computedBaseStyles.value.color
}))

</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  font-size: 20px;
  font-family: $juraFont;
  font-weight: bold;
  padding: 8px 0px;
  border-radius: 5px;
  transition: all 200ms;
}
</style>