import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../views/menu/Main'

import Login from '../views/login/Login'
import test from  '../views/test/test'
import cancel from '../views/test/cancel'
Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/login', name: 'Login', component: Login},
    {path: '/',
      meta: { requiresAuth: true },
      component: Main,
      children:[
        {path:'test',name:'test',component:test},
        {path:'cancel',name:'cancel',component:cancel}
      ]
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   let knock_knock = window.localStorage.getItem('knock_knock')
//   if (to.matched.some(
//       record => record.meta.requiresAuth)&& (!knock_knock || knock_knock === null)) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// })

export default router
