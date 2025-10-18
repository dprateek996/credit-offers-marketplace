import { render, screen } from '@testing-library/react';

import App from '../../src/App';

describe('App', () => {
  it('renders headline and environment data', () => {
    render(<App />);

    expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/Environment:/i)).toBeInTheDocument();
    expect(screen.getByText(/API base URL:/i)).toBeInTheDocument();
  });
});
