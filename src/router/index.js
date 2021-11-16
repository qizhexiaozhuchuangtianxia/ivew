import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'
import Error from '../views/Error.vue'
import Task from '../components/task/task.vue'
import {filterAsyncRouter} from '../utils/router.js'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  },
  //  {
  //   path: '/task',
  //   name: 'task',
  //   component: Task
  // },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
        // {path: '/home',name: '首页',component:Home},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const routerGo =(to, next)=> {
  router.addRoutes(filterAsyncRouter());
  next({ ...to, replace: true })
}

// 无token调整登录页面，TODO token是否失效
// router.beforeEach((to, from, next) => {
//   let userToken = localStorage.getItem('userToken')
//   if (to.path === "/") {
//     next();
//   } else {
//     if (userToken) {
//       next();
//     } else {
//       next({
//         path: '/'
//       });
//     }
//   }
// });
export default router
