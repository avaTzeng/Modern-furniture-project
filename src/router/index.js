import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/shop/:id',
    name: 'shopWithId',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/shop/:category/:name',
    name: 'shopDetail',
    component: () => import('../views/ShopDetail.vue')
  },
  {
    path: '/shoppingcart',
    name: 'shoppingCart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/thankYou',
    name: 'thankYou',
    component: () => import('../views/ThankYou.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
