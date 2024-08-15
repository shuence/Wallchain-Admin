import path from 'path'
import { defineConfig } from 'vite'
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [ssr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
