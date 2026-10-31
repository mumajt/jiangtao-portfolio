import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 子路径部署适配：资源用相对路径引用
  base: './',
  // 构建输出到 docs/，GitHub Pages 可直接选 main 分支 /docs 目录发布
  build: {
    outDir: 'docs',
    emptyOutDir: false,
  },
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
})
