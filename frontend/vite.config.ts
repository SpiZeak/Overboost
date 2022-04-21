import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      includeAssets: [
        'images/favicon.svg',
      ],
      manifest: {
        name: 'Overboost',
        short_name: 'Overboost',
        description: 'Web tuning app',
        theme_color: '#ffffff',
      }
    }),
    react()
  ],
  server: {
    https: true,
    watch: {
      usePolling: true
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
})
