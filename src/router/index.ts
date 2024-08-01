import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('../views/CasesView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:projectId',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/:all(.*)*',
      name: 'Error',
      component: () => import('../views/ErrorView.vue')
   }
  ],
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
        return{
            el: to.hash,
            top: -80,
            behavior: 'smooth',
        }
    }
    else{
        return { 
            behavior: 'smooth',
            top: 0 
        }
        
    }
  }
})

export default router
