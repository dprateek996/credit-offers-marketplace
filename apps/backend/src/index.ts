import { env } from './env';
import { formatGreeting } from '@acme/utils';

export const bootstrap = (): string => {
  const message = `${formatGreeting('Backend')} running as ${env.serviceName} on port ${env.port}`;
  console.log(message);
  return message;
};

if (import.meta.url === `file://${process.argv[1]}`) {
  bootstrap();
}
