import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import {filterAsyncRouter} from '../utils/router.js'
import Layout from '../views/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: '用户登录'
  }
   
  },
  {
    path: '/layout',
    name: 'Layout',
    component:  Layout
  }
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
router.beforeEach((to, from, next) => {
  // routerGo(to, next)
  let userToken = localStorage.getItem('userToken')
  if (to.path === "/") {
    next();
  } else {
    if (userToken) {
      next();
    } else {
      next({
        path: '/'
      });
    }
  }
});
export default router
