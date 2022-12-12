import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Acomodacoes',
    name: 'acomodacoes',
    component: () => import('../views/AcomodacoesView.vue')
  },
  {
    path: '/Reservas',
    name: 'reservas',
    component: () => import('../views/ReservasView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
