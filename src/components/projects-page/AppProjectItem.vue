<template>
  <div class="project__item">
    <div class="item__content">
      <div class="item__wrapper" :class="getFlexDirection()">
        <div class="item__img">
          <img :src="item.image" alt="img">
        </div>
        <div class="item__info">
          <div class="item__text">
            <div class="item__title">{{ item.title }}</div>
            <p class="item__description">{{ item.description }}</p>
          </div>
          <div class="item__action">
            <my-button @click="routing.toProject(item.id)">Дізнатися більше</my-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'; 
import type { Project } from '@/models';
import { routingService } from '@/services'

const routing = routingService()

const props = defineProps<{
  item: Project,
}>()

function getFlexDirection() {
  return props.item.id % 2 === 0 ? 'row-reverse' : 'row'
}

</script>

<style scoped lang="scss">
.project {
  &__item {
    margin-bottom: 35px;
  }
}

.item {
  &__content {
    width: calc(100%);
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__img {
    flex: 1;
    max-width: 500px;
    max-height: 300px;
    img {
      border: 5px solid #FFBF40;
      width: calc(100%);
      height: calc(100%);
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 40px;
    flex: 1;
  }

  &__text {
    * {
      font-family: $robotoFont;
    }
  }

  &__title {
    font-size: 36px;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 20px;
    margin-bottom: 15px;
  }
}

.row {
  flex-direction: row;
}

.row-reverse {
  flex-direction: row-reverse;
}

@media (max-width: 916px) {
  .item {
    &__wrapper {
      flex-direction: column;
      width: 100%;
    }

    &__info {
      margin-left: 0px;
    }

    &__img {
      margin-right: 0px;
    }

    &__text {
      text-align: center;
    }

    &__title {
      font-size: 36px;
      margin: 5px 0px;
    }

    &__description {
      font-size: 20px;
      margin-bottom: 15px;
    }

    &__action {
      display: flex;
      justify-content: center;
      align-items: center
    }
  }

  .row {
    flex-direction: column;
  }

  .row-reverse {
    flex-direction: column;
  }
}

</style>