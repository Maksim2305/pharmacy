import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'shell',
      remotes: {
        cart: {
          type: 'module',
          name: 'cart',
          entry: 'http://localhost:5174/remoteEntry.js',
        },
      },
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
});
