import { ClientService } from 'shared/types';

export type ApiResponse<TData = unknown, TConfig = unknown> = {
  data: TData;
  config: TConfig | null;
};

export type ApiClientContextValue = {
  service: ClientService;
};
