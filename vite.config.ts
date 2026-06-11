import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env variables from the current directory
  const env = loadEnv(mode, process.cwd(), '');

  // Fallback to the remote server IP or local depending on VITE_API_TARGET env var
  const apiTarget = env.VITE_API_TARGET || 'http://13.127.192.103:8080';

  return {
    plugins: [react()],
    base: '/',
    server: {
      proxy: {
        '/graphql': {
          target: apiTarget,
          changeOrigin: true,
        },
        '/login': {
          target: apiTarget,
          changeOrigin: true,
        },
      },
    },
  };
});

