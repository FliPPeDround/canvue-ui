import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'canvue-ui': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
    },
  },
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
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
