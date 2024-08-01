<template> 
  <base-layout>
      <app-project-info :project="currentProject"/>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import AppProjectInfo from '@/components/projects-page/project-page/AppProjectInfo.vue'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Project } from '@/models' 
import { project1 } from '@/constants/constants'
import { routingService } from '@/services'

const routing = routingService()

const projects = ref<Project[]>([
  {
    id: 1,
    title: '@trojmiasto.swoi',
    description: 'Наша група була створена у 2022 році з власних інтересів. Спочатку ми планували рекламувати тільки власні проєкти, але незабаром зрозуміли, що наша сила полягає в якості створюваного контенту. Тому ми зробили групу загальнодоступною для реклами, гарантуючи вам якісну аудиторію та максимальний вплив у вашій сфері. Більше того, наша група активно розвивається щодня, підкорюючи нові вершини.',
    secondDescription: 'На сторінці Trojmiasto Swoi ви знайдете не тільки останні новини, але й надихаючі місця, чудові ресторани та інформацію про майбутні заходи. Приєднуйтесь до нас, щоб бути в курсі всіх подій у нашому місті!',
    image: project1
  }
])

const currentProject = ref<Project | null>(null)

const route = useRoute()

onBeforeMount(() => {
  if(route.params.projectId) {

    const response = projects.value.filter((item: Project) => {
      return item.id === Number(route.params.projectId);
    });

    if(response.length > 0) {
      currentProject.value = response[0]
    }
    else {
      routing.toError()
    }
  }
})

</script>

<style scoped lang="scss">

</style>