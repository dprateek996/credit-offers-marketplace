# Acme Monorepo

This repository contains a TypeScript-based monorepo managed with pnpm workspaces and Turborepo.

## Workspace Structure

- `apps/backend` – Node.js backend starter with Jest and dotenv-flow configuration.
- `apps/frontend` – Vite + React application with Vitest and Playwright test scaffolding.
- `packages/ui` – Shared React UI components packaged with tsup.
- `packages/utils` – Shared TypeScript utilities consumed by applications and other packages.

Refer to [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for workflow details and development conventions.
