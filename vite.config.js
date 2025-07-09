import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tem-na-geladeira-site/', // Caminho para funcionar no GitHub Pages
  plugins: [react()],
})
