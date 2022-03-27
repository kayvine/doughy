import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/apple-touch-icon.png'],
      manifest: {
        name: "Doughy. Love for pastry",
        short_name: "Doughy",
        description: "Order for take-out. Or look at our tasty menu.",
        theme_color: "#ffffff",
        display: "standalone",
        display_override: ["window-controls-overlay"],
        icons: [
          {
            "src": "icons/hot-coffee-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "icons/hot-coffee-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ],
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
