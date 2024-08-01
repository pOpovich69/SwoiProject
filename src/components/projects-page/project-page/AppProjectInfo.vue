<template>
  <div class="project">
    <div class="project__content">
      <div class="project__title">
        <h1>{{ project ? project.title : '' }}</h1>
      </div>
      <div class="project__wrapper">
        <div class="project__img">
          <img :src="project ? project.image : ''" alt="img">
        </div>
        <div class="project__text">
          <p>
            {{ project ? project.description : '' }}
          </p>
          <p>
            {{ project ? project.secondDescription : '' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Project } from '@/models' 

defineProps<{
  project: Project | null
}>()

</script>

<style scoped lang="scss">


.project {
  min-height: 100vh;
  background-color: $bgColor;
  &__content {
    padding: 20px 50px;
    padding-top: $headerHeight + 15px;
    min-height: 100vh;
  }

  &__title {
    padding-bottom: 10px;
    text-align: center;
    font-size: 24px;
  }

  &__wrapper {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &__img {
    flex: 1;
    max-width: 500px;
    max-height: 300px;
    padding-bottom: 10px;
    margin-right: 20px;
    img {
      border: 5px solid #FFBF40;
      width: calc(100%);
      height: calc(100%);
      object-fit: cover;
    }
  }

  &__text {
    font-size: 20px;
    flex: 1;
    p {
      margin-bottom: 15px;
      line-height: 2rem;
    }
  }
}

@media (max-width: 1000px) {
  .project {
    &__wrapper {
      flex-direction: column;
    }
    &__img {
      padding-bottom: 0px;
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 471px) {
  .project {
    &__content {
      padding-left: 10px;
      padding-right: 10px;
    }

    &__title {
      font-size: 16px;
    }

    &__text {
      font-size: 16px;
    }
  }
}

</style>