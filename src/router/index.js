import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DolphinsView from '../views/DolphinsView.vue'
import AboutProjectView from '../views/AboutProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about-me',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/dolphins',
      name: 'dolphins',
      component: DolphinsView
    },
    {
      path: '/about-project',
      name: 'about-project',
      component: AboutProjectView
    }
  ]
})

export default router
