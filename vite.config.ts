import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'canvue-ui': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  // define: {
  //   'process.env': {},
  // },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue-demi', 'vue'],
      output: {
        globals: {
          'vue': 'Vue',
          'vue-demi': 'VueDemi',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
})
