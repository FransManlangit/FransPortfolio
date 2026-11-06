import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
      "/api": {
        target: "https://frans-portfolio-rho.vercel.app",
        changeOrigin: true,
      },
      },
})
