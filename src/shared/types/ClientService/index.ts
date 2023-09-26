/* eslint-disable @typescript-eslint/no-explicit-any */
export type ClientService = {
  get: <T = unknown>(path: string) => Promise<T>;
  post: <T = void>(path: string, data?: any) => Promise<T>;
  patch: <T = void>(path: string, data?: any) => Promise<T>;
  put: <T = void>(path: string, data?: any) => Promise<T>;
  delete: <T = void>(path: string, data?: any) => Promise<T>;
};
