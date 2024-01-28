import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      comps: path.resolve(__dirname, 'src/comps'),
      consts: path.resolve(__dirname, 'src/consts'),
      router: path.resolve(__dirname, 'src/router'),
      styles: path.resolve(__dirname, 'src/styles'),
      types: path.resolve(__dirname, 'src/types'),
      lib: path.resolve(__dirname, 'src/lib'),
    },
  },
})
