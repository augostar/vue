import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lucky  from '../views/Lucky.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    title: '首页',
    component: Home,

  //   children: [
  //     {
  //       path: 'about',
  //       name: 'About',
  //       meta: {
  //         title: '关于'
  //       },
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //     }, {
  //       path: '',
  //       name: 'Car',

  //       meta: {
  //         title: '收银'
  //       },
  //       component: () => import('../views/Car.vue')
  //     }, {
  //       path: 'store',
  //       name: 'Store',
  //       meta: {
  //         title: '仓库'
  //       },
  //       component: () => import('../views/Store.vue')
  //     }, {
  //       path: 'statistics',
  //       name: 'statistics',
  //       meta: {
  //         title: '统计'
  //       },
  //       component: () => import('../views/Statistics.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   meta: {
  //     title: '登录'
  //   },
  //   component: () => import('../views/Login')
  },
  {
    path: '/lucky',
    name: 'lucky',
    meta: {
      title: '抽奖'
    },
    component: Lucky
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // ... 这里配置  来判断 登录是否过期 如果过期 跳转到登陆页面 以及页面的请求拦截
//   const head = document.getElementsByTagName('head')
//   const meta = document.createElement('meta')
//   meta.name = 'author'
//   meta.content = 'Augo'
//   head[0].appendChild(meta)
//   if (to.meta.title) {
//     document.title = '菜乡亲_' + to.meta.title
//   }
//   const login = window.localStorage.getItem('token')
//   if (to.name !== 'login' && !login) {
//     next('/login')
//   } else {
//     next()
//   }
// })
export default router
