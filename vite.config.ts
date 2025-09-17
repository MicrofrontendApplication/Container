import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        // plp: "http://localhost:5004/assets/remoteEntry.js",
        // pdp: "http://localhost:5005/assets/remoteEntry.js",

          plp: "https://plppage5.vercel.app/assets/remoteEntry.js",
           pdp: "https://pdppage5.vercel.app/assets/remoteEntry.js",

      },
      shared: ['react', 'react-dom', 'react-router-dom','react-redux','@reduxjs/toolkit'],
  
    }),
  ],
  server: {
    cors: true,
  },
  build: {
    target: "esnext",
    outDir: "dist",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
