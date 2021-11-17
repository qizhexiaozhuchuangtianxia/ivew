import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Layout from '../pages/Layout.vue'
import Error from '../pages/Error.vue'
import {filterAsyncRouter} from '../utils/router.js'
import ShopManage from '../views/shopManage'
import UserManage from '../views/userManage'
import BrandManage from '../views/brandManage'
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
      {
        path: '/shopManage',
        name: 'shopManage',
        component: ShopManage
      }, {
        path: '/userManage',
        name: 'userManage',
        component: UserManage
      }, {
        path: '/brandManage',
        name: 'brandManage',
        component: BrandManage
      },
        // {path: '/home',name: '首页',component:Home},
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // history: 'hash',
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
