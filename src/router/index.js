import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../pages/PortfolioPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue')
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('../pages/NotFoundPage.vue')
    },
    {
      path: '/project-info',
      name: 'project-info',
      component: () => import('../pages/ProjectInfoPage.vue')
    },
    {
      path: '/ansormed-info-page',
      name: 'ansormed-info-page',
      component: () => import('../pages/AnsormedInfoPage.vue')
    },
    {
      path: '/akademnashir-info-page',
      name: 'akademnashir-info-page',
      component: () => import('../pages/AkademnashirInfoPage.vue')
    },
  ]
})

export default router
