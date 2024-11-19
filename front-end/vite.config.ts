import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true, //true：vite项目启动时自动打开浏览器
    host: 'localhost', // 如果将此设置为 '0.0.0.0' 或者 true 将监听所有地址，包括局域网和公网地址。此设置可以让同一局域网下的其他电脑访问本机 url 地址。
    port: 5173, // 端口这里可以修改
    proxy: {
      '/api': {
        target: 'http://localhost:19002', // 从环境变量文件取值
        changeOrigin: true, // 支持跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
