import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/assets/scss/_variables";` },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.privatbank.ua',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
