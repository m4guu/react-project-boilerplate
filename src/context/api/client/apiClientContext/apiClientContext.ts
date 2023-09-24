import { createContext } from 'react';

import { ApiClientContextValue } from './apiClientContext.types';

export const ApiClientContext = createContext<ApiClientContextValue | undefined>(undefined);
