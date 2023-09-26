/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';

import { axiosClientInstance as client } from '../../axios';
import { ClientService, Error } from 'shared/types';

import { undefinedError } from './constans';

const pluckData = <T>(wrapper: { data: T }) => wrapper.data;
const throwError = (e: AxiosError<Error, any>) => {
  const error: Error = e.response ? e.response.data : undefinedError;
  throw error;
};

export const ClientHttpService: ClientService = {
  get: <T = unknown>(path: string) => client.get<T>(path).then(pluckData).catch(throwError),
  post: <T = void>(path: string, data?: any) => client.post<T>(path, data).then(pluckData).catch(throwError),
  patch: <T = void>(path: string, data?: any) => client.patch<T>(path, data).then(pluckData).catch(throwError),
  put: <T = void>(path: string, data?: any) => client.put<T>(path, data).then(pluckData).catch(throwError),
  delete: <T = void>(path: string, data?: any) => client.delete<T>(path, data).then(pluckData).catch(throwError),
};
