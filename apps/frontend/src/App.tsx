import { Button } from '@acme/ui';
import { formatGreeting } from '@acme/utils';

import { env } from './env';

const App = (): JSX.Element => {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>{formatGreeting('Frontend')}</h1>
      <p>Environment: {env.mode}</p>
      <p>API base URL: {env.apiBaseUrl}</p>
      <Button onClick={() => alert('Shared UI button clicked!')}>Click me</Button>
    </main>
  );
};

export default App;
