import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AcomodacoesView from '../views/AcomodacoesView.vue'
import ReservasView from '@/views/ReservasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aula_vue_1/src/views/AcomodacoesView.vue',
    name: 'acomodacoes',
    component: AcomodacoesView
  },
  {
    path: '/aula_vue_1/src/views/ReservasView.vue',
    name: 'reservas',
    component: ReservasView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
