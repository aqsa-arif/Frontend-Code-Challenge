import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      '@pages': `${path.resolve(__dirname, "./src/pages/")}`,
      '@components': `${path.resolve(__dirname, "./src/components/")}`, 
      '@layout': `${path.resolve(__dirname, "./src/layout/")}`,
      '@styles': `${path.resolve(__dirname, "./src/styles/")}`,
      '@assets': `${path.resolve(__dirname, "./src/assets/")}`,
      '@services': `${path.resolve(__dirname, "./src/services/")}`,
      '@utils': `${path.resolve(__dirname, "./src/utils/")}`,
      '@routes': `${path.resolve(__dirname, "./src/routes/")}`,
      '@common': `${path.resolve(__dirname, "./src/components/common")}`, 
      '@cards': `${path.resolve(__dirname, "./src/components/cards")}`,  
      '@context': `${path.resolve(__dirname, "./src/context")}`,  
      '@apiconfig': `${path.resolve(__dirname, "./src/apiconfig")}`,  
    }
  }
})
