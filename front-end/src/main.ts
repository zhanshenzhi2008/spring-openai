import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import router from './router'

import {createPinia} from 'pinia'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
// pinia其实就是vuex5 状态管理
app.use(createPinia())

// Element Plus 提供了全局配置国际化的配置。 Element Plus 组件 默认 使用英语
//  app.use(ElementPlus, {
//      locale: zhCn,
//  })


app.mount('#app')
