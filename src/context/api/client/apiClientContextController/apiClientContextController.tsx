import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ApiClientContextValue } from '../apiClientContext/apiClientContext.types';
import { ApiClientContext } from '../apiClientContext/apiClientContext';
import { ClientHttpService } from '../../../../api/axios/services/client/ClientHttpService';

export const ApiClientContextController: React.FCWithChildren = ({ children }) => {
  const queryClient = useMemo(
    () => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }),
    [],
  );

  const ctx: ApiClientContextValue = { service: ClientHttpService };

  return (
    <ApiClientContext.Provider value={ctx}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};
