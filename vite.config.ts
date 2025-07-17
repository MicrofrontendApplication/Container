import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        plp: 'https://plppage.onrender.com/assets/remoteEntry.js',
        pdp: 'https://pdppage.onrender.com/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    cors: false,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,

    // 👇 UMD output config
    lib: {
      entry: 'src/main.jsx',
      name: 'MyApp',
      formats: ['umd'],
      fileName: 'my-app'
    },
    rollupOptions: {
      // 👇 Add external if you're building a library and don't want to bundle react etc.
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
