import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import dotenvFlow from 'dotenv-flow';

dotenvFlow.config({
  node_env: process.env.NODE_ENV ?? 'development',
  path: process.cwd()
});

export default defineConfig(({ mode }) => {
  dotenvFlow.config({ node_env: mode, path: process.cwd() });

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: Number(process.env.VITE_PORT ?? 5173)
    },
    define: {
      __APP_ENV__: JSON.stringify(process.env.APP_ENV ?? mode)
    }
  };
});
