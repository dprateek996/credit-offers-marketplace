import { env } from '../src/env';

describe('environment loader', () => {
  it('provides default values when variables are missing', () => {
    expect(env.port).toBe(4000);
    expect(env.serviceName).toBe('backend-service');
  });
});
