import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/components/index.ts'],
  format: ['esm'],
  target: 'node14',
  splitting: true,
  dts: true,
  tsconfig: './tsconfig.json',
  clean: true,
})
