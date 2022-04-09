import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Detail from '@/views/Detail'
import Cart from '@/views/Cart'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Index,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'detail',
        component: Detail
      },
      {
        path: 'cart',
        component: Cart
      }
    ]
  },
  {
    path: '/login',
    name: "login",
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
