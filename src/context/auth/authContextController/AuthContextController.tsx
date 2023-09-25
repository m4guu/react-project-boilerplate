import { useMemo } from 'react';

import { AuthContext } from '../authContext/AuthContext';
import { AuthContextValue } from '../authContext/AuthContext.type';

export const AuthContextController: React.FCWithChildren = ({ children }) => {
  // TODO: change dummy value
  const value: AuthContextValue = useMemo(
    () => ({
      isAuthenticating: false,
      isAuthenticated: false,
      login: () => {},
      logout: () => {},
      user: {
        firstName: 'first name',
        lastName: 'last name',
        username: 'username',
      },
    }),
    [],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
