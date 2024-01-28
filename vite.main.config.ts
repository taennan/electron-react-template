import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    alias: {
      consts: path.resolve(__dirname, 'src/consts'),
      lib: path.resolve(__dirname, 'src/lib'),
      router: path.resolve(__dirname, 'src/router'),
      types: path.resolve(__dirname, 'src/types'),
    },
  },
})
