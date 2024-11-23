import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base URL for deployment (use the repo name if deploying to GitHub Pages)
  base: "/shoppingreact", 
  plugins: [react()],
})

