import { createContext } from 'react';

import { ApiClientContextValue } from 'context/api/client/apiClientContext/ApiClientContext.types';

export const ApiClientContext = createContext<ApiClientContextValue | undefined>(undefined);
