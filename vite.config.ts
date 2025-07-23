import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    
    federation({
      name: 'container',
      remotes: {
        // plp: 'https://plppage.onrender.com/assets/remoteEntry.js',
        // pdp: 'https://pdppage.onrender.com/assets/remoteEntry.js',

        // plp: 'http://localhost:5004/assets/remoteEntry.js',
        // pdp: 'http://localhost:5005/assets/remoteEntry.js',


        plp: 'https://plppage-ruddy.vercel.app/assets/remoteEntry.js',
        pdp: 'https://pdppage.vercel.app/assets/remoteEntry.js',
      },
   shared: ['react', 'react-dom', 'react-router-dom'],
    }),
    
  ],
  server:{
    cors:true
  },
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        assetFileNames: 'index.css',
        manualChunks: undefined
      }
    }
  }
    
  
  
})
