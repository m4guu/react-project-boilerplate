import { useContext } from 'react';

//  custom hook for safely accessing a React context
export const useSafeContext = <T>(context: React.Context<T | undefined>): T => {
  const ctx = useContext(context);

  if (ctx === undefined) {
    throw new Error(`${context.displayName || 'Context'} must be within its provider.`);
  }

  return ctx;
};
