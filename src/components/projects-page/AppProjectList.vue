<template>
  <div class="projects">
    <div class="projects__content">
      <div class="projects__wrapper">
        <app-project-item v-for="(project, index) in projects" :key="index" :item="project" />
      </div>
      <div class="soon_more">
        <h2>Незабаром більше!</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppProjectItem from "./AppProjectItem.vue"; 
import type { Project } from '@/models'
import { project1 } from '@/constants/constants'
import { ref } from 'vue'

const projects = ref<Project[]>([
  {
    id: 1,
    title: '@trojmiasto.swoi',
    description: 'Наша група була створена у 2022 році з власних інтересів. Спочатку ми планували рекламувати тільки власні проєкти, але незабаром зрозуміли, що наша сила полягає в якості створюваного контенту. Тому ми зробили групу загальнодоступною для реклами, гарантуючи вам якісну аудиторію та максимальний вплив у вашій сфері. Більше того, наша група активно розвивається щодня, підкорюючи нові вершини.',
    secondDescription: '',
    image: project1
  }
])

</script>

<style scoped lang="scss">
.projects {
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(to bottom, #06266F, #4671D5);
		&__content {
      min-height: 100vh;
      width: 100%;
      padding: 0px 60px;
      padding-top: $headerHeight;
		}

		&__wrapper {
      height: 100%;
      width: 100%;
      padding: 20px 0px;
      display: flex;
      flex-direction: column;

		}
}

.soon_more {
  text-align: center;
  h2 {
    font-size: 48px;
    font-family: $juraFont;
    padding-bottom: 15px;

    &::first-letter {
      color: $textYellowColor;
    }
  }
}

@media (max-width: 1046px) {
  .projects {
		&__content {
      padding: 0px 20px;
      padding-top: $headerHeight;
		}
  }
}

</style>