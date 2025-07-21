import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'container',
       filename: 'remoteEntry.js',
      remotes: {
        // plp: 'https://plppage.onrender.com/assets/remoteEntry.js',
        // pdp: 'https://pdppage.onrender.com/assets/remoteEntry.js',

        // plp: 'http://localhost:5004/assets/remoteEntry.js',
        // pdp: 'http://localhost:5005/assets/remoteEntry.js',


        plp: 'https://plppage-blue.vercel.app/assets/remoteEntry.js',
        pdp: 'https://pdppage.vercel.app/assets/remoteEntry.js',
      },
       exposes: {
        './App': './src/App.tsx',
      },
        shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],

  build: {
    

    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
  
  },
})
