import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/TheSuccessPage.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/TheProfilePage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/TheLoginPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
