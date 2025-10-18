import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders with provided text', () => {
    render(<Button>Click</Button>);

    expect(screen.getByRole('button', { name: /click/i })).toBeInTheDocument();
  });

  it('applies variant data attribute', () => {
    render(<Button variant="secondary">Secondary</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'secondary');
  });
});
