export const formatGreeting = (subject: string): string => {
  const safeSubject = subject.trim() || 'there';
  return `Hello, ${safeSubject}!`;
};

export const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === 'string' && value.trim().length > 0;
};
