import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons'
import '@styl/app.styl'

const createAppInstance = createApp(App)

for (let iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
        createAppInstance.component(iconName, ElIconModules[iconName])
    }
}
import '@styl/app.styl'

createAppInstance.use(ElementPlus).use(Vuex).use(store).use(router).mount('#app')