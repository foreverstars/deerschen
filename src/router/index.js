import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import NotFound from '@/components/NotFound.vue'

import Article from '@/components/pages/Article.vue'
import Beauty from '@/components/pages/Beauty.vue'
import User from '@/components/pages/User.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'article',
        name: 'Article',
        component: Article
      },{
        path: 'beauty',
        name: 'Beauty',
        component: Beauty
      },{
        path: 'user',
        name: 'User',
        component: User
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    component: NotFound,
    name: 'NotFound'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new Router({ mode: 'history', routes})
export default router
