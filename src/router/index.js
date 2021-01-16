import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import QuemSomos from '../views/QuemSomos.vue'
import Produtos from '../views/Produtos.vue'
import DetalhesProduto from '../views/DetalhesProduto.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detalhes-produto/:_id',
    name: 'detalhes-produto',
    component: DetalhesProduto,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(to, from, savedPosition)
  //   return { x: 0, y: 0 }
  // }
})

export default router
