import { createContext } from 'react';

import { AuthContextValue } from './AuthContext.type';

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
