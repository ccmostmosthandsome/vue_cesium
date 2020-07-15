import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views')
  },
  {
    path: '/',
    name: '/login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
