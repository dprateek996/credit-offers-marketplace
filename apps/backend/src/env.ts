import dotenvFlow from 'dotenv-flow';

dotenvFlow.config({
  node_env: process.env.NODE_ENV ?? 'development',
  path: process.cwd()
});

const numberFrom = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: numberFrom(process.env.PORT, 4000),
  serviceName: process.env.SERVICE_NAME ?? 'backend-service'
};
