import { AxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';

export const requestSuccessInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // TODO: replace with real accessToken when will be created
  const accessToken = '';

  if (accessToken) {
    return {
      ...config,
      withCredentials: true,
      headers: { ...config.headers, Authorization: `Bearer ${accessToken}` } as AxiosRequestHeaders,
    };
  }
  return config;
};
