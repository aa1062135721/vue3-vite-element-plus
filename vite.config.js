// 通过引入vue插件来完成对vue的支持,须在plugins中注册
import vue from '@vitejs/plugin-vue'
// 通过引入defineConfig来加入代码提示
import { defineConfig } from 'vite'
const { resolve } = require('path')
export default defineConfig({
  define: {
    'process.env': {
      VUE_APP_API:'http://www.baidu.com/'
    }
  },
  base: '',
  //1.别名配置
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
    ],
  },
  //2.插件相关配置
  plugins: [vue()],
  //3.服务有关配置
  server: {
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8000,
    https: false,
    // proxy: {
    //   '/api': {
    //     /* 目标代理服务器地址 */
    //     target: 'http://test.rocksea.net.cn:9000/',
    //     /* 允许跨域 */
    //     changeOrigin: true,
    //   },
    // },
  }
})