import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
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
for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
        const item = ElIconModules[iconName];
        App.component(iconName, item)
    }
}
 
// import '@/views/login.vue'
import '@styl/app.styl'
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
// 将el-icon的组件名称AbbbCddd转化为i-abbb-cddd形式
// 此前用switch做组件名时因关键字重复报错，所以格式统一加了前缀
// 例：Switch转换为i-switch，ArrowDownBold转换为i-arrow-down-bold
// export function transElIconName(iconName){
//     return 'i'+iconName.replace(/[A-Z]/g,(match)=>'-'+match.toLowerCase())}
