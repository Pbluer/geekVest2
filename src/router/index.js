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
    path: '/carrinho',
    name: 'carrinho',
    component: () => import('../views/Carrinho/Carrinho.vue'),
  },
  {
    path: '/finalizarPedido',
    name: 'finalizarPedido',
    component: () => import('../views/FinalizarPedido/FinalizarPedido.vue'),
  },
  {
    path: '/camisa',
    name: 'buyTshirt',
    component: () => import('../views/Camisa/Camisa.vue'),
  },
  {
    path: '/camisa/:id',
    name: 'camisaSelecionada',
    component: () => import('../views/CamisaSelecionada/CamisaSelecionada.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
