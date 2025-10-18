# Contributing Guide

Thank you for contributing to the Acme monorepo! This document describes how to get set up locally, run the tooling, and follow the project's conventions.

## Prerequisites

- **Node.js** ≥ 18.18.0 (LTS recommended)
- **pnpm** ≥ 9

> Install pnpm via `corepack enable` or follow the instructions at [pnpm.io/installation](https://pnpm.io/installation).

## Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Create environment files**
   Each app uses [`dotenv-flow`](https://github.com/kerimdzhanov/dotenv-flow) to manage environment variables. Copy the provided samples and adjust the values for your machine:
   ```bash
   cp apps/backend/.env.example apps/backend/.env.local
   cp apps/frontend/.env.example apps/frontend/.env.local
   ```
   `dotenv-flow` automatically merges values from `.env`, `.env.local`, and environment-specific files such as `.env.development`. Use `.env.local` for secrets that should not be committed.

3. **Run applications**
   ```bash
   pnpm dev
   ```
   The Turborepo pipeline runs each app's `dev` script in parallel. You can target a single workspace via filters, for example:
   ```bash
   pnpm dev --filter @acme/backend
   pnpm dev --filter @acme/frontend
   ```

## Scripts & Tooling

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Starts all applications in development mode via Turborepo. |
| `pnpm build` | Builds every package and application. |
| `pnpm lint` | Runs ESLint across workspaces. |
| `pnpm test` | Executes Jest (backend), Vitest (frontend, shared packages), and Playwright tests. |
| `pnpm format` | Checks formatting using Prettier. |
| `pnpm format:write` | Applies Prettier formatting. |

> ℹ️  Run `pnpm exec playwright install` once to download the required browsers before executing Playwright tests locally.

### Workspace-specific commands

Run any script inside an individual workspace with filters:

```bash
pnpm --filter @acme/backend test
pnpm --filter @acme/frontend test:unit
pnpm --filter @acme/frontend test:e2e
pnpm --filter @acme/ui build
```

## Commit Conventions

This repository enforces [Conventional Commits](https://www.conventionalcommits.org/) via `commitlint`.

- Husky hooks run `pnpm lint-staged` on staged files and validate commit messages.
- Use the conventional commit format, for example: `feat(frontend): add dashboard widget`.

## Code Style

- TypeScript configuration is shared via `tsconfig.base.json`.
- ESLint and Prettier are configured at the repository root and run automatically in pre-commit hooks.
- UI components live in `packages/ui` and should typically export typed React components.
- Shared logic should be added to `packages/utils` and imported via workspace package names (`@acme/utils`).

## Testing Strategy

- **Backend**: Jest with `ts-jest` for unit tests (`apps/backend/test`).
- **Frontend**: Vitest for unit tests (`apps/frontend/tests/unit`) and Playwright for end-to-end tests (`apps/frontend/tests/playwright`).
- **Shared packages**: Vitest, colocated with source files (e.g., `packages/ui/src`).

Use `pnpm test` to run the full test suite or target a specific package with `pnpm --filter <workspace> test`.

## CI Expectations

Although CI pipelines are not part of this setup, all code must pass linting, tests, and formatting locally. Husky hooks help prevent accidental commits that break these rules.

Happy building! 🚀
