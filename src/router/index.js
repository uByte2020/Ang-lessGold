import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import QuemSomos from '../views/QuemSomos.vue'
import Produtos from '../views/Produtos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/QuemSomos',
    name: 'QuemSomos',
    component: QuemSomos
  },
  {
    path: '/Produtos',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
