import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons'
// 导入转换图标名称的函数
// import { transElIconName } from './utils/utils.js'  
// 统一注册el-icon图标
// for(let iconName in ElIconModules){
//     app.component(transElIconName(iconName),ElIconModules[iconName])
// }
import '@styl/app.styl'
let creatApps = createApp(App)
creatApps.use(ElementPlus)
creatApps.use(Vuex)
creatApps.use(store)
creatApps.use(router)
creatApps.mount('#app')
for ( let iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
         creatApps.component(iconName,ElIconModules[iconName])
    }
}
// createApp(App).use(ElementPlus).use(store).component(...iconName,item).use(router).mount('#app')