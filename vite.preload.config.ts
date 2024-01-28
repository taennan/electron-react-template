import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      consts: path.resolve(__dirname, 'src/consts'),
      lib: path.resolve(__dirname, 'src/lib'),
      router: path.resolve(__dirname, 'src/router'),
      types: path.resolve(__dirname, 'src/types'),
    },
  },
})
