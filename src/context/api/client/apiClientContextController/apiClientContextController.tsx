import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ClientHttpService } from 'api/axios/services/client/ClientHttpService';
import { ApiClientContextValue } from 'context/api/client/apiClientContext/ApiClientContext.types';
import { ApiClientContext } from 'context/api/client/apiClientContext/ApiClientContext';

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
