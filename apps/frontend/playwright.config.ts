import { defineConfig, devices } from '@playwright/test';
import dotenvFlow from 'dotenv-flow';

dotenvFlow.config({
  node_env: process.env.NODE_ENV ?? 'development',
  path: process.cwd()
});

const port = Number(process.env.VITE_PORT ?? 5173);

export default defineConfig({
  testDir: './tests/playwright',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: `http://localhost:${port}`,
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: 'pnpm run dev -- --host',
    port,
    reuseExistingServer: !process.env.CI
  }
});
