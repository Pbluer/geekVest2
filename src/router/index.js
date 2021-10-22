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
    path: '/camisa',
    name: 'buyTshirt',
    component: () => import('../views/Camisa/Camisa.vue'),
  },
  {
    path: '/camisa/:id',
    name: 'camisaSelecionada',
    component: () => import('../views/Buy/Buy.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
