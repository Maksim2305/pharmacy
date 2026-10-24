import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/mount.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5174,
    strictPort: true,
    origin: 'http://localhost:5174',
  },
});
