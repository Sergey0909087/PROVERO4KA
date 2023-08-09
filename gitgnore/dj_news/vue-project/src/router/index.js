import { createRouter, createWebHistory } from 'vue-router'
import {  PEREMENNA  } from '../pages/Home.vue'
import Home from '../pages/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PEREMENNA.Home,
      name: PEREMENNA.Home,
      component: Home
    }
  ]
})

export default router
