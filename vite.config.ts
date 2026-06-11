import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/graphql': {
        target: ['http://localhost:8080', 'http://13.127.192.103:8080'],
        changeOrigin: true,
      },
      '/login': {
        target: ['http://localhost:8080', 'http://13.127.192.103:8080'],
        changeOrigin: true,
      },
    },
  },
});

