import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout'
Vue.use(Router)
export const routes = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('../views/product')
      },
      {
        path: 'technology',
        name: 'technology',
        component: () => import('../views/technology')
      },
      {
        path: 'import_customer',
        name: 'import_customer',
        component: () => import('../views/import_customer')
      },
      {
        path: 'patent',
        name: 'patent',
        component: () => import('../views/patent')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/news')
      },
      {
        path: 'company_info',
        name: 'company_info',
        component: () => import('../views/company_info')
      },      {
        path: 'join_us',
        name: 'join_us',
        component: () => import('../views/join_us')
      },
      {
        path: 'contact_us',
        name: 'contact_us',
        component: () => import('../views/contact_us')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
]
export default new Router({ routes })
