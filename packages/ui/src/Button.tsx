import type { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
  }
>;

const variantStyles: Record<NonNullable<ButtonProps['variant']>, CSSProperties> = {
  primary: {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem'
  },
  secondary: {
    backgroundColor: 'white',
    color: '#2563eb',
    border: '2px solid #2563eb',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem'
  }
};

export const Button = ({
  children,
  variant = 'primary',
  style,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element => {
  const mergedStyle: CSSProperties = {
    ...variantStyles[variant],
    ...style
  };

  return (
    <button type={type} style={mergedStyle} {...props} data-variant={variant}>
      <span>{children}</span>
    </button>
  );
};
