import { createApp } from 'vue'
import App from './App.vue'
import Api from './request/Api.js'

// 引入路由
import router from './router/index';
// 引入全局状态管理
import store from './store/index';

// 引入ElementUI
import ElementPlus from 'element-plus';
import "element-plus/dist/index.css";

import "@/assets/style.scss";

const app = createApp(App)
app.config.globalProperties.Api = Api
app.use(router).use(store).use(ElementPlus).mount('#app')
