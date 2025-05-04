import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  server: {
    allowedHosts: ['eb34-197-155-73-24.ngrok-free.app', 'localhost', '127.0.0.1'],
  },
})
