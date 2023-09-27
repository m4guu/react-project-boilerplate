import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

/* eslint-disable import/no-default-export */
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: { open: true, port: 3000 },
  build: { outDir: 'build' },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/config/tests/setup.ts',
    include: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.){test,spec}.[jt]s?(x)'],
    css: true,
  },
});
