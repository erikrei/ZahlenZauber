import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // wird benötigt, damit HMR auch mit einem Docker Container funktioniert
    },
    host: true,
    strictPort: true,
    port: 4200
  }
})
