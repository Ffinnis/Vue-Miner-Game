import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/OtherCrypto')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop')
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('../views/Inventory')
  },
  {
    path: '/bank',
    name: 'Bank',
    component: () => import('../views/Bank')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
