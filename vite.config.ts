import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://192.168.6.4:9820',
        changeOrigin: true,
        rewrite: (path) => path
      },
    }
  }
})
