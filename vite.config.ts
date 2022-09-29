import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      'canvas-ui': fileURLToPath(new URL('./components', import.meta.url)),
    },
  },
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./components/index.ts', import.meta.url)),
      name: 'CanvasUi',
      fileName: 'canvas-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
