import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons'
// import zhLocale from 'element-plus/lib/locale/lang/zh-CN'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// import { use as localeUse } from 'element-plus/lib/locale'

// export default (app) => {
    //   localeUse(lang)
    
    //   app.use(ElButton).use(ElForm).use(ElFormItem)
    // } 
    // import '@styl/app.styl'

// // createApp.config.lang = 'zh-cn'
// createApp.locale('zh-cn', zhLocale)
const createAppInstance = createApp(App)

for (let iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
        createAppInstance.component(iconName, ElIconModules[iconName])
    }
}
import '@styl/app.styl'

createAppInstance.use(ElementPlus).use(Vuex).use(store).use(router).mount('#app')
// createAppInstance.use(ElementPlus,{locale:zhLocale}).use(Vuex).use(store).use(router).mount('#app')