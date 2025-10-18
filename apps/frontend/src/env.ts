type FrontendEnv = {
  readonly mode: string;
  readonly apiBaseUrl: string;
  readonly featureFlag?: string;
};

const parseEnv = (): FrontendEnv => ({
  mode: import.meta.env.MODE,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000',
  featureFlag: import.meta.env.VITE_FEATURE_FLAG
});

export const env = parseEnv();
